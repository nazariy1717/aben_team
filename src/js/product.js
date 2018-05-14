let product = {

    slider_options_default: {
        wrapAround: true,
        pageDots: false,
        prevNextButtons: true,
        autoPlay: false,
        cellAlign: 'left',
        contain: true,
        imagesLoaded: true,
        hash: true
    },
    slider_nav:{
        asNavFor: '.product__carousel',
        contain: false,
        pageDots: false,
        wrapAround: false,
        prevNextButtons: false,
        hash: true

    },

    init: function () {
        this.events();
        this.newSlider('.product__carousel');
        // this.newSlider('.product__carousel-nav',this.slider_nav);

    },

    newSlider: function (selector, options) {
        options = (options !== undefined) ? Object.assign({}, this.slider_options_default, options) : this.slider_options_default;
        let carousel = new Flickity(document.querySelector(selector), options);
        return new Flickity(document.querySelector(selector), options);
    },

    events: function () {
        let self = this;

        $('.product-info__top.--panel').on('click',function(){
            $(this).parent().find('.product-info__content').slideToggle();
            $(this).find('.product-info__icon').toggleClass('js-active');
        });
        $('.product-images__link').on('click',function(){
           console.log('sadas');
        });


    }
};





jQuery(function () {
    product.init();
});