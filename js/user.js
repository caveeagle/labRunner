
var User = {};

User.init = function()
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

    if(typeof $.cookie('hero.days') != 'undefined' )
    {
        Clock.days = parseInt($.cookie('hero.days'));
        Clock.days--;
        if(Clock.days<0)Clock.days=0;
    }
    else
    {
        $.cookie('hero.days',Clock.days); 
    }

    this.typeStats();
}

User.typeStats = function()
{   
    var count_str = sent("wins count")+" "+this.wins+"&nbsp;&nbsp;&nbsp;&nbsp;";
    count_str = count_str+sent("death count")+" "+this.deaths;
    $("#wincountBoxId").html(count_str);
}

User.death = function()
{
   this.deaths = this.deaths+1;
   User.saveStats();
   User.typeStats();
}

User.win = function()
{
   this.wins = this.wins+1;
   User.saveStats();
   User.typeStats();
}

User.saveStats = function()
{
    $.cookie('hero.days',Clock.days);
    $.cookie('hero.wins',this.wins);
    $.cookie('hero.deaths',this.deaths);
}

