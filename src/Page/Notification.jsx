import React from 'react'
import '../Style/Notification.css'
import SideBar from '../Component/SideBar'
import { IoIosSearch } from "react-icons/io";

const Notification = () => {
  return (
    <div className='explore_layout'>
      <SideBar/>
      <section className='notification_main'>
        <article className='notification_top'>
            <h2>Notifications</h2>
         <div className="tabs3">
           <div className="tab3 active">All</div>
           <div className="tab3">Mentions</div>
         </div>
        </article>
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
