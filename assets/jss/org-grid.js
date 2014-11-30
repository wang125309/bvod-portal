define(function(require){
    require("jquery");
    require("bootstrap");
    require("sticky");
	require("search-history");
    $(function(){
        $(".footer").stickyFooter();
      $(".comment").each(function(){
			if($(this).text().length <= 1)	{
				$(this).css("display","none");			
			}
		});
  if($('.org-empty')[0]){
            var height = $('.footer')[0].offsetTop - $(".organizations")[0].offsetTop;
            $(".org-empty")[0].style.height = height + 'px'; 
        }
        if($('.page')[0]){
            var marginTemp = $(".footer")[0].offsetTop - $(".page")[0].offsetTop -107;
            $(".page")[0].style.marginTop = marginTemp + 'px';
        }
    });
});
