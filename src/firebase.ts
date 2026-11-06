import { initializeApp, getApps, getApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

export const firebaseConfig = {
  apiKey: "AIzaSyC_luuQqE3Gg4pkk4Ee1UmzhVlzFXFzii8",
  authDomain: "personal-portfolio-ragavan.firebaseapp.com",
  projectId: "personal-portfolio-ragavan",
  storageBucket: "personal-portfolio-ragavan.firebasestorage.app",
  messagingSenderId: "231198546153",
  appId: "1:231198546153:web:00cfbac1d604dd78113878"
};

// Initialize Firebase app singleton
export const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Cloud Firestore database
export const db = getFirestore(app);
