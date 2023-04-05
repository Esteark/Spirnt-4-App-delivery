import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../../router/RouterDom";
import { infoFoods } from "../../../../services/infoArrays";
import "./stylesFoods.scss";

const Foods = ({ idRes }) => {
  const navigate = useNavigate();

  const { formatterPeso, optionFilter, foods, setFoods } =
    useContext(AppContext);
  useEffect(() => {
    setFoods(
      infoFoods.filter(
        (res) => res.type === optionFilter && res.restaurant === idRes
      )
    );
  }, [optionFilter]);

  const navegacion = (id) => {
    navigate(`/food/${id}`);
  };

  return (
    <section className="secFoods">
      {foods.map((item, index) => (
        <figure
          key={index}
          className="secFoods__figure"
          onClick={() => {
            navegacion(item.cod);
          }}
        >
          <img src={item.img} alt="" />
          <figcaption>
            <h4>{item.name}</h4>
            <h3>{formatterPeso.format(item.price)}</h3>
          </figcaption>
        </figure>
      ))}
    </section>
  );
};

export default Foods;
