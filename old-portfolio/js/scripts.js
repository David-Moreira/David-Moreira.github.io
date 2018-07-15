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




this.addEventListener("DOMContentLoaded", function () {
    currentDate = new Date();
    document.getElementById("currentYear").textContent = currentDate.getFullYear();

    //Smooth Scrolling
    document.querySelectorAll('a[href^="#"].scroll-down').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            console.log(this);
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth',
                block: "center",
                inline: "nearest"
            });
        });
    });
    
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

    //Make active navbar buttons on Click
    let navBtns = document.querySelectorAll("#centerNav a");
    navBtns.forEach(btn => 
        { 
            btn.addEventListener("click", function (e) 
            {
                navBtns.forEach(btnClass =>
                {
                    btnClass.classList.remove("active");
                });
                this.classList.add("active");
            });
        });

    //Scroll
    this.addEventListener("scroll", () =>
    {
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

    //Match Height on row columns
    $(function() {
        $('.panel').matchHeight();
        $('.portfolio-text').matchHeight();
    });


    //Microsoft Certified Animation
window.addEventListener('load',() => {
    const canvasEl = document.querySelector('canvas')
    const ctx = canvasEl.getContext('2d')
    const brushWidth = 100
    const fontSize = '30px'
    const speed = 10
    const txt = 'Microsoft Certified!'
    
    let brushOffset = brushWidth
    let x = 10
    let i = 0
    
    // Font settings
    ctx.font = `${fontSize} Roboto`
    
    ctx.lineWidth = 2
    
    ctx.fillStyle = '#212121'
    
    const draw = () => {
      ctx.clearRect(x, 100, 400, 150);
      ctx.setLineDash([brushWidth, brushOffset, brushOffset - speed]);
      brushOffset -= speed;
      ctx.strokeText(txt[i], x, 50);
    
      if (brushOffset > 0) {
        requestAnimationFrame(draw);
      } else {
        brushOffset = brushWidth
        x += ctx.measureText(txt[i++]).width + ctx.lineWidth * Math.random();
  
        if (i < txt.length) {
          requestAnimationFrame(draw);
        }
      }
    } 
    draw();
  });
  
});






