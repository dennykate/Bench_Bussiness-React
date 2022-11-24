import React from "react";

import BenchLogo from "../assets/bench-logo-symbol.svg";
import HowIsWorks1 from "../assets/how-is-works-1.jpg";
import HowIsWorks2 from "../assets/how-is-works-2.jpg";
import HowIsWorks3 from "../assets/how-is-works-3.jpg";
import Entrepreneur from "../assets/Entrepreneur.png";
import NYTimes from "../assets/NYTimes.png";
import WallStreetJournal from "../assets/WallStreetJournal.png";
import Forbes from "../assets/Forbes.png";

import {
  button,
  paragraph,
  textStartParagraph,
  textStartTitle,
  title,
} from "../utils";

const HowIsWork = () => {
  return (
    <div className="w-full py-[50px] bg-[#F6F6F7] xl:px-[50px] sm:px-[20px] px-1">
      <div className="w-full flex justify-center items-center flex-col mb-[50px]">
        <img src={BenchLogo} alt="bench-logo" className="w-[80px]" />
        <div className="w-full my-7">
          <h1 className={title}>Dedicated financial experts, just for you</h1>
        </div>
        <div className="max-w-[769px] sm:px-10 px-2 mb-7">
          <h6 className={paragraph}>
            Real humans. Perfect books. Your team of small business experts
            imports bank statements and prepares financial statements every
            month. Questions? Your Bench bookkeeper works in-house, and they’re
            backed by our Client Research Team to provide you with informed
            answers to complex questions.
          </h6>
        </div>
        <button className={button}>See How Bench Works</button>
      </div>

      <div className="w-full flex md:flex-row flex-col lg:gap-24 md:gap-8 gap-2 lg:mb-20 mb-12">
        <div className="md:w-1/2 w-full flex justify-center items-center">
          <img src={HowIsWorks1} alt="how-is-works-1" className="w-full" />
        </div>
        <div className="md:w-1/2 w-full md:py-12 py-2 flex flex-col gap-6">
          <h1 className={textStartTitle}>One-on-one expert support</h1>
          <h6 className={textStartParagraph}>
            Bench gives you a dedicated bookkeeper supported by a team of
            knowledgeable small business experts. Get a direct line to your team
            on desktop or mobile—professional support is just a few swipes,
            taps, or clicks away.
          </h6>
          <div>
            <button className={button}>Learn More</button>
          </div>
        </div>
      </div>

      <div className="w-full flex md:flex-row flex-col-reverse lg:gap-24 md:gap-8 gap-2 lg:mb-20 mb-12">
        <div className="md:w-1/2 w-full md:py-12 py-2 flex flex-col gap-6">
          <h1 className={textStartTitle}>Powerful financial reporting</h1>
          <h6 className={textStartParagraph}>
            The Bench platform gives you monthly financial statements and
            expense overviews to keep you in control of your money. At-a-glance
            visual reports help you see the big picture and give you actionable
            insights to help you grow your business. You’ll never be in the dark
            again.
          </h6>
          <div>
            <button className={button}>Learn More</button>
          </div>
        </div>
        <div className="md:w-1/2 w-full flex justify-center items-center">
          <img src={HowIsWorks2} alt="how-is-works-1" className="w-full" />
        </div>
      </div>

      <div className="w-full flex md:flex-row flex-col lg:gap-24 md:gap-8 gap-2 lg:mb-20 mb-12">
        <div className="md:w-1/2 w-full flex justify-center items-center">
          <img src={HowIsWorks3} alt="how-is-works-1" className="w-full" />
        </div>
        <div className="md:w-1/2 w-full md:py-12 py-2 flex flex-col gap-6">
          <h1 className={textStartTitle}>Tax season, minus the stress</h1>
          <h6 className={textStartParagraph}>
            A year end package with everything you need to file comes standard
            with Bench. Upgrade your plan, and cross even more off your to-do
            list. With Premium, you get expert tax prep, filing, and year-round
            tax advisory support.
          </h6>
          <div>
            <button className={button}>Learn More</button>
          </div>
        </div>
      </div>

      <div className="max-w-[1024px] mx-auto py-10">
        <div className="mb-10">
          <h1 className={title}>Featured in</h1>
        </div>
        <div className="w-full grid md:grid-cols-4 grid-cols-2 md:gap-3 sm:gap-10 gap-5">
          <div className="flex justify-center items-center">
            <img
              src={Entrepreneur}
              alt="entreoreneur"
              className="sm:h-[60px] h-[35px]"
            />
          </div>
          <div className="flex justify-center items-center">
            <img src={NYTimes} alt="nytimes" className="sm:h-[60px] h-[35px]" />
          </div>
          <div className="flex justify-center items-center">
            <img
              src={WallStreetJournal}
              alt="wallstreetjournal"
              className="sm:h-[30px] h-[20px]"
            />
          </div>
          <div className="flex justify-center items-center">
            <img src={Forbes} alt="forbes" className="sm:h-[50px] h-[30px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowIsWork;
