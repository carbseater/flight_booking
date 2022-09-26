import { initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWrTqCOMMlIK3XS2XrSAWzNc5XQE27n8Y",
  authDomain: "flight-booking-2e236.firebaseapp.com",
  projectId: "flight-booking-2e236",
  storageBucket: "flight-booking-2e236.appspot.com",
  messagingSenderId: "397894267573",
  appId: "1:397894267573:web:a0426102c98abb489e44fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export { app, auth };