// U63166005
// Challenge 15

import React from 'react'
import PersonalInfo from './PersonalInfo.js'  // imports Profile from component
import SkillList from './SkillList.js'  // imports Skills from component
import WorkExp from './WorkExp.js'  // imports Skills from component
import './App.css'    // imports style

const skills =[

  {
  id: 1,
  name: "Banking",
  proficiencyLevel:"Expert",
  },

  {
  id: 2,
  name: "Data Analytics",
  proficiencyLevel:"Advanced",
  },

  {
  id: 3,
  name: "Tableau",
  proficiencyLevel:"Intermediate",
  }

]

const experiences =[

// jobTitle, company, duration

  {
  id: 1,
  name: "Title 1",
  company:"Company 1",
  duration: "2 years",
  },

  {
    id: 2,
    name: "Title 2",
    company:"Company 2",
    duration: "3 years",
  },

  {
    id: 3,
    name: "Title 3",
    company:"Company 3",
    duration: "4 years",
  }

]

function App() {
  return (
    <div className="app">
      <PersonalInfo/>
      Skills: 
      <SkillList skills={skills}/>
      Work Experience:
      <WorkExp experiences={experiences}/>
    </div>
  )
}

export default App