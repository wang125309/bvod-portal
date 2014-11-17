define(function(require){
	require("jquery");
    require("bootstrap");
    require("headroom");
    require("affix");
    require("sticky");
    require("search-history");
    require("jquery");
	$(function(){
	    var headroom = new Headroom($(".navbar-bvod")[0]);
        headroom.init();
		$(".live-date").each(function(){
			$(this).html($(this).text().split(" ")[0]);
		});
		$(".live-detail-time > div > span").each(function(){
			$(this).html($(this).text().split(" ")[1]);
		});
	});	
});
