import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';


const firebaseConfig = {
  apiKey: "AIzaSyDkSgduvZ2YOdJcCESKs47-jVpZ9VgCAe8",
  authDomain: "portfolio-website-71bb0.firebaseapp.com",
  projectId: "portfolio-website-71bb0",
  storageBucket: "portfolio-website-71bb0.appspot.com",
  messagingSenderId: "264140449539",
  appId: "1:264140449539:web:a60d5425dd2a44995a2b36"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);