import React, { Component } from "react";
import Button from "./Button";
import saveGame from '.././functionality';
import ScoreCard from "./ScoreCard";
import parse from "html-react-parser";

class GameCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionNumber: 0,
      score: 0,
      questionCorrect: false,
      apiData: this.props.apiData
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
        questionNumber: this.state.questionNumber + 1,
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
          <p>{parse(question)}</p>
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
        <button onClick = {()=> {saveGame()}} apiData={this.props.apiData}>Save Game</button>
      </article>
    ) : (
      <article className="GameCard GameCardIncorrect">
        <div className="cardTitle">
          <h2>{this.props.gameName}</h2>
          <span>Question difficulty: {difficulty}</span>
          <ScoreCard
            score={this.state.score}
            gameLength={this.props.apiData.length}
          />
          <p>Waiting for correct answer...</p>
        </div>
        <div>
          <p>{parse(question)}</p>
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
        <button onClick = {()=> {saveGame(this.props.gameName, this.state.apiData)}}>Save Game</button>
      </article>
    );
  }
}

export default GameCard;
