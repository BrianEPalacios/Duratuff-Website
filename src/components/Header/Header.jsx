import React from "react";
import homePageCSS from "../../assets/homePage.module.css"
import DropdownMenu from "./DropdownMenu"

function Header() {
  return (
    <header>
      <div className={homePageCSS.headerContainer}>
          <div className={homePageCSS.headChild}>
          <DropdownMenu />
          </div>
          <div className={homePageCSS.headChild}>
            <h1 className={homePageCSS.head}>Duratuff</h1>
          </div>
          <div className={homePageCSS.headChild}>
            <a className={homePageCSS.quote} href="./order">
              <h2 className={homePageCSS.quote}>Get A Quote!</h2>
            </a>
          </div>
      </div>
    </header>
  );
};
export default Header;
