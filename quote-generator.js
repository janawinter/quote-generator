


$(document).ready(function(){
$('.button').click(function() {
  console.log ("nfjo");
  $.ajax({
    url: "https://got-quotes.herokuapp.com/quotes",
    method: "GET",
    data: 'json',
    success : function (data) {
      console.log (data)
      display.innerHTML = (data["quote"] + " - " + data["character"]);
    }
  })
});
});