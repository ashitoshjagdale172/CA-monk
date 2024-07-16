import React from "react";
import women from "../assets/Images/woman.png";
import tic from '../assets/Images/accept-icon .png'
const Goals = () => {
  return (
    <div>
      {" "}
      <div className=" flex flex-col md:flex-row md:justify-evenly mx-8 my-5">
        <div className=" flex flex-row gap-10">
          <div className=" flex relative">
            <img
              src={women}
              alt=""
              className="h-[400px] rounded-tr-[10px] rounded-tl-[50px] rounded-br-[50px] rounded-bl-[10px]"
            />
            <div className=" rounded-[5px] text-[#0043B0] text-[14px] px-4 py-1 mt-[70px] font-[550] ml-[270px] shadow-[7px_7px_2px_0.56px_#FF6F00] bg-white  absolute">
              {" "}
              Banking
            </div>
          </div>
          <div>
            <img
              src={women}
              alt=""
              className="h-[200px] mt-[200px] rounded-tl-[10px] rounded-tr-[50px] rounded-bl-[50px] rounded-br-[10px]"
            />
          </div>
        </div>
        <div className=" md:mt-[8%] flex flex-col gap-5">
          <div className=" text-[28px] font-[700]">
            <span>Achieve Your</span> <span className="text-[#064bb3]">Goals</span>
            <br />
            <span>With CA MONK</span>
          </div>
          <div className=" text-[16px] font-[300] flex flex-col gap-3">
            <div><img src={tic} alt="" className=" h-6 inline mr-3" /><span>Get 1:1 Mentorship by Top 1%</span></div>
            <div><img src={tic} alt="" className=" h-6 inline mr-3" /><span>Network with aspirational Peer Group</span></div>
            <div><img src={tic} alt="" className=" h-6 inline mr-3" /><span> Get Interview Ready</span></div>
            <div><img src={tic} alt="" className=" h-6 inline mr-3" /><span>Undertaken Structured Courses by Experts</span></div>
            <div><img src={tic} alt="" className=" h-6 inline mr-3" /><span>Crack your Dream Job Role</span></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Goals;
