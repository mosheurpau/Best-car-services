// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtBOyc1o2f8Mufg6XX3veGcpBwM-ZrPxM",
  authDomain: "best-car-services.firebaseapp.com",
  projectId: "best-car-services",
  storageBucket: "best-car-services.appspot.com",
  messagingSenderId: "1072623555757",
  appId: "1:1072623555757:web:5ae38aa1c1ec82a423e224",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;
