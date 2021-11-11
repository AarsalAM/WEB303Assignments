$(function() {
    $('.accordion').on('click', '.accordion-control', function(e) {
        console.log("Event data", e);
        e.preventDefault();
        console.log("this is ", this);
        $(this)
            .toggleClass('active')
            .next('.accordion-panel')
            .not('animated')
            .slideToggle();
    });

});