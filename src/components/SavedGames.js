import React, { Component } from "react";
import GameCard from "./GameCard";
import { Route, Link } from "react-router-dom";
import firebase from "../firebase.js";
import SaveButton from "./SaveButton";

class SavedGames extends Component {
    constructor(props) {
        super(props);
        this.state = {
            games: [],
        };
    }

    componentDidMount() {
        const dbRef = firebase.database().ref();

        dbRef.on("value", (snapshot) => {
            const res = snapshot.val();

            const savedGamesState = [];

            for (let gameKey in res) {
                savedGamesState.push({
                    id: gameKey,
                    gameName: res[gameKey].gameName,
                    gameCategory: res[gameKey].category,
                    numQuestions: res[gameKey].numQuestions,
                    gameData: res[gameKey].gameData,
                });
            }

            this.setState({
                games: savedGamesState,
            });
        });
    }

    deleteGame = (gameID) => {
        const dbRef = firebase.database().ref();
        dbRef.child(gameID).remove();
        alert("Deleted!");
    };

    gameToParent = (gameIndex) => {
        this.props.saveSetter(this.state.games[gameIndex].gameData);
    };

    render() {
        console.log(this.props);

        return (
            <section className="savedGameList">
                <div className="wrapper">
                    <h2>Saved Games</h2>

                    <ul className="allSavedGames">
                        {this.state.games.map((game, index) => {
                            const deleteFunction = () => {
                                this.deleteGame(game.id);
                            };
                            return (
                                <li className="savedGame" key={index}>
                                    <h3>{game.gameName}</h3>
                                    <p>Category: {game.gameCategory}</p>
                                    <p>Number of Questions: {game.numQuestions}</p>
                                    <div className="controlButtons">
                                        <SaveButton
                                            gameToParent={this.gameToParent}
                                            thisIndex={index}
                                        />
                                        <Link to={`/newGame`}>Play Loaded Game</Link>
                                        <button onClick={deleteFunction}>Delete Game</button>
                                    </div>
                                </li>
                            );
                        })}
                    </ul>
                </div>
            </section>
        );
    }
}

export default SavedGames;
