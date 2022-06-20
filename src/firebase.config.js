// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBPpbF9nVlcph8xbJWeOib5oRKGVPLnMNA",
    authDomain: "react-firebase-blog-ce736.firebaseapp.com",
    databaseURL:
        "https://react-firebase-blog-ce736-default-rtdb.firebaseio.com",
    projectId: "react-firebase-blog-ce736",
    storageBucket: "react-firebase-blog-ce736.appspot.com",
    messagingSenderId: "885546770727",
    appId: "1:885546770727:web:a5720f5555b70dfb730902",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const storage = getStorage(app);

export const db = getFirestore(app);
