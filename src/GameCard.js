import React from "react";
import Button from "./button";

class GameCard extends Component {
  constructor() {
    super();
    this.state = {
      questionNumber: 0,
      question: this.props.apiData[`${this.state.questionNumber}`],
    };
  }

  checkAnswer = (userAnswer) => {
    if (
      userAnswer === this.props.apiData.correct_answer &&
      this.state.questionNumber < this.props.apiData.length()
    ) {
      this.setState({
        questionNumber: this.state.questionNumber + 1,
      });
    }
  };

  render() {
    const {
      difficulty,
      question,
      incorrect_answers,
      correct_answer,
    } = this.props.question;
    const { checkAnswerFn } = this.props.checkAnswerFn;
    const answers = [correct_answer].concat(incorrect_answers).sort();
    return this.state.questionNumber > 0 ? (
      <article className="GameCard">
        <header>
          <span>{difficulty} | </span>
        </header>
        <div>
          <p>{question}</p>
        </div>
        <div className="answerSpace">
          {answers.map((answer, index) => {
            return (
              <Button key={index} onClick={checkAnswer(answer)}>
                {answer}
              </Button>
            );
          })}
        </div>
      </article>
    ) : (
      <article className="GameCardCorrect">
        <header>
          <span>{difficulty} | </span>
          <h3>Correct! Next Question:</h3>
        </header>
        <div>
          <p>{question}</p>
        </div>
        <div className="answerSpace">
          {answers.map((answer, index) => {
            return (
              <Button
                key={index}
                onClick={checkAnswerFn(answer, correct_answer)}
              >
                {answer}
              </Button>
            );
          })}
        </div>
      </article>
    );
  }
}

export default GameCard;
