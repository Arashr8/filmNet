import React from "react";

import styles from "./slider.module.css";
import { Swiper , SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation , Pagination } from 'swiper'


SwiperCore.use([Navigation , Pagination ])

const Headerslider = () =>{
    return (
        <div>
             <Swiper
             
             >
      <SwiperSlide>Slide 1</SwiperSlide>
      <SwiperSlide>Slide 2</SwiperSlide>
      <SwiperSlide>Slide 3</SwiperSlide>
      <SwiperSlide>Slide 4</SwiperSlide>
      
      </Swiper>

        </div>
    )
}
  
export default Headerslider;