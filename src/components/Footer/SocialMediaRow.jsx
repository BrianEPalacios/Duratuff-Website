import React from "react";

function SocialMediaRow(){
  return(
    <div>
    {/*Creates an image icon that redirects you to websites*/}
      <a className="icon" href="https://www.facebook.com/DURATUFFSPORTS" >
        <img src={require("../../images/facebook.png")} width="50" alt="Redirect Facebook"/>
      </a>
      <a className="icon" href="https://www.facebook.com/DURATUFFSPORTS">
        <img src={require("../../images/instagram.png")}  width="50" alt="Redirect Instagram"/>
      </a>
    </div>
  );
};

export default SocialMediaRow;
