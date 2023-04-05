import { getDocs, collection } from "firebase/firestore";
import { database } from "../firebase/firebaseConfig";

export const getCollections = async (nameCollection) => {
  const coleccion = [];
  try {
    const colections = collection(database, nameCollection);
    const docs = await getDocs(colections);
    docs.forEach((doc) => {
      coleccion.push({ id: doc.id, ...doc.data() });
    });
    return coleccion;
  } catch (error) {
    console.log(error);
  }
};

export const getRestauranteFiltro = async (nameCollection, param) => {
  const doc = [];
  try {
    const colection = collection(database, nameCollection);
    const query = colection.where("foods", "==", `${param}`);
    query.forEach((item) => {
      doc.push({ id: item.id, ...item.data() });
    });
    console.log(doc);
    return doc;
  } catch (error) {}
};
