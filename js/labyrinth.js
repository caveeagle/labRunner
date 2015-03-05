
var Lab = new Object();

Lab.blocks = new Array(); 


function generateLab()
{ 
    Lab.makeLabyrinth();
    Lab.drawLabyrinth();
    typeInfoMessage("messageBoxId",sent("lab created"));
}


Lab.initLabyrinth = function()
{
    for(i=0; i<COLS; i++)
    {
        Lab.blocks[i] = new Array();
    }
}
 
Lab.clearLabyrinth = function()
{
    for (j = 0; j < ROWS; j++)
    {
        for (i = 0; i < COLS; i++)
        {
           this.blocks[i][j] = emptyBlock;
        }
    }

    for(j = 0; j < ROWS; j++)
    {
            this.blocks[0][j] = wallBlock;
            this.blocks[COLS-1][j] = wallBlock;
    }
    for(i = 0; i < COLS; i++)
    {
            this.blocks[i][0] = wallBlock;
            this.blocks[i][ROWS-1] = wallBlock;
    }
    for(i = mainRoomXmin+1; i <= mainRoomXmax-1; i++)
    {
        this.blocks[i][mainRoomYmin] = wallBlock;
        this.blocks[i][mainRoomYmax] = wallBlock;
    }
    for(j = mainRoomYmin+1; j <= mainRoomYmax-1; j++)
    {
        this.blocks[mainRoomXmin][j] = wallBlock;
        this.blocks[mainRoomXmax][j] = wallBlock;
    } 
    
} 
 
Lab.drawLabyrinth = function()
{
    for (j = 0; j < ROWS; j++)
    {
        for (i = 0; i < COLS; i++)
        {
           setFieldChar(i,j, this.blocks[i][j] );
        }
    }
}

/**
*   Draw labyrinth lines
*       X точка начала линии
*       Y точка начала линии
*       D направление линии ( 1: вверх, 2: вправо, 3:вниз, 4:влево )
*/
Lab.makeBlockLine = function(X,Y,D)
{ 
    var x0 = X;
    var y0 = Y;

    var dX = 0;
    var dY = 0;

    switch (D) {
        case 1:  dY = -1 ;
                 break;
        case 2:  dX = 1 ;
                 break;
        case 3:  dY = 1 ;
                 break;
        case 4:  dX = -1 ;
                 break;
        default: alert("Error in direction (function makeBlockLine)");
                 return;
    }        
    
    var x1, y1, x2, y2;
    
    var maxLineLength = 20;
    
    var lineLength = 0;
    
    while(true)
    {
        lineLength++;
        
        if(lineLength > maxLineLength) break;
        
        x1 = x0+dX;
        y1 = y0+dY;
        
        x2 = x1+dX;
        y2 = y1+dY;
        
        var ch1 = this.blocks[x1][y1];

        if( ch1!=emptyBlock )
        {
            this.blocks[x0][y0] = wallBlock;
            break;
        }

        var ch2 = this.blocks[x2][y2];

        if( ch1==emptyBlock && ch2==emptyBlock )
        {
            this.blocks[x0][y0] = wallBlock;
            x0 = x0+dX;
            y0 = y0+dY;
            continue;
        }
        
        if( ch1==emptyBlock && ch2!=emptyBlock )
        {
            this.blocks[x0][y0] = wallBlock;
            
            if( this.isOuterWall((x0+2*dX), (y0+2*dY)) )
            {
                this.blocks[x0][y0] = wallBlock;
                x0 = x0+dX;
                y0 = y0+dY;
                continue;
            }
            else
            {
                this.blocks[x0][y0] = wallBlock;
                break;
            }
        }

        

    }
} 


Lab.isOuterWall = function(x,y)
{
    return ( x<=0 || y<=0 || x>=COLS-1 || y>=ROWS-1 )
}


var oddPointsInLab = [];

Lab.markOddPoints = function()
{
    /** Find Odd Points */
    var i,j;
    for (j = 2; j < ROWS-2; j+=2)
    {
        for (i = 2; i < COLS-2; i+=2)
        {
          if( j>=mainRoomYmin-1 && j<=mainRoomYmax+1 && i>=mainRoomXmin-1 && i<=mainRoomXmax+1 ) continue;
          
          if( this.blocks[i][j]==' ' )
          { 
            var l = oddPointsInLab.length;
            oddPointsInLab[l] = {};
            oddPointsInLab[l]['x'] = i;
            oddPointsInLab[l]['y'] = j;
          }
        }
    }
    
    /* Randomize Odd Points */
    for (i = 0; i < oddPointsInLab.length; i++)
    {
        var j = Math.random()*(i+1);
        j = j^0; // округление битовым оператором
        
        var tX = oddPointsInLab[i]['x'];
        var tY = oddPointsInLab[i]['y'];
        oddPointsInLab[i]['x'] = oddPointsInLab[j]['x'];
        oddPointsInLab[i]['y'] = oddPointsInLab[j]['y'];
        oddPointsInLab[j]['x'] = tX;
        oddPointsInLab[j]['y'] = tY;
    } 
} 


Lab.strengthenWalls = function()
{
    // Strengthen walls
    var i,j;
    
    // Correct main Room walls 
    for(i = mainRoomXmin+1; i <= mainRoomXmax-1; i++)
    {
        this.blocks[i][mainRoomYmin] = emptyBlock;
        this.blocks[i][mainRoomYmax] = emptyBlock;
    }
    for(j = mainRoomYmin+1; j <= mainRoomYmax-1; j++)
    {
        this.blocks[mainRoomXmin][j] = emptyBlock;
        this.blocks[mainRoomXmax][j] = emptyBlock;
    }
    for(i = mainRoomXmin; i <= mainRoomXmax; i++)
    {
        this.blocks[i][mainRoomYmin] = wallBlock;
        this.blocks[i][mainRoomYmax] = wallBlock;
    }
    for(j = mainRoomYmin; j <= mainRoomYmax; j++)
    {
        this.blocks[mainRoomXmin][j] = wallBlock;
        this.blocks[mainRoomXmax][j] = wallBlock;
    }
}


Lab.makeLabyrinth = function()
{
        Lab.clearLabyrinth();
        Lab.markOddPoints();
        
        var i,j;
        for (i=0; i<oddPointsInLab.length; i++) 
        {
            var D = 1+Math.random()*4;
            D = D^0; // округление
            var x = oddPointsInLab[i]['x'];
            var y = oddPointsInLab[i]['y'];
              
            this.makeBlockLine(x,y,D);
        }
        
        Lab.strengthenWalls();
        
        this.blocks[56][mainRoomYmin] = emptyBlock; // Door from Main Room
        
        for (i = 86; i < 96; i++) // Make hidden room
        {
            for ( j = 33; j < 37; j++)
            {
               this.blocks[i][j] = emptyBlock;
            }
        }
        
        this.blocks[5][4] = wellBlock;
        this.blocks[44][14] = wellBlock;
}



