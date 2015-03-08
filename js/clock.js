
//  ############################ //
//        Clock section          //
//  ############################ //

Number.prototype.pad = function(size) 
{
      var s = String(this);
      while (s.length < (size || 2)) {s = "0" + s;}
      return s;
}
    
var Clock = {};

Clock.days = 0;

Clock.Init = function()
{
    this.CLOCKSTEP =~~ (720/DAYSTEPS);
    
    this.hours   = 12;
    this.minutes =  0;
    
    this.days = this.days+1;
    
    var count_str =  sent("days count");
    count_str = count_str.replace("%s",this.days);
    
    $("#daycountBoxId").text(count_str);
    
    var mStr = this.minutes.pad(2);
    
    $("#clockBoxId").text(this.hours+":"+mStr);
}

Clock.step = function()
{
    this.minutes -= this.CLOCKSTEP;

    if(this.minutes<0)
    {
        this.minutes +=  60;
        this.hours -= 1;
    }

    if(this.hours<=0)
    {
        this.minutes = 0;
        this.hours = 0;
        Lab.daytimeExceeded();
    }
    
    var mStr = this.minutes.pad(2);
    var hStr = this.hours.pad(2);
 
    $("#clockBoxId").text(hStr+":"+mStr);
}




