import React from "react";
import interview from "../assets/Images/interview.png";
import ExplCoursesCompo from "./ExplCoursesCompo";
const ExplCourses = () => {
  return (
    <div>
      <div className="md:mx-3 md:my-14 px-10  py-10 bg-none rounded-[10px] md:bg-[#F1F2F7] ">
        <div>
          <div className=" text-[24px] md:text-[34px] font-[700]">
            <spam>Explore </spam>
            <spam className="text-[#064bb3]">Courses </spam>
            <spam>By </spam>
            <spam className="text-[#064bb3]">Categories </spam>
          </div>
          <div className=" text-[12px] md:text-[16px] font-[300]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </div>
        </div>
        <div className=" flex flex-wrap justify-center items-center gap-10 md:gap-32 mt-10">
          <ExplCoursesCompo
            Images={interview}
            heading="interview Preparation"
            lineF="Cracking Interview"
            lineS="made easy"
          />
          <ExplCoursesCompo
            Images={interview}
            heading="interview Preparation"
            lineF="Cracking Interview"
            lineS="made easy"
          />
          <ExplCoursesCompo
            Images={interview}
            heading="interview Preparation"
            lineF="Cracking Interview"
            lineS="made easy"
          />
          <ExplCoursesCompo
            Images={interview}
            heading="interview Preparation"
            lineF="Cracking Interview"
            lineS="made easy"
          />
          <ExplCoursesCompo
            Images={interview}
            heading="interview Preparation"
            lineF="Cracking Interview"
            lineS="made easy"
          />
          <ExplCoursesCompo
            Images={interview}
            heading="interview Preparation"
            lineF="Cracking Interview"
            lineS="made easy"
          />
        </div>
      </div>
    </div>
  );
};

export default ExplCourses;
