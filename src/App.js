import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      triviaCategory: 'Any Category',
      nbrOfQuestions:10
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    event.preventDefault();

    const target = event.target;
    const value = target.value;
    // const name = target.name;

    this.setState ({
      triviaCategory: value,
      nbrOfQuestions: value
      // [name]: value
    })

    console.log([value]);
  
  }

  handleSubmit(event) {
    event.preventDefault();

  }

  render() {
    return (
        <div className="App">
          <h1>Not So Trivial Pursuit</h1>
        
          <form onSubmit={this.handleSubmit}>
            <label> Select Category:</label>
              <select name= "triviaCategory" className="form-control" value={this.state.triviaCategory} onChange={this.handleChange}>
                
                <option value="Any Category">Any Category</option>
                <option value="General Knowledge">General Knowledge</option>
                <option value="Entertainment: Books">Entertainment: Books</option>
                <option value="Entertainment: Film">Entertainment: Film</option>
                <option value="Entertainment: Music">Entertainment: Music</option>
                <option value="Entertainment: Musicals &amp; Theatres">Entertainment: Musicals &amp; Theatres</option>
                <option value="Entertainment: Television">Entertainment: Television</option>
                <option value="Entertainment: Video Games">Entertainment: Video Games</option>
                <option value="Entertainment: Board Games">Entertainment: Board Games</option>
                <option value="Science &amp; Nature">Science &amp; Nature</option>
                <option value="Science: Computers">Science: Computers</option>
                <option value="Science: Mathematics">Science: Mathematics</option>
                <option value="Mythology">Mythology</option>
                <option value="Sports">Sports</option>
                <option value="Geography">Geography</option>
                <option value="History">History</option>
                <option value="Politics">Politics</option>
                <option value="Art">Art</option>
                <option value="Celebrities">Celebrities</option>
                <option value="Animals">Animals</option>
                <option value="Vehicles">Vehicles</option>
                <option value="Entertainment: Comics">Entertainment: Comics</option>
                <option value="Science: Gadgets">Science: Gadgets</option>
                <option value="Entertainment: Japanese Anime &amp; Manga">Entertainment: Japanese Anime &amp; Manga</option>
                <option value="Entertainment: Cartoon &amp; Animations">Entertainment: Cartoon &amp; Animations</option>	
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

export default App;
