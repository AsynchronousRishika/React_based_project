// Import the functions you need from the SDKs you need

// the code generated when we creating  firebase proejct  it helps to connect  our particular proejct with firebase.
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBFELNVdtee2zy6WG2LIHBADBy_Ys5L92A",
  authDomain: "contact-app-e7440.firebaseapp.com",
  projectId: "contact-app-e7440",
  storageBucket: "contact-app-e7440.appspot.com",
  messagingSenderId: "496249488503",
  appId: "1:496249488503:web:e46364dc6483145f7a3272",
  measurementId: "G-PLQ3314C9T",
  databaseURL: "https://contact-app-e7440-default-rtdb.firebaseio.com"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);