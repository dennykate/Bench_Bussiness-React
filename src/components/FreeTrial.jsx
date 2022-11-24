import React from "react";
import { whiteParagraph, whiteTitle } from "../utils";

import Artboard from "../assets/Artboard.png";
import ArtboardLine from "../assets/Artboard-Line.png";

const FreeTrial = () => {
  return (
    <div className="w-full py-[100px] bg-[#174579] relative overflow-hidden">
      <div className="md:w-[60%] w-full sm:px-10 px-4 mx-auto mb-4">
        <h1 className={whiteTitle}>
          Join thousands of small business owners who trust Bench with their
          books
        </h1>
      </div>
      <div className="md:w-[65%] w-full sm:px-10 px-2 tracking-wide ">
        <h6 className={whiteParagraph}>
          See what running a business is like with Bench on your side. Try us
          for free—we’ll do one prior month of your bookkeeping and prepare a
          set of financial statements for you to keep.
        </h6>
      </div>
      <div className="w-full flex justify-center mt-10">
        <button className="px-5 py-4 rounded-md bg-[#098B8C] z-10 text-white font-roboto font-medium hover:bg-[#067B7C]">
          Start a Free Trial
        </button>
      </div>

      <img
        src={ArtboardLine}
        alt="artboard-dot"
        className="absolute top-0 md:left-10 left-1 sm:w-auto w-[100px] -translate-y-5 -translate-x-5 sm:-translate-x-0
        sm:-translate-y-0"
      />

      <img
        src={Artboard}
        alt="artboard-dot"
        className="absolute bottom-0 md:right-10 right-1 translate-x-10 translate-y-10 sm:translate-x-0
        sm:translate-y-0 sm:w-auto w-[100px]"
      />
    </div>
  );
};

export default FreeTrial;
