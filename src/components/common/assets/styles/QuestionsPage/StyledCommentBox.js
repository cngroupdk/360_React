import styled from 'styled-components';

export const StyledCommentBox = styled.div`
  textarea {
    width: 93%;
    height: 50px;
    border: solid 1px #bae2e8;
    transition: box-shadow 0.3s, border 0.3s;
    outline: none;
    resize: none;
    font-size: 14px;
    padding: 5px 10px;
  }

  text-align: center;
  padding-bottom: 15px;
  
  textarea:focus,
  textarea.focus {
    border: solid 1px #077494;
    box-shadow: 0 0 5px 1px #1EADE0;
  }
`;
