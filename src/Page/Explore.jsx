import React from 'react'
import '../Style/Explore.css'
import SideBar from '../Component/SideBar'
import Hero from '../Component/Hero'
import { IoIosSearch } from "react-icons/io";

const Explore = () => {
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
              <div className="tab2 active">For you</div>
              <div className="tab2">Trending</div>
              <div className="tab2">News</div>
              <div className="tab2">Sports</div>
              <div className="tab2">Entertainment</div>
            </div>

          </div>

          <div className='feed'>
             Scroll content here...
           </div>

       </div>

      
      <div className="explore_right"></div>

    </div>
  )
}

export default Explore
