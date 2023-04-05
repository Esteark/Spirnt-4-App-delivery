import Toastify from "toastify-js";
import "toastify-js/src/toastify.css";

export const showNotyToast = (mensaje, color1, color2) => {
  Toastify({
    text: mensaje,
    duration: 3000,
    close: true,
    gravity: "top",
    position: "right",
    style: {
      background: `linear-gradient(to right, ${color1}, ${color2})`,
    },
    stopOnFocus: true,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    newWindow: true,
  }).showToast();
};
