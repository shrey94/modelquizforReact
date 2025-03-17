import React, { useEffect } from "react";

function Timer({ secondsRemaining, dispatch }) {
  useEffect(
    function () {
      const intervalId = setInterval(function () {
        dispatch({ type: "ticktok" });
        //   console.log("tick");
      }, 1000);
      return () => clearInterval(intervalId);
    },
    [dispatch]
  );
  return <div className="timer">{secondsRemaining}</div>;
}

export default Timer;
