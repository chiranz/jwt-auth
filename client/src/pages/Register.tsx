import React, { useState } from "react";
import { useRegisterMutation } from "../generated/graphql";
import { RouteComponentProps } from "react-router-dom";

export const Register: React.FC<RouteComponentProps> = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [register] = useRegisterMutation();
  return (
    <form
      onSubmit={async e => {
        e.preventDefault();
        const response = await register({
          variables: {
            email: email,
            password: password
          }
        });
        console.log(response);
        history.push("/");
      }}
    >
      <h1>Register Here</h1>
      <div className="form-field">
        <input
          type="email"
          value={email}
          placeholder="your@email.com"
          name="email"
          onChange={e => setEmail(e.target.value)}
        />
      </div>
      <div className="form-field">
        <input
          type="password"
          value={password}
          placeholder="make it secure"
          name="password"
          onChange={e => setPassword(e.target.value)}
        />
      </div>
      <button type="submit">Sign Up</button>
    </form>
  );
};
