import React from 'react';
import Toggle from '../Toggle/Toggle';
import './Navbar.css';
// import {themeContext} from './Context';
import {Link} from 'react-scroll';

const Navbar = () => {
  return (
    <div className="n-wrapper">
        <div className='n-left'>
            <div className="name">Rahul Kumar Das</div>
            <Toggle/>
        </div>
        <div className='n-right'>
            <div className="list">
                <ul style={{listStyleType: 'none'}}> 
                <Link spy={true} to ='Navbar' smooth={true} activeClass="activeClass">
                    <li>Home</li>
                    </Link>
                <Link spy={true} to ='Projects' smooth={true} >
                    <li>My Projects</li>
                    </Link>
                <Link spy={true} to ='Experience' smooth={true}>
                    <li>Experience</li>
                    </Link>
                <Link spy={true} to ='TimeLine'>
                    <li>TimeLine</li>
                    </Link>
                </ul>
            </div>
            <Link to="contact" spy={true} smooth={true}>
            <button className="button">
                Contact
            </button>
            </Link>
        </div>
    </div>
  );
};

export default Navbar;