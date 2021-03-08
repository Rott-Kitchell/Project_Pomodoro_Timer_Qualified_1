import React, { useState } from "react";

import useInterval from "../utils/useInterval";
import Display from "./Display";
import TimerDurations from "./TimerDurations";
import ControlButtons from "./ControlButtons";

function Pomodoro() {
  const initialState = {
    focusTime: 25,
    breakTime: 5,
    display: `none`,
    focusSecs: 1500,
    breakSecs: 300,
    counter: 0,
  };
  // Timer starts out paused
  const [isTimerRunning, setIsTimerRunning] = useState(false);
  const [TimerData, setTimerData] = useState({ ...initialState });

  useInterval(
    () => {
      setTimerData((currentData) => {
        return { ...currentData, counter: currentData.counter + 1 };
      });
    },
    isTimerRunning ? 100 : null
  );

  function playPause() {
    setIsTimerRunning((prevState) => !prevState);
    setTimerData({ ...TimerData, display: "block" });
  }

  return (
    <div className="pomodoro">
      <TimerDurations
        TimerData={TimerData}
        isTimerRunning={isTimerRunning}
        setTimerData={setTimerData}
      />
      <ControlButtons playPause={playPause} isTimerRunning={isTimerRunning} />
      <Display TimerData={TimerData} />
    </div>
  );
}

export default Pomodoro;
