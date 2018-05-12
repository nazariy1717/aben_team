let home = {

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
        this.newSlider('.app-carousel');
        this.newSlider('.app-suggest__carousel');
        this.newSlider('.app-popular__carousel');
        this.newSlider('.app-exposure__carousel');
    },

    newSlider: function (selector, options) {
        options = (options !== undefined) ? Object.assign({}, this.slider_options_default, options) : this.slider_options_default;
        // let carousel = new Flickity(document.querySelector(selector), options);
        return new Flickity(document.querySelector(selector), options);
    },

    events: function () {
        let self = this;

    }
};





jQuery(function () {
    home.init();
});