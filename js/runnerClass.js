
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

Runner.visibleFields = function(flag) // ��������� � ��������� ������� ������
{
    var visDistance = 3;
    
    var i,j;
    if(flag)
    {
           for( i=-1;i<=1;i++)
           {
            for( j=-1;j<=1;j++)
            {
                setFieldChar(this.x+i,this.y+j, Lab.blocks[this.x+i][this.y+j]);
            }
           }
           
    switch (this.direction) {
        case UP:{
                    for(i=1;i<=visDistance;i++)
                    {
                        setFieldChar(this.x+1,this.y-i, Lab.blocks[this.x+1][this.y-i]);
                        setFieldChar(this.x-1,this.y-i, Lab.blocks[this.x-1][this.y-i]);
                        setFieldChar(this.x,this.y-i, Lab.blocks[this.x][this.y-i]);

                        if( Lab.blocks[this.x+1][this.y-i]==wallBlock &&
                            Lab.blocks[this.x-1][this.y-i]==wallBlock &&
                            Lab.blocks[this.x][this.y-i]==wallBlock ) {break;}
                    }
                    break;
                }
        case RIGHT:{
                    for(i=1;i<=visDistance;i++)
                    {
                        setFieldChar(this.x+i,this.y+1, Lab.blocks[this.x+i][this.y+1]);
                        setFieldChar(this.x+i,this.y-1, Lab.blocks[this.x+i][this.y-1]);
                        setFieldChar(this.x+i,this.y, Lab.blocks[this.x+i][this.y]);

                        if( Lab.blocks[this.x+i][this.y+1]==wallBlock &&
                            Lab.blocks[this.x+i][this.y-1]==wallBlock &&
                            Lab.blocks[this.x+i][this.y]==wallBlock ) {break;}
                        
                    }
                    break;
                }
        case DOWN:{
                    for(i=1;i<=visDistance;i++)
                    {
                        setFieldChar(this.x+1,this.y+i, Lab.blocks[this.x+1][this.y+i]);
                        setFieldChar(this.x-1,this.y+i, Lab.blocks[this.x-1][this.y+i]);
                        setFieldChar(this.x,this.y+i, Lab.blocks[this.x][this.y+i]);

                        if( Lab.blocks[this.x+1][this.y+i]==wallBlock &&
                            Lab.blocks[this.x-1][this.y+i]==wallBlock &&
                            Lab.blocks[this.x][this.y+i]==wallBlock ) {break;}
                    }
                    break;
                }
        case LEFT:{
                    for(i=1;i<=visDistance;i++)
                    {
                        setFieldChar(this.x-i,this.y+1, Lab.blocks[this.x-i][this.y+1]);
                        setFieldChar(this.x-i,this.y-1, Lab.blocks[this.x-i][this.y-1]);
                        setFieldChar(this.x-i,this.y, Lab.blocks[this.x-i][this.y]);
 
                        if( Lab.blocks[this.x-i][this.y+1]==wallBlock &&
                            Lab.blocks[this.x-i][this.y-1]==wallBlock &&
                            Lab.blocks[this.x-i][this.y]==wallBlock ) {break;}
                        
                   }
                    break;
                }
        }// End of switch        
    }
    else
    {
           for( i=-1;i<=1;i++)
           {
            for( j=-visDistance;j<=visDistance;j++)
            {
                if(Runner.outsideRoom(this.x+i,this.y+j))
                {
                    setFieldChar(this.x+i,this.y+j,fogBlock);
                }
            }
           }
           for( j=-1;j<=1;j++)
           {
            for( i=-visDistance;i<=visDistance;i++)
            {
                if(Runner.outsideRoom(this.x+i,this.y+j))
                {
                    setFieldChar(this.x+i,this.y+j,fogBlock);
                }
            }
           }
    }
}
 
Runner.outsideRoom = function(cx,cy) // ������ ���������� �������
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







 