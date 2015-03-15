 
Rob.autostep = function()
{
    var p;
    p = Rob.step();

    if(!p)
    {
        if(Rob.direction == UP) 
        {
            Rob.direction=DOWN;
            Rob.step();
        }
        else if(Rob.direction == DOWN) 
        {
            Rob.direction=UP;
            Rob.step();
        }
    } 
}  

