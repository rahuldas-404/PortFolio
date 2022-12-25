import Navbar from "./component/navbar/Navbar";
import './App.css';
import Intro from "./component/Intro/Intro";
import Service from "./component/Servi/Service"
import Experience from "./component/Experience/Experience";
// import Project from "./component/Projects/Project"
// import Expertise from "./component/Expertise/Expertise";
import TimeLine from "./component/TimeLine/TimeLine";
import Contact from "./component/Contact/Contact";
import Footer from "./component/Footer/Footer";
import { useContext } from "react";
import { themeContext } from "./Context";
function App() {
  const theme = useContext(themeContext);
    const darkMode = theme.state.darkMode;

  return (
    <div className="App"
    style={{background: darkMode? 'black':'',
    color: darkMode? 'white':''
  }}
    >

      <Navbar/>
      <Intro/>
      <Service/>
      <Experience/>
      <TimeLine/>
      {/* <Project/> */}
      {/* <Expertise/> */}
      <Contact/>
      <Footer/>
      
    </div>
  );
}
export default App