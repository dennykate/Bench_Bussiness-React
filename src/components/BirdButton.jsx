import React, { useEffect, useRef, useState } from "react";
import Lottie from "lottie-react";

import BirdFlying from "../assets/bird-flying.json";

const BirdButton = () => {
  const [showBird, setShowBird] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 500) {
        setShowBird(true);
      } else {
        setShowBird(false);
      }
    });
  }, []);

  const handleClick = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div
      className={`fixed bottom-5 sm:right-10 right-2 sm:w-[80px] sm:h-[80px] w-[40px] h-[40px] rounded-full shadow-lg
    bg-white z-50 flex justify-center items-center cursor-pointer t transition duration-500 ease-in-out
      ${showBird ? "birdRotate" : "translate-y-28"}`}
      onClick={handleClick}
    >
      <Lottie animationData={BirdFlying} />
    </div>
  );
};

export default BirdButton;
