import React from 'react'
import mentor from "../assets/Images/mentor.png"
import placement from "../assets/Images/placement.png"
import skills from "../assets/Images/skills.png"
import BlogCompo from './BlogCompo'
const Blog = () => {
  return (
    <div>
      
      <div className=" mx-[80px] my-[70px]">
      <div className=" mx-[80px] my-[70px] flex  justify-between">
        <div className="text-[28px] font-[600]">
          
          <span className=" text-[#064bb3]"> Blogs</span>

          <div className=" text-black text-[14px] font-[400] mb-[40px]">
         Trending finance topics
          </div>
        </div>
        <div>
          <button className=" mt-4 px-10 text-center py-2 rounded-[10px] text-[17px] text-white font-[600] bg-[#FF7F00]">
            View All Blogs
          </button>
        </div>
      </div>
      <div className=' flex flex-col md:flex-row md:justify-around md:gap-0 gap-10'>
        
     
      <BlogCompo images={mentor} text="MENTORSHIP"/>
      <BlogCompo images={placement} text="PLACEMENT"/>
      <BlogCompo images={skills} text="UPSKILL"/>
      
l      </div>
      </div>
    </div>
  )
}

export default Blog
