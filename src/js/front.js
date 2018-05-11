let front = {
    hamburger: $('.hamburger'),
    nav: $('.header-list'),

    slider_options_default: {
        wrapAround: true,
        pageDots: false,
        prevNextButtons: true,
        autoPlay: true,
        cellAlign: 'left',
        contain: true,
        imagesLoaded: true
    },

    init: function () {
        this.events();
        this.headerScroll();
        this.rangeInit();
        this.newSlider('.app-suggest__carousel');
        this.newSlider('.app-popular__carousel');
        this.newSlider('.app-exposure__carousel');
    },

    newSlider: function (selector, options) {
        options = (options !== undefined) ? Object.assign({}, this.slider_options_default, options) : this.slider_options_default;
        // let carousel = new Flickity(document.querySelector(selector), options);

        return new Flickity(document.querySelector(selector), options);
    },

    headerScroll: function(){
        if( $(window).scrollTop() > 0){
            $('.header').addClass('js-fixed');
            $('.hamburger').addClass('js-fixed');
        } else {
            $('.header').removeClass('js-fixed');
            $('.hamburger').removeClass('js-fixed');
        }
    },

    toogleNav: function(){
        if (!this.hamburger.hasClass('is-active')) {
            this.hamburger.addClass("is-active");
            this.nav.toggleClass('js-show');
        }
        else {
            this.hamburger.removeClass("is-active");
            this.nav.toggleClass('js-show');
        }
    },

    getVals: function () {
        let parent = this.parentNode;
        let slides = parent.getElementsByTagName("input");
        let slide1 = parseFloat( slides[0].value );
        let slide2 = parseFloat( slides[1].value );
        if( slide1 > slide2 ){ let tmp = slide2; slide2 = slide1; slide1 = tmp; }
        let displayElement = parent.getElementsByClassName("rangeValues")[0];
        displayElement.innerHTML = "$ " + slide1 + " - $ " + slide2;
    },

    rangeInit: function(){
        let sliderSections = document.getElementsByClassName("range");
        for( let x = 0; x < sliderSections.length; x++ ){
            let sliders = sliderSections[x].getElementsByTagName("input");
            for( let y = 0; y < sliders.length; y++ ){
                if( sliders[y].type ==="range" ){
                    sliders[y].oninput = this.getVals;
                    sliders[y].oninput();
                }
            }
        }
    },


    events: function () {
        let self = this;

        $(window).on('scroll',function(){
            self.headerScroll();
        });

        $(document).on('click', '.hamburger', function () {
            self.toogleNav();
        });


    }
};





jQuery(function () {
    front.init();
});