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
    //var height = window.screen.availHeight - 372;
    //document.getElementById('con').style.minHeight = height+'px';
            $(".footer").stickyFooter();
});
