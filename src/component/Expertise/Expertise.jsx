import React from 'react';
import './Expertise.css';
const Expertise = () => {
  return (
    <div className="t-wrapper">
        <div className="t-heading">
            <span>Client always get</span>
            <span>Exceptional work</span>
            <span>from me</span>

            <div className="blur t-blur" style={{background: "var(--purple)"}}></div>
            <div className="blur t-blur" style={{background: "skyblue"}}></div>
        </div>
    </div>
  );
};

export default Expertise;