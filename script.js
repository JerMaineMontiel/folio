var num = 1;
var iWinWidth = 0;

function scrollDown(){
    
    switch(num)
    {
        case 1:
            $('body').animate({
                scrollTop: $(window).height()
            }, 1000);
            num++;
            break;
            
        case 2:
            $('body').animate({
                scrollTop: $(window).height() * 2
            }, 1000);
            num++;
            break;
            
        case 3:
            $('body').animate({
                scrollTop: $(window).height() * 3
            }, 1000);
            num++;
            break;
        case 4:
        default:
            break;
    }
}

function doFade()
{
        switch(num)
    {
        case 1:
            $(".intro #photo").hide();
            $("#intro-content h1").hide();
            $("#down-arrow").hide();
            $("#intro-content h1").fadeIn('slow');
            $("#photo").delay(500).fadeIn('slow');
            $("#down-arrow").delay(1000).fadeIn('slow');
            break;
        case 2:
            $('.about #photo').hide();
            $('.about #photo').delay(500).fadeIn('slow');
            break;
        case 3:
            $('.hobbies-interests #photo').hide();
            $('.hobbies-interests #photo').delay(500).fadeIn();
            break;
        default:
            break;
            
    }
}

$(document).ready(function () {
    
    $(window).scrollTop();
    doFade();
    
    $('#down-arrow').click( function(){
        scrollDown();
        if( num < 4)
        {
            doFade();
        }
        if ( num == 4 )
        {
            $('#down-arrow').fadeOut('fast');
        }
    });
    
   $(window).on( 'scroll', function(){
        if( $(this).scrollTop() == 0 )
        {
            num = 1;
            $("#down-arrow").show();          
        }
   });
    
});

