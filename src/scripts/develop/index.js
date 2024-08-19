



function accordionCoach() {
    $('.coach__item:first-child').addClass('coach__open');
    $(document).on('click', '.coach__header', function () {
        let wrap = $(this).closest('.coach__item');
        wrap.prevAll().removeClass('coach__open');
        wrap.nextAll().removeClass('coach__open');

        if (wrap.hasClass('coach__open')) {
            wrap.removeClass('coach__open');
        } else {
            wrap.addClass('coach__open');
        }
    });
}




function initSliders() {
    const transform = new Swiper('.transform__slider', {
        slidesPerView: 4,
        spaceBetween: 30,
        loop: true,
        speed: 1000,
        effect: 'slide',
        autoplay: {
            delay: 2000,
            disableOnInteraction: false
        },
        navigation: {
            nextEl: ".transform__next",
            prevEl: ".transform__prev"
        },
        breakpoints: {
            '0': {
                slidesPerView: 1,
                spaceBetween: 30
            },
            '667': {
                slidesPerView: 4,
                spaceBetween: 30
            }
        }

    });

    $('.transform__slider .swiper-slide').on('mouseenter', function () {
        transform.autoplay.stop();
    });

    $('.transform__slider .swiper-slide').on('mouseleave', function () {
        transform.autoplay.start();
    });

    const solution = new Swiper('.solution__slider', {
        slidesPerView: 6,
        spaceBetween: 16,
        loop: true,
        breakpoints: {
            '0': {
                slidesPerView: 2,
                centeredSlides: true,
                spaceBetween: 12
            },

            '667': {
                slidesPerView: 6,
                spaceBetween: 16,
                centeredSlides: false
            }
        }
    });

    const stylish = new Swiper('.stylish__slider', {
        slidesPerView: 5,
        centeredSlides: false,
        loop: true,
        slideToClickedSlide: true,
        spaceBetween: 20,
        speed: 1000,
        effect: 'slide',
        autoplay: {
            delay: 2000,
            disableOnInteraction: false
        },
        navigation: {
            nextEl: ".stylish__next",
            prevEl: ".stylish__prev"
        },
        breakpoints: {
            '0': {
                slidesPerView: 2.2,
                centeredSlides: true,
                spaceBetween: 12
            },
            '667': {
                slidesPerView: 5,
                spaceBetween: 20,
                centeredSlides: false
            },
            '1920': {
                slidesPerView: 7,
                spaceBetween: 20,
                centeredSlides: false

            }
        }
    });

    $('.stylish__slider .swiper-slide').on('mouseenter', function () {
        stylish.autoplay.stop();
    });

    $('.stylish__slider .swiper-slide').on('mouseleave', function () {
        stylish.autoplay.start();
    });

    const discover = new Swiper('.discover__slider', {
        slidesPerView: 1.5,
        centeredSlides: false,
        loop: true,
        spaceBetween: 30,
        navigation: {
            nextEl: ".discover__next",
            prevEl: ".discover__prev"
        },
        breakpoints: {
            '0': {
                slidesPerView: 2.2,
                centeredSlides: true,
                spaceBetween: 12
            },

            '667': {
                slidesPerView: 1.5,
                spaceBetween: 30,
                centeredSlides: false
            }
        }

    });
    const product = new Swiper('.stylish__product-slider', {
        slidesPerView: 1,
        centeredSlides: false,
        loop: true,
        spaceBetween: 0,
        navigation: {
            nextEl: ".stylish__product__next",
            prevEl: ".stylish__product__prev"
        }
    });

    const sliderProductThumbnail = new Swiper('.product__slider-thumbnail', {
        slidesPerView: 3,
        freeMode: true,
        spaceBetween: 12,
        watchSlidesVisibility: true,
        watchSlidesProgress: true,
        breakpoints: {
            // 0: {
            //     slidesPerView: 4,
            //     spaceBetween: 16
            // },
            // 666: {
            //     slidesPerView: 4
            // }
        }

    });

    const sliderProduct = new Swiper('.product__slider', {
        pagination: {
            el: '.product__pagination',
            clickable: true
        },
        navigation: {
            nextEl: '.product__next',
            prevEl: '.product__prev'
        },
        thumbs: {
            swiper: sliderProductThumbnail
        }
    });
}


function openMenu() {
    $('.header__burger').click(function (e) {
        $(this).toggleClass("header__burger-open");
        $('.header__menu').toggleClass('header__menu-show');
        $('body, html').toggleClass('hidden');




        // if ( window.innerWidth <= 666) {
        //
        // } else {
        //     let target = $(e.target);
        //     if (target.is('span')) {
        //         let backgroundColor = target.css('background-color');
        //         $('.sidemenu').css('background-color', backgroundColor);
        //     }
        //     if (SIDEMENU.hasClass('show')) {
        //         SIDEMENU.removeClass("show");
        //     } else {
        //         SIDEMENU.addClass("show");
        //     }
        // }
    });
};

function changeMob() {
    if ( window.innerWidth <= 666) {

        $('.solution .section__button').text('free evaluation');
        const whatWeDo = new Swiper('.do__slider', {
            slidesPerView: 1,
            spaceBetween: 40,
            loop: true,
            navigation: {
                nextEl: ".do__next",
                prevEl: ".do__prev"
            }
        });
    }
}




function validateForm(form, func) {
    form.on("submit", function (e) {
        e.preventDefault();
    });
    $.validator.addMethod("goodMessage", function (value, element) {
        return this.optional(element) || /^[\sаА-яЯіІєЄїЇґҐa-zA-Z0-9._-]{2,100}$/i.test(value);
    }, "Please enter correct");

    $.validator.addMethod("goodEmail", function (value, element) {
        return this.optional(element) || /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,62}$/i.test(value);
    }, "Please enter correct email");

    form.validate({
        errorPlacement: function (error, element) {
            if (element.attr("type") === "checkbox") {
                error.insertAfter(element.next("label"));
            } else {
                error.insertAfter(element);
            }
        },
        rules: {
            name: {
                required: true,
                goodMessage: true
            },
            email: {
                required: true,
                goodEmail: true,
                email: true
            },
            message: {
                required: true
            },
        },
        messages: {
            name: {
                required: "This field is required",
                email: "Please enter correct name"
            },
            email: {
                required: "This field is required",
                email: "Please enter correct email"
            },
            message: {
                required:"This field is required",
            },

        },
        submitHandler: function () {
            func();
            form[0].reset();
        }
    });
};

function ajaxSend(form, funcSuccess, funcError) {
    let data = form.serialize();
    $.ajax({
        url: '/wp-admin/admin-ajax.php',
        data: data,
        method: 'POST',
        success: function (res) {
            console.log('success ajax');
            funcSuccess(res);
        },
        error: function (error) {
            console.log('error ajax');
            funcError(error);
        }
    });
}

function toggleModal(btn, modal) {
    btn.click(function () {
        button = $(this);
        modal.show();
        $('body').css('overflow', 'hidden');
        return false;
    });
    $('.modal__close').click(function () {
        $(this).closest(modal).hide();
        $('body').css('overflow', 'visible');
        resetModal();
        return false;
    });
    $('.modal__ok').click(function () {
        $(this).closest(modal).hide();
        $('body').css('overflow', 'visible');
        resetModal();
        return false;
    });
    $(document).keydown(function (e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            $('body').css('overflow', 'visible');
            resetModal();
        }
    });
    modal.click(function (e) {
        if ($(e.target).closest('.modal__content').length == 0) {
            $(this).hide();
            $('body').css('overflow', 'visible');
            resetModal();
        }
    });
}

function tab() {
    $(".tab__header-item").click(function () {
        $(".tab__header-item").removeClass("active").eq($(this).index()).addClass("active");
        $(".tab__content-item").hide().eq($(this).index()).fadeIn();
    }).eq(0).addClass("active");
}


function resetModal() {
    $('.modal__solution-content').show();
    $('.modal__solution-success').hide();
    $('.modal__total-content').show();
    $('.modal__total-success').hide();
}



function toogleModalWithoutClick(modal) {
    modal.show();
    $('body').css('overflow', 'hidden');
    $('.modal__close').click(function () {
        modal.hide();
        $('body').css('overflow', 'visible');
        resetModal();
        return false;
    });
    $('.modal__ok').click(function () {
        modal.hide();
        $('body').css('overflow', 'visible');
        resetModal();
        return false;
    });

    $(document).keydown(function (e) {
        if (e.keyCode === 27) {
            e.stopPropagation();
            modal.hide();
            $('body').css('overflow', 'visible');
            resetModal();
            return false;
        }
    });
    modal.click(function (e) {
        if ($(e.target).closest('.modal__content').length == 0) {
            $(this).hide();
            $('body').css('overflow', 'visible');
            resetModal();
            return false;
        }
    });
}



$(document).ready(function () {

    initSliders();
    accordionCoach();
    openMenu();
    changeMob();

    let contactForm = $('.contact__form ');
    validateForm(contactForm, function () {
        ajaxSend(contactForm, function () {
            contactForm.hide()
            $('.contact__form-success').show();
        }, function (){і
        });
    });

    toggleModal($('.banner__block .section__button-wrap'), $('.modal__calculator'));

    tab();
});