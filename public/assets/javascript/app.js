$("#Submit").click(function() {
  console.log("Hello");
  console.log($("#Firstname").val());
  console.log($("#Lastname").val());
  console.log($("#TelephoneNumber").val());
  if ($("#Parent").is(':checked')){
      console.log("Parent is checked");
  };
  if ($("#LegalGuardian").is(':checked')) {
      console.log("LegalGuardian is checked");
  };
  if ($("#Student").is(':checked')){
      console.log("Student is checked");
  };
  if ($("#Other").is(':checked')){
      console.log("Other is checked");
  };
  if ($("#EmergencyAlerts").is(':checked')){
      console.log("EmergencyAlerts is checked");
  };
  if ($("#CampusNewsAlerts").is(':checked')){
      console.log("#CampusNewsAlerts is checked");
  };
  if ($("#AreaNewsAlerts").is(':checked')){
      console.log("AreaNewsAlerts is checked");
  };
  if ($("#SchoolClosureAlerts").is(':checked')){
      console.log("SchoolClosureAlerts is checked");
  };
  location.reload();
});//End of click function

$("#alertmessagedropdown").change(function() {
  console.log($("#alertmessagedropdown option:selected").text());
});//End of alertmessagedropdown
