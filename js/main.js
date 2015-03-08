
function INIT()
{
    $('#head1id').text(sent("header_txt"));  
    initLabfield();
    Lab.initLabyrinth();
    Lab.makeLabyrinth();
    Lab.drawHiddenLabyrinth();
    Runner.Init();
    Clock.Init();
    typeInfoMessage(sent("in the deep"));
    
    $(document).keypress(keyChecker);
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
//       Keyboard section        //
//  ############################ //

function keyChecker(e)
{
    var DIR = e.keyCode-37;
    if(DIR==0){ DIR=4; }
    
    if(DIR>=1&&DIR<=4)
    {
        Runner.direction = DIR;
        STEP();
    }
}


//  ############################ //
//       Main step section       //
//  ############################ //

function STEP()
{
  Runner.step();
  Clock.step(); 
}



