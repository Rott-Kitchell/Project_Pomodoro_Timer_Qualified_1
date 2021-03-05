import React, { useState } from "react";
import classNames from "../utils/class-names";
import useInterval from "../utils/useInterval";
import { minutesToDuration, secondsToDuration } from "../utils/duration";

function Pomodoro() {
  const initialState = {
    focusTime: 25,
    breakTime: 5,
    display: `none`,
  };
  // Timer starts out paused
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [TimerData, setTimerData] = useState({ ...initialState });
  const handleInOrDe = (event) => {
    event.preventDefault();
    console.log(event.target.nodeName);
    event.target.nodeName === "SPAN"
      ? console.log(event.target.parentNode.name)
      : console.log(event.target.name);
  };
  useInterval(
    () => {
      // ToDo: Implement what should happen when the timer is running
    },
    isTimerRunning ? 1000 : null
  );

  function playPause() {
    setIsTimerRunning((prevState) => !prevState);
  }

  return (
    <div className="pomodoro">
      <div className="row">
        <div className="col">
          <div className="input-group input-group-lg mb-2">
            <span className="input-group-text" data-testid="duration-focus">
              {/* TODO: Update this text to display the current focus session duration */}
              Focus Duration: {minutesToDuration(TimerData.focusTime)}
            </span>
            <div className="input-group-append">
              {/* TODO: Implement decreasing focus duration and disable during a focus or break session */}
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="decrease-focus"
                disabled={isTimerRunning}
                onClick={handleInOrDe}
                name="decrease-focus"
              >
                <span className="oi oi-minus" />
              </button>
              {/* TODO: Implement increasing focus duration  and disable during a focus or break session */}
              <button
                type="button"
                className="btn btn-secondary"
                data-testid="increase-focus"
                disabled={isTimerRunning}
                onClick={handleInOrDe}
                name="increase-focus"
              >
                <span className="oi oi-plus" />
              </button>
            </div>
          </div>
        </div>
        <div className="col">
          <div className="float-right">
            <div className="input-group input-group-lg mb-2">
              <span className="input-group-text" data-testid="duration-break">
                {/* TODO: Update this text to display the current break session duration */}
                Break Duration: {minutesToDuration(TimerData.breakTime)}
              </span>
              <div className="input-group-append">
                {/* TODO: Implement decreasing break duration and disable during a focus or break session*/}
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-testid="decrease-break"
                  disabled={isTimerRunning}
                  onClick={handleInOrDe}
                  name="decrease-break"
                >
                  <span className="oi oi-minus" name="decrease-break" />
                </button>
                {/* TODO: Implement increasing break duration and disable during a focus or break session*/}
                <button
                  type="button"
                  className="btn btn-secondary"
                  data-testid="increase-break"
                  disabled={isTimerRunning}
                  onClick={handleInOrDe}
                  name="increase-break"
                >
                  <span className="oi oi-plus" name="increase-break" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <div
            className="btn-group btn-group-lg mb-2"
            role="group"
            aria-label="Timer controls"
          >
            <button
              type="button"
              className="btn btn-primary"
              data-testid="play-pause"
              title="Start or pause timer"
              onClick={playPause}
            >
              <span
                className={classNames({
                  oi: true,
                  "oi-media-play": !isTimerRunning,
                  "oi-media-pause": isTimerRunning,
                })}
              />
            </button>
            {/* TODO: Implement stopping the current focus or break session and disable when there is no active session */}
            <button
              type="reset"
              className="btn btn-secondary"
              title="Stop the session"
              disabled={!isTimerRunning}
            >
              <span className="oi oi-media-stop" />
            </button>
          </div>
        </div>
      </div>
      <div style={{ display: `${initialState.display}` }}>
        {/* TODO: This area should show only when a focus or break session is running or pauses */}
        <div className="row mb-2">
          <div className="col">
            {/* TODO: Update message below to include current session (Focusing or On Break) and total duration */}
            <h2 data-testid="session-title">Focusing for 25:00 minutes</h2>
            {/* TODO: Update message below to include time remaining in the current session */}
            <p className="lead" data-testid="session-sub-title">
              25:00 remaining
            </p>
          </div>
        </div>
        <div className="row mb-2">
          <div className="col">
            <div className="progress" style={{ height: "20px" }}>
              <div
                className="progress-bar"
                role="progressbar"
                aria-valuemin="0"
                aria-valuemax="100"
                aria-valuenow="0" // TODO: Increase aria-valuenow as elapsed time increases
                style={{ width: "0%" }} // TODO: Increase width % as elapsed time increases
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pomodoro;
