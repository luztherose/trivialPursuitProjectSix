import firebase from 'firebase/app';
import 'firebase/database';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyApx33veThmjDgCCgNAB4xkjl1uD1ea2Fc",
    authDomain: "triviapursuit-69b19.firebaseapp.com",
    databaseURL: "https://triviapursuit-69b19.firebaseio.com",
    projectId: "triviapursuit-69b19",
    storageBucket: "triviapursuit-69b19.appspot.com",
    messagingSenderId: "898202637460",
    appId: "1:898202637460:web:0f0a6fdcad1f6440139081"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;