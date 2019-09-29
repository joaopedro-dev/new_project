$(document).ready(function(){
    $('.btn').click(function(){
        $('.links').addClass('active')
    })
    $('.close').click(function(){
        $('.links').removeClass('active')
    })
})

$('.home').click(function(){
    $('.links').toggleClass('active')
})

$('.title').click(function(){
    $('.text').slideToggle(800)
})