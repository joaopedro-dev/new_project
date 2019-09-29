$(document).ready(function(){
    $('.btn').click(function(){
        $('.menu').addClass('active')
    })
    $('.close').click(function(){
        $('.menu').removeClass('active')
    })
})

$('.home').click(function(){
    $('.menu').toggleClass('active')
})

$('.title').click(function(){
    $('.text').slideToggle(800)
})