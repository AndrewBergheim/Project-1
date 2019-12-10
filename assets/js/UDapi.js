
$("#search-word").on("click",function() {
    //get search term
    searchTerm = $("#").val()
    queryURL = "http://api.urbandictionary.com/v0/define?term=" + searchTerm;

    $.ajax({
        url:queryURL,
        method: "GET"
    }).then(function(response){
            section = $("<div>");
            // defining the tags for each section
            wordTag = $("<h3>").attr("id", "word")
            definitionTag = $("<h5>").attr("id", "definition")
            exampleTag = $("<h6>").attr("id", "example")
            

            // variables for tag text
            word = response[0].word;
            definition = response[0].definition;
            example = response[0].example;
           
            //adding the text to the tags
            wordTag.text(word)
            definitionTag.text(definition)
            exampleTag.text(example)

            //adding tags to section
            section.append(wordTag, definitionTag, exampleTag)
            // empty div content (previous search results) before adding new content
            $("#ud-content").empty();
            $("#ud-content").append(section);
    })
});