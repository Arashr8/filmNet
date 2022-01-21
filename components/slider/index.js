import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Navigation, Pagination } from "swiper";
import styles from "./slider.module.css";
import { Button } from "react-bootstrap";
import classnames from "classnames";
import Link from "next/link"

SwiperCore.use([Navigation, Pagination]);

const HeaderSlider = () => {
  return (
    <div>
      <Swiper
        className={styles.slider}
        navigation
        pagination={{ clickable: true }}
        spaceBetween={50}
      >
        <SwiperSlide>
          <img
            className={styles.img_slider}
            src={"/assets/slider/slide1.jpg"}
          />
          <div className={classnames(styles.text_img_slider, "text-center")}>
            <h2 className={styles.white_text}>Movie name</h2>
            <Link href={"/films/[slug]"} as={"/films/film1"} >
              <Button variant="success">Play</Button>
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img
            className={styles.img_slider}
            src={"/assets/slider/slide2.jpg"}
          />
          <div className={classnames(styles.text_img_slider, "text-center")}>
            <h2 className={styles.white_text}>Movie name</h2>
            <Link href={"/films/[slug]"} as={"/films/film1"} >
              <Button variant="success">Play</Button>
            </Link>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <img
            className={styles.img_slider}
            src={"/assets/slider/slide3.jpg"}
          />
          <div className={classnames(styles.text_img_slider, "text-center")}>
            <h2 className={styles.white_text}>Movie name</h2>
            <Link href={"/films/[slug]"} as={"/films/film1"} >
              <Button variant="success">Play</Button>
            </Link>
          </div>
        </SwiperSlide>
        
      </Swiper>
    </div>
  );
};

export default HeaderSlider;
