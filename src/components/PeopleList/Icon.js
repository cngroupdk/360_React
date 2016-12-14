import React, { Component } from 'react';
import FontAwesome from 'react-fa';

export default class Icon extends Component{
    render(){
        return(
            <FontAwesome name={this.props.type}/>
        );
    }
}

