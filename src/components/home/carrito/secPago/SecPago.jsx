import React, { useContext } from "react";
import "./stylesSecPago.scss";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import locationIcon from "../../../../assets/img/locations.png";
import { SiMastercard } from "react-icons/si";
import { SiPaypal } from "react-icons/si";
import { BsCashCoin } from "react-icons/bs";
import { BsFillCartXFill } from "react-icons/bs";
import { AppContext } from "../../../../router/RouterDom";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Carrito from "../Carrito";
import ButtonsActions from "../../secfiltersHome/buttonsActions/ButtonsActions";

const SecPago = () => {
  const { car, formatterPeso, totalCar } = useContext(AppContext);
  const [metodoPago, setMetodoPago] = useState(0);
  const navigate = useNavigate();

  const metodosPago = [
    {
      id: 0,
      icon: <BsCashCoin className="iconButtonPago" />,
      tipo: "Efectivo",
    },
    {
      id: 1,
      icon: <SiMastercard className="iconButtonPago" />,
      tipo: "23456...",
    },
    {
      id: 2,
      icon: <SiPaypal className="iconButtonPago" />,
      tipo: "Paypal",
    },
  ];

  return (
    <section className="SecPago">
      <article className="secHeaderPago">
        <IoIosArrowBack
          className="iconBack"
          onClick={() => {
            navigate(-1);
          }}
        />
        <h3>Nueva Orden</h3>
      </article>
      <article className="SeclocationPago">
        <h3>Deliver to</h3>
        <figure>
          <img src={locationIcon} alt="" />
          <h3>882 Well St, New-York</h3>
          <IoIosArrowForward className="iconTo" />
        </figure>
      </article>
      <article className="SecMetodoPago">
        <h3>Payment</h3>
        <div className="secButtonsPago">
          {metodosPago.map((item, index) => (
            <button
              key={index}
              className={metodoPago === item.id ? "btn__active" : ""}
              onClick={() => {
                setMetodoPago(item.id);
              }}
            >
              {item.icon} <span>{item.tipo}</span>
            </button>
          ))}
        </div>
      </article>
      {car.length !== 0 ? (
        <article className="secCarPago">
          {car.map((item, index) => (
            <figure key={index}>
              <img src={item.img} alt="" />
              <figcaption>
                <section className="secButtonCars">
                  <Carrito id={item.cod} size={1} type={1} />
                </section>
                <section className="secTextCar">
                  <h3>{item.name}</h3>
                  <h3 className="totalText">
                    {formatterPeso.format(item.Totalprice)}
                  </h3>
                </section>
              </figcaption>
            </figure>
          ))}
        </article>
      ) : (
        <article className="secEmptyCar">
          <BsFillCartXFill />
          <h3>No hay productos en el carrito</h3>
        </article>
      )}
      {car.length !== 0 ? (
        <>
          <article className="secSugerencias">
            <h3>Note</h3>
            <input type="text" placeholder="Write something" />
          </article>
          <article className="secFactura">
            <div>
              <h4>Products</h4>
              <h4>{formatterPeso.format(totalCar)}</h4>
            </div>
            <div>
              <h4>Delivery</h4>
              <h4>{formatterPeso.format(10000)}</h4>
            </div>
            <div className="separador"></div>
            <div>
              <h4>Total</h4>
              <h4 className="totalText">
                {formatterPeso.format(totalCar + 10000)}
              </h4>
            </div>
          </article>
          <article className="secButtonOrder">
            <ButtonsActions op={1} />
          </article>
        </>
      ) : (
        <></>
      )}
    </section>
  );
};

export default SecPago;
