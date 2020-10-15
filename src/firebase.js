// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import * as firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyDqJXg-S0EPUT3UUJ4YCC-OcIup9Akm_ok",
    authDomain: "whatsapp-dabe8.firebaseapp.com",
    databaseURL: "https://whatsapp-dabe8.firebaseio.com",
    projectId: "whatsapp-dabe8",
    storageBucket: "whatsapp-dabe8.appspot.com",
    messagingSenderId: "1049513072167",
    appId: "1:1049513072167:web:ce4978f44148ac7828a002",
    measurementId: "G-HTDCLN6RS5"
};
const firebaseApp = firebase.initializeApp(firebaseConfig);
 const db = firebaseApp.firestore();
export const auth = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
export default db;