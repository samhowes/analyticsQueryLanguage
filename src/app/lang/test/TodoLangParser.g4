parser grammar TodoLangParser;

options { tokenVocab=TodoLangLexer; }

todoExpressions : (addExpression)* (completeExpression)*;

addExpression : ADD TODO STRING;
completeExpression : COMPLETE TODO STRING;
