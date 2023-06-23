import React from "react";

function ShirtColor(){
  return(
    <div>
      <h2 style={{color: "white"}}> Shirt Color </h2>
      <div className="color-box">
        <div className="blue-box"></div>
        <div className="red-box"></div>
        <div className="white-box"></div>
      </div>
    </div>
  );
};

export default ShirtColor;
