// varibles
const navBar_ = document.querySelector("nav");
const close_ = document.querySelector(".close_");
const li_slide_menu = document.querySelector(".hover_drop_nav")
const overlay = document.querySelector(".overlay");
const open_menu = document.querySelector(".bars_menu");
const body_ = document.querySelector("body");
const new_ = document.querySelectorAll(".new");
const item_div_ = document.querySelectorAll(".item_div");
const click_user = document.querySelector(".click_user");
const login_form = document.querySelector(".login_form");
const close_log = document.querySelector(".close_log");


$(document).ready(function(){
//start slider
$('.slider .owl-carousel').owlCarousel({
  loop:true,
  nav:true,
  // autoplay:true,
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
//start blog
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
if ($(window).width() <= 992){
// menu 
  $(".hover_drop_nav").click(function(){
    $(this).children().next().slideToggle("500");
  });

};
if ($(window).width() <= 767){
    //start new slider
    $(".new").addClass("owl-carousel");
    $(".item_div").addClass("item")
  
    $('.new.owl-carousel').owlCarousel({
      loop:false,
      nav:false,
      margin:15,
      // autoplay:true,
      stagePadding: 3,
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
              items:1
          }
      }
    })
};

});

// menu & overlay
// open_menu.addEventListener("click", function(){
//   navBar_.classList.add("open_");
//   body_.classList.add("over_");
//   overlay.style.display = "block";

// });
// overlay.addEventListener("click", function(){
//   navBar_.classList.remove("open_");
//   body_.classList.remove("over_");
//   overlay.style.display = "none";
//   login_form.classList.remove("open_login");



// });
// close_.addEventListener("click", function(){
//   navBar_.classList.remove("open_");
//   body_.classList.remove("over_");
//   overlay.style.display = "none";

// });

// back_top
// var btn = $('.back_top');
// $(window).scroll(function() {
//   if ($(window).scrollTop() > 100) {
//     btn.addClass('show');
//   } else {
//     btn.removeClass('show');
//   }
// });
// btn.on('click', function(e) {
//   e.preventDefault();
//   $('html, body').animate({scrollTop:0}, '500');
// });
// $(window).on('scroll', function() {
//   if($(window).scrollTop() > 300) {
//         $("nav").addClass("fixed");
//   } else {
//       $("nav").removeClass("fixed");
//   };
// });

// login 
// click_user.addEventListener("click", function(){
//   body_.classList.add("over_");
//   overlay.style.display = "block";
//   login_form.classList.add("open_login");
// })
// close_log.addEventListener("click", function(){
//   body_.classList.remove("over_");
//   overlay.style.display = "none";
//   login_form.classList.remove("open_login");
// })

// var mins = document.querySelector(".minutes");
// var hours = document.querySelector(".hours");
// var days = document.querySelector(".days");

// const second = 1000,
//       minute = second * 60,
//       hour = minute * 60,
//       day = hour * 24;

// let countDown = new Date('May 4, 2022 06:50:00').getTime(),
//     x = setInterval(function() {
      
//       let now = new Date().getTime(),
//           distance = countDown - now;
//       days.innerText = Math.floor(distance / (day)),
//       hours.innerText = Math.floor((distance % (day)) / (hour)),
//       mins.innerText = Math.floor((distance % (hour)) / (minute))
//     }, second)


    // ~~~~~~~~~~~~~~preload~~~~~~~~~~~~~~


    // document.onreadystatechange = function(e)
    // {
    //   if(document.readyState=="interactive")
    //   {
    //     var all = document.getElementsByTagName("*");
    //     for (var i=0, max=all.length; i < max; i++) 
    //     {
    //       set_ele(all[i]);
    //     }
    //   }
    // }
    
    // function check_element(ele)
    // {
    //   var all = document.getElementsByTagName("*");
    //   var totalele=all.length;
    //   var per_inc=100/all.length;
    
    //   if($(ele).on())
    //   {
    //     var prog_width=per_inc+Number(document.getElementById("progress_width").value);
    //     document.getElementById("progress_width").value=prog_width;
    //     $("#bar1").animate({width:prog_width+"%"},3,function(){
    //       if(document.getElementById("bar1").style.width=="100%")
    //       {
    //         $(".progress").fadeOut("slow");
    //       }			
    //     });
    //   }
    
    //   else	
    //   {
    //     set_ele(ele);
    //   }
    // }
    
    // function set_ele(set_element)
    // {
    //   check_element(set_element);
    // }


$(document).ready(function(){
  $('.btn_collapse_').click(function(){
    var toggle = $(this).next('.toggle_collapse');
    $(toggle).slideToggle("slow").prev(".color_toggle").toggleClass("poen_co");
    $(toggle).prev().children().children(".backg_toggle").toggleClass("poen_backg");
    $(toggle).parent().prev(".color_toggle").toggleClass("poen_co"); 
    $(this).children().children('.bar--horizontal').toggleClass("is-active");
  });
});
    

