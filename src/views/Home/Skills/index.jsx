import React from 'react'

import SkillItem from './SkillItem'

const Skills = ({ front, back, tools }) => (
  <div className="home__skills section">
    <div className="background-name">
      FRONT
      <span>END</span>
    </div>

    <h2 className="home__skills__heading">skills</h2>
    <ul className="home__skills__list">
      {/* front-end skills */}
      <li className="home__skills__list__item home__skills__list__heading green">
        front
      </li>
      {front.map(skill => (
        <SkillItem key={skill} skill={skill} />
      ))}

      {/* back-end skills */}
      <li className="home__skills__list__item home__skills__list__heading red">
        back
      </li>
      {back.map(skill => (
        <SkillItem key={skill} skill={skill} />
      ))}

      {/* tools skills */}
      <li className="home__skills__list__item home__skills__list__heading green">
        tools
      </li>
      {tools.map(skill => (
        <SkillItem key={skill} skill={skill} />
      ))}
    </ul>
  </div>
)

export default Skills
