import React, { useState } from 'react'
import '../Style/Explore.css'
import SideBar from '../Component/SideBar'
import Hero from '../Component/Hero'
import { IoIosSearch } from "react-icons/io";

const Explore = () => {
    const [activeTab, setActiveTab] = useState("forYou");

    const forYouPosts = [
  { id: 1, user: "Alpha", text: "Welcome to For You Explore feed 🔥" },
  { id: 2, user: "Beta", text: "AI is changing everything" },
];

const trendingPosts = [
  { id: 1, user: "TrendBot", text: "🔥 React is still dominating in 2026" },
  { id: 2, user: "NewsHub", text: "Breaking: Tech stocks are rising" },
];

const newsPosts = [
  { id: 1, user: "BBC", text: "Global news update today..." },
  { id: 2, user: "CNN", text: "Economy shifts in Africa tech space" },
];

const sportsPosts = [
  { id: 1, user: "ESPN", text: "Champions league highlights" },
  { id: 2, user: "Sportify", text: "Top 10 goals this week" },
];

const entertainmentPosts = [
  { id: 1, user: "Netflix", text: "New series dropping soon 🎬" },
  { id: 2, user: "Hollywood", text: "Award season predictions" },
];

  return (
     <div className='explore_layout'>
      <SideBar />
      <div className="explore_main">
         <div className="explore_top">

            <div className='exp_Search'>
               <IoIosSearch className='search_Icon' />
              <input type="text" placeholder='Search' className='search' />
             </div>

            <div className="tabs2">
              <div  className={`tab2 ${activeTab === "forYou" ? "active" : ""}`}
              onClick={() => setActiveTab("forYou")} >For you</div>
              <div  className={`tab2 ${activeTab === "trending" ? "active" : ""}`}
              onClick={() => setActiveTab("trending")}>Trending</div>
              <div   className={`tab2 ${activeTab === "news" ? "active" : ""}`}
              onClick={() => setActiveTab("news")}>News</div>
              <div  className={`tab2 ${activeTab === "sports" ? "active" : ""}`}
              onClick={() => setActiveTab("sports")}>Sports</div>
              <div   className={`tab2 ${activeTab === "entertainment" ? "active" : ""}`}
              onClick={() => setActiveTab("entertainment")}>Entertainment</div>
            </div>

          </div>

          <div className='feed'>
              {activeTab === "forYou" &&
    forYouPosts.map(post => (
      <div key={post.id} className="post">
        <h4>{post.user}</h4>
        <p>{post.text}</p>
      </div>
    ))
  }

  {activeTab === "trending" &&
    trendingPosts.map(post => (
      <div key={post.id} className="post">
        <h4>{post.user}</h4>
        <p>{post.text}</p>
      </div>
    ))
  }

  {activeTab === "news" &&
    newsPosts.map(post => (
      <div key={post.id} className="post">
        <h4>{post.user}</h4>
        <p>{post.text}</p>
      </div>
    ))
  }

  {activeTab === "sports" &&
    sportsPosts.map(post => (
      <div key={post.id} className="post">
        <h4>{post.user}</h4>
        <p>{post.text}</p>
      </div>
    ))
  }

  {activeTab === "entertainment" &&
    entertainmentPosts.map(post => (
      <div key={post.id} className="post">
        <h4>{post.user}</h4>
        <p>{post.text}</p>
      </div>
    ))
  }
    </div>

       </div>

      
      <div className="explore_right"></div>

    </div>
  )
}

export default Explore
