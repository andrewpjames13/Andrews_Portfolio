// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/sstephenson/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require jquery-ui
//= require_tree .

// $(document).ready(function(){
//   $('#menu-icon').click(function() {
//     $('#sidebar-t').toggle("slide");
//     $('.sidecontainer').animate({left:'+=35%'}, 500);
//
//     // $('#sidebar-t').on("mouseleave", function() {
//     //   $('.sidecontainer').animate({left:'-=35%'}, 500);
//     // });
//   });
// });


// $(document).ready(function(){
//   $('#menu-icon').click(function() {
//     $('#menu-icon').each(function(i) {
//       if (this.click == ":odd") {
//         // $('#sidebar-t').toggle("slide");
//         $('.sidecontainer').animate({left:'-=35%'}, 500);
//       } else {
//         // $('#sidebar-t').toggle("slide");
//         $('.sidecontainer').animate({left:'+=35%'}, 500);
//       }
//     });
//   });
// });


$(document).ready(function() {
  $('.welcome-page .header a, #sidebar a').on('click', function(e) {
    var scrollTo = $.attr(this, 'href').replace('/', '');
    e.preventDefault();
    $('.welcome-page').animate({scrollTop: $(scrollTo).offset().top, easing: 'easeInOutQuart', duration: 'slow'}, 1000);
  });

  var count = 0;
  $('#menu-icon').css({cursor: "pointer"}).on('click', function() {
    $('#menu-icon').each(function() {
      if (count == 0) {
        $('header').toggleClass("headerfade");
        $('#sidebar').toggle("slide");
        $('.sidecontainer').animate({left:'+=35%'}, 400, function() {});
        count = 1;
      } else if(count == 1){
        $('header').toggleClass("headerfade");
        $('#sidebar').toggle("slide");
        $('.sidecontainer').animate({left:'-=35%'}, 400, function() {});
        count = 0;
      }
    });
  });

});

// $('#menu-icon').css({cursor: "pointer"}).on('click', function() {
//   // $('#menu-icon, header').fadeOut('fast')
//   $('#menu-icon').each(function() {
//       $('#sidebar').toggle("slide");
//       $('.sidecontainer').animate({left:'+=35%'}, 400, function() {});
//   });
// });
//
// $('.side-nav-icon').on('click', function() {
//   $('#menu-icon, header').fadeIn('fast')
//   $('#sidebar').toggle("slide");
//   $('.sidecontainer').animate({left:'-=35%'}, 400, function() {});
// });
