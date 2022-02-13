import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyDGWnUvmtDmsAdwVePin2Fi7pvcMuxorbs",
    authDomain: "live-c-724a9.firebaseapp.com",
    projectId: "live-c-724a9",
    storageBucket: "live-c-724a9.appspot.com",
    messagingSenderId: "870810436770",
    appId: "1:870810436770:web:3d7e7bec73a552077dc3fb"
};

//initialize firebase
firebase.initializeApp(firebaseConfig);

//initialize auth
const projectAuth = firebase.auth();

const projectFirestore = firebase.firestore();
const timestamp = firebase.firestore.FieldValue.serverTimestamp;

export {
    projectFirestore,
    timestamp,
    projectAuth
};