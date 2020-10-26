import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";

const AboutPage = (props) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <div className="headingBtn">
      <Button variant="primary" onClick={handleShow}>
        About Pomadoro Technique
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>What is the Pomadoro Technique?</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <h3>About Pomodoro Technique</h3>
          <p>
            The Pomodoro™ Technique is a time management method developed by
            Francesco Cirillo in the late 1980s. This technique uses a timer to
            break down work into a set of intervals separated by breaks. The
            Pomodoro technique increases productivity by taking short scheduled
            breaks regularly.
          </p>
          <h3>How to use the Pomodoro timer</h3>
          <ol>
            <li>
              Decide on a task to be done and set the timer to 25 minutes for
              one "Pomodoro"
            </li>
            <li>Work on the task until timer is complete</li>
            <li>Take a 5 minutes short break</li>
            <li>After four "Pomodoro" take a long break</li>
            <li>Repeat to step 1</li>
          </ol>
          <p>USE THE LOOP BUTTON TO DO STEP 1 UNTIL STEP 5 IN A ROW</p>
          <br />
          <p>
            Pomodoro™ and Pomodoro Technique® are registered trademarks of
            Francesco Cirillo. This web app is not affiliated with Francesco
            Cirillo.
          </p>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default AboutPage;
