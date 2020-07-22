import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./smcarousel.css"

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function SmCarousel() {
  return (
    <div>
      <Carousel  focusOnSelect = "false"  showDots="true" className="sampleSlide" responsive={responsive}>
        <div>
          <h1>Hello </h1>
          <p>Hello </p>
        </div>
        <div className="carouselItem">
          <img
            className="d-block w-100"
            // src="./images/daily_products/Aesop-Body-A-Rose-By-Any-Other-Name-Body-Cleanser-500mL-large.png"
            src={require("./images/daily_products/Aesop-Body-A-Rose-By-Any-Other-Name-Body-Cleanser-500mL-large.png")}
            alt="First slide"
          />
          <div>
            <h1>Hello </h1>
            <p>Hello </p>
          </div>
        </div>
        <div>
          <img
            className="d-block w-100"
            // src="./images/daily_products/Aesop-Body-Body-Cleansing-Slab-310g-Carton-Large-1584x962px.png"
            src={require("./images/daily_products/Aesop-Body-Body-Cleansing-Slab-310g-Carton-Large-1584x962px.png")}
          />
        </div>
        <div>
          <img
            className="d-block w-100"
            // src="./images/daily_products/Aesop-Body-Geranium-Leaf-Body-Cleanser-500mL-large.png"
            src={require("./images/daily_products/Aesop-Body-Geranium-Leaf-Body-Cleanser-500mL-large.png")}
          />
        </div>
        <div>
          <img
            className="d-block w-100"
            // src="./images/daily_products/Aesop-Body-Geranium-Leaf-Body-Scrub-180mL-large.png"
            src={require("./images/daily_products/Aesop-Body-Geranium-Leaf-Body-Scrub-180mL-large.png")}
          />
        </div>
        <div>
          <img
            className="d-block w-100"
            // src="./images/daily_products/Aesop-Body-Redemption-Body-Scrub-180mL-large.png"
            src={require("./images/daily_products/Aesop-Body-Redemption-Body-Scrub-180mL-large.png")}
          />
        </div>
        <div>
          <h1>Hello </h1>
          <p>Hello </p>
        </div>
        <div>
          <h1>Hello </h1>
          <p>Hello </p>
        </div>
      </Carousel>
    </div>
  );
}

export default SmCarousel;
