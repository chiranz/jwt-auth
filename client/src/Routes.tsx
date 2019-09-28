import React from "react";
import { BrowserRouter, Switch, Route, Link } from "react-router-dom";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Home } from "./pages/Home";
import { Bye } from "./pages/Bye";

const Routes: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="main">
        <div className="header">
          <div>
            <h1 style={{ color: "brown" }}>Jwt Auth</h1>
          </div>
          <div className="links">
            <Link to="/login">Login</Link>

            <Link to="/register">Register</Link>
            <Link to="/bye">Say Goodbye</Link>
          </div>
        </div>

        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route exact path="/bye" component={Bye} />
        </Switch>
      </div>
    </BrowserRouter>
  );
};

export default Routes;
