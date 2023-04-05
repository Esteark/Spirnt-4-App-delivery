import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../../router/RouterDom";
import FooterHome from "../footerHome/FooterHome";
import "./stylesSearch.scss";
import { IoFastFood } from "react-icons/io5";
import { AiOutlineSearch } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";

const Searchproducts = () => {
  const { foods, formatterPeso, rechargeFoods } = useContext(AppContext);
  const [filterfoods, setFilterFoods] = useState([{}]);
  const [defaultValue, setDefaultValue] = useState("");
  const filterFoods = ({ target }) => {
    if (target.value.length !== 0) {
      setFilterFoods(
        foods.filter((food) =>
          food.name.toLowerCase().includes(target.value.toLowerCase().trim())
        )
      );
    } else {
      setFilterFoods([{}]);
    }

    setDefaultValue(target.value);
  };
  const clearValue = () => {
    setDefaultValue("");
    setFilterFoods([{}]);
  };
  const navigate = useNavigate();

  useEffect(() => {
    rechargeFoods();
  }, []);

  return (
    <section>
      <article className="secSearch">
        <label>
          <div className="secIconsInput">
            <AiOutlineSearch className="iconsInput" />
            <BsTrash className="iconsInput" onClick={clearValue} />
          </div>
          <input type="text" onChange={filterFoods} value={defaultValue} />
        </label>
        <section className="secFoodsFilter">
          {filterfoods[0]?.cod !== undefined ? (
            filterfoods.map((item, index) => (
              <figure
                key={index}
                onClick={() => {
                  navigate(`/food/${item.cod}`);
                }}
              >
                <img src={item.img} alt="" />
                <figcaption>
                  <h3>{item.name}</h3>
                  <p>{formatterPeso.format(item.price)}</p>
                </figcaption>
              </figure>
            ))
          ) : (
            <section className="secNoFilter">
              <IoFastFood className="iconNoFilter" />
              <h3>Ingresa una comida para poder realizar la busqueda</h3>
            </section>
          )}
        </section>
      </article>
      <FooterHome />
    </section>
  );
};

export default Searchproducts;
