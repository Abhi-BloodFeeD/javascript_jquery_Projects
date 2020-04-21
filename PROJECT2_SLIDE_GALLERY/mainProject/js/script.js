$(document).ready(function(){
    //Set Options
    var speed = 500;                 //fade speed
    var autoswitch = true;           //auto slide option
    var autoswitch_speed = 4000     // auto slide speed

    //Add initial active class
    $('.slide').first().addClass('active'); //selects first of slide class

    //Hide all sides
    $('.slide').hide();

    // show first slide
    $('.active').show();

  

    //next handler
    $('#next').on('click', nextSlide);
    //prev handler
    $('#prev').on('click', prevSlide);
    //auto slide handler
    if(autoswitch==true){
        setInterval(nextSlide,autoswitch_speed);
    }
    //autoslider off
   
   //function next slide
   function nextSlide(){
    $('.active').removeClass('active').addClass('oldActive');
    if($('.oldActive').is(':last-child')){
        $('.slide').first().addClass('active');
    }else {
        $('.oldActive').next().addClass('active');

    }
    $('.oldActive').removeClass('oldActive');
    $('.slide').fadeOut(speed);
    $('.active').fadeIn(speed); 
};
 //function prev slide 
 function prevSlide(){
        $('.active').removeClass('active').addClass('oldActive');
        if($('.oldActive').is(':first-child')){
            $('.slide').last().addClass('active');
        }else {
            $('.oldActive').prev().addClass('active');
 
        }
        $('.oldActive').removeClass('oldActive');
        $('.slide').fadeOut(speed);
        $('.active').fadeIn(speed); 
 };





});










