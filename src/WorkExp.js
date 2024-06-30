// Display your past work experiences, including job title, company name, and the duration of each role.
// Consider creating a reusable component to display each experience entry, enhancing the maintainability of your code.

import AddWorkExp from './AddWorkExp.js'

export default function WorkExp({ experiences }) {
  return (
    <div className="work-exp">
      <h3>Work Experience</h3>
      {experiences.map(experience => (
        <AddWorkExp
          name={experience.name}
          company={experience.company}
          duration={experience.duration}
        />
      ))}
    </div>
  )
}