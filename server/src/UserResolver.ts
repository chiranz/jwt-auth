import {
  Resolver,
  Query,
  Mutation,
  Arg,
  ObjectType,
  Field,
  Ctx
} from "type-graphql";
import { hash, compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { User } from "./entity/User";
import { MyContext } from "./MyContext";

@ObjectType()
class LoginResponse {
  @Field()
  accessToken: string;
}

@Resolver()
export class UserResolver {
  @Query(() => String)
  hello() {
    return "hi!";
  }
  @Query(() => [User])
  getUsers() {
    return User.find();
  }
  @Mutation(() => Boolean)
  async register(
    @Arg("email", () => String) email: string,
    @Arg("password", () => String) password: string
  ) {
    const hashedPassword = await hash(password, 12);
    try {
      await User.insert({
        email,
        password: hashedPassword
      });
    } catch (err) {
      console.log(err);
      return false;
    }
    return true;
  }
  @Mutation(() => LoginResponse)
  async login(
    @Arg("email", () => String) email: string,
    @Arg("password", () => String) password: string,
    @Ctx() { res }: MyContext
  ): Promise<LoginResponse> {
    const user = await User.findOne({ where: { email } });
    if (!user) {
      throw new Error("Invalid Login");
    }

    const validPassword = await compare(password, user.password);
    if (!validPassword) {
      throw new Error("Bad password");
    }

    // Login Successful
    res.cookie(
      "jid",
      sign({ userId: user.id }, "Make a try if you can", {
        expiresIn: "7d"
      }),
      { httpOnly: true }
    );
    return {
      accessToken: sign({ userId: user.id }, "you will never know", {
        expiresIn: "20m"
      })
    };
  }
}
