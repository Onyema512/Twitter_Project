import React from 'react'
import '../Style/MorePopup.css'
import {  FaList, FaUsers, FaBookmark, FaCrown, FaUserEdit, FaBuilding, FaBullhorn, FaPlusCircle, FaCog } from "react-icons/fa";
 
const MorePopup = ({close}) => {
  return (
    <div className="more_overlay" onClick={close}>
        <div className="more_box" onClick={(e) => e.stopPropagation()}>

        <div className="more_item">
          <FaList /> <span>Lists</span>
        </div>

        <div className="more_item">
          <FaUsers /> <span>Communities</span>
        </div>

        <div className="more_item">
          <FaCrown /> <span>Premium</span>
        </div>

        <div className="more_item">
          <FaBookmark /> <span>Bookmarks</span>
        </div>

        <div className="more_item">
          <FaUserEdit /> <span>Creator Studio</span>
        </div>

        <div className="more_item">
          <FaBuilding /> <span>Business</span>
        </div>

        <div className="more_item">
          <FaBullhorn /> <span>Ads</span>
        </div>

        <div className="more_item">
          <FaPlusCircle /> <span>Create your Space</span>
        </div>

        <div className="more_item">
          <FaCog /> <span>Settings & Privacy</span>
        </div>
      </div>
    </div>
  )
}

export default MorePopup
