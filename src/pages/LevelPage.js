import React, { Component } from 'react';
import { Link } from 'react-router';

import { ContentContainer} from '../components/common/assets/styles/ContentContainer';
import { ContentHeader} from '../components/common/assets/styles/ContentHeader';
import { StyledButton } from '../components/common/assets/styles/StyledButton';
import { RadioWrapper } from '../components/common/assets/styles/RadioWrapper';

export default class LevelPage extends Component {

    constructor(props) {
        super(props);
        this.state = {level: '', personName: props.location.query.name };
        this.handleProfLevelChange = this.handleProfLevelChange.bind(this);
    }


    handleProfLevelChange(e) {
        this.setState({
            level: e.target.value
        });
    }

    render() {
        return (
            <ContentContainer>
                <ContentHeader> Please, choose the proficiency level for {this.state.personName}</ContentHeader>

                <RadioWrapper>
                    <input type="radio" name="prof-level" value="JUNIOR" onChange={this.handleProfLevelChange}/> Junior
                    <input type="radio" name="prof-level" value="MIDDLE" onChange={this.handleProfLevelChange}/> Middle
                    <input type="radio" name="prof-level" value="SENIOR" onChange={this.handleProfLevelChange}/> Senior
                </RadioWrapper>

                    <StyledButton xyAlign disabled={this.state.level === '' ? true : false}>
                        <Link className={this.state.level === '' ? 'disabled-link' : ''} to="/questions-entry">Proceed to questions</Link>
                    </StyledButton>

            </ContentContainer>
        )
    }
}