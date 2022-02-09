// v9 compat packages are API compatible with v8 code
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCXUWiZ5TXpnPSCRu9inijQtbIF0pbuhWM",
    authDomain: "learn-vue-9d934.firebaseapp.com",
    projectId: "learn-vue-9d934",
    storageBucket: "learn-vue-9d934.appspot.com",
    messagingSenderId: "133465017485",
    appId: "1:133465017485:web:ffafa518fae350dca426c4"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

//init firestore
const projectFirestore = firebase.firestore();

export {
    projectFirestore
}