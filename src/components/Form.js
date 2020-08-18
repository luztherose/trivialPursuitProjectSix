import React, { Component } from 'react';
import apiRequest from './apiRequest';

class Form extends Component {
    constructor() {
        super();
        this.state = {
            triviaCategory: 'Any',
            nbrOfQuestions:10
        };
    }
    
    
    handleChange = (event) => {
        event.preventDefault();
    
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState ({
            [name]: value
        })
    
        console.log([value]);
    }
    
    handleSubmit = (event) => {
        event.preventDefault();

        const amount = this.state.nbrOfQuestions
        const category = this.state.triviaCategory


        apiRequest.getQuestions(category, amount).then((res) => {
            const actualState = this.state;
            actualState.apiData = res.data.results;
            this.setState(actualState);
            console.log(this.state.apiData);
        })
    
    }
    
    render() {
        return (
            <div>
                <h2>Let's start a new game!</h2>
                <form onSubmit={this.handleSubmit}>
                    <label> Select Category:</label>
                    <select name= "triviaCategory" className="form-control" value={this.state.triviaCategory} onChange={this.handleChange}>

                        <option value="Any">Any Category</option>
                        <option value="9">General Knowledge</option>
                        <option value="10">Entertainment: Books</option>
                        <option value="11">Entertainment: Film</option>
                        <option value="12">Entertainment: Music</option>
                        <option value="13">Entertainment: Musicals &amp; Theatres</option>
                        <option value="14">Entertainment: Television</option>
                        <option value="15">Entertainment: Video Games</option>
                        <option value="16">Entertainment: Board Games</option>
                        <option value="17">Science &amp; Nature</option>
                        <option value="18">Science: Computers</option>
                        <option value="19">Science: Mathematics</option>
                        <option value="20">Mythology</option>
                        <option value="21">Sports</option>
                        <option value="22">Geography</option>
                        <option value="23">History</option>
                        <option value="24">Politics</option>
                        <option value="25">Art</option>
                        <option value="26">Celebrities</option>
                        <option value="27">Animals</option>
                        <option value="28">Vehicles</option>
                        <option value="29">Entertainment: Comics</option>
                        <option value="30">Science: Gadgets</option>
                        <option value="31">Entertainment: Japanese Anime &amp; Manga</option>
                        <option value="32">Entertainment: Cartoon &amp; Animations</option>	
                    </select>

                <label>Number of Questions:</label>
                    <select name= "nbrOfQuestions" className="form-control" value={this.state.nbrOfQuestions} onChange={this.handleChange}>
                    <option value="10">10</option>
                    <option value="15">15</option>
                    <option value="20">20</option>
                </select>

                <input type="submit" value="Select" />

                </form>
            </div>
            );
        }
    }
    
export default Form;