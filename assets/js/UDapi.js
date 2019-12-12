
$("#search-button").on("click",function() {
    //get search term
    let searchTerm = $("#searched-word").val();
    let queryURL = "http://api.urbandictionary.com/v0/define?term=" + searchTerm;

    $.ajax({
        url:queryURL,
        method: "GET"
    }).then(function(response){
            let section = $("<div>");
            // defining the tags for each section
            let wordTag = $("<h3>").attr("id", "word")
            let definitionTag = $("<h5>").attr("id", "definition")
            let exampleTag = $("<h6>").attr("id", "example")
            

            // variables for tag text
            let wordRaw = response[0].word;
            let definitionRaw = response[0].definition;
            let exampleRaw = response[0].example;
           
            //remove invalid characters from each string

            let wordArray = wordRaw.split()
            for (let i = wordArray.length-1; i > -1; i--){
                if (wordArray[i] == "[" || wordArray[i] == "]"){
                    wordArray.splice(i)
                }
            }
            let word = wordArray.toString()

            let definitionArray = definitionRaw.split()
            for (let i = definitionArray.length-1; i > -1; i--){
                if (definitionArray[i] == "[" || definitionArray[i] == "]"){
                    definitionArray.splice(i)
                }
            }

            definition = definitionArray.toString()

            let exampleArray = exampleRaw.split()
            for (let i = exampleArray.length-1; i > -1; i--){
                if (exampleArray[i] == "[" || exampleArray[i] == "]"){
                    exampleArray.splice(i)
                }
            }

            let example = exampleArray.toString()



            //adding the text to the tags
            wordTag.text(word)
            definitionTag.text(definition)
            exampleTag.text(example)

            //adding tags to section
            section.append(wordTag, definitionTag, exampleTag)
            // empty div content (previous search results) before adding new content
            $("#ud-definition").empty();
            $("#ud-definition").append(section);
    })
});