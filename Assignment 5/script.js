/*
    Assignment 5
    Aarsal Masoodi
*/

$(document).ready(function(){
    class ContentCard {
        id;
        title;
        description;
        categoryType;

        constructor(id, title, description, categoryType) {
            this.id = id;
            this.title = title;
            this.description = description;
            this.categoryType = categoryType;
        }

        updateContent(title, description, categoryType) {
            if ((this.title != null) || (this.description != null) || (this.categoryType != null)) {
                console.log("The title is not null");
                this.title = title;
                this.description = description;
                this.categoryType = categoryType;
            }
        }
        
        toString() {
            return "<h1>the title is: " + this.title + "</h1>";
        }
    }

    let movie1 = new ContentCard(1, "Distict 9", "fun movie", "scifi");
    let movstring = `${movie1}`;

    $("#content-list").append(movstring);
    
    console.log(movie1);
    movie1.updateContent("","","fantasy");
    console.log(movie1);

});


