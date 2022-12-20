import React from 'react';
import './Intro.css';
import Github from '../../img/github.png';
import Instagram from '../../img/instagram.png';
import Linkedin from '../../img/linkedin.png';
import Medium from '../../img/medium.png';
import Boy from '../../img/boy.png';
import Vector1 from '../../img/Vector1.png';
import Vector2 from '../../img/Vector2.png';
import Glassimoji1 from '../../img/glassesimoji.png';
import Thumbup from '../../img/thumbup.png';
import Crown from '../../img/crown.png';
import FloatingDiv from '../Floatingdiv/FloatingDiv';

import { themeContext } from '../../Context';
import { useContext } from 'react';

const Intro = () => {

  const theme = useContext(themeContext);
  const darkMode=theme.state.darkMode;

  return (
    <div className="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Hello There!</span>
                <span style={{color: darkMode?'white':''}}>This is Rahul</span>
                <span>Passionate about Technology building with management abilities from project conceptualization to
Implementation. I also have hands-on experience in Testing, Performance, function integration
system, and user experience.
In addition, I possess Multidisciplinary domain adaptability experience in real-time Product
development.</span>
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

        <div className="blur" style={{background: "rgb (238 210 255)"}}></div>

        <div className="blur" style={{
          background: '#C1F5FF',
          top: '17rem',
          width: '21rem',
          height: '11rem',
          left: '-9rem'
      }}></div>
        </div>
    </div>
  );
};

export default Intro;