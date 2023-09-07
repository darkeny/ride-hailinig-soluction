
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { initializeApp } from "firebase/app";
import { getAuth } from "@firebase/auth";
import { getFirestore } from "firebase";
import { getStorage } from "firebase";

export const firebaseConfig = {
  apiKey: "AIzaSyALeq5_RndwgeAKyCTr3Ox6czwfBehLiRk",
  authDomain: "uber-zl-taxi.firebaseapp.com",
  databaseURL: "https://uber-zl-taxi-default-rtdb.firebaseio.com",
  projectId: "uber-zl-taxi",
  storageBucket: "uber-zl-taxi.appspot.com",
  messagingSenderId: "989833005577",
  appId: "1:989833005577:web:1a1c45199f5b1b845346d8",
  measurementId: "G-1FETCW6QF8",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const firestore = getFirestore(app);
export default app;