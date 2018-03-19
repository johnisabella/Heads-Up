$(document).ready(function() {

  //Initailize Firebase
  var config = {
    apiKey: "AIzaSyD8AnjooES_RVXOP07MLcJc4WvMnPwNUA8",
    authDomain: "heads-up-ed9ff.firebaseapp.com",
    databaseURL: "https://heads-up-ed9ff.firebaseio.com",
    projectId: "heads-up-ed9ff",
    storageBucket: "",
    messagingSenderId: "297936301389"
  };

  firebase.initializeApp(config);

  /////////// FireBase authentication

  var adminEmail = $("#admin-email").val().trim();
  var adminPassword = $("#admin-password").val().trim();

  firebase.auth().createUserWithEmailAndPassword(email, password).catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  var errorMessage = error.message;
  // ...
});

});
