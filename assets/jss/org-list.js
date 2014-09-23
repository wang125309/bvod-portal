define(function(require){
    require("jquery");
    require("bootstrap");
    require("headroom");
    require("sticky");
	require("search-history");
    $(function(){
        var headroom = new Headroom($(".navbar-bvod")[0]);
        headroom.init();

        $('li.item.row').click(function(){
            location.href = $(this).find('.col-xs-12').children().find('a').attr('href');  
        });
        $(".footer").stickyFooter();
        if($('.org-empty')[0]){
            var height = $('.footer')[0].offsetTop - $(".organizations")[0].offsetTop;
            $(".org-empty")[0].style.height = height + 'px';
        }
        if($(".page")[0]){
            var marginTemp = $(".footer")[0].offsetTop - $(".page")[0].offsetTop -107;
            $(".page")[0].style.marginTop = marginTemp + 'px';
        }
    });
});
