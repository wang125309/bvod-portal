define("search-history",function(require){
	require("jquery");
	var Search_menu = function(json) {
		var back = $('<div class="search_history"></div>').appendTo($(".history-query").parent());
		var back_ul = $('<ul class="back_ul"></ul>').appendTo(back);
		for(i in json) {
			var li = $('<li>'+json[i]+'</li>').appendTo(back_ul);
		}
		var k = parseInt(6*Math.random());
		
		$(".history-query").attr({"placeholder":"大家正在热搜："+json[k]});
		return back;
	}
	var event_listener = function(back) {
		$(".history-query").click(function(){
			$(this).parent().attr({
				"tabindex":"1"
			});
			$(this).parent().focus();
			back.css({
				"display":"block"
			});
		});
		$(".back_ul li").on("click",function(){
			$(".history-query").attr({
				"value":$(this).text()
			});
			setTimeout(function(){
				$("#search").submit();
			},300);

		});
		$(".form-group").on("keydown",function(){
			$(".history-query").focus();
		});
		$(".form-group").on("blur",function(){
			back.css({
				"display":"none"
			});
		});
	}
	$(function(){
		$.get("/api/media?hot_search=1",function(json){
			back = Search_menu(json);
			event_listener(back);	
		},"json");
		$(".search_tools").on("click",function(){
			$("#search").submit();	
		});	
	});
});
