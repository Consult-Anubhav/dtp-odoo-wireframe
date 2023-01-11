// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCEJ0WB8WJmPLMBVeCSgI5eV6z5ZNwnDhU",
  authDomain: "ca-dtp-react.firebaseapp.com",
  projectId: "ca-dtp-react",
  storageBucket: "ca-dtp-react.appspot.com",
  messagingSenderId: "335756138928",
  appId: "1:335756138928:web:7f42bc1e2308c39907de75",
  measurementId: "G-CD1PDRHBKF"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);