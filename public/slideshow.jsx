var idx = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("showSlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  idx++;
  if (idx > x.length) {idx = 1}    
  x[idx-1].style.display = "block";  
  setTimeout(carousel, 4000);    
}

// Used to toggle the menu on small screens when clicking on the menu button
function myFunction() {
  var x = document.getElementById("navDemo");
  if (x.className.indexOf("w3-show") == -1) {
    x.className += " w3-show";
  } else { 
    x.className = x.className.replace(" w3-show", "");
  }
}
