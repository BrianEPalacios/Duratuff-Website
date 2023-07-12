import React from "react";
import homePageCSS from "../../assets/homePage.module.css";

import Carousel from "./Carousel";

function Body(){
  return(
    <div>
      <h1 className={homePageCSS.bodyText}>Our Work</h1>
      <Carousel />
      <h1 className={homePageCSS.bodyText}>About Us</h1>
    </div>
  );
};

export default Body;
