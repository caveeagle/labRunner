
function INIT()
{
    initLabfield();
    Lab.initLabyrinth();
    Lab.makeLabyrinth();
    Runner.Init();
    Clock.Init();
    Lab.drawLabyrinth();
    typeInfoMessage(sent("in the deep")); 
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
            
            var dynId = "x"+i+"y"+j;
            
            if(i==1&&j==1)
            {
              dynId = "AAA";  
              tCell.id = dynId;
            }

                
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
//        Clock section          //
//  ############################ //

Number.prototype.pad = function(size) 
{
      var s = String(this);
      while (s.length < (size || 2)) {s = "0" + s;}
      return s;
}
    
var Clock = {};

Clock.Init = function()
{
    this.CLOCKSTEP =~~ (720/DAYSTEPS);
    
    this.hours   = 12;
    this.minutes =  0;
    
    var mStr = this.minutes.pad(2);
    
    $("#clockBoxId").text(this.hours+":"+mStr);
}

Clock.step = function()
{
    this.minutes -= this.CLOCKSTEP;

    if(this.minutes<0)
    {
        this.minutes +=  60;
        this.hours -= 1;
    }

    if(this.hours<0)
    {
        this.minutes = 0;
        this.hours = 0;
        typeInfoMessage(sent("daytime exceeded"));
    }
    
    var mStr = this.minutes.pad(2);
    var hStr = this.hours.pad(2);
 
    $("#clockBoxId").text(hStr+":"+mStr);
}


