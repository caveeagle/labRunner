
var SENTENCES = {}; // GLOBAL ARRAY OF SENTENCES

var SENTENCES_RU = {};

SENTENCES['ru'] = SENTENCES_RU; 

/* ########################################################### */
/* ########################################################### */

SENTENCES_RU["in the deep"] = "� �������� ���������...";

SENTENCES_RU["lab created"] = "� ��������� ����� � ����� ��������"; 

SENTENCES_RU["daytime exceeded base"] = "����� �����������, � �������� ����� � �������� ���������. "; 

SENTENCES_RU["daytime exceeded N2"] = "�� ������ ���� ���� - �� � ������������!";

SENTENCES_RU["daytime exceeded"] = SENTENCES_RU["daytime exceeded base"]+SENTENCES_RU["outside at night N1"]+SENTENCES_RU["daytime exceeded N2"]; 

SENTENCES_RU["header_txt"] = "������� �� ���������"; 

SENTENCES_RU["outside at night N1"] = "��������� � ������ ��������� ������� ������� ������... "; 

SENTENCES_RU["outside at night N2"] = "����� ��� �� ��������� � �����, ������� ���� �������."; 

SENTENCES_RU["outside at night"] = SENTENCES_RU["daytime exceeded base"]+SENTENCES_RU["outside at night N1"]+SENTENCES_RU["outside at night N2"]

SENTENCES_RU["you lose"] = "����! �� ������� �����, � ���������� ������� ���������"; 

SENTENCES_RU["you win"] = "��! ��� ����������, ��� �� ��������, � ��� �� ����� �����!"; 

SENTENCES_RU["hope after win"] = "�� ����������� ������������... � �� ����� �������� � ���������..."; 

SENTENCES_RU["hope after death"] = "�� ����������� ������������... � ������� ����!"; 

SENTENCES_RU["days count"] = "��� %s ���� � ���������"; 

SENTENCES_RU["wins count"] = "�����:"; 

SENTENCES_RU["death count"] = "���������:"; 

SENTENCES_RU["after win N1"] = "�� �����, ��� ����� �����... ��� ������ ������� ������ ��������, ��� �������� ���. "; 

SENTENCES_RU["after win N2"] = "��, ����� �� �������, ������ ����� ���� ����������� ����� �����. ";

SENTENCES_RU["after win N3"] = "���� ���������� ���������!";

SENTENCES_RU["after win"] = SENTENCES_RU["after win N1"]+SENTENCES_RU["after win N2"]+SENTENCES_RU["after win N3"]
