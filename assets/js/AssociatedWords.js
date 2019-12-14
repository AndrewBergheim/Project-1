$("#search-button").on("click",function() {
        var search = $("#searched-word").val()
        var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.datamuse.com/words?rel_trg=" + search,
        "method": "GET",
        
        }
    
        $.ajax(settings).then(function (response) {
            $("#AssocWords").empty()
            var text1 = $("<p>")
            
            text1.text("Related Words: " )
            text1.css("font-weight","Bold");
            
            for (i=0;i<10;i++) {
                
                var here = $("<button>")
                here.text(response[i].word)
                
                here.attr("class","clickword")
                text1.append(here) 
                
                
            }
            $("#AssocWords").append(text1)
        });
    })