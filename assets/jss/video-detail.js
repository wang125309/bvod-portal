define(function(require) {
    require("jquery");
    require("bootstrap");
    require("headroom");
    require("jwplayer");
    require("jrumble");

    $(function() {
        var headroom = new Headroom($(".navbar-bvod")[0]);
        headroom.init();
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
                sources: [
                    {file:$player.data("high"),label:"720p HD"},
                    {file:$player.data("mid"),label:"360p SD","default":"true"}
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
    });
});
