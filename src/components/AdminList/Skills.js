import React from 'react';

const Skills = (props) => {
  const {
    skills,
  } = props;

  return (
    <div>
      {skills.get('Skills').map((skill) => {
        return (
          <div key={skill.get('Id')}>
            {skill.get('Caption')}
          </div>
        );
      })}
    </div>
  );
};

export default Skills;
