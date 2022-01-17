import React from "react";
import { Card, Divider } from "antd";
import { Button } from "react-bootstrap";
import styles from "./film-content.module.css";
import classnames from "classnames";
import Link from "next/link";

const FilmContent = ({ filmName }) => {
  return (
    <div>
      <Card
        cover={
          <React.Fragment>
            <img height={200} src={`/assets/slider/slide1.jpg`} style={{filter:"blur(1.5px)"}} />
            <div className={classnames(styles.text_img_slider)}>
              <h2 className={styles.white_text}>Film name </h2>
              <div className="mb-2">
                <span><img src={"/imdb.svg"} width={50} /> 4.3</span>
                <Divider style={{backgroundColor:"white"}} type="vertical" />
                <span>2h 12m</span>
                <Divider style={{backgroundColor:"white"}} type="vertical" />
                <span><img src={"/calendar.svg"} width={20} /> 2018</span>
              </div>
              <Link href={"/films/player/[id]"} as={"/films/player/film1"}>
                <Button variant="success">Play movie</Button>
              </Link>
            </div>
          </React.Fragment>
        }
      >
        <Card.Meta
          title={<h2 className="text-center">{filmName}</h2>}
          description={
            <p>
              {" "}
              © 2022 NetFilm - The Streaming Guide Imprint · Privacy Policy · Talent
            </p>
          }
        />
      </Card>
    </div>
  );
};

export default FilmContent;


