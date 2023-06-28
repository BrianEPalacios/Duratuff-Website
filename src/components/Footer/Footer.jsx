import React from "react";
import homePageCSS from "../../assets/homePage.module.css"
import SocialMediaRow from "./SocialMediaRow";

function Footer(){
  const currentYear =  new Date().getFullYear()
  return(
    <footer className={homePageCSS.foot}>
      <p> © DuraTuff {currentYear}</p>
      <SocialMediaRow />
    </footer>
  )
};

export default Footer;
