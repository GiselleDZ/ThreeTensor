import React from 'react'
import InstructorCanvas from './ThreeJS/InstructorCanvas'

const DashboardControls = () => {
  return (
    <div className="dashboard">
      <div>
        <h1>Hi</h1>
        <h3>Meet your Instructor:</h3>
      </div>
      <div height="400px" />
      <div className="instructor">
        <InstructorCanvas />
      </div>
      <div className="usertask">
        <h4>Your task, is to replicate your instructors movements</h4>
        <h4>Every bodypart counts</h4>
      </div>
    </div>
  )
}

export default DashboardControls
