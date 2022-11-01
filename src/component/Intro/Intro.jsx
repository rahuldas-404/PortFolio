import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import Instagram from '../../img/instagram.png';
import Linkedin from '../../img/linkedin.png';

const Intro = () => {
  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Hello There!</span>
                <span>This is Rahul</span>
                <span>intro here.....................................</span>
            </div>
            <button className="button i-button">More Info</button>
            <div className="i-icons">
                <a href='https://github.com/rahuldas-404'>
                <img src={Github} alt="github"/>
                </a>
                <a href='https://www.instagram.com/thatguyonhisway/'>
                <img src={Instagram} alt="instagram"/>
                </a>
                <a href='https://www.linkedin.com/in/rahul-kumar-das-52501a229/'>
                <img src={Linkedin} alt="linkedin"/>
                </a>
            </div>
        </div>
        <div className="i-right">this is right side</div>
    </div>
  )
}

export default Intro