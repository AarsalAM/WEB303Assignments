// WEB303 Assignment 3
// Aarsal Masoodi

$(document).ready(function() {


   var getJSONRequest = $.getJSON("team.json").done(function (data) {   //I obtain the data from the JSOn file using the .getJSON method.
        console.table(data);
        
        $.each(data.teammembers, function (key, val) {                  //using a for each loop, I change the data in each of the #team classes, from 0 to 4. 
            $(`#team${key}`).html(
                `<div class="name"><h3>${val.name}</h3></div>
                 <div class="title"><h4>${val.title}</h4></div>
                 <div class="bio"><p>${val.bio}</p></div>`
            );

        });
    }); 


    var ajaxRequest = $.ajax({                      //this time I use the .ajax method to do so, using the "get" data retrieval type.
        type: "get",

        url: "team.json",

        beforeSend: function() {                    //before the main function of the data, I add a "Loading..." message, in case the data takes a while to load.
            $(`#team0`).text("Loading...");
        },
    
        timeout: 500,                               //the request itself will timeout in 5 seconds (500 milliseconds)

        error: function (jqXhr, textStatus, errorMessage) { // error callback 
            $('p').append('Error: ' + errorMessage);
        },

        success: function (data) {
            $.each(data.teammembers, function (key, val) {
                $(`#team${key}`).html(
                    `<div class="name"><h3>${val.name}</h3></div>
                     <div class="title"><h4>${val.title}</h4></div>
                     <div class="bio"><p>${val.bio}</p></div>`
                );
            });
        }

        
    })
});
     
