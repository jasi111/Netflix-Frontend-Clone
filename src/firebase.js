// For Firebase JS SDK v7.20.0 and later, measurementId is optional

import firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyBekQOYT_S0W39LNYkWWfsS6RxSyfEiwUI",
    authDomain: "netflix-frontend-bcd6d.firebaseapp.com",
    projectId: "netflix-frontend-bcd6d",
    storageBucket: "netflix-frontend-bcd6d.appspot.com",
    messagingSenderId: "977357543904",
    appId: "1:977357543904:web:ddd02d9c8dc0c9c5d8b385",
    measurementId: "G-K28SR76YF4"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);//takes configuration as object
  const db = firebase.firestore();//using realtime databse
  const auth = firebase.auth();//for authentication

  export {auth};
  export default db;