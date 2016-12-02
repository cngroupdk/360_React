import styled from 'styled-components';

export const StyledCommentBox = styled.div`
    textarea {
        padding: 5px;
        border: solid 1px #dcdcdc;
        transition: box-shadow 0.3s, border 0.3s;
        outline: none;
        resize: none;
    }

    textarea:focus,
    textarea.focus {
        border: solid 1px #707070;
        box-shadow: 0 0 5px 1px #969696;
    }
`;