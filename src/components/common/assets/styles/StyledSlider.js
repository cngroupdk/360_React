import React, { Component } from 'react';
import styled from 'styled-components';

// Create an <Input> component that'll render an <input> tag with some styles
const Slider = styled.div`
    div {
        text-align: center;
    }
    input[type=range] {
        -webkit-appearance: none;

        border: 1px solid white;

        width: 100%;
    }
    input[type=range]::-webkit-slider-runnable-track {
        width: 300px;
        height: 5px;
        background: #ddd;
        border: none;
        border-radius: 3px;
    }
    input[type=range]::-webkit-slider-thumb {
        -webkit-appearance: none;
        border: none;
        height: 16px;
        width: 16px;
        border-radius: 50%;
        background: #ed1848;
        margin-top: -4px;
    }
    input[type=range]:focus {
        outline: none;
    }
    input[type=range]:focus::-webkit-slider-runnable-track {
        background: #ccc;
    }

    input[type=range]::-moz-range-track {
        width: 300px;
        height: 5px;
        background: #ddd;
        border: none;
        border-radius: 3px;
    }
    input[type=range]::-moz-range-thumb {
        border: none;
        height: 16px;
        width: 16px;
        border-radius: 50%;
        background: #ed1848;
    }

    input[type=range]:-moz-focusring{
        outline: 1px solid white;
        outline-offset: -1px;
    }

    input[type=range]::-ms-track {
        width: 300px;
        height: 5px;
        background: transparent;
        border-color: transparent;
        border-width: 6px 0;
        color: transparent;
    }
    input[type=range]::-ms-fill-lower {
        background: #777;
        border-radius: 10px;
    }
    input[type=range]::-ms-fill-upper {
        background: #ddd;
        border-radius: 10px;
    }
    input[type=range]::-ms-thumb {
        border: none;
        height: 16px;
        width: 16px;
        border-radius: 50%;
        background: #ed1848;
    }
    input[type=range]:focus::-ms-fill-lower {
        background: #888;
    }
    input[type=range]:focus::-ms-fill-upper {
        background: #ccc;
    }
`;


export default Slider