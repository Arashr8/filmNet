import React from 'react';
import { Card } from 'react-bootstrap';
import {Swiper , SwiperSlide} from 'swiper/react';
import Link from 'next/link'
import styles from './film-slider.module.css';

const FilmSlider = ({dark}) => {
    return (
        
        <div className={dark?"bg-dark":undefined}>
      <Swiper
      freeMode={true}
      slidesPerView={8}
      spaceBetween={20}
      className="p-3"
      >

          <SwiperSlide>
          <div className="text-center">
            <Link href={"/films/[slug]"} as={"/films/film1"}>
                <div className={styles.card_font_hover}>
            <Card className={styles.card} bg={dark?"dark":undefined}>
                <Card.Img className={dark?styles.img_shadows_dark:styles.img_shadows} src={"/assets/films/film1.jpg"} alt="image 1" />
                <p className={dark?styles.text_white:undefined}>Names movie</p>
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