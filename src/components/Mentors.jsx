import React from "react";
import mentor from "../assets/Images/mentorship.png";
import EY from "../assets/Images/ey.png";
import MentorsCompo from "./MentorsCompo";
const Mentors = () => {
  return (
    <div className=" mx-[80px] my-[70px]">
      <div className=" mx-[80px] my-[70px] flex  justify-between">
        <div className="text-[28px] font-[600] text-black">
          <span>Meet Your</span>
          <span className=" text-[#064bb3]"> Mentors</span>

          <div className=" text-black text-[14px] font-[400] mb-[40px]">
            Not just any Mentor, You get a CA Monk Mentor
          </div>
        </div>
        <div>
          <button className=" mt-4 px-10 text-center py-2 rounded-[10px] text-[17px] text-white font-[600] bg-[#FF7F00]">
            View All Mentors{" "}
          </button>
        </div>
      </div>

      <div className=" flex flex-col md:flex-row justify-around items-center ">
        <div>
          <MentorsCompo imgs={mentor} CA="CA Ankit Agarwal" comp={EY} />
        </div>
        <div>
          <MentorsCompo imgs={mentor} CA="CA Ankit Agarwal" comp={EY} />
        </div>
        <div>
          <MentorsCompo imgs={mentor} CA="CA Ankit Agarwal" comp={EY} />
        </div>{" "}
        <div>
          <MentorsCompo imgs={mentor} CA="CA Ankit Agarwal" comp={EY} />
        </div>
      </div>
      <div className=" flex justify-between items-center mt-10 px-9">
        <div className="h-10 w-10 rounded-[50%] bg-[#064bb3] text-white text-[50px] flex justify-center items-center  "><div className=" text-center mt-[-12px]">&laquo;</div></div>
        <div className="h-10 w-10 rounded-[50%] bg-[#064bb3]  text-white text-[50px] flex justify-center items-center"><div className=" text-center mt-[-12px]">&raquo;</div></div>
      </div>
    </div>
  );
};

export default Mentors;
