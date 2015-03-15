
var Lab = new Object();

Lab.blocks = new Array(); 


function generateLab()
{ 
    Lab.makeLabyrinth();
    Clock.Init();
    Lab.drawHiddenLabyrinth();
    Hero.Init();
    typeInfoMessage(sent("lab created"));
}


Lab.initLabyrinth = function()
{
    for(i=0; i<COLS; i++)
    {
        this.blocks[i] = new Array();
    }
    
    this.stage = NIGHT;
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
    Lab.op=0;
} 
 
Lab.drawOpenLabyrinth = function()
{
    for (j = 0; j < ROWS; j++)
    {
        for (i = 0; i < COLS; i++)
        {
           setFieldChar(i,j, this.blocks[i][j] );
        }
    }
}

Lab.makeBlockLine = function(X,Y,DIR)
{ 
    var x0 = X;
    var y0 = Y;

    var dX = 0;
    var dY = 0;

    switch (DIR) {
        case UP:    dY = -1 ;
                    break;
        case RIGHT: dX = 1 ;
                    break;
        case DOWN:  dY = 1 ;
                    break;
        case LEFT:  dX = -1 ;
                    break;
        default:    alert("Error in step direction");
                    return false;
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
        
        for (i = 86; i < 96; i++) // Make hidden room
        {
            for ( j = 33; j < 37; j++)
            {
               this.blocks[i][j] = emptyBlock;
            }
        }
        
        // Add papers block 
        var RX,RY;
        while(true)
        {
            RX = 32+Math.random()*12; //x [32,44) 
            RX = RX^0; // округление
            RY = 12+Math.random()*8; //x [12,20) 
            RY = RY^0; // округление            
            
            if( this.blocks[RX][RY] == emptyBlock ) 
            {
                this.blocks[RX][RY] = paperBlock;
                break;
            }
        }
        
        
}

Lab.drawHiddenLabyrinth = function()
{
    for (j = 0; j < ROWS; j++)
    {
        for (i = 0; i < COLS; i++)
        {
           var Ch = fogBlock; // by default
           
           if( i==0 || j==0 || i==COLS-1 || j==ROWS-1 )
           {
                Ch = wallBlock;
           }
           
           if( i==mainRoomXmin && ( j>=mainRoomYmin && j<=mainRoomYmax ) )
           {
                Ch = wallBlock;
           }
           if( i==mainRoomXmax && ( j>=mainRoomYmin && j<=mainRoomYmax ) )
           {
                Ch = wallBlock;
           }
           if(  ( i>=mainRoomXmin && i<=mainRoomXmax ) && j==mainRoomYmin )
           {
                Ch = wallBlock;
           }
           if(  ( i>=mainRoomXmin && i<=mainRoomXmax ) && j==mainRoomYmax )
           {
                Ch = wallBlock;
           }
           if(  i>mainRoomXmin && i<mainRoomXmax && j>mainRoomYmin && j<mainRoomYmax )
           {
                Ch = emptyBlock;
           }
           
           
           setFieldChar(i,j, Ch );
        }
    }
}

Lab.visibleFields = function(thisRunner,flag) // Открывает и закрывает туманом клетки
{
    var visDistance = 3;
    
    var i,j;
    if(flag)
    {
           for( i=-1;i<=1;i++)
           {
            for( j=-1;j<=1;j++)
            {
                setFieldChar(thisRunner.x+i,thisRunner.y+j, Lab.blocks[thisRunner.x+i][thisRunner.y+j]);
            }
           }
           
    switch (thisRunner.direction) {
        case UP:{
                    for(i=1;i<=visDistance;i++)
                    {
                        if(thisRunner.y-i<0){break;}
                        
                        setFieldChar(thisRunner.x+1,thisRunner.y-i, Lab.blocks[thisRunner.x+1][thisRunner.y-i]);
                        setFieldChar(thisRunner.x-1,thisRunner.y-i, Lab.blocks[thisRunner.x-1][thisRunner.y-i]);
                        setFieldChar(thisRunner.x,thisRunner.y-i, Lab.blocks[thisRunner.x][thisRunner.y-i]);

                        if( Lab.blocks[thisRunner.x+1][thisRunner.y-i]==wallBlock &&
                            Lab.blocks[thisRunner.x-1][thisRunner.y-i]==wallBlock &&
                            Lab.blocks[thisRunner.x][thisRunner.y-i]==wallBlock ) {break;}
                    }
                    break;
                }
        case RIGHT:{
                    for(i=1;i<=visDistance;i++)
                    {
                        if(thisRunner.x+i>=COLS){break;}
                        
                        setFieldChar(thisRunner.x+i,thisRunner.y+1, Lab.blocks[thisRunner.x+i][thisRunner.y+1]);
                        setFieldChar(thisRunner.x+i,thisRunner.y-1, Lab.blocks[thisRunner.x+i][thisRunner.y-1]);
                        setFieldChar(thisRunner.x+i,thisRunner.y, Lab.blocks[thisRunner.x+i][thisRunner.y]);

                        if( Lab.blocks[thisRunner.x+i][thisRunner.y+1]==wallBlock &&
                            Lab.blocks[thisRunner.x+i][thisRunner.y-1]==wallBlock &&
                            Lab.blocks[thisRunner.x+i][thisRunner.y]==wallBlock ) {break;}
                        
                    }
                    break;
                }
        case DOWN:{
                    for(i=1;i<=visDistance;i++)
                    {
                        if(thisRunner.y+i>=ROWS){break;}
                        
                        setFieldChar(thisRunner.x+1,thisRunner.y+i, Lab.blocks[thisRunner.x+1][thisRunner.y+i]);
                        setFieldChar(thisRunner.x-1,thisRunner.y+i, Lab.blocks[thisRunner.x-1][thisRunner.y+i]);
                        setFieldChar(thisRunner.x,thisRunner.y+i, Lab.blocks[thisRunner.x][thisRunner.y+i]);

                        if( Lab.blocks[thisRunner.x+1][thisRunner.y+i]==wallBlock &&
                            Lab.blocks[thisRunner.x-1][thisRunner.y+i]==wallBlock &&
                            Lab.blocks[thisRunner.x][thisRunner.y+i]==wallBlock ) {break;}
                    }
                    break;
                }
        case LEFT:{
                    for(i=1;i<=visDistance;i++)
                    {
                        if(thisRunner.x-i<0){break;}
                        
                        setFieldChar(thisRunner.x-i,thisRunner.y+1, Lab.blocks[thisRunner.x-i][thisRunner.y+1]);
                        setFieldChar(thisRunner.x-i,thisRunner.y-1, Lab.blocks[thisRunner.x-i][thisRunner.y-1]);
                        setFieldChar(thisRunner.x-i,thisRunner.y, Lab.blocks[thisRunner.x-i][thisRunner.y]);
 
                        if( Lab.blocks[thisRunner.x-i][thisRunner.y+1]==wallBlock &&
                            Lab.blocks[thisRunner.x-i][thisRunner.y-1]==wallBlock &&
                            Lab.blocks[thisRunner.x-i][thisRunner.y]==wallBlock ) {break;}
                        
                   }
                    break;
                }
        }// End of switch        
    }
    else
    {
           if(Lab.op){return;}
           for( i=-1;i<=1;i++)
           {
            for( j=-visDistance;j<=visDistance;j++)
            {
                if(Lab.outsideRoom(thisRunner.x+i,thisRunner.y+j))
                {
                    if( thisRunner.y+j<0 || thisRunner.y+j>=ROWS ) {break;}
                    setFieldChar(thisRunner.x+i,thisRunner.y+j,fogBlock);
                }
            }
           }
           for( j=-1;j<=1;j++)
           {
            for( i=-visDistance;i<=visDistance;i++)
            {
                if(Lab.outsideRoom(thisRunner.x+i,thisRunner.y+j))
                {
                    if( thisRunner.x+i<0 || thisRunner.x+i>=COLS ) {break;}
                    setFieldChar(thisRunner.x+i,thisRunner.y+j,fogBlock);
                }
            }
           }
    }
}
 
Lab.outsideRoom = function(cx,cy) // Внутри безопасной комнаты
{
    if( cx > mainRoomXmin-1 && cx < mainRoomXmax+1 &&
        cy > mainRoomYmin-1 && cy < mainRoomYmax+1 )
        {
            return false;
        }
    else
        {
            return true;
        }
}

Lab.daytimeExceeded = function()
{
   if(Lab.outsideRoom(Hero.x,Hero.y)||(Hero.x==gateX&&Hero.y==gateY))
   {
        Lab.stage = REST;
        Hero.failed();
   }
   else
   {
        Lab.stage = NIGHT;
        Hero.night();
   } 
}


Lab.dawn = function()
{
    if(Lab.stage == REST)
    {
        Hero.Init();
    }
    Lab.stage = DAY;
    Clock.days++ ;
    Clock.Init();  
    User.saveStats(); // save days count
    Lab.gateOpen();
    typeInfoMessage(sent("lab created"));
}

Lab.gateClose = function()
{
    this.blocks[gateX][gateY] = wallBlock;
    setFieldChar(gateX,gateY, wallBlock);
}

Lab.gateOpen = function()
{
    this.blocks[gateX][gateY] = emptyBlock;
    setFieldChar(gateX,gateY, emptyBlock);
}

