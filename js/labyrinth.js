
Labyrinth = function()
{
    /* labyrinth blocks */
    this.blocks = new Array();
    
    /* =========================== */

    var i, j;
    /*  Init 2D array  */
    for(i=0; i<COLS; i++)
    {
        this.blocks[i] = new Array();
    }

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
        this.blockSet(i,mainRoomYmin,wallBlock);
        this.blockSet(i,mainRoomYmax,wallBlock);
    }
    for(j = mainRoomYmin+1; j <= mainRoomYmax-1; j++)
    {
        this.blockSet(mainRoomXmin,j,wallBlock);
        this.blockSet(mainRoomXmax,j,wallBlock);
    } 
} 

/**
*   Set labyrinth block, both in Object and on the html page
*   C: block char
*/
Labyrinth.prototype.blockSet = function(X,Y,C)
{
        this.blocks[X][Y] = C;
        setFieldChar(X,Y,C);
}

/**
*   Draw labyrinth lines
*       X точка начала линии
*       Y точка начала линии
*       D направление линии ( 1: вверх, 2: вправо, 3:вниз, 4:влево )
*/
Labyrinth.prototype.drawBlockLine = function(X,Y,D)
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
        default: alert("Error in drawBlockLine");
                 return;
    }        
    
    var x1, y1, x2, y2;
    
    while(true)
    {
        x1 = x0+dX;
        y1 = y0+dY;
        
        x2 = x1+dX;
        y2 = y1+dY;
        
        var ch1 = this.blocks[x1][y1];
        
        if( ch1==' ' )
        {
          this.blockSet(x0,y0,wallBlock)
        }

        var ch2 = this.blocks[x2][y2];

        if( ch2==' ' && ch1==' ' )
        {
            x0 = x0+dX;
            y0 = y0+dY;
        }
        else
        {
            return;
        }
    }
} 

var oddPointsInLab = [];

Labyrinth.prototype.markOddPoints = function()
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


Labyrinth.prototype.stageNum = 20; // CONST

Labyrinth.prototype.makeLabyrinth = function(stage)
{
      for (var i=0; i<oddPointsInLab.length; i++) 
      {
        if( i % (this.stageNum) != stage ) continue;
        
        var D = 1+Math.random()*4;
        D = D^0; // округление
        var x = oddPointsInLab[i]['x'];
        var y = oddPointsInLab[i]['y'];
          
        this.drawBlockLine(x,y,D);
       }







}

var MBOX;

function main()
{
    Lab = new Labyrinth();

    Lab.markOddPoints();
    
    MBOX = document.getElementById("messageBox");
     
	MBOX.innerHTML = "ѕожалуйста, подождите...";

   for( var iter=0; iter<Lab.stageNum; iter++ )
   { 
    A2(iter);
   }
	
   
}


function A2(iter)
{
	        MBOX.innerHTML = "—тади€ "+iter;
	        Lab.makeLabyrinth(iter);
}

