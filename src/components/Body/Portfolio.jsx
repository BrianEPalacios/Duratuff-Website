import React from "react";
import PortfolioItem from "./PortfolioItem";
import imagePaths from "../../imagePaths.js";

function Portfolio(props){
  return(
    <div className="portfolio portfolioRow">
        <PortfolioItem
        key={props.key}
        path={props.path}
        />
    </div>
  );
};

export default Portfolio;
