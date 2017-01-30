jQuery(document).ready(function(){

    if(jQuery('.zoom').length){
        jQuery('.zoom').elevateZoom({
            gallery: "product-gallery",
            zoomType: "inner",
            cursor: "crosshair",
            galleryActiveClass: "active"
        });
    }


    jQuery('<input class="qtminus" type="button" id="plus" value="-" onclick="process(-1)">').insertBefore('#quant');
    jQuery('<input class="qtplus" type="button" id="minus" value="+" onclick="process(1)">').insertAfter('#quant');

});