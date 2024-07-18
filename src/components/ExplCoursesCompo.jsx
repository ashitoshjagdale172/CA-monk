import React from 'react'

const ExplCoursesCompo = (props) => {
  return (
    <div>
      <div className=" flex flex-col justify-center items-center bg-[#BDCEF9] px-2 py-4 rounded-[10px] h-[250px] w-[250px]">
            <div>
              <img src={props.Images} alt=""  className=" h-20 w-20"/>
            </div>
            <div className=" text-[20px] font-[600] mt-3">{props.heading}</div>
            <div className=" text-[146x] font-[400]">
              <div>{props.lineF }</div>
              <div>{props.lineS} </div>
            </div>
          </div>
    </div>
  )
}

export default ExplCoursesCompo
