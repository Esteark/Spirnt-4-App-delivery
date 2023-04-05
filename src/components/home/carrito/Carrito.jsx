import React, { useContext, useState, useEffect } from "react";
import { AppContext } from "../../../router/RouterDom";
import { setCarrito } from "../../../services/localInfo";
import { showNotyToast } from "../../../services/Notification";
import "./stylesCarrito.scss";

const Carrito = ({ id, size = 0, type = 0 }) => {
  const { car, setCar, setTotalPrice, foods } = useContext(AppContext);
  const [currentFood, setCurrentFood] = useState(
    foods.filter((food) => food.cod === id)
  );

  const [cantidad, setCantidad] = useState(0);
  const handleCar = (op) => {
    let newProduct = {};
    let incar = false;
    let arraycar = car;
    console.log(id);
    console.log(currentFood);

    if (type === 0) {
      if (op === "+") {
        arraycar.map((item) => {
          if (item.cod === currentFood[0].cod) {
            item.quantity = item.quantity + 1;
            item.Totalprice =
              item.priceunity * item.quantity + item.aditionsprice;
            incar = true;
            setCantidad(item.quantity);
          }
        });

        if (!incar) {
          newProduct = {
            cod: currentFood[0].cod,
            name: currentFood[0].name,
            img: currentFood[0].img,
            restaurant: currentFood[0].restaurant,
            quantity: 1,
            aditions: [],
            aditionsprice: 0,
            priceunity: currentFood[0].price,
            Totalprice: currentFood[0].price,
          };
          arraycar.push(newProduct);
        }

        setCarrito(arraycar);
        setCar([...arraycar]);
      } else {
        arraycar.map((item, index) => {
          if (item.cod === currentFood[0].cod) {
            if (item.quantity > 1) {
              item.quantity = item.quantity - 1;
              item.Totalprice = item.Totalprice - item.priceunity;
              setCantidad(item.quantity);
            } else {
              arraycar.splice(index, 1);
              setCantidad(0);
              setTotalPrice(0);
              showNotyToast(
                "Producto retirado del carrito 😥",
                "#414141",
                "#414141"
              );
            }
            incar = true;
          }
        });
        if (incar) {
          setCar([...arraycar]);
          setCarrito(arraycar);
        }
      }
    } else {
      if (op === "+") {
        arraycar.map((item) => {
          if (item.cod === id) {
            item.quantity = item.quantity + 1;
            item.Totalprice =
              item.priceunity * item.quantity + item.aditionsprice;
            incar = true;
            setCantidad(item.quantity);
          }
        });

        if (!incar) {
          newProduct = {
            cod: currentFood[0].cod,
            name: currentFood[0].name,
            img: currentFood[0].img,
            quantity: 1,
            aditions: [],
            aditionsprice: 0,
            priceunity: currentFood[0].price,
            Totalprice: currentFood[0].price,
          };
          arraycar.push(newProduct);
        }

        setCarrito(arraycar);
        setCar([...arraycar]);
      } else {
        arraycar.map((item, index) => {
          if (item.cod === id) {
            if (item.quantity > 1) {
              item.quantity = item.quantity - 1;
              item.Totalprice = item.Totalprice - item.priceunity;
              setCantidad(item.quantity);
            } else {
              arraycar.splice(index, 1);
              setCantidad(0);
              setTotalPrice(0);
              showNotyToast(
                "Producto retirado del carrito 😥",
                "#414141",
                "#414141"
              );
            }
            incar = true;
          }
        });
        if (incar) {
          setCar([...arraycar]);
          setCarrito(arraycar);
        }
      }
    }

    console.log("oprimo");
  };

  const cantidadCarrito = () => {
    let cant = car.filter((item) => item.cod === Number(id));
    if (cant.length !== 0) {
      setCantidad(cant[0].quantity);
      setTotalPrice(cant[0].Totalprice);
    } else {
      setCantidad(0);
      setTotalPrice(0);
    }
  };

  useEffect(() => {
    cantidadCarrito();
  }, [car]);

  return (
    <section className={`actionsCar ${size !== 0 ? "sizeCarButton" : ""}`}>
      <button
        className="btnActionCar"
        onClick={() => {
          handleCar("-");
        }}
      >
        -
      </button>
      <p>{cantidad}</p>
      <button
        className="btnActionCar"
        onClick={() => {
          handleCar("+");
        }}
      >
        +
      </button>
    </section>
  );
};

export default Carrito;
