import React from "react";
import Button from "./button";

const Score = ({ refresh, score }) => {
  return (
    <article className="scoreCard">
      <h4>Your Score</h4>
      <p>{score}</p>
      <Button onClick={refresh}>Again?</Button>
    </article>
  );
};

export default Score;
