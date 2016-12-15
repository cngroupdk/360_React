import React, { Component }  from 'react';

import HistoryListPerson from './HistoryListPerson';

import { ContentContainer} from '../common/assets/styles/ContentContainer';
import { HeaderRow, HeaderColumn } from '../common/assets/styles/HeaderRow';
import { ContentHeader} from '../common/assets/styles/ContentHeader';

export default class HistoryList extends Component {
    render() {
        const {
            historyPeople,
        } = this.props;

        return (
            <ContentContainer>

                <ContentHeader>History</ContentHeader>

                <HeaderRow>
                    <HeaderColumn fluid sm={3.5}>Person</HeaderColumn>
                    <HeaderColumn fluid sm={1.5}>Department</HeaderColumn>
                    <HeaderColumn fluid sm={2}>Job category</HeaderColumn>
                    <HeaderColumn fluid sm={2}>PR month</HeaderColumn>
                    <HeaderColumn fluid sm={3}>Last submitted</HeaderColumn>
                </HeaderRow>

                {historyPeople.map((person, index) => {
                    return (
                        <HistoryListPerson person={person} key={index}/>
                    )
                })}
            </ContentContainer>
        );
    }
}
