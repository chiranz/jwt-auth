import React from "react";
import { useHelloQuery } from "./generated/graphql";

const App: React.FC = () => {
  const { data, loading } = useHelloQuery();
  if (loading || !data) {
    return <h1>Loading...</h1>;
  }
  return (
    <div>
      <h1>{data.hello}</h1>
    </div>
  );
};

export default App;
