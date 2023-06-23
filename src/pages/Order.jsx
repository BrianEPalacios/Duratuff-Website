import React from "react";
import "../assets/orderPage.css";
import OrderBody from "../components/Order/OrderBody/OrderBody";
import Footer from "../components/Footer/Footer";
import OrderHeader from "../components/Order/OrderHeader/OrderHeader";

function Order(){
  return (
    <div className="order-page">
      <OrderHeader />
      <OrderBody />
      <Footer />
    </div>
  );
};

export default Order;
