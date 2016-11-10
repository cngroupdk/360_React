import React, { Component } from 'react';
import { Link } from 'react-router'
import Header from './components/Header/Header';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div>
        <Header />

        <button><Link to="/">Tasks and History</Link></button>
        <button><Link to="/people">People</Link></button>
        <button><Link to="/self">Self assessment</Link></button>

        {this.props.children}
      </div>
    );
  }
}

