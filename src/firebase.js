import firebase from 'firebase/app'
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const app =  firebase.initializeApp({
    apiKey: "AIzaSyA4ioGDadvwbewjqwF2pyt4Xt0poSnLLBM",
    authDomain: "radioroxanne.firebaseapp.com",
    projectId: "radioroxanne",
    storageBucket: "radioroxanne.appspot.com",
    messagingSenderId: "190139671986",
    appId: "1:190139671986:web:15ee710e5f236d3acd70ab",
    measurementId: "G-PSZ1LEQSB8"
});

// Initialize Firebase
const auth = app.auth()
const googleProvider = new firebase.auth.GoogleAuthProvider()

const store = app.firestore()
const storage = app.storage()

export { app, auth, store, storage, googleProvider }