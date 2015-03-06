
var lang = "ru";
         
function sent(str)
{
   return SENTENCES[lang][str] ? SENTENCES[lang][str] : "";
}         
         
var textIntervalTimerID;
function typeInfoMessage(message)
{
    var containerId = "messageBoxId"; // DEFAULT VALUE
    
    if(arguments[1])
    {
        containerId = arguments[1];
    }
    
    var TYPING_DELAY = 100; // in msec
    
    var STRING = message;
    
    var c=STRING.length;
    var j=0;
    
    
    $('#'+containerId).addClass('after_str');
    $('#'+containerId).text("");
    
    if(textIntervalTimerID)
    {
        clearInterval(textIntervalTimerID);
    }
    
    textIntervalTimerID = setInterval(function()
    {
        if(j<c)
        {
            $('#'+containerId).text($('#'+containerId).text()+STRING[j]);
            j=j+1;
        }
        else 
        {
            $('#'+containerId).removeClass('after_str');
            clearInterval(textIntervalTimerID);
        }
        
    },TYPING_DELAY);
}

