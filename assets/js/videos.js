$(function(){
    $('.list-group > a').click(function(){
        if($(this).attr('id') == $(".list-group > .active").attr('id')){
            if($(".list-group > .active+div").hasClass('in')){
                $(".list-group > .active+div").removeClass('active in');
                $(this).removeClass('active dropup');
            }else{
                $(".list-group > .active+div").addClass('in');
                $(this).addClass('active dropup');
            }
        }else{
            $(".list-group > .active + div").removeClass('in');
            $(".list-group .active").removeClass('active dropup');
            $(this).addClass("active dropup");
            $(".list-group > .active+div").addClass('in');
        }
    });
    $(".footer").stickyFooter();
    if($(".video-empty")[0]){    
        var height = $('.footer')[0].offsetTop - $(".detail")[0].offsetTop - 268;
        $(".video-empty")[0].style.height = height + 'px';
    }
    if($(".page")[0]){
        var marginTemp = $(".footer")[0].offsetTop - $(".page")[0].offsetTop -67;
        $(".page")[0].style.marginTop = marginTemp + 'px';
    }
});
