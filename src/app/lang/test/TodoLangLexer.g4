lexer grammar TodoLangLexer;

ADD : 'ADD';
TODO : 'TODO';
COMPLETE: 'COMPLETE';
STRING: '"' ~ ["]* '"';
EOL: [\r\n] + -> skip;
WS: [ \t] -> skip;
