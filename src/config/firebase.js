import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

// import firebase from 'firebase';

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAg8NhrQY1mF-5pGF7JbSvhk6s3_UYmngg",
    authDomain: "linkedin-9e1eb.firebaseapp.com",
    projectId: "linkedin-9e1eb",
    storageBucket: "linkedin-9e1eb.appspot.com",
    messagingSenderId: "299205073958",
    appId: "1:299205073958:web:ca5ef56cdc446cb2fc1ae7",
    measurementId: "G-FM1T6CZEW9"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();

  export { db, auth };