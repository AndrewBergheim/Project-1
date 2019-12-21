$(".control").on("click", function () {
    console.log('test');
        let search = $("#searched-word").val();
        $.ajax({
            "async": true,
            "crossDomain": true,
            "url": "https://api.datamuse.com/words?rel_trg=" + search,
            "method": "GET",
        }).then(function (response) {
            $("#related-words").empty()
            let text1 = $("<p>")
            
            text1.css("font-weight","Bold");
            let here = $("<p>")
            for (i=0;i<10;i++) {
                
                
                if (i < 9) {
                here.append(response[i].word + ", ")
                } else {
                here.append(response[i].word) 
                }
                
                here.attr("class","clickword")
                
                here.css("text-align","center")
                text1.append(here); 
                
                
            }
            $("#related-words").append(text1)
        });
    })