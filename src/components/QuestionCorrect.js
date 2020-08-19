import React from "react";

const QuestionCorrect = (props) => {
  return props.questionNumber === 0 ? null : props.questionCorrect ? (
    <p>Correct!</p>
  ) : (
    <p>Incorrect!</p>
  );
};

export default QuestionCorrect;
