// firebase-config.js
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-firestore.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.0/firebase-storage.js";

const firebaseConfig = {
  apiKey: "AIzaSyCMUvQaoGg_ZmvIChjacWkBmxmGRerEQEc",
  authDomain: "annas-e7d85.firebaseapp.com",
  projectId: "annas-e7d85",
  storageBucket: "annas-e7d85.firebasestorage.app",
  messagingSenderId: "861175866700",
  appId: "1:861175866700:web:c8b3b3cfe37e4f5fbc1be9",
  measurementId: "G-S01399MF6G"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const storage = getStorage(app);

export { auth, db, storage };