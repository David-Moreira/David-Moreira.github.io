
$(document).ready(function() {
    console.log("documentReady");
var on = true;
    $(".language-toggle").on("click", function () {
        if (on) {
            $(".language-dropdown").css("display", "block");
            $(".language-dropdown").animate({width: '270px', opacity: '100%'}, "fast");
     
        

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

});