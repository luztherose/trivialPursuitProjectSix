import React, { Component } from "react";
import "./App.css";
import Form from './Form';


class App extends Component {
  constructor(){
    super();
    this.state = {
      userChoice: [],
    }
  }


  render() {
    return (
      <div className="App">
        <h1>Not So Trivial Pursuit</h1>
        <Form />
      </div>
    );
  }
}
  
export default App;
