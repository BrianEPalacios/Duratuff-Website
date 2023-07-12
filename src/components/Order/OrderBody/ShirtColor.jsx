import React from "react";
import orderPageCSS from "../../../assets/orderPage.module.css";

function ShirtColor(){
  return(
    <div>
      <h2 style={{color: "white"}}> Shirt Color </h2>
      <div className={orderPageCSS["color-box"]}>
        <div className={orderPageCSS["blue-box"]}></div>
        <div className={orderPageCSS["red-box"]}></div>
        <div className={orderPageCSS["white-box"]}></div>
      </div>
    </div>
  );
};

export default ShirtColor;
