import React from "react";
import { title } from "../utils";

import Stripe from "../assets/Stripe.png";
import Square from "../assets/Square.png";
import BigCommerce from "../assets/BigCommerce.png";
import Shopify from "../assets/Shopify.png";
import Gusto from "../assets/Gusto.png";
import FreshBooks from "../assets/FreshBooks.png";

const Partners = () => {
  return (
    <div className="py-[70px]  bg-[#F6F6F7] w-full">
      <div className="max-w-[1024px] mx-auto sm:px-10 px-1">
        <h1 className={title}>We partner with the world’s best</h1>
        <div
          className=" md:flex md:justify-between md:items-center sm:mt-12 mt-6 grid grid-cols-2 gap-10  md:gap-0 
        "
        >
          <div className="flex justify-center items-center">
            <img src={Stripe} alt="partner-logo" className="w-[60px] " />
          </div>
          <div className="flex justify-center items-center">
            <img src={Square} alt="partner-logo" className="w-[100px]" />
          </div>
          <div className="flex justify-center items-center">
            <img src={BigCommerce} alt="partner-logo" className="w-[120px]" />
          </div>
          <div className="flex justify-center items-center">
            <img
              src={Shopify}
              alt="partner-logo"
              className="w-[110px] md:-translate-y-0 sm:-translate-y-3 -translate-y-0"
            />
          </div>
          <div className="flex justify-center items-center">
            <img src={Gusto} alt="partner-logo" className="w-[70px]" />
          </div>
          <div className="flex justify-center items-center">
            <img src={FreshBooks} alt="partner-logo" className="w-[120px]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Partners;
