
var Runner = {};

Runner.Init = function()
{
    this.x = 56;   
    this.y = 23;   
    
    Runner.underRunnerBlock = Lab.blocks[this.x][this.y];
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
      Lab.blocks[this.x][this.y] = Runner.underRunnerBlock;
                       
      Lab.visibleFields(Runner,false);
      
      this.x = this.x+dX;  
      this.y = this.y+dY;
      /* step done */
      
      Runner.underRunnerBlock = Lab.blocks[this.x][this.y];

      if(this.x==90&&this.y==36) Runner.win();

      if(Lab.blocks[this.x][this.y]==paperBlock) Runner.paperFind();
      
      Lab.blocks[this.x][this.y] = runnerBlock;

      Lab.visibleFields(Runner,true);


      return true;
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
    Runner.underRunnerBlock = emptyBlock;
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

Runner.failed = function()
{
    Hero.death();
    alert(sent("you lose"));
    alert(sent("hope after death"));
    typeInfoMessage(sent("outside at night"));
    Lab.makeLabyrinth();
    Lab.drawHiddenLabyrinth();
    Lab.gateClose();
    setTimeout(Lab.dawn,20000);
}


Runner.night = function()
{
    typeInfoMessage(sent("daytime exceeded"));
    Lab.makeLabyrinth();
    Lab.drawHiddenLabyrinth();
    Runner.Init();
    Lab.gateClose();
    setTimeout(Lab.dawn,5000);
}

Runner.win = function()
{
    Lab.stage = REST;
    Hero.win();
    alert(sent("you win")); 
    alert(sent("hope after win"));
    typeInfoMessage(sent("after win"));
    Lab.makeLabyrinth();
    Lab.drawHiddenLabyrinth();
    Lab.gateClose();
    setTimeout(Lab.dawn,12000);
}



 