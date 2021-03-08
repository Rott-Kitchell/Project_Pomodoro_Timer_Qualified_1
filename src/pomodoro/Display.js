import React from "react";
import { secondsToDuration, minutesToDuration } from "../utils/duration";

export default function Display({ TimerData }) {
  let { focusSecs, counter, focusTime } = TimerData;
  let bar = `${(counter / focusSecs).toFixed(2)}`;
  console.log(bar);
  return (
    <div style={{ display: `${TimerData.display}` }}>
      {/* TODO: This area should show only when a focus or break session is running or pauses */}
      <div className="row mb-2">
        <div className="col">
          {/* TODO: Update message below to include current session (Focusing or On Break) and total duration */}
          <h2 data-testid="session-title">
            Focusing for {minutesToDuration(focusTime)} minutes
          </h2>
          {/* TODO: Update message below to include time remaining in the current session */}
          <p className="lead" data-testid="session-sub-title">
            {secondsToDuration(focusSecs - counter)} remaining
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
              aria-valuenow={bar} // TODO: Increase aria-valuenow as elapsed time increases
              style={{ width: `${bar * 100}%` }} // TODO: Increase width % as elapsed time increases
            />
          </div>
        </div>
      </div>
    </div>
  );
}
