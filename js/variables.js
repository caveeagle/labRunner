
/* GLOBAL VARIABLES */


var ROWS = 47;

var COLS = 112;

var DAYSTEPS = 180; //  оличество шагов за день (не менее 12 и не более 720)
//var DAYSTEPS = 12;   


/* BLOCKS CHARS */

var wallBlock = '\u2592';

var emptyBlock = ' ';

var runnerStarngeBlock = '\u03A9'; /* not used now */

var runnerBlock = '<b>R</b>';

var fogBlock = '\u2591';

var paperBlock = '&loz;';

var wellBlock = 'o';

var crossBlock = '&#215;';

var leftArBlock = '&#8592;';

var rightArBlock = '&#8594;';

var upArBlock = '&#8593;';

var downArBlock = '&#8595;';

var stepBlock = '&middot;';


/* MAIN ROOM COORDS */
    
var mainRoomXmin = 46;

var mainRoomXmax = 66;

var mainRoomYmin = 20;

var mainRoomYmax = 28;

var gateX = 56;

var gateY = 20;

/* MISC COORDS */

var wellX = 28;

var wellY = 12;


/* DIRECTIONS CONSTANT */
var    UP = 1;
var RIGHT = 2;
var  DOWN = 3;
var  LEFT = 4;

/* STAGE CONSTANT */
var REST  = -1;
var NIGHT = 0;
var DAY   = 1;

