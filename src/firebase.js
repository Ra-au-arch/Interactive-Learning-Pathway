// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAfDAy1szfsf5WariXBbkIdZC8zYLePWJQ",
  authDomain: "interactive-learning-pathway.firebaseapp.com",
  projectId: "interactive-learning-pathway",
  storageBucket: "interactive-learning-pathway.firebasestorage.app",
  messagingSenderId: "108458800149",
  appId: "1:108458800149:web:567873d4283f04d869ca1c",
  measurementId: "G-Z8X3NBYFH9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);