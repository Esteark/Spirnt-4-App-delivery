import React from "react";
import logo from "../../../assets/img/logo.svg";
import { BsTelephoneFill } from "react-icons/bs";
import "./stylesLoginPhone.scss";
import Logo from "../logo/Logo";

const FormLoginPhone = () => {
  return (
    <main className="secMainLoginPhone">
      <section className="secMainLoginPhone__logo">
        <Logo />
        <p>
          Login or create an account with your phone number to start ordering
        </p>
      </section>

      <section className="phone__sec">
        <div className="phone-input">
          <div className="phone__secIcons">
            <BsTelephoneFill className="iconPhone" />
            <select id="phone-prefix" name="phone-prefix">
              <option value="57">+57</option>
              <option value="52">+52</option>
              <option value="44">+44</option>
              <option value="81">+81</option>
            </select>
          </div>
          <input type="number" id="phone-number" name="phone-number" />
        </div>
      </section>
    </main>
  );
};

export default FormLoginPhone;
