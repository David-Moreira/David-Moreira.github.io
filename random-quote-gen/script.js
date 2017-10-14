$(document).ready(function() {

  //Initialize a 2D Array with various quotes to replace on the HTML.
  var quotesArr = [
    ['"Um leão ferido, ainda tem vontade de rugir!"', "Mario Quintana", "http://kathleenannthompson.com/wp-content/uploads/2014/04/lionroar.jpg"],
    ['"Matasu cenamu! - Vais ao cinema!?"', "Sérgio and friends", "https://pplware.sapo.pt/wp-content/uploads/2016/03/cinema4dx-720x436.jpg"],
    ['"The sea holds fearsome creatures!"', "Nami", "http://scontent.cdninstagram.com/t51.2885-15/s480x480/e35/c0.100.800.800/12277573_927984507272057_611967211_n.jpg?ig_cache_key=MTEyOTQyNTg5MzE5NTU4NDEyMw%3D%3D.2.c"],
    ['"Sabes que mais? Arroz com pardais!"', "Provérbio Português", "https://4.bp.blogspot.com/-ZH9E-yGHkJA/T2pll3Q4bWI/AAAAAAAAAcQ/bBugHz-s3dM/s1600/arrozcompardais.jpg"],
    ['"Cavalinho na feira a comer..."', "Esqueci-me da música", "https://2.bp.blogspot.com/-eg4TfB9Z4q0/UubLwvfo_lI/AAAAAAAABsI/Az_-61mKCyM/s1600/107511531.jpg"]
  ];
  var random = 0;
  var storeValue = 0;

  //Function to obtain a random value -- From FreeCodeCamp 
  function randomRange(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  //Functions for setTimeout delay use
  function imageSwitch() {
    $("#image").attr("src", quotesArr[random][2]);
  }

  function textSwitch() {
    $("#quote").html(quotesArr[random][0] + '<footer id="footer" class="text-left">' + quotesArr[random][1] + "</footer>");
  }

  //click
  $("#newQuote").on("click", function() {
    while (random == storeValue) {
      random = randomRange(0, quotesArr.length - 1);
    }
    //Disable button so the user doesn't double click or even mass clicks
    $("#newQuote").attr("disabled", "disabled");
    setTimeout(function() {
      $("#newQuote").removeAttr("disabled");
    }, 2000);

    $("#quote").fadeOut(1000).delay().fadeIn(1000);
    setTimeout(textSwitch, 1000);
    $("#image").slideUp(1000).delay().slideDown(1000);
    setTimeout(imageSwitch, 1000);
    $("#twitterShare").attr("href", "https://twitter.com/intent/tweet?text=" + quotesArr[random][0] + " --- " + quotesArr[random][1]);
    storeValue = random
  });

});