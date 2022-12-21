import React from 'react';
import "./Contact.css";
import emailjs from '@emailjs/browser';
import { useRef } from 'react';
import { useState } from 'react';
import { themeContext } from '../../Context';
import { useContext } from 'react';


const Contact = () => {

    const form = useRef();
      
const[done, setDone]=useState(false)

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_l9ie2eo', 'template_3x7jeqw', form.current, 'qa0_75JOCrEKEc8AC')
        .then((result) => {
            console.log(result.text);
            setDone(true);
        }, (error) => {
            console.log(error.text);
        });
    };

    const theme = useContext(themeContext);
    const darkMode=theme.state.darkMode;



  return (
    <div className="contact-form" id="contact">
        <div className="w-left">
         <div className="awesome">
                <span>Get in touch</span>
                <br></br>
                <span style={{color: darkMode?'white':''}}>Contact Me</span>
                <div className="blur s-blur1" style={{background: "#ABF1FF94"}}></div>
            </div>
        </div>

        <div className="c-right">
          <form ref={form} onSubmit={sendEmail}>
          <input type="text" name="user_name" className="user"  placeholder="Name"/>
          <input type="email" name="user_email" className="user" placeholder="Your Email i'd"/>
          <textarea name="message" className="user" placeholder="Message"/>
          <input type="submit" value="Send" className="button"/>
          <span style={{color: darkMode?'yellowgreen':''}}>{done && "Thank You For Reaching Out"}</span>
                <div
                className="blur c-blur1"
                style={{background: "var(--purple"}}
                ></div>
            </form>
        </div>
    </div>
  )
}

export default Contact