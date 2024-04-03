// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAd0h5_RlasShkpYC4ueA06orUkPquUVY8",
  authDomain: "sunnah-shop-fc61b.firebaseapp.com",
  projectId: "sunnah-shop-fc61b",
  storageBucket: "sunnah-shop-fc61b.appspot.com",
  messagingSenderId: "33851872950",
  appId: "1:33851872950:web:cc2dba29ce2d021b89f817"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth; 

