// document.addEventListener("DOMContentLoaded", function () {
//     var navbar = document.getElementById("navbar");

//     window.addEventListener("scroll", function () {
//       if (window.scrollY > 0) {
//         navbar.classList.add("scrolled");
//       } else {
//         navbar.classList.remove("scrolled");
//       }
//     });
//   });
document.addEventListener("DOMContentLoaded", function() {
  window.addEventListener("scroll", function() {
    var navbar = document.getElementById("navbar");

    if (window.scrollY > 50) {
      navbar.style.backgroundColor = "black"; // Change the background color when scrolling
    } else {
      navbar.style.backgroundColor = "transparent"; // Reset to transparent background
    }
  });
});


var typed = new Typed(".auto-type",{
  strings:["Frontend Developer","Backend developer"],
  typeSpeed:150,
  backSpeed:150,
  loop:true
})