import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { AppContext } from "../../../../router/RouterDom";
import "./styleButtonsActions.scss";

const ButtonsActions = ({ op }) => {
  const location = useLocation();
  const { car, formatterPeso, totalCar } = useContext(AppContext);

  const navigate = useNavigate();

  return (
    <section className="secButtonPago">
      {op === 0 ? (
        <button
          className="buttonCar"
          style={{ marginBottom: "120px" }}
          onClick={() => {
            navigate("/secpago");
          }}
        >
          <p className="labelButtonCar">{car.length}</p>
          <p>View Car</p>
          <h3>{formatterPeso.format(totalCar)}</h3>
        </button>
      ) : op === 1 ? (
        <button className="buttonOrder">
          <p>Order</p>
        </button>
      ) : (
        <></>
      )}
    </section>
  );
};

export default ButtonsActions;
