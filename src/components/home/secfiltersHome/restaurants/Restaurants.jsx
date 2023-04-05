import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import StarsRating from "stars-rating";
import { AppContext } from "../../../../router/RouterDom";
import { restaurants } from "../../../../services/infoArrays";
import "./stylesRestaurant.scss";
import { useDispatch, useSelector } from "react-redux";
import {
  getRestaurantAsync,
  getRestaurantsAsync,
} from "../../../../redux/actions/restaurantsActions";

import { AiOutlineLoading3Quarters } from "react-icons/ai";

const Restaurants = ({ car }) => {
  const { formatterPeso, optionFilter } = useContext(AppContext);

  const { restaurants } = useSelector((store) => store.restaurants);

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getRestaurantsAsync());
  }, []);

  useEffect(() => {
    if (optionFilter !== 0) {
      dispatch(getRestaurantAsync(optionFilter));
    } else {
      dispatch(getRestaurantsAsync());
    }
    console.log(restaurants);
  }, [optionFilter]);

  const navigate = useNavigate();

  useEffect(() => {}, [restaurants]);

  return (
    <section className={`secRestaurants`}>
      {restaurants.length !== 0 ? (
        restaurants.map((item, index) => (
          <figure
            key={index}
            className="secRestaurants__figure"
            onClick={() => {
              navigate(`/restaurant/${item.cod}`);
            }}
          >
            <img src={item.img} alt="" />
            <figcaption>
              <article className="secRestaurants__sec1">
                <h3>{item.name}</h3>
                <div className="secStarts">
                  <StarsRating
                    count={5}
                    size={20}
                    edit={false}
                    color1={"#a7a7a7"}
                    color2={"#ffe031"}
                    value={item.calification}
                    className="starts"
                  />
                </div>
              </article>
              <article className="secRestaurants__sec2">
                <h3>{`Work time ${item.workTime}`}</h3>
                <span>
                  Platos desde
                  <p>{` ${formatterPeso.format(item.pricesFrom)} K`}</p>
                </span>
              </article>
            </figcaption>
          </figure>
        ))
      ) : (
        <article style={{ width: "100%", height: "100vh" }}>
          <AiOutlineLoading3Quarters />
        </article>
      )}
    </section>
  );
};

export default Restaurants;
