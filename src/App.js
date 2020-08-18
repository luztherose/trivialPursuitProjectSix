import React, { Component } from "react";
import axios from 'axios';
import "./App.css";
import Form from "./Form";

class App extends Component {
  constructor() {
    super();
    this.state = {
      userChoice: [],
      apiData: [],
    };
  }

  render() {
    return (
      <div className="App">
        <header>
          <h1>Not So Trivial Pursuit</h1>
          <Form />
        </header>
        <main>
          <GameCard apiData={this.state.apiData} />
        </main>
      </div>
    );
  }
}

export default App;
