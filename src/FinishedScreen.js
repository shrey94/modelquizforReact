import React from "react";

function FinishedScreen({ points, maxPoints, dispatch }) {
  const percentageScore = Math.ceil((points / maxPoints) * 100);
  return (
    <>
      <p className="result">
        You scored <strong>{points}</strong> out of {maxPoints} that is{" "}
        {percentageScore}!
      </p>
      <p>
        <button
          className="btn btn-ui"
          onClick={() => dispatch({ type: "restart" })}
        >
          Restart Quiz
        </button>
      </p>
    </>
  );
}

export default FinishedScreen;
