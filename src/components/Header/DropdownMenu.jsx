import React from "react";
import homePageCSS from "../../assets/homePage.module.css";

function DropdownMenu(){
  return (
    <div className={homePageCSS.wrapper}>
      <a href="#" className={homePageCSS.nav}>
        <div className={homePageCSS.one}></div>
        <div className={homePageCSS.two}></div>
        <div className={homePageCSS.three}></div>
      </a>
    </div>
  )
};

export default DropdownMenu;
