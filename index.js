$(document).ready(function() {

    $('.demoImgLeft, .demoImgRight').each( function(i) {
        $(this).animate({'opacity':'1'}, (i + 1) * 500);
    });

    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
    
        /* Check the location of each desired element */
        $('.profile').each( function(i){
    
            let bottom_of_object = $(this).position().top + $(this).outerHeight();
            let bottom_of_window = $(window).scrollTop() + $(window).height();
    
            /* If the object is completely visible in the window, fade it it */
            if( bottom_of_window > bottom_of_object ){
    
                $(this).animate({'opacity':'1'}, (i + 1) * 500);
    
            }    
        }); 
    }); 
});

