import React from "react";
import { useByeQuery } from "../generated/graphql";

interface Props {}

export const Bye: React.FC<Props> = () => {
  const { data, loading, error } = useByeQuery();
  if (loading) {
    return <h1>Loading...</h1>;
  }
  if (error) {
    console.log(error);
    return <div>Oops something happened!</div>;
  }
  if (!data) {
    return <div>No data</div>;
  }
  return <h1>{data.bye}</h1>;
};
