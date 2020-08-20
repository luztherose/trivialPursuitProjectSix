import React, { Component } from "react";
import SavedGames from "./components/SavedGames";
import Header from './components/Header';
import Footer from "./components/Footer";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Form from "./components/Form";
import GameCard from "./components/GameCard";
import apiRequest from "./apiRequest";
import "./sass/App.scss";

class App extends Component {
  constructor() {
    super();
    this.state = {
      triviaCategory: "Any",
      nbrOfQuestions: 10,
      apiData: [],
      gameName: "",
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

  handleChange = (event) => {
    event.preventDefault();

    const target = event.target;
    const value = target.value;
    const name = target.name;

    this.setState({
      [name]: value,
    });

    console.log([value]);
  };

  saveSetter = (savedGame) => {
    this.setState({
      apiData: savedGame,
      gameCardReady: true,
    });
  };

  newGameClick = (e) => {
    this.setState({
      gameCardReady: false,
      triviaCategory: "Any",
      nbrOfQuestions: 10,
      apiData: [],
      gameName: ""
    })
  }

  render() {
    return (
      <Router>
        <div className="App">
          <div className="wrapper"></div>
          <Header />
          <Route
            path="/newGame"
            render={() => {
              return (
                <>
                  <Form
                    handleSubmit={this.handleSubmit}
                    handleChange={this.handleChange}
                    triviaCategory={this.state.triviaCategory}
                    nbrOfQuestions={this.state.nbrOfQuestions}
                    gameName={this.state.gameName}
                  />
                  {this.state.gameCardReady ? (
                    <GameCard
                      apidata={this.state.apiData}
                      gameName={this.state.gameName}
                    />
                  ) : null}
                </>
              );
            }}
          />
          <Route
            path="/savedGames"
            render={() => {
              return (
                <>
                  <SavedGames
                    apiData={this.state.apiData}
                    gameName={this.state.gameName}
                    saveSetter={this.saveSetter}
                  />
                </>
              );
            }}
          />
          <nav>
            <ul>
              <button>
                <Link to="/newGame" onClick={ this.newGameClick }>New Game</Link>
              </button>
              <button>
                <Link to="/savedGames">Saved Games</Link>
              </button>
            </ul>
          </nav>
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
