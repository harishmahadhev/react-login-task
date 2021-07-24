import "./Dash.css";
import Home from "../home/Home";
import Sidebar from "../../components/sidebar/Sidebar";
import Topbar from "../../components/topbar/Topbar";
import { Route, Switch } from "react-router-dom";
import UserList from "../userList/UserList";
import User from "../user/User";
import NewUser from "../newuser/NewUser";

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
          <Route path="/app/newuser">
            <NewUser />
          </Route>
          <Route path="/app/users/:Id">
            <User />
          </Route>
          <Route exact path="/app/users">
            <UserList />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default Dash;
