import React, { Component } from 'react';

import Skills from './Skills';

export default class Level extends Component {
  constructor(props) {
    super(props);

    this.toggleSkills = this.toggleSkills.bind(this);
    this.state = { showSkillsSection: false };
  }

  toggleSkills() {
    const shouldDisplaySection = (this.state.showSkillsSection === false) ? true : false;
    this.setState({ showSkillsSection: shouldDisplaySection });
  }

  displaySkillsSection() {
    if (!this.state.showSkillsSection) { return null; }

    return <Skills skills={this.props.level} />;
  }

  render() {
    const {
      level
    } = this.props;

    return (
      <div>
        <h1 onClick={this.toggleSkills}>{level.get('Caption')}</h1>
        {this.displaySkillsSection()}
      </div>
    );
  }
}
