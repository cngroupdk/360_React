import styled from 'styled-components';

 const StyledCommentBox = styled.div`
     textarea {
       padding: 5px;
       border: solid 1px #dcdcdc;
       transition: box-shadow 0.3s, border 0.3s;
     }
     textarea:focus,
     textarea.focus {
      border: solid 1px #707070;
       box-shadow: 0 0 5px 1px #969696;
     }
`;

export default StyledCommentBox;