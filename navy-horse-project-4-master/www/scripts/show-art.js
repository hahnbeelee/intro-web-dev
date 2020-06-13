// When the document has loaded
$(document).ready(function() {

//when paintings clicked
 $("#paintings_button").click(function() {
    //remove hidden class for relevant images
    $("#paintings").removeClass("hidden");
    //hide other categories if previously selected
    $("#sorority_letters").addClass("hidden");
    $("#notebook").addClass("hidden");
    //add highlight to current tab
    $("#paintings_button").addClass("button_selected");
    //remove highlight from other tabs
    $("#sorority_letters_button").removeClass("button_selected");
    $("#notebook_button").removeClass("button_selected");
  });

  $("#sorority_letters_button").click(function() {
     //remove hidden class for relevant images
     $("#sorority_letters").removeClass("hidden");
     //hide other categories if previously selected
     $("#paintings").addClass("hidden");
     $("#notebook").addClass("hidden");
     //add highlight to current tab
     $("#sorority_letters_button").addClass("button_selected");

     //remove highlight from other tabs
     $("#paintings_button").removeClass("button_selected");   $("#notebook_button").removeClass("button_selected");

   });

   $("#notebook_button").click(function() {
      //remove hidden class for relevant images
      $("#notebook").removeClass("hidden");
      //hide other categories if previously selected
      $("#paintings").addClass("hidden");
      $("#sorority_letters").addClass("hidden");
      //add highlight to current tab
      $("#notebook_button").addClass("button_selected");
      //remove highlight from other tabs
      $("#paintings_button").removeClass("button_selected");   $("#sorority_letters_button").removeClass("button_selected");
    });
});
