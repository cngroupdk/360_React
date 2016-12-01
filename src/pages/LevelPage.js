import React, { Component } from 'react';
import { Link } from 'react-router';
import { RadioGroup, Radio } from 'react-radio-group';

import { ContentContainer} from '../components/common/assets/styles/ContentContainer';
import { ContentHeader} from '../components/common/assets/styles/ContentHeader';
import { StyledButton } from '../components/common/assets/styles/StyledButton';
import { RadioWrapper } from '../components/common/assets/styles/RadioWrapper';

export default class LevelPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            level: '',
            personName: props.location.query.name
        };
        this.handleProfLevelChange = this.handleProfLevelChange.bind(this);
    }


    handleProfLevelChange(value) {
        this.setState({
            level: value
        });
    }

    render() {
        return (
            <ContentContainer>
                <ContentHeader> Please, choose the proficiency level for {this.state.personName}</ContentHeader>

                <RadioWrapper>
                    <RadioGroup name="prof-level" onChange={this.handleProfLevelChange}>
                        <label><Radio value="JUNIOR" /> Junior</label>
                        <label><Radio value="MIDDLE" /> Middle</label>
                        <label><Radio value="SENIOR" /> Senior</label>
                    </RadioGroup>
                </RadioWrapper>

                <StyledButton xyAlign disabled={this.state.level === '' ? true : false}>
                    <Link className={this.state.level === '' ? 'disabled-link' : ''} to="/questions-entry">Proceed to questions</Link>
                </StyledButton>

            </ContentContainer>
        )
    }
}