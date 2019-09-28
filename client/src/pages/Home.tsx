import React from "react";
import { useGetUsersQuery } from "../generated/graphql";

interface Props {}

export const Home: React.FC<Props> = () => {
  const { data } = useGetUsersQuery({ fetchPolicy: "network-only" });
  if (!data) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <div>Users:</div>
      <ul>
        {data.users.map(user => {
          return (
            <li key={user.id}>
              {user.email} {user.id}
            </li>
          );
        })}
      </ul>
    </div>
  );
};
