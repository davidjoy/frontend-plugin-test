import React, { useEffect, useState } from 'react';

import ReactDOM from 'react-dom';
import Draggable from 'react-draggable';
import { Button, Form } from '@edx/paragon';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlay, faPlug, faStop } from '@fortawesome/free-solid-svg-icons';

const defaultMinutes = 30;
const defaultSeconds = defaultMinutes * 60;

export function Pomodoro() {
  const [seconds, setSeconds] = useState(defaultSeconds);
  const [intervalId, setIntervalId] = useState(null);
  const [counting, setCounting] = useState(false);
  const handleChange = (event) => {
    const { value } = event.target;

    setSeconds(value * 60);
  };

  const handlePlayClick = () => {
    const newIntervalId = setInterval(() => {
      setSeconds(secs => secs - 1);
    }, 1000);
    setCounting(true);
    setIntervalId(newIntervalId);
  };

  const handleStopClick = () => {
    clearInterval(intervalId);
    setCounting(false);
    setIntervalId(null);
    setSeconds(defaultSeconds);
  };

  const secs = seconds % 60;
  const minutes = Math.floor(seconds / 60);

  return (
    <Draggable handle=".handle">
      <div
        className="d-flex justify-content-start align-items-center flex-column border border-danger rounded-circle shadow-lg"
        style={{
          width: 150,
          height: 150,
          position: 'absolute',
          zIndex: 1001,
          left: '50%',
          top: 30,
          backgroundColor: '#ffeeee',
        }}
      >
        <div
          className="handle mb-1 mt-4 px-4"
          style={{
            backgroundSize: 'cover',
            background: 'url("data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1IiBoZWlnaHQ9IjUiPgo8cmVjdCB3aWR0aD0iMSIgaGVpZ2h0PSIxIiBmaWxsPSIjODg4Ij48L3JlY3Q+Cjwvc3ZnPg==")',
            // width: 70,
            // height: 20,
            cursor: 'grab',
          }}
        >
          <FontAwesomeIcon icon={faPlug} />
        </div>
        <div className="mb-1">
          {counting && (
            <div style={{ height: 36 }}>{minutes}m {secs}s</div>
          )}
          {!counting && (
            <Form.Control size="sm" style={{ width: 46 }} value={seconds / 60} type="text" onChange={handleChange} />
          )}
        </div>
        <div>
          <Button
            className="mr-1 rounded-circle"
            variant="danger"
            onClick={handlePlayClick}
            size="sm"
          >
            <FontAwesomeIcon icon={faPlay} />
          </Button>
          <Button
            className="rounded-circle"
            onClick={handleStopClick}
            size="sm"
            variant="secondary"
          >
            <FontAwesomeIcon icon={faStop} />
          </Button>
        </div>
      </div>
    </Draggable>
  );
}

const pomodoroDiv = document.createElement('div');
pomodoroDiv.id = 'pomodoro';

document.body.appendChild(pomodoroDiv);

ReactDOM.render(<Pomodoro />, document.getElementById('pomodoro'));

export default pomodoroDiv;
