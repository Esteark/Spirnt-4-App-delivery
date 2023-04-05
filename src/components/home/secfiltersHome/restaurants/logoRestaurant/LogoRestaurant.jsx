import React from "react";
import logo1 from "../../../../../assets/img/logoburguer.png";
import logo2 from "../../../../../assets/img/logoPizza.png";
import logo3 from "../../../../../assets/img/logoEnsaladas.png";
import logo4 from "../../../../../assets/img/logoPastas.png";
import "./stylesLogo.scss";

const LogoRestaurant = ({ idRes }) => {
  return (
    <figure className="secLogoRestaurant">
      <img
        src={
          idRes === 0
            ? logo1
            : idRes === 1
            ? logo2
            : idRes === 2
            ? logo3
            : logo4
        }
        alt=""
      />
    </figure>
  );
};

export default LogoRestaurant;
