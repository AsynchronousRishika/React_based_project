// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDll4DrnHhBWADNqC166WboRIoqvfWjROk",
  authDomain: "contact-app-80e8c.firebaseapp.com",
  projectId: "contact-app-80e8c",
  storageBucket: "contact-app-80e8c.appspot.com",
  messagingSenderId: "906251976850",
  appId: "1:906251976850:web:6441408f0aff21bf8fe64b",
  measurementId: "G-129LYEK5EJ"
};

// Initialize Firebase
 export  const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);