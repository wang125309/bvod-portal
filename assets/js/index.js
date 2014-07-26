define(function(require) {
    require("jquery");
    require("headroom");

    $(function() {
        var headroom = new Headroom($(".navbar-bvod")[0]);
        headroom.init();
    });
});