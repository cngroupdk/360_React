import styled from 'styled-components';

export const StyledProfilePhoto = styled.div`
  width: ${props => props.radius ? props.radius : '50px'};
  height: ${props => props.radius ? props.radius : '50px'};
  background-color: #d3d3d3;
  background-size: 100%;
  border-radius: 50%;
  float: none;
  display: inline-block;
  vertical-align: middle;
  background-image: url(${props => props.imgUrl});
`;
