// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use

const firebaseConfig = {
  apiKey: "AIzaSyAmGJh3kxyXh1i4_e3w5MbvXqq8Maol_UY",
  authDomain: "appdomicilios-4a001.firebaseapp.com",
  projectId: "appdomicilios-4a001",
  storageBucket: "appdomicilios-4a001.appspot.com",
  messagingSenderId: "541893582657",
  appId: "1:541893582657:web:7cfef0c427bcecd3bf4bc0",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore(app);
