import { database } from "../firebase/firebaseConfig";
import { collection, addDoc } from "firebase/firestore";

import { restaurants } from "./infoArrays";
import { infoFoods } from "./infoArrays";

const coleccionName = collection(database, "restaurants");
const coleccionNameFoods = collection(database, "infoFoods");

export const AddDataToFireStore = () => {
  restaurants.map(async (item, index) => {
    try {
      await addDoc(coleccionName, item);
      console.log("Datos agregados con éxito a la colección");
    } catch (error) {
      console.error("Error al agregar los datos:", error);
    }
  });
};

export const AddDataToFireStoreFoods = () => {
  infoFoods.map(async (item, index) => {
    try {
      await addDoc(coleccionNameFoods, item);
      console.log("Datos agregados con éxito a la colección");
    } catch (error) {
      console.error("Error al agregar los datos:", error);
    }
  });
};
