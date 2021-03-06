import React, { Component } from "react";

class Form extends Component {
  render() {
    return (
      <form onSubmit={(e) => this.props.handleSubmit(e)}>
        <label>Game Name </label>
        <input
          name="gameName"
          type="text"
          className="form-control"
          required="required"
          value={this.props.gameName}
          onChange={(e) => this.props.handleChange(e)}
          aria-label="write a title for your quiz"
          placeholder= "Enter a game name!"
        ></input>
        <label> Category</label>

        <select
          name="triviaCategory"
          className="form-control"
          value={this.props.triviaCategory}
          onChange={(e) => this.props.handleChange(e)}
        >
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

        <label>Number of Questions</label>
        <select
          name="nbrOfQuestions"
          className="form-control"
          value={this.props.nbrOfQuestions}
          onChange={(e) => this.props.handleChange(e)}
        >
          <option value="10">10</option>
          <option value="15">15</option>
          <option value="20">20</option>
        </select>
        {this.props.gameCardReady ? null : (
          <input
          type="submit"
          aria-label="select quiz options and begin game"
          value="Game on!"
        />

        )}
      </form>
    );
  }
}

export default Form;
