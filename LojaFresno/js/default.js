jQuery(function ()
{
    //Aparecer Barra Buscar Mobile
    jQuery(window).scroll(function(){

        if (jQuery(window).scrollTop() > 122) {
            jQuery('.searchmobile').fadeOut('fast');
        }else{
            jQuery('.searchmobile').fadeIn('fast');
        }
    });

});