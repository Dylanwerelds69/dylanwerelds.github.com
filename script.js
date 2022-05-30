$(document).ready(function(){
    $(window).scroll(function(){
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
         }else{
            $('.navbar').removeClass("sticky");
        }
      });
     // toggle menu/navigator script //
     $('.menu-btn').click(function(){
         $('.navbar .menu').toggleClass("active");
         $('.menu-btn i').toggleClass("active");
     });
    });

    //typing Animation script
    var typed = new Typed(".typing", {
        strings: ["Devloper", "Designer", "Freelancer", "Creator"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });