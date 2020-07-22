import React from "react";
import Carousel from "react-multi-carousel";
import Imgtitle from "./Imgtitle.jsx";
import Imgsubtitle from "./Imgsubtitle.jsx";
import Title from "./Title.js";
import Subtitle from "./Subtitle.js";
import Description from "./Description"
import "react-multi-carousel/lib/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "../Components/Styles/smcarousel.css";

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
        <div id="carouselText">
          <Subtitle identifier="subtitle" subtitle="Aesop essentials" />
          <Title identifier="title" title="A selection of staples" />
          <Description description="From beloved formulations first created decades ago to personal care necessities."/>
        </div>
        <div className="carouselItem">
          <img
            // className="d-block w-100"
            // src="./images/daily_products/Aesop-Body-A-Rose-By-Any-Other-Name-Body-Cleanser-500mL-large.png"
            src={require("../assets/images/staple_products/Aesop-Hand-Resurrection-Aromatique-Hand-Wash-500mL-large.png")}
            alt="First slide"
          />
          <div>
            <Imgsubtitle identifier="bolder" imgsubtitle="Resurrection Aromatique Hand Wash" />
            <Imgsubtitle identifier="imgsubtitle" imgsubtitle="Gentle cleansing for hard-working hands" />
          </div>
        </div>
        <div>
          <img
            id="soap"
            // className="d-block w-100"
            // src="./images/daily_products/Aesop-Body-Body-Cleansing-Slab-310g-Carton-Large-1584x962px.png"
            src={require("../assets/images/staple_products/Aesop-Body-Resurrection-Aromatique-Hand-Balm-75mL-large.png")}
          />
          <div>
            <Imgsubtitle identifier="bolder" imgsubtitle="Resurrection Aromatique Hand Balm" />
            <Imgsubtitle identifier="imgsubtitle" imgsubtitle="Richly hydrating, greaseless finish" />
          </div>
        </div>
        <div>
          <img
            // src="./images/daily_products/Aesop-Body-Geranium-Leaf-Body-Cleanser-500mL-large.png"
            src={require("../assets/images/staple_products/Large-PNG-Aesop-Personal-Deodorant-50mL-large.png")}
          />
          <div>
            <Imgsubtitle identifier="bolder" imgsubtitle="Déodorant" />
            <Imgsubtitle identifier="imgsubtitle" imgsubtitle="Woody, herbaceous, earthy aromatics" />
          </div>
        </div>
        <div>
          <img
            // className="d-block w-100"
            // src="./images/daily_products/Aesop-Body-Geranium-Leaf-Body-Scrub-180mL-large.png"
            src={require("../assets/images/staple_products/Aesop-Skin-Camellia-Nut-Facial-Hydrating-Cream-60mL-large.png")}
          />
          <div>
            <Imgsubtitle identifier="bolder" imgsubtitle="Aesop Skin Camellia Nut Facial Hydrating Cream" />
            <Imgsubtitle identifier="imgsubtitle" imgsubtitle="A nourishing blend of nut and plant extracts" />
          </div>
        </div>
        <div>
          <img
            // className="d-block w-100"
            // src="./images/daily_products/Aesop-Body-Redemption-Body-Scrub-180mL-large.png"
            src={require("../assets/images/staple_products/Aesop-Skin-Purifying-Facial-Exfoliant-Paste-75mL-large.png")}
          />
          <div>
            <Imgsubtitle identifier="bolder" imgsubtitle="Purifying Facial Exfoliant Paste" />
            <Imgsubtitle identifier="imgsubtitle" imgsubtitle="Gently polishes, smooths, softens skin" />
          </div>
        </div>
      </Carousel>
    </div>
  );
}

export default SmCarousel;
