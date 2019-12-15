$("#search-button").on("click",//div class around button needs to be the event listener 
function normalLookUp () {
  let selectedText= $("#searched-word").val();
$.ajax({
    url: "https://dictionaryapi.com/api/v3/references/collegiate/json/"+selectedText+"?key=e310d331-6efb-4157-b036-443ba5a74da1",
  method: "GET",
})
.then(function (response) {
    $("#mw-area").empty();
    console.log(response);

    let def = response[0].shortdef[0];    
    // let level1= response[0].def[0].sseq[0][1][1].dt[0][1][0].t;
    // console.log(level1); <<< having issues with finding example word uses in this API
    // let level2= JSON.stringify(level1);

    let headWord = $("<h3>").text(selectedText).attr("hidden", true);//selected elements must be hidden
    let wordBody = $("<h3>").text(def).attr("hidden", true);
    // let wordExample = $("<h3>").text(level2).attr("hidden", true);
    $("#mw-area").append(headWord,wordBody);//selected elements then are appended

    headWord.fadeIn(600);//this function reveals the element at an invisible opacity and then adjusts the opacity of the element over the parameter of given time to be visible
    wordBody.fadeIn(2000);
    // wordExample.fadeIn(2400);
});
});