define(function(require) {
    var store=require("store");
    require("jquery");
    require("bootstrap");
    require("jwplayer");
    require("headroom");
	require("jrumble");
    require("jwplayhtml5");
	require("share_live");
	var $slider = $(".banner .carousel");
    require("search-history");
    $(function() {
        var $slider = $(".banner .carousel");
        $slider.find(".active .ad-title, .active .ad-desc").show();
	var id = $("#id").val(); 
 	var random_proxy = function(id) {
		res_ip = "" ;
		$.get("/api/live?id="+id+"&proxy=1",function(data){
			var Max = 1000000000;
			for(i in data.ip) {
				ip = data.ip[i].split(",")[0]
				views = data.ip[i].split(",")[1]
				limit = data.ip[i].split(",")[2]
				if(views < Max && views < limit) {
					Max = views;
					res_ip = ip;
				} 
			}
			console.log(Max);
			var ip_header = "rtmp://" + res_ip +"/" ;
			var address = $("#flow_address").data("live").split("/");
			for (var i=3 ;i < address.length ;i++ ) {
				ip_header += address[i] + "/";
			}
			ip_header = ip_header.substr(0,ip_header.length-1);
			do_some_func(ip_header);
		});
	}
	random_proxy(id);
	var do_some_func = function(ip_header) {
        $player = $("#player");
	console.log($("#flow_address").data("live"));
        jwplayer("player").setup({
			image: $player.data("image"),
			width: 1124,
            		height: 510,
            		autostart:true,
			stretching:"exactfit",
			html5player: "../portal_static/js/jwplayer.html5.js",
            flashplayer: "../portal_static/js/jwplayer.flash.swf",
			logo: {
				file: "../portal_static/img/water.png",
			},
			sources:[{
				file: ip_header,label:"live","defalut":"true"
			}]
		});
		$(".btn-lik").bind("click",function(){
			like();
		});
		$(".icon-like").bind("click",function(){
			like();
		});
		$(".btn-dislike").bind("click",function(){
			dislike();	
		});
		$(".icon-dislike").bind("click",function(){
			dislike();
		});
		var hasId = function(id,str) {
			if(!str) {
				return false;
			}

			var arr = str.split(",");
			for(i in arr) {
				if(arr[i]==id) {
					return true;
				}
			}
			return false;
		}

		if(hasId(id,store.get('like_live'))) {
			$(".icon-like").addClass("icon-like-select");
			$(".btn-lik").css({
				"cursor":"initial"
			});
			$(".btn-dislike").css({
				"cursor":"initial"
			});
			$(".icon-dislike").addClass("icon-dislike-enable");
			$(".icon-dislike").removeClass("icon-dislike");
		}
		if(hasId(id,store.get('dislike_live'))) {
			$(".icon-dislike").addClass("icon-dislike-select");
			$(".btn-dislike").css({
				"cursor":"initial"
			});
			$(".btn-lik").css({
				"cursor":"initial"
			});
			$(".icon-like").addClass("icon-like-enable");
			$(".icon-like").removeClass("icon-like");
		}
		var like = function() {
			var like_statu = hasId(id,store.get("like_live"));
			var dislike_statu = hasId(id,store.get("dislike_live"));
		
			if(!like_statu&&!dislike_statu) {
				store.set('like_live',store.get('like_live')+","+id);
				$.get("/api/live?likes=1&id="+id,function(){
					$(".links").html(String(parseInt($(".links").text())+1));
					$(".icon-like").addClass("icon-like-select");
					$(".icon-dislike").addClass("icon-dislike-enable");
					$(".icon-dislike").removeClass("icon-dislike");
	
					$(".btn-dislike").css({
						"cursor":"initial"
					});	
				});
			}
		}
		var dislike = function() {
			var like_statu = hasId(id,store.get("like_live"));
			var dislike_statu = hasId(id,store.get("dislike_live"));
		
			if(!like_statu&&!dislike_statu) {
				store.set('dislike_live',store.get('dislike_live')+","+id);
				$.get("/api/live?dislikes=1&id="+id,function(){
					$(".dislikes").html(String(parseInt($(".dislikes").text())+1));
					$(".icon-dislike").addClass("icon-dislike-select");
					$(".icon-like").addClass("icon-like-enable");
					$(".icon-like").removeClass("icon-like");
	
					$(".btn-lik").css({
						"cursor":"initial"
					});
				});
			}
		}
	}
		
    });
});
