import React, { useState } from 'react'
import '../Style/Profile.css'
import SideBar from '../Component/SideBar'
import { IoIosSearch } from "react-icons/io";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("posts");

    const posts = [
  { id: 1, name: "John Doe", handle: "@john", bio: "Frontend Dev", logo: "https://i.pravatar.cc/40?img=1" },
  { id: 2, name: "Mary Jane", handle: "@mary", bio: "UI Designer", logo: "https://i.pravatar.cc/40?img=2" },
];

const replies = [
  { id: 1, name: "Tech Guru", handle: "@techguru", bio: "React & AI content", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3glZhP14UxxtpKcWh4o_sOHEROex6EC0MwA&s" },
  { id: 2, name: "Code Master", handle: "@codemaster", bio: "Daily coding tips", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNJxdosst6nKAQPlZFoZKoTFL3omKCqjezEg&s" },
];

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
          <div className={`tab ${activeTab === "posts" ? "active" : ""}`}
             onClick={() => setActiveTab("posts")}>Posts</div>
          <div className={`tab ${activeTab === "replies" ? "active" : ""}`}
             onClick={() => setActiveTab("replies")}>Replies</div>
          <div className={`tab ${activeTab === "highlights" ? "active" : ""}`}
             onClick={() => setActiveTab("highlights")}>Highlights</div>
          <div className={`tab ${activeTab === "articles" ? "active" : ""}`}
             onClick={() => setActiveTab("articles")}>Articles</div>
          <div  className={`tab ${activeTab === "media" ? "active" : ""}`}
             onClick={() => setActiveTab("media")}>Media</div>
          <div className={`tab ${activeTab === "likes" ? "active" : ""}`}
             onClick={() => setActiveTab("likes")}>Likes</div>
        </div>

        <div className='profile_feed'>
           {(activeTab === "posts" || activeTab === "replies") && (
           <>
      <h3 className="follow_heading">Who to follow</h3>

      {posts.map(user => (
        <div key={user.id} className="follow_card">

          <div className="follow_left">
            <img src={user.logo} className="follow_logo" />
            <div className="follow_info">
              <h4>{user.name}</h4>
              <p>{user.handle}</p>
              <span>{user.bio}</span>
            </div>
          </div>

          <button className="follow_btn">Follow</button>

        </div>
       ))}
         </>
      )}

        {activeTab === "highlights" && (
         <div className="empty_state">
           <h2>Highlight on your <br/> profile</h2>
           <p>You must be subscribed to Premium to highlight <br/> posts on your profile.</p>  
           <button className="premium_btn">Subscribe to Premium</button>
         </div>
          )}

       {activeTab === "articles" && (
       <div className="empty_state">
         <h2>Write Articles on X</h2>
        <p> You must be subscribed to Premium to write <br/> Articles on X. </p>
      <button className="premium_btn">Upgrade to Premium</button>
      </div>
        )}

          {activeTab === "media" && (
        <div className="empty_state">
          <h2>Lights, camera … attachments!</h2>
            <p>When you post photos or videos, they will show <br/> up here.</p>
       </div>
        )}

          {activeTab === "likes" && (
          <div className="empty_state">
           <h2>You don’t have any likes yet</h2>
             <p>Tap the heart on any post to show it some love. <br/> When you do, it’ll show up here.</p>
          </div>
          )}
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