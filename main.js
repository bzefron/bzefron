  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyDRCnLLYzGL1AnmIRx17od3Ew6xUhW494k",
    authDomain: "restaurant-site-2f452.firebaseapp.com",
    databaseURL: "https://restaurant-site-2f452.firebaseio.com",
    storageBucket: "restaurant-site-2f452.appspot.com",
    messagingSenderId: "703777582270"
  };
  firebase.initializeApp(config);

  //Connect to DB
  var database = firebase.database();