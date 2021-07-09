import "./App.css";
import Home from "./pages/home/Home";
import Sidebar from "./sidebar/Sidebar";
import Topbar from "./topbar/Topbar";
function App() {
  return (
    <div className="App">
      <Topbar />
      <div className="container">
        <Sidebar />
        <Home />
      </div>
    </div>
  );
}

export default App;
