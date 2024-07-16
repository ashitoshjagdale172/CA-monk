import React from "react";

const FeaturedCoursesCompo = (props) => {
  return (
    <div>
      <div>
        <div className=" rounded-[10px] bg-white h-[230px] w-[300px] relative">
          <div className=" h-[150px] w-[100%]">
            <img src={props.Images} alt="" className="h-[150px] w-[100%]" />
          </div>
          <div className="bg-[#FF7F00] absolute px-2 text-[9px] text-white font-[500] uppercase py-[2px] rounded-[5px] ml-4 mt-[-10px] ">
            {props.TxtBtn}
          </div>
          <div className=" mt-3 ml-3">
            <div className=" text-[12px] font-[700]">
              <div>{props.heading1}</div>
              <div className=" font-[500] text-[8px] text-gray-400">
                {" "}
                {props.heading2}
              </div>
            </div>
            <div className=" flex justify-between ">
              <div className=" text-[10px] font-[700]">
                <span>&#8377;{props.Fvalue}</span>
                <span className="text-[7px]">&#8377;{props.Ivalue}</span>
              </div>
              <div className=" mr-3 text-[10px] bg-[#064bb3] font-[600] text-white px-2 py-1 rounded-[5px]">
                <button>Learn more &gt;</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCoursesCompo;
