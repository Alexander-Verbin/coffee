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