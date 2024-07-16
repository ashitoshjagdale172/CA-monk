import React from 'react'

const ExplCoursesCompo = (props) => {
  return (
    <div>
      <div className=" flex flex-col justify-center items-center bg-[#BDCEF9] px-2 py-4 rounded-[10px] h-48 w-48">
            <div>
              <img src={props.Images} alt=""  className=" h-14 w-14"/>
            </div>
            <div className=" text-[16px] font-[600] mt-3">{props.heading}</div>
            <div className=" text-[14px] font-[400]">
              <div>{props.lineF }</div>
              <div>{props.lineS} </div>
            </div>
          </div>
    </div>
  )
}

export default ExplCoursesCompo
