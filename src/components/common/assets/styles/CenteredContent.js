import styled from 'styled-components';


export const CenteredContent = styled.div`
  position: absolute;
  top: 50%;
  
  ${ props => props[`data-xyAlign`] ?
    'left: 50%; ' +
    'transform: translate(-50%, -50%);'
    :
    'transform: translateY(-50%);' }
`;
