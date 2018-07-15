this.addEventListener("DOMContentLoaded", function () {
    // currentDate = new Date();
    // document.getElementById("currentYear").textContent = currentDate.getFullYear();
    screenshotPreview();

    //Don't show title tooltip on hover but put it back.
    $(".popup-gallery a").hover(
        function() {
            var title = $(this).attr("title");
            $(this).attr("tmp_title", title);
            $(this).attr("title","");
        }, function() {
            var title = $(this).attr("tmp_title");
            $(this).attr("title", title);
        });
});

//Language Toggle
let on = true;
let langToggle = document.querySelector(".language-toggle");
langToggle.addEventListener("click", () =>
{
    let langDropDown = document.querySelector(".language-dropdown");
    if (on) {
        langDropDown.style["display"] = "block";
        $(langDropDown).animate({ width: '350px', opacity: '100%' }, "fast");
        on = false;
    }
    else {
        $(langDropDown).animate({ width: '0px', opacity: '100%' }, "fast");
        setTimeout(function () {
            langDropDown.style["display"] = "none";
        }, 150);
        on = true;
    }
});


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
