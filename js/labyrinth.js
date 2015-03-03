
var i = 100;
var j = 5;

function main()
{
  c = getFieldChar(i+1,j);
  
  if(c)
  {
   if(c!=wallBlock)
   {
    setFieldChar(i,j,emptyBlock);
    setFieldChar(i+1,j,runnerBlock);
    i++;
   }
  }  
    
    
}

