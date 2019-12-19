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
                
                $("#AssocWords").append("Related Words: ")
                
                for (i=0;i<10;i++) {
                    console.log(response[i].word)
                    var text1 = $("<button>")
                    text1.attr("class","clickword")
                    text1.text(response[i].word)
                    $("#AssocWords").append(text1)
                    
                }
            });
            })
    
            
        