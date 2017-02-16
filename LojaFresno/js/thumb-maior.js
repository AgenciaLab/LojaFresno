jQuery(document).ready(function(){

    if(jQuery('.zoom').length){
        jQuery('.zoom').elevateZoom({
            gallery: "product-gallery",
            zoomType: "inner",
            cursor: "crosshair",
            galleryActiveClass: "active"
        });
    }

});