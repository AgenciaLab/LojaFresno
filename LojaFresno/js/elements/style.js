var lastScrollTop = 0;
            
jQuery(window).scroll(function(event){
    var st = jQuery(this).scrollTop();
    if (st > lastScrollTop){
        jQuery("#produtoAreaPesquisa").fadeOut(300);
    } else {
        jQuery("#produtoAreaPesquisa").fadeIn(300);
    }
    lastScrollTop = st;
});
            
jQuery('#menu-toggle-mob').click(function () {

    var p = jQuery(".menu-mobile");
    if (p.position().left < 0) {
        jQuery(".menu-mobile").animate({left: '280px'});
    } else {
        jQuery(".menu-mobile").animate({left: '-100%'});
    }
});

jQuery(document).ready(function() {
    jQuery("#owl-demo").owlCarousel({
      singleItem:true,
      loop:true,
      autoPlay : 5000,
      stopOnHover : false
    });
  });