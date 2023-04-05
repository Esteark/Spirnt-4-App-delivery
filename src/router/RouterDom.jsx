import React, { createContext, useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../components/home/Home";
import Searchproducts from "../components/home/searchProducts/Searchproducts";
import ProfileUser from "../components/home/profileUser/ProfileUser";
import Orders from "../components/home/orders/Orders";
import PrivateRoutes from "./PrivateRoutes";
import { infoFoods, restaurants } from "../services/infoArrays";
import DetalleFood from "../components/home/secfiltersHome/foods/detalleFood/DetalleFood";
import DetalleRestaurante from "../components/home/secfiltersHome/restaurants/detalleRestaurante/DetalleRestaurante";
import { getCarrito } from "../services/localInfo";
import SecPago from "../components/home/carrito/secPago/SecPago";
import { useEffect } from "react";
import StartApp from "../components/login/StartApp";
import FormLoginPhone from "../components/login/formLoginPhone/FormLoginPhone";
import FormCode from "../components/login/formCode/FormCode";
import FormLoginEmail from "../components/login/formLoginEmail/FormLoginEmail";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch, useSelector } from "react-redux";
import { auth } from "../firebase/firebaseConfig";
import CreateUserEmail from "../components/login/formCreateUserEmail/CreateUserEmail";
import { userLogin, userLoginAsync } from "../redux/actions/userActions";
export const AppContext = createContext({});

const RouterDom = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const [optionFilter, setOptionFilter] = useState(0);
  const [formatterPeso, setFormatterPeso] = useState(
    new Intl.NumberFormat("es-CO", {
      style: "currency",
      currency: "COP",
      minimumFractionDigits: 0,
    })
  );
  const [restaurantes, setRestaurantes] = useState(restaurants);
  const [foods, setFoods] = useState(infoFoods);
  const [car, setCar] = useState(getCarrito());
  const [cantidad, setCantidad] = useState(0);
  const [totalprice, setTotalPrice] = useState(0);
  const [totalCar, setTotalCar] = useState(0);
  const [isLogin, setIsLogin] = useState(undefined);

  useEffect(() => {
    let total = 0;
    car.map((item) => {
      total += item.Totalprice;
    });

    setTotalCar(total);
  }, [car]);

  const rechargeFoods = () => {
    setFoods(infoFoods);
  };

  const { user } = useSelector((store) => store.user);
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsLogin(true);
        dispatch(
          userLogin({
            name: user.auth.currentUser.displayName,
            email: user.auth.currentUser.email,
          })
        );
      } else {
        setIsLogin(false);
      }
    });
  }, []);

  return (
    <AppContext.Provider
      value={{
        width,
        setWidth,
        optionFilter,
        setOptionFilter,
        formatterPeso,
        restaurantes,
        setRestaurantes,
        foods,
        setFoods,
        rechargeFoods,
        car,
        setCar,
        cantidad,
        setCantidad,
        totalprice,
        setTotalPrice,
        totalCar,
        isLogin,
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<StartApp />} />
          <Route path="/loginemail" element={<FormLoginEmail />} />
          <Route path="/loginphone" element={<FormLoginPhone />} />
          <Route path="/createuseremail" element={<CreateUserEmail />} />
          <Route path="/home" element={<Home />} />
          <Route path="/search" element={<Searchproducts />} />
          <Route path="/profile" element={<ProfileUser />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/restaurant/:id" element={<DetalleRestaurante />} />
          <Route path="/food/:id" element={<DetalleFood />} />
          <Route path="/secpago" element={<SecPago />} />
        </Routes>
      </BrowserRouter>
    </AppContext.Provider>
  );
};

export default RouterDom;
