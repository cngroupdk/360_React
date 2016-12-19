import React, { Component } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div id='globalContainer'>
        <Header />

        <div className="mainContainer">
          {this.props.children}
        </div>

        <Footer />
      </div>
    );
  }
}

