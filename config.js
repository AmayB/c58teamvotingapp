import firebase from 'firebase';

  var firebaseConfig = {
    //paste your SDK here
    apiKey: "AIzaSyD1bMVgziYLskegeh6i_k0s-_KdbOvaR-w",
    authDomain: "pro-c58-team-voting-app-1c489.firebaseapp.com",
    databaseURL: "https://pro-c58-team-voting-app-1c489-default-rtdb.firebaseio.com",
    projectId: "pro-c58-team-voting-app-1c489",
    storageBucket: "pro-c58-team-voting-app-1c489.appspot.com",
    messagingSenderId: "943236031760",
    appId: "1:943236031760:web:432184d270bf0929c73195"
  };

  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  
  export default firebase.database();