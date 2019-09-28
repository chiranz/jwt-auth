import React from "react";
import ReactDOM from "react-dom";
import "./style.css";
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "@apollo/react-hooks";
import Routes from "./Routes";
import { getAccessToken } from "./accessToken";

const client = new ApolloClient({
  uri: "http://localhost:3030/graphql",
  credentials: "include",
  request: operation => {
    const accessToken = getAccessToken();
    if (accessToken) {
      operation.setContext({
        headers: {
          authorization: `bearer ${accessToken}`
        }
      });
    }
  }
});

ReactDOM.render(
  <ApolloProvider client={client}>
    <Routes />
  </ApolloProvider>,

  document.getElementById("root")
);
