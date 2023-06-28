import React from "react";
import schoolPageCSS from "../assets/schoolPage.module.css";
import Header from "../components/Header/Header";
import SchoolPageBody from "../components/SchoolPage/SchoolPageBody";
import Footer from "../components/Footer/Footer";

function School(){
  return(
    <div>
      <Header />
      <SchoolPageBody />
      <Footer />
    </div>
  );
};

export default School;
