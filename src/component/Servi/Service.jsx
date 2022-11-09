import React from 'react';
import './Service.css';
import HeartEmoji from '../../img/heartemoji.png';
import Glasses from "../../img/glasses.png";
import Humble from "../../img/humble.png";
import Card from '../Card/Card';

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
            <button className='button s-button'>Download CV</button>
            <div className="blur s-blur" style={{background: "#ABF1FF94"}}></div>
        </div>
        {/* {Right Side} */}
        <div className="card">
          <Card
          emoji ={HeartEmoji}
          heading = {"project 1"}
          detail={"info.........."}
          />
        </div>
    </div>
  );
};

export default Service;