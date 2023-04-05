import React, { useContext, useEffect } from "react";
import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import { AppContext } from "./RouterDom";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";

const PrivateRoutes = ({ children }) => {
  const { user } = useSelector((store) => store.user);
  const { isLogin, setIsLogin } = useContext(AppContext);
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

  if (isLogin) {
    return children;
  } else {
    return <Navigate to={"/"} />;
  }
};

export default PrivateRoutes;
