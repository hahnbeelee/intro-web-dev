//Source: Lab 12
//when the document is ready
$(document).ready(function(){
  //list of images
  var images = [
    "images/canvas-paintings/custom-sorority-canvas.jpg",
    "images/sorority-letters/custom-sorority-letters1.jpg",
    "images/notebook/notebook4.jpg"
  ];

  //the index of the image that is currently displayed
  var currentIndex = 0;

  //when the next button is clicked
  $("#slideshowNext").click(function(){
    if(currentIndex == 2/*last index of images*/){
      currentIndex = 0;
    }else{
      currentIndex += 1;
    };
    document.getElementById("slideshowImage").src=images[currentIndex];
  });
});
