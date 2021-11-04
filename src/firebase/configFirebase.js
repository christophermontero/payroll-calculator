import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

// Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBS8ia-Mreaej_h42i0wprbAI1ifLo9KBk',
  authDomain: 'nominal-calculator-api.firebaseapp.com',
  projectId: 'nominal-calculator-api',
  storageBucket: 'nominal-calculator-api.appspot.com',
  messagingSenderId: '980496968935',
  appId: '1:980496968935:web:e903b9b245a3e2b7618642'
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { firebase, db, googleAuthProvider };
