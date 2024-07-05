// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "raman-estate.firebaseapp.com",
  projectId: "raman-estate",
  storageBucket: "raman-estate.appspot.com",
  messagingSenderId: "109497835625",
  appId: "1:109497835625:web:f75d331c3b994a366a02f8",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
