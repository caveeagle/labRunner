
/* GLOBAL VARIABLES */


var ROWS = 47;

var COLS = 112;

var DAYSTEPS = 180; // ���������� ����� �� ���� (�� ����� 12 � �� ����� 720)
//var DAYSTEPS = 12;   


/* BLOCKS CHARS */

var wallBlock = '\u2592';

var runnerBlock = '\u03A9';

var emptyBlock = ' ';

var wellBlock = 'o'; 

var runnerBlock = '<b>R</b>';

var fogBlock = '\u2591';



/* MAIN ROOM COORDS */
    
var mainRoomXmin = 46;

var mainRoomXmax = 66;

var mainRoomYmin = 20;

var mainRoomYmax = 28;

var gateX = 56;

var gateY = mainRoomYmin;


/* DIRECTIONS CONSTANT */
var    UP = 1;
var RIGHT = 2;
var  DOWN = 3;
var  LEFT = 4;

/* STAGE CONSTANT */
var REST  = -1;
var NIGHT = 0;
var DAY   = 1;

