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

            for (let gameProperty in res){
                savedGamesState.push({
                    id: gameProperty,
					gameName: res[gameProperty].gameName,
					gameCategory: res[gameProperty].category,
					numQuestions: res[gameProperty].length
                })
            }

            this.setState({
                games: savedGamesState
            })
        })
    }

    // handleClick = (e) => {
    //     e.preventDefault();

    //     const dbRef = firebase.database().ref();

    //     dbRef.push(this.state.)
    // }

    render(){
        return(
            <section className="savedGameList">
                <div className="wrapper">
                    <h2>Saved Games</h2>
                </div>
                <ul className="allSavedGames">
                    {this.state.games.map(game => {
                        return(
                            <li className="savedGame">
                                <div className="wrapper">
                                    <h3>{game.gameName}</h3>
                                    <p>Game Category: {game.category}</p>
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