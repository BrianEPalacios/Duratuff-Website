import React from "react";
import homePageCSS from "../../assets/homePage.module.css";

function PortfolioItem(props){
  return(
    <div>
      <img src={require('../../images/PortfolioImages/' + props.path + '.jpg')} alt=""/>
    </div>
  )
};

export default PortfolioItem;

// old code with css names
// <div className={homePageCSS.portfolioColumn}>
//   <img className={homePageCSS.portfolioImages} src={require('../../images/PortfolioImages/' + props.path + '.jpg')} alt=""/>
// </div>
