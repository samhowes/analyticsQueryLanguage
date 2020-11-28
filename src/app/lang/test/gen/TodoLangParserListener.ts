// Generated from /Users/samh/dev/analyticsQueryLanguage/src/app/lang/test/TodoLangParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { TodoExpressionsContext } from "./TodoLangParser";
import { AddExpressionContext } from "./TodoLangParser";
import { CompleteExpressionContext } from "./TodoLangParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `TodoLangParser`.
 */
export interface TodoLangParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by `TodoLangParser.todoExpressions`.
	 * @param ctx the parse tree
	 */
	enterTodoExpressions?: (ctx: TodoExpressionsContext) => void;
	/**
	 * Exit a parse tree produced by `TodoLangParser.todoExpressions`.
	 * @param ctx the parse tree
	 */
	exitTodoExpressions?: (ctx: TodoExpressionsContext) => void;

	/**
	 * Enter a parse tree produced by `TodoLangParser.addExpression`.
	 * @param ctx the parse tree
	 */
	enterAddExpression?: (ctx: AddExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `TodoLangParser.addExpression`.
	 * @param ctx the parse tree
	 */
	exitAddExpression?: (ctx: AddExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `TodoLangParser.completeExpression`.
	 * @param ctx the parse tree
	 */
	enterCompleteExpression?: (ctx: CompleteExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `TodoLangParser.completeExpression`.
	 * @param ctx the parse tree
	 */
	exitCompleteExpression?: (ctx: CompleteExpressionContext) => void;
}

