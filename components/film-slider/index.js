import React from 'react';
import { Card } from 'react-bootstrap';
import {Swiper , SwiperSlide} from 'swiper/react';
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
              <Card className={styles.card}>
                  <Card.Img src={"/assets/films/film1.jpg"} alt="image 1"/>
              </Card>
          </SwiperSlide>

          <SwiperSlide>
              <Card className={styles.card}>
                  <Card.Img src={"/assets/films/film2.jpg"} alt="image 2"/>
              </Card>
          </SwiperSlide>

          <SwiperSlide>
              <Card className={styles.card}>
                  <Card.Img src={"/assets/films/film3.jpg"} alt="image 3"/>
              </Card>
          </SwiperSlide>

          <SwiperSlide>
              <Card className={styles.card}>
                  <Card.Img src={"/assets/films/film4.jpg"} alt="image 4"/>
              </Card>
          </SwiperSlide>

          <SwiperSlide>
              <Card className={styles.card}>
                  <Card.Img src={"/assets/films/film5.jpg"} alt="image 5"/>
              </Card>
          </SwiperSlide>

          <SwiperSlide>
              <Card className={styles.card}>
                  <Card.Img src={"/assets/films/film6.jpg"} alt="image 6"/>
              </Card>
          </SwiperSlide>

          <SwiperSlide>
              <Card className={styles.card}>
                  <Card.Img src={"/assets/films/film1.jpg"} alt="image 7"/>
              </Card>
          </SwiperSlide>

          <SwiperSlide>
              <Card className={styles.card}>
                  <Card.Img src={"/assets/films/film2.jpg"} alt="image 8"/>
              </Card>
          </SwiperSlide>

          <SwiperSlide>
              <Card className={styles.card}>
                  <Card.Img src={"/assets/films/film3.jpg"} alt="image 8"/>
              </Card>
          </SwiperSlide>

          <SwiperSlide>
              <Card className={styles.card}>
                  <Card.Img src={"/assets/films/film4.jpg"} alt="image 9"/>
              </Card>
          </SwiperSlide>

          <SwiperSlide>
            <Card className={styles.card}>
                  <Card.Img src={"/assets/films/film5.jpg"} alt="image 10"/>
              </Card>
          </SwiperSlide>

          <SwiperSlide>
              <Card className={styles.card}>
                  <Card.Img src={"/assets/films/film6.jpg"} alt="image 11"/>
              </Card>
          </SwiperSlide>
         

      </Swiper>
     
     </div>
    );
     
} 
 
export default FilmSlider;