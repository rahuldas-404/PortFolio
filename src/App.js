import Navbar from "./component/navbar/Navbar";
import './App.css';
import Intro from "./component/Intro/Intro";
import Service from "./component/Servi/Service"
import Experience from "./component/Experience/Experience";
function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Service/>
      <Experience/>
    </div>
  );
}

export default App;
