
$("#search-button").on("click",function() {
    //get search term
    let searchTerm = $("#searched-word").val();
    let queryURL = "http://api.urbandictionary.com/v0/define?term=" + searchTerm;

    $.ajax({
        url:queryURL,
        method: "GET"
    }).then(function(response){
        console.log(response)
            let section = $("<div>");
            // defining the tags for each section
            let wordTag = $("<h3>").attr("class", "word")
            let definitionTag = $("<h5>").attr("class", "definition")
            let exampleTag = $("<h6>").attr("class", "example")
            

            // variables for tag text
            let wordRaw = response.list[0].word;
            console.log(wordRaw)
            let definitionRaw = response.list[0].definition;
            let exampleRaw = response.list[0].example;
           
            //remove invalid characters from each string
            let word = wordRaw.replace("[","")
            let definition = definitionRaw.replace("[","")
            let example = exampleRaw.replace("[","")

            for (let i = 0; i<wordRaw.length; i++){
                word = word.replace("]","")
                word = word.replace("[","")
            }

            for (let i = 0; i<definitionRaw.length; i++){
                definition = definition.replace("]", "")
                definition = definition.replace("[", "")
            }
            
            for (let i = 0; i<exampleRaw.length;i++){
                example = example.replace("]", "")
                example = example.replace("[", "")
            }



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