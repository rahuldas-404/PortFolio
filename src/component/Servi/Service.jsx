import React from 'react';
import './Service.css';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';
import Resume from './Rahul Kumar Das resume org.pdf';

const Service = () => {
  return (
    <div className="service">
        {/* Left Side */}
        <div className="About">
            <span>My</span>
            <span>Projects</span>
            <span>
                About........................<br>
                </br>...........
            </span>
            <a href={Resume} download>
            <button className='button s-button'>Download CV</button>
            </a>
            <div className="blur s-blur" style={{background: "#ABF1FF94"}}></div>
        </div>
        {/* {Right Side} */}
        <div className="cards">

          {/* {First Card} */}
          <div style={{left: '14rem'}}>
             <Card
            emoji={HeartEmoji}
            heading={"Design"}
            detail={"Figma, Sketch, Photoshop, Adobe Illustrator, Adobe xd"}
            />
          </div>

          {/* {Second Card} */}
          <div style={{top : "12rem", left: "-4rem"}}>
            <Card
            emoji={Glasses}
            heading={"project 2"}
            detail={"hello porject 2 ................."}
            />
          </div>


          {/* {Third Card} */}
          <div style={{top : "19rem", left: "12rem"}}>
            <Card
            emoji={Humble}
            heading={"project 3"}
            detail={"hello porject 3   3 3 3 3 3 3  ................."}
            />
          </div>
          <div className='blur s-blur' style={{background: "var(--purple)"}}></div>
        </div>
    </div>
  );
};

export default Service;