import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
    apiKey: "AIzaSyBZXi0TxIVSgvV-3e3OKjJzDcrluiZsdtg",
    authDomain: "instafood-da1ef.firebaseapp.com",
    projectId: "instafood-da1ef",
    storageBucket: "instafood-da1ef.firebasestorage.app",
    messagingSenderId: "565019893782",
    appId: "1:565019893782:web:855bc855ba6c395a98d537",
    measurementId: "G-SW4NG4BCMM"
  };

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
