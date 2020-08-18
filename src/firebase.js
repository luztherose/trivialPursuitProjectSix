import firebase from 'firebase/app';
import 'firebase/database';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCD2SeUiuQN0IHwYp4-0Z3pY8hRy_6RdpI",
    authDomain: "triviapur.firebaseapp.com",
    databaseURL: "https://triviapur.firebaseio.com",
    projectId: "triviapur",
    storageBucket: "triviapur.appspot.com",
    messagingSenderId: "81080274402",
    appId: "1:81080274402:web:941656f82a968b02357dbb"
};
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;