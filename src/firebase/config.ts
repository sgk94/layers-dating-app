// src/firebase/config.ts
import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDttf8IbrT6kkMUYk3I-oyrSsfN4wZRTrE",
  authDomain: "layers-dating-app.firebaseapp.com",
  projectId: "layers-dating-app",
  storageBucket: "layers-dating-app.firebasestorage.app",
  messagingSenderId: "707754176824",
  appId: "1:707754176824:web:acc1ff552d1a46952691cd"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
