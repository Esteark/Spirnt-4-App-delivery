import React, { useContext, useEffect, useState } from "react";
import FooterHome from "./footerHome/FooterHome";
import { BiChevronDown } from "react-icons/bi";
import locationIcon from "../../assets/img/locations.png";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
import delivery1 from "../../assets/img/special.png";
import delivery2 from "../../assets/img/deliver.jpg";
import "./stylesHome.scss";
import ButtonsFilter from "./secfiltersHome/buttonsFilter/ButtonsFilter";
import { AppContext } from "../../router/RouterDom";
import Restaurants from "./secfiltersHome/restaurants/Restaurants";
import ButtonsActions from "./secfiltersHome/buttonsActions/ButtonsActions";
import { getRestaurantsAsync } from "../../redux/actions/restaurantsActions";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

const Home = () => {
  const { width, setWidth, car } = useContext(AppContext);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });

  useEffect(() => {
    console.log(width);
  }, [width]);

  return (
    <main>
      <section className="SecMain">
        <header className="secHeader">
          <figure>
            <img src={locationIcon} alt="" />
            <figcaption>
              <h4>deliver to</h4>
              <h3>
                882 Well St, New York <BiChevronDown />
              </h3>
            </figcaption>
          </figure>
        </header>
        <section className="secSlider">
          <Carousel
            emulateTouch={true}
            infiniteLoop={true}
            showThumbs={false}
            showArrows={false}
            showStatus={false}
            centerMode={true}
            showIndicators={false}
            centerSlidePercentage={width >= 768 ? 50 : 80}
          >
            <figure className="secSlider__Img">
              <img src={delivery1} alt="" />
            </figure>
            <figure className="secSlider__Img">
              <img src={delivery2} alt="" />
            </figure>
          </Carousel>
        </section>
        <section className="secFilters">
          <h4>Restaurants and cafes</h4>
          <ButtonsFilter />
        </section>
        <Restaurants />
      </section>
      {car.length !== 0 ? <ButtonsActions op={0} /> : <></>}
      <FooterHome />
    </main>
  );
};

export default Home;
