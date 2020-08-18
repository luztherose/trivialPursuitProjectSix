import React, { Component } from "react";
import Button from "./Button";
import ScoreCard from "./ScoreCard";

class GameCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionNumber: 0,
      score: 0,
      questionCorrect: false,
    };
  }

  checkAnswer = (userAnswer) => {
    if (
      userAnswer ==
        this.props.apiData[this.state.questionNumber].correct_answer &&
      this.state.questionNumber < this.props.apiData.length
    ) {
      this.setState({
        questionNumber: this.state.questionNumber + 1,
        score: this.state.score + 1,
        questionCorrect: true,
      });
    } else if (
      userAnswer !==
        this.props.apiData[this.state.questionNumber].correct_answer &&
      this.state.questionNumber < this.props.apiData.length
    ) {
      this.setState({
        questionCorrect: false,
      });
    }
  };

  render() {
    const {
      difficulty,
      question,
      incorrect_answers,
      correct_answer,
    } = this.props.apiData[this.state.questionNumber];
    const answers = [correct_answer].concat(incorrect_answers).sort();
    return this.state.questionCorrect === true ? (
      <article className="GameCard GameCardCorrect">
        <div className="cardTitle">
          <h2>{this.props.gameName}</h2>
          <span>Question difficulty: {difficulty}</span>
          <ScoreCard
            score={this.state.score}
            gameLength={this.props.apiData.length}
          />
          <p>Correct!</p>
        </div>
        <div>
          <p>{question}</p>
        </div>
        <div className="answerSpace">
          {answers.map((answer, index) => {
            return (
              <Button key={index} onClick={() => this.checkAnswer(answer)}>
                {answer}
              </Button>
            );
          })}
        </div>
      </article>
    ) : (
      <article className="GameCard GameCardIncorrect">
        <div className="cardTitle">
          <h2>{this.props.gameName}</h2>
          <span>{difficulty} | </span>
          <ScoreCard
            score={this.state.score}
            gameLength={this.props.apiData.length}
          />
          <p>Waiting for correct answer...</p>
        </div>
        <div>
          <p>{question}</p>
        </div>
        <div className="answerSpace">
          {answers.map((answer, index) => {
            return (
              <Button key={index} onClick={() => this.checkAnswer(answer)}>
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
