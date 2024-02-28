// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDQ6scMj7MnaUGoEXcK4KD7nr6fZp2TOYI",
  authDomain: "ac-simple.firebaseapp.com",
  projectId: "ac-simple",
  storageBucket: "ac-simple.appspot.com",
  messagingSenderId: "485818583984",
  appId: "1:485818583984:web:38df86438d438804742475",
  measurementId: "G-L5ZLXEC2QL",
  databaseURL:"https://ac-simple-default-rtdb/data/~2F"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);