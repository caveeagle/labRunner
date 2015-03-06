
var Runner = {};
var underRunnerBlock;

Runner.Init = function()
{
    this.x = 56;   
    this.y = 23;   
    
    underRunnerBlock = Lab.blocks[this.x][this.y];
    Lab.blocks[this.x][this.y] = runnerBlock;
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
      setFieldChar(this.x,this.y,underRunnerBlock);
      
      this.x = this.x+dX;  
      this.y = this.y+dY;

      underRunnerBlock = Lab.blocks[this.x][this.y];
      Lab.blocks[this.x][this.y] = runnerBlock;
      setFieldChar(this.x,this.y,runnerBlock);
      
      return true;
    }
}




function testStep()
{
  var possibility;
  
  possibility = Runner.step();
  
  if(possibility==false)
  {

    switch (Runner.direction) {
        case UP:    Runner.direction = DOWN;
                    break;
        case DOWN:  Runner.direction = UP;
                    break;
    }        

    possibility = Runner.step();
  }
  
  Clock.step(); 
}


