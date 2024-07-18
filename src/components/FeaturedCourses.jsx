import React from "react";
import featuredcourse from "../assets/Images/nbnkNfeaturedcourseimg1.png";
import FeaturedCoursesCompo from "./FeaturedCoursesCompo";
const FeaturedCourses = () => {
  return (
    <div>
      <div className=" bg-[#064bb3] h-[900px] md:h-[80vh] pt-[30px] pl-[80px]">
        <div>
          <div className="text-[28px] font-[600] text-white">
            <span>Featured</span>
            <span className=" text-[#FF7F00]"> Courses</span>
          </div>
          <div className=" text-white text-[14px] font-[400] mb-[40px]">
            Isn't Learning an investment your future deserves?
          </div>
        </div>
        <div className=" flex justify-around pr-[80px] flex-col md:flex-row">
          <FeaturedCoursesCompo
            Images={featuredcourse}
            TxtBtn="interview prep"
            heading1="Getting Interview Ready Workshop"
            heading2="Trusted by 11,273+"
            Fvalue="4299"
            Ivalue="9999"
          />
          <FeaturedCoursesCompo
            Images={featuredcourse}
            TxtBtn="interview prep"
            heading1="Getting Interview Ready Workshop"
            heading2="Trusted by 11,273+"
            Fvalue="4299"
            Ivalue="9999"
          />
          <FeaturedCoursesCompo
            Images={featuredcourse}
            TxtBtn="interview prep"
            heading1="Getting Interview Ready Workshop"
            heading2="Trusted by 11,273+"
            Fvalue="4299"
            Ivalue="9999"
          />
        </div>
      </div>
      <div className="bg-[#F1F2F7] text-center h-[20vh] flex justify-evenly items-center">
        <div>
          <div className="text-[45px] font-[700]">2.7+L</div>
          <div className="text-[18px] text-gray-600 font-[500]">Learning Hours</div>
        </div>
        <div className=" h-[50%] bg-black w-[2px]"></div>
        <div>
          <div className="text-[45px] font-[700]">1:1</div>
          <div className="text-[18px] text-gray-600 font-[500]">Mentorship</div>
        </div>
        <div className=" h-[50%] bg-black w-[2px]"></div>
        <div>
          <div className="text-[45px] font-[700]">500+</div>
          <div className="text-[18px] text-gray-600 font-[500]">Mentors</div>
        </div>
        <div className=" h-[50%] bg-black w-[2px]"></div>
        <div>
          <div className="text-[45px] font-[700]">100+</div>
          <div className="text-[18px] text-gray-600 font-[500]">Companies Hiring</div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCourses;
