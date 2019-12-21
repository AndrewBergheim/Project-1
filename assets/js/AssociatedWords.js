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
            
            text1.text("Related Words: " )
            text1.css("font-weight","Bold");
            
            for (i=0;i<10;i++) {
                
                let here = $("<button>")
                here.text(response[i].word)
                
                here.attr("class","control")
                here.attr("clickword", true);
                text1.append(here); 
                
                
            }
            $("#related-words").append(text1)
        });
    })