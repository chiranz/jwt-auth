import React, { useState } from "react";
import { RouteComponentProps } from "react-router-dom";
import { useLoginMutation } from "../generated/graphql";

interface Props {}

export const Login: React.FC<RouteComponentProps> = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [login] = useLoginMutation();
  return (
    <form
      onSubmit={async e => {
        e.preventDefault();
        const response = await login({
          variables: {
            email: email,
            password: password
          }
        });
        console.log(response);
        history.push("/");
      }}
    >
      <h1>Login Here</h1>
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
      <button type="submit">Login</button>
    </form>
  );
};
