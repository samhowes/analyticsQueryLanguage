// https://github.com/antlr/grammars-v4/blob/master/sql/tsql/TSqlLexer.g4
/*
T-SQL (Transact-SQL, MSSQL) grammar.
The MIT License (MIT).
Copyright (c) 2017, Mark Adams (madams51703@gmail.com)
Copyright (c) 2015-2017, Ivan Kochurkin (kvanttt@gmail.com), Positive Technologies.
Copyright (c) 2016, Scott Ure (scott@redstormsoftware.com).
Copyright (c) 2016, Rui Zhang (ruizhang.ccs@gmail.com).
Copyright (c) 2016, Marcus Henriksson (kuseman80@gmail.com).
Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:
The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.
THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE.
*/

lexer grammar AqlLexer;

// Basic keywords (from https://msdn.microsoft.com/en-us/library/ms189822.aspx)

AND:                                   'AND';
AS:                                    'AS';
ASC:                                   'ASC';
BEGIN:                                 'BEGIN';
BREAK:                                 'BREAK';
BY:                                    'BY';
CASE:                                  'CASE';
COALESCE:                              'COALESCE';
CONTAINS:                              'CONTAINS';
CONTINUE:                              'CONTINUE';
CONVERT:                               'TRY_'? 'CONVERT';
DECLARE:                               'DECLARE';
DEFAULT:                               'DEFAULT';
DESC:                                  'DESC';
DISTINCT:                              'DISTINCT';
DISTRIBUTED:                           'DISTRIBUTED';
ELSE:                                  'ELSE';
END:                                   'END';
EXISTS:                                'EXISTS';
FOR:                                   'FOR';
FROM:                                  'FROM';
GROUP:                                 'GROUP';
HAVING:                                'HAVING';
IF:                                    'IF';
IN:                                    'IN';
INNER:                                 'INNER';
INTO:                                  'INTO';
IS:                                    'IS';
JOIN:                                  'JOIN';
LEFT:                                  'LEFT';
LIKE:                                  'LIKE';
NOT:                                   'NOT';
NULL:                                  'NULL';
NULLIF:                                'NULLIF';
ON:                                    'ON';
OR:                                    'OR';
ORDER:                                 'ORDER';
OUTER:                                 'OUTER';
PERCENT:                               'PERCENT';
PIVOT:                                 'PIVOT';
PRINT:                                 'PRINT';
RAISERROR:                             'RAISERROR';
RIGHT:                                 'RIGHT';
ROWCOUNT:                              'ROWCOUNT';
SELECT:                                'SELECT';
SET:                                   'SET';
THEN:                                  'THEN';
TOP:                                   'TOP';
UNPIVOT:                               'UNPIVOT';
WHEN:                                  'WHEN';
WHERE:                                 'WHERE';
WHILE:                                 'WHILE';
WITH:                                  'WITH';

AFTER:                                 'AFTER';
AGGREGATE:                             'AGGREGATE';
APPLY:                                 'APPLY';
AVG:                                   'AVG';
BINARY_KEYWORD:                        'BINARY';
CATCH:                                 'CATCH';
CONCAT:                                'CONCAT';
COUNT:                                 'COUNT';
DATA:                                  'DATA';
DATEADD:                               'DATEADD';
DATEDIFF:                              'DATEDIFF';
DAYS:                                  'DAYS';
EMPTY:                                 'EMPTY';
EXIST:                                 'EXIST';
FILTER:                                'FILTER';
GETDATE:                               'GETDATE';
GETUTCDATE:                            'GETUTCDATE';
GO_BATCH:                              [\r\n]* [\t ]* 'GO'[\t\n\r ];
GO:                                    'GO';
INT:                                   'INT';
MAX:                                   'MAX';
MIN:                                   'MIN';
NEXT:                                  'NEXT';
ONLY:                                  'ONLY';
QUERY:                                 'QUERY';
ROW:                                   'ROW';
ROW_NUMBER:                            'ROW_NUMBER';
ROWS:                                  'ROWS';
STDEV:                                 'STDEV';
STDEVP:                                'STDEVP';
STRING_AGG:                            'STRING_AGG';
SUM:                                   'SUM';
TAKE:                                  'TAKE';
THROW:                                 'THROW';
TIME:                                  'TIME';
TRY:                                   'TRY';
VALUE:                                 'VALUE';
VAR:                                   'VAR';
VARP:                                  'VARP';
//More keywords
BEFORE:                                'BEFORE';
ENABLED:                               'ENABLED';
ERROR:                                 'ERROR';
GET:                                   'GET';
IIF:                                   'IIF';
ISNULL:                                'ISNULL';
SPLIT:                                 'SPLIT';
START:                                 'START';
STOP:                                  'STOP';

//Build-ins:
VARCHAR:                               'VARCHAR';
NVARCHAR:                              'NVARCHAR';


SPACE:              [ \t\r\n]+    -> skip;
// https://docs.microsoft.com/en-us/sql/t-sql/language-elements/slash-star-comment-transact-sql
COMMENT:            '/*' (COMMENT | .)*? '*/' -> channel(HIDDEN);
LINE_COMMENT:       '--' ~[\r\n]* -> channel(HIDDEN);

// TODO: ID can be not only Latin.
DOUBLE_QUOTE_ID:    '"' ~'"'+ '"';
SINGLE_QUOTE:       '\'';
SQUARE_BRACKET_ID:  '[' (~']' | ']' ']')* ']';
LOCAL_ID:           '@' ([A-Z_$@#0-9] | FullWidthLetter)*;
DECIMAL:             DEC_DIGIT+;
ID:                  ( [A-Z_#] | FullWidthLetter) ( [A-Z_#$@0-9] | FullWidthLetter )*;
STRING:              'N'? '\'' (~'\'' | '\'\'')* '\'';
BINARY:              '0' 'X' HEX_DIGIT*;
FLOAT:               DEC_DOT_DEC;
REAL:                (DECIMAL | DEC_DOT_DEC) ('E' [+-]? DEC_DIGIT+);


EQUAL:               '=';

GREATER:             '>';
LESS:                '<';
EXCLAMATION:         '!';

PLUS_ASSIGN:         '+=';
MINUS_ASSIGN:        '-=';
MULT_ASSIGN:         '*=';
DIV_ASSIGN:          '/=';
MOD_ASSIGN:          '%=';
AND_ASSIGN:          '&=';
XOR_ASSIGN:          '^=';
OR_ASSIGN:           '|=';

DOUBLE_BAR:          '||';
DOT:                 '.';
UNDERLINE:           '_';
AT:                  '@';
SHARP:               '#';
DOLLAR:              '$';
LR_BRACKET:          '(';
RR_BRACKET:          ')';
COMMA:               ',';
SEMI:                ';';
COLON:               ':';
STAR:                '*';
DIVIDE:              '/';
MODULE:              '%';
PLUS:                '+';
MINUS:               '-';
BIT_NOT:             '~';
BIT_OR:              '|';
BIT_AND:             '&';
BIT_XOR:             '^';

fragment LETTER:       [A-Z_];
fragment DEC_DOT_DEC:  (DEC_DIGIT+ '.' DEC_DIGIT+ |  DEC_DIGIT+ '.' | '.' DEC_DIGIT+);
fragment HEX_DIGIT:    [0-9A-F];
fragment DEC_DIGIT:    [0-9];


fragment FullWidthLetter
    : '\u00c0'..'\u00d6'
    | '\u00d8'..'\u00f6'
    | '\u00f8'..'\u00ff'
    | '\u0100'..'\u1fff'
    | '\u2c00'..'\u2fff'
    | '\u3040'..'\u318f'
    | '\u3300'..'\u337f'
    | '\u3400'..'\u3fff'
    | '\u4e00'..'\u9fff'
    | '\ua000'..'\ud7ff'
    | '\uf900'..'\ufaff'
    | '\uff00'..'\ufff0'
    // | '\u10000'..'\u1F9FF'  //not support four bytes chars
    // | '\u20000'..'\u2FA1F'
    ;
