
function INIT()
{
    initLabfield();
    Lab.initLabyrinth();
    typeInfoMessage("messageBoxId",sent("in the deep")); 
}

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

