
var lang = "ru";
         
function sent(str)
{
   return SENTENCES[lang][str] ? SENTENCES[lang][str] : "";
}         
         
function testWork()
{
   
   typeInfoMessage("messageBoxId",sent("in the deep"));
   
}

function typeInfoMessage(containerId,message)
{
    var TYPING_DELAY = 100; // in msec
    
    var c=message.length;
    j=0;
    
    $('#'+containerId).addClass('after_str')
    $('#'+containerId).text("");
    
    setInterval(function()
    {
        if(j<c)
        {
            $('#'+containerId).text($('#'+containerId).text()+message[j]);
            j=j+1;
        }
        else 
        {
            $('#'+containerId).removeClass('after_str');
        }
        
    },TYPING_DELAY);
}

