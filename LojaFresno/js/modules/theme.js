(function($){
    
    $(document).ready( function(){
        
        var html = $('html');
        
        // triggers to open and close menu mobile
        $('.trigger-menu, .menu-mobile-backdrop').click(function(){
           html.addClass('menu-open'); 
        });
        
        $('.menu-mobile-backdrop,.backdrop-icon').click(function(){
           html.removeClass('menu-open'); 
        });
        
        // cart support class
        if($('.caixa-cupom').length){
            $('.caixa-cupom').parents('tr').addClass('cupom-wrapper');
        }
        
        if($('#calculoFrete').length){
            $('#calculoFrete').parents('tr').addClass('frete-wrapper');
        }
    
    });
	
    // 	gifts list fix
    if($(".page-lista, .page-print_lista").length){
        $(".lista-produtos").wrapAll("<div class='wrap-gifts'></div>");
    }
    
})(jQuery);