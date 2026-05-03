import React, { useState } from 'react'
import '../Style/Notification.css'
import SideBar from '../Component/SideBar'
import { IoIosSearch } from "react-icons/io";

const Notification = () => {
      const [activeTab, setActiveTab] = useState("all");

      const allNotifications = [
  { id: 1, user: "System", text: "Welcome to notifications 🔔" },
  { id: 2, user: "John", text: "Liked your post" },
  { id: 3, user: "Mary", text: "Followed you" },
];

const mentionNotifications = [
  { id: 1, user: "Alex", text: "@you mentioned in a post" },
  { id: 2, user: "Dev", text: "@you check this out" },
];

  return (
    <div className='explore_layout'>
      <SideBar/>
      <section className='notification_main'>
        <article className='notification_top'>
            <h2>Notifications</h2>
         <div className="tabs3">
           <div className={`tab3 ${activeTab === "all" ? "active" : ""}`}
              onClick={() => setActiveTab("all")} >All</div>
           <div className={`tab3 ${activeTab === "mentions" ? "active" : ""}`}
              onClick={() => setActiveTab("mentions")}>Mentions</div>
         </div>
        </article>
          <section className="notification_feed">

          {activeTab === "all" &&
            allNotifications.map(item => (
              <div key={item.id} className="notification_item">
                <h4>{item.user}</h4>
                <p>{item.text}</p>
              </div>
            ))
          }

          {activeTab === "mentions" &&
            mentionNotifications.map(item => (
              <div key={item.id} className="notification_item">
                <h4>{item.user}</h4>
                <p>{item.text}</p>
              </div>
            ))
          }

        </section>
      </section>

      <div className="notification_right">
         <div className='not_Search'>
           <IoIosSearch className='not_Icon' />
             <input type="text" placeholder='Search' className='search1' />
          </div>
      </div>
    </div>
  )
}

export default Notification
