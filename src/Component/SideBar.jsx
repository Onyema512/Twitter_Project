import React from 'react'
import '../Style/SideBar.css'
import { FaHome, FaHashtag, FaBell, FaUser, FaEllipsisH, FaRobot } from "react-icons/fa";
import { MdMail, MdBlock } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { BsChatDots } from "react-icons/bs";
import Button from './Button';


const SideBar = () => {
  return (
    <div className='side_Bar'>
       <div className="logo">
        <img src="https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?semt=ais_hybrid&w=740&q=80" alt="X" />
        </div>
        <div className="menu-section">
          <div className="menu">
          <div className="menu-item active"><FaHome /> <span>Home</span></div>
          <div className="menu-item"><IoIosSearch /> <span>Explore</span></div>
          <div className="menu-item"><FaBell /> <span>Notifications</span></div>
          <div className="menu-item"><MdMail /> <span>Messages</span></div>
          <div className="menu-item"><BsChatDots /> <span>Chat</span></div>
          <div className="menu-item"><FaRobot /> <span>Grok</span></div>
          <div className="menu-item"><FaUser /> <span>Profile</span></div>
          <div className="menu-item"><FaEllipsisH /> <span>More</span></div>
         </div>
        <Button name="Post" className="post-btn"/>
      </div>
    </div>
  )
}

export default SideBar
