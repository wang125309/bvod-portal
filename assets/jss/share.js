define(function(require) {
	require("jquery");
	var ZeroClipboard=require("zeroclipboard");
    $(function() {
    	var copyToClipBoard = function(){ 
			var client = new ZeroClipboard( document.getElementById("btn-share"));
			client.on("ready",function(readyEvent){
				client.on("aftercopy",function(event){
					alert("代码已经复制到剪贴板");
				});
			});
		}
        var share_url_get = function() {
            var share_url_before = "<iframe height=498 width=510 src='";
            var share_url = $(".share-btn").data("url");
            var share_url_after = "' frameboard=0 allowfullscreen></iframe>";
            share_url = share_url_before + share_url + share_url_after;
            return share_url;
        }
        var share_menu = function() {
            var back_div = $('<div class="share_menu" style="display:none;"><div class="coner">◆</div><div class="coner_border">◆</div></div>');
            back_div.appendTo($(".share-btn").parent());
           	$('<div class="jiathis_style"><a class="jiathis_button_qzone">QQ空间</a><a class="jiathis_button_cqq">QQ好友</a><a class="jiathis_button_tqq">腾讯微博</a><a class="jiathis_button_tsina">新浪微博</a><a class="jiathis_button_weixin">微信</a><a class="jiathis_button_renren">人人网</a></div>').appendTo(back_div);
        	var common_url = $('<div class="common_url"></div>');
        	common_url.appendTo(back_div);
        	var title = $('<h5>把视频贴到BLOG或BBS</h5><button id="btn-share" class="btn btn-share btn-sm btn-primary">复制分享代码</button><input type="text" class="form-control share_code input-sm" />');
        	title.appendTo(common_url);
        	$(".share_code").attr({"value":share_url_get()});
			$(".btn-share").attr({
				"data-clipboard-text":share_url_get()
			});
			return back_div;
        }
        
		var jiathis_config={
			summary:"",
			shortUrl:false,
			hideMore:false
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
        		back_div.slideUp();
        	else
        		back_div.slideDown();
        }
        $(".btn-share").click(function(){
        	copyToClipBoard();
        });
        $(".share-btn").click(function(){
        	show_menu();
        });
        $(".icon-share").click(function(){
        	show_menu();
        });
    });
});
