// U63166005
// Challenge 15

import React from 'react'
import PersonalInfo from './PersonalInfo.js'  // imports Profile from component
import SkillList from './SkillList.js'  // imports Skills from component
import WorkExp from './WorkExp.js'  // imports Skills from component
import Education from './Education.js'  // imports Profile from component
import './App.css'    // imports style

let name = "Robin England"
let bio = " I grew up in Germany and have been working in banking for five years, with a specializiation in process improvement. In addition to certifications in Project Management and Six Sigma, I am currently pursuing a bachelor's degree at the University of South Florida in Business Analytics."
let contactInfo = "Email Adress: englandr@usf.edu"

const education = [
  {
    institution: "Saint Petersburg College",
    degree: "A.A. (Business Concentration)",
    years: "Graduated 2019"
  },

  {
    institution: "University of South Florida",
    degree: "B.S. in Business Analytics and Information Systems",
    years: "Projected Graduation: 2025"
  }
]

const skills = [
  {
    name: "Financial Services",
    proficiencyLevel: "Expert",
  },

  {
    name: "Data Analytics",
    proficiencyLevel: "Advanced",
  },

  {
    name: "Tableau",
    proficiencyLevel: "Intermediate",
  }
]

const experiences = [
  {
    name: "Process Design Analyst",
    company: "Bank of America",
    duration: "2022-Present",
  },

  {
    name: "Team Lead",
    company: "FIS Merchant Services",
    duration: "2019-2022",
  },
]

function App() {
  return (
    <div className="app">
      <PersonalInfo name={name} bio={bio} contactInfo={contactInfo} />
      <SkillList skills={skills} />
      <WorkExp experiences={experiences} />
      <Education education={education} />
    </div>
  )
}

export default App