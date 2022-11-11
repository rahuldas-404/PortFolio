import React from 'react';
import './FloatingDiv.css';

const FloatingDiv = (props) => {
  return (
    <div className="floatingdiv">
        <img src={props.image}/>
        <span>{props.Text}</span> 
    </div>
  );
};

export default FloatingDiv;