import React, { useState, useEffect } from "react";
import Routes from "./Routes";
import { setAccessToken } from "./accessToken";

interface Props {}

export const App: React.FC<Props> = () => {
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    fetch("http://localhost:3030/refresh_token", {
      credentials: "include",
      method: "post"
    }).then(async x => {
      const { accessToken } = await x.json();
      if (accessToken) {
        setAccessToken(accessToken);
        setLoading(false);
      }
    });
  }, []);
  if (loading) {
    return (
      <div className="center">
        <h3>Loading...</h3>
      </div>
    );
  }
  return <Routes />;
};
