import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBTjqyy6L64Lp2Z9ElQPK2WIzWgd1ba2M4",
  authDomain: "climb-comerse.firebaseapp.com",
  projectId: "climb-comerse",
  storageBucket: "climb-comerse.appspot.com",
  messagingSenderId: "759249580425",
  appId: "1:759249580425:web:c6b2e9bb40823d9c53f158",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById("root")).render(<App />);
