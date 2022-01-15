import React from 'react';
import { Card } from 'react-bootstrap';
import {Swiper , SwiperSlide} from 'swiper/react';
import Link from 'next/link'
import styles from './film-slider.module.css';

const FilmSlider = () => {
    return (
        
        <div>
      <Swiper
      freeMode={true}
      slidesPerView={8}
      spaceBetween={20}
      >

          <SwiperSlide>
          <div className="text-center">
            <Link href={"/films/[slug]"} as={"/films/film1"}>
                <div className={styles.card_font_hover}>
            <Card className={styles.card}>
                <Card.Img className={styles.img_shadows} src={"/assets/films/film1.jpg"} alt="image 1" />
                <p>Names movie</p>
            </Card>
            </div>
            </Link>
        </div>
          </SwiperSlide>
      </Swiper>
     
     </div>
    );
     
} 
 
export default FilmSlider;