import React, { useState } from "react";
import ClientInfo from "./ClientInfo";
import ImageUploader from "./ImageUploader";
import SubmitButton from "../../SubmitButton";
import ShirtSizes from "./ShirtSizes";
import ShirtType from "./ShirtType";
import ShirtColor from "./ShirtColor";

function ShirtOrderInfo(){
  return <div className="form-box">
    <h2 style={{color: "white"}}> Your Info </h2>
    <ClientInfo />
    <h2 style={{color: "white"}}> Shirt Order </h2>
    <ShirtType />
    <ShirtColor />
    <ShirtSizes />
    <ImageUploader />
    <SubmitButton />

  </div>
}

export default ShirtOrderInfo;
