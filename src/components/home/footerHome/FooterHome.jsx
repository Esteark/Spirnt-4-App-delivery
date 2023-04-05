import React, { useContext } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./stylesFooter.scss";
import { BsSearch } from "react-icons/bs";
import { HiOutlineUser } from "react-icons/hi";
import { RxCounterClockwiseClock } from "react-icons/rx";
import { IoHomeOutline } from "react-icons/io5";
import { AppContext } from "../../../router/RouterDom";

const FooterHome = () => {
  const location = useLocation();
  const { setOptionFilter } = useContext(AppContext);

  const menuNav = [
    {
      icon: <IoHomeOutline />,
      path: "/",
    },
    {
      icon: <BsSearch />,
      path: "/search",
    },
    {
      icon: <RxCounterClockwiseClock />,
      path: "/orders",
    },
    {
      icon: <HiOutlineUser />,
      path: "/profile",
    },
  ];

  return (
    <footer className="SecFooter">
      <nav className="SecFooter__nav">
        {menuNav.map((item, index) => (
          <NavLink key={index} to={item.path} className="SecFooter__nav__item">
            <figure
              onClick={() => {
                setOptionFilter(0);
              }}
              className={`IconFooter ${
                location.pathname === item.path ? "IconFooter__active" : ""
              }`}
            >
              {item.icon}
              <article
                className={`circle ${
                  location.pathname !== item.path ? "hidden" : ""
                }`}
              ></article>
            </figure>
          </NavLink>
        ))}
      </nav>
    </footer>
  );
};

export default FooterHome;
