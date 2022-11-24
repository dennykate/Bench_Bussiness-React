import React from "react";
import { FaYoutube, FaTwitter, FaFacebook, FaInstagram } from "react-icons/fa";

import Logo from "../assets/bench-logo-symbol.svg";
import { footerData, privacyPolicyData } from "../utils";

const Footer = () => {
  return (
    <div className="pt-[70px] sm:pb-[80px] pb-[20px] bg-white lg:px-[40px] md:px-[15px] sm:px-[30px] px-[5px]">
      <div className="pb-[40px] border-b-[1px] border-[#B8B7B5] ">
        <div className="w-full flex md:flex-row flex-col gap-12 items-start mb-12">
          <div className="flex gap-3 items-center ml-[15px]">
            <img src={Logo} alt="logo" className="w-[60px]" />
            <h6 className=" font-jost text-[#818181] font-medium">
              Online bookkeeping and tax filing powered by real humans
            </h6>
          </div>

          <div className="md:w-auto w-full grid md:grid-cols-4 grid-cols-2 gap-8">
            <div className="flex flex-col sm:gap-4 gap-2">
              <h6 className="font-jost font-medium text-[#2F3034] sm:text-base text-sm tracking-wide">
                COMPANY
              </h6>
              <h6 className="font-jost font-medium text-gray-400 sm:text-base text-sm hover:text-[#6CB2A5] cursor-pointer">
                About us
              </h6>
              <h6 className="font-jost font-medium text-gray-400 sm:text-base text-sm hover:text-[#6CB2A5] cursor-pointer">
                Careers - <span className="text-[#6CB2A5]">We're Hiring!</span>
              </h6>
              <h6 className="font-jost font-medium text-gray-400 sm:text-base text-sm hover:text-[#6CB2A5] cursor-pointer">
                Press
              </h6>
            </div>

            {footerData.map(({ title, details }, index) => (
              <div className="flex flex-col sm:gap-4 gap-2" key={index}>
                <h6 className="font-jost font-medium text-[#2F3034] sm:text-base text-sm tracking-wide">
                  {title}
                </h6>
                {details.map((data, index) => (
                  <h6 className="font-jost font-medium text-gray-400 sm:text-base text-sm hover:text-[#6CB2A5] cursor-pointer">
                    {data}
                  </h6>
                ))}
              </div>
            ))}
          </div>
        </div>
        <a
          href="tel:18887601940"
          className="text-[#2F3034] font-catamaran font-medium text-lg "
        >
          1 (888) 760 1940
        </a>
      </div>

      <div className="py-6 flex justify-between items-start">
        <div className="flex lg:gap-6 gap-3 md:flex-row flex-col items-start">
          {privacyPolicyData.map((data, index) => (
            <h6 className="text-[#9D9C9B] font-medium text-sm font-roboto cursor-pointer hover:underline">
              {index == 0 && <span>&#169;</span>} {data}
            </h6>
          ))}
        </div>
        <div className="flex gap-3 items-center">
          <FaYoutube className="sm:text-3xl text-3xl sm:text-[#666667] text-[#2F3034] cursor-pointer sm:hover:text-[#2F3034]" />
          <FaTwitter className="sm:text-2xl text-xl sm:text-[#666667] text-[#2F3034] cursor-pointer sm:hover:text-[#2F3034]" />
          <FaFacebook className="sm:text-2xl text-xl sm:text-[#666667] text-[#2F3034] cursor-pointer sm:hover:text-[#2F3034]" />
          <FaInstagram className="sm:text-2xl text-xl sm:text-[#666667] text-[#2F3034] cursor-pointer sm:hover:text-[#2F3034]" />
        </div>
      </div>
    </div>
  );
};

export default Footer;
