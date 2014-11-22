define(function(require) {
    var store=require("store");
    require("jquery");
    require("bootstrap");
    require("jwplayer");
    require("headroom");
	require("jrumble");
    require("jwplayhtml5");
	require("share");
	var $slider = $(".banner .carousel");
    require("search-history");
    $(function() {
        var $slider = $(".banner .carousel");
        $slider.find(".active .ad-title, .active .ad-desc").show();
            $player = $("#player");
            jwplayer("player").setup({
                image: $player.data("image"),
                width: 1124,
                height: 510,
                html5player: "../portal_static/js/jwplayer.html5.js",
                flashplayer: "../portal_static/js/jwplayer.flash.swf",
				sources:[{
					file: $player.data("live"),label:"live","defalut":"true"
				}]
			});
		jwplayer().play();
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
		var id = $("#id").val(); 
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
		
    });
});
