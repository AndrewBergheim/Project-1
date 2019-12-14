$("#search-button").on("click", 
function normalLookUp () {
  let selectedText= $("#searched-word").val();
$.ajax({
    url: "https://dictionaryapi.com/api/v3/references/collegiate/json/"+selectedText+"?key=e310d331-6efb-4157-b036-443ba5a74da1",
  method: "GET",
})
.then(function (response) {
    $("#mw-definition").empty()
    console.log(response[0].shortdef);
    let def = response[0].shortdef;
    let headWord = $("<h3>")
    headWord = $("<h3>").text(selectedText[0].toUpperCase());
    for (i=1;i<selectedText.length;i++) {
    headWord.append(selectedText[i])
    }
    let wordBody = $("<h3>").text(def);
    $("#mw-definition").append(headWord,wordBody);
});
});