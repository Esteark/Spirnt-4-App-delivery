import React from "react";
import FooterHome from "../footerHome/FooterHome";
import { HiOutlineUserCircle } from "react-icons/hi";
import { useDispatch } from "react-redux";
import { userLogoutAsync } from "../../../redux/actions/userActions";

const ProfileUser = () => {
  const dispatch = useDispatch();

  return (
    <>
      <section className="secUserProfile">
        <figure>
          <HiOutlineUserCircle />
        </figure>
        <button
          onClick={() => {
            dispatch(userLogoutAsync());
          }}
        >
          Cerrar Sesión
        </button>
      </section>
      <FooterHome />
    </>
  );
};

export default ProfileUser;
