import { initializeApp, FirebaseApp } from 'firebase/app';
import { getAuth, Auth } from 'firebase/auth';
import { getFirestore, Firestore } from 'firebase/firestore';

interface FirebaseConfig {
  apiKey: string;
  authDomain: string;
  projectId: string;
  storageBucket: string;
  messagingSenderId: string;
  appId: string;
  measurementId: string;
}

const firebaseConfig: FirebaseConfig = {
  // Replace with your Firebase config
  apiKey: "AIzaSyCvxwmyx8CksmIBrsDEdvKO8jWvWqgcaYE",
  authDomain: "avenus-b12c3.firebaseapp.com",
  projectId: "avenus-b12c3",
  storageBucket: "avenus-b12c3.firebasestorage.app",
  messagingSenderId: "548739805166",
  appId: "1:548739805166:web:0b6e0ab5542e501e98e8ff",
  measurementId: "G-1Q4KLZG15S"
};

// Initialize Firebase
const app: FirebaseApp = initializeApp(firebaseConfig);

// Initialize Firebase services
export const auth: Auth = getAuth(app);
export const db: Firestore = getFirestore(app);

export default app;
