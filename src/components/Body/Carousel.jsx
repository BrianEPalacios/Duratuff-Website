import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import homePageCSS from "../../assets/homePage.module.css";

const responsive = {
    0: { items: 1 },
    568: { items: 2 },
    1024: { items: 3 },
};

const items = [
  <img  className={homePageCSS.portfolioImage} src={require('../../images/PortfolioImages/duratuff_field_day.jpg')} alt=""/>,
  <img  className={homePageCSS.portfolioImage} src={require('../../images/PortfolioImages/duratuff_longhorn_superheros.jpg')} alt=""/>,
  <img  className={homePageCSS.portfolioImage} src={require('../../images/PortfolioImages/duratuff_oneact_dog.jpg')} alt=""/>,
  <img  className={homePageCSS.portfolioImage} src={require('../../images/PortfolioImages/duratuff_ramirez_isd.jpg')} alt=""/>,
  <img  className={homePageCSS.portfolioImage} src={require('../../images/PortfolioImages/duratuff_sandiego_embroidery.jpg')} alt=""/>,
  <img  className={homePageCSS.portfolioImage} src={require('../../images/PortfolioImages/duratuff_valentines_day.jpg')} alt=""/>,
  <img  className={homePageCSS.portfolioImage} src={require('../../images/PortfolioImages/duratuff_zapata_mariachi.jpg')} alt=""/>,
  <img  className={homePageCSS.portfolioImage} src={require('../../images/PortfolioImages/duratuff_zapata_merlins.jpg')} alt=""/>,
];

const Carousel = () => {
  const handleOnSlideChange = (event) => {
    // Handle slide change event if needed
  };

  return (
    <AliceCarousel

      items={items}
      onSlideChanged={handleOnSlideChange}
      autoPlay
      autoPlayInterval={5000}
      infinite
      autoHeight
      responsive={responsive}
      stagePadding={{
        paddingLeft: 16,
        paddingRight: 16,
      }}
    />
  );
};

export default Carousel;

// function Carousel(props){
//
//   const settings = {
//     dots: true,
//     infinite: true,
//     speed: 500,
//     slidesToShow: 3,
//     slidesToSCroll:3,
//     responsive: [
//         {
//           breakpoint: 1024,
//           settings: {
//             slidesToShow: 3,
//             slidesToScroll: 3,
//             infinite: true,
//             dots: true
//           }
//         },
//         {
//           breakpoint: 600,
//           settings: {
//             slidesToShow: 2,
//             slidesToScroll: 2,
//             initialSlide: 2
//           }
//         },
//         {
//           breakpoint: 480,
//           settings: {
//             slidesToShow: 1,
//             slidesToScroll: 1
//           }
//         }
//       ]
//   };
//
//   const image_names = ['duratuff_field_day', 'duratuff_longhorn_superheros',
//    'duratuff_oneact_dog', 'duratuff_ramirez_isd', 'duratuff_sandiego_embroidery',
//  'duratuff_zapata_merlins']
//
//   return(
//       <Slider {...settings}>
//         <div>
//           <img className={homePageCSS.portfolioImage} className=homePageCSS.portfolioImage src={require('../../images/PortfolioImages/duratuff_field_day.jpg')} alt=""/>
//         </div>
//         <div>
//           <img className={homePageCSS.portfolioImage} className=homePageCSS.portfolioImage src={require('../../images/PortfolioImages/duratuff_longhorn_superheros.jpg')} alt=""/>
//         </div>
//         <div>
//           <img className={homePageCSS.portfolioImage} className=homePageCSS.portfolioImage src={require('../../images/PortfolioImages/duratuff_oneact_dog.jpg')} alt=""/>
//         </div>
//         <div>
//           <img className={homePageCSS.portfolioImage} className=homePageCSS.portfolioImage src={require('../../images/PortfolioImages/duratuff_ramirez_isd.jpg')} alt=""/>
//         </div>
//       </Slider>
//   );
// };
//
// export default Carousel;

// old code with css names
// <div className={`${homePageCSS.portfolio} ${homePageCSS.portfolioRow}`}>
//   {image_names.map((image_name, index) =>(
//     <PortfolioItem
//     key={index+1}
//     path={image_name}
//     />
//   ))}
// </div>


// old code
// <div>
//   {image_names.map((image_name, index) =>(
//     <PortfolioItem
//     key={index+1}
//     path={image_name}
//     />
//   ))}
// </div>
