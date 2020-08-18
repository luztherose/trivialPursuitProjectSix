import React, { Component } from 'react';
import firebase from '../firebase.js';

class SavedGames extends Component {
    constructor(){
        super();
        this.state = {
            games: []
        }
    }

    componentDidMount() {
        const dbRef = firebase.database().ref();

        dbRef.on('value', (snapshot) => {

            const res = snapshot.val();

            const savedGamesState = [];

            for (let gameKey in res){
                savedGamesState.push({
                    id: gameKey,
					gameName: res[gameKey].gameName,
					gameCategory: res[gameKey].category,
					numQuestions: res[gameKey].length
                })
            }

            this.setState({
                games: savedGamesState
            })
        })
    }

    render(){
        return(
            <section className="savedGameList">
                <div className="wrapper">
                    <h2>Saved Games</h2>
                </div>
                <ul className="allSavedGames">
                    {this.state.games.map((game, index) => {
                        return(
                            <li className="savedGame" key={index}>
                                <div className="wrapper">
                                    <h3>{game.gameName}</h3>
                                    <p>Category: {game.gameCategory}</p>
                                    <p>Number of Questions: {game.numQuestions}</p>
                                </div>
                                <button onSubmit = {this.handleClick}>Play</button>
                            </li>
                        )
                    })}
                </ul>
            </section>
        )
    }
}

export default SavedGames;