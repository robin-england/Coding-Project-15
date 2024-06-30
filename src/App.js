// U63166005
// Challenge 15

import React from 'react'
import PersonalInfo from './PersonalInfo.js'  // imports Profile from component
import SkillList from './SkillList.js'  // imports Skills from component
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

function App() {
  return (
    <div className="app">
      <PersonalInfo/>
      Skills: 
      <SkillList skills={skills}/>
    </div>
  )
}

export default App