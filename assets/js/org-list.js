$(function(){
    $('li.item.row').click(function(){
        location.href = $(this).find('.col-xs-12').children().find('a').attr('href');   
    });
            $(".footer").stickyFooter();
});
