import React from "react";
import homePageCSS from "../assets/homePage.module.css";
import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import Body from "../components/Body/Body";


function Home(){
  return(
    <div className={homePageCSS.homePageBody}>
      <Header />
      <Body />
      <Footer />
    </div>
  )
}

export default Home;
