import React, { useState } from "react";
import styles from "./film-poster.module.css";
import { Row, Col, Button } from "react-bootstrap";
import classnames from "classnames";
import Link from "next/link";

const FilmPoster = () => {
  const [dimmer, setDimmer] = useState(false);

  return (
    <Row className="w-100 text-center mt-5 mb-5">
      <Col
      xl={4}
      lg={4}
      md={6}
      sm={12}
      xs={12}>
        <div className={styles.gallery_item}>

          <img
            className={dimmer ? styles.banner_hover:undefined}
            alt="banner 2"
            src={"/assets/banners/banner2.jpg"}
          />
          <div
            className={classnames(
              styles.text_img_slider,
              "text-center"
            )}
          >
            <h2 className={styles.white_text}>Movie name</h2>
            <p>About Film </p>
            <Link href={"/films/[slug]"} as={"/films/film1"}>
              <Button variant="success"> Play movie </Button>
            </Link>
          </div>
        </div>
      </Col>
      <Col>
        <div className={styles.gallery_item}>

          <img
            className={dimmer ? styles.banner_hover:undefined}
            alt="banner 2"
            src={"/assets/banners/banner2.jpg"}
          />
          <div
            className={classnames(
              styles.text_img_slider,
              "text-center"
            )}
          >
            <h2 className={styles.white_text}>Movie name</h2>
            <p> About Film</p>
            <Link href={"/films/[slug]"} as={"/films/film1"}>
              <Button variant="success"> Play movie </Button>
            </Link>
          </div>
        </div>
      </Col>
      <Col>
          <div className={styles.gallery_item}>
            <img
            className={dimmer ? styles.banner_hover:undefined}
            alt="banner 2"
            src={"/assets/banners/banner2.jpg"}
          />
          <div
            className={classnames(
              styles.text_img_slider,
              "text-center",
            )}
          >
            <h2 className={styles.white_text}>Movie name</h2>
            <p>About Film</p>
            <Link href={"/films/[slug]"} as={"/films/film1"}>
              <Button variant="success">Play movie </Button>
            </Link>
          </div>
          </div>

      </Col>
    </Row>
  );
};

export default FilmPoster;
