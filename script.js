var num = 1;
var iWinWidth = 0;

function scrollDown(){
    
    $('#down-arrow').fadeOut('fast');
    
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
            $('#down-arrow').hide();
            $('.about #photo').hide();
            $('.about #photo').delay(500).fadeIn('slow');
            $('#down-arrow').delay(2000).fadeIn('slow');
            break;
        case 3:
            $('#down-arrow').hide();
            $('.hobbies-interests #photo').hide();
            $('.hobbies-interests #photo').delay(500).fadeIn();
            $('#down-arrow').delay(2000).fadeIn('slow');
            break;
        case 4:
            $('#down-arrow').fadeOut('fast');
        default:
            break;
            
    }
}

$(document).ready(function () {

    doFade();
    
    $('#down-arrow').click( function(){
        scrollDown();
        doFade();
    });
    
   $(window).on( 'scroll', function(){
        if( $(this).scrollTop() == 0 )
        {
            num = 1;
            $("#down-arrow").show();          
        }
   });
    
    $(window).onbeforeunload(function(){
        $(this).scrollTop();
    });
    
});

