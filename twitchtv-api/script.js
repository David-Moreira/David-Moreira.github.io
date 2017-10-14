$(document).ready(function() {
  var arrStreamers = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas", "brunofin", "comster404"];
  arrStreamers.sort();
  var div = "<div class='main'>";
  var divClose = "</div>"
  var htmlContent = "";
  var link = "https://www.twitch.tv/";

    arrStreamers.forEach(function(value) {
      $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/' + value + '?callback=?', function(data) {
        if (data.stream == null) {
                  $(".jumbotron").append(div + "<h2><a target='_blank' href='"+ link + value +"'>"+ value + "</a></h2></br>" + "Offline"  + divClose);
        }
        else {                        $(".jumbotron").append(div + "<h2><a target='_blank' href='"+ link + value +"'>"+ value + "</a></h2></br>" + data.stream.game+ "</br>"  + data.stream.viewers + " viewers </br>" + "Online since: " + data.stream.created_at.replace("T", " Time: ")  + divClose);
        }

        

      });

    });
  });
