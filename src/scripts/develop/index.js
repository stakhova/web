
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
    const about = new Swiper('.about__slider', {
        slidesPerView: 1,
        centeredSlides: false,
        loop: true,
        spaceBetween: 10,
    });

}


function openMenu() {
    $('.header__burger').click(function (e) {
        $(this).toggleClass("header__burger-open");
        $('.header__menu').toggleClass('header__menu-show');
        $('body, html').toggleClass('hidden');
    });
};

function changeMob() {
    if ( window.innerWidth <= 666) {
        $('.home__section .section__info p:first-child').after($('.section__img'))
        $('.about__section .section__info p:first-child').after($('.about__slider'))
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





function changeActive(){
    let id = window.location.hash.substring(1);
    if($('.coach').length > 0 && id ){
        $('.coach__item:first-child').removeClass('coach__open');
        $('.coach__item').each(function (i){
            if( $(this).attr('id') == id){
                $(this).addClass('coach__open')
            }
        })
    }

}





$(document).ready(function () {
    changeMob();
    initSliders();
    accordionCoach();
    openMenu();


    let contactForm = $('.contact__form ');
    validateForm(contactForm, function () {
        ajaxSend(contactForm, function () {
            contactForm.hide()
            $('.contact__form-success').show();
        }, function (){
        });
    });

    changeActive()
});