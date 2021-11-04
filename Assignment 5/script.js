/*
    Assignment 5
    Aarsal Masoodi
*/

$(document).ready(function(){           
    class ContentCard {         //I create the class then define the properties I use inside of it.
        id;
        title;
        description;
        categoryType;

        constructor(id, title, description, categoryType) {     //I create the constructor to initalize the properties
            this.id = id;
            this.title = title;
            this.description = description;
            this.categoryType = categoryType;
        }

        updateContent(title, description, categoryType) {       //the updateContent function checks if the input is null. If it isn't, then it changes the properties with the new ones given.
            if ((this.title != null) || (this.description != null) || (this.categoryType != null)) {
                console.log("The title is not null");
                this.title = title;
                this.description = description;
                this.categoryType = categoryType;
            }
        }
        
        toString() {                                    //I return html code in a string format. I populate it with the properties of the class
            return "<div id='content-" + this.id + "'>" +
                        "<h4>"+ this.title + "</h4>" +
                        "<p>"+ this.description + "</p>" +
                        "<div>"+ this.categoryType + "</div>" +
                    "</div>";
        }
    }
    
    let movieArray = [      //I create the array that contains 5 objects made from the ContentCard class
        (new ContentCard(1, "Distict 9", "Mockumentary style science fiction.", "Sci-Fi")), 
        (new ContentCard(2, "The Dark Knight", "Dark, gritty movie.", "Action")),
        (new ContentCard(3, "The Hobbit", "Long, fun, adventure movie.", "Fantasy")),
        (new ContentCard(4, "Dune", "Part 1 of a fantastical sci-fi world.", "Sci-Fi")),
        (new ContentCard(5, "Free Guy", "Ryan Renolds being, well, Ryan Renolds in a video game.", "Comedy"))
        
    ]
    let movstring = `${movieArray}`;    //this calls the toString function in the class.

    $("div#content-list").append(movstring);    //I append the toString function into the given div class in the index html page.


    //I add css to add a border and padding to each member of the array.
    $("div#content-1, div#content-2, div#content-3, div#content-4, div#content-5").css({"border":"solid black 2px", "padding":"5px"});  
});


