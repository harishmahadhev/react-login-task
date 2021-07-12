import "./App.css";
import Home from '../src/pages/home/Home'
import Sidebar from "./components/sidebar/Sidebar";
import Topbar from "./components/topbar/Topbar";
import { Route, Switch } from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from './pages/user/User';
function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/users/:Id">
            <User />
          </Route>
          <Route path="/users">
            <UserList />
          </Route>
        </Switch>
      </div>
    </div>
  );
}

export default App;
