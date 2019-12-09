import firebase from 'firebase';
import 'firebase/firestore';

const API_KEY = process.env.REACT_APP_API_KEY;

var firebaseConfig = {
  apiKey: API_KEY,
  authDomain: 'emoji-tetris1.firebaseapp.com',
  databaseURL: 'https://emoji-tetris1.firebaseio.com',
  projectId: 'emoji-tetris1',
  storageBucket: 'emoji-tetris1.appspot.com',
  messagingSenderId: '42304859550',
  appId: '1:42304859550:web:378c7ed82a1a9b7c367a8f',
  measurementId: 'G-HFTQ64M8VB'
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
