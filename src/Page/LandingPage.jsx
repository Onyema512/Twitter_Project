import React from 'react'
import '../Style/LandingPage.css'
import Hero from '../Component/Hero'
import SideBar from '../Component/SideBar'

const LandingPage = () => {
  return (
    <div className='landing'>
        <SideBar/>
      <div className="main-content">
        <Hero/>
        <div className='feed'>
             Scroll content here...
        </div>
      </div>
    </div>
  )
}

export default LandingPage
