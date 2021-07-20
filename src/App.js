import "./App.css";
import Home from "../src/pages/home/Home";
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import { Route, Switch } from "react-router-dom";
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
          {/* <Route exact path="/app">
            <Redirect to="/home" />
          </Route> */}
        </div>
      </div>
    </Switch>
  );
}

export default App;
