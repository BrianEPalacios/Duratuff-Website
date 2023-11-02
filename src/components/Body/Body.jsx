import React from "react";
import Carousel from "./Carousel";
import homePageCSS from "../../assets/homePage.module.css";



function Body(){
  return(
    <div>
      <div className={homePageCSS["body-section-one"]}>
        <h2> Schools and local businessses trust in us! </h2>
        <h3>
        Duratuff has helped thousands of schools and businesses around the area
        bring their screen printing and embroidery ideas to life.
        </h3>
      </div>
      <div>
      <h1 className={homePageCSS.bodyText}>Our Work</h1>
      <Carousel />
      </div>
      <h1 className={homePageCSS.bodyText}>About Us</h1>
    </div>
  );
};

export default Body;
