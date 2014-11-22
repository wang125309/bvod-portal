define(function(require) {
	require("jquery");
	require("pnotify");
    $(function() {
        var share_url_get = function() {
            var share_url_before = "<iframe height=498 width=510 src='";
            var share_url = $(".share-btn").data("url");
            var share_url_after = "' frameboard=0 allowfullscreen></iframe>";
            share_url = share_url_before + share_url + share_url_after;
            return share_url;
        }
        var share_menu = function() {
            var back_div = $('<div class="share_menu" tabindex=2 style="display:none;"><div class="coner">◆</div><div class="coner_border">◆</div></div>');
            back_div.appendTo($(".share-btn").parent());
           	$('<div class="jiathis_style"><a class="jiathis_button_qzone">QQ空间</a><a class="jiathis_button_cqq">QQ好友</a><a class="jiathis_button_tqq">腾讯微博</a><a class="jiathis_button_tsina">新浪微博</a><a class="jiathis_button_weixin">微信</a><a class="jiathis_button_renren">人人网</a></div>').appendTo(back_div);
        	var common_url = $('<div class="common_url"></div>');
        	common_url.appendTo(back_div);
        	$(".share_code").attr({"value":share_url_get()});
			$(".btn-share").attr({
				"data-clipboard-text":share_url_get()
			});	 
			return back_div;
        }
       
  var back_div = share_menu();
        var statu = function() {
        	if(back_div.css("display")=="none")
        		return false;
        	else	
        		return true;
        }
        var show_menu = function() {
        	if(statu()) 
        		back_div.fadeOut();
        	else
        		back_div.fadeIn();
        }
        $(".btn-share").click(function(){
        	copyToClipBoard();
        });
        $(".share-btn").click(function(){
        	show_menu();
		back_div.focus();
        });
        $(".icon-share").click(function(){
        	show_menu();
        });
	$(".share_menu").blur(function(){
		back_div.fadeOut();
	});
    });
});
