import React, { useEffect, useState } from "react";

import HomepageHero from "../assets/homepage-hero.png";
import HomepageHeroSmall from "../assets/homepage-hero-small.png";

const Hero = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 768) {
        setIsSmallScreen(true);
      } else {
        setIsSmallScreen(false);
      }
    });
  }, []);

  return (
    <div className="w-full sm:pb-[100px] pb-[80px] py-[120px] xl:px-[80px] px-[20px] bg-[#14305D]">
      <div className=" max-w-[1300px] flex xl:gap-[100px] md:gap-[50px] gap-[10px] mx-auto md:flex-row flex-col">
        <div className="md:w-[400px] sm:w-[75%] w-[100%] mx-auto md:block flex justify-center items-center">
          <div>
            <h1
              className="xl:text-[55px] sm:text-[35px] text-[30px] font-jost font-[700] text-white tracking-wider 
          xl:leading-[62px] leading-[52px] md:text-start text-center"
            >
              You run your business. We’ll handle your finances.
            </h1>
            <p className="sm:my-8 my-4 mb-6 font-roboto text-white sm:text-base text-sm md:text-start text-center">
              From bookkeeping to tax filing, Bench is the all-in-one financial
              toolkit your business can count on.
            </p>
            <div className="w-full flex md:justify-start justify-center">
              <button
                className="p-4 bg-[#008E8D] hover:bg-[#017172] font-roboto text-white font-normal tracking-wide
          rounded-md sm:mb-8 mb-6"
              >
                Start a Free Trail
              </button>
            </div>
            <p className=" text-gray-400 text-xs font-roboto md:text-start text-center">
              No credit card required.
            </p>
          </div>
        </div>
        <div className="flex justify-center items-center md:w-auto ">
          <img
            src={isSmallScreen ? HomepageHeroSmall : HomepageHero}
            alt="homepage-hero"
            className="md:w-[650px] w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
