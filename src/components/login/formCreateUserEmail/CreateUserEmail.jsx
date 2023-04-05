import React, { useEffect } from "react";
import "./stylesCreateuserEmail.scss";
import { useForm } from "react-hook-form";
import { showNotyToast } from "../../../services/Notification";
import { useDispatch, useSelector } from "react-redux";
import { userRegisterAsync } from "../../../redux/actions/userActions";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../../../firebase/firebaseConfig";
import { useNavigate } from "react-router-dom";

const CreateUserEmail = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const { user } = useSelector((store) => store.user);
  const navigate = useNavigate();
  const onSubmit = (data) => {
    if (data.password !== data.password2) {
      showNotyToast("Las contraseñas no coinciden 😞", "#474747", "#474747");
    } else {
      dispatch(userRegisterAsync(data));
    }
  };
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/home");
      }
    });
  }, [user]);

  return (
    <main className="secLoginEmail">
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="formLoginEmail">
        <div>
          <label htmlFor="email">Name</label>
          <input
            type="text"
            id="name"
            {...register("name", { required: true })}
          />
          {errors.name ? <span>No dejes este campo vacío</span> : <></>}
        </div>

        <div>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            {...register("email", { required: true })}
          />
          {errors.email ? <span>No dejes este campo vacío</span> : <></>}
        </div>

        <div className="password-input">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            {...register("password", { required: true })}
          />

          {errors.password ? <span>No dejes este campo vacío</span> : <></>}
        </div>
        <div className="password-input">
          <label htmlFor="password">Confirm Password</label>
          <input
            type="password"
            id="password"
            {...register("password2", { required: true })}
          />

          {errors.password2 ? <span>No dejes este campo vacío</span> : <></>}
        </div>

        <section className="btn-submitEmail">
          <button type="submit">Register</button>
        </section>
      </form>
    </main>
  );
};

export default CreateUserEmail;
