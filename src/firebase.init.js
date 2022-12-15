// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC4V32jS_umNRsgmy0AlBJKWqQsBGV6fSs",
  authDomain: "grovi-grocery-store.firebaseapp.com",
  projectId: "grovi-grocery-store",
  storageBucket: "grovi-grocery-store.appspot.com",
  messagingSenderId: "126535684320",
  appId: "1:126535684320:web:ba648b223f8b7e0dfd0085",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;
