import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/storage';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyDxU2ThMb-KVXICirfx5SGP1m0kSJF_55U",
    authDomain: "compilation-tech-data-center.firebaseapp.com",
    projectId: "compilation-tech-data-center",
    storageBucket: "compilation-tech-data-center.appspot.com",
    messagingSenderId: "1024803254794",
    appId: "1:1024803254794:web:765ca8aca8f3eefd4aa5f3",
    measurementId: "G-737F062K4Q"
};

  firebase.initializeApp(firebaseConfig);

  export default firebase;