
// show loading screen
(function(){
  var myDiv = document.getElementById("loader")
  var closebtn = document.getElementById("sclosebtn")
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
      // closebtn.style.display = "none";
    };

  show();
})();
(function(){
  announcement = function(){
        var myDivs = document.getElementById("announcement")
        var p = document.getElementById("announcement-p")
        var closebtn = document.getElementById("sclosebtn")
    fetch('https://122987c6-c1f8-41f4-bac4-82d0530ac971.mock.pstmn.io/announcement').then( response => response.json()).then(({announcement,announcementmessage}) =>{
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
