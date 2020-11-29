// @ts-nocheck generated
// Generated from /Users/samh/dev/analyticsQueryLanguage/src/app/lang/antlr/AqlParser.g4 by ANTLR 4.7.3-SNAPSHOT

import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';

import { AGGREGATE_WINDOWED_FUNCContext } from './AqlParser';
import { SCALAR_FUNCTIONContext } from './AqlParser';
import { BUILT_IN_FUNCContext } from './AqlParser';
import { CONVERTContext } from './AqlParser';
import { COALESCEContext } from './AqlParser';
import { DATEADDContext } from './AqlParser';
import { DATEDIFFContext } from './AqlParser';
import { GETDATEContext } from './AqlParser';
import { GETUTCDATEContext } from './AqlParser';
import { NULLIFContext } from './AqlParser';
import { ISNULLContext } from './AqlParser';
import { IIFContext } from './AqlParser';
import { STRINGAGGContext } from './AqlParser';
import { Tsql_fileContext } from './AqlParser';
import { BatchContext } from './AqlParser';
import { Sql_clausesContext } from './AqlParser';
import { Cfl_statementContext } from './AqlParser';
import { Block_statementContext } from './AqlParser';
import { Break_statementContext } from './AqlParser';
import { Continue_statementContext } from './AqlParser';
import { If_statementContext } from './AqlParser';
import { Throw_statementContext } from './AqlParser';
import { Throw_error_numberContext } from './AqlParser';
import { Throw_messageContext } from './AqlParser';
import { Throw_stateContext } from './AqlParser';
import { Try_catch_statementContext } from './AqlParser';
import { While_statementContext } from './AqlParser';
import { Print_statementContext } from './AqlParser';
import { Raiseerror_statementContext } from './AqlParser';
import { Another_statementContext } from './AqlParser';
import { Select_statement_standaloneContext } from './AqlParser';
import { Select_statementContext } from './AqlParser';
import { Set_statementContext } from './AqlParser';
import { Go_batch_statementContext } from './AqlParser';
import { Go_statementContext } from './AqlParser';
import { Set_specialContext } from './AqlParser';
import { Constant_LOCAL_IDContext } from './AqlParser';
import { ExpressionContext } from './AqlParser';
import { Primitive_expressionContext } from './AqlParser';
import { Case_expressionContext } from './AqlParser';
import { Unary_operator_expressionContext } from './AqlParser';
import { Bracket_expressionContext } from './AqlParser';
import { Constant_expressionContext } from './AqlParser';
import { SubqueryContext } from './AqlParser';
import { With_expressionContext } from './AqlParser';
import { Common_table_expressionContext } from './AqlParser';
import { Search_conditionContext } from './AqlParser';
import { Predicate_brContext } from './AqlParser';
import { PredicateContext } from './AqlParser';
import { Query_expressionContext } from './AqlParser';
import { Query_specificationContext } from './AqlParser';
import { Top_clauseContext } from './AqlParser';
import { Top_percentContext } from './AqlParser';
import { Top_countContext } from './AqlParser';
import { Order_by_clauseContext } from './AqlParser';
import { Order_by_expressionContext } from './AqlParser';
import { Group_by_itemContext } from './AqlParser';
import { Select_listContext } from './AqlParser';
import { AsteriskContext } from './AqlParser';
import { Column_elemContext } from './AqlParser';
import { Expression_elemContext } from './AqlParser';
import { Select_list_elemContext } from './AqlParser';
import { Table_sourcesContext } from './AqlParser';
import { Table_sourceContext } from './AqlParser';
import { Table_source_item_joinedContext } from './AqlParser';
import { Table_source_itemContext } from './AqlParser';
import { Join_partContext } from './AqlParser';
import { Join_onContext } from './AqlParser';
import { PivotContext } from './AqlParser';
import { UnpivotContext } from './AqlParser';
import { Pivot_clauseContext } from './AqlParser';
import { Unpivot_clauseContext } from './AqlParser';
import { Full_column_name_listContext } from './AqlParser';
import { Table_name_with_hintContext } from './AqlParser';
import { Derived_tableContext } from './AqlParser';
import { Function_callContext } from './AqlParser';
import { Freetext_predicateContext } from './AqlParser';
import { Build_in_functionsContext } from './AqlParser';
import { Value_callContext } from './AqlParser';
import { Query_callContext } from './AqlParser';
import { Exist_callContext } from './AqlParser';
import { Switch_sectionContext } from './AqlParser';
import { Switch_search_condition_sectionContext } from './AqlParser';
import { As_column_aliasContext } from './AqlParser';
import { As_table_aliasContext } from './AqlParser';
import { Table_aliasContext } from './AqlParser';
import { Column_alias_listContext } from './AqlParser';
import { Column_aliasContext } from './AqlParser';
import { Expression_listContext } from './AqlParser';
import { Aggregate_windowed_functionContext } from './AqlParser';
import { All_distinct_expressionContext } from './AqlParser';
import { Full_table_nameContext } from './AqlParser';
import { Table_nameContext } from './AqlParser';
import { Full_column_nameContext } from './AqlParser';
import { Column_name_listContext } from './AqlParser';
import { Null_notnullContext } from './AqlParser';
import { Scalar_function_nameContext } from './AqlParser';
import { Data_typeContext } from './AqlParser';
import { ConstantContext } from './AqlParser';
import { SignContext } from './AqlParser';
import { KeywordContext } from './AqlParser';
import { IdContext } from './AqlParser';
import { Comparison_operatorContext } from './AqlParser';
import { Assignment_operatorContext } from './AqlParser';

/**
 * This interface defines a complete generic visitor for a parse tree produced
 * by `AqlParser`.
 *
 * @param <Result> The return type of the visit operation. Use `void` for
 * operations with no return type.
 */
export interface AqlParserVisitor<Result> extends ParseTreeVisitor<Result> {
  /**
   * Visit a parse tree produced by the `AGGREGATE_WINDOWED_FUNC`
   * labeled alternative in `AqlParser.function_call`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAGGREGATE_WINDOWED_FUNC?: (
    ctx: AGGREGATE_WINDOWED_FUNCContext
  ) => Result;

  /**
   * Visit a parse tree produced by the `SCALAR_FUNCTION`
   * labeled alternative in `AqlParser.function_call`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSCALAR_FUNCTION?: (ctx: SCALAR_FUNCTIONContext) => Result;

  /**
   * Visit a parse tree produced by the `BUILT_IN_FUNC`
   * labeled alternative in `AqlParser.function_call`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitBUILT_IN_FUNC?: (ctx: BUILT_IN_FUNCContext) => Result;

  /**
   * Visit a parse tree produced by the `CONVERT`
   * labeled alternative in `AqlParser.build_in_functions`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCONVERT?: (ctx: CONVERTContext) => Result;

  /**
   * Visit a parse tree produced by the `COALESCE`
   * labeled alternative in `AqlParser.build_in_functions`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCOALESCE?: (ctx: COALESCEContext) => Result;

  /**
   * Visit a parse tree produced by the `DATEADD`
   * labeled alternative in `AqlParser.build_in_functions`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDATEADD?: (ctx: DATEADDContext) => Result;

  /**
   * Visit a parse tree produced by the `DATEDIFF`
   * labeled alternative in `AqlParser.build_in_functions`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDATEDIFF?: (ctx: DATEDIFFContext) => Result;

  /**
   * Visit a parse tree produced by the `GETDATE`
   * labeled alternative in `AqlParser.build_in_functions`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitGETDATE?: (ctx: GETDATEContext) => Result;

  /**
   * Visit a parse tree produced by the `GETUTCDATE`
   * labeled alternative in `AqlParser.build_in_functions`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitGETUTCDATE?: (ctx: GETUTCDATEContext) => Result;

  /**
   * Visit a parse tree produced by the `NULLIF`
   * labeled alternative in `AqlParser.build_in_functions`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitNULLIF?: (ctx: NULLIFContext) => Result;

  /**
   * Visit a parse tree produced by the `ISNULL`
   * labeled alternative in `AqlParser.build_in_functions`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitISNULL?: (ctx: ISNULLContext) => Result;

  /**
   * Visit a parse tree produced by the `IIF`
   * labeled alternative in `AqlParser.build_in_functions`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitIIF?: (ctx: IIFContext) => Result;

  /**
   * Visit a parse tree produced by the `STRINGAGG`
   * labeled alternative in `AqlParser.build_in_functions`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSTRINGAGG?: (ctx: STRINGAGGContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.tsql_file`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTsql_file?: (ctx: Tsql_fileContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.batch`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitBatch?: (ctx: BatchContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.sql_clauses`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSql_clauses?: (ctx: Sql_clausesContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.cfl_statement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCfl_statement?: (ctx: Cfl_statementContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.block_statement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitBlock_statement?: (ctx: Block_statementContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.break_statement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitBreak_statement?: (ctx: Break_statementContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.continue_statement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitContinue_statement?: (ctx: Continue_statementContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.if_statement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitIf_statement?: (ctx: If_statementContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.throw_statement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitThrow_statement?: (ctx: Throw_statementContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.throw_error_number`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitThrow_error_number?: (ctx: Throw_error_numberContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.throw_message`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitThrow_message?: (ctx: Throw_messageContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.throw_state`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitThrow_state?: (ctx: Throw_stateContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.try_catch_statement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTry_catch_statement?: (ctx: Try_catch_statementContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.while_statement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitWhile_statement?: (ctx: While_statementContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.print_statement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPrint_statement?: (ctx: Print_statementContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.raiseerror_statement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitRaiseerror_statement?: (ctx: Raiseerror_statementContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.another_statement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAnother_statement?: (ctx: Another_statementContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.select_statement_standalone`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSelect_statement_standalone?: (
    ctx: Select_statement_standaloneContext
  ) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.select_statement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSelect_statement?: (ctx: Select_statementContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.set_statement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSet_statement?: (ctx: Set_statementContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.go_batch_statement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitGo_batch_statement?: (ctx: Go_batch_statementContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.go_statement`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitGo_statement?: (ctx: Go_statementContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.set_special`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSet_special?: (ctx: Set_specialContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.constant_LOCAL_ID`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitConstant_LOCAL_ID?: (ctx: Constant_LOCAL_IDContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExpression?: (ctx: ExpressionContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.primitive_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPrimitive_expression?: (ctx: Primitive_expressionContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.case_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCase_expression?: (ctx: Case_expressionContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.unary_operator_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitUnary_operator_expression?: (
    ctx: Unary_operator_expressionContext
  ) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.bracket_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitBracket_expression?: (ctx: Bracket_expressionContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.constant_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitConstant_expression?: (ctx: Constant_expressionContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.subquery`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSubquery?: (ctx: SubqueryContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.with_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitWith_expression?: (ctx: With_expressionContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.common_table_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitCommon_table_expression?: (
    ctx: Common_table_expressionContext
  ) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.search_condition`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSearch_condition?: (ctx: Search_conditionContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.predicate_br`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPredicate_br?: (ctx: Predicate_brContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.predicate`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPredicate?: (ctx: PredicateContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.query_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitQuery_expression?: (ctx: Query_expressionContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.query_specification`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitQuery_specification?: (ctx: Query_specificationContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.top_clause`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTop_clause?: (ctx: Top_clauseContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.top_percent`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTop_percent?: (ctx: Top_percentContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.top_count`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTop_count?: (ctx: Top_countContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.order_by_clause`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitOrder_by_clause?: (ctx: Order_by_clauseContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.order_by_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitOrder_by_expression?: (ctx: Order_by_expressionContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.group_by_item`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitGroup_by_item?: (ctx: Group_by_itemContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.select_list`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSelect_list?: (ctx: Select_listContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.asterisk`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAsterisk?: (ctx: AsteriskContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.column_elem`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitColumn_elem?: (ctx: Column_elemContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.expression_elem`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExpression_elem?: (ctx: Expression_elemContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.select_list_elem`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSelect_list_elem?: (ctx: Select_list_elemContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.table_sources`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTable_sources?: (ctx: Table_sourcesContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.table_source`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTable_source?: (ctx: Table_sourceContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.table_source_item_joined`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTable_source_item_joined?: (
    ctx: Table_source_item_joinedContext
  ) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.table_source_item`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTable_source_item?: (ctx: Table_source_itemContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.join_part`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitJoin_part?: (ctx: Join_partContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.join_on`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitJoin_on?: (ctx: Join_onContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.pivot`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPivot?: (ctx: PivotContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.unpivot`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitUnpivot?: (ctx: UnpivotContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.pivot_clause`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitPivot_clause?: (ctx: Pivot_clauseContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.unpivot_clause`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitUnpivot_clause?: (ctx: Unpivot_clauseContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.full_column_name_list`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFull_column_name_list?: (ctx: Full_column_name_listContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.table_name_with_hint`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTable_name_with_hint?: (ctx: Table_name_with_hintContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.derived_table`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitDerived_table?: (ctx: Derived_tableContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.function_call`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFunction_call?: (ctx: Function_callContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.freetext_predicate`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFreetext_predicate?: (ctx: Freetext_predicateContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.build_in_functions`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitBuild_in_functions?: (ctx: Build_in_functionsContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.value_call`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitValue_call?: (ctx: Value_callContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.query_call`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitQuery_call?: (ctx: Query_callContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.exist_call`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExist_call?: (ctx: Exist_callContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.switch_section`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSwitch_section?: (ctx: Switch_sectionContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.switch_search_condition_section`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSwitch_search_condition_section?: (
    ctx: Switch_search_condition_sectionContext
  ) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.as_column_alias`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAs_column_alias?: (ctx: As_column_aliasContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.as_table_alias`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAs_table_alias?: (ctx: As_table_aliasContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.table_alias`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTable_alias?: (ctx: Table_aliasContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.column_alias_list`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitColumn_alias_list?: (ctx: Column_alias_listContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.column_alias`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitColumn_alias?: (ctx: Column_aliasContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.expression_list`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitExpression_list?: (ctx: Expression_listContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.aggregate_windowed_function`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAggregate_windowed_function?: (
    ctx: Aggregate_windowed_functionContext
  ) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.all_distinct_expression`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAll_distinct_expression?: (
    ctx: All_distinct_expressionContext
  ) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.full_table_name`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFull_table_name?: (ctx: Full_table_nameContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.table_name`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitTable_name?: (ctx: Table_nameContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.full_column_name`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitFull_column_name?: (ctx: Full_column_nameContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.column_name_list`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitColumn_name_list?: (ctx: Column_name_listContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.null_notnull`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitNull_notnull?: (ctx: Null_notnullContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.scalar_function_name`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitScalar_function_name?: (ctx: Scalar_function_nameContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.data_type`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitData_type?: (ctx: Data_typeContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.constant`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitConstant?: (ctx: ConstantContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.sign`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitSign?: (ctx: SignContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.keyword`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitKeyword?: (ctx: KeywordContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.id`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitId?: (ctx: IdContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.comparison_operator`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitComparison_operator?: (ctx: Comparison_operatorContext) => Result;

  /**
   * Visit a parse tree produced by `AqlParser.assignment_operator`.
   * @param ctx the parse tree
   * @return the visitor result
   */
  visitAssignment_operator?: (ctx: Assignment_operatorContext) => Result;
}
