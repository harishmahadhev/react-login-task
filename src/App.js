import React, { useReducer } from "react";
import Dash from "./pages/dash/Dash";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
} from "react-router-dom";
import Login from "./pages/login/Login";
import { authReducer, storeCtx } from "./pages/login/reducer";

export default function App() {
  const [, dispatch] = useReducer(authReducer, null);
  return (
    <Router>
      <Switch>
        <Route path="/login">
          <storeCtx.Provider value={{ dispatch }}>
            <Login />
          </storeCtx.Provider>
        </Route>
        <Route path="/app">
          <storeCtx.Provider value={{ dispatch }}>
            <Dash />
          </storeCtx.Provider>
        </Route>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
      </Switch>
    </Router>
  );
}
