// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-immobilier-b2788.firebaseapp.com",
  projectId: "mern-immobilier-b2788",
  storageBucket: "mern-immobilier-b2788.firebasestorage.app",
  messagingSenderId: "442688713674",
  appId: "1:442688713674:web:d2b0190b8d029d2fb61533"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);