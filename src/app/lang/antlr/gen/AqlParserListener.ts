// Generated from /Users/samh/dev/analyticsQueryLanguage/src/app/lang/antlr/AqlParser.g4 by ANTLR 4.7.3-SNAPSHOT


import { ParseTreeListener } from "antlr4ts/tree/ParseTreeListener";

import { AGGREGATE_WINDOWED_FUNCContext } from "./AqlParser";
import { SCALAR_FUNCTIONContext } from "./AqlParser";
import { BUILT_IN_FUNCContext } from "./AqlParser";
import { CONVERTContext } from "./AqlParser";
import { COALESCEContext } from "./AqlParser";
import { DATEADDContext } from "./AqlParser";
import { DATEDIFFContext } from "./AqlParser";
import { GETDATEContext } from "./AqlParser";
import { GETUTCDATEContext } from "./AqlParser";
import { NULLIFContext } from "./AqlParser";
import { ISNULLContext } from "./AqlParser";
import { IIFContext } from "./AqlParser";
import { STRINGAGGContext } from "./AqlParser";
import { Tsql_fileContext } from "./AqlParser";
import { BatchContext } from "./AqlParser";
import { Sql_clausesContext } from "./AqlParser";
import { Cfl_statementContext } from "./AqlParser";
import { Block_statementContext } from "./AqlParser";
import { Break_statementContext } from "./AqlParser";
import { Continue_statementContext } from "./AqlParser";
import { If_statementContext } from "./AqlParser";
import { Throw_statementContext } from "./AqlParser";
import { Throw_error_numberContext } from "./AqlParser";
import { Throw_messageContext } from "./AqlParser";
import { Throw_stateContext } from "./AqlParser";
import { Try_catch_statementContext } from "./AqlParser";
import { While_statementContext } from "./AqlParser";
import { Print_statementContext } from "./AqlParser";
import { Raiseerror_statementContext } from "./AqlParser";
import { Another_statementContext } from "./AqlParser";
import { Select_statement_standaloneContext } from "./AqlParser";
import { Select_statementContext } from "./AqlParser";
import { Set_statementContext } from "./AqlParser";
import { Go_batch_statementContext } from "./AqlParser";
import { Go_statementContext } from "./AqlParser";
import { Set_specialContext } from "./AqlParser";
import { Constant_LOCAL_IDContext } from "./AqlParser";
import { ExpressionContext } from "./AqlParser";
import { Primitive_expressionContext } from "./AqlParser";
import { Case_expressionContext } from "./AqlParser";
import { Unary_operator_expressionContext } from "./AqlParser";
import { Bracket_expressionContext } from "./AqlParser";
import { Constant_expressionContext } from "./AqlParser";
import { SubqueryContext } from "./AqlParser";
import { With_expressionContext } from "./AqlParser";
import { Common_table_expressionContext } from "./AqlParser";
import { Search_conditionContext } from "./AqlParser";
import { Predicate_brContext } from "./AqlParser";
import { PredicateContext } from "./AqlParser";
import { Query_expressionContext } from "./AqlParser";
import { Query_specificationContext } from "./AqlParser";
import { Top_clauseContext } from "./AqlParser";
import { Top_percentContext } from "./AqlParser";
import { Top_countContext } from "./AqlParser";
import { Order_by_clauseContext } from "./AqlParser";
import { Order_by_expressionContext } from "./AqlParser";
import { Group_by_itemContext } from "./AqlParser";
import { Select_listContext } from "./AqlParser";
import { AsteriskContext } from "./AqlParser";
import { Column_elemContext } from "./AqlParser";
import { Expression_elemContext } from "./AqlParser";
import { Select_list_elemContext } from "./AqlParser";
import { Table_sourcesContext } from "./AqlParser";
import { Table_sourceContext } from "./AqlParser";
import { Table_source_item_joinedContext } from "./AqlParser";
import { Table_source_itemContext } from "./AqlParser";
import { Join_partContext } from "./AqlParser";
import { Join_onContext } from "./AqlParser";
import { PivotContext } from "./AqlParser";
import { UnpivotContext } from "./AqlParser";
import { Pivot_clauseContext } from "./AqlParser";
import { Unpivot_clauseContext } from "./AqlParser";
import { Full_column_name_listContext } from "./AqlParser";
import { Table_name_with_hintContext } from "./AqlParser";
import { Derived_tableContext } from "./AqlParser";
import { Function_callContext } from "./AqlParser";
import { Freetext_predicateContext } from "./AqlParser";
import { Build_in_functionsContext } from "./AqlParser";
import { Value_callContext } from "./AqlParser";
import { Query_callContext } from "./AqlParser";
import { Exist_callContext } from "./AqlParser";
import { Switch_sectionContext } from "./AqlParser";
import { Switch_search_condition_sectionContext } from "./AqlParser";
import { As_column_aliasContext } from "./AqlParser";
import { As_table_aliasContext } from "./AqlParser";
import { Table_aliasContext } from "./AqlParser";
import { Column_alias_listContext } from "./AqlParser";
import { Column_aliasContext } from "./AqlParser";
import { Expression_listContext } from "./AqlParser";
import { Aggregate_windowed_functionContext } from "./AqlParser";
import { All_distinct_expressionContext } from "./AqlParser";
import { Full_table_nameContext } from "./AqlParser";
import { Table_nameContext } from "./AqlParser";
import { Full_column_nameContext } from "./AqlParser";
import { Column_name_listContext } from "./AqlParser";
import { Null_notnullContext } from "./AqlParser";
import { Scalar_function_nameContext } from "./AqlParser";
import { Data_typeContext } from "./AqlParser";
import { ConstantContext } from "./AqlParser";
import { SignContext } from "./AqlParser";
import { KeywordContext } from "./AqlParser";
import { IdContext } from "./AqlParser";
import { Comparison_operatorContext } from "./AqlParser";
import { Assignment_operatorContext } from "./AqlParser";


/**
 * This interface defines a complete listener for a parse tree produced by
 * `AqlParser`.
 */
export interface AqlParserListener extends ParseTreeListener {
	/**
	 * Enter a parse tree produced by the `AGGREGATE_WINDOWED_FUNC`
	 * labeled alternative in `AqlParser.function_call`.
	 * @param ctx the parse tree
	 */
	enterAGGREGATE_WINDOWED_FUNC?: (ctx: AGGREGATE_WINDOWED_FUNCContext) => void;
	/**
	 * Exit a parse tree produced by the `AGGREGATE_WINDOWED_FUNC`
	 * labeled alternative in `AqlParser.function_call`.
	 * @param ctx the parse tree
	 */
	exitAGGREGATE_WINDOWED_FUNC?: (ctx: AGGREGATE_WINDOWED_FUNCContext) => void;

	/**
	 * Enter a parse tree produced by the `SCALAR_FUNCTION`
	 * labeled alternative in `AqlParser.function_call`.
	 * @param ctx the parse tree
	 */
	enterSCALAR_FUNCTION?: (ctx: SCALAR_FUNCTIONContext) => void;
	/**
	 * Exit a parse tree produced by the `SCALAR_FUNCTION`
	 * labeled alternative in `AqlParser.function_call`.
	 * @param ctx the parse tree
	 */
	exitSCALAR_FUNCTION?: (ctx: SCALAR_FUNCTIONContext) => void;

	/**
	 * Enter a parse tree produced by the `BUILT_IN_FUNC`
	 * labeled alternative in `AqlParser.function_call`.
	 * @param ctx the parse tree
	 */
	enterBUILT_IN_FUNC?: (ctx: BUILT_IN_FUNCContext) => void;
	/**
	 * Exit a parse tree produced by the `BUILT_IN_FUNC`
	 * labeled alternative in `AqlParser.function_call`.
	 * @param ctx the parse tree
	 */
	exitBUILT_IN_FUNC?: (ctx: BUILT_IN_FUNCContext) => void;

	/**
	 * Enter a parse tree produced by the `CONVERT`
	 * labeled alternative in `AqlParser.build_in_functions`.
	 * @param ctx the parse tree
	 */
	enterCONVERT?: (ctx: CONVERTContext) => void;
	/**
	 * Exit a parse tree produced by the `CONVERT`
	 * labeled alternative in `AqlParser.build_in_functions`.
	 * @param ctx the parse tree
	 */
	exitCONVERT?: (ctx: CONVERTContext) => void;

	/**
	 * Enter a parse tree produced by the `COALESCE`
	 * labeled alternative in `AqlParser.build_in_functions`.
	 * @param ctx the parse tree
	 */
	enterCOALESCE?: (ctx: COALESCEContext) => void;
	/**
	 * Exit a parse tree produced by the `COALESCE`
	 * labeled alternative in `AqlParser.build_in_functions`.
	 * @param ctx the parse tree
	 */
	exitCOALESCE?: (ctx: COALESCEContext) => void;

	/**
	 * Enter a parse tree produced by the `DATEADD`
	 * labeled alternative in `AqlParser.build_in_functions`.
	 * @param ctx the parse tree
	 */
	enterDATEADD?: (ctx: DATEADDContext) => void;
	/**
	 * Exit a parse tree produced by the `DATEADD`
	 * labeled alternative in `AqlParser.build_in_functions`.
	 * @param ctx the parse tree
	 */
	exitDATEADD?: (ctx: DATEADDContext) => void;

	/**
	 * Enter a parse tree produced by the `DATEDIFF`
	 * labeled alternative in `AqlParser.build_in_functions`.
	 * @param ctx the parse tree
	 */
	enterDATEDIFF?: (ctx: DATEDIFFContext) => void;
	/**
	 * Exit a parse tree produced by the `DATEDIFF`
	 * labeled alternative in `AqlParser.build_in_functions`.
	 * @param ctx the parse tree
	 */
	exitDATEDIFF?: (ctx: DATEDIFFContext) => void;

	/**
	 * Enter a parse tree produced by the `GETDATE`
	 * labeled alternative in `AqlParser.build_in_functions`.
	 * @param ctx the parse tree
	 */
	enterGETDATE?: (ctx: GETDATEContext) => void;
	/**
	 * Exit a parse tree produced by the `GETDATE`
	 * labeled alternative in `AqlParser.build_in_functions`.
	 * @param ctx the parse tree
	 */
	exitGETDATE?: (ctx: GETDATEContext) => void;

	/**
	 * Enter a parse tree produced by the `GETUTCDATE`
	 * labeled alternative in `AqlParser.build_in_functions`.
	 * @param ctx the parse tree
	 */
	enterGETUTCDATE?: (ctx: GETUTCDATEContext) => void;
	/**
	 * Exit a parse tree produced by the `GETUTCDATE`
	 * labeled alternative in `AqlParser.build_in_functions`.
	 * @param ctx the parse tree
	 */
	exitGETUTCDATE?: (ctx: GETUTCDATEContext) => void;

	/**
	 * Enter a parse tree produced by the `NULLIF`
	 * labeled alternative in `AqlParser.build_in_functions`.
	 * @param ctx the parse tree
	 */
	enterNULLIF?: (ctx: NULLIFContext) => void;
	/**
	 * Exit a parse tree produced by the `NULLIF`
	 * labeled alternative in `AqlParser.build_in_functions`.
	 * @param ctx the parse tree
	 */
	exitNULLIF?: (ctx: NULLIFContext) => void;

	/**
	 * Enter a parse tree produced by the `ISNULL`
	 * labeled alternative in `AqlParser.build_in_functions`.
	 * @param ctx the parse tree
	 */
	enterISNULL?: (ctx: ISNULLContext) => void;
	/**
	 * Exit a parse tree produced by the `ISNULL`
	 * labeled alternative in `AqlParser.build_in_functions`.
	 * @param ctx the parse tree
	 */
	exitISNULL?: (ctx: ISNULLContext) => void;

	/**
	 * Enter a parse tree produced by the `IIF`
	 * labeled alternative in `AqlParser.build_in_functions`.
	 * @param ctx the parse tree
	 */
	enterIIF?: (ctx: IIFContext) => void;
	/**
	 * Exit a parse tree produced by the `IIF`
	 * labeled alternative in `AqlParser.build_in_functions`.
	 * @param ctx the parse tree
	 */
	exitIIF?: (ctx: IIFContext) => void;

	/**
	 * Enter a parse tree produced by the `STRINGAGG`
	 * labeled alternative in `AqlParser.build_in_functions`.
	 * @param ctx the parse tree
	 */
	enterSTRINGAGG?: (ctx: STRINGAGGContext) => void;
	/**
	 * Exit a parse tree produced by the `STRINGAGG`
	 * labeled alternative in `AqlParser.build_in_functions`.
	 * @param ctx the parse tree
	 */
	exitSTRINGAGG?: (ctx: STRINGAGGContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.tsql_file`.
	 * @param ctx the parse tree
	 */
	enterTsql_file?: (ctx: Tsql_fileContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.tsql_file`.
	 * @param ctx the parse tree
	 */
	exitTsql_file?: (ctx: Tsql_fileContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.batch`.
	 * @param ctx the parse tree
	 */
	enterBatch?: (ctx: BatchContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.batch`.
	 * @param ctx the parse tree
	 */
	exitBatch?: (ctx: BatchContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.sql_clauses`.
	 * @param ctx the parse tree
	 */
	enterSql_clauses?: (ctx: Sql_clausesContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.sql_clauses`.
	 * @param ctx the parse tree
	 */
	exitSql_clauses?: (ctx: Sql_clausesContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.cfl_statement`.
	 * @param ctx the parse tree
	 */
	enterCfl_statement?: (ctx: Cfl_statementContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.cfl_statement`.
	 * @param ctx the parse tree
	 */
	exitCfl_statement?: (ctx: Cfl_statementContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.block_statement`.
	 * @param ctx the parse tree
	 */
	enterBlock_statement?: (ctx: Block_statementContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.block_statement`.
	 * @param ctx the parse tree
	 */
	exitBlock_statement?: (ctx: Block_statementContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.break_statement`.
	 * @param ctx the parse tree
	 */
	enterBreak_statement?: (ctx: Break_statementContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.break_statement`.
	 * @param ctx the parse tree
	 */
	exitBreak_statement?: (ctx: Break_statementContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.continue_statement`.
	 * @param ctx the parse tree
	 */
	enterContinue_statement?: (ctx: Continue_statementContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.continue_statement`.
	 * @param ctx the parse tree
	 */
	exitContinue_statement?: (ctx: Continue_statementContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.if_statement`.
	 * @param ctx the parse tree
	 */
	enterIf_statement?: (ctx: If_statementContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.if_statement`.
	 * @param ctx the parse tree
	 */
	exitIf_statement?: (ctx: If_statementContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.throw_statement`.
	 * @param ctx the parse tree
	 */
	enterThrow_statement?: (ctx: Throw_statementContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.throw_statement`.
	 * @param ctx the parse tree
	 */
	exitThrow_statement?: (ctx: Throw_statementContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.throw_error_number`.
	 * @param ctx the parse tree
	 */
	enterThrow_error_number?: (ctx: Throw_error_numberContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.throw_error_number`.
	 * @param ctx the parse tree
	 */
	exitThrow_error_number?: (ctx: Throw_error_numberContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.throw_message`.
	 * @param ctx the parse tree
	 */
	enterThrow_message?: (ctx: Throw_messageContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.throw_message`.
	 * @param ctx the parse tree
	 */
	exitThrow_message?: (ctx: Throw_messageContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.throw_state`.
	 * @param ctx the parse tree
	 */
	enterThrow_state?: (ctx: Throw_stateContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.throw_state`.
	 * @param ctx the parse tree
	 */
	exitThrow_state?: (ctx: Throw_stateContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.try_catch_statement`.
	 * @param ctx the parse tree
	 */
	enterTry_catch_statement?: (ctx: Try_catch_statementContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.try_catch_statement`.
	 * @param ctx the parse tree
	 */
	exitTry_catch_statement?: (ctx: Try_catch_statementContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.while_statement`.
	 * @param ctx the parse tree
	 */
	enterWhile_statement?: (ctx: While_statementContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.while_statement`.
	 * @param ctx the parse tree
	 */
	exitWhile_statement?: (ctx: While_statementContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.print_statement`.
	 * @param ctx the parse tree
	 */
	enterPrint_statement?: (ctx: Print_statementContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.print_statement`.
	 * @param ctx the parse tree
	 */
	exitPrint_statement?: (ctx: Print_statementContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.raiseerror_statement`.
	 * @param ctx the parse tree
	 */
	enterRaiseerror_statement?: (ctx: Raiseerror_statementContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.raiseerror_statement`.
	 * @param ctx the parse tree
	 */
	exitRaiseerror_statement?: (ctx: Raiseerror_statementContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.another_statement`.
	 * @param ctx the parse tree
	 */
	enterAnother_statement?: (ctx: Another_statementContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.another_statement`.
	 * @param ctx the parse tree
	 */
	exitAnother_statement?: (ctx: Another_statementContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.select_statement_standalone`.
	 * @param ctx the parse tree
	 */
	enterSelect_statement_standalone?: (ctx: Select_statement_standaloneContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.select_statement_standalone`.
	 * @param ctx the parse tree
	 */
	exitSelect_statement_standalone?: (ctx: Select_statement_standaloneContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.select_statement`.
	 * @param ctx the parse tree
	 */
	enterSelect_statement?: (ctx: Select_statementContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.select_statement`.
	 * @param ctx the parse tree
	 */
	exitSelect_statement?: (ctx: Select_statementContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.set_statement`.
	 * @param ctx the parse tree
	 */
	enterSet_statement?: (ctx: Set_statementContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.set_statement`.
	 * @param ctx the parse tree
	 */
	exitSet_statement?: (ctx: Set_statementContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.go_batch_statement`.
	 * @param ctx the parse tree
	 */
	enterGo_batch_statement?: (ctx: Go_batch_statementContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.go_batch_statement`.
	 * @param ctx the parse tree
	 */
	exitGo_batch_statement?: (ctx: Go_batch_statementContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.go_statement`.
	 * @param ctx the parse tree
	 */
	enterGo_statement?: (ctx: Go_statementContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.go_statement`.
	 * @param ctx the parse tree
	 */
	exitGo_statement?: (ctx: Go_statementContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.set_special`.
	 * @param ctx the parse tree
	 */
	enterSet_special?: (ctx: Set_specialContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.set_special`.
	 * @param ctx the parse tree
	 */
	exitSet_special?: (ctx: Set_specialContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.constant_LOCAL_ID`.
	 * @param ctx the parse tree
	 */
	enterConstant_LOCAL_ID?: (ctx: Constant_LOCAL_IDContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.constant_LOCAL_ID`.
	 * @param ctx the parse tree
	 */
	exitConstant_LOCAL_ID?: (ctx: Constant_LOCAL_IDContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.expression`.
	 * @param ctx the parse tree
	 */
	enterExpression?: (ctx: ExpressionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.expression`.
	 * @param ctx the parse tree
	 */
	exitExpression?: (ctx: ExpressionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.primitive_expression`.
	 * @param ctx the parse tree
	 */
	enterPrimitive_expression?: (ctx: Primitive_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.primitive_expression`.
	 * @param ctx the parse tree
	 */
	exitPrimitive_expression?: (ctx: Primitive_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.case_expression`.
	 * @param ctx the parse tree
	 */
	enterCase_expression?: (ctx: Case_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.case_expression`.
	 * @param ctx the parse tree
	 */
	exitCase_expression?: (ctx: Case_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.unary_operator_expression`.
	 * @param ctx the parse tree
	 */
	enterUnary_operator_expression?: (ctx: Unary_operator_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.unary_operator_expression`.
	 * @param ctx the parse tree
	 */
	exitUnary_operator_expression?: (ctx: Unary_operator_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.bracket_expression`.
	 * @param ctx the parse tree
	 */
	enterBracket_expression?: (ctx: Bracket_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.bracket_expression`.
	 * @param ctx the parse tree
	 */
	exitBracket_expression?: (ctx: Bracket_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.constant_expression`.
	 * @param ctx the parse tree
	 */
	enterConstant_expression?: (ctx: Constant_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.constant_expression`.
	 * @param ctx the parse tree
	 */
	exitConstant_expression?: (ctx: Constant_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.subquery`.
	 * @param ctx the parse tree
	 */
	enterSubquery?: (ctx: SubqueryContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.subquery`.
	 * @param ctx the parse tree
	 */
	exitSubquery?: (ctx: SubqueryContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.with_expression`.
	 * @param ctx the parse tree
	 */
	enterWith_expression?: (ctx: With_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.with_expression`.
	 * @param ctx the parse tree
	 */
	exitWith_expression?: (ctx: With_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.common_table_expression`.
	 * @param ctx the parse tree
	 */
	enterCommon_table_expression?: (ctx: Common_table_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.common_table_expression`.
	 * @param ctx the parse tree
	 */
	exitCommon_table_expression?: (ctx: Common_table_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.search_condition`.
	 * @param ctx the parse tree
	 */
	enterSearch_condition?: (ctx: Search_conditionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.search_condition`.
	 * @param ctx the parse tree
	 */
	exitSearch_condition?: (ctx: Search_conditionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.predicate_br`.
	 * @param ctx the parse tree
	 */
	enterPredicate_br?: (ctx: Predicate_brContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.predicate_br`.
	 * @param ctx the parse tree
	 */
	exitPredicate_br?: (ctx: Predicate_brContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.predicate`.
	 * @param ctx the parse tree
	 */
	enterPredicate?: (ctx: PredicateContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.predicate`.
	 * @param ctx the parse tree
	 */
	exitPredicate?: (ctx: PredicateContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.query_expression`.
	 * @param ctx the parse tree
	 */
	enterQuery_expression?: (ctx: Query_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.query_expression`.
	 * @param ctx the parse tree
	 */
	exitQuery_expression?: (ctx: Query_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.query_specification`.
	 * @param ctx the parse tree
	 */
	enterQuery_specification?: (ctx: Query_specificationContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.query_specification`.
	 * @param ctx the parse tree
	 */
	exitQuery_specification?: (ctx: Query_specificationContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.top_clause`.
	 * @param ctx the parse tree
	 */
	enterTop_clause?: (ctx: Top_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.top_clause`.
	 * @param ctx the parse tree
	 */
	exitTop_clause?: (ctx: Top_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.top_percent`.
	 * @param ctx the parse tree
	 */
	enterTop_percent?: (ctx: Top_percentContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.top_percent`.
	 * @param ctx the parse tree
	 */
	exitTop_percent?: (ctx: Top_percentContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.top_count`.
	 * @param ctx the parse tree
	 */
	enterTop_count?: (ctx: Top_countContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.top_count`.
	 * @param ctx the parse tree
	 */
	exitTop_count?: (ctx: Top_countContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.order_by_clause`.
	 * @param ctx the parse tree
	 */
	enterOrder_by_clause?: (ctx: Order_by_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.order_by_clause`.
	 * @param ctx the parse tree
	 */
	exitOrder_by_clause?: (ctx: Order_by_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.order_by_expression`.
	 * @param ctx the parse tree
	 */
	enterOrder_by_expression?: (ctx: Order_by_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.order_by_expression`.
	 * @param ctx the parse tree
	 */
	exitOrder_by_expression?: (ctx: Order_by_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.group_by_item`.
	 * @param ctx the parse tree
	 */
	enterGroup_by_item?: (ctx: Group_by_itemContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.group_by_item`.
	 * @param ctx the parse tree
	 */
	exitGroup_by_item?: (ctx: Group_by_itemContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.select_list`.
	 * @param ctx the parse tree
	 */
	enterSelect_list?: (ctx: Select_listContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.select_list`.
	 * @param ctx the parse tree
	 */
	exitSelect_list?: (ctx: Select_listContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.asterisk`.
	 * @param ctx the parse tree
	 */
	enterAsterisk?: (ctx: AsteriskContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.asterisk`.
	 * @param ctx the parse tree
	 */
	exitAsterisk?: (ctx: AsteriskContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.column_elem`.
	 * @param ctx the parse tree
	 */
	enterColumn_elem?: (ctx: Column_elemContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.column_elem`.
	 * @param ctx the parse tree
	 */
	exitColumn_elem?: (ctx: Column_elemContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.expression_elem`.
	 * @param ctx the parse tree
	 */
	enterExpression_elem?: (ctx: Expression_elemContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.expression_elem`.
	 * @param ctx the parse tree
	 */
	exitExpression_elem?: (ctx: Expression_elemContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.select_list_elem`.
	 * @param ctx the parse tree
	 */
	enterSelect_list_elem?: (ctx: Select_list_elemContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.select_list_elem`.
	 * @param ctx the parse tree
	 */
	exitSelect_list_elem?: (ctx: Select_list_elemContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.table_sources`.
	 * @param ctx the parse tree
	 */
	enterTable_sources?: (ctx: Table_sourcesContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.table_sources`.
	 * @param ctx the parse tree
	 */
	exitTable_sources?: (ctx: Table_sourcesContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.table_source`.
	 * @param ctx the parse tree
	 */
	enterTable_source?: (ctx: Table_sourceContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.table_source`.
	 * @param ctx the parse tree
	 */
	exitTable_source?: (ctx: Table_sourceContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.table_source_item_joined`.
	 * @param ctx the parse tree
	 */
	enterTable_source_item_joined?: (ctx: Table_source_item_joinedContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.table_source_item_joined`.
	 * @param ctx the parse tree
	 */
	exitTable_source_item_joined?: (ctx: Table_source_item_joinedContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.table_source_item`.
	 * @param ctx the parse tree
	 */
	enterTable_source_item?: (ctx: Table_source_itemContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.table_source_item`.
	 * @param ctx the parse tree
	 */
	exitTable_source_item?: (ctx: Table_source_itemContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.join_part`.
	 * @param ctx the parse tree
	 */
	enterJoin_part?: (ctx: Join_partContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.join_part`.
	 * @param ctx the parse tree
	 */
	exitJoin_part?: (ctx: Join_partContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.join_on`.
	 * @param ctx the parse tree
	 */
	enterJoin_on?: (ctx: Join_onContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.join_on`.
	 * @param ctx the parse tree
	 */
	exitJoin_on?: (ctx: Join_onContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.pivot`.
	 * @param ctx the parse tree
	 */
	enterPivot?: (ctx: PivotContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.pivot`.
	 * @param ctx the parse tree
	 */
	exitPivot?: (ctx: PivotContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.unpivot`.
	 * @param ctx the parse tree
	 */
	enterUnpivot?: (ctx: UnpivotContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.unpivot`.
	 * @param ctx the parse tree
	 */
	exitUnpivot?: (ctx: UnpivotContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.pivot_clause`.
	 * @param ctx the parse tree
	 */
	enterPivot_clause?: (ctx: Pivot_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.pivot_clause`.
	 * @param ctx the parse tree
	 */
	exitPivot_clause?: (ctx: Pivot_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.unpivot_clause`.
	 * @param ctx the parse tree
	 */
	enterUnpivot_clause?: (ctx: Unpivot_clauseContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.unpivot_clause`.
	 * @param ctx the parse tree
	 */
	exitUnpivot_clause?: (ctx: Unpivot_clauseContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.full_column_name_list`.
	 * @param ctx the parse tree
	 */
	enterFull_column_name_list?: (ctx: Full_column_name_listContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.full_column_name_list`.
	 * @param ctx the parse tree
	 */
	exitFull_column_name_list?: (ctx: Full_column_name_listContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.table_name_with_hint`.
	 * @param ctx the parse tree
	 */
	enterTable_name_with_hint?: (ctx: Table_name_with_hintContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.table_name_with_hint`.
	 * @param ctx the parse tree
	 */
	exitTable_name_with_hint?: (ctx: Table_name_with_hintContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.derived_table`.
	 * @param ctx the parse tree
	 */
	enterDerived_table?: (ctx: Derived_tableContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.derived_table`.
	 * @param ctx the parse tree
	 */
	exitDerived_table?: (ctx: Derived_tableContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.function_call`.
	 * @param ctx the parse tree
	 */
	enterFunction_call?: (ctx: Function_callContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.function_call`.
	 * @param ctx the parse tree
	 */
	exitFunction_call?: (ctx: Function_callContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.freetext_predicate`.
	 * @param ctx the parse tree
	 */
	enterFreetext_predicate?: (ctx: Freetext_predicateContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.freetext_predicate`.
	 * @param ctx the parse tree
	 */
	exitFreetext_predicate?: (ctx: Freetext_predicateContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.build_in_functions`.
	 * @param ctx the parse tree
	 */
	enterBuild_in_functions?: (ctx: Build_in_functionsContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.build_in_functions`.
	 * @param ctx the parse tree
	 */
	exitBuild_in_functions?: (ctx: Build_in_functionsContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.value_call`.
	 * @param ctx the parse tree
	 */
	enterValue_call?: (ctx: Value_callContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.value_call`.
	 * @param ctx the parse tree
	 */
	exitValue_call?: (ctx: Value_callContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.query_call`.
	 * @param ctx the parse tree
	 */
	enterQuery_call?: (ctx: Query_callContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.query_call`.
	 * @param ctx the parse tree
	 */
	exitQuery_call?: (ctx: Query_callContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.exist_call`.
	 * @param ctx the parse tree
	 */
	enterExist_call?: (ctx: Exist_callContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.exist_call`.
	 * @param ctx the parse tree
	 */
	exitExist_call?: (ctx: Exist_callContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.switch_section`.
	 * @param ctx the parse tree
	 */
	enterSwitch_section?: (ctx: Switch_sectionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.switch_section`.
	 * @param ctx the parse tree
	 */
	exitSwitch_section?: (ctx: Switch_sectionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.switch_search_condition_section`.
	 * @param ctx the parse tree
	 */
	enterSwitch_search_condition_section?: (ctx: Switch_search_condition_sectionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.switch_search_condition_section`.
	 * @param ctx the parse tree
	 */
	exitSwitch_search_condition_section?: (ctx: Switch_search_condition_sectionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.as_column_alias`.
	 * @param ctx the parse tree
	 */
	enterAs_column_alias?: (ctx: As_column_aliasContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.as_column_alias`.
	 * @param ctx the parse tree
	 */
	exitAs_column_alias?: (ctx: As_column_aliasContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.as_table_alias`.
	 * @param ctx the parse tree
	 */
	enterAs_table_alias?: (ctx: As_table_aliasContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.as_table_alias`.
	 * @param ctx the parse tree
	 */
	exitAs_table_alias?: (ctx: As_table_aliasContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.table_alias`.
	 * @param ctx the parse tree
	 */
	enterTable_alias?: (ctx: Table_aliasContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.table_alias`.
	 * @param ctx the parse tree
	 */
	exitTable_alias?: (ctx: Table_aliasContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.column_alias_list`.
	 * @param ctx the parse tree
	 */
	enterColumn_alias_list?: (ctx: Column_alias_listContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.column_alias_list`.
	 * @param ctx the parse tree
	 */
	exitColumn_alias_list?: (ctx: Column_alias_listContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.column_alias`.
	 * @param ctx the parse tree
	 */
	enterColumn_alias?: (ctx: Column_aliasContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.column_alias`.
	 * @param ctx the parse tree
	 */
	exitColumn_alias?: (ctx: Column_aliasContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.expression_list`.
	 * @param ctx the parse tree
	 */
	enterExpression_list?: (ctx: Expression_listContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.expression_list`.
	 * @param ctx the parse tree
	 */
	exitExpression_list?: (ctx: Expression_listContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.aggregate_windowed_function`.
	 * @param ctx the parse tree
	 */
	enterAggregate_windowed_function?: (ctx: Aggregate_windowed_functionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.aggregate_windowed_function`.
	 * @param ctx the parse tree
	 */
	exitAggregate_windowed_function?: (ctx: Aggregate_windowed_functionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.all_distinct_expression`.
	 * @param ctx the parse tree
	 */
	enterAll_distinct_expression?: (ctx: All_distinct_expressionContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.all_distinct_expression`.
	 * @param ctx the parse tree
	 */
	exitAll_distinct_expression?: (ctx: All_distinct_expressionContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.full_table_name`.
	 * @param ctx the parse tree
	 */
	enterFull_table_name?: (ctx: Full_table_nameContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.full_table_name`.
	 * @param ctx the parse tree
	 */
	exitFull_table_name?: (ctx: Full_table_nameContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.table_name`.
	 * @param ctx the parse tree
	 */
	enterTable_name?: (ctx: Table_nameContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.table_name`.
	 * @param ctx the parse tree
	 */
	exitTable_name?: (ctx: Table_nameContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.full_column_name`.
	 * @param ctx the parse tree
	 */
	enterFull_column_name?: (ctx: Full_column_nameContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.full_column_name`.
	 * @param ctx the parse tree
	 */
	exitFull_column_name?: (ctx: Full_column_nameContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.column_name_list`.
	 * @param ctx the parse tree
	 */
	enterColumn_name_list?: (ctx: Column_name_listContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.column_name_list`.
	 * @param ctx the parse tree
	 */
	exitColumn_name_list?: (ctx: Column_name_listContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.null_notnull`.
	 * @param ctx the parse tree
	 */
	enterNull_notnull?: (ctx: Null_notnullContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.null_notnull`.
	 * @param ctx the parse tree
	 */
	exitNull_notnull?: (ctx: Null_notnullContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.scalar_function_name`.
	 * @param ctx the parse tree
	 */
	enterScalar_function_name?: (ctx: Scalar_function_nameContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.scalar_function_name`.
	 * @param ctx the parse tree
	 */
	exitScalar_function_name?: (ctx: Scalar_function_nameContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.data_type`.
	 * @param ctx the parse tree
	 */
	enterData_type?: (ctx: Data_typeContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.data_type`.
	 * @param ctx the parse tree
	 */
	exitData_type?: (ctx: Data_typeContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.constant`.
	 * @param ctx the parse tree
	 */
	enterConstant?: (ctx: ConstantContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.constant`.
	 * @param ctx the parse tree
	 */
	exitConstant?: (ctx: ConstantContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.sign`.
	 * @param ctx the parse tree
	 */
	enterSign?: (ctx: SignContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.sign`.
	 * @param ctx the parse tree
	 */
	exitSign?: (ctx: SignContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.keyword`.
	 * @param ctx the parse tree
	 */
	enterKeyword?: (ctx: KeywordContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.keyword`.
	 * @param ctx the parse tree
	 */
	exitKeyword?: (ctx: KeywordContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.id`.
	 * @param ctx the parse tree
	 */
	enterId?: (ctx: IdContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.id`.
	 * @param ctx the parse tree
	 */
	exitId?: (ctx: IdContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.comparison_operator`.
	 * @param ctx the parse tree
	 */
	enterComparison_operator?: (ctx: Comparison_operatorContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.comparison_operator`.
	 * @param ctx the parse tree
	 */
	exitComparison_operator?: (ctx: Comparison_operatorContext) => void;

	/**
	 * Enter a parse tree produced by `AqlParser.assignment_operator`.
	 * @param ctx the parse tree
	 */
	enterAssignment_operator?: (ctx: Assignment_operatorContext) => void;
	/**
	 * Exit a parse tree produced by `AqlParser.assignment_operator`.
	 * @param ctx the parse tree
	 */
	exitAssignment_operator?: (ctx: Assignment_operatorContext) => void;
}

