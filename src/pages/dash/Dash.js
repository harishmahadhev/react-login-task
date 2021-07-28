import "./Dash.css";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import { Route, Switch } from "react-router-dom";
import Home from "../Home/Home";

function Dash() {
  return (
    <div className="Dash">
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route path="/app/home">
            <Home />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Dash;
