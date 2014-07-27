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

        $player = $("#player");
        jwplayer("player").setup({
            image: $player.data("image"),
            width: 1124,
            height: 510,
            sources: [
                {file:$player.data("high"),label:"720p HD"},
                {file:$player.data("mid"),label:"360p SD",default:"true"}
            ]
        });
    });
});