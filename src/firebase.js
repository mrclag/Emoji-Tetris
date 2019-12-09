import firebase from 'firebase';
import 'firebase/firestore';

const API_KEY = process.env.REACT_APP_API_KEY;

var firebaseConfig = {
  apiKey: API_KEY,
  authDomain: 'emojitetris.firebaseapp.com',
  databaseURL: 'https://emojitetris.firebaseio.com',
  projectId: 'emojitetris',
  storageBucket: 'emojitetris.appspot.com',
  messagingSenderId: '716892922107',
  appId: '1:716892922107:web:9363fd1a060dd80899d05e',
  measurementId: 'G-8TLQV8Q61J'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
