import React from 'react'
import './Project.css';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import Sidebar from "../../img/sidebar.png";
import Ecommerce from "../../img/ecommerce.png";
import HOC from "../../img/hoc.png";
import MusicApp from "../../img/musicapp.png";


const Project = () => {
  return (
    <div className="project">
       <span>Projects</span>

       <Swiper
      spaceBetween={30}
      slidesPerView={3}
      grabCursor={true}
      className="project-slider"
      >
        
      <SwiperSlide>
          <img src={Sidebar} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Ecommerce} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={MusicApp} alt="" />
        </SwiperSlide>
        <SwiperSlide>
          <img src={HOC} alt="" />
        </SwiperSlide>
      </Swiper>
    </div>
  )
}

export default Project;