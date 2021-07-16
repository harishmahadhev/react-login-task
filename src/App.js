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
    <div className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route path="/home">
            <Home />
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
          <Route exact path="/">
            <Redirect to="/home" />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
