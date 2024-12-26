$(window).on("scroll", function(ref) {
    ref.preventDefault();
    if($(window).scrollTop()) {
          $('nav').addClass('nascrol');
    }
    else {
          $('nav').removeClass('nascrol');
    }
    if($(window).scrollTop()>200){
        $(".strelica").show();
    }else{
        $(".strelica").hide();
    }
})

$(document).ready(function(){
    $("#slider").owlCarousel({
        margin:40,
        autoplay:true,
        loop:true,
        autoplayTimeout:4000,
        responsive:{
            0:{
                items:1
            },
            768:{
                items:3
            },
            1024:{
                items:5
            }
        }
    });
    $("#body").owlCarousel({
        margin:40,
        autoplay:true,
        loop:true,
        autoplayTimeout:6000,
        items:1,
        dots:false
    });
});


