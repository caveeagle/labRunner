
var Runner = {};
var underRunnerBlock;

Runner.Init = function()
{
    this.x = 56;   
    this.y = 23;   
    
    underRunnerBlock = Lab.blocks[this.x][this.y];
    Lab.blocks[this.x][this.y] = runnerBlock; 
    
    setFieldChar(this.x,this.y,runnerBlock);
}

Runner.direction = UP;
Runner.step = function() 
{
    var dX = 0;
    var dY = 0;

    switch (this.direction) {
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
    
    var chNext = Lab.blocks[this.x+dX][this.y+dY];
    
    if(chNext==wallBlock)
    {
        return false;
    }
    else
    {
      Lab.blocks[this.x][this.y] = underRunnerBlock;
                       
      this.visibleFields(false);
      
      this.x = this.x+dX;  
      this.y = this.y+dY;

      underRunnerBlock = Lab.blocks[this.x][this.y];
      
      Lab.blocks[this.x][this.y] = runnerBlock;
      
      this.visibleFields(true);

      return true;
    }
}

Runner.visibleFields = function(flag) // Открывает и закрывает туманом клетки
{
    var i,j;
    if(flag)
    {
           for( i=-1;i<2;i++)
           {
            for( j=-1;j<2;j++)
            {
                setFieldChar(this.x+i,this.y+j, Lab.blocks[this.x+i][this.y+j]);
            }
           }
    }
    else
    {
           for( i=-1;i<2;i++)
           {
            for( j=-1;j<2;j++)
            {
                if(Runner.outsideRoom(this.x+i,this.y+j))
                {
                    setFieldChar(this.x+i,this.y+j,fogBlock);
                }
            }
           }
    }
}
 
Runner.outsideRoom = function(cx,cy) // Внутри безопасной комнаты
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







 