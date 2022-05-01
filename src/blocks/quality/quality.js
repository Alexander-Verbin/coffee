$(document).ready(function () {
    $('.quality__stagewrapper').click(function () {
        $(this).siblings('.quality__stagetext').toggleClass('quality__stagetext--open')
        console.log($(this).toggleClass('quality__stagewrapper--open'))
    })
})