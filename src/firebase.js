import firebase from 'firebase';
import 'firebase/firestore';

var firebaseConfig = {
  apiKey: 'AIzaSyAY88bHELhGIz6Bso58Nvl4qYYfvZ-dGEw',
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
