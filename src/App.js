import React, { Component } from "react";
import SavedGames from "./components/SavedGames";
import axios from "axios";
import firebase from "./firebase";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import "./App.css";
import Form from "./components/Form";
import GameCard from "./components/GameCard";
import apiRequest from "./apiRequest";

class App extends Component {
  constructor() {
    super();
    this.state = {
      triviaCategory: "Any",
      nbrOfQuestions: 10,
      apiData: [],
      gameName: "a great game",
      gameCardReady: false,
    };
  }

  handleSubmit = (event) => {
    event.preventDefault();

    const amount = this.state.nbrOfQuestions;
    const category = this.state.triviaCategory;

    apiRequest.getQuestions(category, amount).then((res) => {
      const actualState = this.state;
      actualState.apiData = res.data.results;
      this.setState({
        actualState,
        gameCardReady: true,
      });
      console.log(this.state.apiData);
    });
  };

  render() {
    return (
      <Router>
        <div className="App">
          <h1>Not So Trivial Pursuit</h1>
          <Route
            path="/newGame"
            render={() => {
              return (
                <>
                  <Form handleSubmit={this.handleSubmit} />
                  {this.state.gameCardReady ? (
                    <GameCard
                      apiData={this.state.apiData}
                      gameName={this.state.gameName}
                    />
                  ) : null}
                </>
              );
            }}
          />
          <Route path="/savedGames" component={SavedGames} />
          <nav>
            <ul>
              <button>
                <Link to="/newGame">New Game</Link>
              </button>
              <button>
                <Link to="/savedGames">Saved Games</Link>
              </button>
            </ul>
          </nav>
        </div>
      </Router>
    );
  }
}

export default App;
