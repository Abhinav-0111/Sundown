const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});

var elemc = document.querySelector(".elem_container");
var fixed = document.querySelector(".fixed_img");
elemc.addEventListener("mouseenter", function () {
  fixed.style.display = "block";
});
elemc.addEventListener("mouseleave", function () {
  fixed.style.display = "none";
});

// var elem1 = document.getElementById("elem1");
// var image = elem1.getAttribute("data-image");

// elem1.addEventListener("mouseenter", function () {
//     fixed.style.backgroundImage = `url(${image})`;
// });

var elems = document.querySelectorAll(".elem");

elems.forEach(function (e) {
  e.addEventListener("mouseenter", function () {
    var image = e.getAttribute("data-image");
    fixed.style.backgroundImage = `url(${image})`;
  });
});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: "auto",
  centeredSlides: true,
  spaceBetween: 70,
});

var curser = document.querySelector(".curser");
document.addEventListener("mousemove", function (dets) {
  curser.style.display = "block";
  curser.style.left = dets.x - 50 + "px";
  curser.style.top = dets.y - 50 + "px";
});

var menu = document.querySelector(".menu");
var fullscr = document.querySelector(".full_scr");
var img = document.querySelector("nav img");
var nav = document.querySelector("nav");
var ch = 1;
menu.addEventListener("click", function () {
  if (ch == 1) {
    fullscr.style.top = 0;
    img.style.opacity = 0;

    ch = 2;
  } else {
    fullscr.style.top = "-100%";
    img.style.opacity = 1;
    ch = 1;
  }
});

var loader = document.querySelector(".loader");
setTimeout(() => {
  loader.style.top = "-100%";
}, 3000);
