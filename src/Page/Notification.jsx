import React from 'react'
import '../Style/Notification.css'
import SideBar from '../Component/SideBar'

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
    </div>
  )
}

export default Notification
