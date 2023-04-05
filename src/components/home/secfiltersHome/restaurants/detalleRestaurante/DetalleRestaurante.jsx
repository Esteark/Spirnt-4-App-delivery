import React, { useContext, useState } from "react";
import { useParams } from "react-router-dom";
import { AppContext } from "../../../../../router/RouterDom";
import FooterHome from "../../../footerHome/FooterHome";
import Foods from "../../foods/Foods";
import FilterMenu from "../filterMenu/FilterMenu";
import LogoRestaurant from "../logoRestaurant/LogoRestaurant";
import RestaurantComponent from "../restaurantCompontent/RestaurantComponent";
import "./stylesDetalleRestaurante.scss";

const DetalleRestaurante = () => {
  const { restaurantes, foods } = useContext(AppContext);
  const { id } = useParams();
  const [currentRestaurant, setCurrentRestaurant] = useState(
    restaurantes.filter((res) => Number(res.cod) === Number(id))
  );

  return (
    <main>
      <section className="secManDetalleRes">
        <article className="secLogoDetalle">
          <LogoRestaurant idRes={Number(id)} />
          <RestaurantComponent
            name={currentRestaurant[0].name}
            description={currentRestaurant[0].description}
            calification={currentRestaurant[0].calification}
            timeDelivery={currentRestaurant[0].timeDelivery}
            img={currentRestaurant[0].img}
          />
        </article>
        <article>
          <FilterMenu op={Number(id)} />
        </article>
        <article className="secFoodsDetalleRestaurant">
          <Foods idRes={Number(id)} />
        </article>
      </section>
      <FooterHome />
    </main>
  );
};

export default DetalleRestaurante;
