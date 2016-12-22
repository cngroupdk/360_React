import styled from 'styled-components';

import { Link } from 'react-router';

export const StyledLink = styled(Link)`
  text-decoration: none;
  color: white;  
  text-align: center;
  padding: 5px 10px;
  font-weight: 700;
  white-space: nowrap;
  font-size: 16px;
  min-width: 130px;
  display: inline-block;
  
  background-color: ${props => props.disabled ? '#a1a1a1' : '#ed1848'};
  
  pointer-events: ${props => props.disabled ? 'none' : 'auto'};
  
  visibility: ${props => props.hidden ? 'hidden' : 'visible'};
`;
