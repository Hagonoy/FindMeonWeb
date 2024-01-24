// top button here
// Get the button
let mybutton = document.getElementById("myBtn");
    
// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 25) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// show loading screen
(function(){
  var myDiv = document.getElementById("loader"),
    show = function(){
      myDiv.style.visibility = "visible";
      document.querySelector("body").style.backgroundColor = "#04AA6D";
      document.querySelector("body").style.visibility = "hidden";

      setTimeout(hide, 3000); // 3 seconds
    },

    hide = function(){
      myDiv.style.display = "none";
      document.querySelector("body").style.visibility = "visible";
      document.querySelector("body").style.backgroundColor = "#36454F";
    };

  show();
})();