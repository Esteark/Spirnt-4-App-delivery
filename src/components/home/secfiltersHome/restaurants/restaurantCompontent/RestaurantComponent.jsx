import React from "react";
import StarsRating from "stars-rating";
import "./stylesrestaurantComponent.scss";

const RestaurantComponent = ({
  name,
  description,
  calification,
  timeDelivery,
  img,
}) => {
  return (
    <figure className="restaurantComponent">
      <img src={img} alt="" />
      <figcaption>
        <h3>{name}</h3>
        <p>{description}</p>
        <div className="secStartsRestaurant">
          <StarsRating
            count={5}
            size={20}
            edit={false}
            color1={"#a7a7a7"}
            color2={"#ffe031"}
            value={calification}
            className="startsRestaurant"
          />
          <p className="labelDelivery">{timeDelivery}</p>
        </div>
      </figcaption>
    </figure>
  );
};

export default RestaurantComponent;
