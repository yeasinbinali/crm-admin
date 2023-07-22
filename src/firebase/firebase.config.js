// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD2YwQuT7MMPaq00f7qy4vuKnrJVElxHN4",
  authDomain: "crm-admin-portfolio.firebaseapp.com",
  projectId: "crm-admin-portfolio",
  storageBucket: "crm-admin-portfolio.appspot.com",
  messagingSenderId: "406677206765",
  appId: "1:406677206765:web:9f5ee1cf94a277c29a3ee4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;