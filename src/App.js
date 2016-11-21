import React, { Component } from 'react';
import { IndexLink, Link } from 'react-router'
import Header from './components/Header/Header';
import './App.css';

export default class App extends Component {
    render() {
        return (
            <div id='globalContainer'>

                <Header />

                    <IndexLink to="/" className='tab' activeClassName='active'>Tasks and History</IndexLink>
                    <Link to="/people" className='tab' activeClassName='active' >People</Link>
                    <Link to="/self" className='tab' activeClassName='active' >Self assessment</Link>


                {this.props.children}
            </div>
        );
    }
}

