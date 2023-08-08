import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
    apiKey: "AIzaSyAh-LLTrg6ufZg4IgCauJV3d6F1MeSHOcs",
    authDomain: "linkedin-clone-b7ca2.firebaseapp.com",
    projectId: "linkedin-clone-b7ca2",
    storageBucket: "linkedin-clone-b7ca2.appspot.com",
    messagingSenderId: "301191322328",
    appId: "1:301191322328:web:f473b2192cb9ea3adf55ad",
    measurementId: "G-D84YWQ5CQD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const firestore = getFirestore(app);
const storage = getStorage(app);
export { auth, app, firestore, storage };