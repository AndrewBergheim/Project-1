function DataLookUp () {
$.ajax({
    url: "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY",
  method: "GET",
})
.then(function (response) {

  $(".image").empty();
  console.log(response);
  console.log(response.hdurl);
  let picture = $("<img>").attr("src" , response.hdurl).attr("hidden", true);
  $("#text").text(response.explanation);
  $("#image").append(picture);
  $("#imageDiv").fadeIn(2000);
  $("#text").fadeIn(2000);
});
};
