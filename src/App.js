import Navbar from "./components/Navbar"
import Home from "./components/Home"
import ImproveHome from "./components/ImproveHome";

function App() {
  return (
    <div className="App">
       <Navbar/>
       <div className="container main">
          <Home/>
          <ImproveHome/>
       </div>
    </div>
  );
}

export default App;
