import React, { useContext, useEffect } from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { FaHamburger } from "react-icons/fa";
import { IoFastFoodOutline } from "react-icons/io5";
import { CiPizza } from "react-icons/ci";
import { TbSalad } from "react-icons/tb";
import { FaLeaf } from "react-icons/fa";
import { AppContext } from "../../../../router/RouterDom";
import "./stylesFilters.scss";

const ButtonsFilter = () => {
  const { width, setWidth, optionFilter, setOptionFilter } =
    useContext(AppContext);

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  });
  const filters = [
    {
      id: 0,
      opcion: "All",
      icon: (
        <IoFastFoodOutline
          className={`IconFilter ${
            optionFilter === 0 ? "IconFilter__active" : ""
          }`}
        />
      ),
    },
    {
      id: 1,
      opcion: "Fast Food",
      icon: (
        <FaHamburger
          className={`IconFilter ${
            optionFilter === 1 ? "IconFilter__active" : ""
          }`}
        />
      ),
    },
    {
      id: 2,
      opcion: "Pizza",
      icon: (
        <CiPizza
          className={`IconFilter ${
            optionFilter === 2 ? "IconFilter__active" : ""
          }`}
        />
      ),
    },
    {
      id: 3,
      opcion: "Salad",
      icon: (
        <FaLeaf
          className={`IconFilter ${
            optionFilter === 3 ? "IconFilter__active" : ""
          }`}
        />
      ),
    },
    {
      id: 4,
      opcion: "Pastas",
      icon: (
        <TbSalad
          className={`IconFilter ${
            optionFilter === 4 ? "IconFilter__active" : ""
          }`}
        />
      ),
    },
  ];

  return (
    <article className="secFilters__slider">
      <Carousel
        emulateTouch={true}
        infiniteLoop={true}
        showThumbs={false}
        showArrows={false}
        showStatus={false}
        centerMode={true}
        showIndicators={false}
        centerSlidePercentage={width >= 768 ? 50 : 40}
      >
        {filters.map((filter, index) => (
          <button
            className={`btnFilter ${
              optionFilter === filter.id ? "btnFilter__active" : ""
            }`}
            key={index}
            onClick={() => {
              setOptionFilter(filter.id);
            }}
          >
            <figure>{filter.icon}</figure>
            <h4 className={`${optionFilter === filter.id ? "textActive" : ""}`}>
              {filter.opcion}
            </h4>
          </button>
        ))}
      </Carousel>
    </article>
  );
};

export default ButtonsFilter;
