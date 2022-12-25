import React from 'react';
import './Experience.css';
import { themeContext } from '../../Context';
import { useContext } from 'react';


const Experience = () => {
  const theme = useContext(themeContext);
  const darkMode=theme.state.darkMode;


  return (
    <div className="experience" id='Experience'>
        <div className="attachment">
            <div className="circle" style={{color: darkMode?'var(--orange)':''}}>1+</div>
                <span>yo!</span>
                <span style={{color: darkMode?'white':''}}>hello</span>
        </div>
        <div className="attachment">
            <div className="circle"  style={{color: darkMode?'var(--orange)':''}}>5+</div>
                <span>projects</span>
                <span style={{color: darkMode?'white':''}}>world</span>
        </div>
        <div className="attachment">
            <div className="circle"  style={{color: darkMode?'var(--orange)':''}}>6+</div>
                <span>dude</span>
                <span style={{color: darkMode?'white':''}}>perfect</span>
        </div>
    </div>
  )
};

export default Experience;