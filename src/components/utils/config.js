
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth"; // Correct import statement


const firebaseConfig = {
  apiKey: "AIzaSyAnAxh1O0G2T9-VStV9LmJ5QnKynm10Oz8",
  authDomain: "e-commerce-1ec98.firebaseapp.com",
  projectId: "e-commerce-1ec98",
  storageBucket: "e-commerce-1ec98.appspot.com",
  messagingSenderId: "290705965540",
  appId: "1:290705965540:web:5f2a243e51d9db5a4e47f1",
  measurementId: "G-EFL0BC2VV4"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth=getAuth(app);
const provider=new GoogleAuthProvider();
export {auth,provider};
