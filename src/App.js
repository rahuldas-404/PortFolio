import Navbar from "./component/navbar/Navbar";
import './App.css';
import Intro from "./component/Intro/Intro";
import Service from "./component/Servi/Service"
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Service/>
    </div>
  );
}

export default App;
