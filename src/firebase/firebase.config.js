// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBUcll4yIWatvlosCx7JYGCXCI6h2R4MXk",
  authDomain: "warm-paws-pet-care-c0d95.firebaseapp.com",
  projectId: "warm-paws-pet-care-c0d95",
  storageBucket: "warm-paws-pet-care-c0d95.firebasestorage.app",
  messagingSenderId: "55984055719",
  appId: "1:55984055719:web:f5e2608915b97bfb878282"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
