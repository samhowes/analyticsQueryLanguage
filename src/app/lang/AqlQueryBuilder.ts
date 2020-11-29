import { ParserRuleContext } from 'antlr4ts';
import { ErrorNode } from 'antlr4ts/tree/ErrorNode';
import { ParseTree } from 'antlr4ts/tree/ParseTree';
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';
import { RuleNode } from 'antlr4ts/tree/RuleNode';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import * as aql from './antlr/gen/AqlParser';
import { AqlParserListener } from './antlr/gen/AqlParserListener';
import { AqlParserVisitor } from './antlr/gen/AqlParserVisitor';

export class AqlQuery {
  columns: string[] = [];
}

export class AqlQueryBuilder implements AqlParserVisitor<AqlQuery> {
  visit(tree: ParseTree): AqlQuery {
    throw new Error('Method not implemented.');
  }
  visitChildren(node: RuleNode): AqlQuery {
    throw new Error('Method not implemented.');
  }
  visitTerminal(node: TerminalNode): AqlQuery {
    throw new Error('Method not implemented.');
  }
  visitErrorNode(node: ErrorNode): AqlQuery {
    throw new Error('Method not implemented.');
  }

  //#region NotImplemented
  visitAGGREGATE_WINDOWED_FUNC?: (
    ctx: aql.AGGREGATE_WINDOWED_FUNCContext
  ) => AqlQuery;
  visitSCALAR_FUNCTION?: (ctx: aql.SCALAR_FUNCTIONContext) => AqlQuery;
  visitBUILT_IN_FUNC?: (ctx: aql.BUILT_IN_FUNCContext) => AqlQuery;
  visitCONVERT?: (ctx: aql.CONVERTContext) => AqlQuery;
  visitCOALESCE?: (ctx: aql.COALESCEContext) => AqlQuery;
  visitDATEADD?: (ctx: aql.DATEADDContext) => AqlQuery;
  visitDATEDIFF?: (ctx: aql.DATEDIFFContext) => AqlQuery;
  visitGETDATE?: (ctx: aql.GETDATEContext) => AqlQuery;
  visitGETUTCDATE?: (ctx: aql.GETUTCDATEContext) => AqlQuery;
  visitNULLIF?: (ctx: aql.NULLIFContext) => AqlQuery;
  visitISNULL?: (ctx: aql.ISNULLContext) => AqlQuery;
  visitIIF?: (ctx: aql.IIFContext) => AqlQuery;
  visitSTRINGAGG?: (ctx: aql.STRINGAGGContext) => AqlQuery;
  visitTsql_file?: (ctx: aql.Tsql_fileContext) => AqlQuery;
  visitBatch?: (ctx: aql.BatchContext) => AqlQuery;
  visitSql_clauses?: (ctx: aql.Sql_clausesContext) => AqlQuery;
  visitCfl_statement?: (ctx: aql.Cfl_statementContext) => AqlQuery;
  visitBlock_statement?: (ctx: aql.Block_statementContext) => AqlQuery;
  visitBreak_statement?: (ctx: aql.Break_statementContext) => AqlQuery;
  visitContinue_statement?: (ctx: aql.Continue_statementContext) => AqlQuery;
  visitIf_statement?: (ctx: aql.If_statementContext) => AqlQuery;
  visitThrow_statement?: (ctx: aql.Throw_statementContext) => AqlQuery;
  visitThrow_error_number?: (ctx: aql.Throw_error_numberContext) => AqlQuery;
  visitThrow_message?: (ctx: aql.Throw_messageContext) => AqlQuery;
  visitThrow_state?: (ctx: aql.Throw_stateContext) => AqlQuery;
  visitTry_catch_statement?: (ctx: aql.Try_catch_statementContext) => AqlQuery;
  visitWhile_statement?: (ctx: aql.While_statementContext) => AqlQuery;
  visitPrint_statement?: (ctx: aql.Print_statementContext) => AqlQuery;
  visitRaiseerror_statement?: (
    ctx: aql.Raiseerror_statementContext
  ) => AqlQuery;
  visitAnother_statement?: (ctx: aql.Another_statementContext) => AqlQuery;
  visitSelect_statement_standalone?: (
    ctx: aql.Select_statement_standaloneContext
  ) => AqlQuery;
  visitSelect_statement?: (ctx: aql.Select_statementContext) => AqlQuery;
  visitSet_statement?: (ctx: aql.Set_statementContext) => AqlQuery;
  visitGo_batch_statement?: (ctx: aql.Go_batch_statementContext) => AqlQuery;
  visitGo_statement?: (ctx: aql.Go_statementContext) => AqlQuery;
  visitSet_special?: (ctx: aql.Set_specialContext) => AqlQuery;
  visitConstant_LOCAL_ID?: (ctx: aql.Constant_LOCAL_IDContext) => AqlQuery;
  visitExpression?: (ctx: aql.ExpressionContext) => AqlQuery;
  visitPrimitive_expression?: (
    ctx: aql.Primitive_expressionContext
  ) => AqlQuery;
  visitCase_expression?: (ctx: aql.Case_expressionContext) => AqlQuery;
  visitUnary_operator_expression?: (
    ctx: aql.Unary_operator_expressionContext
  ) => AqlQuery;
  visitBracket_expression?: (ctx: aql.Bracket_expressionContext) => AqlQuery;
  visitConstant_expression?: (ctx: aql.Constant_expressionContext) => AqlQuery;
  visitSubquery?: (ctx: aql.SubqueryContext) => AqlQuery;
  visitWith_expression?: (ctx: aql.With_expressionContext) => AqlQuery;
  visitCommon_table_expression?: (
    ctx: aql.Common_table_expressionContext
  ) => AqlQuery;
  visitSearch_condition?: (ctx: aql.Search_conditionContext) => AqlQuery;
  visitPredicate_br?: (ctx: aql.Predicate_brContext) => AqlQuery;
  visitPredicate?: (ctx: aql.PredicateContext) => AqlQuery;
  visitQuery_expression?: (ctx: aql.Query_expressionContext) => AqlQuery;
  visitQuery_specification?: (ctx: aql.Query_specificationContext) => AqlQuery;
  visitTop_clause?: (ctx: aql.Top_clauseContext) => AqlQuery;
  visitTop_percent?: (ctx: aql.Top_percentContext) => AqlQuery;
  visitTop_count?: (ctx: aql.Top_countContext) => AqlQuery;
  visitOrder_by_clause?: (ctx: aql.Order_by_clauseContext) => AqlQuery;
  visitOrder_by_expression?: (ctx: aql.Order_by_expressionContext) => AqlQuery;
  visitGroup_by_item?: (ctx: aql.Group_by_itemContext) => AqlQuery;
  visitSelect_list?: (ctx: aql.Select_listContext) => AqlQuery;
  visitAsterisk?: (ctx: aql.AsteriskContext) => AqlQuery;
  visitColumn_elem?: (ctx: aql.Column_elemContext) => AqlQuery;
  visitExpression_elem?: (ctx: aql.Expression_elemContext) => AqlQuery;
  visitSelect_list_elem?: (ctx: aql.Select_list_elemContext) => AqlQuery;
  visitTable_sources?: (ctx: aql.Table_sourcesContext) => AqlQuery;
  visitTable_source?: (ctx: aql.Table_sourceContext) => AqlQuery;
  visitTable_source_item_joined?: (
    ctx: aql.Table_source_item_joinedContext
  ) => AqlQuery;
  visitTable_source_item?: (ctx: aql.Table_source_itemContext) => AqlQuery;
  visitJoin_part?: (ctx: aql.Join_partContext) => AqlQuery;
  visitJoin_on?: (ctx: aql.Join_onContext) => AqlQuery;
  visitPivot?: (ctx: aql.PivotContext) => AqlQuery;
  visitUnpivot?: (ctx: aql.UnpivotContext) => AqlQuery;
  visitPivot_clause?: (ctx: aql.Pivot_clauseContext) => AqlQuery;
  visitUnpivot_clause?: (ctx: aql.Unpivot_clauseContext) => AqlQuery;
  visitFull_column_name_list?: (
    ctx: aql.Full_column_name_listContext
  ) => AqlQuery;
  visitTable_name_with_hint?: (
    ctx: aql.Table_name_with_hintContext
  ) => AqlQuery;
  visitDerived_table?: (ctx: aql.Derived_tableContext) => AqlQuery;
  visitFunction_call?: (ctx: aql.Function_callContext) => AqlQuery;
  visitFreetext_predicate?: (ctx: aql.Freetext_predicateContext) => AqlQuery;
  visitBuild_in_functions?: (ctx: aql.Build_in_functionsContext) => AqlQuery;
  visitValue_call?: (ctx: aql.Value_callContext) => AqlQuery;
  visitQuery_call?: (ctx: aql.Query_callContext) => AqlQuery;
  visitExist_call?: (ctx: aql.Exist_callContext) => AqlQuery;
  visitSwitch_section?: (ctx: aql.Switch_sectionContext) => AqlQuery;
  visitSwitch_search_condition_section?: (
    ctx: aql.Switch_search_condition_sectionContext
  ) => AqlQuery;
  visitAs_column_alias?: (ctx: aql.As_column_aliasContext) => AqlQuery;
  visitAs_table_alias?: (ctx: aql.As_table_aliasContext) => AqlQuery;
  visitTable_alias?: (ctx: aql.Table_aliasContext) => AqlQuery;
  visitColumn_alias_list?: (ctx: aql.Column_alias_listContext) => AqlQuery;
  visitColumn_alias?: (ctx: aql.Column_aliasContext) => AqlQuery;
  visitExpression_list?: (ctx: aql.Expression_listContext) => AqlQuery;
  visitAggregate_windowed_function?: (
    ctx: aql.Aggregate_windowed_functionContext
  ) => AqlQuery;
  visitAll_distinct_expression?: (
    ctx: aql.All_distinct_expressionContext
  ) => AqlQuery;
  visitFull_table_name?: (ctx: aql.Full_table_nameContext) => AqlQuery;
  visitTable_name?: (ctx: aql.Table_nameContext) => AqlQuery;
  visitFull_column_name?: (ctx: aql.Full_column_nameContext) => AqlQuery;
  visitColumn_name_list?: (ctx: aql.Column_name_listContext) => AqlQuery;
  visitNull_notnull?: (ctx: aql.Null_notnullContext) => AqlQuery;
  visitScalar_function_name?: (
    ctx: aql.Scalar_function_nameContext
  ) => AqlQuery;
  visitData_type?: (ctx: aql.Data_typeContext) => AqlQuery;
  visitConstant?: (ctx: aql.ConstantContext) => AqlQuery;
  visitSign?: (ctx: aql.SignContext) => AqlQuery;
  visitKeyword?: (ctx: aql.KeywordContext) => AqlQuery;
  visitId?: (ctx: aql.IdContext) => AqlQuery;
  visitComparison_operator?: (ctx: aql.Comparison_operatorContext) => AqlQuery;
  visitAssignment_operator?: (ctx: aql.Assignment_operatorContext) => AqlQuery;
  //#endregion
}

export class AqlQueryListener implements AqlParserListener, ParseTreeListener {
  stack: AqlQuery[] = [];
  results: AqlQuery[] = [];
  current: AqlQuery;
  enterSelect_statement_standalone(
    ctx: aql.Select_statement_standaloneContext
  ) {
    this.current = new AqlQuery();
    this.stack.push(this.current);
  }
  exitSelect_statement_standalone() {
    this.results.push(this.current);
    this.stack.pop();
    this.current = null;
  }

  exitFull_column_name(ctx: aql.Full_column_nameContext) {
    const columnName = ctx._column_name._start.text;
    this.current.columns.push(columnName);
  }
  visitTerminal?: (node: TerminalNode) => void;
  visitErrorNode?: (node: ErrorNode) => void;
  enterEveryRule?: (ctx: ParserRuleContext) => void;
  exitEveryRule?: (ctx: ParserRuleContext) => void;
}
