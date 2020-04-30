$(document).ready(function () {
  $("#btnSubmit").on("click", function (e) {
    e.preventDefault();
    var api_key = $("#api_key").val();
    var textInput = $("#textInput").val();
    $("#textInput").val("");
    var limit = $("#limit").val();
    $("#limit").val("");
    $("main").html("");

    $.ajax({
      type: "GET",
      url: `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&limit=${limit}&q=${textInput}`,
      dataType: "json",
    }).then(function (response) {
      console.log(response);
      // var randNum = Math.floor(Math.random() * response.data.length);

      for (var i = 0; i < response.data.length; i++) {
        var still = response.data[i].images.original_still.url;
        var gif = response.data[i].images.original.url;
        $("main").prepend(
          `<img class="gif" data-still=${still} data-gif=${gif} src=${still}></img>`
        );
      }
    });
  });
});

$(document).on("click", ".gif", function () {
  // console.log($(this).attr("src"));
  if ($(this).attr("src") === $(this).attr("data-still")) {
    $(this).attr("src", $(this).attr("data-gif"));
  } else {
    $(this).attr("src", $(this).attr("data-still"));
  }
});

// $(document).ready(function () {
//   $.ajax({
//     type: "GET",
//     url: `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&limit=1&q=${textInput}`,
//     dataType: "json",
//   }).then(function (response) {
//     var still = response.data[i].images.original_still.url;
//     var gif = response.data[i].images.original.url;
//     $("body").prepend(
//       `<img class="gif" data-still=${still} data-gif=${gif} src=${still}></img>`
//     );
//   });
// });
