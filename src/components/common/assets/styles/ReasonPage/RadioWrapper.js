import styled from 'styled-components';

export const RadioWrapper = styled.div`
  clear: both;
  margin-bottom: 50px;
  text-align: center;
  font-size: 18px; 
  
  label {
    margin: 0 15px;
    padding: 15px;
    border-radius: 15px;
    display: inline-block;
    margin: 20px;
    cursor: pointer;
    background-color: #ed1848;
    color:white;
    &:hover{
      opacity: 0.7;
    }
  }
  
  input[type=radio]:checked {
    display: inline-block;
  }
`;
