import React from "react";

function PortfolioItem(props){
  return(
    <div className="portfolioColumn">
      <img className="portfolioImages" src={require('../../images/' + props.path + '.jpg')} alt=""/>
    </div>
  )
};

export default PortfolioItem;
