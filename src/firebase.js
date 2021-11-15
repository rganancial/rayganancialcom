// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// import { getFirestore } from "firebase/firestore"

// const fireApp = firebase.initializeApp({
//     apiKey: "AIzaSyDCCA-MKmsFPz98Yf8KZ_90n35A80zqNZw",
//     authDomain: "rayganancialcom.firebaseapp.com",
//     projectId: "rayganancialcom",
//     storageBucket: "rayganancialcom.appspot.com",
//     messagingSenderId: "738990104990",
//     appId: "1:738990104990:web:4d1dd2be2dd97d27e6f68f",
//     measurementId: "G-LY7JWMTR6Z"
// })

// export const auth = fireApp.auth()
// export default fireApp
// export const db = getFirestore(fireApp);

import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDCCA-MKmsFPz98Yf8KZ_90n35A80zqNZw",
    authDomain: "rayganancialcom.firebaseapp.com",
    projectId: "rayganancialcom",
    storageBucket: "rayganancialcom.appspot.com",
    messagingSenderId: "738990104990",
    appId: "1:738990104990:web:4d1dd2be2dd97d27e6f68f",
    measurementId: "G-LY7JWMTR6Z"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);