import React from 'react';
import styled from 'styled-components';

export const ProfilePhoto = styled.div`
    width: 50px;
    height: 50px;
    background-color: #d3d3d3;
    background-size: 100%;
    border-radius: 50%;
    float: none;
    display: inline-block;
    vertical-align: middle;
`;

export const StyledProfilePhoto = ({ imgUrl }) => (
  <ProfilePhoto style={{ backgroundImage: `url(${imgUrl})` }} />
);
