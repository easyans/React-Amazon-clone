
import firebase from "firebase/compat/app" ;
import 'firebase/compat/auth'
import 'firebase/compat/firestore'

const firebaseConfig = {
    apiKey: "AIzaSyC5J-cBTJsZnro3z0eDfMnq_fmJ3HEf87E",
    authDomain: "clone-app-d1c21.firebaseapp.com",
    projectId: "clone-app-d1c21",
    storageBucket: "clone-app-d1c21.appspot.com",
    messagingSenderId: "634632952719",
    appId: "1:634632952719:web:9fc45013f94e5009b149fa",
    measurementId: "G-PCHLMGY601"
  };

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export {db, auth} ;