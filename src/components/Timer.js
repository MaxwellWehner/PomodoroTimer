import React from "react";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import Button from "react-bootstrap/Button";

const Timer = ({
  timerMin,
  timerSec,
  playDisabled,
  soundsrc,
  play,
  pause,
  restartforClick,
}) => {
  return (
    <div className="timer">
      <span>{timerMin}</span>
      <span>:</span>
      <span>
        {timerSec === 0 ? "00" : timerSec < 10 ? "0" + timerSec : timerSec}
      </span>
      <br />
      <ButtonGroup id="btngrp2">
        <Button className="media" onClick={play} disabled={playDisabled}>
          play
        </Button>
        <Button className="media" onClick={pause}>
          pause
        </Button>
        <Button className="media" onClick={restartforClick}>
          restart
        </Button>
      </ButtonGroup>
      <audio className="audio-element">
        <source src={soundsrc}></source>
      </audio>
    </div>
  );
};
export default Timer;
