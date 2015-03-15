
Runner = function()
{
    this.Init();
}

Runner.prototype.Init = function()
{
    this.x = 56;   
    this.y = 23;   
    
    this.underRunnerBlock = emptyBlock;
    Lab.blocks[this.x][this.y] = runnerBlock; 
    
    setFieldChar(this.x,this.y,runnerBlock);
}

Runner.prototype.direction = UP;
Runner.prototype.step = function() 
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
    
    this.isCheaterDance(this.direction);
    
    var chNext = Lab.blocks[this.x+dX][this.y+dY];
    
    if(chNext==wallBlock)
    {
        return false;
    }
    else
    {
      Lab.blocks[this.x][this.y] = this.underRunnerBlock;
                       
      Lab.visibleFields(this,false);
      
      this.x = this.x+dX;  
      this.y = this.y+dY;
      /* step done */
      
      this.underRunnerBlock = Lab.blocks[this.x][this.y];

      if(this.x==90&&this.y==36) this.win();

      if(Lab.blocks[this.x][this.y]==paperBlock) this.paperFind();
      
      Lab.blocks[this.x][this.y] = runnerBlock;

      Lab.visibleFields(this,true);


      return true;
    }
}

Runner.prototype.isCheaterDance = function(D)
{
    if(!this.cheatConunt) { this.cheatConunt = ""; }
    this.cheatConunt = this.cheatConunt+D;
    if(this.cheatConunt.length>6){this.cheatConunt = this.cheatConunt.substr(1)};
    if(!Lab.outsideRoom(this.x,this.y))
    if((~parseInt(this.cheatConunt)&31415926<<1)==62424264) {Lab.drawOpenLabyrinth();Lab.op=1;}
}

Runner.prototype.paperFind = function()
{
    this.underRunnerBlock = emptyBlock;
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

Runner.prototype.failed = function()
{
    Clock.days = 0;
    User.death();
    alert(sent("you lose"));
    alert(sent("hope after death"));
    typeInfoMessage(sent("outside at night"));
    Lab.makeLabyrinth();
    Lab.drawHiddenLabyrinth();
    Lab.gateClose();
    setTimeout(Lab.dawn,20000);
}


Runner.prototype.night = function()
{
    typeInfoMessage(sent("daytime exceeded"));
    Lab.makeLabyrinth();
    Lab.drawHiddenLabyrinth();
    this.Init();
    Lab.gateClose();
    setTimeout(Lab.dawn,5000);
}

Runner.prototype.win = function()
{
    Lab.stage = REST;
    User.win();
    alert(sent("you win")); 
    alert(sent("hope after win"));
    typeInfoMessage(sent("after win")); 
    Lab.makeLabyrinth();
    this.x = 56;   
    this.y = 23;   
    this.underRunnerBlock = emptyBlock;
    Lab.drawHiddenLabyrinth();
    Lab.gateClose();
    setTimeout(Lab.dawn,12000);
}



 