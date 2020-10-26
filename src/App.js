import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import Button from "react-bootstrap/Button";

import Settings from "./components/SettingsModal";
import AboutPage from "./components/AboutModal";
import Timer from "./components/Timer";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      workTime: 25,
      shortBreak: 5,
      longBreak: 15,
      timeMin: 25,
      timeType: "work",
      loop: false,
      soundsrc: "/audio/Gentle-wake-alarm-clock.mp3",
      timerSec: 0,
      intervalId: 0,
      playDisabled: false,
      count: 0,
      initalTotalTime: 1500,
      isTimeratStartTime: true,
      progressBarSize: 0,
    };
    this.updateWorkTime = this.updateWorkTime.bind(this);
    this.updateLongBreak = this.updateLongBreak.bind(this);
    this.updateShortBreak = this.updateShortBreak.bind(this);
    this.setTimetoW = this.setTimetoW.bind(this);
    this.setTimetoSB = this.setTimetoSB.bind(this);
    this.setTimetoLB = this.setTimetoLB.bind(this);
    this.onUpdateTimerMin = this.onUpdateTimerMin.bind(this);
    this.setDefaults = this.setDefaults.bind(this);
    this.play = this.play.bind(this);
    this.pause = this.pause.bind(this);
    this.restart = this.restart.bind(this);
    this.decreaseTimer = this.decreaseTimer.bind(this);
    this.playaudio = this.playaudio.bind(this);
    this.playaudio = this.playaudio.bind(this);
    this.reloadaudio = this.reloadaudio.bind(this);
    this.setSoundSrcGentle = this.setSoundSrcGentle.bind(this);
    this.setSoundSrcTwinBell = this.setSoundSrcTwinBell.bind(this);
    this.onLoop = this.onLoop.bind(this);
    this.setLoop = this.setLoop.bind(this);
    this.restartforClick = this.restartforClick.bind(this);
    this.setWidth = this.setWidth.bind(this);
    this.updateOnWindowChangeFn = this.updateOnWindowChangeFn.bind(this);
    this.playStart = this.playStart.bind(this);
  }
  updateWorkTime(e) {
    if (e.target.value >= 1) {
      this.setState({ workTime: e.target.value });
      if (this.state.timeType === "work") {
        this.setState({
          timeMin: e.target.value,
          timerSec: 0,
          isTimeratStartTime: true,
        });
        this.pause();
        document.getElementsByClassName("red-progress")[0].style.width = "0vw";
      }
    }
  }
  updateShortBreak(e) {
    if (e.target.value >= 1) {
      this.setState({ shortBreak: e.target.value });
      if (this.state.timeType === "shortBreak") {
        this.setState({
          timeMin: e.target.value,
          timerSec: 0,
          isTimeratStartTime: true,
        });
        this.pause();
        document.getElementsByClassName("red-progress")[0].style.width = "0vw";
      }
    }
  }
  updateLongBreak(e) {
    if (e.target.value >= 1) {
      this.setState({ longBreak: e.target.value });
      if (this.state.timeType === "longBreak") {
        this.setState({
          timeMin: e.target.value,
          timerSec: 0,
          isTimeratStartTime: true,
        });
        this.pause();
        document.getElementsByClassName("red-progress")[0].style.width = "0vw";
      }
    }
  }
  setTimetoW() {
    this.setState({
      timeMin: this.state.workTime,
      timerSec: 0,
      timeType: "work",
      loop: false,
    });
    this.pause();
    document.getElementsByClassName("red-progress")[0].style.width = "0vw";
  }
  setTimetoSB() {
    this.setState({
      timeMin: this.state.shortBreak,
      timerSec: 0,
      timeType: "shortBreak",
      loop: false,
    });
    this.pause();
    document.getElementsByClassName("red-progress")[0].style.width = "0vw";
  }
  setTimetoLB() {
    this.setState({
      timeMin: this.state.longBreak,
      timerSec: 0,
      timeType: "longBreak",
      loop: false,
    });
    this.pause();
    document.getElementsByClassName("red-progress")[0].style.width = "0vw";
  }
  onUpdateTimerMin() {
    this.setState((prevState) => {
      return {
        timeMin: prevState.timeMin - 1,
      };
    });
  }

  setDefaults() {
    this.setState({
      workTime: 25,
      shortBreak: 5,
      longBreak: 15,
      timeMin: 25,
      timerSec: 0,
      timeType: "work",
      isTimeratStartTime: true,
    });
    this.pause();
    document.getElementsByClassName("red-progress")[0].style.width = "0vw";
  }

  setSoundSrcTwinBell() {
    this.setState({
      soundsrc: "/audio/Twin-bell-alarm-clock.mp3",
    });
    this.reloadaudio();
    this.playaudio();
  }

  setSoundSrcGentle() {
    this.setState({
      soundsrc: "/audio/Gentle-wake-alarm-clock.mp3",
    });
    this.reloadaudio();
    this.playaudio();
  }

  play() {
    this.playStart();
    let intervalId = setInterval(this.decreaseTimer, 1000);
    this.setState({
      intervalId: intervalId,
      playDisabled: true,
      isTimeratStartTime: false,
    });
    this.reloadaudio();
  }

  pause() {
    clearInterval(this.state.intervalId);
    this.setState({
      playDisabled: false,
    });
  }

  restart() {
    document.getElementsByClassName("red-progress")[0].style.width = "0vw";
    this.pause();
    this.reloadaudio();
    this.setState({
      playDisabled: false,
      isTimeratStartTime: true,
    });
    switch (this.state.timeType) {
      case "work":
        this.setState({
          timeMin: this.state.workTime,
          timerSec: 0,
          timeType: "work",
        });
        this.pause();
        break;
      case "shortBreak":
        this.setState({
          timeMin: this.state.shortBreak,
          timerSec: 0,
          timeType: "shortBreak",
        });
        this.pause();
        break;
      case "longBreak":
        this.setState({
          timeMin: this.state.longBreak,
          timerSec: 0,
          timeType: "longBreak",
        });
        this.pause();
        break;
      default:
        this.setState({
          timeMin: this.state.workTime,
          timerSec: 0,
          timeType: "work",
        });
        this.pause();
        break;
    }
    this.setState({
      timerSec: 0,
    });
  }

  restartforClick() {
    this.restart();
    if (this.state.loop) {
      this.setState({
        timeMin: this.state.workTime,
        timerSec: 0,
        timeType: "work",
        count: 0,
      });
      this.pause();
    }
  }

  setLoop() {
    if (this.state.loop) {
      if (this.state.timeType === "work" && this.state.count < 6) {
        this.setState((prevState) => {
          return {
            timeType: "shortBreak",
            timeMin: this.state.shortBreak,
            count: prevState.count + 1,
          };
        });
        this.restart();
        this.play();
        this.playaudio();
      } else if (this.state.timeType === "shortBreak") {
        this.setState((prevState) => {
          return {
            timeType: "work",
            timeMin: this.state.workTime,
            count: prevState.count + 1,
          };
        });
        this.restart();
        this.play();
        this.playaudio();
      } else if (this.state.timeType === "work" && this.state.count === 6) {
        this.setState((prevState) => {
          return {
            timeType: "longBreak",
            timeMin: this.state.longBreak,
            count: prevState.count + 1,
          };
        });
        this.restart();
        this.play();
        this.playaudio();
      }
    } else if (this.state.timeType === "longBreak") {
      this.restartforClick();
    }
  }

  decreaseTimer() {
    switch (this.state.timerSec) {
      case 0:
        if (this.state.timeMin === 0) {
          this.pause();
          this.playaudio();
          this.setLoop();
          break;
        }
        this.onUpdateTimerMin();
        this.setState({
          timerSec: 59,
        });
        break;
      default:
        this.setState((prevState) => {
          return {
            timerSec: prevState.timerSec - 1,
          };
        });
        this.setWidth();
        break;
    }
  }

  playaudio() {
    const audioEl = document.getElementsByClassName("audio-element")[0];
    audioEl.play();
  }

  pauseaudio() {
    const audioEl = document.getElementsByClassName("audio-element")[0];
    audioEl.pause();
  }

  reloadaudio() {
    const audioEl = document.getElementsByClassName("audio-element")[0];
    audioEl.load();
  }

  onLoop() {
    document.getElementsByClassName("red-progress")[0].style.width = "0vw";
    if (this.state.loop) {
      this.setTimetoW();
    } else {
      this.setTimetoW();
      this.setState({
        loop: true,
      });
    }
  }

  showWorkType() {
    switch (this.state.count) {
      case 0:
        return <div className="work-session">Work Session: 1</div>;
      case 1:
        return <div className="work-session">Short Break Session: 1</div>;
      case 2:
        return <div className="work-session">Work Session: 2</div>;
      case 3:
        return <div className="work-session">Short Break Session: 2</div>;
      case 4:
        return <div className="work-session">Work Session: 3</div>;
      case 5:
        return <div className="work-session">Short Break Session: 3</div>;
      case 6:
        return <div className="work-session">Work Session: 4</div>;
      case 7:
        return <div className="work-session">Long Break</div>;
      default:
        return (
          <div className="work-session">
            Session Type: {this.state.timeType} Count: {this.state.count}
          </div>
        );
    }
  }

  playStart() {
    if (this.state.isTimeratStartTime) {
      this.setState({
        initalTotalTime: this.state.timeMin * 60,
      });
    }
  }

  setWidth() {
    //show progressbar with amount of increment i want (inc*numberOfElapsedSeconds)
    const front = document.getElementsByClassName("red-progress")[0];
    let timePassed =
      this.state.initalTotalTime -
      (this.state.timeMin * 60 + this.state.timerSec);
    this.setState({
      progressBarSize: timePassed * (50 / this.state.initalTotalTime),
    });
    front.style.width = this.state.progressBarSize + "vw";
    // console.log(this.state.progressBarSize);
  }

  componentDidMount() {
    //stuff in here runs when the page first loads
    console.log("Working...");
    document.getElementsByClassName("red-progress")[0].style.width = 0 + "vw";
    document.getElementsByClassName("bar-backround")[0].style.width = 50 + "vw";
    this.updateOnWindowChangeFn();
    window.addEventListener("resize", this.updateOnWindowChangeFn); //adds a listener that activates a fn when the "resize happens"
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateOnWindowChangeFn);
  }

  updateOnWindowChangeFn() {
    this.pause();
  }

  render() {
    if (this.state.loop) {
      return (
        <div className="App">
          <div className="topButtons header">
            <img
              className="clockPic"
              src="/timer-icon_31829.ico"
              alt="timer icon"
            />
            <Settings
              workTime={this.state.workTime}
              longBreak={this.state.longBreak}
              shortBreak={this.state.shortBreak}
              onWorkChange={this.updateWorkTime}
              onLongChange={this.updateLongBreak}
              onShortChange={this.updateShortBreak}
              setDefaults={this.setDefaults}
              setSoundSrcTwinBell={this.setSoundSrcTwinBell}
              setSoundSrcGentle={this.setSoundSrcGentle}
              soundSrc={this.state.soundsrc}
            />
            <AboutPage />
          </div>
          <div className="main">
            <div className="work btn">
              <Button onClick={this.setTimetoW}>Work Time</Button>
            </div>
            <div className="short btn">
              <Button onClick={this.setTimetoSB}>Short Break</Button>
            </div>
            <div className="long btn">
              <Button onClick={this.setTimetoLB}>Long Break</Button>
            </div>
            <div className="loop btn">
              <Button onClick={this.onLoop}>Loop: On</Button>
            </div>
            {this.showWorkType()}
            <div className="red-progress" />
            <div className="bar-backround" onClick={this.setWidth} />
            <Timer
              timerMin={this.state.timeMin}
              timerSec={this.state.timerSec}
              soundsrc={this.state.soundsrc}
              playDisabled={this.state.playDisabled}
              play={this.play}
              pause={this.pause}
              restartforClick={this.restartforClick}
              playaudio={this.playaudio}
              pauseaudio={this.pauseaudio}
            />
          </div>
          <div className="footer">Made By: Maxwell Wehner</div>
        </div>
      );
    } else {
      return (
        <div className="App">
          <div className="topButtons header">
            <img
              className="clockPic"
              src="/timer-icon_31829.ico"
              alt="timer icon"
            />
            <Settings
              workTime={this.state.workTime}
              longBreak={this.state.longBreak}
              shortBreak={this.state.shortBreak}
              onWorkChange={this.updateWorkTime}
              onLongChange={this.updateLongBreak}
              onShortChange={this.updateShortBreak}
              setDefaults={this.setDefaults}
              setSoundSrcTwinBell={this.setSoundSrcTwinBell}
              setSoundSrcGentle={this.setSoundSrcGentle}
              soundSrc={this.state.soundsrc}
            />
            <AboutPage />
          </div>
          <div className="main">
            <div className="work btn">
              <Button onClick={this.setTimetoW}>Work Time</Button>
            </div>
            <div className="short btn">
              <Button onClick={this.setTimetoSB}>Short Break</Button>
            </div>
            <div className="long btn">
              <Button onClick={this.setTimetoLB}>Long Break</Button>
            </div>
            <div className="loop btn">
              <Button onClick={this.onLoop}>Loop: Off</Button>
            </div>
            <br />
            <div className="red-progress" />
            <div className="bar-backround" onClick={this.setWidth} />
            <Timer
              timerMin={this.state.timeMin}
              timerSec={this.state.timerSec}
              soundsrc={this.state.soundsrc}
              playDisabled={this.state.playDisabled}
              play={this.play}
              pause={this.pause}
              restartforClick={this.restartforClick}
              playaudio={this.playaudio}
              pauseaudio={this.pauseaudio}
            />
          </div>
          <div className="footer">Made By: Maxwell Wehner</div>
        </div>
      );
    }
  }
}

export default App;
