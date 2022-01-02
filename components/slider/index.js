import React from "react";

import styles from "./slider.module.css";
import { Swiper , SwiperSlide } from 'swiper/react';
import SwiperCore, {Navigation , Pagination } from 'swiper'


SwiperCore.use([Navigation , Pagination ])

const Headerslider = () =>{
    return (
        <div>
             <Swiper
             className={styles.slider}
             navigation
             pagination={{clickable:true}}
             >
      <div className={styles.img_size }>
      <SwiperSlide> <img className="img_slider" src={"/assets/slider/slide1.jpg"} /> <span className={styles.text_img_slider}>nummber one!</span>  </SwiperSlide>
      <SwiperSlide> <img className="img_slider" src={"/assets/slider/slide2.jpg"} /> <span className={styles.text_img_slider}>nummber one!</span>  </SwiperSlide>
      <SwiperSlide> <img className="img_slider" src={"/assets/slider/slide3.jpg"} /> <span className={styles.text_img_slider}>nummber one!</span>  </SwiperSlide>
      <SwiperSlide> <img className="img_slider" src={"/assets/slider/slide4.jpg"} /> <span className={styles.text_img_slider}>nummber one!</span>  </SwiperSlide>
     
      </div>
      </Swiper>

        </div>
    )
}
  
export default Headerslider;