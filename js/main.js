
var lang = "ru"; // язык интерфейса

var Hero = {}; // Manual Runner

function INIT()
{
    $('#head1id').text(sent("header_txt"));  
    initLabfield();
    Lab.initLabyrinth();
    Lab.makeLabyrinth();
    Lab.drawHiddenLabyrinth();
    Lab.stage = NIGHT;
    Hero = new Runner();
    User.init();
    setTimeout(Lab.dawn,3000);
    typeInfoMessage(sent("in the deep"));
    $(document).keydown(keyChecker);// for Crome: not keypress, only keydown   
    
    $("#labContainer").swipe( {
    swipe:function(event, direction, distance, duration, fingerCount, fingerData) 
    {
      swipeLab(direction);  
    },
     threshold:0 //Default is 75px, set to 0 (any distance triggers swipe)
    });
    
}

//  ############################ //
//        FIELD SECTION          //
//  ############################ //

function initLabfield()
{
    var cTable = $('<table>');
    cTable.addClass("labfield");
    cTable.id = "labfield";

    for(var j = 0; j<ROWS; j++)
    { 
        var tRow = $('<tr/>');
        
        for(var i = 0; i<COLS; i++)
        {
            var tCell;
            
            var dynId = "x"+i+"y"+j;
            
            if( i==0 || i==(COLS-1) || j==0 || j==(ROWS-1) )
            {
                tCell = $("<td id="+dynId+">").text(wallBlock);
            }
            else
            {
                tCell = $("<td id="+dynId+">").text(' ');  
            }
            
            tCell.addClass("tableBlock");
            
            tRow.append(tCell);
        }

        cTable.append(tRow);
    }
    
    $("#labContainer").append(cTable);

} 

function setFieldChar(X,Y,Ch)
{
    var dynId = "x"+X+"y"+Y;
    document.getElementById(dynId).innerHTML = Ch;
}

//  ############################ //
//      TEXT PRINT SECTION       //
//  ############################ //
         
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
    
    var TYPING_DELAY = 20; // in msec
    
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

//  ############################ //
//       Keyboard section        //
//  ############################ //

function keyChecker(e)
{
    var DIR = e.keyCode-37;
    if(DIR==0){ DIR=4; }
    
    if(DIR>=1&&DIR<=4)
    {
        Hero.direction = DIR;
        STEP();
    }
}

function swipeLab(direction)
{
    var DIR;
    
    switch (direction) {
        case "up":    DIR = UP;
                      break;
        case "right": DIR = RIGHT;
                    break;
        case "down":  DIR = DOWN;
                    break;
        case "left": DIR = LEFT ;
                    break; 
        default: return false;
    }
    
    Hero.direction = DIR;
    STEP();
}  

//  ############################ //
//       Main step section       //
//  ############################ //

function STEP()
{
  if(Lab.stage != REST)
  {
    var f = Hero.step();
  }
  
  if(Lab.stage == DAY)
  {
    if(f)
      Clock.step(); 
  }
}


