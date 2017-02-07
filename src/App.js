import React, { Component } from 'react';
import AppHeader from './components/AppHeader/AppHeader';
import AppFooter from './components/AppFooter/AppFooter';
import ConfirmationModal from './pages/ConfirmationModal';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div id='globalContainer'>
        <AppHeader />

        <div className="mainContainer">
          {this.props.children}
        </div>

        <AppFooter />
        <ConfirmationModal />
      </div>
    );
  }
}

