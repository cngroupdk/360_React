import styled from 'styled-components';

export const StyledProfilePhoto = styled.div`
    width: 50px;
    height: 50px;
    background-color: #d3d3d3;
    background-image: url(" ${props => props.imgUrl} ")
    background-size: 100%;
    border-radius: 50%;
    float: none;
    display: inline-block;
    vertical-align: middle;
`;