
var Hero = {};

Hero.init = function()
{
    if(typeof $.cookie('hero.wins') != 'undefined' )
    {
        this.wins = parseInt($.cookie('hero.wins'));
    }
    else
    {
        this.wins = 0;
        $.cookie('hero.wins',0); 
    }

    if(typeof $.cookie('hero.deaths') != 'undefined' )
    {
        this.deaths = parseInt($.cookie('hero.deaths'));
    }
    else
    {
        this.deaths = 0;
        $.cookie('hero.deaths',0); 
    }
    this.typeStats();
}

Hero.typeStats = function()
{   
    var count_str = sent("wins count")+" "+this.wins+"&nbsp;&nbsp;&nbsp;&nbsp;";
    count_str = count_str+sent("death count")+" "+this.deaths;
    $("#wincountBoxId").html(count_str);
}

Hero.death = function()
{
   this.deaths = this.deaths+1;
   Hero.saveStats();
   Hero.typeStats();
}

Hero.win = function()
{
   this.wins = this.wins+1;
   Hero.saveStats();
   Hero.typeStats();
}

Hero.saveStats = function()
{
    $.cookie('hero.wins',this.wins);
    $.cookie('hero.deaths',this.deaths);
}

