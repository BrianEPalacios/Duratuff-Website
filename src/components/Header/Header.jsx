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
      // Duratuff Quote
      <div>
        <h2 className={homePageCSS.duratuffQuote}> "Tough Times Don't Last, Tough People Do!" </h2>
      </div>
      // make this into a nav bar component
      <div className={homePageCSS.linkbar}>
        <div className={homePageCSS.linkbar}>
          <h2> <a href="#"> Home </a> </h2>
        </div>
        <div className={homePageCSS.linkbar}>
          <h2> <a href="#"> Our Vendros </a> </h2>
        </div>
        <div className={homePageCSS.linkbar}>
          <h2> <a href="#"> Contact Us </a> </h2>
        </div>
        <div className={homePageCSS.linkbar}>
          <h2> <a href="#"> About Us </a> </h2>
        </div>
        <div className={homePageCSS.linkbar}>
          <h2> <a href="#"> Specials </a> </h2>
        </div>
        <div className={homePageCSS.linkbar}>
          <h2> <a href="#"> Screen Printing </a> </h2>
        </div>
        <div className={homePageCSS.linkbar}>
          <h2> <a href="#"> More </a> </h2>
        </div>
      </div>
      // duratuff logo
      <div className={homePageCSS.duratuffLogoContainer}>
        <img className={homePageCSS.duratuffLogo} src={require("../../images/duratuff_logo.webp")} alt="duratuff logo"/>
      </div>
    </header>
  );
};
export default Header;
