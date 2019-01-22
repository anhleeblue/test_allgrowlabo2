$(document).ready(function(){
    //open
    $(".menu_sp").click(function(){
      $("nav").addClass("nav_display");
      $("header").addClass("pd_header");
      $(".menu_sp_close").show();
    });
    //close
    $(".menu_sp_close").click(function(){
        $("nav").removeClass("nav_display");
        $("header").removeClass("pd_header");
      });
      //if
      $(window).on('resize', function(){
        var win = $(this); //this = window
        if (win.width() > 767) { 
          $("header").removeClass("pd_header");
          $(".menu_sp_close").hide();
         }
  });
    
  });