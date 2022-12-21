import React from 'react';
import "./Card.css";
import { themeContext } from '../../Context';
import { useContext } from 'react';


const Card = (props) => {
  const theme = useContext(themeContext);
  const darkMode=theme.state.darkMode;


  return (
    <div className="card">
        <img src={props.emoji}/>
        <span>{props.heading}</span>
        <span>{props.detail}</span>
        <button className="c-button"  style={{color: darkMode?'white':''}}>Learn More</button>
    </div>
  );
};
export default Card;
