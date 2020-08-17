import React from "react";

const ScoreCard = (props) => {
  return props.score === props.gameLength ? (
    <article className="scoreCard winner">
      <h4>Your Score:</h4>
      <p>
        {props.score} / {props.gameLength}
      </p>
      <p>Congratulations! You are the big winner!</p>
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
