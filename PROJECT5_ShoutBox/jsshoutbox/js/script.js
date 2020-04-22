$(document).ready(function(){
    $('#submit').on('click',function(){
        var name= $('#name').val();
        var shout= $('#shout').val();
        var date= getDate();
        var dateString = 'name=' + name + '&shout=' + shout 
        + '&date=' + date ; 
        

        if( name == "" || shout == ""){
            alert('Please fill your name and shout');
        }
        else{
           $.ajax({
               type:'POST',
               url:"../jsshoutbox/shoutbox.php",
               date:dateString,
               cache:false,
               success:function(html){
                   $('#shouts ul').prepend(html);                   
               }
           });
        }
        return false;
    });
});

//formatn date like MYSQL date

function getDate(){
    var date;
    date = new Date();
    date = date.getUTCFullYear()+'-'+
    ('00'+(date.getUTCMonth()+1)).slice(-2)+'-'+
    ('00'+(date.getUTCDate())).slice(-2)+'-'+
    ('00'+(date.getUTCHours())).slice(-2)+':'+
    ('00'+(date.getUTCMinutes())).slice(-2)+':'+
    ('00'+(date.getUTCSeconds())).slice(-2);

    return date;

}