import React, { useState } from "react";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import "./stylesformemail.scss";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { userLoginAsync } from "../../../redux/actions/userActions";

const FormLoginEmail = () => {
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const onSubmit = (data) => {
    dispatch(userLoginAsync(data));
  };
  const handleTogglePassword = () => {
    setShowPassword(!showPassword);
  };

  return (
    <main className="secLoginEmail">
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="formLoginEmail">
        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register("email", { required: true })}
          />
          {errors.email ? <span>No dejes este campo vaciío</span> : <></>}
        </div>

        <div className="password-input">
          <label htmlFor="password">Password</label>
          <input
            type={showPassword ? "text" : "password"}
            id="password"
            {...register("password", { required: true })}
          />

          {errors.password ? <span>No dejes este campo vacío</span> : <></>}
        </div>

        <div>
          <Link to={"/createuseremail"}>
            <p>Registrate ahora</p>
          </Link>
        </div>
        <section className="btn-submitEmail">
          <button type="submit">Sing In</button>
        </section>
      </form>
    </main>
  );
};

export default FormLoginEmail;
