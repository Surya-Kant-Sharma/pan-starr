import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// console.log("env", 
// process.env.REACT_APP_APIKEY,
// process.env.REACT_APP_AUTH_DOMAIN,
// process.env.REACT_APP_PROJECT_ID,
// process.env.REACT_APP_STORAGE_BUCKET,
// process.env.REACT_APP_MESSAGING_SENDER_ID,
// process.env.REACT_APP_APP_ID,
// process.env.REACT_APP_MEASUREMENT_ID
// )

const firebaseConfig = {
  apiKey: "AIzaSyCytEB2AqwXYEqhZiR4KoGYHBJ5eNqmoho",

  authDomain: "panstarr-57a2d.firebaseapp.com",

  projectId: "panstarr-57a2d",

  storageBucket: "panstarr-57a2d.appspot.com",

  messagingSenderId: "962761632136",

  appId: "1:962761632136:web:74c4031f20899622dcf23d",

  measurementId: "G-TN5LV15H17"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase

export const db = getFirestore(app);
