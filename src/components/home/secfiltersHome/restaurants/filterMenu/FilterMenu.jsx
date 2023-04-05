import React, { useContext, useEffect, useState } from "react";
import { AppContext } from "../../../../../router/RouterDom";
import "./stylesFilter.scss";

const FilterMenu = ({ op }) => {
  const { optionFilter, setOptionFilter } = useContext(AppContext);
  const [menu, setMenu] = useState([{}]);
  const changeMenu = () => {
    switch (op) {
      case 0:
        setMenu([
          { id: 0, opcion: "Hamburguesas" },
          { id: 1, opcion: "Papas" },
          { id: 2, opcion: "Burritos" },
        ]);
        break;
      case 1:
        setMenu([
          { id: 0, opcion: "Pizzas" },
          { id: 1, opcion: "Quesadillas" },
          { id: 2, opcion: "Alitas" },
        ]);
        break;
      case 2:
        setMenu([
          { id: 0, opcion: "Ensaladas" },
          { id: 1, opcion: "Sopas" },
          { id: 2, opcion: "Batidos" },
        ]);
        break;
      case 3:
        setMenu([
          { id: 0, opcion: "Pastas" },
          { id: 1, opcion: "Panes" },
          { id: 2, opcion: "Postres" },
        ]);
        break;
      default:
        setMenu([
          { id: 0, opcion: "sin opción" },
          { id: 1, opcion: "sin opción" },
          { id: 2, opcion: "sin opción" },
        ]);
        break;
    }
  };

  useEffect(() => {
    changeMenu();
  }, [optionFilter]);
  useEffect(() => {
    console.log(optionFilter);
  }, [optionFilter]);

  return (
    <section className="secMenuDetalle">
      {menu.map((item, index) => (
        <button
          onClick={() => {
            setOptionFilter(item.id);
          }}
          key={index}
          className={`${optionFilter === item.id ? "active" : ""}`}
        >
          {item.opcion}
        </button>
      ))}
    </section>
  );
};

export default FilterMenu;
