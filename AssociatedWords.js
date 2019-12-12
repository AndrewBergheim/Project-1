            $("#search-button").on("click",function() {
            var search = $("#searched-word").val()
            var settings = {
            "async": true,
            "crossDomain": true,
            "url": "https://api.datamuse.com/words?rel_trg=" + search,
            "method": "GET",
            
            }
            $.ajax(settings).then(function (response) {
                
                for (i=0;i<10;i++) {
                    var text1 = $("<p>")
                    text1.text(response[i].word)
                    $("#AssocWords").append(text1)
                    
                }
            });
            })
    
            
        