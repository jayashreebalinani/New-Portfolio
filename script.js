
document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener("scroll", function() {
    var navbar = document.getElementById("navbar");
//this is to change scroll bar color while it scrolls
    if (window.scrollY > 50) {
      navbar.style.backgroundColor = "black"; 
    } else {
      navbar.style.backgroundColor = "transparent"; 
    }
  });
});
//the text that style for auto typed
var typed = new Typed(".auto-type",{
  strings:["Frontend Developer","Backend developer"],
  typeSpeed:150,
  backSpeed:150,
  loop:true
})

