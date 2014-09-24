 define(function(require) {
    require("jquery");
    require("bootstrap");
    require("headroom");
    require("velocity");
	require("search-history");
	require("sticky");
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
        }).on('slide.bs.carousel', function() {
            $prevTitle.hide();
            $prevDesc.hide();
            var $title = $slider.find(".active .ad-title");
            var $desc = $slider.find(".active .ad-desc");
            $title.velocity('fadeIn', {
                duration: 500,
                complete: function() {
                    $desc.velocity('fadeIn', {
                        duration: 500
                    });
                }
            });
        });
		$(".btn-play").on("click",function(e){
			$(this).css("display","block");
			var value = $(this).css("background-size");
			$(this).animate({"background-size":parseFloat(value)*1.2,},200,function(){
				$(this).fadeOut();	
			});	
		});
        $(".footer").stickyFooter();
    });
});
