import React from "react";
import "./Buttons.css";
import ReplayIcon from "@material-ui/icons/Replay";
import IconButton from "@material-ui/core/IconButton";

import FavoriteIcon from "@material-ui/icons/Favorite";

import CenterCards from "./centerCards";
import Sound from "./sound.mp3";
import ClearIcon from "@material-ui/icons/Clear";
import SentimentVerySatisfiedIcon from "@material-ui/icons/SentimentVerySatisfied";
import Buzz from "./buzzSound.mp3";
import Laugh from "./laugh.mp3";
import Clap from "./clap.mp3";
import PanToolRoundedIcon from "@material-ui/icons/PanToolRounded";

function Buttons() {
  function refreshPage() {
    sound.play();
    <CenterCards className="centerCards" />;
    window.location.reload();
  }

  const sound = new Audio(Sound);

  function likeDisplayOff() {
    let likebtn = document.getElementById("likeDisplay");
    likebtn.style.visibility = "hidden";
  }

  function likeDisplay() {
    sound.play();
    let likebtn = document.getElementById("likeDisplay");
    likebtn.style.visibility = "visible";
    setTimeout(likeDisplayOff, 1500);
  }

  function crossDisplayOff() {
    let likebtn = document.getElementById("crossDisplay");
    likebtn.style.visibility = "hidden";
  }

  const buzz = new Audio(Buzz);

  const leftBtn = () => {
    let likebtn = document.getElementById("crossDisplay");
    likebtn.style.visibility = "visible";
    setTimeout(crossDisplayOff, 1500);
    buzz.play();
  };

  function laughDisplayOff() {
    let lauBtn = document.getElementById("laughDisplay");
    lauBtn.style.visibility = "hidden";
  }

  const laughter = new Audio(Laugh);

  const laugh = () => {
    let lauBtn = document.getElementById("laughDisplay");
    lauBtn.style.visibility = "visible";
    setTimeout(laughDisplayOff, 1500);
    laughter.play();
  };

  function clapDisplayOff() {
    let clapBtn = document.getElementById("clapDisplay");
    clapBtn.style.visibility = "hidden";
  }

  const clap = new Audio(Clap);

  const clapDisplay = () => {
    let clapBtn = document.getElementById("clapDisplay");
    clapBtn.style.visibility = "visible";
    setTimeout(clapDisplayOff, 1500);
    clap.play();
  };

  return (
    <>
      <div className="contain">
        <div
          id="crossDisplay"
          style={{
            content:
              "url(https://media.giphy.com/media/eKml9K6FpBj3GPqvZl/giphy.gif)",
          }}
        ></div>
        <div
          id="likeDisplay"
          style={{
            content:
              "url(https://media.tenor.com/images/1c60d0b366689a924b87a5e17671de09/tenor.gif)",
          }}
        ></div>
        <div
          id="laughDisplay"
          style={{
            content:
              "url(https://media.giphy.com/media/hVlZnRT6QW1DeYj6We/giphy.gif)",
          }}
        ></div>
        <div
          id="clapDisplay"
          style={{
            content:
              "url(https://media.giphy.com/media/ZdNlmHHr7czumQPvNE/giphy.gif)",
          }}
        ></div>
      </div>
      <div className="buttons" id="btn">
        <IconButton>
          <ReplayIcon
            onClick={refreshPage}
            fontSize="large"
            className="replayIcon"
          />
        </IconButton>
        <IconButton>
          <ClearIcon onClick={leftBtn} fontSize="large" className="leftIcon" />
        </IconButton>
        <IconButton>
          <SentimentVerySatisfiedIcon
            onClick={laugh}
            fontSize="large"
            className="rightIcon"
          />
        </IconButton>
        <IconButton>
          <FavoriteIcon
            onClick={likeDisplay}
            fontSize="large"
            className="favIcon"
          />
        </IconButton>
        <IconButton>
          <PanToolRoundedIcon
            onClick={clapDisplay}
            fontSize="large"
            className="handIcon"
          />
        </IconButton>
      </div>
    </>
  );
}

export default Buttons;
