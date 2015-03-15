
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
    //console.info("x: "+this.x+" y:"+this.y);
    
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
    
    Runner.isCheaterDance(Runner.direction);
    
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
      /* step done */
      
      underRunnerBlock = Lab.blocks[this.x][this.y];

      if(this.x==90&&this.y==36) Lab.win();

      if(Lab.blocks[this.x][this.y]==paperBlock) Runner.paperFind();
      
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
                        if(this.y-i<0){break;}
                        
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
                        if(this.x+i>=COLS){break;}
                        
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
                        if(this.y+i>=ROWS){break;}
                        
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
                        if(this.x-i<0){break;}
                        
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
           if(Lab.op){return;}
           for( i=-1;i<=1;i++)
           {
            for( j=-visDistance;j<=visDistance;j++)
            {
                if(Lab.outsideRoom(this.x+i,this.y+j))
                {
                    if( this.y+j<0 || this.y+j>=ROWS ) {break;}
                    setFieldChar(this.x+i,this.y+j,fogBlock);
                }
            }
           }
           for( j=-1;j<=1;j++)
           {
            for( i=-visDistance;i<=visDistance;i++)
            {
                if(Lab.outsideRoom(this.x+i,this.y+j))
                {
                    if( this.x+i<0 || this.x+i>=COLS ) {break;}
                    setFieldChar(this.x+i,this.y+j,fogBlock);
                }
            }
           }
    }
}
 

Runner.isCheaterDance = function(D)
{
    if(!this.cheatConunt) { this.cheatConunt = ""; }
    this.cheatConunt = this.cheatConunt+D;
    if(this.cheatConunt.length>6){this.cheatConunt = this.cheatConunt.substr(1)};
    if(!Lab.outsideRoom(this.x,this.y))
    if((~parseInt(this.cheatConunt)&31415926<<1)==62424264) {Lab.drawOpenLabyrinth();Lab.op=1;}
}

Runner.paperFind = function()
{
    underRunnerBlock = emptyBlock;
    alert(sent("paper find"));
   
    var Rnd = 1+Math.random()*3;
    Rnd = Rnd^0;
    
    
    
    if(Rnd==1)
    {
      alert(sent("lab map find alert"));
      Lab.drawOpenLabyrinth();Lab.op=1;  
      typeInfoMessage(sent("lab map find"));    
    }
    if(Rnd==2)
    {
      alert(sent("Exit exists alert"));
      typeInfoMessage(sent("Exit exists"));    
    }
    if(Rnd==3)
    {
      alert(sent("hint alert"));
      typeInfoMessage(sent("hint for find"));    
    }
}



 