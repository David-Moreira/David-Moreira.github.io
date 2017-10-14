

$(document).ready(function() {


    
  $("#reset").on("click", function() {
    $("#content").html("");
    $("#value").val("");
  });
  
  $(document).keypress(function(e) {
    if(e.which == 13) {
          var value = $("#value").val();
    var html = "";
    var count = 0;
    var arrLink = [];
    
    $.getJSON("https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=" + value + "&suggest=1&origin=*", function(data) {
      console.log(data);
      for (i = 0; i < data[data.length - 1].length; i++) {
        for (j = 1; j < data.length; j++) {
          switch (j) {
            case (1):
              html += "</br><div style ='text-align:left' id='caixa" + i + "'> <strong>" + data[j][i] + "</strong>";
              break;
            case (2):
              html += "</br>" + data[j][i] + "</div>";
              break;
            case (3):
              arrLink[i] = data[j][i];
              break;
          }

        }

      }
      $("#content").html(html);
      for (i = 0; i < arrLink.length; i++) {
        $("#caixa" + i).wrap("<a href='" + arrLink[i] + "'> </a>");
      }
    });
  }
    
    
});
  
  $("#search").on("click", function() {
      var value = $("#value").val();
    var html = "";
    var count = 0;
    var arrLink = [];
    
    $.getJSON("https://en.wikipedia.org/w/api.php?action=opensearch&format=json&search=" + value + "&suggest=1&origin=*", function(data) {
      console.log(data);
      for (i = 0; i < data[data.length - 1].length; i++) {
        for (j = 1; j < data.length; j++) {
          switch (j) {
            case (1):
              html += "</br><div style ='text-align:left' id='caixa" + i + "'> <strong>" + data[j][i] + "</strong>";
              break;
            case (2):
              html += "</br>" + data[j][i] + "</div>";
              break;
            case (3):
              arrLink[i] = data[j][i];
              break;
          }

        }

      }
      $("#content").html(html);
      for (i = 0; i < arrLink.length; i++) {
        $("#caixa" + i).wrap("<a href='" + arrLink[i] + "'> </a>");
      }
    });
  
    
    
  });
});