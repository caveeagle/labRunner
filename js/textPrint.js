
var lang = "ru";
         
function sent(str)
{
   return SENTENCES[lang][str] ? SENTENCES[lang][str] : "";
}         
         
function testWork()
{
    $("#messageBoxId").text( sent("in the deep") );
}
