(function($){

    // cart products
    $.getJSON( "/mvc/store/cart/count?loja=249009", function( data ) {
        var cartItem,
            cartItemHtml = '',
            totalItemsCart = data.cart.Products.length;

        for(cartItem = 0; cartItem < totalItemsCart; cartItem++){
            cartItemHtml += '<li><img class="item-image" src="'+data.cart.Products[cartItem].ProductImage[0].https +'"><span class="item-name">'+ data.cart.Products[cartItem].name +'</span><span class="item-price">R$ '+ data.cart.Products[cartItem].price +'</span></li>';
        }

        $('.cart .list ul').prepend(cartItemHtml);
    });

    // plugins init
    if( $.fn.jcarousel ){
        $(".product-list > ul").jcarousel({ scroll: 4 });
        $(".brands > ul").jcarousel();
    }

    var lazyActive;
    $("img.lazy").lazyload({
        event: "sporty"
    });

    $('.product-list').find('.jcarousel-prev').click(function(){
        callLazy($(this).parents('.product-list'));
    });

    $('.product-list').find('.jcarousel-next').click(function() {
        callLazy($(this).parents('.product-list'));
    });

    $('.texto_variacao > h2').val("Tamanho:");

    function callLazy($showcase) {
        lazyActive = $showcase.attr('data-original');

        if (lazyActive != 'on') {
            $showcase.find('img.lazy').lazyload({
                event: "sporty"
            });
            $showcase.find('img.lazy').trigger('sporty');
            $showcase.attr('data-lazy', 'on');
        }

    }

    // bootstrap classes for closed pages
    var page = $('html').attr('class');
    $('.relacionado').addClass('col-md-3 col-xs-12');
    $('.botao-commerce').addClass('btn btn-primary');
    $('.infobox ').addClass('alert alert-danger');
    $('#span_erro_carrinho').addClass('alert alert-info');
    $('.blocoSucesso').addClass('alert alert-success');
    $('.produtos-relacionados').parents('#ProdBlock').addClass('wrap-related');

    switch (page) {

        case 'page-product':
            $('#esquerda').addClass('col-md-8 col-xs-12');
            $('#direita').addClass('col-md-4 col-xs-12');
            $('#button-buy').addClass('btn btn-success btn-lg')
            $('.fotosCompreJunto').addClass('col-md-8 col-xs-12');
            $('.fotosCompreJunto > *').addClass('col-md-3 col-xs-12');
            $('.precoCompreJunto').addClass('col-md-4 col-xs-12');
            $('#descricao').parents('#ProdBlock').addClass('wrap-tabs');
            $('.textarea').addClass('text');
            break;

        case 'page-login':
            $('.caixa-login').addClass('col-md-6 col-xs-12');
            $('.caixa-cadastro').addClass('col-md-6 col-xs-12');

            break;

        case 'page-register':
            $('#CadastroAbas ul').addClass('nav nav-tabs');
            $('.botao-prosseguir-cadastro').addClass('btn btn-primary');
            break;

        case 'page-checkout_cart':
            $('#tabela_carrinho').addClass('table table-hover table-bordered');
            $('.caixa-forma-frete').addClass('table table-hover table-bordered');
            $('.qntd').addClass('text');
            $('.caixa-cupom').parents('tr').addClass('wrap-cupom');
            $('#tab').parents('tr').addClass('wrap-shipping-forms');

            // Carrinho adicionando linha sub-total
            var subTotalAux = $('#tabela_carrinho .valores_carrinho'),
            i = subTotalAux.size(),
            sumSubTotal = 0;

            for(i = 0; i < subTotalAux.size(); i++){
                if(i % 2 == 1){
                    sumSubTotal += parseFloat(subTotalAux.eq(i).text().replace("R$","").replace(",", "."));
                }
            }
            
            $('.bt-cep img').attr("src", 'https://images.tcdn.com.br/img/img_prod/203321/1473884780_btn-calcular-frete-carrinho.png');
            $('#calculoFrete label').text('Calcular frete');
            $('.wrap-cupom th h3').append('<span class="valores_desconto"> Desconto: </span> ');
            $('.bt-cupom img').attr("src", 'https://images.tcdn.com.br/img/img_prod/203321/1473884780_btn-calcular-frete-carrinho.png');

            $('.bt-continuar-comprando a').append('<span class="botao-commerce-img">Continuar comprando</span>');
            // $('.page-checkout_cart .AvancarTopo+.bt-avancar, .page-checkout_cart .bt-continuar-comprando+.bt-avancar img').attr("src",'https://images.tcdn.com.br/365499/themes/15/img/btn-avancar.png');
            $('.page-checkout_cart .AvancarTopo+.bt-avancar, .page-checkout_cart .bt-continuar-comprando+.bt-avancar').append('<font class="btn-avancar"> Avançar </font>');

            sumSubTotal = sumSubTotal.toFixed(2);
            sumSubTotal = sumSubTotal.toString().replace(".", ",");
            $('#tabela_carrinho').find('tbody').append('<tr class="sub-total"><td colspan="4">Sub-total:</td><td colspan="2" class="sub-total-value">R$ '+sumSubTotal+'</td></tr>');

            break;

        case 'page-checkout_payment':
            $('table').addClass('table table-hover table-bordered');
            $('.caixa-forma-a_vista li').addClass('col-md-1');
            $('.caixa-forma-parcelado li').addClass('col-md-1');
            $('#obs').addClass('text');
            break;


        case 'page-implantacao':
            $('#implantation-news-nome').addClass('text');
            $('#implantation-news-email').addClass('text');
            $('.implantation button').addClass('btn btn-primary');
            break;

        case 'page-central_cliente':
            $('.icoFilho').addClass('col-md-2');
            break;

        case 'page-central_detalhe_pedido':
            $('table').addClass('table table-hover table-bordered');
            break;

        case 'page-central_anteriores':
            $('table').addClass('table table-hover table-bordered');
            break;

        case 'page-central_confirmar_pagamento':
            $('table').addClass('table table-hover table-bordered');
            break;

        case 'page-central_rastrear':
            $('table').addClass('table table-hover table-bordered');
            break;

        case 'page-central_troca':
            $('table').addClass('table table-hover table-bordered');
            break;

        case 'page-central_lista_espera':
            $('table').addClass('table table-hover table-bordered');
            break;

        default:
            // code
    }

    // increase image of related products
	var imgSrc,
		i = 0,
		total = 0;

	var $relacionado = $('.relacionado-imagem').find('img');
	total = $relacionado.size();

	for (i = 0; i < total; i++){
		imgSrc = $relacionado.eq(i).attr('src').replace('/180_','/');
		imgSrc = $relacionado.eq(i).attr('src').replace('/90_','/');
		$relacionado.eq(i).attr('src', imgSrc);
	}

    // 	back top button
    $('.backtop').click(function(){
        $('html, body').animate({scrollTop : 0},800);
        return false;
    });

    // cart products
    $.getJSON( "/mvc/store/cart/count?loja=352023", function( data ) {
        var cartItem,
            cartItemHtml = '',
            totalItemsCart = data.cart.Products.length;

        for(cartItem = 0; cartItem < totalItemsCart; cartItem++){
            cartItemHtml += '<li><img class="item-image" src="'+data.cart.Products[cartItem].ProductImage[0].https +'"><span class="item-name">'+ data.cart.Products[cartItem].name +'</span><span class="item-price">R$ '+ data.cart.Products[cartItem].price +'</span></li>';
        }

        $('.cart .list ul').prepend(cartItemHtml);
    });

    setTimeout(function() {
      $('.page-product .varTit').append('<a href="http://www.dizup.com.br/sac_bandup/medidas/medidas.html" class="table-meansure" target="_blank">Tabela de medidas</a>');
    }, 3100);

	$('.page-product .lista-radios-input input[type=radio]').click(function(){
	    var linkTabela = '<a href="http://www.dizup.com.br/sac_bandup/medidas/medidas.html" class="table-meansure" target="_blank">Tabela de medidas</a>';
        setTimeout(function() {
            $('.table-meansure').remove();
            $('.page-product .varTit').append(linkTabela);
        }, 2700);
        clearTimeout();
	});

    // esconde miniaturas do produto caso haja apenas uma
	if ($('#foto_a li').length == 1) {
		$('#foto_a').hide();
	}

	$('.show-categories').click(function(){
        $('.main-menu').toggle();
	});

})(jQuery);