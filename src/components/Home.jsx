import React, { useState } from "react";

import Hero from "./Hero";
import Navbar from "./Navbar";

const Home = () => {
  return (
    <div className="w-full ">
      <Navbar />
      <Hero />
    </div>
  );
};

export default Home;
