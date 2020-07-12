


$('#dark-btn').click(function(e){
    
    $('.sections').removeClass('default-bg extra-bg extra-bg-2');


    $('body').toggleClass('dark');
    $('.about-me').toggleClass('dark');
    $('.my-skills').toggleClass('dark');
    $('#dark-btn').addClass('dark-btn-2');

    if(e.currentTarget.innerHTML == 'DARK: ON'){
        $('#dark-btn').text('DARK: OFF');
    }
    else{
        $('#dark-btn').text('DARK: ON');
    }

});


$('#all').click(function(){
    $('.works').slideDown(300);
});


$('#front').click(function(){
    $('.front').slideDown(500);
    $('.back').slideUp(500);
    $('.example').slideUp(500);
});

$('#back').click(function(){;
    $('.back').slideDown(500);
    $('.front').slideUp(500);
    $('.example').slideUp(500);
});
$('#example').click(function(){;
    $('.example').slideDown(500);
    $('.back').slideUp(500);
    $('.front').slideUp(500);
});