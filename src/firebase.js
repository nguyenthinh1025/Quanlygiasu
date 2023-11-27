// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
import "firebase/storage";
import { getAuth, GoogleAuthProvider } from 'firebase/auth'
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAORRLGdUaV2Kdhpxf10O6JkdRljN54O70",
  authDomain: "quanlygiasu-d8309.firebaseapp.com",
  projectId: "quanlygiasu-d8309",
  storageBucket: "quanlygiasu-d8309.appspot.com",
  messagingSenderId: "919659639053",
  appId: "1:919659639053:web:8878d738810c3ae92ec044"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage_bucket = getStorage(app);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider()
export const firestore = getFirestore(app);
