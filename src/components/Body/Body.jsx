import React from "react";
import homePageCSS from "../../assets/homePage.module.css";
import Portfolio from "./Portfolio";

function Body(){
  return(
    <div>
      <h1 className={homePageCSS.bodyText}>Portfolio</h1>
      <Portfolio />
      <h1 className={homePageCSS.bodyText}>About Us</h1>
    </div>
  );
};

export default Body;
