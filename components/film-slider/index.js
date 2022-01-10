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
              <Link href={"films/[slug]"} as={"films/film1"}>
              <Card className={styles.card}>
                  <Card.Img src={"/assets/films/film1.jpg"} alt="image 1"/>
              </Card>
              </Link>
          </SwiperSlide>

          <SwiperSlide>
              <Link href={"films/[slug]"} as={"films/film2"}>
              <Card className={styles.card}>
                  <Card.Img src={"/assets/films/film2.jpg"} alt="image 2"/>
              </Card>
              </Link>
          </SwiperSlide>

          <SwiperSlide>
              <Link href={"films/[slug]"} as={"films/film3"}>
              <Card className={styles.card}>
                  <Card.Img src={"/assets/films/film3.jpg"} alt="image 3"/>
              </Card>
              </Link>
          </SwiperSlide>

          <SwiperSlide>
              <Link href={"films/[slug]"} as={"films/film4"}>
              <Card className={styles.card}>
                  <Card.Img src={"/assets/films/film4.jpg"} alt="image 4"/>
              </Card>
              </Link>
          </SwiperSlide>

          <SwiperSlide>
              <Link href={"films/[slug]"} as={"films/film5"}>
              <Card className={styles.card}>
                  <Card.Img src={"/assets/films/film5.jpg"} alt="image 5"/>
              </Card>
              </Link>
          </SwiperSlide>

          <SwiperSlide>
              <Link href={"films/[slug]"} as={"films/film6"}>
              <Card className={styles.card}>
                  <Card.Img src={"/assets/films/film6.jpg"} alt="image 6"/>
              </Card>
              </Link>
          </SwiperSlide>

          <SwiperSlide>
              <Link href={"films/[slug]"} as={"films/film7"}>
              <Card className={styles.card}>
                  <Card.Img src={"/assets/films/film1.jpg"} alt="image 7"/>
              </Card>
              </Link>
          </SwiperSlide>

          <SwiperSlide>
              <Link href={"films/[slug]"} as={"films/film8"}>
              <Card className={styles.card}>
                  <Card.Img src={"/assets/films/film2.jpg"} alt="image 8"/>
              </Card>
              </Link>
          </SwiperSlide>

          <SwiperSlide>
              <Link href={"films/[slug]"} as={"films/film9"}>
              <Card className={styles.card}>
                  <Card.Img src={"/assets/films/film3.jpg"} alt="image 8"/>
              </Card>
              </Link>
          </SwiperSlide>

          <SwiperSlide>
              <Link href={"films/[slug]"} as={"films/film10"}>
              <Card className={styles.card}>
                  <Card.Img src={"/assets/films/film4.jpg"} alt="image 9"/>
              </Card>
              </Link>
          </SwiperSlide>

          <SwiperSlide>
              <Link href={"films/[slug]"} as={"films/film11"}>
            <Card className={styles.card}>
                  <Card.Img src={"/assets/films/film5.jpg"} alt="image 10"/>
              </Card>
              </Link>
          </SwiperSlide>

          <SwiperSlide>
              <Link href={"films/[slug]"} as={"films/film12"}>
              <Card className={styles.card}>
                  <Card.Img src={"/assets/films/film6.jpg"} alt="image 11"/>
              </Card>
              </Link>
          </SwiperSlide>
         

      </Swiper>
     
     </div>
    );
     
} 
 
export default FilmSlider;