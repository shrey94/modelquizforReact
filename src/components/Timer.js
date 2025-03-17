import React, { useEffect } from "react";

function Timer({ secondsRemaining, dispatch }) {
  const mins = Math.floor(secondsRemaining / 60);
  const seconds = secondsRemaining % 60;

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
  return (
    <div className="timer">
      {mins}:{seconds < 10 ? `0${seconds}` : `${seconds}`}
    </div>
  );
}

export default Timer;
