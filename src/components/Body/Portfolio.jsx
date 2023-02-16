import React from "react";
import PortfolioItem from "./PortfolioItem";
import imagePaths from "../../imagePaths.js";

function Portfolio(props){
  const image_names = ['duratuff_field_day', 'duratuff_longhorn_superheros',
   'duratuff_oneact_dog', 'duratuff_ramirez_isd', 'duratuff_sandiego_embroidery',
 'duratuff_zapata_merlins']

  return(
    <div className="portfolio portfolioRow">
      {image_names.map((image_name, index) =>(
        <PortfolioItem
        key={index+1}
        path={image_name}
        />
      ))}
    </div>
);
};

export default Portfolio;
