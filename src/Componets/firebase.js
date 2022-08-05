// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCX4F5gKKrUcu-blW9O2v_SzPYRR_Dsqbo",
  authDomain: "pan-starr.firebaseapp.com",
  projectId: "pan-starr",
  storageBucket: "pan-starr.appspot.com",
  messagingSenderId: "122074354767",
  appId: "1:122074354767:web:1b765f75caabdfc1e3463a",
  measurementId: "G-WCHN8L8ZMN",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);

// Initialize Cloud Firestore and get a reference to the service
const db = getFirestore(app);

// export default app;
const auth = getAuth();
export { db, auth };
