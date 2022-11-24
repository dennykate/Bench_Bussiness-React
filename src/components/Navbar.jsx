import React, { useEffect, useState } from "react";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { AiOutlineMenu } from "react-icons/ai";
import { HiXMark } from "react-icons/hi2";
import NavItem from "./NavItem";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScroll, setIsScroll] = useState(false);
  const [textColor, setTextColor] = useState("text-white");

  useEffect(() => {
    window.addEventListener("scroll", () => {
      console.log(window.pageYOffset);
      if (window.pageYOffset > 30) {
        setIsScroll(true);
        setTextColor("text-black");
      } else {
        setIsScroll(false);
        setTextColor("text-white");
      }
    });

    return window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleScroll = () => {
    console.log(window.pageYOffset);
    if (window.pageYOffset > 30) {
      setIsScroll(true);
    } else {
      setIsScroll(false);
    }
  };

  return (
    <div
      className={`min-h-[80px] py-2 xl:px-[30px] px-[12px] flex justify-between items-center bg-[#14305D]
     lg:gap-10 md:gap-2 fixed top-0 left-0 right-0  ${
       isScroll ? "bg-[#ffffff] shadow-lg" : " bg-transparent"
     }  z-20 `}
    >
      <div>
        <ul className=" list-none flex-row gap-5 flex-wrap md:flex hidden">
          <li
            className={`font-jost font-semibold text-lg cursor-pointer ${textColor} transition-all duration-200 ease-in-out`}
          >
            Pricing
          </li>
          <NavItem name={"Services"} textColor={textColor} />
          <NavItem name={"Resources"} textColor={textColor} />
          <NavItem name={"Comunity"} textColor={textColor} />
        </ul>
      </div>

      <div className=" md:mt-0 sm:mt-5 mt-2 z-20">
        <div className="bg-white p-1  ">
          <div className="bg-[#14305D] p-1 z-20">
            <div className="bg-white">
              <svg
                aria-label="Bench Logo"
                height="45px"
                version="1.1"
                viewBox="0 0 275 100"
                width="130px"
                x="0px"
                xmlns="http://www.w3.org/2000/svg"
                y="0px"
              >
                <g
                  color="#D2A764"
                  class="BenchLogo__ColoredGroup-sc-tp7ptd-0 ggrOGT"
                >
                  <g>
                    <path d="M221.109,59.887c-9.098,0-16.5-7.402-16.5-16.5v-16.5h33v16.5 C237.609,52.484,230.207,59.887,221.109,59.887z M207.609,29.887v13.5c0,7.443,6.055,13.5,13.5,13.5c7.443,0,13.5-6.056,13.5-13.5 v-13.5H207.609z"></path>
                  </g>
                  <polygon points="228.609,36.887 213.609,36.887 213.609,39.887 215.66,39.887 214.621,48.2 217.645,48.2 218.684,39.887 223.535,39.887 224.574,48.2 227.598,48.2 226.559,39.887 228.609,39.887"></polygon>
                </g>
                <g
                  color="#FAF9F7"
                  class="BenchLogo__ColoredGroup-sc-tp7ptd-0 cfDFhr"
                >
                  <path d="M54.903,31.086c9,0,13.8,4.199,13.8,10.199c0,4.801-3.6,8.4-8.399,9.72v0.119 c7.499,1.859,10.199,6.24,10.199,10.859c0,6.6-4.8,11.1-13.799,11.1h-19.8v-1.199c3.6,0,3.6,0,3.6-3.9V36.186c0-3.9,0-3.9-3.6-3.9 v-1.199H54.903z M51.304,50.885c5.4,0,7.5-3.6,7.5-9.299c0-5.1-2.1-9.301-5.7-9.301h-3v18.6H51.304z M50.104,52.086v19.799h4.2 c4.8,0,6.3-4.801,6.3-10.199c0-5.4-2.7-9.6-8.1-9.6H50.104z"></path>
                  <path d="M73.264,58.385c0-10.199,8.399-15.898,15.899-15.898c6.899,0,13.139,3,11.339,13.199H82.743 c0,8.1,4.62,11.1,9.119,11.1c5.4,0,7.8-3,9-5.1h0.6c-1.199,6-5.399,11.998-12.899,11.998 C78.663,73.684,73.264,66.484,73.264,58.385z M82.743,54.484h8.819c1.021-4.078,1.86-10.798-2.7-10.798 C85.443,43.686,82.983,46.866,82.743,54.484z"></path>
                  <path d="M126.062,50.885c0-2.699-1.8-3.6-3.6-3.6c-1.86,0-3.9,0.9-6,2.701v17.998c0,3.9,0,3.9,3.6,3.9v1.199 h-16.799v-1.199c3.6,0,3.6,0,3.6-3.9V49.086c0-3,0-3-3-3v-0.9l12.3-2.699h0.479l-0.18,6.299h0.12c2.279-3.9,6.6-6.299,10.979-6.299 c4.02,0,8.1,2.398,8.1,8.998v16.5c0,3.9,0,3.9,3.6,3.9v1.199h-15.599v-1.199c2.399,0,2.399,0,2.399-3.9V50.885z"></path>
                  <path d="M158.042,66.785c5.4,0,7.8-3,9-5.1h0.6c-1.199,6-5.399,11.998-12.899,11.998 c-9.899,0-15.299-7.199-15.299-15.299c0-10.199,8.399-15.898,15.899-15.898c7.499,0,11.459,3.66,11.459,7.5 c0,2.099-0.96,4.199-4.56,4.199c-3,0-3.66-1.859-3.6-3.121c0.3-4.378,0-7.378-3.601-7.378c-4.199,0-6.119,5.58-6.119,12.539 C148.923,64.084,153.543,66.785,158.042,66.785z"></path>
                  <path d="M190.922,50.885c0-2.699-1.8-3.6-3.6-3.6c-1.86,0-3.9,0.9-6,2.701v17.998c0,3.9,0,3.9,3.6,3.9v1.199 h-16.799v-1.199c3.6,0,3.6,0,3.6-3.9V33.487c0-3,0-3-3-3v-0.9l12.12-2.699h0.479v21.898h0.12c2.279-3.9,6.6-6.299,10.979-6.299 c4.02,0,8.1,2.398,8.1,8.998v16.5c0,3.9,0,3.9,3.6,3.9v1.199h-15.599v-1.199c2.399,0,2.399,0,2.399-3.9V50.885z"></path>
                </g>
              </svg>
            </div>
          </div>
        </div>
      </div>

      <div>
        <div className=" gap-5 items-center flex-wrap justify-end md:flex hidden">
          <h6
            className={`font-jost font-semibold text-base cursor-pointer hover:-translate-y-1
      transition duration-150 ease-in-out ${textColor}`}
          >
            Log In
          </h6>
          <h6
            className={`font-jost font-semibold text-base cursor-pointer hover:-translate-y-1
            transition duration-150 ease-in-out ${textColor}`}
          >
            1 (888) 760 1940
          </h6>
          <div
            className={`px-6 py-2 border-[1px] border-white cursor-pointer hover:border-[#008E8D] 
          hover:bg-[#008E8D] ${
            isScroll &&
            "border-[#008E8D] bg-[#008E8D] hover:border-[#017172] hover:bg-[#017172]"
          }`}
          >
            <h6 className="text-white font-jost font-bold text-lg ">
              Start Free Trial
            </h6>
          </div>
        </div>

        <button
          className="md:hidden block "
          onClick={() => {
            setShowMenu(!showMenu);
          }}
        >
          <AiOutlineMenu
            className={`text-4xl ${isScroll ? "text-black" : "text-white"} ${
              showMenu ? "opacity-0" : "opacity-100"
            } transition-all
        duration-200 ease-in-out fixed top-8 sm:right-10 right-5 z-20`}
          />
          <HiXMark
            className={`text-4xl text-black ${
              showMenu ? "opacity-100" : "opacity-0"
            } transition-all
        duration-200 ease-in-out fixed top-8 sm:right-10 right-5 z-20`}
          />
        </button>
      </div>

      <div
        className={`w-full sm:p-10 py-10 px-2 bg-white absolute top-0 right-0 left-0 md:hidden block
          ${
            showMenu ? "-translate-y-[0]" : "-translate-y-[100%]"
          } transition-all duration-100 ease-in-out z-10 shadow-lg`}
      >
        <div className="w-full mt-[80px]">
          <div className="sm:py-6 py-4 border-b-[1px] border-black flex gap-1">
            <h6 className="text-black font-jost font-semibold sm:text-xl text-lg">
              Pricing
            </h6>
          </div>
          <div className="sm:py-6 py-4 border-b-[1px] border-black flex gap-1">
            <h6 className="text-black font-jost font-semibold sm:text-xl text-lg">
              Services{" "}
            </h6>
            <MdOutlineArrowDropDown className="text-black md:text-[40px] text-[32px]" />
          </div>
          <div className="sm:py-6 py-4 border-b-[1px] border-black flex gap-1">
            <h6 className="text-black font-jost font-semibold sm:text-xl text-lg">
              Resources{" "}
            </h6>
            <MdOutlineArrowDropDown className="text-black md:text-[40px] text-[32px]" />
          </div>
          <div className="sm:py-6 py-4 border-b-[1px] border-black flex gap-1">
            <h6 className="text-black font-jost font-semibold sm:text-xl text-lg">
              Community{" "}
            </h6>
            <MdOutlineArrowDropDown className="text-black md:text-[40px] text-[32px]" />
          </div>
          <div className="sm:py-6 py-4 border-b-[1px] border-black flex gap-1">
            <h6 className="text-black font-jost font-semibold sm:text-xl text-lg">
              Log In
            </h6>
          </div>
          <div className="sm:py-6 py-4 border-b-[1px] border-black flex gap-1">
            <h6 className="text-black font-jost font-semibold sm:text-xl text-lg">
              1 (888) 760 1940
            </h6>
          </div>
        </div>
        <div className="mt-10 w-full flex justify-center items-center">
          <button className="py-3 px-7 self-center bg-[#008E8D] font-jost text-white">
            Start a Free Trial
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
