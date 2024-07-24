// credenciales.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCy9GIfWK3SYJmh1E3MVt8IKDKhzKARhDY",
  authDomain: "sgeaadcbmipjet.firebaseapp.com",
  projectId: "sgeaadcbmipjet",
  storageBucket: "sgeaadcbmipjet.appspot.com",
  messagingSenderId: "10753632444",
  appId: "1:10753632444:web:a244090cc04ef3481e08b9",
  measurementId: "G-QZZERDM97C"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };
