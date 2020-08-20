import React from "react";

const ScoreCard = (props) => {
  return props.quizComplete ? (
    <article className="scoreCard winner">
      <h4>Your Score:</h4>
      <p>
        {props.score} / {props.gameLength}
      </p>
      <p>
        Congratulations on finishing the quiz! Click the "new game" to play
        again or click "save game" to store these questions for future play.
      </p>
    </article>
  ) : (
    <article className="scoreCard">
      <h4>Your Score:</h4>
      <p>
        {props.score} / {props.gameLength}
      </p>
    </article>
  );
};

export default ScoreCard;
