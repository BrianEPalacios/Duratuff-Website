import React from "react";
import SocialMediaRow from "./SocialMediaRow";

function Footer(){
  const currentYear =  new Date().getFullYear()
  return(
    <footer className="foot">
      <p> © DuraTuff {currentYear}</p>
      <SocialMediaRow />
    </footer>
  )
};

export default Footer;
