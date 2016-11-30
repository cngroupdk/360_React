import styled from 'styled-components';

export const StyledButton = styled.button`
    text-align: center;
    color: #ffffff;
    padding: 5px 10px;
    font-weight: 700;
    white-space: nowrap;
    border: none;
    outline: none;
    font-size: 16px;
    
    position: ${ props => props.verticalAlign || props.xyAlign ? 'absolute' : 'static' };
    
    ${ props => props.verticalAlign ? 'top: 50%; transform: translateY(-50%);' : '' };
    ${ props => props.xyAlign ? 'left: 50%; top: 50%; transform: translate(-50%, -50%);' : '' };
    
    background-color: ${props => props.disabled? '#ed1848' : '#a1a1a1'};
    
    a {
        text-decoration: none;
        color:white;
    }

`;
