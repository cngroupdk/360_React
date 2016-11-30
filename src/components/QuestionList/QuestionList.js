import React, { Component } from 'react';

import QuestionsListPerson from './QuestionsListPerson';

import { ContentContainer} from '../common/assets/styles/ContentContainer';
import { HeaderRow, HeaderColumn } from '../common/assets/styles/HeaderRow';

export default class PeopleList extends Component {

    render() {
        const {
            questions
        } = this.props;

        return (
            <ContentContainer>

                <HeaderRow>
                    <HeaderColumn fluid sm={6}>Question</HeaderColumn>
                    <HeaderColumn fluid sm={3}>Answer</HeaderColumn>
                    <HeaderColumn fluid sm={3}>Comment</HeaderColumn>
                </HeaderRow>

                {questions.map((question, index) => {
                    return (
                        <QuestionsListPerson question={question} key={index}/>
                    )
                })}
            </ContentContainer>
        );
    }
}