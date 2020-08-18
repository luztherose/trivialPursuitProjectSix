import React, { Component } from "react";
import NewGame from './components/NewGame';
import SavedGames from './components/SavedGames';
import axios from 'axios';
import firebase from './firebase';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import "./App.css";
import Form from './Form';


class App extends Component {

  render() {
    return (
      <Router>
        <div className="App">
          <h1>Not So Trivial Pursuit</h1>
          <Route path="/newGame" component = { Form } />
          <Route path="/savedGames" component = { SavedGames } />
          <nav>
            <ul>
              <button><Link to="/newGame">New Game</Link></button>
              <button><Link to="/savedGames">Saved Games</Link></button>
            </ul>
          </nav>
        </div>
      </Router>
    );
  }
}
  
export default App;
