import React, { useContext, useState } from 'react'
import '../Style/LandingPage.css'
import Hero from '../Component/Hero'
import SideBar from '../Component/SideBar'
import { IoIosSearch } from "react-icons/io";
import { AppContext } from '../Context/AppContext';

const LandingPage = () => {
  const [activeTab, setActiveTab] = useState("forYou");
    console.log("Landing activeTab:", activeTab);

    const { posts } = useContext(AppContext);

    const forYouPosts = [
  { id: 1, user: "John", text: "This is for you post 1" },
  { id: 2, user: "Mary", text: "Trending stuff here" },
];

const followingPosts = [
  { id: 1, user: "Elon", text: "Only people you follow" },
  { id: 2, user: "Dev", text: "React tips from following" },
];

  console.log("forYouPosts:", forYouPosts);
  console.log("followingPosts:", followingPosts);

  return (
    <div className='landing'>
      <SideBar/>

      <div className="main-content">
        <Hero setActiveTab={setActiveTab} activeTab={activeTab}/>

<div className='feed'>
    {posts
    .filter(post => post.type === activeTab)
    .map(post => (
    <div key={post.id} className="post">
      <h4>{post.user}</h4>
      <p>{post.text}</p>
        {post.image && (
        <img src={post.image} className="post_img" />
      )}
    </div>
  ))}

  {(activeTab === "forYou" ? forYouPosts : followingPosts).map(post => (
    <div key={post.id} className="post">
      <h4>{post.user}</h4>
      <p>{post.text}</p>
    </div>
  ))}
    </div>
      </div>

        <div className="right-content">
         <div className="hero_search">
           <IoIosSearch className="hero_icon" />
           <input className="hero_input" placeholder="Search" />
         </div>
       </div>
    </div>
  )
}

export default LandingPage