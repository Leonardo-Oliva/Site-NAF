import firebase from 'firebase';
import "firebase/storage";

const firebaseConfig = {
    apiKey: "AIzaSyD8ZGqZ5ztBC1H2BOo5xGOYMQR8fsoNcGk",
    authDomain: "site-naf.firebaseapp.com",
    projectId: "site-naf",
    storageBucket: "site-naf.appspot.com",
    messagingSenderId: "1023605462129",
    appId: "1:1023605462129:web:e6207b813c5dd15e9c77d0",
    databaseURL: "https://site-naf-default-rtdb.firebaseio.com/",
  };

export default firebase.initializeApp(firebaseConfig);