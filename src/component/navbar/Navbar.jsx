import React from 'react'
import './Navbar.css'
const Navbar = () => {
  return (
    <div className="n-wrapper">
        <div className='n-left'>
            <div className="name">Rahul Kumar Das</div>
            <span>Toggle</span>
        </div>
        <div className='n-right'>
            <div className="list">
                <ul style={{listStyleType: 'none'}}> 
                    <li>Home</li>
                    <li>Services</li>
                    <li>Experience</li>
                    <li>Portfolio</li>
                    <li>Testimonials</li>
                </ul>
            </div>
            <button className="button">
                Contact
            </button>
        </div>
    </div>
  )
}

export default Navbar