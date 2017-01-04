import styled from 'styled-components';

export const StyledSlider = styled.div`
  div{
    margin-top: 3px;
    font-size: 24px;
  }
  
  input[type=range] {
    -webkit-appearance: none;
    border: 1px solid white;
    width: 100%;
  }
  
  input[type=range]:focus {
    outline: none;
  }

  input[type=range]::-webkit-slider-runnable-track {
    width: 100%;
    height: 10px;
    background: #ddd;
    border: none;
    border-radius: 6px;
  }

  input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: none;
    height: 24px;
    width: 24px;
    border-radius: 50%;
    background: #ed1848;
    margin-top: -7px;
  }
  
  input[type=range]:disabled::-webkit-slider-thumb {
    background: gray;
  }

  input[type=range]::-moz-range-thumb {
    border: none;
    height: 24px;
    width: 24px;
    border-radius: 50%;
    background: #ed1848;
    margin-top: -7px;
  }
  
  input[type=range]:disabled::-moz-range-thumb {
    background: gray;
  }
  
  input[type=range]::-moz-range-track{
    width: 100%;
    height: 10px;
    background: #ddd;
    border: none;
    border-radius: 6px;
  }
  
  input[type=range]::-ms-track {
    width: 100%;
    height: 5px;
    background: transparent;
    border-color: transparent;
    border-width: 6px 0;
    color: transparent;
  }

  input[type=range]::-ms-thumb {
    border: none;
    height: 16px;
    width: 16px;
    border-radius: 50%;
    background: #ed1848;
  }
  
  input[type=range]:disabled::-ms-thumb {
    background: gray;
  }
  
  .light-gray {
    color: lightGray;
  }
 
`;
