import React from 'react'

const BlogCompo = (props) => {
  return (
    <div>
       <div>
        <div className=' h-[350px] w-[300px] relative flex justify-center items-center '>
            <img src={props.images} alt="" className=' h-[350px] w-[300px] relative' />
            <div className=' absolute  text-[30px] text-white font-[600] '><span>{props.text}</span></div>
        </div>
        
      </div>
    </div>
  )
}

export default BlogCompo
