// Develop a component that lists your skills. 
// Each skill could be displayed using a separate component that receives props for the skill name and proficiency level.

import AddSkill from './AddSkill.js'

export default function SkillList({ skills }) {
  return (
    <div className="skill-list">
      <h3>Skills:</h3>
      {skills.map(skill => (
        <AddSkill
          name={skill.name}
          proficiencyLevel={skill.proficiencyLevel}
        />
      ))}
      <br></br>
    </div>

  )
}