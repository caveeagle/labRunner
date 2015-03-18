
Rob.AutoInit  = function()
{
    this.stepnum = 0;
    this.myDirs = [];
}

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
    
    Lab.blocks[this.x][this.y] = crossBlock; // �� ��� ����, ��������
    
    this.underRunnerBlock = crossBlock; // ������ ���� ����
    
    var k=0; // ���������� ��������� ������
    if( Lab.blocks[this.x-1][this.y]==emptyBlock ){k++};
    if( Lab.blocks[this.x][this.y-1]==emptyBlock ){k++};
    if( Lab.blocks[this.x+1][this.y]==emptyBlock ){k++};
    if( Lab.blocks[this.x][this.y+1]==emptyBlock ){k++};
    
    if( k>1 )
    {
        this.myDirs.push({'d':this.direction,'x':this.x,'y':this.y});
    }
    
    if( k>=1 )
    {     
        
        // ���������� ������ ������������ �����������
        var DirArray = [LEFT,UP,DOWN,RIGHT];

        // ���������� ����������� � ������� ��������������
        for(var D in DirArray)
        {
            var dX = 0;
            var dY = 0;
            switch (DirArray[D]) {
                case UP:    dY = -1 ;
                            break;
                case RIGHT: dX = 1 ;
                            break;
                case DOWN:  dY = 1 ;
                            break;
                case LEFT:  dX = -1 ;
                            break;
                default:    return false;
            }
                    
            var chNext = Lab.blocks[this.x+dX][this.y+dY];
            
            if( chNext==wallBlock || chNext==crossBlock ) {continue;}
            this.direction = DirArray[D];
            this.step();
            break;
        }
        return true;
    }
    
    if( k==0 )
    {
        // ��� ������ �����, ������� �� ��� ����� �� ����� ������
        var prevStep = this.myDirs[myDirs.length-1];
        
        if(prevStep === undefined)
        {
            alert("IN THE DEADLOCK");
            return false;
        }
        
        var D = invertDirection(prevDir);
        this.direction = D;
        this.step();
        return true;
    }
        
    alert("Algo error");
    return false;
};  

