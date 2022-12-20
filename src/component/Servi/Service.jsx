import React from 'react';
import './Service.css';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import Resume from './Rahul Kumar Das resume org.pdf';
import { themeContext } from '../../Context';
import { useContext } from 'react';


const Service = () => {
  const theme = useContext(themeContext);
  const darkMode=theme.state.darkMode;

  return (
    <div className="service">
        {/* Left Side */}
        <div className="About">
            <span>My</span>
            <span style={{color: darkMode? 'white':''}}>Projects</span>
            <span>
                About........................<br>
                </br>...........
            </span>
            <a href={Resume} download>
            <button className='button s-button'>Download CV</button>
            </a>
            <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
        </div>
        {/* {Right Side} */}
        <div className="cards">

          {/* {First Card} */}
          <div style={{left: '28rem'}}>
             <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, xch"}
            />
          </div>

          {/* {Second Card} */}
          <div style={{top : "12rem", left: "8rem"}}>
            <Card
            emoji={Glasses}
            heading={"project 2"}
            detail={"hello porject 2 ................."}
            />
          </div>


          {/* {Third Card} */}
          <div style={{top : "19rem", left: "25rem"}}>
            <Card
            emoji={Humble}
            heading={"project 3"}
            detail={"hello porject 3   3 3 3 3 3 3  ................."}
            />
          </div>
          <div className='blur s-blur2' style={{background: "var(--purple)"}}></div>
        </div>
    </div>
  );
};

export default Service;