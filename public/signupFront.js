$(function () {
    $('#signup').click(function () {
        $.post('/user/signup')
    })
})