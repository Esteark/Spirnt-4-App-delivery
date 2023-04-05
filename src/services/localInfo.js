export const setCarrito = (data) => {
  localStorage.setItem("car", JSON.stringify(data));
};

export const getCarrito = () => {
  return JSON.parse(localStorage.getItem("car")) || [];
};
