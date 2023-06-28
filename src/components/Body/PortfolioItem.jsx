import React from "react";
import homePageCSS from "../../assets/homePage.module.css";

function PortfolioItem(props){
  return(
    <div className={homePageCSS.portfolioColumn}>
      <img className={homePageCSS.portfolioImages} src={require('../../images/PortfolioImages/' + props.path + '.jpg')} alt=""/>
    </div>
  )
};

export default PortfolioItem;
