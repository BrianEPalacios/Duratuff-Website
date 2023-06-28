import React from "react";
import homePageCSS from "../../assets/homePage.module.css";

function SocialMediaRow(){
  return(
    <div className={homePageCSS.socialMediaContainer}>
    {/*Creates an image icon that redirects you to websites*/}
      <a href="https://www.facebook.com/DURATUFFSPORTS"  target="_blank">
        <img className={homePageCSS.icon} src={require("../../images/facebook.png")} alt="Redirect Facebook"/>
      </a>
      <a href="https://www.facebook.com/DURATUFFSPORTS"  target="_blank">
        <img className={homePageCSS.icon} src={require("../../images/instagram.png")} alt="Redirect Instagram"/>
      </a>
      <a  href="mailto:orders.duratuff@gmail.com">
        <img className={`${homePageCSS.icon} ${homePageCSS.emailImage}`} src={require("../../images/email.png")} alt="email"/>
      </a>
    </div>
  );
};

export default SocialMediaRow;
