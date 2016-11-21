import React, { Component } from 'react';
import styled from 'styled-components';

const StyledCard = styled.div`

    float: right;
`;

export default class SelfCard extends Component {
    render() {

        const {
            self,
        } = this.props;

        return (
                <StyledCard>{self.Name}</StyledCard>
        );
    }
}
