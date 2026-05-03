import React from 'react'
import '../Style/SideBar.css'
import { FaHome, FaHashtag, FaBell, FaUser, FaEllipsisH, FaRobot } from "react-icons/fa";
import { MdMail, MdBlock } from "react-icons/md";
import { IoIosSearch } from "react-icons/io";
import { BsChatDots } from "react-icons/bs";
import { SlUserFollow } from "react-icons/sl";
import Button from './Button';
import { useLocation, useNavigate } from 'react-router-dom';


const SideBar = () => {
    const nav = useNavigate();
    const location = useLocation();

  return (
    <div className='side_Bar'>
       <div className="logo">
        <img src="https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?semt=ais_hybrid&w=740&q=80" alt="X" />
        </div>
        <div className="menu-section">
          <div className="menu">
          <div className={`menu-item ${location.pathname === "/" ? "active" : ""}`}
               onClick={() => nav("/")}><FaHome /> <span>Home</span></div>
          <div className={`menu-item ${location.pathname === "/explore" ? "active" : ""}`}
              onClick={() => nav("/explore")}><IoIosSearch /> <span>Explore</span></div>
          <div className={`menu-item ${location.pathname === "/notifications" ? "active" : ""}`}
                onClick={() => nav("/notifications")}><FaBell /> <span>Notifications</span></div>
          <div className={`menu-item ${location.pathname === "/follow" ? "active" : ""}`}
               onClick={() => nav("/follow")}><SlUserFollow /> <span>Follow</span></div>
          <div className={`menu-item ${location.pathname === "/chat" ? "active" : ""}`}
               onClick={() => nav("/chat")}><BsChatDots /> <span>Chat</span></div>
          <div className={`menu-item ${location.pathname === "/grok" ? "active" : ""}`}
               onClick={() => nav("/grok")}><FaRobot /> <span>Grok</span></div>
          <div className={`menu-item ${location.pathname === "/profile" ? "active" : ""}`}
               onClick={() => nav("/profile")}><FaUser /> <span>Profile</span></div>
          <div className="menu-item"><FaEllipsisH /> <span>More</span></div>
         </div>
        <Button name="Post" className="post-btn"/>
      </div>
    </div>
  )
}

export default SideBar
