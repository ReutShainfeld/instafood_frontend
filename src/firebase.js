// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider } from "firebase/auth";

// const firebaseConfig = {
//     apiKey: "AIzaSyBZXi0TxIVSgvV-3e3OKjJzDcrluiZsdtg",
//     authDomain: "instafood-da1ef.firebaseapp.com",
//     projectId: "instafood-da1ef",
//     storageBucket: "instafood-da1ef.firebasestorage.app",
//     messagingSenderId: "565019893782",
//     appId: "1:565019893782:web:855bc855ba6c395a98d537",
//     measurementId: "G-SW4NG4BCMM"
//   };

// const app = initializeApp(firebaseConfig);
// export const auth = getAuth(app);
// export const googleProvider = new GoogleAuthProvider();

// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

// קונפיגורציה מהסביבה (.env)
const firebaseConfig = {
    apiKey: "AIzaSyBV_yn6F-EUS2PL7UqU84x3d3RUS71EXCY",
    authDomain: "instafoodnew.firebaseapp.com",
    projectId: "instafoodnew",
    storageBucket: "instafoodnew.firebasestorage.app",
    messagingSenderId: "777134798899",
    appId: "1:777134798899:web:2b303de93cf0a6ec27cb46",
    measurementId: "G-1K0H7ENFCP"
  };

// אתחול האפליקציה
const app = initializeApp(firebaseConfig);

// יצוא של ה-auth ושל ספק גוגל
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();

