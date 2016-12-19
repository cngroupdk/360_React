import styled from 'styled-components';

export const QuestionContainer = styled.div`
  text-align: left;
  margin: 0 0 15px;
  border: 1px solid #bae2e8;
  
  h4 {
    background-color: #edfbfd;
    border-bottom: 1px solid #bae2e8;
    padding: 10px 20px;
    margin: 0;
    font-weight: normal;
  }
  
  .components-container {
    margin-top: 25px;
    text-align: center;
  }
  
  .checkbox-container {
    width: 25%;
    float: left;
  }

  .slider-container {
    width: 50%;
    float: left;
    padding: 0 2%;
  }
  
  .add-button-container {
    width: 21%;
    float: left;
  }
  
  .clear {
    clear: both;
  }
  
  .hidden {
    display: none;
  }
`;
