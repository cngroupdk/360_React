import styled from 'styled-components';

export const StyledLinkWrapper = styled.div`

  display: inline-block;

  ${ props => props[`data-vertical-align`] ?
    'position: absolute; ' +
    'top: 50%; ' +
    'transform: translateY(-50%);' : '' };
  
  ${ props => props[`data-xyAlign`] ?
    'position: absolute; ' +
    'top: 50%; ' +
    'left: 50%; ' +
    'transform: translate(-50%, -50%)' : '' };
      
  ${ props => props[`data-margin-right-30`] ? 'margin-right: 30px' : '' };
  
  ${ props => props[`data-right-align`] ? 'float: right' : ''};
`;
