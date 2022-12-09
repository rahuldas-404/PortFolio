import Navbar from "./component/navbar/Navbar";
import './App.css';
import Intro from "./component/Intro/Intro";
import Service from "./component/Servi/Service"
import Experience from "./component/Experience/Experience";
import Project from "./component/Projects/Project"
import Expertise from "./component/Expertise/Expertise";
import TimeLine from "./component/TimeLine/TimeLine";

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Intro/>
      <Service/>
      <Experience/>
      <TimeLine/>
      <Project/>
      <Expertise/>
      
    </div>
  );
}
export default App