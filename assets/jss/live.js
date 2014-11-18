define(function(require){
	require("jquery");
    require("bootstrap");
    require("headroom");
    require("affix");
    require("sticky");
    require("search-history");
	$(function(){
	    var headroom = new Headroom($(".navbar-bvod")[0]);
        headroom.init();
		$(".live-date").each(function(){
			$(this).html($(this).text().split(" ")[0]);
		});
		$(".live-detail-time > div > span").each(function(){
			$(this).html($(this).text().split(" ")[1]);
		});
		$(".live-detail-desc-main").each(function(){
			var str = $(this).text();
			if(str.length > 44 ) {
				str = str.substr(0,44);
			}
			str += "...";
			$(this).html(str);
		});
	});	
});
