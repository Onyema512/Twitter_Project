import React from 'react'
import '../Style/Grok.css'
import SideBar from '../Component/SideBar'
import Button from '../Component/Button'
import { FaRobot } from "react-icons/fa";

const Grok = () => {
  return (
    <div className='grokPage'>
      <SideBar/>
      <section className="grokMain">
     <div className="grokCenter">

    <div className="grokHeader">
      <FaRobot className="grokIcon" />
      <h1 className="grokTitle">Grok</h1>
    </div>

    <p className="grokSubtitle">
      Ask anything. Get real-time answers.
    </p>
    <div className="grokInputBox">
      <input type="text" placeholder="Ask anything..." />
      <Button name="Send" className="send"/>
      </div>
  </div>
 </section>

    </div>
  )
}

export default Grok
