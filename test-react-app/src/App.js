import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import Navigation from './navigation';
import ItemsList from './itemsList';
import myForm from "./myForm/myForm";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navigation />
          <Route path="/items-list" component={ItemsList} />
          <Route path="/my-form" component={myForm} />
        </div>
      </Router>
    );
  }
}

export default App;
