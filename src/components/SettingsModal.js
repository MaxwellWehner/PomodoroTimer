import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const Settings = ({
  workTime,
  shortBreak,
  longBreak,
  onWorkChange,
  onLongChange,
  onShortChange,
  setDefaults,
  setSoundSrcTwinBell,
  setSoundSrcGentle,
  soundSrc,
}) => {
  const [show, setShow] = useState(false);
  const [gentleChecked, setGentleChecked] = useState(true);
  const [twinChecked, setTwinChecked] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  useEffect(() => {
    switch (soundSrc) {
      case "/audio/Gentle-wake-alarm-clock.mp3":
        setGentleChecked(true);
        setTwinChecked(false);
        break;
      case "/audio/Twin-bell-alarm-clock.mp3":
        setGentleChecked(false);
        setTwinChecked(true);
        break;
      default:
        setGentleChecked(true);
        setTwinChecked(false);
        break;
    }
  }, [soundSrc]);

  const createDataList = () => {
    let children = [];
    for (let i = 5; i <= 60; i += 5) {
      children.push(<option key={i + 1} value={i} />);
    }
    return (
      <datalist id="time" autoComplete="off">
        {children}
      </datalist>
    );
  };

  const defaults = () => {
    setDefaults();
    let workInput = document.getElementById("workTime");
    let sbrInput = document.getElementById("shortBreak");
    let lbrInput = document.getElementById("longBreak");
    workInput.value = 25;
    lbrInput.value = 15;
    sbrInput.value = 5;
  };

  return (
    <div className="headingBtn">
      <Button variant="primary" onClick={handleShow}>
        Time Settings
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header>
          <Modal.Title>Cofigure Clock Times</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <form>
            <label htmlFor="workTime">Work Time in Min:</label>
            <br />
            <input
              type="number"
              id="workTime"
              list="time"
              onChange={onWorkChange}
              placeholder={workTime}
              min={1}
              max={200}
            />
            {createDataList()}
          </form>
          <form>
            <label htmlFor="shotBreak">Short Break Time in Min:</label>
            <br />
            <input
              type="number"
              id="shortBreak"
              list="time"
              onChange={onShortChange}
              placeholder={shortBreak}
              min={1}
              max={200}
            />
            {createDataList()}
          </form>
          <form>
            <label htmlFor="longBreak">Long Break Time in Min:</label>
            <br />
            <input
              type="number"
              id="longBreak"
              list="time"
              onChange={onLongChange}
              placeholder={longBreak}
              min={1}
              max={200}
            />
            {createDataList()}
          </form>
          <br />
          <form>
            <p>Select alarm tone:</p>
            <input
              type="radio"
              id="Gentle"
              name="soundType"
              value="Gentle"
              onClick={setSoundSrcGentle}
              defaultChecked={gentleChecked}
            />
            <label htmlFor="Gentle">Gentle Wake Up</label>
            <br />
            <input
              type="radio"
              id="TwinBell"
              name="soundType"
              value="TwinBell"
              onClick={setSoundSrcTwinBell}
              defaultChecked={twinChecked}
            />
            <label htmlFor="TwinBell">TwinBell</label>
          </form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={defaults}>
            Reset to Default
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Ok
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default Settings;
