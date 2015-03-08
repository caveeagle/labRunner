
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

SENTENCES_RU["you win"] = "Да! Вам показалось, что вы выиграли, и что вы нашли выход!"; 

SENTENCES_RU["hope after win"] = "Но Эксперимент продолжается... и вы снова очнулись в Лабиринте..."; 

SENTENCES_RU["hope after death"] = "Но Эксперимент продолжается... и надежда есть!"; 

SENTENCES_RU["days count"] = "Идёт %s день в Лабиринте"; 

SENTENCES_RU["wins count"] = "Побед:"; 

SENTENCES_RU["death count"] = "Поражений:"; 

SENTENCES_RU["after win N1"] = "Ты думал, что нашел выход... что теперь сможешь забыть Лабиринт, как страшный сон. "; 

SENTENCES_RU["after win N2"] = "Но, когда ты очнулся, вокруг снова были бесконечные серые стены. ";

SENTENCES_RU["after win N3"] = "Надо продолжать сражаться!";

SENTENCES_RU["after win"] = SENTENCES_RU["after win N1"]+SENTENCES_RU["after win N2"]+SENTENCES_RU["after win N3"]

