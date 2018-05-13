let product = {


    init: function () {
        this.events();
    },



    events: function () {
        let self = this;

        $('.product-info__top.--panel').on('click',function(){
            $(this).parent().find('.product-info__content').slideToggle();
            $(this).find('.product-info__icon').toggleClass('js-active');
        });

    }
};





jQuery(function () {
    product.init();
});