
$(document).ready(function() {

var on = true;
    $(".language-toggle").on("click", function () {
        if (on) {
            $(".language-dropdown").css("display", "block");
            $(".language-dropdown").animate({width: '350px', opacity: '100%'}, "fast");
     
        

            on=false;

        }
        else {
            $(".language-dropdown").animate({width: '0px', opacity: '100%'}, "fast");

            
            setTimeout(function(){ 
                $(".language-dropdown").css("display", "none");
             }, 150);
            
            on=true;
        }
    });

    //Make active navbar buttons on Click
$("#centerNav a").on("click", function() {
    $("#centerNav a").removeClass("active");
    $(this).addClass("active");
});

    //Scroll
$(document).on("scroll", function() {
    var posY = (window.pageYOffset);
    var active = "#aAbout";
    if (posY > $("#skills").offset().top-100) {
        active = "#aSkills"
    }
    if (posY > $("#portfolio").offset().top-100 ) {
        active = "#aPortfolio";
    }
    $(".nav a").removeClass("active");
    $(active).addClass("active");
});

});