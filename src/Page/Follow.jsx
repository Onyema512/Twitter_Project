import React from 'react'
import '../Style/Follow.css'
import SideBar from '../Component/SideBar'
import { IoIosSearch } from "react-icons/io";

const Follow = () => {
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
           <div className="tab4 active">Who to follow</div>
           <div className="tab4">Creators for you</div>
         </div>
        </article>
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
