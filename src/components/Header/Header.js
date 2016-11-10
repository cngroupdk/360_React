import React, { Component } from 'react';
import logo from '../../logo.svg';

class Header extends Component {
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <span className="logo-wrapper">
                        <span className="logo-number">360&#176;</span>
                        <span className="logo-name">Feedback</span>
                    </span>
                    <img src={logo} className="App-logo" alt="logo"/>
                </div>
            </div>
        );
    }
}
export default Header;
