import React from "react";
import Header from "../../components/Header/Header";
import HebbronvilleBody from "../../components/HebbronvillePage/HebbronvilleBody";
import Footer from "../../components/Footer/Footer";

function Hebbronville(){
  return(
    <div>
      <Header />
      <h1> This is the school page </h1>
      <HebbronvilleBody />
      <Footer />
    </div>
  );
};

export default Hebbronville;
