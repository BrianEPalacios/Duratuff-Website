import React from "react";

function PortfolioItem(props){
  return(
    <div className="portfolioColumn">
      <img className="portfolioImages" src={props.path}/>
    </div>
  )
};

export default PortfolioItem;
