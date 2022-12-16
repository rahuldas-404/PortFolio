import React from 'react';
import { useState } from 'react';
import "./TimeLIne.css";

const TimeLine = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index)=>{
    setToggleState(index);
  };
  return (
    <section className="TimeLine section">
        <h2 className="section__title">Time Line</h2>
        <span className="section__subtitle">My Journey</span>

        <div className="TimeLine_container container">
            <div className="TimeLine_tabs">
                <div 
                  className={
                  toggleState===1
                  ? "TimeLine_button qualification__active button--flex"
                  : "TimeLine_button button--flex"
                  }
                  onClick={()=> toggleTab(1)}
                >
                <i className="uil uil-graduation-cap qualification__icon"></i>{" "} Education
                </div>


                <div className={
                  toggleState===2
                  ? "TimeLine_button qualification__active button--flex"
                  : "TimeLine_button button--flex"
                  }
                  onClick={()=> toggleTab(2)}
                  >
                <i className="uil uil-briefcase-alt qualification__icon"></i>{" "} Experience
                </div>
            </div>
            <div className="qualification_sections">
              <div className={
                toggleState ===1?
                "qualification_content qualification_content-active"
                : "qualification_content"
              }>
                <div className="qualification_data">
                  <div>
                     <h3 className="qualification_title">Class 11-12</h3>
                      <span className="qualification_subtitle">
                      Maharishi Vidya Mandir School                     </span>
                      <div className="qualification_calender">
                        <i className="uil uil-calendar-alt"></i>  2018 - 2020
                      </div>
                  </div>
                  <div>
                    <span className="qualification_rounder"></span>
                    <span className="qualification_line"></span>
                  </div>
                </div>


                <div className="qualification_data">
                  <div></div>


                  <div>
                    <span className="qualification_rounder"></span>
                    <span className="qualification_line"></span>
                  </div>

                  <div>
                  <h3 className="qualification_title">Computer Science and Engineering(B-Tech)</h3>
                      <span className="qualification_subtitle">
                      Vel Tech Universty
                      </span>
                      <div className="qualification_calender">
                        <i className="uil uil-calendar-alt"></i>  2020 - Present
                      </div>
                  </div>
                </div>
              </div>




              <div className={
                toggleState ===2?
                "qualification_content qualification_content-active"
                : "qualification_content"
              }>
                <div className="qualification_data">
                  <div>
                     <h3 className="qualification_title">React Developer</h3>
                      <span className="qualification_subtitle">
                      XYZ Company                     </span>
                      <div className="qualification_calender">
                        <i className="uil uil-calendar-alt"></i>  2020 - 2021
                      </div>
                  </div>
                  <div>
                    <span className="qualification_rounder"></span>
                    <span className="qualification_line"></span>
                  </div>
                </div>


                <div className="qualification_data">
                  <div></div>


                  <div>
                    <span className="qualification_rounder"></span>
                    <span className="qualification_line"></span>
                  </div>

                  <div>
                  <h3 className="qualification_title">Software Developer</h3>
                      <span className="qualification_subtitle">
                      Infisky
                      </span>
                      <div className="qualification_calender">
                        <i className="uil uil-calendar-alt"></i>  2021 - Present
                      </div>
                  </div>
                </div>

                
                
                
                
                <div className="qualification_data">
                  <div>
                     <h3 className="qualification_title">Open Source</h3>
                      <span className="qualification_subtitle">
                      Hacktoberfest                     </span>
                      <div className="qualification_calender">
                        <i className="uil uil-calendar-alt"></i>  October 2022
                      </div>
                  </div>
                  <div>
                    <span className="qualification_rounder"></span>
                    <span className="qualification_line"></span>
                  </div>
                </div>
                
              </div>
            </div>
        </div>
    </section>
  );
};

export default TimeLine