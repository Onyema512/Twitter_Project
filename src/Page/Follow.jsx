import React, { useState } from 'react'
import '../Style/Follow.css'
import SideBar from '../Component/SideBar'
import { IoIosSearch } from "react-icons/io";

const Follow = () => {
  const [activeTab, setActiveTab] = useState("who");

  const whoToFollow = [
  { id: 1, name: "John Doe", handle: "@john", bio: "Frontend Dev", logo: "https://i.pravatar.cc/40?img=1" },
  { id: 2, name: "Mary Jane", handle: "@mary", bio: "UI Designer", logo: "https://i.pravatar.cc/40?img=2" },
];

const creatorsForYou = [
  { id: 1, name: "Tech Guru", handle: "@techguru", bio: "React & AI content", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ3glZhP14UxxtpKcWh4o_sOHEROex6EC0MwA&s" },
  { id: 2, name: "Code Master", handle: "@codemaster", bio: "Daily coding tips", logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSNJxdosst6nKAQPlZFoZKoTFL3omKCqjezEg&s" },
];

  return (
    <div className='explore_layout'>
      <SideBar/>
       <section className='follow_main'>
        <article className='follow_top'>
            <div className='follow_Back'>
            <p className="back"> ← </p>
            <h2>Follow</h2>
            </div>
         <div className="tabs4">
           <div className={`tab4 ${activeTab === "who" ? "active" : ""}`}
              onClick={() => setActiveTab("who")}>Who to follow</div>
           <div  className={`tab4 ${activeTab === "creators" ? "active" : ""}`}
              onClick={() => setActiveTab("creators")}>Creators for you</div>
         </div>
        </article>
         <section className="follow_feed">

          {activeTab === "who" &&
           <>
      <h1 className="follow_heading">Suggested for you</h1>
            {whoToFollow.map(user => (
              <div key={user.id} className="follow_card">
                 <div className="follow_left">
                   <img src={user.logo} alt={user.name} className="follow_logo" />
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
          }

          {activeTab === "creators" &&
            creatorsForYou.map(user => (
              <div key={user.id} className="follow_card">
                 <div className="follow_left">
                   <img src={user.logo} alt={user.name} className="follow_logo" />
                <div className="follow_info">
                  <h4>{user.name}</h4>
                  <p>{user.handle}</p>
                  <span>{user.bio}</span>
                </div>
                </div>
                <button className="follow_btn">Follow</button>
              </div>
            ))
          }

        </section>
      </section>

            <div className="follow_right">
               <div className='follow_Search'>
                 <IoIosSearch className='follow_Icon' />
                   <input type="text" placeholder='Search' className='search2' />
                </div>
            </div>
    </div>
  )
}

export default Follow
