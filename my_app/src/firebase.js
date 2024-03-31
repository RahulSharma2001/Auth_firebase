// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDObGO1bUAXFDa_gVouxJQFV3CjU1Rjbfg",
  authDomain: "auth-b6ab8.firebaseapp.com",
  projectId: "auth-b6ab8",
  storageBucket: "auth-b6ab8.appspot.com",
  messagingSenderId: "668770808805",
  appId: "1:668770808805:web:2ebca41bed1effd4a4b50c",
  measurementId: "G-SC6H2500Q6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export default app;
