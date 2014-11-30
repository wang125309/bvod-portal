define(function(require){
	require("jquery");
    require("bootstrap");
    require("headroom");
    require("affix");
    require("sticky");
    require("search-history");
	$(function(){
	    var headroom = new Headroom($(".navbar-bvod")[0]);
		var time_cmp = function(show_time,live_date) {
			var today = new Date();
			var todays_time = today.toTimeString().split(" ")[0];
			var today_day = today.getMonth()+1;
			var today_date = today.getDate();
			var today_year = today.getFullYear();
			var todays = today_year+"."+today_day+"."+today_date;
			var rel_time = "";
			rel_time = show_time;
			rel_time += ":00";
			console.log(todays_time);
			console.log(rel_time);
			console.log(todays);
			console.log(live_date);
			if (todays > live_date ) {
				return true;
			}
			else if(todays == live_date && todays_time > rel_time) {
				return true;
			}
			return false;
		}    
		headroom.init();
		$(".live-date").each(function(){
			$(this).html($(this).text().split(" ")[0]);
		});
	
		$(".live-date-sub").each(function(){
			$(this).html($(this).text().split(" ")[0]);
		});
		$(".live-detail-time > div .detail-date").each(function(){
			$(this).html($(this).text().split(" ")[0].split(".")[1]+"."+$(this).text().split(" ")[0].split(".")[2]);
		});
		$(".live-detail-time > div .detail-desc").each(function(){
			$(this).html($(this).text().split(" ")[1]);
		});
		$(".live-detail-desc-main").each(function(){
			var str = $(this).text();
			if(str.length > 44 ) {
				str = str.substr(0,44);
				str += "...";
			}

			$(this).html(str);
		});
		$(".live-detail-enter > div").each(function(){
			var obj = $(this);
			$.get("/api/live?id="+$(this).parent().data("id")+"&getViewCounting=1",function(data){
				obj.html("<span class='views_num'>"+data.total_view+"人&nbsp;/&nbsp;"+data.total_limit+"人</span>"+obj.html());				
			});
		});
				$(".live-title").each(function(){
			var show_time = $(this).next(".live-detail").find(".live-detail-time > div  .start-time").text();	
			var live_date = $(this).find(".live-date-sub").first().text();
			if(!time_cmp(show_time,live_date)) {
				$(this).next(".live-detail").find(".btn-primary").each(function(){
					$(this).addClass("disabled");
					$(this).removeClass("btn-primary");
					$(this).addClass("btn-default");
					$(this).css({"background-color":"rgb(197,197,197)","color":"#fff"});
					$(this).find(".link-text").text("将要开始");
					$(this).find("img").attr({
						"src":"/portal_static/img/play_icon_disable.png"
					});

				});
			}

        $(".footer").stickyFooter();
		});
	});	
});
