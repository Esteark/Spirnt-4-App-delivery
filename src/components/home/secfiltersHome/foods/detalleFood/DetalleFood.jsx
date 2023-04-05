import React, { useContext, useEffect, useState } from "react";
import "./stylesDetalleFood.scss";
import { BsFillBackspaceFill } from "react-icons/bs";
import { AiOutlineClockCircle } from "react-icons/ai";
import { useNavigate, useParams } from "react-router-dom";
import { AppContext } from "../../../../../router/RouterDom";
import { setCarrito } from "../../../../../services/localInfo";
import { showNotyToast } from "../../../../../services/Notification";
import Carrito from "../../../carrito/Carrito";

const DetalleFood = () => {
  const { id } = useParams();
  const { foods, restaurantes, formatterPeso, car, setCar, totalprice } =
    useContext(AppContext);
  const [currentFood, setCurrentFood] = useState([{}]);

  const [currentRestaurant, setCurrentRestaurant] = useState(
    restaurantes.filter(
      (res) => Number(res.cod) === Number(currentFood[0].restaurant)
    )
  );
  const navigate = useNavigate();

  useEffect(() => {
    const arrayFood = foods.filter((res) => Number(res.cod) === Number(id));
    setCurrentFood(arrayFood);
    setCurrentRestaurant(
      restaurantes.filter((res) => Number(res.cod) === arrayFood[0].restaurant)
    );
  }, []);

  const handleAdition = (adicion) => {
    let arrayCar = car;
    arrayCar.map((item) => {
      if (item.cod === Number(id)) {
        if (item.aditions.includes(adicion.cod)) {
          let indice = item.aditions.indexOf(adicion.cod);
          if (indice !== -1) {
            item.aditions.splice(indice, 1);
            item.aditionsprice = item.aditionsprice - adicion.price;
            item.Totalprice = item.Totalprice - adicion.price;
            showNotyToast(
              "Adición retirada del carrito 😞",
              "#a7a7a7",
              "#414141"
            );
          }
        } else {
          item.aditions.push(adicion.cod);
          item.aditionsprice = item.aditionsprice + adicion.price;
          item.Totalprice = item.Totalprice + adicion.price;
          showNotyToast("Adición agregada al carrito 🛒", "#ffe031", "#ffe031");
        }
      }
    });

    setCarrito(arrayCar);
    setCar([...arrayCar]);
  };

  const defaultAdition = () => {
    let indice = car.findIndex((item) => item.cod === Number(id));
    return indice;
  };

  const isInCar = (cod) => {
    let array = car.filter((item) => item.cod === cod);
    if (array.length !== 0) {
      return true;
    } else {
      return false;
    }
  };

  useEffect(() => {}, [car]);

  return (
    <>
      {currentFood.length !== 0 ? (
        <section className="secDetalleFood">
          <article className="secDetalleFood__sec1">
            <figure
              style={{
                backgroundImage: `url(${currentFood[0].img})`,
                backgroundSize: "cover",
              }}
              onClick={() => {
                navigate(-1);
              }}
            >
              <span>
                <BsFillBackspaceFill /> Regresar
              </span>
            </figure>
          </article>
          <article className="secDetalleFood__sec2">
            <article className="sec2__sec1">
              <div>
                <h3>{currentFood[0].name}</h3>
                <span>
                  {" "}
                  <AiOutlineClockCircle />
                  {currentRestaurant.length !== 0
                    ? currentRestaurant[0].timeDelivery
                    : "12-15 min"}
                </span>
              </div>
              <p>{currentFood[0].description}</p>
            </article>
            <article className="sec2__sec2">
              <h3>Ingredientes adicionales</h3>
              <div className="control-group">
                {currentFood[0]?.aditions ? (
                  currentFood[0].aditions.map((item, index) => (
                    <label className="control control-checkbox" key={index}>
                      <p>
                        <span>{item.name} </span>
                        <span
                          className={`${
                            car.length !== 0
                              ? car[defaultAdition()]?.aditions
                                ? car[defaultAdition()].aditions.includes(
                                    item.cod
                                  ) === true
                                  ? "activeAdition"
                                  : ""
                                : ""
                              : ""
                          }`}
                        >
                          {formatterPeso.format(item.price)}
                        </span>
                      </p>

                      <input
                        type="checkbox"
                        disabled={isInCar(Number(id)) ? false : true}
                        onClick={() => {
                          handleAdition(item);
                        }}
                        defaultChecked={
                          isInCar(Number(id))
                            ? car.length !== 0
                              ? car[defaultAdition()]?.aditions
                                ? car[defaultAdition()].aditions.includes(
                                    item.cod
                                  )
                                : false
                              : false
                            : false
                        }
                      />
                      <div
                        className="control_indicator"
                        style={{ borderRadius: "5px" }}
                      ></div>
                    </label>
                  ))
                ) : (
                  <></>
                )}
              </div>
              <h3
                className={`lblInfoAdicion ${
                  isInCar(Number(id)) ? "hidden " : ""
                }`}
              >
                Agrega al carrito este producto para poder adicionar
                ingredientes
              </h3>
            </article>
          </article>
          <article className="secCarrito">
            <Carrito id={Number(id)} />
            <section className="secCarrito__total">
              <p>Add</p>
              <h3>{formatterPeso.format(totalprice)}</h3>
            </section>
          </article>
        </section>
      ) : (
        <></>
      )}
    </>
  );
};

export default DetalleFood;
