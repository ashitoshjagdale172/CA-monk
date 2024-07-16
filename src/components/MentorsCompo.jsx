import React from 'react'

const MentorsCompo = (props) => {
  return (
    <div>
      <div className="bg-[#064bb3] rounded-[10px] flex flex-col justify-center items-center h-[220px] w-[200px] py-3 ">
        <div>
          <img src={props.imgs} alt="" className="h-40 -mt-2" />
        </div>
        <div className="bg-white w-[180px] h-[40px] flex flex-col justify-center items-center rounded-[10px] mb-2">
          <div className="text-[10px] font-[700]">{props.CA}</div>
          <div ><img src={props.comp} alt="" className="h-[16px]" /> </div>
        </div>
      </div>
    </div>
  )
}

export default MentorsCompo
