import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyDewS_OwUGOWmrRdvAHBD747OCGaBmXPpA",
  authDomain: "exercise-7-adv.firebaseapp.com",
  projectId: "exercise-7-adv",
  storageBucket: "exercise-7-adv.appspot.com",
  messagingSenderId: "948490468974",
  appId: "1:948490468974:web:dfa31a97e610ff68f4f07f",
  measurementId: "G-N42BWH57ZC"
};

const firebaseApp = initializeApp(firebaseConfig);
const auth = getAuth(firebaseApp);

export { auth, firebaseApp };
