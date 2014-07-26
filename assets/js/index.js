define(function(require) {
    require("jquery");
    require("bootstrap");
    require("headroom");
    require("velocity");

    $(function() {
        var headroom = new Headroom($(".navbar-bvod")[0]);
        headroom.init();
        var $slider = $(".banner .carousel");
        $slider.find(".active .ad-title, .active .ad-desc").show();

        var $prevTitle;
        var $prevDesc;

        $slider.carousel({
            interval: false
        }).on('slide.bs.carousel', function() {
            $prevTitle = $slider.find(".active .ad-title");
            $prevDesc = $slider.find(".active .ad-desc");
        }).on('slid.bs.carousel', function() {
            $prevTitle.hide();
            $prevDesc.hide();
            var $title = $("slider").find(".active .ad-title");
            var $desc = $("slider").find(".active .ad-desc");
            $title.velocity('fadeIn', {
                duration: 500,
                complete: function() {
                    $desc.velocity('fadeIn', {
                        duration: 500
                    });
                }
            });
        });
    });
});