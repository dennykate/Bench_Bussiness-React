import React from "react";

import Professionals3 from "../assets/professionals-1.png";
import Professionals2 from "../assets/professionals-2.png";
import Professionals1 from "../assets/professionals-3.png";
import { textStartParagraph, title } from "../utils";

const Professionals = () => {
  return (
    <div className="sm:px-[40px] px-[20px]  sm:pt-[90px] pt-[60px] bg-[#F6F6F7] ">
      <div className="border-b-[1px] border-[#E2E3E4] pb-[50px]">
        <h1 className={title}>
          America’s largest professional bookkeeping service for small
          businesses
        </h1>
        <div className="w-full grid md:grid-cols-3 grid-cols-1 gap-10 sm:mt-10 mt-7">
          <div className="flex flex-col md:h-[230px] min-h-[130px] justify-between sm:gap-0 gap-1">
            <h6 className={textStartParagraph}>
              "Bench was the missing piece of the puzzle. A reliable bookkeeper
              with a simple, elegant system, at a consistent monthly price."
            </h6>
            <div className="flex lg:gap-6 gap-3 items-center">
              <img
                src={Professionals1}
                alt="professionals1"
                className="lg:w-[90px] lg:h-[90px] w-[70px] h-[70px]"
              />
              <h6 className=" uppercase text-black font-catamaran sm:text-sm text-xs font-medium tracking-wide">
                <span className="text-[#0FA1B5]">CHRIS RONZIO</span> CEO,
                TRAINUAL
              </h6>
            </div>
          </div>

          <div className="flex flex-col md:h-[230px] min-h-[130px] justify-between sm:gap-0 gap-1">
            <h6 className={textStartParagraph}>
              "Bench gives me the peace of mind that my bookkeeping is done
              correctly so that I can focus on growing my business."
            </h6>
            <div className="flex lg:gap-6 gap-3 items-center">
              <img
                src={Professionals2}
                alt="professionals1"
                className="lg:w-[90px] lg:h-[90px] w-[70px] h-[70px]"
              />
              <h6 className=" uppercase text-black font-catamaran sm:text-sm text-xs font-medium tracking-wide">
                <span className="text-[#0FA1B5]">LAURA SIMMS</span> CAREER
                CHANGE EXPERT
              </h6>
            </div>
          </div>

          <div className="flex flex-col md:h-[230px] min-h-[130px] justify-between sm:gap-0 gap-1">
            <h6 className={textStartParagraph}>
              "Bench helps keep my business finances crystal clear. No more
              guessing, no more fumbling around in Excel sheets."
            </h6>
            <div className="flex lg:gap-6 gap-3 items-center">
              <img
                src={Professionals3}
                alt="professionals1"
                className="lg:w-[90px] lg:h-[90px] w-[70px] h-[70px]"
              />
              <h6 className=" uppercase text-black font-catamaran sm:text-sm text-xs font-medium tracking-wide">
                <span className="text-[#0FA1B5]">JUSTIN METROS</span>{" "}
                PROPRIETOR, RADIATOR
              </h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Professionals;
