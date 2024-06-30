// Develop a component that lists your skills. 
// Each skill could be displayed using a separate component that receives props for the skill name and proficiency level.

import AddSkill from './AddSkill.js'

export default function SkillList({skills}){
  return (
    <div className="skill-list">
      {skills.map(skill =>(
        <AddSkill
          key={skill.id}
          name={skill.name}
          proficiencyLevel={skill.proficiencyLevel}
      />
    ))}    
    </div>
  )
}