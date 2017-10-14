//OpenWeatherApi call format: http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=
var apiKey = "d2090753718eb350da283fff5bec2a02";
$(document).ready(function() {
  //ipinfo API gets current location over HTTP -- Geolocation from navigator only available over HTTPS protocol
  $.getJSON('http://ipinfo.io/geo', function(data) {
    //Instead of using the city property, I'll be using coords for improved accuracy with OpenWeatherAPI
    var location = data.loc;
    var locationArr = location.split(",");
    var lat = locationArr[0];
    var lon = locationArr[1];
    $.getJSON("https://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lon + "&appid=" + apiKey, function(data) {
      var temp = data.main.temp;
      var city = data.name;
      var country = data.sys.country;
      var wIconText = data.weather[0].main;
      var wIcon = data.weather[0].icon;
      var celsiusTemp = temp - 273.15;
      var fahrenheitTemp = (temp - 273.15) * 1.8000 + 32.00;
      $("#icon").html(wIconText + '<img src="https://openweathermap.org/img/w/' + wIcon + '.png"alt="icon"> </img>');
      $("#temp").html(celsiusTemp);
      $("#city").html(city + ", " + country);
      if (wIconText == "Thunderstorm" || wIconText == "Extreme") {
        $("#container").addClass("thunderstorm");
      } else if (wIconText == "Rain" || wIconText == "Drizzle") {
        $("#container").addClass("rain");
      } else if (wIconText == "Snow") {
        $("#container").addClass("snow");
      } else if (wIconText == "Clear") {
        $("#container").addClass("clear");
      } else if (wIconText == "Clouds") {
        $("#container").addClass("clouds");
      } else if (wIconText == "Atmosphere") {
        $("#container").addClass("mist");
      }
      console.log(wIconText);

    });

  });
  $("#tempSwitch").on("click", function() {
    var temp = $("#temp").html();
    if ($("#tempSwitch").html() == "Fahrenheit") {
      temp = Math.round(temp * 1.8000 + 32.00);
      $("#temp").html(temp);
      $("#tempSwitch").html("Celsius");
      $("#degree").html("°F");
    } else {
      temp = Math.round((temp - 32.00) / 1.8000);
      $("#temp").html(temp);
      $("#tempSwitch").html("Fahrenheit");
      $("#degree").html("°C");
    }
  });
});