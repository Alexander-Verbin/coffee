

$('.delivery__delivery').click(function () {
    $('.popup').addClass('popup--open')
})



$(document).ready(function () {
    $('.header__burger').click(function () {
        $('.header__data').toggleClass('header__data--open')
        $('.header__logo').toggleClass('header__logo--open')
        if ($(this).is('.js-active:not(.js-back)')) {
            $(this).addClass('js-back');
        } else if ($(this).is('.js-back')) {
            $(this).removeClass('js-back');
        } else {
            $(this).addClass('js-active');
        }
    })
    $('.header__buttonlink').click(function () {
        $('.popup').addClass('popup--open')
    })
    $('.header__mail').click(function () {
        $('.popup').addClass('popup--open')
    })

})


$(document).ready(function () {
    $('.popup__close').click(function () {
        $('.popup').removeClass('popup--open')
        $('.header__logo').removeClass('header__logo--open')
    })
    $('.popup__back').click(function () {
        $('.popup').removeClass('popup--open')
    })
})

$(document).ready(function () {
    $('.slider__area').slick({
        prevArrow: '.slider__arrow--prev',
        nextArrow: '.slider__arrow--next',
        adaptiveHeight: true
    });
});

$(document).ready(function () {
    $('.quality__stagewrapper').click(function () {
        $(this).siblings('.quality__stagetext').toggleClass('quality__stagetext--open')
        console.log($(this).toggleClass('quality__stagewrapper--open'))
    })
})


