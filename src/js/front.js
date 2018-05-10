let front = {

    slider_options_default: {
        wrapAround: true,
        pageDots: false,
        prevNextButtons: true,
        autoPlay: true,
        cellAlign: 'left',
        contain: true,
    },

    init: function () {
        this.events();
        this.rangeInit();
        this.newSlider('.app-popular__carousel');
    },

    newSlider: function (selector, options) {
        options = (options !== undefined) ? Object.assign({}, this.slider_options_default, options) : this.slider_options_default;
        // let carousel = new Flickity(document.querySelector(selector), options);

        return new Flickity(document.querySelector(selector), options);
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


        $('#app_form').submit(function (e) {
            e.preventDefault();
            let form = $('#app_form').serialize();
            console.log(form);
        });

    }
};





jQuery(function () {
    front.init();
});