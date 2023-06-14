import React from "react";
import Footer from "../components/Footer/Footer";
import OrderHeader from "../components/Order/OrderHeader/OrderHeader";

function Order(){
  return (
    <div>
      <OrderHeader />
      <h1 style={{color: "white"}}> This is the order Page </h1>
      <Footer />
    </div>
  );
};

export default Order;
