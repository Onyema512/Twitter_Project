import React from 'react'
import '../Style/Profile.css'
import SideBar from '../Component/SideBar'
import { IoIosSearch } from "react-icons/io";

const Profile = () => {
  return (
    <div className='profile_layout'>
      <SideBar />
      <section className='profile_main'>

       <div className='profile_top'>
         <p className="back_pro">←</p>
         <div className='profile_name'>
            <h2>Anthony</h2>
            <span>0 posts</span>
         </div>
       </div>

        <div className='profile_header'>
          <div className='cover'></div>
          <div className='profile_img'></div>
        </div>

        <div className='profile_info'>
          <h3>Anthony Onyema</h3>
          <p>@anthonydev</p>
          <p className='bio'>Frontend Developer • React • Building cool stuff</p>
          <div className='followers'>
            <span><strong>120</strong> Following</span>
            <span><strong>300</strong> Followers</span>
          </div>
        </div>

        <div className='profile_tabs'>
          <div className='tab active'>Posts</div>
          <div className='tab'>Replies</div>
          <div className='tab'>Highlights</div>
          <div className='tab'>Articles</div>
          <div className='tab'>Media</div>
          <div className='tab'>Likes</div>
        </div>

        <div className='profile_feed'>
          User posts go here...
        </div>
      </section>

      <div className="profile_right">
        <div className='profile_search'>
          <IoIosSearch className='profile_icon' />
          <input type="text" placeholder='Search' className='profile_input' />
        </div>
      </div>

    </div>
  )
}

export default Profile