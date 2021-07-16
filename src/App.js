import "./App.css";
import Home from "../src/pages/home/Home";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import { Redirect, Route, Switch } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newuser/NewUser";

function App() {
  return (
    <Switch>
      <div className="App">
        <Topbar />
        <div className="container">
          <Sidebar />
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/">
            <Redirect to="/home" />
          </Route>
          <Route path="/newuser">
            <NewUser />
          </Route>
          <Route path="/users/:Id">
            <User />
          </Route>
          <Route exact path="/users">
            <UserList />
          </Route>
        </div>
      </div>
    </Switch>
  );
}

export default App;
