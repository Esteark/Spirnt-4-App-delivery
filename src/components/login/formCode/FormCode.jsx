import React, { useEffect, useRef, useState } from "react";
import Logo from "../logo/Logo";
import "./stylesFormCode.scss";

const FormCode = () => {
  const inputRefs = useRef([]);
  const [code, setCode] = useState("");

  const focusNextInput = (currentInput, index) => {
    if (currentInput.value.length === currentInput.maxLength) {
      if (index === inputRefs.current.length - 1) {
        inputRefs.current[0].focus();
      } else {
        inputRefs.current[index + 1].focus();
      }
    }
  };
  const handleChange = (event, index) => {
    focusNextInput(event.target, index);
    let code = "";
    inputRefs.current.map((item) => {
      code += item.value;
    });
    setCode(code);
  };

  useEffect(() => {
    console.log(code);
  }, [code]);
  return (
    <section className="SecCode">
      <article>
        <Logo />
        <h3>Verification</h3>
        <p>
          Enter the four-digit code from SMS SMS not received.
          <span>Send again?</span>
        </p>
      </article>
      <div className="code-input">
        {[0, 1, 2, 3, 4].map((index) => (
          <input
            key={index}
            type="text"
            maxLength={1}
            ref={(input) => (inputRefs.current[index] = input)}
            onChange={(event) => handleChange(event, index)}
          />
        ))}
      </div>

      <article className="btnIngresarCode">
        <button>Ingresar</button>
      </article>
    </section>
  );
};

export default FormCode;
