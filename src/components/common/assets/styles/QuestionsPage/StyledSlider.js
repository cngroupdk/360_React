import styled from 'styled-components';

export const StyledSlider = styled.div`
  div{
    margin-top: 10px;
    font-size: 24px;
  }
  
  input[type=range] {
    -webkit-appearance: none;
    border: 1px solid white;
    width: 100%;
  }

  input[type=range]::-webkit-slider-runnable-track {
    width: 100%;
    height: 20px;
    background: #ddd;
    border: none;
    border-radius: 12px;
  }

  input[type=range]::-webkit-slider-thumb {
    -webkit-appearance: none;
    border: none;
    height: 40px;
    width: 40px;
    border-radius: 50%;
    background: #ed1848;
    margin-top: -10px;
  }
  
  input[type=range]:disabled::-webkit-slider-thumb {
    background: gray;
  }

  input[type=range]:focus {
    outline: none;
  }
  
  .light-gray {
    color: lightGray;
  }
`;
