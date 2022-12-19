import React from 'react'
import "./Footer.css";
import Wave from "../../img/wave.png";
import Insta from "@iconscout/react-unicons/icons/uil-instagram"
import Linked from "@iconscout/react-unicons/icons/uil-linkedin"
import GitHub from "@iconscout/react-unicons/icons/uil-github"
import Medium from "@iconscout/react-unicons/icons/uil-medium-m"


const Footer = () => {
  return (
    <div className='footer'>
        <img src={Wave} alt="" style={{width: "100%"}}/>
      <div className="f-content">

        <span id="email" style={{
          fontWeight: 'bold',
          fontSize:'1.5rem'
          }}>
          rd893918@gmail.com</span>


        <div className="f-icon">
            <Insta color='white' size='3rem'/>
            <Linked color='white' size='3rem'/>
            <GitHub color='white' size='3rem'/>
            <Medium color='white' size='3rem'/>
        </div>
      </div>
    </div>
  )
}

export default Footer