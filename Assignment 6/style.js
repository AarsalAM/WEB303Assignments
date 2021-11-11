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


    $(".tab-list").each(function() {
        var $this = $(this);
        var $tab = $this.find("li.active");
        var $link = $tab.find("a");
        var $panel = $($link.attr("href"));

        $this.on('click', '.tab-control', function(e) {
            e.preventDefault();
            var $link = $(this);
            var id = this.hash;

            if (id && !$link.is('.active')) {
                $panel.removeClass('active');
                $tab.removeClass('active');
                $panel = $(id).addClass('active');
                $tab = $link.parent().addClass('active');
            }
        });
    });

});