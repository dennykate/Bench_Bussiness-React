import React from "react";
import { BsArrowRight } from "react-icons/bs";

import { resourcesData, title } from "../utils";

const Resources = () => {
  return (
    <div className="w-full py-[60px] bg-[#FFFFFF] flex flex-col justify-center">
      <div className="flex justify-center items-center">
        <button className="bg-[#F1F1F0] px-8 py-3 font-jost rounded-full text-sm text-gray-500 font-medium">
          From The Bench Blog
        </button>
      </div>
      <div className="sm:my-10 mt-10 mb-5">
        <h1 className={title}>
          Explore over 600 resources for managing small business finances
        </h1>
      </div>
      <div
        className="max-w-[1024px] md:px-2 sm:px-10 px-4 grid md:grid-cols-3 mx-auto xl:gap-10 sm:gap-3 
      gap-10 grid-cols-1"
      >
        {resourcesData.map((data, index) => (
          <div key={index} className="flex flex-col">
            <img
              src={data.image}
              alt="resources-1"
              className="w-full md:block hidden"
            />
            <h1 className="text-lg font-bold mt-6 sm:mb-4 mb-2 cursor-pointer hover:underline text-[#098B8C]">
              {data.title}
            </h1>
            <h5 className="font-medium sm:mb-4 mb-2">{data.para}</h5>
            <div
              className="flex items-center font-bold text-[#098B8C] font-jost text-lg gap-1 cursor-pointer 
          relative w-[110px] group"
            >
              <BsArrowRight />
              View Now
              <div className="absolute bottom-1 left-0 w-full h-[2px] bg-[#098B8C] group-hover:block hidden"></div>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center mb-8 mt-16">
        <button className="p-4 rounded-md bg-[#098b8C] text-white font-roboto font-medium tracking-wide">
          Visit The Bench Blog
        </button>
      </div>
    </div>
  );
};

export default Resources;
