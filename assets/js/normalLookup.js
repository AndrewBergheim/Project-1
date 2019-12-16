$("#search-button").on("click", 
function normalLookUp () {
  let selectedText= $("#searched-word").val();
$.ajax({
    url: "https://dictionaryapi.com/api/v3/references/collegiate/json/"+selectedText+"?key=e310d331-6efb-4157-b036-443ba5a74da1",
  method: "GET",
})
.then(function (response) {
    console.log(response[0].shortdef);
    let def = response[0].shortdef;
    let headWord = $("<h3>").text(selectedText);
    let wordBody = $("<h3>").text(def);
    $("#mw-area").append(headWord,wordBody);
});
});
