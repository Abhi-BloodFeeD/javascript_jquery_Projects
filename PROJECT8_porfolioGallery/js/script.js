$(document).ready(function(){
        $('nav a').on('click',function(){
            //Current class assignment
            $('nav li.current').removeClass('current');
            $(this).parent().addClass('current');      
            

            //Set Heading Text
            $('h1#heading').text($(this).text());

            //get and filter link text4
            var category = $(this).text().toLowerCase();
                           
            //remove hidden class if 'all-projects' is selected 

            if(category == 'all'){
                $('ul#gallery li:hidden').fadeIn('slow').removeClass('hidden');
            }else{
                $('ul#gallery li').each(function(){
                    if(!$(this).hasClass(category)){
                        $(this).hide().addClass('hidden');
                     }else {
                         $(this).fadeIn('slow').removeClass('hidden');

                     }
                
                });
            }           
        //Stop link behaviour
        return false;
       
        });
});