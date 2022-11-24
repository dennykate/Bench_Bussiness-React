import React from "react";

import {
  Home,
  HowIsWork,
  Partners,
  Professionals,
  Resources,
  FreeTrial,
  Footer,
  BirdButton,
} from "./components";

const App = () => {
  return (
    <div>
      <Home />
      <Professionals />
      <Partners />
      <HowIsWork />
      <Resources />
      <FreeTrial />
      <Footer />
      <BirdButton />
    </div>
  );
};

export default App;
