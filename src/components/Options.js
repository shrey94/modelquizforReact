import React from "react";

function Options({ question, dispatch, answer }) {
  const hasAnswered = answer !== null;

  return (
    <div className="question">
      <h4>{question.question}</h4>
      <div className="options">
        {question.options.map((option, index) => (
          <button
            disabled={hasAnswered}
            key={option}
            className={`btn btn-option ${index === answer ? "answer" : ""} ${
              hasAnswered
                ? index === question.correctOption
                  ? "correct"
                  : "wrong"
                : ""
            }`}
            onClick={() => dispatch({ type: "newAnswer", payload: index })}
          >
            {option}
          </button>
        ))}
      </div>
    </div>
  );
}

export default Options;
