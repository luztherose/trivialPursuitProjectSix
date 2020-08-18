import React, { Component } from "react";
import Form from './components/Form';
import SavedGames from './components/SavedGames';
import Footer from './components/Footer'
import axios from 'axios';
import firebase from './firebase';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import "./App.scss";

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
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
