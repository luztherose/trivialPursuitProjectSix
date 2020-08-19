import React from "react";

const ScoreCard = (props) => {
  return props.questionNumber === props.gameLength ? (
    <article className="scoreCard winner">
      <h4>Your Score:</h4>
      <p>
        {props.score} / {props.gameLength}
      </p>
      <p>
        Congratulations, you are the big winner! Press "New Game" to play again
        or "save game" to store this one for future play.
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
