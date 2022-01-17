
import { Menu, Dropdown, Slider, Divider } from 'antd';
import React, { useRef, useState } from "react";
import { Button, Card, ProgressBar } from "react-bootstrap";
import ReactPlayer from "react-player";
import styles from "./video-player.module.css";
import classnames from "classnames";
import { useRouter } from "next/router"


const VideoPlayer = () => {
  const router = useRouter();
  const [playing, setPlaying] = useState(false);
  const [show, setShow] = useState(false);
  const [progress, setProgress] = useState(0);
  const [playbackRate, setPlaybackRate] = useState(1);
  const [activeMenuItem, setActiveMenuItem] = useState(1);
  
 

  const ref = useRef();


  const handlePlaying = (status) => {
    setPlaying(status);
  };
  
  const SpeedList =[
    {key:2},
    {key:1.5},
    {key:1},
    {key:0.5},
    ];

  const menu = (
     <Menu>
      {SpeedList.map((speed) => {
        return (
          <Menu.Item
            className={activeMenuItem === speed.key ? styles.active_menu : ""}
            onClick={() => {
              setActiveMenuItem(speed.key);
              setPlaybackRate(speed.key);
              setShow(false);
            }}
            key={speed.key}
          >
            {speed.key}×
          </Menu.Item>
        );
      })}
    </Menu>  
  );

  

  return (
    <div>
      <Button
        className={styles.return_btn}
        variant="dark"
        onClick={() => {
          router.back();
        }}
      >
        Back to home</Button>
      <ReactPlayer
        ref={ref}
        className={styles.player}
        url="/assets/player/film.mp4"
        width="100%"
        height="100vh"
        playing={playing}
        onProgress={({ played, playedSeconds, loaded, loadedSeconds }) => {
          setProgress(played * 100);
        }}
        playbackRate={playbackRate}
        
       
      />
      <Card className={classnames(styles.controller, show && styles.show)}>
        <div className={classnames(styles.main_controll, "ml-2")}>
          {!playing ? (
            <img
              onClick={() => handlePlaying(true)}
              className={styles.play}
              width={32}
              src={"/play.svg"}
            />
          ) : (
            <img
              onClick={() => handlePlaying(false)}
              className={styles.play}
              width={32}
              src={"/pause.svg"}
            />
          )}
          <Slider
            onChange={(value) => {
              setProgress(value);
              ref.current.seekTo(value/100)
            }}
            value={progress}
            className={styles.slider}
            tooltipVisible={false}
          />
          

          <Dropdown 
          overlay={menu}
           trigger={["click"]}
            onclick={() => setShow(true)}>
              <img className="ml-3" width={32} src={"/speedrating.svg"} />
          </Dropdown>
         
          </div>
      </Card>
    </div>
  );
};

export default VideoPlayer;
