#!/bin/bash
SRC_PATH="./src/app/lang/test"
GEN_PATH="$SRC_PATH/gen"
echo $STR

npx antlr4ts $SRC_PATH/TodoLangLexer.g4 -o $GEN_PATH
npx antlr4ts $SRC_PATH/TodoLangParser.g4 -liv $GEN_PATH -o $GEN_PATH
