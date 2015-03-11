
var SENTENCES = {}; // GLOBAL ARRAY OF SENTENCES

var SENTENCES_RU = {};

SENTENCES['ru'] = SENTENCES_RU; 

/* ########################################################### */
/* ########################################################### */

SENTENCES_RU["in the deep"] = "В глубинах лабиринта...";

SENTENCES_RU["lab created"] = "И открылась дверь в новый лабиринт"; 

SENTENCES_RU["daytime exceeded base"] = "Время закончилось, и огромные двери с грохотом закрылись. "; 

SENTENCES_RU["daytime exceeded N2"] = "Но внутри этих стен - ты в безопасности!";

SENTENCES_RU["header_txt"] = "Бегущий по лабиринту"; 

SENTENCES_RU["outside at night N1"] = "Обитающие в ночном лабиринте монстры вылезли наружу... "; 

SENTENCES_RU["outside at night N2"] = "Никто ещё не оставался в живых, проведя ночь снаружи. "; 

SENTENCES_RU["daytime exceeded"] = SENTENCES_RU["daytime exceeded base"]+SENTENCES_RU["outside at night N1"]+SENTENCES_RU["daytime exceeded N2"]; 

SENTENCES_RU["outside at night"] = SENTENCES_RU["daytime exceeded base"]+SENTENCES_RU["outside at night N1"]+SENTENCES_RU["outside at night N2"]

SENTENCES_RU["you lose"] = "Аааа! Вы погибли ночью, в абсолютной темноте лабиринта"; 

SENTENCES_RU["you win"] = "Да! Внезапно вы проваливаетесь в скрытый люк. Неужели это выход?"; 

SENTENCES_RU["hope after win"] = "Вам показалось, что вы выиграли, и что вы нашли выход! Но Эксперимент продолжается..."; 

SENTENCES_RU["hope after death"] = "Но Эксперимент продолжается... и надежда есть!"; 

SENTENCES_RU["days count"] = "Идёт %s день в Лабиринте"; 

SENTENCES_RU["wins count"] = "Побед:"; 

SENTENCES_RU["death count"] = "Поражений:"; 

SENTENCES_RU["after win N1"] = "Ты думал, что нашел выход... что теперь сможешь забыть Лабиринт, как страшный сон. "; 
SENTENCES_RU["after win N2"] = "Но, когда ты очнулся, вокруг снова были бесконечные серые стены. ";
SENTENCES_RU["after win N3"] = "Надо продолжать сражаться!";

SENTENCES_RU["after win"] = SENTENCES_RU["after win N1"]+SENTENCES_RU["after win N2"]+SENTENCES_RU["after win N3"]

SENTENCES_RU["paper find"] = "Вы нашли какую-то смятую бумажку...";

SENTENCES_RU["lab map find alert"] = "Это оказалась карта лабиринта!";

SENTENCES_RU["lab map find"] = "Карта лабиринта... откуда она здесь, и кто её оставил? Это хорошо, теперь не придётся блуждать наугад! ";

SENTENCES_RU["Exit exists alert"] = "На ней написано: «выход существует...»";

SENTENCES_RU["Exit exists"] = "Выход существует! Из этого лабиринта точно есть выход. Не отступай, не сдавайся, не ленись! И ты найдешь его... может быть";

SENTENCES_RU["hint alert"] = "Может, это подсказка?";

SENTENCES_RU["h1"] = "Ищи выход на дальней площади, он не обозн... .. ..на карте.. .го коорд.. ... .. ";
SENTENCES_RU["h2"] = "....... ... ... ...... ... ..  ";
SENTENCES_RU["h3"] = "(вот дьявол, ничего не разобрать)";

SENTENCES_RU["hint for find"] = SENTENCES_RU["h1"]+SENTENCES_RU["h2"]+SENTENCES_RU["h3"];

/* ########################################################### */
/* ########################################################### */

SENTENCES_RU[""] = "";

