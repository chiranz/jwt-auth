import { Entity, PrimaryGeneratedColumn, Column, BaseEntity } from "typeorm";
import { ObjectType, Field, Int } from "type-graphql";

/*
@ObjectType is used to tell the schema that we will query through graphql server for User Object
@Field is used to expose the fields  when query is done against User Model 

*/

@ObjectType()
@Entity("users")
export class User extends BaseEntity {
  @Field(() => Int)
  @PrimaryGeneratedColumn()
  id: number;

  @Field()
  @Column("text")
  email: string;

  @Column("text")
  password: string;

  @Field()
  @Column("int", { default: 0 })
  tokenVersion: number;
}
