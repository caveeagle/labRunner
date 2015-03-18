
Rob.AutoInit  = function()
{
    /* ��������� */ 
} 

Rob.stepnum = 0;

Rob.autostep = function()
{
    this.stepnum++;
    if(this.stepnum>300)
    {
        alert("STOP");
        return false;
    }
    
   if(!Lab.outsideRoom(this.x,this.y))
   {
        this.direction == UP;
        this.step();
        return true;    
   }
   
   if(this.x==wellX && this.y==wellY)
   {
        alert("WELL");
        return false;
   }
   
    /* Algorythm begin */

    // ���������� ������ ������������ �����������
    var DirArray = [LEFT,UP,DOWN,RIGHT];

    var f=0; // ���������� ��������� ������
    if( Lab.blocks[this.x-1][this.y]!=wallBlock ){f++};
    if( Lab.blocks[this.x][this.y-1]!=wallBlock ){f++};
    if( Lab.blocks[this.x+1][this.y]!=wallBlock ){f++};
    if( Lab.blocks[this.x][this.y+1]!=wallBlock ){f++};
    
    console.assert(f>0); // ���� ������-�� �� ������
    
    if(f==1)
    { // �� � ������, ��������������� 
      this.direction = invertDirection(this.direction);
      this.step();
      return true; 
    }

    if(f==2)
    { // �� � ���������, ���������� ��������
      var p = this.step();
      if(!p)
      { // ������� ���������
         var currentDirection = this.direction;
         
         for(var D in DirArray)
         {
            if(DirArray[D]!=currentDirection)
            {
               this.direction = DirArray[D];
               p = this.step();
               if(p){break;}
            }
         }
         console.assert(p); // ���� ���� ����������� ������ �������
      }
      return true; 
    }

    if(f>2)
    { // ����� �������: �� �� ��������
      
          if(this.freeCrossroad())
          { // ������ ��������, �� ��� �������
            Rob.setCrossroadArrow(invertDirection(this.direction),-1);
            
            // ���������� ����������� � ������� ��������������
             var currentDirection = this.direction;
             
             for(var D in DirArray)
             {
                if(DirArray[D]!=currentDirection)
                {
                    var p = this.stepPoss(DirArray[D]);
                    if(p)
                    {
                        this.direction = DirArray[D];
                        Rob.setCrossroadArrow(this.direction,1);
                        this.step();
                        break;
                    }
                }
             }
             
          }// ����� ������� if
      
          this.step();// ������ �������, ���� ����� ������
      
      
      
        
       
    } // ����� ��������
    
};  

Rob.freeCrossroad = function()
{
    var c=0;
    for(var i=1;i<=4;i++)
    {
        if(this.getCrossroadArrow(i)!==0){c++;}
    }
    if(c==0)
    {
        return true;
    }
    else
    {
        return false;
    }
}

Rob.getCrossroadArrow = function(D)
{
    var R = 0; //  -1: ��������; 1:���������; 
    
    var B;    
    if(D==UP)
    {
      B = Lab.blocks[this.x][this.y-1];
      if(B==upArBlock){R=1};
      if(B==downArBlock){R=-1};
    }
    if(D==DOWN)
    {
      B = Lab.blocks[this.x][this.y+1];  
      if(B==downArBlock){R=1};
      if(B==upArBlock){R=-1};
    }
    if(D==RIGHT)
    {
      B = Lab.blocks[this.x+1][this.y];  
      if(B==rightArBlock){R=1};
      if(B==leftArBlock){R=-1};
    }
    if(D==LEFT)
    {
      B = Lab.blocks[this.x-1][this.y];  
      if(B==leftArBlock){R=1};
      if(B==rightArBlock){R=-1};
    }
    
    return R;
}

Rob.setCrossroadArrow = function(D,ARR)
{   
    //  ARR:   -1: ��������; 1:���������; 
    if(  D<1 || D>4 || ( ARR!=1 && ARR != -1 )  )
    {
        console.assert(false);
        return false;
    }
        
    var B;    
    if(D==UP)
    {
          B = Lab.blocks[this.x][this.y-1];
          if(B!=emptyBlock)
          {
            console.assert(false);
            return false;
          }
          if(ARR==1)
          {
            Lab.blocks[this.x][this.y-1] = upArBlock;
          }
          if(ARR==-1)
          {
            Lab.blocks[this.x][this.y-1] = downArBlock;
          }
    }

    if(D==DOWN)
    {
          B = Lab.blocks[this.x][this.y+1];
          if(B!=emptyBlock)
          {
            console.assert(false);
            return false;
          }
          if(ARR==1)
          {
            Lab.blocks[this.x][this.y+1] = downArBlock;
          }
          if(ARR==-1)
          {
            Lab.blocks[this.x][this.y+1] = upArBlock;
          }
    }

    if(D==RIGHT)
    {
          B = Lab.blocks[this.x+1][this.y];
          if(B!=emptyBlock)
          {
            console.assert(false);
            return false;
          }
          if(ARR==1)
          {
            Lab.blocks[this.x+1][this.y] = rigthArBlock;
          }
          if(ARR==-1)
          {
            Lab.blocks[this.x+1][this.y] = leftArBlock;
          }
    }

    if(D==LEFT)
    {
          B = Lab.blocks[this.x-1][this.y];
          if(B!=emptyBlock)
          {
            console.assert(false);
            return false;
          }
          if(ARR==1)
          {
            Lab.blocks[this.x-1][this.y] = leftArBlock;
          }
          if(ARR==-1)
          {
            Lab.blocks[this.x-1][this.y] = rigthArBlock;
          }
    }
    
}

