import React from "react";
import "./stylesStartApp.scss";
import logo from "../../assets/img/logo.svg";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";

const StartApp = () => {
  const [mostrarPagina, setMostrarPagina] = useState(true);
  const navigate = useNavigate();
  useEffect(() => {
    const timer = setTimeout(() => {
      navigate("/home");
    }, 2000);

    return () => clearTimeout(timer);
  }, []);
  return (
    <main className="secMainLogoLogin">
      <figure>
        <img src={logo} alt="" />
      </figure>
    </main>
  );
};

export default StartApp;
