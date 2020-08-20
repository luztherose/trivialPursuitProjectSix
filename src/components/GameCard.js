import React, { Component } from "react";
import Button from "./Button";
import saveGame from ".././functionality";
import ScoreCard from "./ScoreCard";
import QuestionCorrect from "./QuestionCorrect";
import parse from "html-react-parser";

class GameCard extends Component {
  constructor(props) {
    super(props);
    this.state = {
      questionNumber: 0,
      score: 0,
      questionCorrect: false,
      quizComplete: false,
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
      this.state.quizComplete === false
    ) {
      this.setState({
        score: this.state.score + 1,
        questionCorrect: true,
        quizComplete: true,
      });
    } else if (
      userAnswer !==
        this.props.apidata[this.state.questionNumber].correct_answer &&
      this.state.quizComplete === false
    ) {
      this.setState({
        questionCorrect: false,
        quizComplete: true,
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
    return (
      <article className="GameCard GameCardCorrect">
        <div className="cardTitle">
          <h2>{this.props.gameName}</h2>
          <div className="flexContainer">
            <span>Question difficulty: {difficulty}</span>
            <ScoreCard
              score={this.state.score}
              gameLength={this.props.apidata.length}
              questionNumber={this.state.questionNumber}
              quizComplete={this.state.quizComplete}
            />
          </div>
          <QuestionCorrect
            questionCorrect={this.state.questionCorrect}
            questionNumber={this.state.questionNumber}
          />
        </div>
        <div className="questionBox">
          <p>
            Question number {this.state.questionNumber + 1}: {parse(question)}
          </p>
          <div className="answerSpace">
            {answers.map((answer, index) => {
              return (
                <Button key={index} onClick={() => this.checkAnswer(answer)}>
                  {parse(answer)}
                </Button>
              );
            })}
          </div>
        </div>
        <button
          onClick={() => {
            saveGame(this.props.gameName, this.props.apidata);
          }}
        
        >
          Save Game
        </button>
      </article>
    );
  }
}

export default GameCard;