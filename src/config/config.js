// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB3BfKmg-mfOfnfOfNe0q56w_8P2e5Tjj0",
  authDomain: "chatapp-86e6e.firebaseapp.com",
  projectId: "chatapp-86e6e",
  storageBucket: "chatapp-86e6e.firebasestorage.app",
  messagingSenderId: "380554613983",
  appId: "1:380554613983:web:c799cbf14bd4748c9a856a",
  measurementId: "G-N6931TGKXZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);