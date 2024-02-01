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
  var myDiv = document.getElementById("loader")
  var closebtn = document.getElementById("sclosebtn")
  var test = document.getElementById("test")
    show = function(){
      myDiv.style.display = "visible";
      document.querySelector("body").style.backgroundColor = "#04AA6D";
      document.querySelector("body").style.visibility = "hidden";

      setTimeout(hide, 3000); // 3 seconds
    },

    hide = function(){
      myDiv.style.display = "none";
      document.querySelector("body").style.visibility = "visible";
      document.querySelector("body").style.backgroundColor = "#36454F";
      test.innerHTML = "";
      // closebtn.style.display = "none";
    };

  show();
})();
(function(){
  announcement = function(){
        var myDivs = document.getElementById("announcement")
        var p = document.getElementById("announcement-p")
        var closebtn = document.getElementById("sclosebtn")
    fetch('https://api.mockfly.dev/mocks/29156950-a254-4a6d-9b32-f306ff88166b/announcement').then( response => response.json()).then(({announcement,announcementmessage}) =>{
      if(announcement){
        myDivs.style.display = "block";
        p.innerHTML = announcementmessage;
        closebtn.style.display = "block";
      }else{
        closebtn.style.display = "none";
      }
    })
  }
  announcement();
})();

function annclose(){
  var announcementdiv = document.getElementById("announcement");
  announcementdiv.style.display = "none";
}

// push notification
