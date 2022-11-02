import React from 'react'
import './Intro.css'
import Github from '../../img/github.png';
import Instagram from '../../img/instagram.png';
import Linkedin from '../../img/linkedin.png';
import Medium from '../../img/medium.png'
import Boy from '../../img/boy.png'
import Vector1 from '../../img/Vector1.png'
import Vector2 from '../../img/Vector2.png'
import Glassimoji1 from '../../img/glassesimoji.png'
import Thumbup from '../../img/thumbup.png'
import Crown from '../../img/crown.png'
import FloatingDiv from '../Floatingdiv/FloatingDiv';

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
                <a href='https://github.com/rahuldas-404' target="_blank">
                <img src={Github} alt="github"/>
                </a>
                <a href='https://www.linkedin.com/in/rahul-kumar-das-52501a229/' target="_blank">
                <img src={Linkedin} alt="linkedin"/>
                </a>
                <a href='https://www.instagram.com/thatguyonhisway/' target="_blank">
                <img src={Instagram} alt="instagram"/>
                </a>
                <a href='https://medium.com/@rd893918' target="_blank">
                  <img src={Medium}/>
                </a>
                
            </div>
        </div>
        <div className="i-right">
          <img src={Vector1}/>
          <img src={Vector2}/>
          <img src={Boy}/>
          <img src={Glassimoji1}/>
        
        <div style={{top: '-4%', left: '68%'}}>
           <FloatingDiv image={Crown} Text="Cool"/>
        </div>
        <div style={{top: '18rem', left: '0rem'}}>
          < FloatingDiv image={Thumbup} Text="Hello World"/>
        </div>
        </div>
          {/* 
          <img src={Thumbup}/> */}
    </div>
  )
}

export default Intro