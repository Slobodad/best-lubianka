$(document).ready(function () {

    // Scroll
    $("a").on("click", function (event) {
        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $("html, body").animate(
                {
                    scrollTop: $(hash).offset().top
                },
                1000,
                function () {
                    window.location.hash = hash;
                }
            );
        }
    });

    // Banner Slider
    var mySwiper = new Swiper('.swiper-container', {
        autoplay: {
            delay: 5000,
          },
        speed: 300,
        loop: true,

        pagination: {
            el: '.swiper-pagination',
            clickable: true,
            type: 'fraction'
        },

        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });

    // Services slider

    $('.services-sl').slick({
        responsive: [
            {
                breakpoint: 450,
                settings: {
                    centerMode: true,
                    centerPadding: '38px',
                    slidesToShow: 1,
                    infinity: true,
                    dots: true,
                    arrows: false,
                 }
            },
            {
                breakpoint: 769,
                settings: {
                    centerMode: true,
                    centerPadding: '120px',
                    slidesToShow: 2,
                    infinity: true,
                    dots: true,
                    arrows: false
                }
            },
            {
                breakpoint: 1921,
                settings: "unslick"
            }
        ]
    });

    // Team slider
    $('.team__sl').slick({
        centerMode: false,
        draggable: false,
        arrows: true,
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 4,
        slidesToScroll: 1,
        nextArrow: $('.right-arrow'),
        prevArrow: $('.left-arrow'),
        dots: false,
        responsive: [
            {
                breakpoint: 450,
                settings: {
                    centerMode: false,
                    draggable: false,
                    arrows: true,
                    autoplay: false,
                    autoplaySpeed: 3000,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    nextArrow: $('.right-arrow'),
                    prevArrow: $('.left-arrow'),
                    dots: true,
                }
            },
            {
                breakpoint: 769,
                settings: {
                    centerMode: false,
                    draggable: false,
                    arrows: false,
                    autoplay: false,
                    autoplaySpeed: 3000,
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    nextArrow: $('.right-arrow'),
                    prevArrow: $('.left-arrow'),
                    dots: false,
                }
            },
            {
                breakpoint: 1025,
                settings: {
                    centerMode: false,
                    draggable: false,
                    arrows: false,
                    autoplay: false,
                    autoplaySpeed: 3000,
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: false,
                }
            },
        ]
    });

    // Slider review
    $('.slider__review').slick({
        centerMode: false,
        draggable: false,
        arrows: true,
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 2,
        slidesToScroll: 1,
        nextArrow: $('.right-arrow-review'),
        prevArrow: $('.left-arrow-review'),
        dots: false,
        responsive: [
            {
                breakpoint: 1300,
                settings: {
                    centerMode: false,
                    draggable: false,
                    arrows: true,
                    autoplay: false,
                    autoplaySpeed: 3000,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    nextArrow: $('.right-arrow-review'),
                    prevArrow: $('.left-arrow-review'),
                    dots: false,
                }
            },

        ]
    });

    // Readmore
    $('article').readmore({
        speed: 75,
        collapsedHeight: 140,
        moreLink: '<a class="slider__link" href="javascript:void(0)">Читать полностью</a>',
        lessLink: '<a class="slider__link" href="javascript:void(0)">Скрыть</a>'
    });

    // Slider certificate
    $('.certificate__sl').slick({
        centerMode: false,
        draggable: false,
        arrows: true,
        autoplay: false,
        autoplaySpeed: 3000,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: $('.right-arrow-certificate'),
        prevArrow: $('.left-arrow-certificate'),
        dots: false,

        responsive: [
            {
                breakpoint: 400,
                settings: {
                    centerMode: false,
                    draggable: false,
                    arrows: true,
                    autoplay: false,
                    autoplaySpeed: 3000,
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    nextArrow: $('.right-arrow-certificate'),
                    prevArrow: $('.left-arrow-certificate'),
                    dots: false,
                }
            },
        ]
    });

    // Modal callBack
    var modalOpen = $('.js-modal-open');
    var modalClose = $('.modal-callback__close');
    var modalCallback = $('.modal-callback__box');
    var sendMessage = $('.js-send');

    modalOpen.on('click', function () {
        modalCallback.removeClass('modal-callback__box--active');
        modalCallback.addClass('modal-callback__box--active');
    });

    modalClose.on('click', function () {
        modalCallback.removeClass('modal-callback__box--active');
    });

    modalCallback.on('click', function (e) {
        if (e.target.className === 'modal-callback__box modal-callback__box--active') {
            modalCallback.removeClass('modal-callback__box--active');
        }

    });

    sendMessage.on('click', function(){
        event.preventDefault();
        modalCallback.removeClass('modal-callback__box--active');
    });

    // Modal thanks

    var modalThanks = $('.modal-thanks__box');
    var modalthanksOpen = $('.js-thanks-open')
    var modalthanksClose = $('.modal-thanks-close');

    modalthanksOpen.on('click', function () {
        modalThanks.removeClass('modal-thanks__box--active');
        modalThanks.addClass('modal-thanks__box--active');
    });


    sendMessage.on('click', function () {
        modalCallback.removeClass('modal-callback__box--active');
        modalThanks.removeClass('modal-thanks__box--active');
        modalThanks.addClass('modal-thanks__box--active');

    });

    modalthanksClose.on('click', function () {
        modalThanks.removeClass('modal-thanks__box--active');
    });

    modalThanks.on('click', function () {
        modalThanks.removeClass('modal-thanks__box--active');
    });

    // Modal security

    var modalSecuritu = $('.modal-security__box');
    var modalSecurituOpen = $('.js-security-open');
    var modalSecurituClose = $('.modal-security__close');

    modalSecurituOpen.on('click', function () {
        modalCallback.removeClass('modal-callback__box--active');
        modalSecuritu.removeClass('modal-security__box--active');
        modalSecuritu.addClass('modal-security__box--active');
    });

    modalSecurituClose.on('click', function () {
        modalSecuritu.removeClass('modal-security__box--active');
    });

    modalSecuritu.on('click', function (e) {
        if (e.target.className === 'modal-security__box modal-security__box--active') {
            modalSecuritu.removeClass('modal-security__box--active');
        }
    });

    // Menu
    var openMenu = $('#js-menu');
    var closeMenu = $('.modal-menu__close');
    var menuBody = $('.modal-menu');
    var menuItem = $('.modal-menu__link');

    openMenu.on('click', function () {
        menuBody.toggleClass('modal-menu--active');
    });

    closeMenu.on('click', function () {
        menuBody.removeClass('modal-menu--active');
    });

    menuItem.on('click', function () {
        menuBody.removeClass('modal-menu--active');
    });

    $(document).mouseup(function (e){
        if (!menuBody.is(e.target)
		    && menuBody.has(e.target).length === 0) {
            menuBody.removeClass('modal-menu--active');
        }
    });


    // Popup review

    var openReview = $('.review-popup');
    var reviewBox = $('.popup-review__box');
    var reviewClose = $('.popup-review__close');
    var reviewImgBig = $('.popup-review__img');

    openReview.on('click', function () {
        reviewImgBig.attr("src", $(this).data('img'));
        reviewBox.addClass('popup-review__box--active');
        
    });

    reviewClose.on('click', function () {
        reviewBox.removeClass('popup-review__box--active');
    });

    reviewBox.on('click', function (e) {
        if (e.target.className === 'popup-review__box popup-review__box--active') {
            reviewBox.removeClass('popup-review__box--active');
        }
    });

});

// Map

ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("js-map", {
        center: [55.757977, 37.637184],
        zoom: 15,
        controls: []
    }, {
            searchControlProvider: 'yandex#search'
        });
        HintLayout = ymaps.templateLayoutFactory.createClass("<div class='my-hint'>" +
            "<div class='my-hint__addrexs'>" +
            '<i class="icon-002-facebook-placeholder-for-locate-places-on-maps"></i>' +
            '<span> {{ properties.address }}</span>' +
            '</div>' +
            '<div class="my-hint__phone">' +
            '<a href="#"><i class="icon-001-telephone"></i>{{ properties.phone }}</a>' +
            '</div>' +
            '</div>', {
                getShape: function () {
                    var el = this.getElement(),
                        result = null;
                    if (el) {
                        var firstChild = el.firstChild;
                        result = new ymaps.shape.Rectangle(
                            new ymaps.geometry.pixel.Rectangle([
                                [0, 0],
                                [firstChild.offsetWidth, firstChild.offsetHeight]
                            ])
                        );
                    }
                    return result;
                }
            }
        );

        myMap.behaviors.disable(['drag', 'scrollZoom']);

    var myPlacemark = new ymaps.Placemark([55.757977, 37.627184], {}, {
        hintContent: 'Хинт метки',
        iconLayout: 'default#image',
        iconImageHref: '../img/placeholder.png',
        iconImageSize: [96, 114],
        iconImageOffset: [0, 0],
        address: "ул. Первая, 20, офис 303",
        phone: "+7 (987) 654 32 10"
    }, {
            hintLayout: HintLayout
        });

    myMap.geoObjects.add(myPlacemark);
}