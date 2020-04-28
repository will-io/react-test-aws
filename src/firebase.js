import firebase from 'firebase/app';
import 'firebase/firestore';
//webapp firebase config
var firebaseConfig = {
    apiKey: "AIzaSyBoEzJxp3cThTPg-blrOvAdXwRGpSuViKs",
    authDomain: "swe432p8-database.firebaseapp.com",
    databaseURL: "https://swe432p8-database.firebaseio.com",
    projectId: "swe432p8-database",
    storageBucket: "swe432p8-database.appspot.com",
    messagingSenderId: "817073282497",
    appId: "1:817073282497:web:df2de41fcd9f6b1973a340",
    measurementId: "G-WPQEK6FS8N"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();

  export default firebase