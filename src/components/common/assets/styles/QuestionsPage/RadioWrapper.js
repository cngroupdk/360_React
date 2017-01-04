import styled from 'styled-components';

export const RadioWrapper = styled.div`
  clear: both;
  margin-bottom: 50px;
  text-align: center;
  font-size: 18px; 
  
  label {
    margin: 0 15px;
    padding: 7px 15px 7px 15px;
    border-radius: 20px;
    display: inline-block;
    margin: 20px;
    cursor: pointer;
    background-color: #e6f8fc;
    border: 1px solid #bae2e8;
    color: black;
    &:hover{
      opacity: 0.7;
    }
  }
  
  input[type=radio]:checked {
    display: inline-block;
  }
`;
