import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import firebase from '../firebase.js';

class SavedGames extends Component {
    constructor(props){
        super(props);
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
					numQuestions: res[gameKey].numQuestions
                })
            }

            this.setState({
                games: savedGamesState
            })
        })
    }

    deleteGame = (gameID) => {
        const dbRef = firebase.database().ref();
        dbRef.child(gameID).remove();
        alert('Deleted!');
    }

    render(){
        console.log(this.props)

        return(
            <section className="savedGameList">
                <div className="wrapper">
                    <h2>Saved Games</h2>
                </div>
                <ul className="allSavedGames">
                    {this.state.games.map((game, index) => {
                        const deleteFunction = () => {
                            this.deleteGame(game.id)
                        }
                        return(
                            <li className="savedGame" key={index}>
                                <div className="wrapper">
                                    <h3>{game.gameName}</h3>
                                    <p>Category: {game.gameCategory}</p>
                                    <p>Number of Questions: {game.numQuestions}</p>
                                </div>
                                <Link to={`/savedGames/${game.id}`}>Play</Link>
                                <button onClick = { deleteFunction }>Delete</button>
                            </li> 
                        )
                    })}
                </ul>
            </section>
        )
    }
}

export default SavedGames;