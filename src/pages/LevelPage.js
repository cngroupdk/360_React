import React, { Component } from 'react';
import { RadioGroup, Radio } from 'react-radio-group';

import { ContentContainer} from '../components/common/assets/styles/ContentContainer';
import { ContentHeader} from '../components/common/assets/styles/ContentHeader';
import { StyledLink } from '../components/common/assets/styles/StyledLink';
import { RadioWrapper } from '../components/common/assets/styles/ReasonPage/RadioWrapper';

export default class LevelPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            level: '',
            personName: props.location.query.name
        };
        this._handleProfLevelChange = this._handleProfLevelChange.bind(this);
    }


    _handleProfLevelChange(value) {
        this.setState({
            level: value
        });
    }

    render() {
        return (
            <ContentContainer>
                <ContentHeader> Please, choose the proficiency level for {this.state.personName}</ContentHeader>

                <RadioWrapper>
                    <RadioGroup name="prof-level" onChange={this._handleProfLevelChange}>
                        <label><Radio value="JUNIOR" /> Junior</label>
                        <label><Radio value="MIDDLE" /> Middle</label>
                        <label><Radio value="SENIOR" /> Senior</label>
                    </RadioGroup>
                </RadioWrapper>

                <StyledLink disabled={this.state.level === ''} to="/questions-entry">Proceed to questions</StyledLink>

            </ContentContainer>
        )
    }
}