let front = {

    hamburger: $('.hamburger'),
    nav: $('.header__nav'),

    init: function () {
        this.events();
        this.headerScroll();
    },

    headerScroll: function(){
        let topBar = $('.top-bar').height() + 50;
        let scrollTop = $(window).scrollTop();
        if( scrollTop > topBar){
            $('.header').addClass('js-fixed');
        } else {
            $('.header').removeClass('js-fixed');
        }
    },

    toogleNav: function(){
        if (!this.hamburger.hasClass('is-active')) {
            this.hamburger.addClass("is-active");
            this.nav.slideDown(400);
        }
        else {
            this.hamburger.removeClass("is-active");
            this.nav.slideUp(300);
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

        $(document).on('click', '.top-bar__toggle', function () {
            $(this).toggleClass('js-active');
            $('.top-bar__content').slideToggle();
        });


        $(".app-screen__scroll").click(function() {
            let section = $(this).parent('.app-screen').next();
            $('html, body').animate({
                scrollTop: $(section).offset().top - 100
            }, 700);
        });


        $(document).click(function(event) {
            if(!$(event.target).closest('.header').length) {
                if($('.hamburger').hasClass("is-active")) {
                    self.toogleNav();
                }
            }
        });

    }
};



let modal = {
    closeButton: $('.modal__close'),
    closeOverlay: $('.modal'),
    can: 1,
    init: function () {
        this.events();
    },
    openModal: function (id) {
        let modalWindow = $(id);
        modalWindow.fadeIn();
        modalWindow.find('.modal__content').removeClass('animate-away').addClass('animate-in');
    },

    closeModal: function (id) {
        let modalWindow = $(id);
        modalWindow.find('.modal__content').removeClass('animate-in').addClass('animate-away');
        modalWindow.fadeOut();
    },

    events: function () {

        $(document).on('click', '.modalTrigger', function (e) {
            e.preventDefault();
            let self = $(this),
                target = self.attr('data-modal');
            modal.openModal(target);

        });

        $(document).on('click', '.modal', function (event) {
            let self = '#' + $(this).attr('id');
            if (event.target.className == 'modal__body') {
                modal.closeModal(self);
            }
        });

        $(document).on('click', '.modal__close', function () {
            let self = '#' + $(this).closest('.modal').attr('id');
            modal.closeModal(self);

        });

    }
};


jQuery(function () {
    front.init();
    modal.init();
});