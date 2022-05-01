$(document).ready(function () {
    $('.popup__close').click(function () {
        $('.popup').removeClass('popup--open')
        $('.header__logo').removeClass('header__logo--open')
    })
    $('.popup__back').click(function () {
        $('.popup').removeClass('popup--open')
    })
})