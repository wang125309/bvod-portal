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
        var password_ok = $('#verify_password_form input[name="video_id"]').data('password');
        var videoid = $('#verify_password_form input[name="video_id"]').data('videoid');
        if (password_ok == 'None' || (sessionStorage.getItem(videoid) && sessionStorage.getItem(videoid) === password_ok)){
            $player = $("#player");
            jwplayer("player").setup({
                image: $player.data("image"),
                width: 1124,
                height: 510,
                html5player: "../portal_static/js/jwplayer.html5.js",
                flashplayer: "../portal_static/js/jwplayer.flash.swf",
                logo : {
			file: "../portal_static/img/water.png",
		},
		autoplay: true,
		sources: [
                    {file:$player.data("high"),label:"720p HD","default":"true"},
                    {file:$player.data("mid"),label:"360p SD"}
                ]
            });
        }else {
            window.document.documentElement.style.overflow = 'hidden';
            $('.verify_password_container').css({display:'block'});
            var submit_event = function(){
                var password = $('#verify_password').val();
                if (password == password_ok){
                    $('.verify_password_container').css({'display':'none'});
                    sessionStorage.setItem(videoid,password_ok);
                    window.document.documentElement.style.overflow = 'auto';
                    $player = $("#player");
                    jwplayer("player").setup({
                        image: $player.data("image"),
                        width: 1124,
                        height: 510,
                        html5player: "../portal_static/js/jwplayer.html5.js",
                        flashplayer: "../portal_static/js/jwplayer.flash.swf",
                       	logo : {
				file: "../portal_static/img/water.png",
			},
			autoplay: true,
 			sources: [
                            {file:$player.data("high"),label:"720p HD"},
                            {file:$player.data("mid"),label:"360p SD","default":"true"}
                        ]
                    });
                }else {
                    $el = $('.verify_password_container .password_box');
                    $el.jrumble({
                        x: 10,
                        y: 0,
                        rotation: 0
                    });
                    $el.trigger('startRumble');
                    setTimeout(function(){
                        $el.trigger('stopRumble');
                        $('.verify_password_container #verify_password').select();
                    },500);
                }
            }

            $('#verify_submit').click(function(){
                submit_event();
            });
    
            function enterEvent(evt){
                if (evt.keyCode == 13){
                    submit_event();
                }
            }
            $('#verify_password').focus(function(){
                if (document.addEventListener) {
                         //如果是Firefox  
                    document.addEventListener("keypress", enterEvent, true);
                } else {
                         //如果是IE
                    document.attachEvent("onkeypress", enterEvent);
                } 
            });
			
        }
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
		var id = $("#verify_password_form input[name='video_id']").val();
		if(hasId(id,store.get('like'))) {
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
		if(hasId(id,store.get('dislike'))) {
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
			var like_statu = hasId(id,store.get("like"));
			var dislike_statu = hasId(id,store.get("dislike"));
		
			if(!like_statu&&!dislike_statu) {
				store.set('like',store.get('like')+","+id);
				$.get("/api/media/get?likes=1&id="+id,function(){
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
			var like_statu = hasId(id,store.get("like"));
			var dislike_statu = hasId(id,store.get("dislike"));
		
			if(!like_statu&&!dislike_statu) {
				store.set('dislike',store.get('dislike')+","+id);
				$.get("/api/media/get?dislikes=1&id="+id,function(){
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
