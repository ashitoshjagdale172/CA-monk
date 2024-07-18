import React from "react";
import logo from "../assets/Images/logo.webp";
import play from "../assets/Images/google.png";
import apple from "../assets/Images/apple.png";
import youtube from "../assets/Images/youtube.png";
import instagram from "../assets/Images/instagram.png";
import linkedin from "../assets/Images/linkedin.png";
import telegram from "../assets/Images/telegram.png";
const Footer = () => {
  return (
    <div className="bg-[#000918]  px-[90px] py-[70px] ">
      <div className=" text-white text-left text-[16px]">
        <div className="flex justify-between">
          <div className=" flex flex-col gap-3">
            <div className="font-[600] mb-[15px]">Inetrview Prep </div>
            <div> Inetrview Preparation Workshop</div>
            <div>Articleship Training Workshop</div>
            <div>CA Monk Placement Drive</div>
            <div>Company Guides</div>
            <div>Aptitude Test</div>
            <div>Free Resources</div>
          </div>
          <div className=" flex flex-col gap-3">
            <div className="font-[600] mb-[15px]">Masterclass</div>
            <div> Statutory Audit</div>
            <div>Articleship Training Workshop</div>
            <div>CA Monk Placement Drive</div>
            <div>Company Guides</div>
            <div>Aptitude Test</div>
            <div>Free Resources</div>
          </div>
          <div className=" flex flex-col gap-3 ">
            <div className="font-[600] mb-[15px]">Inetrview Prep </div>
            <div> Inetrview Preparation Workshop</div>
            <div>Articleship Training Workshop</div>
            <div>CA Monk Placement Drive</div>
            <div>Company Guides</div>
            <div>Aptitude Test</div>
            <div>Free Resources</div>
          </div>
          <div className=" flex flex-col gap-4">
            {" "}
            <div>
              <img src={logo} alt="" className=" h-[130px]" />
            </div>
            <div className=" flex items-center gap-4">
              {" "}
              <div>
                <img src={apple} alt="" className=" h-[45px]" />
              </div>
              <div>
                <img src={play} alt="" className=" h-[65px]" />
              </div>
            </div>
            <div className=" text-[26px] font-[600]">
              Subscribe to our Newsletter
            </div>
            <div className="flex gap-4 text-[14px]">
              <div>
                <input
                  type="email"
                  name=""
                  id=""
                  placeholder="Email"
                  className="pl-5 py-2  w-[300px] rounded-[5px]"
                />
              </div>
              <div>
                
                <button className=" bg-blue-700 font-[600] px-7 py-2 rounded-[5px]">
                  Subscribe
                </button>
              </div>
            </div>
            <div className="flex gap-4">
              
              Follow us on:
              <div>
                <img src={youtube} alt="" />
              </div>
              <div>
                <img src={instagram} alt="" />
              </div>
              <div>
                <img src={linkedin} alt="" />
              </div>
              <div>
                <img src={telegram} alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between mt-20 px-6">
          <div className=" flex flex-col gap-3">
            <div className="font-[600] mb-[15px]">Popular Artical</div>
            <div>
              8 Mind Tricks For Crushing Your <br />
              Interviews
            </div>
            <div>16 Behavioral Interview <br /> Questions Big 4 Firms As</div>
            <div>How Business Analytics <br /> Empowers CAS</div>
            <div>The Significance Of Mentorship <br /> For CAs</div>
            <div>Why CAs Should Learn Digital <br /> Marketing</div>
            
          </div>
          <div className=" flex flex-col gap-3">
            <div className="font-[600] mb-[15px]">Partnership</div>
            <div> Hire From CA Monk</div>
            <div>Become A Mentor</div>
            <div>Careers @CA Monk</div>
           
          </div>
          <div className=" flex flex-col gap-3">
            <div className="font-[600] mb-[15px]">Mentorship</div>
            <div>1:1 Mentorship</div>
            <div>Resume Review</div>
            <div>Mock Interview</div>
            <div>Events</div>
            
          </div>
          <div className=" flex flex-col gap-3">
            <div className="font-[600] mb-[15px]">Tools</div>
            <div> Resume Scorer</div>
            <div>Al Interview Bot</div>
            <div>Articleship Scorer</div>
            <div>Salary Estimator</div>
            
          </div>
          <div className=" flex flex-col gap-3">
            <div className="font-[600] mb-[15px]">Resources</div>
            <div> Free Courses</div>
            <div>Finance Jobs</div>
            <div>Blog</div>
            <div>Testimonials</div>
            <div>Wall Of Fame</div>
            <div>Verify Certificate</div>
            <div>Privacy Policy</div>
            <div>Refund Policy</div>
            <div>Terms & Conditions</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
