//Referenced lab 10, project 3 as well as in class notes but wrote all code ourselves

//Page open
$(document).ready(function(){
  //Form submit
  $("#contactForm").on("submit", function(){
    //Start out valid input
    var formValid = true;

    //Check first name
    var firstNameValid = $("#firstName").prop("validity").valid;
    if (firstNameValid){
      $("#firstNameError").addClass("hidden");
    }
    else{
      $("#firstNameError").removeClass("hidden");
      formValid = false;
    }

    //Check last name
    var lastNameValid = $("#lastName").prop("validity").valid;
    if (lastNameValid){
      $("#lastNameError").addClass("hidden");
    }
    else{
      $("#lastNameError").removeClass("hidden");
      formValid = false;
    }

    //Checking for invalid email
    var userEmailInvalid = $("#userEmail").prop("validity").typeMismatch;

    //Checking for empty email
    var userEmailEmpty = $("#userEmail").prop("validity").valueMissing;

    //Valid email and NOT empty
    if (!userEmailInvalid && !userEmailEmpty){
      $("#userEmailErrorRequired").addClass("hidden");
      $("#userEmailErrorValid").addClass("hidden");
    }
    //Email field is empty
    else if(userEmailEmpty){
      $("#userEmailErrorRequired").removeClass("hidden");
      formValid = false;
    }
    //Email field is empty
    else{
      $("#userEmailErrorValid").removeClass("hidden");
      formValid = false;
    }

    //Resetting so there aren't two errors displayed
    //Email is valid
    if (!userEmailInvalid){
      $("#userEmailErrorValid").addClass("hidden");
    }
    //Email not empty
    if (!userEmailEmpty){
      $("#userEmailErrorRequired").addClass("hidden");
    }

    //OPTIONAL FIELD - Phone Number
    //Checking if there is a value present
    if($("userPhone").val()){
      //Invalid phone as per HTML standards
      var userPhoneValid = $("userPhone").prop("validity").valid;
      if (userPhoneValid){
        $("#userPhoneError").addClass("hidden");
      }
      else{
        $("#userPhoneError").removeClass("hidden");
        formValid = false;
      }
    }

    //Checking description field

    //Checking valid HTML validation and between 20-500 characters
    var descIsValid = $("#userDesc").prop("validity").valid;
    if (descIsValid){
      $("#userDescError").addClass("hidden");
    }
    else{
      $("#userDescError").removeClass("hidden");
      formValid = false;
    }

    //Don't submit if any field is invalid
    return formValid;
  })
})
