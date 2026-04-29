import React from 'react'
import '../Style/Chat.css'
import Button from '../Component/Button'
import { FaHome, FaHashtag, FaBell, FaUser, FaEllipsisH, FaRobot } from "react-icons/fa";
import { MdMail } from "react-icons/md";
import { RiLockPasswordLine } from "react-icons/ri";
import { FaShieldAlt } from "react-icons/fa";
import { FaKey } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { BsChatDots } from "react-icons/bs";
import { useNavigate } from 'react-router-dom';

const Chat = () => {
    const nav = useNavigate();
  return (
    <div className='chatPage'>
       <aside className="sidebar">
        <div className="logo2">
        <img src="https://img.freepik.com/free-vector/new-2023-twitter-logo-x-icon-design_1017-45418.jpg?semt=ais_hybrid&w=740&q=80" alt="X" />
        </div>
        <div className="menu-item2" onClick={() => nav("/") }><FaHome /></div>
        <div className="menu-item2" onClick={() => nav("/explore")}><IoIosSearch /></div>
        {/* <FaHashtag /> */}
        <div className="menu-item2" onClick={() => nav("/notifications")}><FaBell /></div>
        <div className="menu-item2" onClick={() => nav("/follow")}><MdMail /></div>
        <div className="menu-item2 active" onClick={() => nav("/chat")}><BsChatDots /></div>
        <div className="menu-item2" onClick={() => nav("/grok")}><FaRobot /></div>
        <FaUser />
        <FaEllipsisH />

      </aside>

      <main className="chatMain">
        <h2 className="title">Welcome to the new <br/> X Chat</h2>

        <div className="infoBox">
          <div className="infoItem">
            <RiLockPasswordLine className="icon" />
            <div>
              <h4>End-to-End Encryption</h4>
              <p>Messages are end-to-end encrypted <br/> across all your devices.</p>
            </div>
          </div>

          <div className="infoItem">
            <FaShieldAlt className="icon" />
            <div>
              <h4>State-of-the-Art Privacy</h4>
              <p>There’s no way for anyone, including X, <br/> to read your messages.</p>
            </div>
          </div>

          <div className="infoItem">
            <FaKey className="icon" />
            <div>
              <h4>Set Passcode</h4>
              <p>In order to secure your messages, you’ll <br/> need to set up a passcode.</p>
            </div>
          </div>
        </div>
        <Button name="Create Passcode" className="passcodeBtn"/>
        {/* <button className="passcodeBtn">Create Passcode</button> */}
      </main>
    </div>
  )
}

export default Chat
