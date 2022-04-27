$(document).ready(function(){

/*~~~~~~~~~~~~~~~~~~start slider~~~~~~~~~~~~~~~~~ */
$('.slider .owl-carousel').owlCarousel({
  loop:true,
  nav:true,
  autoplay:true,
  autoplaySpeed:5000,
  loop:true,
  speed:6000,
  rtl: $("html").attr("dir") == "rtl" ? true : false,
  navText: ["<i class='las la-angle-right'></i>", "<i class='las la-angle-left'></i>"],
  responsive:{
      0:{
          items:1
      },
      600:{
          items:1
      },
      1000:{
          items:1
      }
  }
})
  /*~~~~~~~~~~~~~~~~~~end slider~~~~~~~~~~~~~~~~~ */
/*~~~~~~~~~~~~~~~~~~start blog~~~~~~~~~~~~~~~~~~~ */
$('.blog .owl-carousel').owlCarousel({
  loop:true,
  nav:true,
  // autoplay:true,
  margin: 30,
  autoplaySpeed:5000,
  loop:true,
  speed:6000,
  rtl: $("html").attr("dir") == "rtl" ? true : false,
  navText: ["<i class='las la-angle-right'></i>", "<i class='las la-angle-left'></i>"],
  responsive:{
      0:{
          items:1
      },
      600:{
          items:2
      },
      1000:{
          items:3
      }
  }
})
/*~~~~~~~~~~~~~~~~~~end blog~~~~~~~~~~~~~~~~~~~~~ */

});
// varibles
const navBar_ = document.querySelector("nav");
const close_ = document.querySelector(".close_");
const li_slide_menu = document.querySelector(".hover_drop_nav")
const overlay = document.querySelector(".overlay");
const open_menu = document.querySelector(".bars_menu");
const body_ = document.querySelector("body");


// menu & overlay
open_menu.addEventListener("click", function(){
  navBar_.classList.add("open_");
  body_.classList.add("over_");
  overlay.style.display = "block";

});
overlay.addEventListener("click", function(){
  navBar_.classList.remove("open_");
  body_.classList.remove("over_");
  overlay.style.display = "none";

});
close_.addEventListener("click", function(){
  navBar_.classList.remove("open_");
  body_.classList.remove("over_");
  overlay.style.display = "none";

});

