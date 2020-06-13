$(document).ready(function(){
    $("#feedbackForm").on("submit", function(){
      var formValid = true;

      var nameIsValid = $("#name").prop("validity").valid;

      if(nameIsValid){
        $("#userNameError").addClass("hidden");
      } else{
        formValid = false;
        $("#userNameError").removeClass("hidden");
      }

      var emailIsValid = $("#userEmail").prop("validity").valid;

      if(emailIsValid){
        $("#emailError").addClass("hidden");
      } else{
        formValid = false;
        $("#emailError").removeClass("hidden");
      }
      return formValid;
    });
});
