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
$("#adminLoginSubmit").click(function(event) {
  event.preventDefault();
  console.log("The submit function is running...");

  var adminEmail = $("#admin-email").val().trim();
  var adminPassword = $("#admin-password").val().trim();

  // var adminEmail = "john.isabella@gmail.com";
  // var adminPassword = "headsup2018";

  firebase.auth().signInWithEmailAndPassword(adminEmail, adminPassword)
  .then(function(data){
    console.log("Successfully logged in");
    console.log(data);
    window.location = '/messages';
  })
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
});
});
});
