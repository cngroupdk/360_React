import React, { Component } from 'react';

import { ContentContainer} from '../common/assets/styles/ContentContainer';
import { HeaderRow, HeaderColumn } from '../common/assets/styles/HeaderRow';
import { PersonRow, PersonColumn } from '../common/assets/styles/PersonRow';
import { ContentHeader} from '../common/assets/styles/ContentHeader';

export default class SelfList extends Component {
    render() {
        const {
            selfList,
        } = this.props;

        return (
            <ContentContainer>

                <ContentHeader>Self Assessment</ContentHeader>

                <HeaderRow>
                    <HeaderColumn fluid sm={4}>Person</HeaderColumn>
                    <HeaderColumn fluid sm={2}>Department</HeaderColumn>
                    <HeaderColumn fluid sm={2}>Job category</HeaderColumn>
                    <HeaderColumn fluid sm={2}>Last submitted</HeaderColumn>
                    <HeaderColumn fluid sm={2}>&nbsp;</HeaderColumn>
                </HeaderRow>

                <PersonRow>
                    <PersonColumn fluid sm={4}>&nbsp;</PersonColumn>
                    <PersonColumn fluid sm={2}>&nbsp;</PersonColumn>
                    <PersonColumn fluid sm={2}>&nbsp;</PersonColumn>
                    <PersonColumn fluid sm={2}>&nbsp;</PersonColumn>
                    <PersonColumn fluid sm={2}>&nbsp;</PersonColumn>
                </PersonRow>
            </ContentContainer>
        );
    }
}
