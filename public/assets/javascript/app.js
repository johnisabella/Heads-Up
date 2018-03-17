$("#finalRegistrationSubmit").click(function(event) {
  event.preventDefault();

  //variables to hold initial data

  Relationship = "";
  EmergencyAlerts = "0";
  CampusNewsAlerts = "0";
  AreaNewsAlerts = "0";
  SchoolClosureAlerts = "0";

  //verify if boxes are checked

  if ($("#Parent").is(':checked')){
      Relationship = "Parent";
  };
  if ($("#LegalGuardian").is(':checked')) {
      Relationship = "LegalGuardian";
  };
  if ($("#Student").is(':checked')){
      Relationship = "Student";
  };
  if ($("#Other").is(':checked')){
      Relationship = "Other";
  };
  if ($("#EmergencyAlerts").is(':checked')){
      EmergencyAlerts = "1";
  };
  if ($("#CampusNewsAlerts").is(':checked')){
      CampusNewsAlerts = "1";
  };
  if ($("#AreaNewsAlerts").is(':checked')){
      AreaNewsAlerts = "1";
  };
  if ($("#SchoolClosureAlerts").is(':checked')){
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
      // log the data we found
      //console.log(data);
    });
  location.reload();
});

$("#alertmessagedropdown").change(function() {
  console.log($("#alertmessagedropdown option:selected").text());
});//End of alertmessagedropdown
