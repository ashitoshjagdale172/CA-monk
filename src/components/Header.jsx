import React from "react";
import mentor from "../assets/Images/mentorship.png";
import accenture from "../assets/Images/accenture.png";
import Axis from "../assets/Images/Axis.png";
import bdo from "../assets/Images/bdo.png";
import jp from "../assets/Images/JPMorgan.png";
import pwc from "../assets/Images/PWC.png";
import reliance from "../assets/Images/reliance.png";
import BOB from "../assets/Images/Bank.png";
import viraj from "../assets/Images/viraj.webp";
import infosys from "../assets/Images/infosys.png";
import EY from "../assets/Images/ey.png";
import gail from "../assets/Images/GAIL.svg";
import cipla from "../assets/Images/cipla.png";
import godrej from "../assets/Images/godrej.jpg";

const Header = () => {
  return (
    <>
      <div className="h-[78vh] md:h-[70vh] flex flex-col md:flex-row justify-center items-center bg-[#064bb3] text-white gap-24 md:gap-0">
        <div className="flex flex-col justify-center items-center w-[100%] md:w-[40%] gap-[25px] mx-0 md:mx-16">
          <div className="text-[35px] font-[600]">
            <p>Skyrocket Your</p>
            <p>Finance Career</p>
          </div>
          <div className="text-[14px]">
            <p>Leaen industry-relevant skills from top mentors.</p>
            <p>Network with aspirational peer group</p>
          </div>

          <div>
            <button className="button bg-gradient-to-r from-orange-600 to-red-700 border-2 border-transparent rounded-xl text-white shadow-lg  px-14 py-1 leading-5 cursor-pointer transition-all duration-300 text-lg md:text-xl font-medium hover:shadow-none hover:opacity-80">
              View courses
            </button>
          </div>
        </div>
        <div className="w-[100%] md:w-[70%] flex  relative">
          <div>
            <img
              src={mentor}
              alt=""
              className=" justify-center  w-1/2 mt-[-21.5%] ml-[30%]   md:ml-[25%] absolute  "
            />
          </div>

          <div className="absolute flex justify-center items-center z-50 mt-[-3%] w-[80px] md:w-[120px] h-[25px] md:h-[50px] ml-[65%] rounded-[20px] bg-white px-2 md:px-5 py-2 md:py-5 ">
            <img
              src={Axis}
              alt=""
              className="transition duration-100 ease-in-out rounded-[20px] hover:scale-125"
            />
          </div>
          <div className="absolute flex justify-center items-center z-50 mt-[-13%] w-[80px] md:w-[120px] h-[25px] md:h-[50px] ml-[74%] rounded-[20px] bg-white px-2 md:px-5 py-2 md:py-5 ">
            <img
              src={bdo}
              alt=""
              className="transition duration-100 ease-in-out rounded-[20px] hover:scale-125"
            />
          </div>
          <div className="absolute flex justify-center items-center z-50 mt-[-23%] w-[80px] md:w-[120px] h-[25px] md:h-[50px] ml-[65%] rounded-[20px] bg-white px-2 md:px-5 py-2 md:py-5 ">
            <img
              src={jp}
              alt=""
              className="transition duration-100 ease-in-out rounded-[20px] hover:scale-125"
            />
          </div>
          <div className="absolute flex justify-center items-center z-50 mt-[-3%] w-[80px] md:w-[120px] h-[25px] md:h-[50px] ml-[20%] rounded-[20px] bg-white px-2 md:px-5 py-2 md:py-5 ">
            <img
              src={accenture}
              alt=""
              className="transition duration-100 ease-in-out rounded-[20px] hover:scale-125"
            />
          </div>
          <div className="absolute flex justify-center items-center z-50 mt-[-13%] w-[80px] md:w-[120px] h-[25px] md:h-[50px] ml-[16%] rounded-[20px] bg-white px-2 md:px-5 py-2 md:py-5 ">
            <img
              src={pwc}
              alt=""
              className=" transition duration-100 ease-in-out rounded-[20px] hover:scale-125"
            />
          </div>
          <div className="absolute flex justify-center items-center z-50 mt-[-23%] w-[80px] md:w-[120px] h-[25px] md:h-[50px] ml-[25%] rounded-[20px] bg-white px-2 md:px-5 py-2 md:py-5 ">
            <img
              src={reliance}
              alt=""
              className=" transition duration-100 ease-in-out rounded-[20px] hover:scale-125 "
            />
          </div>
        </div>
      </div>
      <div className=" bg-[#F1F2F7] text flex flex-col justify-evenly items-center gap-3">
        <div className="inline-flex items-center justify-center w-full gap-3">
          <hr className="w-[80%] h-[1px] opacity-20 my-8 bg-[#5D616A] border-0 " />
          <span className="absolute px-5   -translate-x-1/2 bg-[#F1F2F7] left-1/2">
            Get Hired By
          </span>
        </div>
        <div className="flex gap-20 justify-evenly mb-5 ">
          
            <img className=" h-9 " src={BOB} alt="" />
        
          
            <img className=" h-9 " src={viraj} alt="" />
         
          
            <img className=" h-9 " src={infosys} alt="" />
        
          
            <img className=" h-9 " src={EY} alt="" />
          
          
            <img className=" h-9 " src={gail} alt="" />
         
          
            <img className=" h-9 " src={cipla} alt="" />
        
          
            <img className=" h-9 " src={godrej} alt="" />
         
        </div>
      </div>
    </>
  );
};

export default Header;
