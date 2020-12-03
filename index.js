$(function(){
    $("#header-logo").on("click", function() {
        $('html, body').animate({ scrollTop: 0 }, 500);
    });

    $(".header-btn").on("click", function() {
        const scrollTarget = $(this)[0].attributes[1].nodeValue;
        const offsetTop = $(scrollTarget).offset().top;
        $("html, body").animate({ scrollTop: offsetTop }, 500);
        return false;
    });
    
    $('#header-menu-btn').click(function(){
        if ($(this).hasClass('header-menu-btn-active')){
            $(this).removeClass('header-menu-btn-active');
            $('.menu-box').slideDown();
            $(this).html('<span class="fa fa-times"></span>');
        } else {
            $(this).addClass('header-menu-btn-active');
            $('.menu-box').slideUp();
            $(this).html('<span class="fa fa-bars"></span>');
        }
    });

    $('.blog-content').click(function(){
        if ($(this).hasClass('blog-content-active')){
            $(this).removeClass('blog-content-active');
            $(this).find('.blog-text').slideDown();
        } else {
            $(this).addClass('blog-content-active');
            $(this).find('.blog-text').slideUp();
        }
    });

    
});