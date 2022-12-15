$(document).ready(function(){

    let album = $('.gnbMenu').children('li:eq(0)');
    let tracks = $('.gnbMenu').children('li:eq(1)');
    let visual = $('.gnbMenu').children('li:eq(2)');

    $('.logo').click(function(){
        $('.main').addClass('active');

        $('.album').removeClass('active');  
        $('.tracks').removeClass('active');
        $('.visual').removeClass('active');
    })

    $(album).click(function(){
        $('.album').addClass('active');
        
        $('.main').removeClass('active');  
        $('.tracks').removeClass('active');
        $('.visual').removeClass('active');
        $('.starring').removeClass('active');
    })

    $(tracks).click(function(){
        $('.tracks').addClass('active');
        
        $('.main').removeClass('active');  
        $('.album').removeClass('active');
        $('.visual').removeClass('active');
    })
    
    $(visual).click(function(){
        $('.visual').addClass('active');
        
        $('.main').removeClass('active');  
        $('.album').removeClass('active');
        $('.tracks').removeClass('active');
    })
})