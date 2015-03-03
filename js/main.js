
function INIT()
{
    makeLabfield();
}

function makeLabfield()
{
    for(var j = 0; j<ROWS; j++)
    { 
        var tRow = $('<tr/>');
        
        for(var i = 0; i<COLS; i++)
        {
            var tCell;
            
            if( i==0 || i==(COLS-1) || j==0 || j==(ROWS-1) )
            {
                tCell = $('<td>').text(wallBlock);
            }
            else
            {
                tCell = $('<td>').text(emptyBlock);
            }
            
            tCell.addClass("tableBlock");
                
            tRow.append(tCell);
        }

        $("#labfield").append(tRow);
    }
} 

function getFieldChar(x, y)
{
    var ind = x + y * COLS;
    
    if( x<0 || y<0 || x>=COLS || y>=ROWS )
    {
        return null;
    }
    
    return $("#labfield tr td").eq(ind).text();
}

function setFieldChar(x, y, Ch)
{
    var ind = x + y * COLS;

    if( x<0 || y<0 || x>=COLS || y>=ROWS )
    {
        return null;
    }

    $("#labfield tr td").eq(ind).text(Ch);
}

