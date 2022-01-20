import React, { useState } from "react";
import styles from "./film-poster.module.css";
import { Row, Col, Button } from "react-bootstrap";
import classnames from "classnames";
import Link from "next/link";

const FilmPoster = () => {
  const [dimmer, setDimmer] = useState(false);

  return (
    <Row className="w-100 text-center rtl mt-5 mb-5">
      <Col
      className="p-1 mt-2 mb-2"
      xl={4}
      lg={4}
      md={6}
      sm={12}
      xs={12}
        onMouseEnter={() => {
          setDimmer(true);
        }}
        onMouseLeave={() => {
          setDimmer(false);
        }}
      >
        <img
          className={dimmer ? styles.banner_hover : undefined}
          alt="banner 2"
          src={"/assets/banners/banner2.jpg"}
        />
        <div
          className={classnames(
            styles.text_img_slider,
            "text-center",
            dimmer ? styles.text_img_slider_hover : undefined
          )}
        >
          <h2 className={styles.white_text}>Movies Name </h2>
          <p>َAbout Movie</p>
          <Link href={"/films/[slug]"} as={"/films/film2"}>
          <Button variant="success">Play Movies</Button>
          </Link>
        </div>
      </Col>
      <Col
      className="p-1 mt-2 mb-2"
      xl={4}
      lg={4}
              md={6}
              sm={12}
              xs={12}
        onMouseEnter={() => {
          setDimmer(true);
        }}
        onMouseLeave={() => {
          setDimmer(false);
        }}
      >
        <img
          className={dimmer ? styles.banner_hover: undefined}
          alt="banner 2"
          src={"/assets/banners/banner2.jpg"}
        />
        <div
          className={classnames(
            styles.text_img_slider,
            "text-center",
            dimmer ? styles.text_img_slider_hover:undefined
          )}
        >
          <h2 className={styles.white_text}>Movies Name </h2>
          <p>َAbout Movie</p>
          <Link href={"/films/[slug]"} as={"/films/film1"}>
            <Button variant="success">Play Movies</Button>
          </Link>
        </div>
      </Col>
      <Col
      className="p-1 mt-2 mb-2"
      xl={4}
      lg={4}
              md={6}
              sm={12}
              xs={12}
        onMouseEnter={() => {
          setDimmer(true);
        }}
        onMouseLeave={() => {
          setDimmer(false);
        }}
      >
        <img
          className={dimmer ? styles.banner_hover : undefined}
          alt="banner 1"
          src={"/assets/banners/banner1.jpg"}
        />
        <div
          className={classnames(
            styles.text_img_slider,
            "text-center",
            dimmer ? styles.text_img_slider_hover:undefined
          )}
        >
          <h2 className={styles.white_text}>Movies Name </h2>
          <p>َAbout Movie </p>
          <Link href={"/films/[slug]"} as={"/films/film1"}>
            <Button variant="success">Play Movies</Button>
          </Link>
        </div>
      </Col>
    </Row>
  );
};

export default FilmPoster;
