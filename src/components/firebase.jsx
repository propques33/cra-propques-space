// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyD_WtUjnaoi2ToUdRj-dib0Nx6bOyMFdpo",
//   authDomain: "space-d03d3.firebaseapp.com",
//   projectId: "space-d03d3",
//   storageBucket: "space-d03d3.appspot.com",
//   messagingSenderId: "707112839105",
//   appId: "1:707112839105:web:7b673485da82ea7b16f140",
//   measurementId: "G-7YZXX61WSK",
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyD_WtUjnaoi2ToUdRj-dib0Nx6bOyMFdpo",
  authDomain: "space-d03d3.firebaseapp.com",
  projectId: "space-d03d3",
  storageBucket: "space-d03d3.appspot.com",
  messagingSenderId: "707112839105",
  appId: "1:707112839105:web:7b673485da82ea7b16f140",
  measurementId: "G-7YZXX61WSK",
};
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and export it
const auth = getAuth(app);

export { auth };
