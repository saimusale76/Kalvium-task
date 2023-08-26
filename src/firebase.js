// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey:process.env.NEXT_PUBLIC_APIKEY,
    authDomain:process.env.NEXT_PUBLIC_AUTHDOMAIN,
    projectId:process.env.NEXT_PUBLIC_PROJECTID,
    databaseURL:process.env.NEXT_PUBLIC_DATABASEURL,
    storageBucket:process.env.NEXT_PUBLIC_STORAGEBUCKET,
    messagingSenderId:process.env.NEXT_PUBLIC_MESSAGINGSENDERID,
    appId:process.env.NEXT_PUBLIC_APPID,
    measurementId:process.env.NEXT_PUBLIC_MEASUREMENTID
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();

export default db;

