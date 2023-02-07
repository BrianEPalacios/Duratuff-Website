import React from "react";

function SocialMediaRow(){
  return(
    <div>
      <a class="icon" href="https://www.facebook.com/DURATUFFSPORTS">
        <img src={require("../images/facebook.png")} width="50"/>
      </a>
      <a class="icon" href="https://www.facebook.com/DURATUFFSPORTS">
        <img src={require("../images/instagram.png")} width="50"/>
      </a>
    </div>
  );
};

export default SocialMediaRow;
