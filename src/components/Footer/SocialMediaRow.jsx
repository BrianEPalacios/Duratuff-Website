import React from "react";

function SocialMediaRow(){
  return(
    <div className="socialMediaContainer">
    {/*Creates an image icon that redirects you to websites*/}
      <a  href="https://www.facebook.com/DURATUFFSPORTS" >
        <img className="icon" src={require("../../images/facebook.png")} alt="Redirect Facebook"/>
      </a>
      <a  href="https://www.facebook.com/DURATUFFSPORTS">
        <img className="icon"src={require("../../images/instagram.png")} alt="Redirect Instagram"/>
      </a>
      <a  href="mailto:orders.duratuff@gmail.com">
        <img className="icon emailImage" src={require("../../images/email.png")} alt="email"/>
      </a>
    </div>
  );
};

export default SocialMediaRow;
