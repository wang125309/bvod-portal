define(function(require) {
    require("jquery");
    require("bootstrap");
    require("headroom");
    require("jwplayer");

    $(function() {
        var headroom = new Headroom($(".navbar-bvod")[0]);
        headroom.init();
        var $slider = $(".banner .carousel");
        $slider.find(".active .ad-title, .active .ad-desc").show();

        $player = $("#player-wrapper");
        jwplayer("player-wrapper").setup({
            flashplayer: 'static/js/jwplayer.flash.swf',
            file: $player.data("url"),
            image: $player.data("image"),
            width: 1280,
            height: 720
        });
    });
});