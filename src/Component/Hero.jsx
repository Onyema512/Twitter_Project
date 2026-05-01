import React from 'react'
import '../Style/Hero.css'
import { IoIosSearch } from "react-icons/io";

const Hero = ({ activeTab, setActiveTab }) => {
  console.log("Hero received:", activeTab);
  return (
    <div className='hero_wrapper'>
      <div className="hero_main">
        <div className="tabs">
          <div className={`tab ${activeTab === "forYou" ? "active" : ""}`}
            onClick={() => setActiveTab("forYou")}>For you</div>
          <div className={`tab ${activeTab === "following" ? "active" : ""}`}
            onClick={() => setActiveTab("following")}>Following</div>
        </div>
      </div>

      {/* <div className="hero_right">
        <div className='hero_search'>
          <IoIosSearch className='hero_icon' />
          <input type="text" placeholder='Search' className='hero_input'/>
        </div>
      </div> */}

    </div>
  )
}

export default Hero