import React, { Component } from 'react';
import firebase from '.././firebase';
import GameCard from './GameCard';
import apiRequest from ".././apiRequest";

class DisplaySavedGame extends Component { 
    constructor(){
        super();
        this.state = {
            savedGameName: "",
            savedGameCategory: "",
            savedGameNumQuestions: 0
        }
    }
    componentDidMount(){
        const gameId = this.props.match.params

        const dbRef = firebase.database().ref();

        dbRef.on('value', (snapshot) => {

            const res = snapshot.val();

            for (let gameKey in res){
                if (gameId === res[gameKey].id){
                    this.setState({
                        savedGameName: res[gameKey].gameName,
                        savedGameCategory: res[gameKey].category,
                        savedGameNumQuestions: res[gameKey].numQuestions
                    })
                }  
            }   
        })

        const amount = this.state.savedGameNumQuestions;
        const category = this.state.savedGameCategory;

        apiRequest.getQuestions(category, amount).then((res) => {
            const actualState = this.state;
            actualState.apiData = res.data.results;
            this.setState({
                actualState,
            });
        })
    }
    
    render(){
        return(
            <p>hello</p>
        )
    }
}

export default DisplaySavedGame; 