import React from "react";
import orderPageCSS from "../assets/orderPage.module.css";
import OrderBody from "../components/Order/OrderBody/OrderBody";
import Footer from "../components/Footer/Footer";
import OrderHeader from "../components/Order/OrderHeader/OrderHeader";

function Order(){
  return (
    <div className={orderPageCSS.orderPage}>
      <OrderHeader />
      <OrderBody />
      <Footer />
    </div>
  );
};

export default Order;
