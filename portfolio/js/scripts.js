//Screenshot preview -> Credit to: http://cssglobe.com/lab/tooltip/03/
this.screenshotPreview = function () {
    /* CONFIG */

    xOffset = 10;
    yOffset = 30;

    // these 2 variable determine popup's distance from the cursor
    // you might want to adjust to get the right result

    /* END CONFIG */
    $("a.screenshot").hover(function (e) {

        this.t = this.title;
        this.title = "";
        var c = (this.t != "") ? "<br/>" + this.t : "";
        $("body").append("<p id='screenshot'><img src='" + this.rel + "' alt='url preview' />" + c + "</p>");
        $("#screenshot")
            .css("position", "absolute")
            .css("top", (e.pageY - xOffset) + "px")
            .css("left", (e.pageX + yOffset) + "px")

            .fadeIn("fast");
    },
        function () {
            this.title = this.t;
            $("#screenshot").remove();
        });
    $("a.screenshot").mousemove(function (e) {
        $("#screenshot")
            .css("top", (e.pageY - xOffset) + "px")
            .css("left", (e.pageX + yOffset) + "px");
    });
};




$(document).ready(function () {
    screenshotPreview();
    var on = true;
    $(".language-toggle").on("click", function () {
        if (on) {
            $(".language-dropdown").css("display", "block");
            $(".language-dropdown").animate({ width: '350px', opacity: '100%' }, "fast");



            on = false;

        }
        else {
            $(".language-dropdown").animate({ width: '0px', opacity: '100%' }, "fast");


            setTimeout(function () {
                $(".language-dropdown").css("display", "none");
            }, 150);

            on = true;
        }
    });

    //Make active navbar buttons on Click
    $("#centerNav a").on("click", function () {
        $("#centerNav a").removeClass("active");
        $(this).addClass("active");
    });

    //Scroll
    $(document).on("scroll", function () {
        var posY = (window.pageYOffset);
        var active = "#aAbout";
        if (posY > $("#skills").offset().top - 100) {
            active = "#aSkills"
        }
        if (posY > $("#portfolio").offset().top - 100) {
            active = "#aPortfolio";
        }
        $(".nav a").removeClass("active");
        $(active).addClass("active");
    });

});


