import './App.css';
import Sidebar from './Sidebar/Sidebar';
import Topbar from './Topbar/Topbar';
function App() {
  return (
    <div className="App">
    <Topbar/>
    <div className ="container">
      <Sidebar/>
     <div className="others">other pages</div> 
    </div>
    </div>
  );
}

export default App;
