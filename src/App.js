import React, { Component } from 'react';
import Header from './components/Header/Header';
import './App.css';

export default class App extends Component {
    render() {
        return (
            <div id='globalContainer'>
                <Header />

                {this.props.children}
            </div>
        );
    }
}

