$("#finalRegistrationSubmit").click(function(event) {
  event.preventDefault();

  //variables to hold initial data

  Relationship = "";
  EmergencyAlerts = "0";
  CampusNewsAlerts = "0";
  AreaNewsAlerts = "0";
  SchoolClosureAlerts = "0";

  //verify if boxes are checked

  if ($("#Parent").is(':selected')){
      Relationship = "Parent";
  };
  if ($("#LegalGuardian").is(':selected')) {
      Relationship = "LegalGuardian";
  };
  if ($("#Student").is(':selected')){
      Relationship = "Student";
  };
  if ($("#Other").is(':selected')){
      Relationship = "Other";
  };
  if ($("#EmergencyAlerts").is(':selected')){
      EmergencyAlerts = "1";
  };
  if ($("#CampusNewsAlerts").is(':selected')){
      CampusNewsAlerts = "1";
  };
  if ($("#AreaNewsAlerts").is(':selected')){
      AreaNewsAlerts = "1";
  };
  if ($("#SchoolClosureAlerts").is(':selected')){
      SchoolClosureAlerts = "1";
  };

  // Create new variable/object to be later posted to api

  var newSubscriber = {
    Firstname: $("#Firstname").val().trim(),
    Lastname: $("#Lastname").val().trim(),
    TelephoneNumber: $("#TelephoneNumber").val().trim(),
    Relationship: Relationship,
    EmergencyAlerts: EmergencyAlerts,
    CampusNewsAlerts: CampusNewsAlerts,
    AreaNewsAlerts: AreaNewsAlerts,
    SchoolClosureAlerts: SchoolClosureAlerts,
  };

  // Post variable/object to API to save to database

  $.post("/api/newSubscriber", newSubscriber)
    // on success, run this callback
    .then(function(data) {
    });
  location.reload();
});

$("#alertmessagedropdown").change(function() {
  id = (document.getElementById("alertmessagedropdown").value);

  $.get("/api/message/" + id, function(data) {
    $("#CurrentAlertMessage").empty();
    $("#CurrentAlertMessage").append(data.Message);
  });

});//End of alertmessagedropdown

$("#finalizeMessageButtonModal").click(function(event) {
  //variable/object containing id and message to update the mySQL database through the post AJAX and API
  var update = {
    id: document.getElementById("alertmessagedropdown").value,
    Message: $("#CurrentAlertMessage").val()
  };
  //Execute the updateText function passing the variable/object update
  updateText(update);
  //Function updateTest, using AJAX/API we will update the messages_tbl table with the data from update variable/object
  function updateText() {
    $.ajax({
      method: "PUT",
      url: "/api/message",
      data: update
    })
      .then(function() {
        console.log("message has been updated");
      });
  }

  var r= $('<button type="button" class="btn btn-danger btn-lg btn-block" data-toggle="modal" data-target="#sendMessageModal">Send Message</button>');
  $("#finalizeMessageButton").replaceWith(r);
  $('#confirmMessageModal').hide();
});

$("#sendMessageModal").click(function(event) {
  var alertData = {
    id: document.getElementById("alertmessagedropdown").value,
    Message: $("#CurrentAlertMessage").val()
  };
  alert(alertData);
  function alert(){
    $.ajax({
      method: "POST",
      url: "/api/alerts",
      data: alertData
    })
      .then(function() {
      });
    location.reload();
    //console.log("sendMessageModal is executed");
  };
});
