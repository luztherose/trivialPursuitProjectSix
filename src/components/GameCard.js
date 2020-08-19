import React, { Component } from "react";
import Button from "./Button";
import saveGame from ".././functionality";
import ScoreCard from "./ScoreCard";
import parse from "html-react-parser";

class GameCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionNumber: 0,
      score: 0,
      questionCorrect: false,
      apiData: this.props.apidata,
    };
  }

  checkAnswer = (userAnswer) => {
    if (
      userAnswer ===
        this.props.apidata[this.state.questionNumber].correct_answer &&
      this.state.questionNumber < this.props.apidata.length - 1
    ) {
      this.setState({
        questionNumber: this.state.questionNumber + 1,
        score: this.state.score + 1,
        questionCorrect: true,
      });
    } else if (
      userAnswer !==
        this.props.apidata[this.state.questionNumber].correct_answer &&
      this.state.questionNumber < this.props.apidata.length - 1
    ) {
      this.setState({
        questionNumber: this.state.questionNumber + 1,
        questionCorrect: false,
      });
    } else if (
      userAnswer ===
        this.props.apidata[this.state.questionNumber].correct_answer &&
      this.state.questionNumber < this.props.apidata.length
    ) {
      this.setState({
        score: this.state.score + 1,
        questionCorrect: true,
      });
    } else if (
      userAnswer !==
        this.props.apidata[this.state.questionNumber].correct_answer &&
      this.state.questionNumber < this.props.apidata.length
    ) {
      this.setState({
        questionCorrect: true,
      });
    }
  };

  render() {
    const {
      difficulty,
      question,
      incorrect_answers,
      correct_answer,
    } = this.props.apidata[this.state.questionNumber];
    const answers = [correct_answer].concat(incorrect_answers).sort();
    return this.state.questionNumber === true ? (
      <article className="GameCard GameCardCorrect">
        <div className="cardTitle">
          <h2>{this.props.gameName}</h2>
          <span>Question difficulty: {difficulty}</span>
          <ScoreCard
            score={this.state.score}
            gameLength={this.props.apidata.length}
            questionNumber={this.state.questionNumber}
          />
          <p>Correct!</p>
        </div>
        <div>
          <p>
            Question number {this.state.questionNumber + 1}: {parse(question)}
          </p>
        </div>
        <div className="answerSpace">
          {answers.map((answer, index) => {
            return (
              <Button key={index} onClick={() => this.checkAnswer(answer)}>
                {parse(answer)}
              </Button>
            );
          })}
        </div>
        <button
          onClick={() => {
            saveGame();
          }}
          apidata={this.props.apidata}
        >
          Save Game
        </button>
      </article>
    ) : (
      <article className="GameCard GameCardIncorrect">
        <div className="cardTitle">
          <h2>{this.props.gameName}</h2>
          <span>Question difficulty: {difficulty}</span>
          <ScoreCard
            score={this.state.score}
            gameLength={this.props.apidata.length}
            questionNumber={this.state.questionNumber}
          />
          <p>Waiting for correct answer...</p>
        </div>
        <div>
          <p>
            Question number {this.state.questionNumber + 1}: {parse(question)}
          </p>
        </div>
        <div className="answerSpace">
          {answers.map((answer, index) => {
            return (
              <Button key={index} onClick={() => this.checkAnswer(answer)}>
                {parse(answer)}
              </Button>
            );
          })}
        </div>
        <button
          onClick={() => {
            saveGame(this.props.gameName, this.state.apiData);
          }}
        >
          Save Game
        </button>
      </article>
    );
  }
}

export default GameCard;
