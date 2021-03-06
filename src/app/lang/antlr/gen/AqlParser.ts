// @ts-nocheck generated
// Generated from /Users/samh/dev/analyticsQueryLanguage/src/app/lang/antlr/AqlParser.g4 by ANTLR 4.7.3-SNAPSHOT

import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { FailedPredicateException } from 'antlr4ts/FailedPredicateException';
import { NotNull } from 'antlr4ts/Decorators';
import { NoViableAltException } from 'antlr4ts/NoViableAltException';
import { Override } from 'antlr4ts/Decorators';
import { Parser } from 'antlr4ts/Parser';
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { ParserATNSimulator } from 'antlr4ts/atn/ParserATNSimulator';
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';
import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';
import { RecognitionException } from 'antlr4ts/RecognitionException';
import { RuleContext } from 'antlr4ts/RuleContext';
//import { RuleVersion } from "antlr4ts/RuleVersion";
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { Token } from 'antlr4ts/Token';
import { TokenStream } from 'antlr4ts/TokenStream';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';

import { AqlParserListener } from './AqlParserListener';

export class AqlParser extends Parser {
  public static readonly AND = 1;
  public static readonly AS = 2;
  public static readonly ASC = 3;
  public static readonly BEGIN = 4;
  public static readonly BREAK = 5;
  public static readonly BY = 6;
  public static readonly CASE = 7;
  public static readonly COALESCE = 8;
  public static readonly CONTAINS = 9;
  public static readonly CONTINUE = 10;
  public static readonly CONVERT = 11;
  public static readonly DECLARE = 12;
  public static readonly DEFAULT = 13;
  public static readonly DESC = 14;
  public static readonly DISTINCT = 15;
  public static readonly DISTRIBUTED = 16;
  public static readonly ELSE = 17;
  public static readonly END = 18;
  public static readonly EXISTS = 19;
  public static readonly FOR = 20;
  public static readonly FROM = 21;
  public static readonly GROUP = 22;
  public static readonly HAVING = 23;
  public static readonly IF = 24;
  public static readonly IN = 25;
  public static readonly INNER = 26;
  public static readonly INTO = 27;
  public static readonly IS = 28;
  public static readonly JOIN = 29;
  public static readonly LEFT = 30;
  public static readonly LIKE = 31;
  public static readonly NOT = 32;
  public static readonly NULL = 33;
  public static readonly NULLIF = 34;
  public static readonly ON = 35;
  public static readonly OR = 36;
  public static readonly ORDER = 37;
  public static readonly OUTER = 38;
  public static readonly PERCENT = 39;
  public static readonly PIVOT = 40;
  public static readonly PRINT = 41;
  public static readonly RAISERROR = 42;
  public static readonly RIGHT = 43;
  public static readonly ROWCOUNT = 44;
  public static readonly SELECT = 45;
  public static readonly SET = 46;
  public static readonly THEN = 47;
  public static readonly TOP = 48;
  public static readonly UNPIVOT = 49;
  public static readonly WHEN = 50;
  public static readonly WHERE = 51;
  public static readonly WHILE = 52;
  public static readonly WITH = 53;
  public static readonly AFTER = 54;
  public static readonly AGGREGATE = 55;
  public static readonly APPLY = 56;
  public static readonly AVG = 57;
  public static readonly BINARY_KEYWORD = 58;
  public static readonly CATCH = 59;
  public static readonly CONCAT = 60;
  public static readonly COUNT = 61;
  public static readonly DATA = 62;
  public static readonly DATEADD = 63;
  public static readonly DATEDIFF = 64;
  public static readonly DAYS = 65;
  public static readonly EMPTY = 66;
  public static readonly EXIST = 67;
  public static readonly FILTER = 68;
  public static readonly GETDATE = 69;
  public static readonly GETUTCDATE = 70;
  public static readonly GO_BATCH = 71;
  public static readonly GO = 72;
  public static readonly INT = 73;
  public static readonly MAX = 74;
  public static readonly MIN = 75;
  public static readonly NEXT = 76;
  public static readonly ONLY = 77;
  public static readonly QUERY = 78;
  public static readonly ROW = 79;
  public static readonly ROW_NUMBER = 80;
  public static readonly ROWS = 81;
  public static readonly STDEV = 82;
  public static readonly STDEVP = 83;
  public static readonly STRING_AGG = 84;
  public static readonly SUM = 85;
  public static readonly TAKE = 86;
  public static readonly THROW = 87;
  public static readonly TIME = 88;
  public static readonly TRY = 89;
  public static readonly VALUE = 90;
  public static readonly VAR = 91;
  public static readonly VARP = 92;
  public static readonly BEFORE = 93;
  public static readonly ENABLED = 94;
  public static readonly ERROR = 95;
  public static readonly GET = 96;
  public static readonly IIF = 97;
  public static readonly ISNULL = 98;
  public static readonly SPLIT = 99;
  public static readonly START = 100;
  public static readonly STOP = 101;
  public static readonly VARCHAR = 102;
  public static readonly NVARCHAR = 103;
  public static readonly SPACE = 104;
  public static readonly COMMENT = 105;
  public static readonly LINE_COMMENT = 106;
  public static readonly DOUBLE_QUOTE_ID = 107;
  public static readonly SINGLE_QUOTE = 108;
  public static readonly SQUARE_BRACKET_ID = 109;
  public static readonly LOCAL_ID = 110;
  public static readonly DECIMAL = 111;
  public static readonly ID = 112;
  public static readonly STRING = 113;
  public static readonly BINARY = 114;
  public static readonly FLOAT = 115;
  public static readonly REAL = 116;
  public static readonly EQUAL = 117;
  public static readonly GREATER = 118;
  public static readonly LESS = 119;
  public static readonly EXCLAMATION = 120;
  public static readonly PLUS_ASSIGN = 121;
  public static readonly MINUS_ASSIGN = 122;
  public static readonly MULT_ASSIGN = 123;
  public static readonly DIV_ASSIGN = 124;
  public static readonly MOD_ASSIGN = 125;
  public static readonly AND_ASSIGN = 126;
  public static readonly XOR_ASSIGN = 127;
  public static readonly OR_ASSIGN = 128;
  public static readonly DOUBLE_BAR = 129;
  public static readonly DOT = 130;
  public static readonly UNDERLINE = 131;
  public static readonly AT = 132;
  public static readonly SHARP = 133;
  public static readonly DOLLAR = 134;
  public static readonly LR_BRACKET = 135;
  public static readonly RR_BRACKET = 136;
  public static readonly COMMA = 137;
  public static readonly SEMI = 138;
  public static readonly COLON = 139;
  public static readonly STAR = 140;
  public static readonly DIVIDE = 141;
  public static readonly MODULE = 142;
  public static readonly PLUS = 143;
  public static readonly MINUS = 144;
  public static readonly BIT_NOT = 145;
  public static readonly BIT_OR = 146;
  public static readonly BIT_AND = 147;
  public static readonly BIT_XOR = 148;
  public static readonly RULE_tsql_file = 0;
  public static readonly RULE_batch = 1;
  public static readonly RULE_sql_clauses = 2;
  public static readonly RULE_cfl_statement = 3;
  public static readonly RULE_block_statement = 4;
  public static readonly RULE_break_statement = 5;
  public static readonly RULE_continue_statement = 6;
  public static readonly RULE_if_statement = 7;
  public static readonly RULE_throw_statement = 8;
  public static readonly RULE_throw_error_number = 9;
  public static readonly RULE_throw_message = 10;
  public static readonly RULE_throw_state = 11;
  public static readonly RULE_try_catch_statement = 12;
  public static readonly RULE_while_statement = 13;
  public static readonly RULE_print_statement = 14;
  public static readonly RULE_raiseerror_statement = 15;
  public static readonly RULE_another_statement = 16;
  public static readonly RULE_select_statement_standalone = 17;
  public static readonly RULE_select_statement = 18;
  public static readonly RULE_set_statement = 19;
  public static readonly RULE_go_batch_statement = 20;
  public static readonly RULE_go_statement = 21;
  public static readonly RULE_set_special = 22;
  public static readonly RULE_constant_LOCAL_ID = 23;
  public static readonly RULE_expression = 24;
  public static readonly RULE_primitive_expression = 25;
  public static readonly RULE_case_expression = 26;
  public static readonly RULE_unary_operator_expression = 27;
  public static readonly RULE_bracket_expression = 28;
  public static readonly RULE_constant_expression = 29;
  public static readonly RULE_subquery = 30;
  public static readonly RULE_with_expression = 31;
  public static readonly RULE_common_table_expression = 32;
  public static readonly RULE_search_condition = 33;
  public static readonly RULE_predicate_br = 34;
  public static readonly RULE_predicate = 35;
  public static readonly RULE_query_expression = 36;
  public static readonly RULE_query_specification = 37;
  public static readonly RULE_top_clause = 38;
  public static readonly RULE_top_percent = 39;
  public static readonly RULE_top_count = 40;
  public static readonly RULE_order_by_clause = 41;
  public static readonly RULE_order_by_expression = 42;
  public static readonly RULE_group_by_item = 43;
  public static readonly RULE_select_list = 44;
  public static readonly RULE_asterisk = 45;
  public static readonly RULE_column_elem = 46;
  public static readonly RULE_expression_elem = 47;
  public static readonly RULE_select_list_elem = 48;
  public static readonly RULE_table_sources = 49;
  public static readonly RULE_table_source = 50;
  public static readonly RULE_table_source_item_joined = 51;
  public static readonly RULE_table_source_item = 52;
  public static readonly RULE_join_part = 53;
  public static readonly RULE_join_on = 54;
  public static readonly RULE_pivot = 55;
  public static readonly RULE_unpivot = 56;
  public static readonly RULE_pivot_clause = 57;
  public static readonly RULE_unpivot_clause = 58;
  public static readonly RULE_full_column_name_list = 59;
  public static readonly RULE_table_name_with_hint = 60;
  public static readonly RULE_derived_table = 61;
  public static readonly RULE_function_call = 62;
  public static readonly RULE_freetext_predicate = 63;
  public static readonly RULE_build_in_functions = 64;
  public static readonly RULE_value_call = 65;
  public static readonly RULE_query_call = 66;
  public static readonly RULE_exist_call = 67;
  public static readonly RULE_switch_section = 68;
  public static readonly RULE_switch_search_condition_section = 69;
  public static readonly RULE_as_column_alias = 70;
  public static readonly RULE_as_table_alias = 71;
  public static readonly RULE_table_alias = 72;
  public static readonly RULE_column_alias_list = 73;
  public static readonly RULE_column_alias = 74;
  public static readonly RULE_expression_list = 75;
  public static readonly RULE_aggregate_windowed_function = 76;
  public static readonly RULE_all_distinct_expression = 77;
  public static readonly RULE_full_table_name = 78;
  public static readonly RULE_table_name = 79;
  public static readonly RULE_full_column_name = 80;
  public static readonly RULE_column_name_list = 81;
  public static readonly RULE_null_notnull = 82;
  public static readonly RULE_scalar_function_name = 83;
  public static readonly RULE_data_type = 84;
  public static readonly RULE_constant = 85;
  public static readonly RULE_sign = 86;
  public static readonly RULE_keyword = 87;
  public static readonly RULE_id = 88;
  public static readonly RULE_comparison_operator = 89;
  public static readonly RULE_assignment_operator = 90;
  // tslint:disable:no-trailing-whitespace
  public static readonly ruleNames: string[] = [
    'tsql_file',
    'batch',
    'sql_clauses',
    'cfl_statement',
    'block_statement',
    'break_statement',
    'continue_statement',
    'if_statement',
    'throw_statement',
    'throw_error_number',
    'throw_message',
    'throw_state',
    'try_catch_statement',
    'while_statement',
    'print_statement',
    'raiseerror_statement',
    'another_statement',
    'select_statement_standalone',
    'select_statement',
    'set_statement',
    'go_batch_statement',
    'go_statement',
    'set_special',
    'constant_LOCAL_ID',
    'expression',
    'primitive_expression',
    'case_expression',
    'unary_operator_expression',
    'bracket_expression',
    'constant_expression',
    'subquery',
    'with_expression',
    'common_table_expression',
    'search_condition',
    'predicate_br',
    'predicate',
    'query_expression',
    'query_specification',
    'top_clause',
    'top_percent',
    'top_count',
    'order_by_clause',
    'order_by_expression',
    'group_by_item',
    'select_list',
    'asterisk',
    'column_elem',
    'expression_elem',
    'select_list_elem',
    'table_sources',
    'table_source',
    'table_source_item_joined',
    'table_source_item',
    'join_part',
    'join_on',
    'pivot',
    'unpivot',
    'pivot_clause',
    'unpivot_clause',
    'full_column_name_list',
    'table_name_with_hint',
    'derived_table',
    'function_call',
    'freetext_predicate',
    'build_in_functions',
    'value_call',
    'query_call',
    'exist_call',
    'switch_section',
    'switch_search_condition_section',
    'as_column_alias',
    'as_table_alias',
    'table_alias',
    'column_alias_list',
    'column_alias',
    'expression_list',
    'aggregate_windowed_function',
    'all_distinct_expression',
    'full_table_name',
    'table_name',
    'full_column_name',
    'column_name_list',
    'null_notnull',
    'scalar_function_name',
    'data_type',
    'constant',
    'sign',
    'keyword',
    'id',
    'comparison_operator',
    'assignment_operator',
  ];

  private static readonly _LITERAL_NAMES: Array<string | undefined> = [
    undefined,
    "'AND'",
    "'AS'",
    "'ASC'",
    "'BEGIN'",
    "'BREAK'",
    "'BY'",
    "'CASE'",
    "'COALESCE'",
    "'CONTAINS'",
    "'CONTINUE'",
    undefined,
    "'DECLARE'",
    "'DEFAULT'",
    "'DESC'",
    "'DISTINCT'",
    "'DISTRIBUTED'",
    "'ELSE'",
    "'END'",
    "'EXISTS'",
    "'FOR'",
    "'FROM'",
    "'GROUP'",
    "'HAVING'",
    "'IF'",
    "'IN'",
    "'INNER'",
    "'INTO'",
    "'IS'",
    "'JOIN'",
    "'LEFT'",
    "'LIKE'",
    "'NOT'",
    "'NULL'",
    "'NULLIF'",
    "'ON'",
    "'OR'",
    "'ORDER'",
    "'OUTER'",
    "'PERCENT'",
    "'PIVOT'",
    "'PRINT'",
    "'RAISERROR'",
    "'RIGHT'",
    "'ROWCOUNT'",
    "'SELECT'",
    "'SET'",
    "'THEN'",
    "'TOP'",
    "'UNPIVOT'",
    "'WHEN'",
    "'WHERE'",
    "'WHILE'",
    "'WITH'",
    "'AFTER'",
    "'AGGREGATE'",
    "'APPLY'",
    "'AVG'",
    "'BINARY'",
    "'CATCH'",
    "'CONCAT'",
    "'COUNT'",
    "'DATA'",
    "'DATEADD'",
    "'DATEDIFF'",
    "'DAYS'",
    "'EMPTY'",
    "'EXIST'",
    "'FILTER'",
    "'GETDATE'",
    "'GETUTCDATE'",
    undefined,
    "'GO'",
    "'INT'",
    "'MAX'",
    "'MIN'",
    "'NEXT'",
    "'ONLY'",
    "'QUERY'",
    "'ROW'",
    "'ROW_NUMBER'",
    "'ROWS'",
    "'STDEV'",
    "'STDEVP'",
    "'STRING_AGG'",
    "'SUM'",
    "'TAKE'",
    "'THROW'",
    "'TIME'",
    "'TRY'",
    "'VALUE'",
    "'VAR'",
    "'VARP'",
    "'BEFORE'",
    "'ENABLED'",
    "'ERROR'",
    "'GET'",
    "'IIF'",
    "'ISNULL'",
    "'SPLIT'",
    "'START'",
    "'STOP'",
    "'VARCHAR'",
    "'NVARCHAR'",
    undefined,
    undefined,
    undefined,
    undefined,
    "'''",
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    undefined,
    "'='",
    "'>'",
    "'<'",
    "'!'",
    "'+='",
    "'-='",
    "'*='",
    "'/='",
    "'%='",
    "'&='",
    "'^='",
    "'|='",
    "'||'",
    "'.'",
    "'_'",
    "'@'",
    "'#'",
    "'$'",
    "'('",
    "')'",
    "','",
    "';'",
    "':'",
    "'*'",
    "'/'",
    "'%'",
    "'+'",
    "'-'",
    "'~'",
    "'|'",
    "'&'",
    "'^'",
  ];
  private static readonly _SYMBOLIC_NAMES: Array<string | undefined> = [
    undefined,
    'AND',
    'AS',
    'ASC',
    'BEGIN',
    'BREAK',
    'BY',
    'CASE',
    'COALESCE',
    'CONTAINS',
    'CONTINUE',
    'CONVERT',
    'DECLARE',
    'DEFAULT',
    'DESC',
    'DISTINCT',
    'DISTRIBUTED',
    'ELSE',
    'END',
    'EXISTS',
    'FOR',
    'FROM',
    'GROUP',
    'HAVING',
    'IF',
    'IN',
    'INNER',
    'INTO',
    'IS',
    'JOIN',
    'LEFT',
    'LIKE',
    'NOT',
    'NULL',
    'NULLIF',
    'ON',
    'OR',
    'ORDER',
    'OUTER',
    'PERCENT',
    'PIVOT',
    'PRINT',
    'RAISERROR',
    'RIGHT',
    'ROWCOUNT',
    'SELECT',
    'SET',
    'THEN',
    'TOP',
    'UNPIVOT',
    'WHEN',
    'WHERE',
    'WHILE',
    'WITH',
    'AFTER',
    'AGGREGATE',
    'APPLY',
    'AVG',
    'BINARY_KEYWORD',
    'CATCH',
    'CONCAT',
    'COUNT',
    'DATA',
    'DATEADD',
    'DATEDIFF',
    'DAYS',
    'EMPTY',
    'EXIST',
    'FILTER',
    'GETDATE',
    'GETUTCDATE',
    'GO_BATCH',
    'GO',
    'INT',
    'MAX',
    'MIN',
    'NEXT',
    'ONLY',
    'QUERY',
    'ROW',
    'ROW_NUMBER',
    'ROWS',
    'STDEV',
    'STDEVP',
    'STRING_AGG',
    'SUM',
    'TAKE',
    'THROW',
    'TIME',
    'TRY',
    'VALUE',
    'VAR',
    'VARP',
    'BEFORE',
    'ENABLED',
    'ERROR',
    'GET',
    'IIF',
    'ISNULL',
    'SPLIT',
    'START',
    'STOP',
    'VARCHAR',
    'NVARCHAR',
    'SPACE',
    'COMMENT',
    'LINE_COMMENT',
    'DOUBLE_QUOTE_ID',
    'SINGLE_QUOTE',
    'SQUARE_BRACKET_ID',
    'LOCAL_ID',
    'DECIMAL',
    'ID',
    'STRING',
    'BINARY',
    'FLOAT',
    'REAL',
    'EQUAL',
    'GREATER',
    'LESS',
    'EXCLAMATION',
    'PLUS_ASSIGN',
    'MINUS_ASSIGN',
    'MULT_ASSIGN',
    'DIV_ASSIGN',
    'MOD_ASSIGN',
    'AND_ASSIGN',
    'XOR_ASSIGN',
    'OR_ASSIGN',
    'DOUBLE_BAR',
    'DOT',
    'UNDERLINE',
    'AT',
    'SHARP',
    'DOLLAR',
    'LR_BRACKET',
    'RR_BRACKET',
    'COMMA',
    'SEMI',
    'COLON',
    'STAR',
    'DIVIDE',
    'MODULE',
    'PLUS',
    'MINUS',
    'BIT_NOT',
    'BIT_OR',
    'BIT_AND',
    'BIT_XOR',
  ];
  public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(
    AqlParser._LITERAL_NAMES,
    AqlParser._SYMBOLIC_NAMES,
    []
  );

  // @Override
  // @NotNull
  public get vocabulary(): Vocabulary {
    return AqlParser.VOCABULARY;
  }
  // tslint:enable:no-trailing-whitespace

  // @Override
  public get grammarFileName(): string {
    return 'AqlParser.g4';
  }

  // @Override
  public get ruleNames(): string[] {
    return AqlParser.ruleNames;
  }

  // @Override
  public get serializedATN(): string {
    return AqlParser._serializedATN;
  }

  constructor(input: TokenStream) {
    super(input);
    this._interp = new ParserATNSimulator(AqlParser._ATN, this);
  }
  // @RuleVersion(0)
  public tsql_file(): Tsql_fileContext {
    let _localctx: Tsql_fileContext = new Tsql_fileContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 0, AqlParser.RULE_tsql_file);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 185;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (
          ((_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << AqlParser.BEGIN) |
                (1 << AqlParser.BREAK) |
                (1 << AqlParser.CONTINUE) |
                (1 << AqlParser.IF))) !==
              0) ||
          (((_la - 41) & ~0x1f) === 0 &&
            ((1 << (_la - 41)) &
              ((1 << (AqlParser.PRINT - 41)) |
                (1 << (AqlParser.RAISERROR - 41)) |
                (1 << (AqlParser.SELECT - 41)) |
                (1 << (AqlParser.SET - 41)) |
                (1 << (AqlParser.WHILE - 41)) |
                (1 << (AqlParser.WITH - 41)) |
                (1 << (AqlParser.GO_BATCH - 41)) |
                (1 << (AqlParser.GO - 41)))) !==
              0) ||
          _la === AqlParser.THROW ||
          _la === AqlParser.LR_BRACKET ||
          _la === AqlParser.SEMI
        ) {
          {
            {
              this.state = 182;
              this.batch();
            }
          }
          this.state = 187;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 188;
        this.match(AqlParser.EOF);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public batch(): BatchContext {
    let _localctx: BatchContext = new BatchContext(this._ctx, this.state);
    this.enterRule(_localctx, 2, AqlParser.RULE_batch);
    try {
      let _alt: number;
      this.state = 206;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 4, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 190;
            this.go_batch_statement();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 197;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
              case AqlParser.GO_BATCH:
                {
                  this.state = 191;
                  this.go_batch_statement();
                }
                break;
              case AqlParser.BEGIN:
              case AqlParser.BREAK:
              case AqlParser.CONTINUE:
              case AqlParser.IF:
              case AqlParser.PRINT:
              case AqlParser.RAISERROR:
              case AqlParser.SELECT:
              case AqlParser.SET:
              case AqlParser.WHILE:
              case AqlParser.WITH:
              case AqlParser.THROW:
              case AqlParser.LR_BRACKET:
              case AqlParser.SEMI:
                {
                  this.state = 193;
                  this._errHandler.sync(this);
                  _alt = 1;
                  do {
                    switch (_alt) {
                      case 1:
                        {
                          {
                            this.state = 192;
                            this.sql_clauses();
                          }
                        }
                        break;
                      default:
                        throw new NoViableAltException(this);
                    }
                    this.state = 195;
                    this._errHandler.sync(this);
                    _alt = this.interpreter.adaptivePredict(
                      this._input,
                      1,
                      this._ctx
                    );
                  } while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER);
                }
                break;
              default:
                throw new NoViableAltException(this);
            }
            this.state = 202;
            this._errHandler.sync(this);
            _alt = this.interpreter.adaptivePredict(this._input, 3, this._ctx);
            while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
              if (_alt === 1) {
                {
                  {
                    this.state = 199;
                    this.go_statement();
                  }
                }
              }
              this.state = 204;
              this._errHandler.sync(this);
              _alt = this.interpreter.adaptivePredict(
                this._input,
                3,
                this._ctx
              );
            }
          }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 205;
            this.go_statement();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public sql_clauses(): Sql_clausesContext {
    let _localctx: Sql_clausesContext = new Sql_clausesContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 4, AqlParser.RULE_sql_clauses);
    try {
      this.state = 221;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case AqlParser.SELECT:
        case AqlParser.WITH:
        case AqlParser.LR_BRACKET:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 208;
            this.select_statement_standalone();
            this.state = 210;
            this._errHandler.sync(this);
            switch (
              this.interpreter.adaptivePredict(this._input, 5, this._ctx)
            ) {
              case 1:
                {
                  this.state = 209;
                  this.match(AqlParser.SEMI);
                }
                break;
            }
          }
          break;
        case AqlParser.BEGIN:
        case AqlParser.BREAK:
        case AqlParser.CONTINUE:
        case AqlParser.IF:
        case AqlParser.PRINT:
        case AqlParser.RAISERROR:
        case AqlParser.WHILE:
        case AqlParser.THROW:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 212;
            this.cfl_statement();
            this.state = 214;
            this._errHandler.sync(this);
            switch (
              this.interpreter.adaptivePredict(this._input, 6, this._ctx)
            ) {
              case 1:
                {
                  this.state = 213;
                  this.match(AqlParser.SEMI);
                }
                break;
            }
          }
          break;
        case AqlParser.SET:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 216;
            this.another_statement();
            this.state = 218;
            this._errHandler.sync(this);
            switch (
              this.interpreter.adaptivePredict(this._input, 7, this._ctx)
            ) {
              case 1:
                {
                  this.state = 217;
                  this.match(AqlParser.SEMI);
                }
                break;
            }
          }
          break;
        case AqlParser.SEMI:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 220;
            this.match(AqlParser.SEMI);
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public cfl_statement(): Cfl_statementContext {
    let _localctx: Cfl_statementContext = new Cfl_statementContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 6, AqlParser.RULE_cfl_statement);
    try {
      this.state = 232;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 9, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 223;
            this.block_statement();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 224;
            this.break_statement();
          }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 225;
            this.continue_statement();
          }
          break;

        case 4:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 226;
            this.if_statement();
          }
          break;

        case 5:
          this.enterOuterAlt(_localctx, 5);
          {
            this.state = 227;
            this.throw_statement();
          }
          break;

        case 6:
          this.enterOuterAlt(_localctx, 6);
          {
            this.state = 228;
            this.try_catch_statement();
          }
          break;

        case 7:
          this.enterOuterAlt(_localctx, 7);
          {
            this.state = 229;
            this.while_statement();
          }
          break;

        case 8:
          this.enterOuterAlt(_localctx, 8);
          {
            this.state = 230;
            this.print_statement();
          }
          break;

        case 9:
          this.enterOuterAlt(_localctx, 9);
          {
            this.state = 231;
            this.raiseerror_statement();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public block_statement(): Block_statementContext {
    let _localctx: Block_statementContext = new Block_statementContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 8, AqlParser.RULE_block_statement);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 234;
        this.match(AqlParser.BEGIN);
        this.state = 236;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 10, this._ctx)) {
          case 1:
            {
              this.state = 235;
              this.match(AqlParser.SEMI);
            }
            break;
        }
        this.state = 241;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (
          ((_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << AqlParser.BEGIN) |
                (1 << AqlParser.BREAK) |
                (1 << AqlParser.CONTINUE) |
                (1 << AqlParser.IF))) !==
              0) ||
          (((_la - 41) & ~0x1f) === 0 &&
            ((1 << (_la - 41)) &
              ((1 << (AqlParser.PRINT - 41)) |
                (1 << (AqlParser.RAISERROR - 41)) |
                (1 << (AqlParser.SELECT - 41)) |
                (1 << (AqlParser.SET - 41)) |
                (1 << (AqlParser.WHILE - 41)) |
                (1 << (AqlParser.WITH - 41)))) !==
              0) ||
          _la === AqlParser.THROW ||
          _la === AqlParser.LR_BRACKET ||
          _la === AqlParser.SEMI
        ) {
          {
            {
              this.state = 238;
              this.sql_clauses();
            }
          }
          this.state = 243;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 244;
        this.match(AqlParser.END);
        this.state = 246;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 12, this._ctx)) {
          case 1:
            {
              this.state = 245;
              this.match(AqlParser.SEMI);
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public break_statement(): Break_statementContext {
    let _localctx: Break_statementContext = new Break_statementContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 10, AqlParser.RULE_break_statement);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 248;
        this.match(AqlParser.BREAK);
        this.state = 250;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 13, this._ctx)) {
          case 1:
            {
              this.state = 249;
              this.match(AqlParser.SEMI);
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public continue_statement(): Continue_statementContext {
    let _localctx: Continue_statementContext = new Continue_statementContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 12, AqlParser.RULE_continue_statement);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 252;
        this.match(AqlParser.CONTINUE);
        this.state = 254;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 14, this._ctx)) {
          case 1:
            {
              this.state = 253;
              this.match(AqlParser.SEMI);
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public if_statement(): If_statementContext {
    let _localctx: If_statementContext = new If_statementContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 14, AqlParser.RULE_if_statement);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 256;
        this.match(AqlParser.IF);
        this.state = 257;
        this.search_condition();
        this.state = 258;
        this.sql_clauses();
        this.state = 261;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 15, this._ctx)) {
          case 1:
            {
              this.state = 259;
              this.match(AqlParser.ELSE);
              this.state = 260;
              this.sql_clauses();
            }
            break;
        }
        this.state = 264;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 16, this._ctx)) {
          case 1:
            {
              this.state = 263;
              this.match(AqlParser.SEMI);
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public throw_statement(): Throw_statementContext {
    let _localctx: Throw_statementContext = new Throw_statementContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 16, AqlParser.RULE_throw_statement);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 266;
        this.match(AqlParser.THROW);
        this.state = 273;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === AqlParser.LOCAL_ID || _la === AqlParser.DECIMAL) {
          {
            this.state = 267;
            this.throw_error_number();
            this.state = 268;
            this.match(AqlParser.COMMA);
            this.state = 269;
            this.throw_message();
            this.state = 270;
            this.match(AqlParser.COMMA);
            this.state = 271;
            this.throw_state();
          }
        }

        this.state = 276;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 18, this._ctx)) {
          case 1:
            {
              this.state = 275;
              this.match(AqlParser.SEMI);
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public throw_error_number(): Throw_error_numberContext {
    let _localctx: Throw_error_numberContext = new Throw_error_numberContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 18, AqlParser.RULE_throw_error_number);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 278;
        _la = this._input.LA(1);
        if (!(_la === AqlParser.LOCAL_ID || _la === AqlParser.DECIMAL)) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }

          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public throw_message(): Throw_messageContext {
    let _localctx: Throw_messageContext = new Throw_messageContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 20, AqlParser.RULE_throw_message);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 280;
        _la = this._input.LA(1);
        if (!(_la === AqlParser.LOCAL_ID || _la === AqlParser.STRING)) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }

          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public throw_state(): Throw_stateContext {
    let _localctx: Throw_stateContext = new Throw_stateContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 22, AqlParser.RULE_throw_state);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 282;
        _la = this._input.LA(1);
        if (!(_la === AqlParser.LOCAL_ID || _la === AqlParser.DECIMAL)) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }

          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public try_catch_statement(): Try_catch_statementContext {
    let _localctx: Try_catch_statementContext = new Try_catch_statementContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 24, AqlParser.RULE_try_catch_statement);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 284;
        this.match(AqlParser.BEGIN);
        this.state = 285;
        this.match(AqlParser.TRY);
        this.state = 287;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 19, this._ctx)) {
          case 1:
            {
              this.state = 286;
              this.match(AqlParser.SEMI);
            }
            break;
        }
        this.state = 290;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        do {
          {
            {
              this.state = 289;
              _localctx._try_clauses = this.sql_clauses();
            }
          }
          this.state = 292;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        } while (
          ((_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << AqlParser.BEGIN) |
                (1 << AqlParser.BREAK) |
                (1 << AqlParser.CONTINUE) |
                (1 << AqlParser.IF))) !==
              0) ||
          (((_la - 41) & ~0x1f) === 0 &&
            ((1 << (_la - 41)) &
              ((1 << (AqlParser.PRINT - 41)) |
                (1 << (AqlParser.RAISERROR - 41)) |
                (1 << (AqlParser.SELECT - 41)) |
                (1 << (AqlParser.SET - 41)) |
                (1 << (AqlParser.WHILE - 41)) |
                (1 << (AqlParser.WITH - 41)))) !==
              0) ||
          _la === AqlParser.THROW ||
          _la === AqlParser.LR_BRACKET ||
          _la === AqlParser.SEMI
        );
        this.state = 294;
        this.match(AqlParser.END);
        this.state = 295;
        this.match(AqlParser.TRY);
        this.state = 297;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === AqlParser.SEMI) {
          {
            this.state = 296;
            this.match(AqlParser.SEMI);
          }
        }

        this.state = 299;
        this.match(AqlParser.BEGIN);
        this.state = 300;
        this.match(AqlParser.CATCH);
        this.state = 302;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 22, this._ctx)) {
          case 1:
            {
              this.state = 301;
              this.match(AqlParser.SEMI);
            }
            break;
        }
        this.state = 307;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (
          ((_la & ~0x1f) === 0 &&
            ((1 << _la) &
              ((1 << AqlParser.BEGIN) |
                (1 << AqlParser.BREAK) |
                (1 << AqlParser.CONTINUE) |
                (1 << AqlParser.IF))) !==
              0) ||
          (((_la - 41) & ~0x1f) === 0 &&
            ((1 << (_la - 41)) &
              ((1 << (AqlParser.PRINT - 41)) |
                (1 << (AqlParser.RAISERROR - 41)) |
                (1 << (AqlParser.SELECT - 41)) |
                (1 << (AqlParser.SET - 41)) |
                (1 << (AqlParser.WHILE - 41)) |
                (1 << (AqlParser.WITH - 41)))) !==
              0) ||
          _la === AqlParser.THROW ||
          _la === AqlParser.LR_BRACKET ||
          _la === AqlParser.SEMI
        ) {
          {
            {
              this.state = 304;
              _localctx._catch_clauses = this.sql_clauses();
            }
          }
          this.state = 309;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 310;
        this.match(AqlParser.END);
        this.state = 311;
        this.match(AqlParser.CATCH);
        this.state = 313;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 24, this._ctx)) {
          case 1:
            {
              this.state = 312;
              this.match(AqlParser.SEMI);
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public while_statement(): While_statementContext {
    let _localctx: While_statementContext = new While_statementContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 26, AqlParser.RULE_while_statement);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 315;
        this.match(AqlParser.WHILE);
        this.state = 316;
        this.search_condition();
        this.state = 326;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 27, this._ctx)) {
          case 1:
            {
              this.state = 317;
              this.sql_clauses();
            }
            break;

          case 2:
            {
              this.state = 318;
              this.match(AqlParser.BREAK);
              this.state = 320;
              this._errHandler.sync(this);
              switch (
                this.interpreter.adaptivePredict(this._input, 25, this._ctx)
              ) {
                case 1:
                  {
                    this.state = 319;
                    this.match(AqlParser.SEMI);
                  }
                  break;
              }
            }
            break;

          case 3:
            {
              this.state = 322;
              this.match(AqlParser.CONTINUE);
              this.state = 324;
              this._errHandler.sync(this);
              switch (
                this.interpreter.adaptivePredict(this._input, 26, this._ctx)
              ) {
                case 1:
                  {
                    this.state = 323;
                    this.match(AqlParser.SEMI);
                  }
                  break;
              }
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public print_statement(): Print_statementContext {
    let _localctx: Print_statementContext = new Print_statementContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 28, AqlParser.RULE_print_statement);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 328;
        this.match(AqlParser.PRINT);
        this.state = 331;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 28, this._ctx)) {
          case 1:
            {
              this.state = 329;
              this.expression(0);
            }
            break;

          case 2:
            {
              this.state = 330;
              this.match(AqlParser.DOUBLE_QUOTE_ID);
            }
            break;
        }
        this.state = 337;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === AqlParser.COMMA) {
          {
            {
              this.state = 333;
              this.match(AqlParser.COMMA);
              this.state = 334;
              this.match(AqlParser.LOCAL_ID);
            }
          }
          this.state = 339;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 341;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 30, this._ctx)) {
          case 1:
            {
              this.state = 340;
              this.match(AqlParser.SEMI);
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public raiseerror_statement(): Raiseerror_statementContext {
    let _localctx: Raiseerror_statementContext = new Raiseerror_statementContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 30, AqlParser.RULE_raiseerror_statement);
    let _la: number;
    try {
      this.state = 360;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 33, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 343;
            this.match(AqlParser.RAISERROR);
            this.state = 344;
            this.match(AqlParser.LR_BRACKET);
            this.state = 345;
            _localctx._msg = this._input.LT(1);
            _la = this._input.LA(1);
            if (
              !(
                ((_la - 110) & ~0x1f) === 0 &&
                ((1 << (_la - 110)) &
                  ((1 << (AqlParser.LOCAL_ID - 110)) |
                    (1 << (AqlParser.DECIMAL - 110)) |
                    (1 << (AqlParser.STRING - 110)))) !==
                  0
              )
            ) {
              _localctx._msg = this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 346;
            this.match(AqlParser.RR_BRACKET);
            this.state = 348;
            this._errHandler.sync(this);
            switch (
              this.interpreter.adaptivePredict(this._input, 31, this._ctx)
            ) {
              case 1:
                {
                  this.state = 347;
                  this.match(AqlParser.SEMI);
                }
                break;
            }
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 350;
            this.match(AqlParser.RAISERROR);
            this.state = 351;
            this.match(AqlParser.DECIMAL);
            this.state = 352;
            _localctx._formatstring = this._input.LT(1);
            _la = this._input.LA(1);
            if (
              !(
                ((_la - 107) & ~0x1f) === 0 &&
                ((1 << (_la - 107)) &
                  ((1 << (AqlParser.DOUBLE_QUOTE_ID - 107)) |
                    (1 << (AqlParser.LOCAL_ID - 107)) |
                    (1 << (AqlParser.STRING - 107)))) !==
                  0
              )
            ) {
              _localctx._formatstring = this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 357;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === AqlParser.COMMA) {
              {
                {
                  this.state = 353;
                  this.match(AqlParser.COMMA);
                  this.state = 354;
                  _localctx._argument = this._input.LT(1);
                  _la = this._input.LA(1);
                  if (
                    !(
                      ((_la - 110) & ~0x1f) === 0 &&
                      ((1 << (_la - 110)) &
                        ((1 << (AqlParser.LOCAL_ID - 110)) |
                          (1 << (AqlParser.DECIMAL - 110)) |
                          (1 << (AqlParser.STRING - 110)))) !==
                        0
                    )
                  ) {
                    _localctx._argument = this._errHandler.recoverInline(this);
                  } else {
                    if (this._input.LA(1) === Token.EOF) {
                      this.matchedEOF = true;
                    }

                    this._errHandler.reportMatch(this);
                    this.consume();
                  }
                }
              }
              this.state = 359;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public another_statement(): Another_statementContext {
    let _localctx: Another_statementContext = new Another_statementContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 32, AqlParser.RULE_another_statement);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 362;
        this.set_statement();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public select_statement_standalone(): Select_statement_standaloneContext {
    let _localctx: Select_statement_standaloneContext = new Select_statement_standaloneContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 34, AqlParser.RULE_select_statement_standalone);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 365;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === AqlParser.WITH) {
          {
            this.state = 364;
            this.with_expression();
          }
        }

        this.state = 367;
        this.select_statement();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public select_statement(): Select_statementContext {
    let _localctx: Select_statementContext = new Select_statementContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 36, AqlParser.RULE_select_statement);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 369;
        this.query_expression();
        this.state = 371;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === AqlParser.ORDER) {
          {
            this.state = 370;
            this.order_by_clause();
          }
        }

        this.state = 374;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 36, this._ctx)) {
          case 1:
            {
              this.state = 373;
              this.match(AqlParser.SEMI);
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public set_statement(): Set_statementContext {
    let _localctx: Set_statementContext = new Set_statementContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 38, AqlParser.RULE_set_statement);
    let _la: number;
    try {
      this.state = 395;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 40, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 376;
            this.match(AqlParser.SET);
            this.state = 377;
            this.match(AqlParser.LOCAL_ID);
            this.state = 380;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === AqlParser.DOT) {
              {
                this.state = 378;
                this.match(AqlParser.DOT);
                this.state = 379;
                _localctx._member_name = this.id();
              }
            }

            this.state = 382;
            this.match(AqlParser.EQUAL);
            this.state = 383;
            this.expression(0);
            this.state = 385;
            this._errHandler.sync(this);
            switch (
              this.interpreter.adaptivePredict(this._input, 38, this._ctx)
            ) {
              case 1:
                {
                  this.state = 384;
                  this.match(AqlParser.SEMI);
                }
                break;
            }
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 387;
            this.match(AqlParser.SET);
            this.state = 388;
            this.match(AqlParser.LOCAL_ID);
            this.state = 389;
            this.assignment_operator();
            this.state = 390;
            this.expression(0);
            this.state = 392;
            this._errHandler.sync(this);
            switch (
              this.interpreter.adaptivePredict(this._input, 39, this._ctx)
            ) {
              case 1:
                {
                  this.state = 391;
                  this.match(AqlParser.SEMI);
                }
                break;
            }
          }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 394;
            this.set_special();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public go_batch_statement(): Go_batch_statementContext {
    let _localctx: Go_batch_statementContext = new Go_batch_statementContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 40, AqlParser.RULE_go_batch_statement);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 397;
        this.match(AqlParser.GO_BATCH);
        this.state = 399;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === AqlParser.DECIMAL) {
          {
            this.state = 398;
            _localctx._count = this.match(AqlParser.DECIMAL);
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public go_statement(): Go_statementContext {
    let _localctx: Go_statementContext = new Go_statementContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 42, AqlParser.RULE_go_statement);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 401;
        this.match(AqlParser.GO);
        this.state = 403;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === AqlParser.DECIMAL) {
          {
            this.state = 402;
            _localctx._count = this.match(AqlParser.DECIMAL);
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public set_special(): Set_specialContext {
    let _localctx: Set_specialContext = new Set_specialContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 44, AqlParser.RULE_set_special);
    let _la: number;
    try {
      this.state = 420;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 46, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 405;
            this.match(AqlParser.SET);
            this.state = 406;
            this.id();
            this.state = 409;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
              case AqlParser.AFTER:
              case AqlParser.AGGREGATE:
              case AqlParser.APPLY:
              case AqlParser.AVG:
              case AqlParser.BINARY_KEYWORD:
              case AqlParser.CATCH:
              case AqlParser.CONCAT:
              case AqlParser.COUNT:
              case AqlParser.DATA:
              case AqlParser.DATEADD:
              case AqlParser.DATEDIFF:
              case AqlParser.DAYS:
              case AqlParser.EMPTY:
              case AqlParser.EXIST:
              case AqlParser.FILTER:
              case AqlParser.GETDATE:
              case AqlParser.GETUTCDATE:
              case AqlParser.GO_BATCH:
              case AqlParser.GO:
              case AqlParser.INT:
              case AqlParser.MAX:
              case AqlParser.MIN:
              case AqlParser.NEXT:
              case AqlParser.ONLY:
              case AqlParser.QUERY:
              case AqlParser.ROW:
              case AqlParser.ROW_NUMBER:
              case AqlParser.ROWS:
              case AqlParser.STDEV:
              case AqlParser.STDEVP:
              case AqlParser.STRING_AGG:
              case AqlParser.SUM:
              case AqlParser.TAKE:
              case AqlParser.THROW:
              case AqlParser.TIME:
              case AqlParser.TRY:
              case AqlParser.VALUE:
              case AqlParser.VAR:
              case AqlParser.VARP:
              case AqlParser.BEFORE:
              case AqlParser.ENABLED:
              case AqlParser.ERROR:
              case AqlParser.GET:
              case AqlParser.IIF:
              case AqlParser.ISNULL:
              case AqlParser.SPLIT:
              case AqlParser.START:
              case AqlParser.STOP:
              case AqlParser.VARCHAR:
              case AqlParser.NVARCHAR:
              case AqlParser.DOUBLE_QUOTE_ID:
              case AqlParser.SQUARE_BRACKET_ID:
              case AqlParser.ID:
                {
                  this.state = 407;
                  this.id();
                }
                break;
              case AqlParser.LOCAL_ID:
              case AqlParser.DECIMAL:
              case AqlParser.STRING:
              case AqlParser.BINARY:
              case AqlParser.FLOAT:
              case AqlParser.REAL:
              case AqlParser.DOLLAR:
              case AqlParser.PLUS:
              case AqlParser.MINUS:
                {
                  this.state = 408;
                  this.constant_LOCAL_ID();
                }
                break;
              default:
                throw new NoViableAltException(this);
            }
            this.state = 412;
            this._errHandler.sync(this);
            switch (
              this.interpreter.adaptivePredict(this._input, 44, this._ctx)
            ) {
              case 1:
                {
                  this.state = 411;
                  this.match(AqlParser.SEMI);
                }
                break;
            }
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 414;
            this.match(AqlParser.SET);
            this.state = 415;
            this.match(AqlParser.ROWCOUNT);
            this.state = 416;
            _la = this._input.LA(1);
            if (!(_la === AqlParser.LOCAL_ID || _la === AqlParser.DECIMAL)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 418;
            this._errHandler.sync(this);
            switch (
              this.interpreter.adaptivePredict(this._input, 45, this._ctx)
            ) {
              case 1:
                {
                  this.state = 417;
                  this.match(AqlParser.SEMI);
                }
                break;
            }
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public constant_LOCAL_ID(): Constant_LOCAL_IDContext {
    let _localctx: Constant_LOCAL_IDContext = new Constant_LOCAL_IDContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 46, AqlParser.RULE_constant_LOCAL_ID);
    try {
      this.state = 424;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case AqlParser.DECIMAL:
        case AqlParser.STRING:
        case AqlParser.BINARY:
        case AqlParser.FLOAT:
        case AqlParser.REAL:
        case AqlParser.DOLLAR:
        case AqlParser.PLUS:
        case AqlParser.MINUS:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 422;
            this.constant();
          }
          break;
        case AqlParser.LOCAL_ID:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 423;
            this.match(AqlParser.LOCAL_ID);
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  public expression(): ExpressionContext;
  public expression(_p: number): ExpressionContext;
  // @RuleVersion(0)
  public expression(_p?: number): ExpressionContext {
    if (_p === undefined) {
      _p = 0;
    }

    let _parentctx: ParserRuleContext = this._ctx;
    let _parentState: number = this.state;
    let _localctx: ExpressionContext = new ExpressionContext(
      this._ctx,
      _parentState
    );
    let _prevctx: ExpressionContext = _localctx;
    let _startState: number = 48;
    this.enterRecursionRule(_localctx, 48, AqlParser.RULE_expression, _p);
    let _la: number;
    try {
      let _alt: number;
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 433;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 48, this._ctx)) {
          case 1:
            {
              this.state = 427;
              this.primitive_expression();
            }
            break;

          case 2:
            {
              this.state = 428;
              this.function_call();
            }
            break;

          case 3:
            {
              this.state = 429;
              this.case_expression();
            }
            break;

          case 4:
            {
              this.state = 430;
              this.full_column_name();
            }
            break;

          case 5:
            {
              this.state = 431;
              this.bracket_expression();
            }
            break;

          case 6:
            {
              this.state = 432;
              this.unary_operator_expression();
            }
            break;
        }
        this._ctx._stop = this._input.tryLT(-1);
        this.state = 450;
        this._errHandler.sync(this);
        _alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx);
        while (_alt !== 2 && _alt !== ATN.INVALID_ALT_NUMBER) {
          if (_alt === 1) {
            if (this._parseListeners != null) {
              this.triggerExitRuleEvent();
            }
            _prevctx = _localctx;
            {
              this.state = 448;
              this._errHandler.sync(this);
              switch (
                this.interpreter.adaptivePredict(this._input, 50, this._ctx)
              ) {
                case 1:
                  {
                    _localctx = new ExpressionContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      AqlParser.RULE_expression
                    );
                    this.state = 435;
                    if (!this.precpred(this._ctx, 2)) {
                      throw new FailedPredicateException(
                        this,
                        'this.precpred(this._ctx, 2)'
                      );
                    }
                    this.state = 436;
                    _localctx._op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if (
                      !(
                        ((_la - 140) & ~0x1f) === 0 &&
                        ((1 << (_la - 140)) &
                          ((1 << (AqlParser.STAR - 140)) |
                            (1 << (AqlParser.DIVIDE - 140)) |
                            (1 << (AqlParser.MODULE - 140)))) !==
                          0
                      )
                    ) {
                      _localctx._op = this._errHandler.recoverInline(this);
                    } else {
                      if (this._input.LA(1) === Token.EOF) {
                        this.matchedEOF = true;
                      }

                      this._errHandler.reportMatch(this);
                      this.consume();
                    }
                    this.state = 437;
                    this.expression(3);
                  }
                  break;

                case 2:
                  {
                    _localctx = new ExpressionContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      AqlParser.RULE_expression
                    );
                    this.state = 438;
                    if (!this.precpred(this._ctx, 1)) {
                      throw new FailedPredicateException(
                        this,
                        'this.precpred(this._ctx, 1)'
                      );
                    }
                    this.state = 439;
                    _localctx._op = this._input.LT(1);
                    _la = this._input.LA(1);
                    if (
                      !(
                        ((_la - 129) & ~0x1f) === 0 &&
                        ((1 << (_la - 129)) &
                          ((1 << (AqlParser.DOUBLE_BAR - 129)) |
                            (1 << (AqlParser.PLUS - 129)) |
                            (1 << (AqlParser.MINUS - 129)) |
                            (1 << (AqlParser.BIT_OR - 129)) |
                            (1 << (AqlParser.BIT_AND - 129)) |
                            (1 << (AqlParser.BIT_XOR - 129)))) !==
                          0
                      )
                    ) {
                      _localctx._op = this._errHandler.recoverInline(this);
                    } else {
                      if (this._input.LA(1) === Token.EOF) {
                        this.matchedEOF = true;
                      }

                      this._errHandler.reportMatch(this);
                      this.consume();
                    }
                    this.state = 440;
                    this.expression(2);
                  }
                  break;

                case 3:
                  {
                    _localctx = new ExpressionContext(_parentctx, _parentState);
                    this.pushNewRecursionContext(
                      _localctx,
                      _startState,
                      AqlParser.RULE_expression
                    );
                    this.state = 441;
                    if (!this.precpred(this._ctx, 7)) {
                      throw new FailedPredicateException(
                        this,
                        'this.precpred(this._ctx, 7)'
                      );
                    }
                    this.state = 442;
                    this.match(AqlParser.DOT);
                    this.state = 446;
                    this._errHandler.sync(this);
                    switch (this._input.LA(1)) {
                      case AqlParser.VALUE:
                        {
                          this.state = 443;
                          this.value_call();
                        }
                        break;
                      case AqlParser.QUERY:
                        {
                          this.state = 444;
                          this.query_call();
                        }
                        break;
                      case AqlParser.EXIST:
                        {
                          this.state = 445;
                          this.exist_call();
                        }
                        break;
                      default:
                        throw new NoViableAltException(this);
                    }
                  }
                  break;
              }
            }
          }
          this.state = 452;
          this._errHandler.sync(this);
          _alt = this.interpreter.adaptivePredict(this._input, 51, this._ctx);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.unrollRecursionContexts(_parentctx);
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public primitive_expression(): Primitive_expressionContext {
    let _localctx: Primitive_expressionContext = new Primitive_expressionContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 50, AqlParser.RULE_primitive_expression);
    try {
      this.state = 457;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case AqlParser.DEFAULT:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 453;
            this.match(AqlParser.DEFAULT);
          }
          break;
        case AqlParser.NULL:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 454;
            this.match(AqlParser.NULL);
          }
          break;
        case AqlParser.LOCAL_ID:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 455;
            this.match(AqlParser.LOCAL_ID);
          }
          break;
        case AqlParser.DECIMAL:
        case AqlParser.STRING:
        case AqlParser.BINARY:
        case AqlParser.FLOAT:
        case AqlParser.REAL:
        case AqlParser.DOLLAR:
        case AqlParser.PLUS:
        case AqlParser.MINUS:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 456;
            this.constant();
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public case_expression(): Case_expressionContext {
    let _localctx: Case_expressionContext = new Case_expressionContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 52, AqlParser.RULE_case_expression);
    let _la: number;
    try {
      this.state = 484;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 57, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 459;
            this.match(AqlParser.CASE);
            this.state = 460;
            _localctx._caseExpr = this.expression(0);
            this.state = 462;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
              {
                {
                  this.state = 461;
                  this.switch_section();
                }
              }
              this.state = 464;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            } while (_la === AqlParser.WHEN);
            this.state = 468;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === AqlParser.ELSE) {
              {
                this.state = 466;
                this.match(AqlParser.ELSE);
                this.state = 467;
                _localctx._elseExpr = this.expression(0);
              }
            }

            this.state = 470;
            this.match(AqlParser.END);
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 472;
            this.match(AqlParser.CASE);
            this.state = 474;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            do {
              {
                {
                  this.state = 473;
                  this.switch_search_condition_section();
                }
              }
              this.state = 476;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            } while (_la === AqlParser.WHEN);
            this.state = 480;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === AqlParser.ELSE) {
              {
                this.state = 478;
                this.match(AqlParser.ELSE);
                this.state = 479;
                _localctx._elseExpr = this.expression(0);
              }
            }

            this.state = 482;
            this.match(AqlParser.END);
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public unary_operator_expression(): Unary_operator_expressionContext {
    let _localctx: Unary_operator_expressionContext = new Unary_operator_expressionContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 54, AqlParser.RULE_unary_operator_expression);
    let _la: number;
    try {
      this.state = 490;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case AqlParser.BIT_NOT:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 486;
            this.match(AqlParser.BIT_NOT);
            this.state = 487;
            this.expression(0);
          }
          break;
        case AqlParser.PLUS:
        case AqlParser.MINUS:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 488;
            _localctx._op = this._input.LT(1);
            _la = this._input.LA(1);
            if (!(_la === AqlParser.PLUS || _la === AqlParser.MINUS)) {
              _localctx._op = this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 489;
            this.expression(0);
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public bracket_expression(): Bracket_expressionContext {
    let _localctx: Bracket_expressionContext = new Bracket_expressionContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 56, AqlParser.RULE_bracket_expression);
    try {
      this.state = 500;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 59, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 492;
            this.match(AqlParser.LR_BRACKET);
            this.state = 493;
            this.expression(0);
            this.state = 494;
            this.match(AqlParser.RR_BRACKET);
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 496;
            this.match(AqlParser.LR_BRACKET);
            this.state = 497;
            this.subquery();
            this.state = 498;
            this.match(AqlParser.RR_BRACKET);
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public constant_expression(): Constant_expressionContext {
    let _localctx: Constant_expressionContext = new Constant_expressionContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 58, AqlParser.RULE_constant_expression);
    try {
      this.state = 510;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case AqlParser.NULL:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 502;
            this.match(AqlParser.NULL);
          }
          break;
        case AqlParser.DECIMAL:
        case AqlParser.STRING:
        case AqlParser.BINARY:
        case AqlParser.FLOAT:
        case AqlParser.REAL:
        case AqlParser.DOLLAR:
        case AqlParser.PLUS:
        case AqlParser.MINUS:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 503;
            this.constant();
          }
          break;
        case AqlParser.COALESCE:
        case AqlParser.CONVERT:
        case AqlParser.LEFT:
        case AqlParser.NULLIF:
        case AqlParser.RIGHT:
        case AqlParser.AVG:
        case AqlParser.COUNT:
        case AqlParser.DATEADD:
        case AqlParser.DATEDIFF:
        case AqlParser.GETDATE:
        case AqlParser.GETUTCDATE:
        case AqlParser.MAX:
        case AqlParser.MIN:
        case AqlParser.STDEV:
        case AqlParser.STDEVP:
        case AqlParser.STRING_AGG:
        case AqlParser.SUM:
        case AqlParser.VAR:
        case AqlParser.VARP:
        case AqlParser.IIF:
        case AqlParser.ISNULL:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 504;
            this.function_call();
          }
          break;
        case AqlParser.LOCAL_ID:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 505;
            this.match(AqlParser.LOCAL_ID);
          }
          break;
        case AqlParser.LR_BRACKET:
          this.enterOuterAlt(_localctx, 5);
          {
            this.state = 506;
            this.match(AqlParser.LR_BRACKET);
            this.state = 507;
            this.constant_expression();
            this.state = 508;
            this.match(AqlParser.RR_BRACKET);
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public subquery(): SubqueryContext {
    let _localctx: SubqueryContext = new SubqueryContext(this._ctx, this.state);
    this.enterRule(_localctx, 60, AqlParser.RULE_subquery);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 512;
        this.select_statement();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public with_expression(): With_expressionContext {
    let _localctx: With_expressionContext = new With_expressionContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 62, AqlParser.RULE_with_expression);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 514;
        this.match(AqlParser.WITH);
        this.state = 515;
        _localctx._common_table_expression = this.common_table_expression();
        _localctx._ctes.push(_localctx._common_table_expression);
        this.state = 520;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === AqlParser.COMMA) {
          {
            {
              this.state = 516;
              this.match(AqlParser.COMMA);
              this.state = 517;
              _localctx._common_table_expression = this.common_table_expression();
              _localctx._ctes.push(_localctx._common_table_expression);
            }
          }
          this.state = 522;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public common_table_expression(): Common_table_expressionContext {
    let _localctx: Common_table_expressionContext = new Common_table_expressionContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 64, AqlParser.RULE_common_table_expression);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 523;
        _localctx._expression_name = this.id();
        this.state = 528;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === AqlParser.LR_BRACKET) {
          {
            this.state = 524;
            this.match(AqlParser.LR_BRACKET);
            this.state = 525;
            _localctx._columns = this.column_name_list();
            this.state = 526;
            this.match(AqlParser.RR_BRACKET);
          }
        }

        this.state = 530;
        this.match(AqlParser.AS);
        this.state = 531;
        this.match(AqlParser.LR_BRACKET);
        this.state = 532;
        _localctx._cte_query = this.select_statement();
        this.state = 533;
        this.match(AqlParser.RR_BRACKET);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public search_condition(): Search_conditionContext {
    let _localctx: Search_conditionContext = new Search_conditionContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 66, AqlParser.RULE_search_condition);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 535;
        _localctx._predicate_br = this.predicate_br();
        _localctx._pred.push(_localctx._predicate_br);
        this.state = 540;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === AqlParser.AND || _la === AqlParser.OR) {
          {
            {
              this.state = 536;
              _localctx._log = this._input.LT(1);
              _la = this._input.LA(1);
              if (!(_la === AqlParser.AND || _la === AqlParser.OR)) {
                _localctx._log = this._errHandler.recoverInline(this);
              } else {
                if (this._input.LA(1) === Token.EOF) {
                  this.matchedEOF = true;
                }

                this._errHandler.reportMatch(this);
                this.consume();
              }
              this.state = 537;
              _localctx._predicate_br = this.predicate_br();
              _localctx._pred.push(_localctx._predicate_br);
            }
          }
          this.state = 542;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public predicate_br(): Predicate_brContext {
    let _localctx: Predicate_brContext = new Predicate_brContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 68, AqlParser.RULE_predicate_br);
    let _la: number;
    try {
      this.state = 560;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 66, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 546;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === AqlParser.NOT) {
              {
                {
                  this.state = 543;
                  this.match(AqlParser.NOT);
                }
              }
              this.state = 548;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
            this.state = 549;
            this.predicate();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 553;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === AqlParser.NOT) {
              {
                {
                  this.state = 550;
                  this.match(AqlParser.NOT);
                }
              }
              this.state = 555;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
            this.state = 556;
            this.match(AqlParser.LR_BRACKET);
            this.state = 557;
            this.search_condition();
            this.state = 558;
            this.match(AqlParser.RR_BRACKET);
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public predicate(): PredicateContext {
    let _localctx: PredicateContext = new PredicateContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 70, AqlParser.RULE_predicate);
    let _la: number;
    try {
      this.state = 591;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 69, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 562;
            this.match(AqlParser.EXISTS);
            this.state = 563;
            this.match(AqlParser.LR_BRACKET);
            this.state = 564;
            this.subquery();
            this.state = 565;
            this.match(AqlParser.RR_BRACKET);
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 567;
            this.freetext_predicate();
          }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 568;
            this.expression(0);
            this.state = 569;
            this.comparison_operator();
            this.state = 570;
            this.expression(0);
          }
          break;

        case 4:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 572;
            this.expression(0);
            this.state = 576;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === AqlParser.NOT) {
              {
                {
                  this.state = 573;
                  this.match(AqlParser.NOT);
                }
              }
              this.state = 578;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
            this.state = 579;
            this.match(AqlParser.IN);
            this.state = 580;
            this.match(AqlParser.LR_BRACKET);
            this.state = 583;
            this._errHandler.sync(this);
            switch (
              this.interpreter.adaptivePredict(this._input, 68, this._ctx)
            ) {
              case 1:
                {
                  this.state = 581;
                  this.subquery();
                }
                break;

              case 2:
                {
                  this.state = 582;
                  this.expression_list();
                }
                break;
            }
            this.state = 585;
            this.match(AqlParser.RR_BRACKET);
          }
          break;

        case 5:
          this.enterOuterAlt(_localctx, 5);
          {
            this.state = 587;
            this.expression(0);
            this.state = 588;
            this.match(AqlParser.IS);
            this.state = 589;
            this.null_notnull();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public query_expression(): Query_expressionContext {
    let _localctx: Query_expressionContext = new Query_expressionContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 72, AqlParser.RULE_query_expression);
    try {
      this.state = 604;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 72, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 598;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
              case AqlParser.SELECT:
                {
                  this.state = 593;
                  this.query_specification();
                }
                break;
              case AqlParser.LR_BRACKET:
                {
                  this.state = 594;
                  this.match(AqlParser.LR_BRACKET);
                  this.state = 595;
                  this.query_expression();
                  this.state = 596;
                  this.match(AqlParser.RR_BRACKET);
                }
                break;
              default:
                throw new NoViableAltException(this);
            }
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 600;
            this.query_specification();
            this.state = 602;
            this._errHandler.sync(this);
            switch (
              this.interpreter.adaptivePredict(this._input, 71, this._ctx)
            ) {
              case 1:
                {
                  this.state = 601;
                  this.order_by_clause();
                }
                break;
            }
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public query_specification(): Query_specificationContext {
    let _localctx: Query_specificationContext = new Query_specificationContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 74, AqlParser.RULE_query_specification);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 606;
        this.match(AqlParser.SELECT);
        this.state = 608;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === AqlParser.DISTINCT) {
          {
            this.state = 607;
            this.match(AqlParser.DISTINCT);
          }
        }

        this.state = 611;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === AqlParser.TOP) {
          {
            this.state = 610;
            _localctx._top = this.top_clause();
          }
        }

        this.state = 613;
        _localctx._columns = this.select_list();
        this.state = 616;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === AqlParser.INTO) {
          {
            this.state = 614;
            this.match(AqlParser.INTO);
            this.state = 615;
            _localctx._into = this.table_name();
          }
        }

        this.state = 620;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === AqlParser.FROM) {
          {
            this.state = 618;
            this.match(AqlParser.FROM);
            this.state = 619;
            _localctx._from = this.table_sources();
          }
        }

        this.state = 624;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === AqlParser.WHERE) {
          {
            this.state = 622;
            this.match(AqlParser.WHERE);
            this.state = 623;
            _localctx._where = this.search_condition();
          }
        }

        this.state = 636;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === AqlParser.GROUP) {
          {
            this.state = 626;
            this.match(AqlParser.GROUP);
            this.state = 627;
            this.match(AqlParser.BY);
            this.state = 628;
            _localctx._group_by_item = this.group_by_item();
            _localctx._groupBys.push(_localctx._group_by_item);
            this.state = 633;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            while (_la === AqlParser.COMMA) {
              {
                {
                  this.state = 629;
                  this.match(AqlParser.COMMA);
                  this.state = 630;
                  _localctx._group_by_item = this.group_by_item();
                  _localctx._groupBys.push(_localctx._group_by_item);
                }
              }
              this.state = 635;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
            }
          }
        }

        this.state = 640;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === AqlParser.HAVING) {
          {
            this.state = 638;
            this.match(AqlParser.HAVING);
            this.state = 639;
            _localctx._having = this.search_condition();
          }
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public top_clause(): Top_clauseContext {
    let _localctx: Top_clauseContext = new Top_clauseContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 76, AqlParser.RULE_top_clause);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 642;
        this.match(AqlParser.TOP);
        this.state = 645;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 81, this._ctx)) {
          case 1:
            {
              this.state = 643;
              this.top_percent();
            }
            break;

          case 2:
            {
              this.state = 644;
              this.top_count();
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public top_percent(): Top_percentContext {
    let _localctx: Top_percentContext = new Top_percentContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 78, AqlParser.RULE_top_percent);
    try {
      this.state = 654;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case AqlParser.DECIMAL:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 647;
            this.match(AqlParser.DECIMAL);
            this.state = 648;
            this.match(AqlParser.PERCENT);
          }
          break;
        case AqlParser.LR_BRACKET:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 649;
            this.match(AqlParser.LR_BRACKET);
            this.state = 650;
            _localctx._topper_expression = this.expression(0);
            this.state = 651;
            this.match(AqlParser.RR_BRACKET);
            this.state = 652;
            this.match(AqlParser.PERCENT);
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public top_count(): Top_countContext {
    let _localctx: Top_countContext = new Top_countContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 80, AqlParser.RULE_top_count);
    try {
      this.state = 661;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case AqlParser.DECIMAL:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 656;
            _localctx._count_constant = this.match(AqlParser.DECIMAL);
          }
          break;
        case AqlParser.LR_BRACKET:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 657;
            this.match(AqlParser.LR_BRACKET);
            this.state = 658;
            _localctx._topcount_expression = this.expression(0);
            this.state = 659;
            this.match(AqlParser.RR_BRACKET);
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public order_by_clause(): Order_by_clauseContext {
    let _localctx: Order_by_clauseContext = new Order_by_clauseContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 82, AqlParser.RULE_order_by_clause);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 663;
        this.match(AqlParser.ORDER);
        this.state = 664;
        this.match(AqlParser.BY);
        this.state = 665;
        _localctx._order_by_expression = this.order_by_expression();
        _localctx._order_bys.push(_localctx._order_by_expression);
        this.state = 670;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === AqlParser.COMMA) {
          {
            {
              this.state = 666;
              this.match(AqlParser.COMMA);
              this.state = 667;
              _localctx._order_by_expression = this.order_by_expression();
              _localctx._order_bys.push(_localctx._order_by_expression);
            }
          }
          this.state = 672;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public order_by_expression(): Order_by_expressionContext {
    let _localctx: Order_by_expressionContext = new Order_by_expressionContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 84, AqlParser.RULE_order_by_expression);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 673;
        _localctx._order_by = this.expression(0);
        this.state = 676;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case AqlParser.ASC:
            {
              this.state = 674;
              _localctx._ascending = this.match(AqlParser.ASC);
            }
            break;
          case AqlParser.DESC:
            {
              this.state = 675;
              _localctx._descending = this.match(AqlParser.DESC);
            }
            break;
          case AqlParser.EOF:
          case AqlParser.BEGIN:
          case AqlParser.BREAK:
          case AqlParser.CONTINUE:
          case AqlParser.ELSE:
          case AqlParser.END:
          case AqlParser.IF:
          case AqlParser.ORDER:
          case AqlParser.PRINT:
          case AqlParser.RAISERROR:
          case AqlParser.SELECT:
          case AqlParser.SET:
          case AqlParser.WHILE:
          case AqlParser.WITH:
          case AqlParser.GO_BATCH:
          case AqlParser.GO:
          case AqlParser.THROW:
          case AqlParser.LR_BRACKET:
          case AqlParser.RR_BRACKET:
          case AqlParser.COMMA:
          case AqlParser.SEMI:
            break;
          default:
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public group_by_item(): Group_by_itemContext {
    let _localctx: Group_by_itemContext = new Group_by_itemContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 86, AqlParser.RULE_group_by_item);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 678;
        this.expression(0);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public select_list(): Select_listContext {
    let _localctx: Select_listContext = new Select_listContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 88, AqlParser.RULE_select_list);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 680;
        _localctx._select_list_elem = this.select_list_elem();
        _localctx._selectElement.push(_localctx._select_list_elem);
        this.state = 685;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === AqlParser.COMMA) {
          {
            {
              this.state = 681;
              this.match(AqlParser.COMMA);
              this.state = 682;
              _localctx._select_list_elem = this.select_list_elem();
              _localctx._selectElement.push(_localctx._select_list_elem);
            }
          }
          this.state = 687;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public asterisk(): AsteriskContext {
    let _localctx: AsteriskContext = new AsteriskContext(this._ctx, this.state);
    this.enterRule(_localctx, 90, AqlParser.RULE_asterisk);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 691;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (
          (((_la - -1) & ~0x1f) === 0 &&
            ((1 << (_la - -1)) &
              ((1 << (AqlParser.EOF - -1)) |
                (1 << (AqlParser.AS - -1)) |
                (1 << (AqlParser.BEGIN - -1)) |
                (1 << (AqlParser.BREAK - -1)) |
                (1 << (AqlParser.CONTINUE - -1)) |
                (1 << (AqlParser.ELSE - -1)) |
                (1 << (AqlParser.END - -1)) |
                (1 << (AqlParser.FROM - -1)) |
                (1 << (AqlParser.GROUP - -1)) |
                (1 << (AqlParser.HAVING - -1)) |
                (1 << (AqlParser.IF - -1)) |
                (1 << (AqlParser.INNER - -1)) |
                (1 << (AqlParser.JOIN - -1)) |
                (1 << (AqlParser.LEFT - -1)))) !==
              0) ||
          (((_la - 35) & ~0x1f) === 0 &&
            ((1 << (_la - 35)) &
              ((1 << (AqlParser.ON - 35)) |
                (1 << (AqlParser.ORDER - 35)) |
                (1 << (AqlParser.PIVOT - 35)) |
                (1 << (AqlParser.PRINT - 35)) |
                (1 << (AqlParser.RAISERROR - 35)) |
                (1 << (AqlParser.RIGHT - 35)) |
                (1 << (AqlParser.SELECT - 35)) |
                (1 << (AqlParser.SET - 35)) |
                (1 << (AqlParser.UNPIVOT - 35)) |
                (1 << (AqlParser.WHERE - 35)) |
                (1 << (AqlParser.WHILE - 35)) |
                (1 << (AqlParser.WITH - 35)) |
                (1 << (AqlParser.AFTER - 35)) |
                (1 << (AqlParser.AGGREGATE - 35)) |
                (1 << (AqlParser.APPLY - 35)) |
                (1 << (AqlParser.AVG - 35)) |
                (1 << (AqlParser.BINARY_KEYWORD - 35)) |
                (1 << (AqlParser.CATCH - 35)) |
                (1 << (AqlParser.CONCAT - 35)) |
                (1 << (AqlParser.COUNT - 35)) |
                (1 << (AqlParser.DATA - 35)) |
                (1 << (AqlParser.DATEADD - 35)) |
                (1 << (AqlParser.DATEDIFF - 35)) |
                (1 << (AqlParser.DAYS - 35)) |
                (1 << (AqlParser.EMPTY - 35)))) !==
              0) ||
          (((_la - 67) & ~0x1f) === 0 &&
            ((1 << (_la - 67)) &
              ((1 << (AqlParser.EXIST - 67)) |
                (1 << (AqlParser.FILTER - 67)) |
                (1 << (AqlParser.GETDATE - 67)) |
                (1 << (AqlParser.GETUTCDATE - 67)) |
                (1 << (AqlParser.GO_BATCH - 67)) |
                (1 << (AqlParser.GO - 67)) |
                (1 << (AqlParser.INT - 67)) |
                (1 << (AqlParser.MAX - 67)) |
                (1 << (AqlParser.MIN - 67)) |
                (1 << (AqlParser.NEXT - 67)) |
                (1 << (AqlParser.ONLY - 67)) |
                (1 << (AqlParser.QUERY - 67)) |
                (1 << (AqlParser.ROW - 67)) |
                (1 << (AqlParser.ROW_NUMBER - 67)) |
                (1 << (AqlParser.ROWS - 67)) |
                (1 << (AqlParser.STDEV - 67)) |
                (1 << (AqlParser.STDEVP - 67)) |
                (1 << (AqlParser.STRING_AGG - 67)) |
                (1 << (AqlParser.SUM - 67)) |
                (1 << (AqlParser.TAKE - 67)) |
                (1 << (AqlParser.THROW - 67)) |
                (1 << (AqlParser.TIME - 67)) |
                (1 << (AqlParser.TRY - 67)) |
                (1 << (AqlParser.VALUE - 67)) |
                (1 << (AqlParser.VAR - 67)) |
                (1 << (AqlParser.VARP - 67)) |
                (1 << (AqlParser.BEFORE - 67)) |
                (1 << (AqlParser.ENABLED - 67)) |
                (1 << (AqlParser.ERROR - 67)) |
                (1 << (AqlParser.GET - 67)) |
                (1 << (AqlParser.IIF - 67)) |
                (1 << (AqlParser.ISNULL - 67)))) !==
              0) ||
          (((_la - 99) & ~0x1f) === 0 &&
            ((1 << (_la - 99)) &
              ((1 << (AqlParser.SPLIT - 99)) |
                (1 << (AqlParser.START - 99)) |
                (1 << (AqlParser.STOP - 99)) |
                (1 << (AqlParser.VARCHAR - 99)) |
                (1 << (AqlParser.NVARCHAR - 99)) |
                (1 << (AqlParser.DOUBLE_QUOTE_ID - 99)) |
                (1 << (AqlParser.SQUARE_BRACKET_ID - 99)) |
                (1 << (AqlParser.ID - 99)) |
                (1 << (AqlParser.DOT - 99)))) !==
              0) ||
          (((_la - 135) & ~0x1f) === 0 &&
            ((1 << (_la - 135)) &
              ((1 << (AqlParser.LR_BRACKET - 135)) |
                (1 << (AqlParser.RR_BRACKET - 135)) |
                (1 << (AqlParser.COMMA - 135)) |
                (1 << (AqlParser.SEMI - 135)))) !==
              0)
        ) {
          {
            this.state = 688;
            this.table_name();
            this.state = 689;
            this.match(AqlParser.DOT);
          }
        }

        this.state = 693;
        this.match(AqlParser.STAR);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public column_elem(): Column_elemContext {
    let _localctx: Column_elemContext = new Column_elemContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 92, AqlParser.RULE_column_elem);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 697;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case AqlParser.AFTER:
          case AqlParser.AGGREGATE:
          case AqlParser.APPLY:
          case AqlParser.AVG:
          case AqlParser.BINARY_KEYWORD:
          case AqlParser.CATCH:
          case AqlParser.CONCAT:
          case AqlParser.COUNT:
          case AqlParser.DATA:
          case AqlParser.DATEADD:
          case AqlParser.DATEDIFF:
          case AqlParser.DAYS:
          case AqlParser.EMPTY:
          case AqlParser.EXIST:
          case AqlParser.FILTER:
          case AqlParser.GETDATE:
          case AqlParser.GETUTCDATE:
          case AqlParser.GO_BATCH:
          case AqlParser.GO:
          case AqlParser.INT:
          case AqlParser.MAX:
          case AqlParser.MIN:
          case AqlParser.NEXT:
          case AqlParser.ONLY:
          case AqlParser.QUERY:
          case AqlParser.ROW:
          case AqlParser.ROW_NUMBER:
          case AqlParser.ROWS:
          case AqlParser.STDEV:
          case AqlParser.STDEVP:
          case AqlParser.STRING_AGG:
          case AqlParser.SUM:
          case AqlParser.TAKE:
          case AqlParser.THROW:
          case AqlParser.TIME:
          case AqlParser.TRY:
          case AqlParser.VALUE:
          case AqlParser.VAR:
          case AqlParser.VARP:
          case AqlParser.BEFORE:
          case AqlParser.ENABLED:
          case AqlParser.ERROR:
          case AqlParser.GET:
          case AqlParser.IIF:
          case AqlParser.ISNULL:
          case AqlParser.SPLIT:
          case AqlParser.START:
          case AqlParser.STOP:
          case AqlParser.VARCHAR:
          case AqlParser.NVARCHAR:
          case AqlParser.DOUBLE_QUOTE_ID:
          case AqlParser.SQUARE_BRACKET_ID:
          case AqlParser.ID:
          case AqlParser.DOT:
            {
              this.state = 695;
              this.full_column_name();
            }
            break;
          case AqlParser.NULL:
            {
              this.state = 696;
              this.match(AqlParser.NULL);
            }
            break;
          default:
            throw new NoViableAltException(this);
        }
        this.state = 700;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 89, this._ctx)) {
          case 1:
            {
              this.state = 699;
              this.as_column_alias();
            }
            break;
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public expression_elem(): Expression_elemContext {
    let _localctx: Expression_elemContext = new Expression_elemContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 94, AqlParser.RULE_expression_elem);
    try {
      this.state = 710;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 91, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 702;
            _localctx._leftAlias = this.column_alias();
            this.state = 703;
            _localctx._eq = this.match(AqlParser.EQUAL);
            this.state = 704;
            _localctx._leftAssignment = this.expression(0);
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 706;
            _localctx._expressionAs = this.expression(0);
            this.state = 708;
            this._errHandler.sync(this);
            switch (
              this.interpreter.adaptivePredict(this._input, 90, this._ctx)
            ) {
              case 1:
                {
                  this.state = 707;
                  this.as_column_alias();
                }
                break;
            }
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public select_list_elem(): Select_list_elemContext {
    let _localctx: Select_list_elemContext = new Select_list_elemContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 96, AqlParser.RULE_select_list_elem);
    try {
      this.state = 721;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 93, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 712;
            this.asterisk();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 713;
            this.column_elem();
          }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 714;
            this.match(AqlParser.LOCAL_ID);
            this.state = 717;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
              case AqlParser.PLUS_ASSIGN:
              case AqlParser.MINUS_ASSIGN:
              case AqlParser.MULT_ASSIGN:
              case AqlParser.DIV_ASSIGN:
              case AqlParser.MOD_ASSIGN:
              case AqlParser.AND_ASSIGN:
              case AqlParser.XOR_ASSIGN:
              case AqlParser.OR_ASSIGN:
                {
                  this.state = 715;
                  this.assignment_operator();
                }
                break;
              case AqlParser.EQUAL:
                {
                  this.state = 716;
                  this.match(AqlParser.EQUAL);
                }
                break;
              default:
                throw new NoViableAltException(this);
            }
            this.state = 719;
            this.expression(0);
          }
          break;

        case 4:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 720;
            this.expression_elem();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public table_sources(): Table_sourcesContext {
    let _localctx: Table_sourcesContext = new Table_sourcesContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 98, AqlParser.RULE_table_sources);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 723;
        _localctx._table_source = this.table_source();
        _localctx._source.push(_localctx._table_source);
        this.state = 728;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === AqlParser.COMMA) {
          {
            {
              this.state = 724;
              this.match(AqlParser.COMMA);
              this.state = 725;
              _localctx._table_source = this.table_source();
              _localctx._source.push(_localctx._table_source);
            }
          }
          this.state = 730;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public table_source(): Table_sourceContext {
    let _localctx: Table_sourceContext = new Table_sourceContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 100, AqlParser.RULE_table_source);
    try {
      this.state = 736;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 95, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 731;
            this.table_source_item_joined();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 732;
            this.match(AqlParser.LR_BRACKET);
            this.state = 733;
            this.table_source_item_joined();
            this.state = 734;
            this.match(AqlParser.RR_BRACKET);
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public table_source_item_joined(): Table_source_item_joinedContext {
    let _localctx: Table_source_item_joinedContext = new Table_source_item_joinedContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 102, AqlParser.RULE_table_source_item_joined);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 738;
        this.table_source_item();
        this.state = 742;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (
          ((_la - 26) & ~0x1f) === 0 &&
          ((1 << (_la - 26)) &
            ((1 << (AqlParser.INNER - 26)) |
              (1 << (AqlParser.JOIN - 26)) |
              (1 << (AqlParser.LEFT - 26)) |
              (1 << (AqlParser.PIVOT - 26)) |
              (1 << (AqlParser.RIGHT - 26)) |
              (1 << (AqlParser.UNPIVOT - 26)))) !==
            0
        ) {
          {
            {
              this.state = 739;
              _localctx._join_part = this.join_part();
              _localctx._joins.push(_localctx._join_part);
            }
          }
          this.state = 744;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public table_source_item(): Table_source_itemContext {
    let _localctx: Table_source_itemContext = new Table_source_itemContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 104, AqlParser.RULE_table_source_item);
    try {
      this.state = 788;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 107, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 745;
            this.table_name_with_hint();
            this.state = 747;
            this._errHandler.sync(this);
            switch (
              this.interpreter.adaptivePredict(this._input, 97, this._ctx)
            ) {
              case 1:
                {
                  this.state = 746;
                  this.as_table_alias();
                }
                break;
            }
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 749;
            this.full_table_name();
            this.state = 751;
            this._errHandler.sync(this);
            switch (
              this.interpreter.adaptivePredict(this._input, 98, this._ctx)
            ) {
              case 1:
                {
                  this.state = 750;
                  this.as_table_alias();
                }
                break;
            }
          }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 753;
            this.match(AqlParser.LR_BRACKET);
            this.state = 754;
            this.derived_table();
            this.state = 755;
            this.match(AqlParser.RR_BRACKET);
            this.state = 760;
            this._errHandler.sync(this);
            switch (
              this.interpreter.adaptivePredict(this._input, 100, this._ctx)
            ) {
              case 1:
                {
                  this.state = 756;
                  this.as_table_alias();
                  this.state = 758;
                  this._errHandler.sync(this);
                  switch (
                    this.interpreter.adaptivePredict(this._input, 99, this._ctx)
                  ) {
                    case 1:
                      {
                        this.state = 757;
                        this.column_alias_list();
                      }
                      break;
                  }
                }
                break;
            }
          }
          break;

        case 4:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 762;
            this.function_call();
            this.state = 767;
            this._errHandler.sync(this);
            switch (
              this.interpreter.adaptivePredict(this._input, 102, this._ctx)
            ) {
              case 1:
                {
                  this.state = 763;
                  this.as_table_alias();
                  this.state = 765;
                  this._errHandler.sync(this);
                  switch (
                    this.interpreter.adaptivePredict(
                      this._input,
                      101,
                      this._ctx
                    )
                  ) {
                    case 1:
                      {
                        this.state = 764;
                        this.column_alias_list();
                      }
                      break;
                  }
                }
                break;
            }
          }
          break;

        case 5:
          this.enterOuterAlt(_localctx, 5);
          {
            this.state = 769;
            _localctx._loc_id = this.match(AqlParser.LOCAL_ID);
            this.state = 771;
            this._errHandler.sync(this);
            switch (
              this.interpreter.adaptivePredict(this._input, 103, this._ctx)
            ) {
              case 1:
                {
                  this.state = 770;
                  this.as_table_alias();
                }
                break;
            }
          }
          break;

        case 6:
          this.enterOuterAlt(_localctx, 6);
          {
            this.state = 773;
            _localctx._loc_id_call = this.match(AqlParser.LOCAL_ID);
            this.state = 774;
            this.match(AqlParser.DOT);
            this.state = 775;
            _localctx._loc_fcall = this.function_call();
            this.state = 780;
            this._errHandler.sync(this);
            switch (
              this.interpreter.adaptivePredict(this._input, 105, this._ctx)
            ) {
              case 1:
                {
                  this.state = 776;
                  this.as_table_alias();
                  this.state = 778;
                  this._errHandler.sync(this);
                  switch (
                    this.interpreter.adaptivePredict(
                      this._input,
                      104,
                      this._ctx
                    )
                  ) {
                    case 1:
                      {
                        this.state = 777;
                        this.column_alias_list();
                      }
                      break;
                  }
                }
                break;
            }
          }
          break;

        case 7:
          this.enterOuterAlt(_localctx, 7);
          {
            this.state = 782;
            this.match(AqlParser.COLON);
            this.state = 783;
            this.match(AqlParser.COLON);
            this.state = 784;
            _localctx._oldstyle_fcall = this.function_call();
            this.state = 786;
            this._errHandler.sync(this);
            switch (
              this.interpreter.adaptivePredict(this._input, 106, this._ctx)
            ) {
              case 1:
                {
                  this.state = 785;
                  this.as_table_alias();
                }
                break;
            }
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public join_part(): Join_partContext {
    let _localctx: Join_partContext = new Join_partContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 106, AqlParser.RULE_join_part);
    try {
      this.state = 793;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case AqlParser.INNER:
        case AqlParser.JOIN:
        case AqlParser.LEFT:
        case AqlParser.RIGHT:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 790;
            this.join_on();
          }
          break;
        case AqlParser.PIVOT:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 791;
            this.pivot();
          }
          break;
        case AqlParser.UNPIVOT:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 792;
            this.unpivot();
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public join_on(): Join_onContext {
    let _localctx: Join_onContext = new Join_onContext(this._ctx, this.state);
    this.enterRule(_localctx, 108, AqlParser.RULE_join_on);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 802;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case AqlParser.INNER:
          case AqlParser.JOIN:
            {
              this.state = 796;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              if (_la === AqlParser.INNER) {
                {
                  this.state = 795;
                  _localctx._inner = this.match(AqlParser.INNER);
                }
              }
            }
            break;
          case AqlParser.LEFT:
          case AqlParser.RIGHT:
            {
              this.state = 798;
              _localctx._join_type = this._input.LT(1);
              _la = this._input.LA(1);
              if (!(_la === AqlParser.LEFT || _la === AqlParser.RIGHT)) {
                _localctx._join_type = this._errHandler.recoverInline(this);
              } else {
                if (this._input.LA(1) === Token.EOF) {
                  this.matchedEOF = true;
                }

                this._errHandler.reportMatch(this);
                this.consume();
              }
              this.state = 800;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              if (_la === AqlParser.OUTER) {
                {
                  this.state = 799;
                  _localctx._outer = this.match(AqlParser.OUTER);
                }
              }
            }
            break;
          default:
            throw new NoViableAltException(this);
        }
        this.state = 804;
        this.match(AqlParser.JOIN);
        this.state = 805;
        _localctx._source = this.table_source();
        this.state = 806;
        this.match(AqlParser.ON);
        this.state = 807;
        _localctx._cond = this.search_condition();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public pivot(): PivotContext {
    let _localctx: PivotContext = new PivotContext(this._ctx, this.state);
    this.enterRule(_localctx, 110, AqlParser.RULE_pivot);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 809;
        this.match(AqlParser.PIVOT);
        this.state = 810;
        this.pivot_clause();
        this.state = 811;
        this.as_table_alias();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public unpivot(): UnpivotContext {
    let _localctx: UnpivotContext = new UnpivotContext(this._ctx, this.state);
    this.enterRule(_localctx, 112, AqlParser.RULE_unpivot);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 813;
        this.match(AqlParser.UNPIVOT);
        this.state = 814;
        this.unpivot_clause();
        this.state = 815;
        this.as_table_alias();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public pivot_clause(): Pivot_clauseContext {
    let _localctx: Pivot_clauseContext = new Pivot_clauseContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 114, AqlParser.RULE_pivot_clause);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 817;
        this.match(AqlParser.LR_BRACKET);
        this.state = 818;
        this.aggregate_windowed_function();
        this.state = 819;
        this.match(AqlParser.FOR);
        this.state = 820;
        this.full_column_name();
        this.state = 821;
        this.match(AqlParser.IN);
        this.state = 822;
        this.column_alias_list();
        this.state = 823;
        this.match(AqlParser.RR_BRACKET);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public unpivot_clause(): Unpivot_clauseContext {
    let _localctx: Unpivot_clauseContext = new Unpivot_clauseContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 116, AqlParser.RULE_unpivot_clause);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 825;
        this.match(AqlParser.LR_BRACKET);
        this.state = 826;
        _localctx._unpivot_exp = this.expression(0);
        this.state = 827;
        this.match(AqlParser.FOR);
        this.state = 828;
        this.full_column_name();
        this.state = 829;
        this.match(AqlParser.IN);
        this.state = 830;
        this.match(AqlParser.LR_BRACKET);
        this.state = 831;
        this.full_column_name_list();
        this.state = 832;
        this.match(AqlParser.RR_BRACKET);
        this.state = 833;
        this.match(AqlParser.RR_BRACKET);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public full_column_name_list(): Full_column_name_listContext {
    let _localctx: Full_column_name_listContext = new Full_column_name_listContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 118, AqlParser.RULE_full_column_name_list);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 835;
        _localctx._full_column_name = this.full_column_name();
        _localctx._column.push(_localctx._full_column_name);
        this.state = 840;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === AqlParser.COMMA) {
          {
            {
              this.state = 836;
              this.match(AqlParser.COMMA);
              this.state = 837;
              _localctx._full_column_name = this.full_column_name();
              _localctx._column.push(_localctx._full_column_name);
            }
          }
          this.state = 842;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public table_name_with_hint(): Table_name_with_hintContext {
    let _localctx: Table_name_with_hintContext = new Table_name_with_hintContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 120, AqlParser.RULE_table_name_with_hint);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 843;
        this.table_name();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public derived_table(): Derived_tableContext {
    let _localctx: Derived_tableContext = new Derived_tableContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 122, AqlParser.RULE_derived_table);
    try {
      this.state = 850;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 113, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 845;
            this.subquery();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 846;
            this.match(AqlParser.LR_BRACKET);
            this.state = 847;
            this.subquery();
            this.state = 848;
            this.match(AqlParser.RR_BRACKET);
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public function_call(): Function_callContext {
    let _localctx: Function_callContext = new Function_callContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 124, AqlParser.RULE_function_call);
    let _la: number;
    try {
      this.state = 861;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case AqlParser.AVG:
        case AqlParser.COUNT:
        case AqlParser.MAX:
        case AqlParser.MIN:
        case AqlParser.STDEV:
        case AqlParser.STDEVP:
        case AqlParser.SUM:
        case AqlParser.VAR:
        case AqlParser.VARP:
          _localctx = new AGGREGATE_WINDOWED_FUNCContext(_localctx);
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 852;
            this.aggregate_windowed_function();
          }
          break;
        case AqlParser.LEFT:
        case AqlParser.RIGHT:
          _localctx = new SCALAR_FUNCTIONContext(_localctx);
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 853;
            this.scalar_function_name();
            this.state = 854;
            this.match(AqlParser.LR_BRACKET);
            this.state = 856;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (
              ((_la & ~0x1f) === 0 &&
                ((1 << _la) &
                  ((1 << AqlParser.CASE) |
                    (1 << AqlParser.COALESCE) |
                    (1 << AqlParser.CONVERT) |
                    (1 << AqlParser.DEFAULT) |
                    (1 << AqlParser.LEFT))) !==
                  0) ||
              (((_la - 33) & ~0x1f) === 0 &&
                ((1 << (_la - 33)) &
                  ((1 << (AqlParser.NULL - 33)) |
                    (1 << (AqlParser.NULLIF - 33)) |
                    (1 << (AqlParser.RIGHT - 33)) |
                    (1 << (AqlParser.AFTER - 33)) |
                    (1 << (AqlParser.AGGREGATE - 33)) |
                    (1 << (AqlParser.APPLY - 33)) |
                    (1 << (AqlParser.AVG - 33)) |
                    (1 << (AqlParser.BINARY_KEYWORD - 33)) |
                    (1 << (AqlParser.CATCH - 33)) |
                    (1 << (AqlParser.CONCAT - 33)) |
                    (1 << (AqlParser.COUNT - 33)) |
                    (1 << (AqlParser.DATA - 33)) |
                    (1 << (AqlParser.DATEADD - 33)) |
                    (1 << (AqlParser.DATEDIFF - 33)))) !==
                  0) ||
              (((_la - 65) & ~0x1f) === 0 &&
                ((1 << (_la - 65)) &
                  ((1 << (AqlParser.DAYS - 65)) |
                    (1 << (AqlParser.EMPTY - 65)) |
                    (1 << (AqlParser.EXIST - 65)) |
                    (1 << (AqlParser.FILTER - 65)) |
                    (1 << (AqlParser.GETDATE - 65)) |
                    (1 << (AqlParser.GETUTCDATE - 65)) |
                    (1 << (AqlParser.GO_BATCH - 65)) |
                    (1 << (AqlParser.GO - 65)) |
                    (1 << (AqlParser.INT - 65)) |
                    (1 << (AqlParser.MAX - 65)) |
                    (1 << (AqlParser.MIN - 65)) |
                    (1 << (AqlParser.NEXT - 65)) |
                    (1 << (AqlParser.ONLY - 65)) |
                    (1 << (AqlParser.QUERY - 65)) |
                    (1 << (AqlParser.ROW - 65)) |
                    (1 << (AqlParser.ROW_NUMBER - 65)) |
                    (1 << (AqlParser.ROWS - 65)) |
                    (1 << (AqlParser.STDEV - 65)) |
                    (1 << (AqlParser.STDEVP - 65)) |
                    (1 << (AqlParser.STRING_AGG - 65)) |
                    (1 << (AqlParser.SUM - 65)) |
                    (1 << (AqlParser.TAKE - 65)) |
                    (1 << (AqlParser.THROW - 65)) |
                    (1 << (AqlParser.TIME - 65)) |
                    (1 << (AqlParser.TRY - 65)) |
                    (1 << (AqlParser.VALUE - 65)) |
                    (1 << (AqlParser.VAR - 65)) |
                    (1 << (AqlParser.VARP - 65)) |
                    (1 << (AqlParser.BEFORE - 65)) |
                    (1 << (AqlParser.ENABLED - 65)) |
                    (1 << (AqlParser.ERROR - 65)) |
                    (1 << (AqlParser.GET - 65)))) !==
                  0) ||
              (((_la - 97) & ~0x1f) === 0 &&
                ((1 << (_la - 97)) &
                  ((1 << (AqlParser.IIF - 97)) |
                    (1 << (AqlParser.ISNULL - 97)) |
                    (1 << (AqlParser.SPLIT - 97)) |
                    (1 << (AqlParser.START - 97)) |
                    (1 << (AqlParser.STOP - 97)) |
                    (1 << (AqlParser.VARCHAR - 97)) |
                    (1 << (AqlParser.NVARCHAR - 97)) |
                    (1 << (AqlParser.DOUBLE_QUOTE_ID - 97)) |
                    (1 << (AqlParser.SQUARE_BRACKET_ID - 97)) |
                    (1 << (AqlParser.LOCAL_ID - 97)) |
                    (1 << (AqlParser.DECIMAL - 97)) |
                    (1 << (AqlParser.ID - 97)) |
                    (1 << (AqlParser.STRING - 97)) |
                    (1 << (AqlParser.BINARY - 97)) |
                    (1 << (AqlParser.FLOAT - 97)) |
                    (1 << (AqlParser.REAL - 97)))) !==
                  0) ||
              (((_la - 130) & ~0x1f) === 0 &&
                ((1 << (_la - 130)) &
                  ((1 << (AqlParser.DOT - 130)) |
                    (1 << (AqlParser.DOLLAR - 130)) |
                    (1 << (AqlParser.LR_BRACKET - 130)) |
                    (1 << (AqlParser.PLUS - 130)) |
                    (1 << (AqlParser.MINUS - 130)) |
                    (1 << (AqlParser.BIT_NOT - 130)))) !==
                  0)
            ) {
              {
                this.state = 855;
                this.expression_list();
              }
            }

            this.state = 858;
            this.match(AqlParser.RR_BRACKET);
          }
          break;
        case AqlParser.COALESCE:
        case AqlParser.CONVERT:
        case AqlParser.NULLIF:
        case AqlParser.DATEADD:
        case AqlParser.DATEDIFF:
        case AqlParser.GETDATE:
        case AqlParser.GETUTCDATE:
        case AqlParser.STRING_AGG:
        case AqlParser.IIF:
        case AqlParser.ISNULL:
          _localctx = new BUILT_IN_FUNCContext(_localctx);
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 860;
            this.build_in_functions();
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public freetext_predicate(): Freetext_predicateContext {
    let _localctx: Freetext_predicateContext = new Freetext_predicateContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 126, AqlParser.RULE_freetext_predicate);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 863;
        this.match(AqlParser.CONTAINS);
        this.state = 864;
        this.match(AqlParser.LR_BRACKET);
        this.state = 884;
        this._errHandler.sync(this);
        switch (this._input.LA(1)) {
          case AqlParser.AFTER:
          case AqlParser.AGGREGATE:
          case AqlParser.APPLY:
          case AqlParser.AVG:
          case AqlParser.BINARY_KEYWORD:
          case AqlParser.CATCH:
          case AqlParser.CONCAT:
          case AqlParser.COUNT:
          case AqlParser.DATA:
          case AqlParser.DATEADD:
          case AqlParser.DATEDIFF:
          case AqlParser.DAYS:
          case AqlParser.EMPTY:
          case AqlParser.EXIST:
          case AqlParser.FILTER:
          case AqlParser.GETDATE:
          case AqlParser.GETUTCDATE:
          case AqlParser.GO_BATCH:
          case AqlParser.GO:
          case AqlParser.INT:
          case AqlParser.MAX:
          case AqlParser.MIN:
          case AqlParser.NEXT:
          case AqlParser.ONLY:
          case AqlParser.QUERY:
          case AqlParser.ROW:
          case AqlParser.ROW_NUMBER:
          case AqlParser.ROWS:
          case AqlParser.STDEV:
          case AqlParser.STDEVP:
          case AqlParser.STRING_AGG:
          case AqlParser.SUM:
          case AqlParser.TAKE:
          case AqlParser.THROW:
          case AqlParser.TIME:
          case AqlParser.TRY:
          case AqlParser.VALUE:
          case AqlParser.VAR:
          case AqlParser.VARP:
          case AqlParser.BEFORE:
          case AqlParser.ENABLED:
          case AqlParser.ERROR:
          case AqlParser.GET:
          case AqlParser.IIF:
          case AqlParser.ISNULL:
          case AqlParser.SPLIT:
          case AqlParser.START:
          case AqlParser.STOP:
          case AqlParser.VARCHAR:
          case AqlParser.NVARCHAR:
          case AqlParser.DOUBLE_QUOTE_ID:
          case AqlParser.SQUARE_BRACKET_ID:
          case AqlParser.ID:
          case AqlParser.DOT:
            {
              this.state = 865;
              this.full_column_name();
            }
            break;
          case AqlParser.LR_BRACKET:
            {
              this.state = 866;
              this.match(AqlParser.LR_BRACKET);
              this.state = 867;
              this.full_column_name();
              this.state = 872;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              while (_la === AqlParser.COMMA) {
                {
                  {
                    this.state = 868;
                    this.match(AqlParser.COMMA);
                    this.state = 869;
                    this.full_column_name();
                  }
                }
                this.state = 874;
                this._errHandler.sync(this);
                _la = this._input.LA(1);
              }
              this.state = 875;
              this.match(AqlParser.RR_BRACKET);
            }
            break;
          case AqlParser.STAR:
            {
              this.state = 877;
              this.match(AqlParser.STAR);
              this.state = 878;
              this.match(AqlParser.LR_BRACKET);
              this.state = 879;
              this.full_column_name();
              this.state = 880;
              this.match(AqlParser.COMMA);
              this.state = 881;
              this.expression(0);
              this.state = 882;
              this.match(AqlParser.RR_BRACKET);
            }
            break;
          default:
            throw new NoViableAltException(this);
        }
        this.state = 886;
        this.match(AqlParser.COMMA);
        this.state = 887;
        this.expression(0);
        this.state = 888;
        this.match(AqlParser.RR_BRACKET);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public build_in_functions(): Build_in_functionsContext {
    let _localctx: Build_in_functionsContext = new Build_in_functionsContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 128, AqlParser.RULE_build_in_functions);
    let _la: number;
    try {
      this.state = 960;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case AqlParser.CONVERT:
          _localctx = new CONVERTContext(_localctx);
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 890;
            this.match(AqlParser.CONVERT);
            this.state = 891;
            this.match(AqlParser.LR_BRACKET);
            this.state = 892;
            (_localctx as CONVERTContext)._convert_data_type = this.data_type();
            this.state = 893;
            this.match(AqlParser.COMMA);
            this.state = 894;
            (_localctx as CONVERTContext)._convert_expression = this.expression(
              0
            );
            this.state = 897;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === AqlParser.COMMA) {
              {
                this.state = 895;
                this.match(AqlParser.COMMA);
                this.state = 896;
                (_localctx as CONVERTContext)._style = this.expression(0);
              }
            }

            this.state = 899;
            this.match(AqlParser.RR_BRACKET);
          }
          break;
        case AqlParser.COALESCE:
          _localctx = new COALESCEContext(_localctx);
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 901;
            this.match(AqlParser.COALESCE);
            this.state = 902;
            this.match(AqlParser.LR_BRACKET);
            this.state = 903;
            this.expression_list();
            this.state = 904;
            this.match(AqlParser.RR_BRACKET);
          }
          break;
        case AqlParser.DATEADD:
          _localctx = new DATEADDContext(_localctx);
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 906;
            this.match(AqlParser.DATEADD);
            this.state = 907;
            this.match(AqlParser.LR_BRACKET);
            this.state = 908;
            (_localctx as DATEADDContext)._datepart = this.match(AqlParser.ID);
            this.state = 909;
            this.match(AqlParser.COMMA);
            this.state = 910;
            (_localctx as DATEADDContext)._number = this.expression(0);
            this.state = 911;
            this.match(AqlParser.COMMA);
            this.state = 912;
            (_localctx as DATEADDContext)._date = this.expression(0);
            this.state = 913;
            this.match(AqlParser.RR_BRACKET);
          }
          break;
        case AqlParser.DATEDIFF:
          _localctx = new DATEDIFFContext(_localctx);
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 915;
            this.match(AqlParser.DATEDIFF);
            this.state = 916;
            this.match(AqlParser.LR_BRACKET);
            this.state = 917;
            (_localctx as DATEDIFFContext)._datepart = this.match(AqlParser.ID);
            this.state = 918;
            this.match(AqlParser.COMMA);
            this.state = 919;
            (_localctx as DATEDIFFContext)._date_first = this.expression(0);
            this.state = 920;
            this.match(AqlParser.COMMA);
            this.state = 921;
            (_localctx as DATEDIFFContext)._date_second = this.expression(0);
            this.state = 922;
            this.match(AqlParser.RR_BRACKET);
          }
          break;
        case AqlParser.GETDATE:
          _localctx = new GETDATEContext(_localctx);
          this.enterOuterAlt(_localctx, 5);
          {
            this.state = 924;
            this.match(AqlParser.GETDATE);
            this.state = 925;
            this.match(AqlParser.LR_BRACKET);
            this.state = 926;
            this.match(AqlParser.RR_BRACKET);
          }
          break;
        case AqlParser.GETUTCDATE:
          _localctx = new GETUTCDATEContext(_localctx);
          this.enterOuterAlt(_localctx, 6);
          {
            this.state = 927;
            this.match(AqlParser.GETUTCDATE);
            this.state = 928;
            this.match(AqlParser.LR_BRACKET);
            this.state = 929;
            this.match(AqlParser.RR_BRACKET);
          }
          break;
        case AqlParser.NULLIF:
          _localctx = new NULLIFContext(_localctx);
          this.enterOuterAlt(_localctx, 7);
          {
            this.state = 930;
            this.match(AqlParser.NULLIF);
            this.state = 931;
            this.match(AqlParser.LR_BRACKET);
            this.state = 932;
            (_localctx as NULLIFContext)._left = this.expression(0);
            this.state = 933;
            this.match(AqlParser.COMMA);
            this.state = 934;
            (_localctx as NULLIFContext)._right = this.expression(0);
            this.state = 935;
            this.match(AqlParser.RR_BRACKET);
          }
          break;
        case AqlParser.ISNULL:
          _localctx = new ISNULLContext(_localctx);
          this.enterOuterAlt(_localctx, 8);
          {
            this.state = 937;
            this.match(AqlParser.ISNULL);
            this.state = 938;
            this.match(AqlParser.LR_BRACKET);
            this.state = 939;
            (_localctx as ISNULLContext)._left = this.expression(0);
            this.state = 940;
            this.match(AqlParser.COMMA);
            this.state = 941;
            (_localctx as ISNULLContext)._right = this.expression(0);
            this.state = 942;
            this.match(AqlParser.RR_BRACKET);
          }
          break;
        case AqlParser.IIF:
          _localctx = new IIFContext(_localctx);
          this.enterOuterAlt(_localctx, 9);
          {
            this.state = 944;
            this.match(AqlParser.IIF);
            this.state = 945;
            this.match(AqlParser.LR_BRACKET);
            this.state = 946;
            (_localctx as IIFContext)._cond = this.search_condition();
            this.state = 947;
            this.match(AqlParser.COMMA);
            this.state = 948;
            (_localctx as IIFContext)._left = this.expression(0);
            this.state = 949;
            this.match(AqlParser.COMMA);
            this.state = 950;
            (_localctx as IIFContext)._right = this.expression(0);
            this.state = 951;
            this.match(AqlParser.RR_BRACKET);
          }
          break;
        case AqlParser.STRING_AGG:
          _localctx = new STRINGAGGContext(_localctx);
          this.enterOuterAlt(_localctx, 10);
          {
            this.state = 953;
            this.match(AqlParser.STRING_AGG);
            this.state = 954;
            this.match(AqlParser.LR_BRACKET);
            this.state = 955;
            (_localctx as STRINGAGGContext)._expr = this.expression(0);
            this.state = 956;
            this.match(AqlParser.COMMA);
            this.state = 957;
            (_localctx as STRINGAGGContext)._separator = this.expression(0);
            this.state = 958;
            this.match(AqlParser.RR_BRACKET);
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public value_call(): Value_callContext {
    let _localctx: Value_callContext = new Value_callContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 130, AqlParser.RULE_value_call);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 962;
        this.match(AqlParser.VALUE);
        this.state = 963;
        this.match(AqlParser.LR_BRACKET);
        this.state = 964;
        _localctx._xquery = this.match(AqlParser.STRING);
        this.state = 965;
        this.match(AqlParser.COMMA);
        this.state = 966;
        _localctx._sqltype = this.match(AqlParser.STRING);
        this.state = 967;
        this.match(AqlParser.RR_BRACKET);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public query_call(): Query_callContext {
    let _localctx: Query_callContext = new Query_callContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 132, AqlParser.RULE_query_call);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 969;
        this.match(AqlParser.QUERY);
        this.state = 970;
        this.match(AqlParser.LR_BRACKET);
        this.state = 971;
        _localctx._xquery = this.match(AqlParser.STRING);
        this.state = 972;
        this.match(AqlParser.RR_BRACKET);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public exist_call(): Exist_callContext {
    let _localctx: Exist_callContext = new Exist_callContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 134, AqlParser.RULE_exist_call);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 974;
        this.match(AqlParser.EXIST);
        this.state = 975;
        this.match(AqlParser.LR_BRACKET);
        this.state = 976;
        _localctx._xquery = this.match(AqlParser.STRING);
        this.state = 977;
        this.match(AqlParser.RR_BRACKET);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public switch_section(): Switch_sectionContext {
    let _localctx: Switch_sectionContext = new Switch_sectionContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 136, AqlParser.RULE_switch_section);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 979;
        this.match(AqlParser.WHEN);
        this.state = 980;
        this.expression(0);
        this.state = 981;
        this.match(AqlParser.THEN);
        this.state = 982;
        this.expression(0);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public switch_search_condition_section(): Switch_search_condition_sectionContext {
    let _localctx: Switch_search_condition_sectionContext = new Switch_search_condition_sectionContext(
      this._ctx,
      this.state
    );
    this.enterRule(
      _localctx,
      138,
      AqlParser.RULE_switch_search_condition_section
    );
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 984;
        this.match(AqlParser.WHEN);
        this.state = 985;
        this.search_condition();
        this.state = 986;
        this.match(AqlParser.THEN);
        this.state = 987;
        this.expression(0);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public as_column_alias(): As_column_aliasContext {
    let _localctx: As_column_aliasContext = new As_column_aliasContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 140, AqlParser.RULE_as_column_alias);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 990;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === AqlParser.AS) {
          {
            this.state = 989;
            this.match(AqlParser.AS);
          }
        }

        this.state = 992;
        this.column_alias();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public as_table_alias(): As_table_aliasContext {
    let _localctx: As_table_aliasContext = new As_table_aliasContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 142, AqlParser.RULE_as_table_alias);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 995;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === AqlParser.AS) {
          {
            this.state = 994;
            this.match(AqlParser.AS);
          }
        }

        this.state = 997;
        this.table_alias();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public table_alias(): Table_aliasContext {
    let _localctx: Table_aliasContext = new Table_aliasContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 144, AqlParser.RULE_table_alias);
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 999;
        this.id();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public column_alias_list(): Column_alias_listContext {
    let _localctx: Column_alias_listContext = new Column_alias_listContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 146, AqlParser.RULE_column_alias_list);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1001;
        this.match(AqlParser.LR_BRACKET);
        this.state = 1002;
        _localctx._column_alias = this.column_alias();
        _localctx._alias.push(_localctx._column_alias);
        this.state = 1007;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === AqlParser.COMMA) {
          {
            {
              this.state = 1003;
              this.match(AqlParser.COMMA);
              this.state = 1004;
              _localctx._column_alias = this.column_alias();
              _localctx._alias.push(_localctx._column_alias);
            }
          }
          this.state = 1009;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
        this.state = 1010;
        this.match(AqlParser.RR_BRACKET);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public column_alias(): Column_aliasContext {
    let _localctx: Column_aliasContext = new Column_aliasContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 148, AqlParser.RULE_column_alias);
    try {
      this.state = 1014;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case AqlParser.AFTER:
        case AqlParser.AGGREGATE:
        case AqlParser.APPLY:
        case AqlParser.AVG:
        case AqlParser.BINARY_KEYWORD:
        case AqlParser.CATCH:
        case AqlParser.CONCAT:
        case AqlParser.COUNT:
        case AqlParser.DATA:
        case AqlParser.DATEADD:
        case AqlParser.DATEDIFF:
        case AqlParser.DAYS:
        case AqlParser.EMPTY:
        case AqlParser.EXIST:
        case AqlParser.FILTER:
        case AqlParser.GETDATE:
        case AqlParser.GETUTCDATE:
        case AqlParser.GO_BATCH:
        case AqlParser.GO:
        case AqlParser.INT:
        case AqlParser.MAX:
        case AqlParser.MIN:
        case AqlParser.NEXT:
        case AqlParser.ONLY:
        case AqlParser.QUERY:
        case AqlParser.ROW:
        case AqlParser.ROW_NUMBER:
        case AqlParser.ROWS:
        case AqlParser.STDEV:
        case AqlParser.STDEVP:
        case AqlParser.STRING_AGG:
        case AqlParser.SUM:
        case AqlParser.TAKE:
        case AqlParser.THROW:
        case AqlParser.TIME:
        case AqlParser.TRY:
        case AqlParser.VALUE:
        case AqlParser.VAR:
        case AqlParser.VARP:
        case AqlParser.BEFORE:
        case AqlParser.ENABLED:
        case AqlParser.ERROR:
        case AqlParser.GET:
        case AqlParser.IIF:
        case AqlParser.ISNULL:
        case AqlParser.SPLIT:
        case AqlParser.START:
        case AqlParser.STOP:
        case AqlParser.VARCHAR:
        case AqlParser.NVARCHAR:
        case AqlParser.DOUBLE_QUOTE_ID:
        case AqlParser.SQUARE_BRACKET_ID:
        case AqlParser.ID:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1012;
            this.id();
          }
          break;
        case AqlParser.STRING:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1013;
            this.match(AqlParser.STRING);
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public expression_list(): Expression_listContext {
    let _localctx: Expression_listContext = new Expression_listContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 150, AqlParser.RULE_expression_list);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1016;
        _localctx._expression = this.expression(0);
        _localctx._exp.push(_localctx._expression);
        this.state = 1021;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === AqlParser.COMMA) {
          {
            {
              this.state = 1017;
              this.match(AqlParser.COMMA);
              this.state = 1018;
              _localctx._expression = this.expression(0);
              _localctx._exp.push(_localctx._expression);
            }
          }
          this.state = 1023;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public aggregate_windowed_function(): Aggregate_windowed_functionContext {
    let _localctx: Aggregate_windowed_functionContext = new Aggregate_windowed_functionContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 152, AqlParser.RULE_aggregate_windowed_function);
    let _la: number;
    try {
      this.state = 1036;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case AqlParser.AVG:
        case AqlParser.MAX:
        case AqlParser.MIN:
        case AqlParser.STDEV:
        case AqlParser.STDEVP:
        case AqlParser.SUM:
        case AqlParser.VAR:
        case AqlParser.VARP:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1024;
            _localctx._agg_func = this._input.LT(1);
            _la = this._input.LA(1);
            if (
              !(
                (((_la - 57) & ~0x1f) === 0 &&
                  ((1 << (_la - 57)) &
                    ((1 << (AqlParser.AVG - 57)) |
                      (1 << (AqlParser.MAX - 57)) |
                      (1 << (AqlParser.MIN - 57)) |
                      (1 << (AqlParser.STDEV - 57)) |
                      (1 << (AqlParser.STDEVP - 57)) |
                      (1 << (AqlParser.SUM - 57)))) !==
                    0) ||
                _la === AqlParser.VAR ||
                _la === AqlParser.VARP
              )
            ) {
              _localctx._agg_func = this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 1025;
            this.match(AqlParser.LR_BRACKET);
            this.state = 1026;
            this.all_distinct_expression();
            this.state = 1027;
            this.match(AqlParser.RR_BRACKET);
          }
          break;
        case AqlParser.COUNT:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1029;
            this.match(AqlParser.COUNT);
            this.state = 1030;
            this.match(AqlParser.LR_BRACKET);
            this.state = 1033;
            this._errHandler.sync(this);
            switch (this._input.LA(1)) {
              case AqlParser.STAR:
                {
                  this.state = 1031;
                  this.match(AqlParser.STAR);
                }
                break;
              case AqlParser.CASE:
              case AqlParser.COALESCE:
              case AqlParser.CONVERT:
              case AqlParser.DEFAULT:
              case AqlParser.DISTINCT:
              case AqlParser.LEFT:
              case AqlParser.NULL:
              case AqlParser.NULLIF:
              case AqlParser.RIGHT:
              case AqlParser.AFTER:
              case AqlParser.AGGREGATE:
              case AqlParser.APPLY:
              case AqlParser.AVG:
              case AqlParser.BINARY_KEYWORD:
              case AqlParser.CATCH:
              case AqlParser.CONCAT:
              case AqlParser.COUNT:
              case AqlParser.DATA:
              case AqlParser.DATEADD:
              case AqlParser.DATEDIFF:
              case AqlParser.DAYS:
              case AqlParser.EMPTY:
              case AqlParser.EXIST:
              case AqlParser.FILTER:
              case AqlParser.GETDATE:
              case AqlParser.GETUTCDATE:
              case AqlParser.GO_BATCH:
              case AqlParser.GO:
              case AqlParser.INT:
              case AqlParser.MAX:
              case AqlParser.MIN:
              case AqlParser.NEXT:
              case AqlParser.ONLY:
              case AqlParser.QUERY:
              case AqlParser.ROW:
              case AqlParser.ROW_NUMBER:
              case AqlParser.ROWS:
              case AqlParser.STDEV:
              case AqlParser.STDEVP:
              case AqlParser.STRING_AGG:
              case AqlParser.SUM:
              case AqlParser.TAKE:
              case AqlParser.THROW:
              case AqlParser.TIME:
              case AqlParser.TRY:
              case AqlParser.VALUE:
              case AqlParser.VAR:
              case AqlParser.VARP:
              case AqlParser.BEFORE:
              case AqlParser.ENABLED:
              case AqlParser.ERROR:
              case AqlParser.GET:
              case AqlParser.IIF:
              case AqlParser.ISNULL:
              case AqlParser.SPLIT:
              case AqlParser.START:
              case AqlParser.STOP:
              case AqlParser.VARCHAR:
              case AqlParser.NVARCHAR:
              case AqlParser.DOUBLE_QUOTE_ID:
              case AqlParser.SQUARE_BRACKET_ID:
              case AqlParser.LOCAL_ID:
              case AqlParser.DECIMAL:
              case AqlParser.ID:
              case AqlParser.STRING:
              case AqlParser.BINARY:
              case AqlParser.FLOAT:
              case AqlParser.REAL:
              case AqlParser.DOT:
              case AqlParser.DOLLAR:
              case AqlParser.LR_BRACKET:
              case AqlParser.PLUS:
              case AqlParser.MINUS:
              case AqlParser.BIT_NOT:
                {
                  this.state = 1032;
                  this.all_distinct_expression();
                }
                break;
              default:
                throw new NoViableAltException(this);
            }
            this.state = 1035;
            this.match(AqlParser.RR_BRACKET);
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public all_distinct_expression(): All_distinct_expressionContext {
    let _localctx: All_distinct_expressionContext = new All_distinct_expressionContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 154, AqlParser.RULE_all_distinct_expression);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1039;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === AqlParser.DISTINCT) {
          {
            this.state = 1038;
            this.match(AqlParser.DISTINCT);
          }
        }

        this.state = 1041;
        this.expression(0);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public full_table_name(): Full_table_nameContext {
    let _localctx: Full_table_nameContext = new Full_table_nameContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 156, AqlParser.RULE_full_table_name);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1060;
        this._errHandler.sync(this);
        switch (this.interpreter.adaptivePredict(this._input, 129, this._ctx)) {
          case 1:
            {
              this.state = 1043;
              _localctx._server = this.id();
              this.state = 1044;
              this.match(AqlParser.DOT);
              this.state = 1045;
              _localctx._database = this.id();
              this.state = 1046;
              this.match(AqlParser.DOT);
              this.state = 1047;
              _localctx._schema = this.id();
              this.state = 1048;
              this.match(AqlParser.DOT);
            }
            break;

          case 2:
            {
              this.state = 1050;
              _localctx._database = this.id();
              this.state = 1051;
              this.match(AqlParser.DOT);
              this.state = 1053;
              this._errHandler.sync(this);
              _la = this._input.LA(1);
              if (
                (((_la - 54) & ~0x1f) === 0 &&
                  ((1 << (_la - 54)) &
                    ((1 << (AqlParser.AFTER - 54)) |
                      (1 << (AqlParser.AGGREGATE - 54)) |
                      (1 << (AqlParser.APPLY - 54)) |
                      (1 << (AqlParser.AVG - 54)) |
                      (1 << (AqlParser.BINARY_KEYWORD - 54)) |
                      (1 << (AqlParser.CATCH - 54)) |
                      (1 << (AqlParser.CONCAT - 54)) |
                      (1 << (AqlParser.COUNT - 54)) |
                      (1 << (AqlParser.DATA - 54)) |
                      (1 << (AqlParser.DATEADD - 54)) |
                      (1 << (AqlParser.DATEDIFF - 54)) |
                      (1 << (AqlParser.DAYS - 54)) |
                      (1 << (AqlParser.EMPTY - 54)) |
                      (1 << (AqlParser.EXIST - 54)) |
                      (1 << (AqlParser.FILTER - 54)) |
                      (1 << (AqlParser.GETDATE - 54)) |
                      (1 << (AqlParser.GETUTCDATE - 54)) |
                      (1 << (AqlParser.GO_BATCH - 54)) |
                      (1 << (AqlParser.GO - 54)) |
                      (1 << (AqlParser.INT - 54)) |
                      (1 << (AqlParser.MAX - 54)) |
                      (1 << (AqlParser.MIN - 54)) |
                      (1 << (AqlParser.NEXT - 54)) |
                      (1 << (AqlParser.ONLY - 54)) |
                      (1 << (AqlParser.QUERY - 54)) |
                      (1 << (AqlParser.ROW - 54)) |
                      (1 << (AqlParser.ROW_NUMBER - 54)) |
                      (1 << (AqlParser.ROWS - 54)) |
                      (1 << (AqlParser.STDEV - 54)) |
                      (1 << (AqlParser.STDEVP - 54)) |
                      (1 << (AqlParser.STRING_AGG - 54)) |
                      (1 << (AqlParser.SUM - 54)))) !==
                    0) ||
                (((_la - 86) & ~0x1f) === 0 &&
                  ((1 << (_la - 86)) &
                    ((1 << (AqlParser.TAKE - 86)) |
                      (1 << (AqlParser.THROW - 86)) |
                      (1 << (AqlParser.TIME - 86)) |
                      (1 << (AqlParser.TRY - 86)) |
                      (1 << (AqlParser.VALUE - 86)) |
                      (1 << (AqlParser.VAR - 86)) |
                      (1 << (AqlParser.VARP - 86)) |
                      (1 << (AqlParser.BEFORE - 86)) |
                      (1 << (AqlParser.ENABLED - 86)) |
                      (1 << (AqlParser.ERROR - 86)) |
                      (1 << (AqlParser.GET - 86)) |
                      (1 << (AqlParser.IIF - 86)) |
                      (1 << (AqlParser.ISNULL - 86)) |
                      (1 << (AqlParser.SPLIT - 86)) |
                      (1 << (AqlParser.START - 86)) |
                      (1 << (AqlParser.STOP - 86)) |
                      (1 << (AqlParser.VARCHAR - 86)) |
                      (1 << (AqlParser.NVARCHAR - 86)) |
                      (1 << (AqlParser.DOUBLE_QUOTE_ID - 86)) |
                      (1 << (AqlParser.SQUARE_BRACKET_ID - 86)) |
                      (1 << (AqlParser.ID - 86)))) !==
                    0)
              ) {
                {
                  this.state = 1052;
                  _localctx._schema = this.id();
                }
              }

              this.state = 1055;
              this.match(AqlParser.DOT);
            }
            break;

          case 3:
            {
              this.state = 1057;
              _localctx._schema = this.id();
              this.state = 1058;
              this.match(AqlParser.DOT);
            }
            break;
        }
        this.state = 1062;
        _localctx._table = this.id();
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public table_name(): Table_nameContext {
    let _localctx: Table_nameContext = new Table_nameContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 158, AqlParser.RULE_table_name);
    let _la: number;
    try {
      this.state = 1089;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 134, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1074;
            this._errHandler.sync(this);
            switch (
              this.interpreter.adaptivePredict(this._input, 131, this._ctx)
            ) {
              case 1:
                {
                  this.state = 1064;
                  _localctx._database = this.id();
                  this.state = 1065;
                  this.match(AqlParser.DOT);
                  this.state = 1067;
                  this._errHandler.sync(this);
                  _la = this._input.LA(1);
                  if (
                    (((_la - 54) & ~0x1f) === 0 &&
                      ((1 << (_la - 54)) &
                        ((1 << (AqlParser.AFTER - 54)) |
                          (1 << (AqlParser.AGGREGATE - 54)) |
                          (1 << (AqlParser.APPLY - 54)) |
                          (1 << (AqlParser.AVG - 54)) |
                          (1 << (AqlParser.BINARY_KEYWORD - 54)) |
                          (1 << (AqlParser.CATCH - 54)) |
                          (1 << (AqlParser.CONCAT - 54)) |
                          (1 << (AqlParser.COUNT - 54)) |
                          (1 << (AqlParser.DATA - 54)) |
                          (1 << (AqlParser.DATEADD - 54)) |
                          (1 << (AqlParser.DATEDIFF - 54)) |
                          (1 << (AqlParser.DAYS - 54)) |
                          (1 << (AqlParser.EMPTY - 54)) |
                          (1 << (AqlParser.EXIST - 54)) |
                          (1 << (AqlParser.FILTER - 54)) |
                          (1 << (AqlParser.GETDATE - 54)) |
                          (1 << (AqlParser.GETUTCDATE - 54)) |
                          (1 << (AqlParser.GO_BATCH - 54)) |
                          (1 << (AqlParser.GO - 54)) |
                          (1 << (AqlParser.INT - 54)) |
                          (1 << (AqlParser.MAX - 54)) |
                          (1 << (AqlParser.MIN - 54)) |
                          (1 << (AqlParser.NEXT - 54)) |
                          (1 << (AqlParser.ONLY - 54)) |
                          (1 << (AqlParser.QUERY - 54)) |
                          (1 << (AqlParser.ROW - 54)) |
                          (1 << (AqlParser.ROW_NUMBER - 54)) |
                          (1 << (AqlParser.ROWS - 54)) |
                          (1 << (AqlParser.STDEV - 54)) |
                          (1 << (AqlParser.STDEVP - 54)) |
                          (1 << (AqlParser.STRING_AGG - 54)) |
                          (1 << (AqlParser.SUM - 54)))) !==
                        0) ||
                    (((_la - 86) & ~0x1f) === 0 &&
                      ((1 << (_la - 86)) &
                        ((1 << (AqlParser.TAKE - 86)) |
                          (1 << (AqlParser.THROW - 86)) |
                          (1 << (AqlParser.TIME - 86)) |
                          (1 << (AqlParser.TRY - 86)) |
                          (1 << (AqlParser.VALUE - 86)) |
                          (1 << (AqlParser.VAR - 86)) |
                          (1 << (AqlParser.VARP - 86)) |
                          (1 << (AqlParser.BEFORE - 86)) |
                          (1 << (AqlParser.ENABLED - 86)) |
                          (1 << (AqlParser.ERROR - 86)) |
                          (1 << (AqlParser.GET - 86)) |
                          (1 << (AqlParser.IIF - 86)) |
                          (1 << (AqlParser.ISNULL - 86)) |
                          (1 << (AqlParser.SPLIT - 86)) |
                          (1 << (AqlParser.START - 86)) |
                          (1 << (AqlParser.STOP - 86)) |
                          (1 << (AqlParser.VARCHAR - 86)) |
                          (1 << (AqlParser.NVARCHAR - 86)) |
                          (1 << (AqlParser.DOUBLE_QUOTE_ID - 86)) |
                          (1 << (AqlParser.SQUARE_BRACKET_ID - 86)) |
                          (1 << (AqlParser.ID - 86)))) !==
                        0)
                  ) {
                    {
                      this.state = 1066;
                      _localctx._schema = this.id();
                    }
                  }

                  this.state = 1069;
                  this.match(AqlParser.DOT);
                }
                break;

              case 2:
                {
                  this.state = 1071;
                  _localctx._schema = this.id();
                  this.state = 1072;
                  this.match(AqlParser.DOT);
                }
                break;
            }
            this.state = 1076;
            _localctx._table = this.id();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1087;
            this._errHandler.sync(this);
            switch (
              this.interpreter.adaptivePredict(this._input, 133, this._ctx)
            ) {
              case 1:
                {
                  this.state = 1077;
                  _localctx._database = this.id();
                  this.state = 1078;
                  this.match(AqlParser.DOT);
                  this.state = 1080;
                  this._errHandler.sync(this);
                  _la = this._input.LA(1);
                  if (
                    (((_la - 54) & ~0x1f) === 0 &&
                      ((1 << (_la - 54)) &
                        ((1 << (AqlParser.AFTER - 54)) |
                          (1 << (AqlParser.AGGREGATE - 54)) |
                          (1 << (AqlParser.APPLY - 54)) |
                          (1 << (AqlParser.AVG - 54)) |
                          (1 << (AqlParser.BINARY_KEYWORD - 54)) |
                          (1 << (AqlParser.CATCH - 54)) |
                          (1 << (AqlParser.CONCAT - 54)) |
                          (1 << (AqlParser.COUNT - 54)) |
                          (1 << (AqlParser.DATA - 54)) |
                          (1 << (AqlParser.DATEADD - 54)) |
                          (1 << (AqlParser.DATEDIFF - 54)) |
                          (1 << (AqlParser.DAYS - 54)) |
                          (1 << (AqlParser.EMPTY - 54)) |
                          (1 << (AqlParser.EXIST - 54)) |
                          (1 << (AqlParser.FILTER - 54)) |
                          (1 << (AqlParser.GETDATE - 54)) |
                          (1 << (AqlParser.GETUTCDATE - 54)) |
                          (1 << (AqlParser.GO_BATCH - 54)) |
                          (1 << (AqlParser.GO - 54)) |
                          (1 << (AqlParser.INT - 54)) |
                          (1 << (AqlParser.MAX - 54)) |
                          (1 << (AqlParser.MIN - 54)) |
                          (1 << (AqlParser.NEXT - 54)) |
                          (1 << (AqlParser.ONLY - 54)) |
                          (1 << (AqlParser.QUERY - 54)) |
                          (1 << (AqlParser.ROW - 54)) |
                          (1 << (AqlParser.ROW_NUMBER - 54)) |
                          (1 << (AqlParser.ROWS - 54)) |
                          (1 << (AqlParser.STDEV - 54)) |
                          (1 << (AqlParser.STDEVP - 54)) |
                          (1 << (AqlParser.STRING_AGG - 54)) |
                          (1 << (AqlParser.SUM - 54)))) !==
                        0) ||
                    (((_la - 86) & ~0x1f) === 0 &&
                      ((1 << (_la - 86)) &
                        ((1 << (AqlParser.TAKE - 86)) |
                          (1 << (AqlParser.THROW - 86)) |
                          (1 << (AqlParser.TIME - 86)) |
                          (1 << (AqlParser.TRY - 86)) |
                          (1 << (AqlParser.VALUE - 86)) |
                          (1 << (AqlParser.VAR - 86)) |
                          (1 << (AqlParser.VARP - 86)) |
                          (1 << (AqlParser.BEFORE - 86)) |
                          (1 << (AqlParser.ENABLED - 86)) |
                          (1 << (AqlParser.ERROR - 86)) |
                          (1 << (AqlParser.GET - 86)) |
                          (1 << (AqlParser.IIF - 86)) |
                          (1 << (AqlParser.ISNULL - 86)) |
                          (1 << (AqlParser.SPLIT - 86)) |
                          (1 << (AqlParser.START - 86)) |
                          (1 << (AqlParser.STOP - 86)) |
                          (1 << (AqlParser.VARCHAR - 86)) |
                          (1 << (AqlParser.NVARCHAR - 86)) |
                          (1 << (AqlParser.DOUBLE_QUOTE_ID - 86)) |
                          (1 << (AqlParser.SQUARE_BRACKET_ID - 86)) |
                          (1 << (AqlParser.ID - 86)))) !==
                        0)
                  ) {
                    {
                      this.state = 1079;
                      _localctx._schema = this.id();
                    }
                  }

                  this.state = 1082;
                  this.match(AqlParser.DOT);
                }
                break;

              case 2:
                {
                  this.state = 1084;
                  _localctx._schema = this.id();
                  this.state = 1085;
                  this.match(AqlParser.DOT);
                }
                break;
            }
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public full_column_name(): Full_column_nameContext {
    let _localctx: Full_column_nameContext = new Full_column_nameContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 160, AqlParser.RULE_full_column_name);
    let _la: number;
    try {
      this.state = 1119;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 141, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1092;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (
              (((_la - 54) & ~0x1f) === 0 &&
                ((1 << (_la - 54)) &
                  ((1 << (AqlParser.AFTER - 54)) |
                    (1 << (AqlParser.AGGREGATE - 54)) |
                    (1 << (AqlParser.APPLY - 54)) |
                    (1 << (AqlParser.AVG - 54)) |
                    (1 << (AqlParser.BINARY_KEYWORD - 54)) |
                    (1 << (AqlParser.CATCH - 54)) |
                    (1 << (AqlParser.CONCAT - 54)) |
                    (1 << (AqlParser.COUNT - 54)) |
                    (1 << (AqlParser.DATA - 54)) |
                    (1 << (AqlParser.DATEADD - 54)) |
                    (1 << (AqlParser.DATEDIFF - 54)) |
                    (1 << (AqlParser.DAYS - 54)) |
                    (1 << (AqlParser.EMPTY - 54)) |
                    (1 << (AqlParser.EXIST - 54)) |
                    (1 << (AqlParser.FILTER - 54)) |
                    (1 << (AqlParser.GETDATE - 54)) |
                    (1 << (AqlParser.GETUTCDATE - 54)) |
                    (1 << (AqlParser.GO_BATCH - 54)) |
                    (1 << (AqlParser.GO - 54)) |
                    (1 << (AqlParser.INT - 54)) |
                    (1 << (AqlParser.MAX - 54)) |
                    (1 << (AqlParser.MIN - 54)) |
                    (1 << (AqlParser.NEXT - 54)) |
                    (1 << (AqlParser.ONLY - 54)) |
                    (1 << (AqlParser.QUERY - 54)) |
                    (1 << (AqlParser.ROW - 54)) |
                    (1 << (AqlParser.ROW_NUMBER - 54)) |
                    (1 << (AqlParser.ROWS - 54)) |
                    (1 << (AqlParser.STDEV - 54)) |
                    (1 << (AqlParser.STDEVP - 54)) |
                    (1 << (AqlParser.STRING_AGG - 54)) |
                    (1 << (AqlParser.SUM - 54)))) !==
                  0) ||
              (((_la - 86) & ~0x1f) === 0 &&
                ((1 << (_la - 86)) &
                  ((1 << (AqlParser.TAKE - 86)) |
                    (1 << (AqlParser.THROW - 86)) |
                    (1 << (AqlParser.TIME - 86)) |
                    (1 << (AqlParser.TRY - 86)) |
                    (1 << (AqlParser.VALUE - 86)) |
                    (1 << (AqlParser.VAR - 86)) |
                    (1 << (AqlParser.VARP - 86)) |
                    (1 << (AqlParser.BEFORE - 86)) |
                    (1 << (AqlParser.ENABLED - 86)) |
                    (1 << (AqlParser.ERROR - 86)) |
                    (1 << (AqlParser.GET - 86)) |
                    (1 << (AqlParser.IIF - 86)) |
                    (1 << (AqlParser.ISNULL - 86)) |
                    (1 << (AqlParser.SPLIT - 86)) |
                    (1 << (AqlParser.START - 86)) |
                    (1 << (AqlParser.STOP - 86)) |
                    (1 << (AqlParser.VARCHAR - 86)) |
                    (1 << (AqlParser.NVARCHAR - 86)) |
                    (1 << (AqlParser.DOUBLE_QUOTE_ID - 86)) |
                    (1 << (AqlParser.SQUARE_BRACKET_ID - 86)) |
                    (1 << (AqlParser.ID - 86)))) !==
                  0)
            ) {
              {
                this.state = 1091;
                _localctx._server = this.id();
              }
            }

            this.state = 1094;
            this.match(AqlParser.DOT);
            this.state = 1096;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (
              (((_la - 54) & ~0x1f) === 0 &&
                ((1 << (_la - 54)) &
                  ((1 << (AqlParser.AFTER - 54)) |
                    (1 << (AqlParser.AGGREGATE - 54)) |
                    (1 << (AqlParser.APPLY - 54)) |
                    (1 << (AqlParser.AVG - 54)) |
                    (1 << (AqlParser.BINARY_KEYWORD - 54)) |
                    (1 << (AqlParser.CATCH - 54)) |
                    (1 << (AqlParser.CONCAT - 54)) |
                    (1 << (AqlParser.COUNT - 54)) |
                    (1 << (AqlParser.DATA - 54)) |
                    (1 << (AqlParser.DATEADD - 54)) |
                    (1 << (AqlParser.DATEDIFF - 54)) |
                    (1 << (AqlParser.DAYS - 54)) |
                    (1 << (AqlParser.EMPTY - 54)) |
                    (1 << (AqlParser.EXIST - 54)) |
                    (1 << (AqlParser.FILTER - 54)) |
                    (1 << (AqlParser.GETDATE - 54)) |
                    (1 << (AqlParser.GETUTCDATE - 54)) |
                    (1 << (AqlParser.GO_BATCH - 54)) |
                    (1 << (AqlParser.GO - 54)) |
                    (1 << (AqlParser.INT - 54)) |
                    (1 << (AqlParser.MAX - 54)) |
                    (1 << (AqlParser.MIN - 54)) |
                    (1 << (AqlParser.NEXT - 54)) |
                    (1 << (AqlParser.ONLY - 54)) |
                    (1 << (AqlParser.QUERY - 54)) |
                    (1 << (AqlParser.ROW - 54)) |
                    (1 << (AqlParser.ROW_NUMBER - 54)) |
                    (1 << (AqlParser.ROWS - 54)) |
                    (1 << (AqlParser.STDEV - 54)) |
                    (1 << (AqlParser.STDEVP - 54)) |
                    (1 << (AqlParser.STRING_AGG - 54)) |
                    (1 << (AqlParser.SUM - 54)))) !==
                  0) ||
              (((_la - 86) & ~0x1f) === 0 &&
                ((1 << (_la - 86)) &
                  ((1 << (AqlParser.TAKE - 86)) |
                    (1 << (AqlParser.THROW - 86)) |
                    (1 << (AqlParser.TIME - 86)) |
                    (1 << (AqlParser.TRY - 86)) |
                    (1 << (AqlParser.VALUE - 86)) |
                    (1 << (AqlParser.VAR - 86)) |
                    (1 << (AqlParser.VARP - 86)) |
                    (1 << (AqlParser.BEFORE - 86)) |
                    (1 << (AqlParser.ENABLED - 86)) |
                    (1 << (AqlParser.ERROR - 86)) |
                    (1 << (AqlParser.GET - 86)) |
                    (1 << (AqlParser.IIF - 86)) |
                    (1 << (AqlParser.ISNULL - 86)) |
                    (1 << (AqlParser.SPLIT - 86)) |
                    (1 << (AqlParser.START - 86)) |
                    (1 << (AqlParser.STOP - 86)) |
                    (1 << (AqlParser.VARCHAR - 86)) |
                    (1 << (AqlParser.NVARCHAR - 86)) |
                    (1 << (AqlParser.DOUBLE_QUOTE_ID - 86)) |
                    (1 << (AqlParser.SQUARE_BRACKET_ID - 86)) |
                    (1 << (AqlParser.ID - 86)))) !==
                  0)
            ) {
              {
                this.state = 1095;
                _localctx._schema = this.id();
              }
            }

            this.state = 1098;
            this.match(AqlParser.DOT);
            this.state = 1100;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (
              (((_la - 54) & ~0x1f) === 0 &&
                ((1 << (_la - 54)) &
                  ((1 << (AqlParser.AFTER - 54)) |
                    (1 << (AqlParser.AGGREGATE - 54)) |
                    (1 << (AqlParser.APPLY - 54)) |
                    (1 << (AqlParser.AVG - 54)) |
                    (1 << (AqlParser.BINARY_KEYWORD - 54)) |
                    (1 << (AqlParser.CATCH - 54)) |
                    (1 << (AqlParser.CONCAT - 54)) |
                    (1 << (AqlParser.COUNT - 54)) |
                    (1 << (AqlParser.DATA - 54)) |
                    (1 << (AqlParser.DATEADD - 54)) |
                    (1 << (AqlParser.DATEDIFF - 54)) |
                    (1 << (AqlParser.DAYS - 54)) |
                    (1 << (AqlParser.EMPTY - 54)) |
                    (1 << (AqlParser.EXIST - 54)) |
                    (1 << (AqlParser.FILTER - 54)) |
                    (1 << (AqlParser.GETDATE - 54)) |
                    (1 << (AqlParser.GETUTCDATE - 54)) |
                    (1 << (AqlParser.GO_BATCH - 54)) |
                    (1 << (AqlParser.GO - 54)) |
                    (1 << (AqlParser.INT - 54)) |
                    (1 << (AqlParser.MAX - 54)) |
                    (1 << (AqlParser.MIN - 54)) |
                    (1 << (AqlParser.NEXT - 54)) |
                    (1 << (AqlParser.ONLY - 54)) |
                    (1 << (AqlParser.QUERY - 54)) |
                    (1 << (AqlParser.ROW - 54)) |
                    (1 << (AqlParser.ROW_NUMBER - 54)) |
                    (1 << (AqlParser.ROWS - 54)) |
                    (1 << (AqlParser.STDEV - 54)) |
                    (1 << (AqlParser.STDEVP - 54)) |
                    (1 << (AqlParser.STRING_AGG - 54)) |
                    (1 << (AqlParser.SUM - 54)))) !==
                  0) ||
              (((_la - 86) & ~0x1f) === 0 &&
                ((1 << (_la - 86)) &
                  ((1 << (AqlParser.TAKE - 86)) |
                    (1 << (AqlParser.THROW - 86)) |
                    (1 << (AqlParser.TIME - 86)) |
                    (1 << (AqlParser.TRY - 86)) |
                    (1 << (AqlParser.VALUE - 86)) |
                    (1 << (AqlParser.VAR - 86)) |
                    (1 << (AqlParser.VARP - 86)) |
                    (1 << (AqlParser.BEFORE - 86)) |
                    (1 << (AqlParser.ENABLED - 86)) |
                    (1 << (AqlParser.ERROR - 86)) |
                    (1 << (AqlParser.GET - 86)) |
                    (1 << (AqlParser.IIF - 86)) |
                    (1 << (AqlParser.ISNULL - 86)) |
                    (1 << (AqlParser.SPLIT - 86)) |
                    (1 << (AqlParser.START - 86)) |
                    (1 << (AqlParser.STOP - 86)) |
                    (1 << (AqlParser.VARCHAR - 86)) |
                    (1 << (AqlParser.NVARCHAR - 86)) |
                    (1 << (AqlParser.DOUBLE_QUOTE_ID - 86)) |
                    (1 << (AqlParser.SQUARE_BRACKET_ID - 86)) |
                    (1 << (AqlParser.ID - 86)))) !==
                  0)
            ) {
              {
                this.state = 1099;
                _localctx._tablename = this.id();
              }
            }

            this.state = 1102;
            this.match(AqlParser.DOT);
            this.state = 1103;
            _localctx._column_name = this.id();
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1105;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (
              (((_la - 54) & ~0x1f) === 0 &&
                ((1 << (_la - 54)) &
                  ((1 << (AqlParser.AFTER - 54)) |
                    (1 << (AqlParser.AGGREGATE - 54)) |
                    (1 << (AqlParser.APPLY - 54)) |
                    (1 << (AqlParser.AVG - 54)) |
                    (1 << (AqlParser.BINARY_KEYWORD - 54)) |
                    (1 << (AqlParser.CATCH - 54)) |
                    (1 << (AqlParser.CONCAT - 54)) |
                    (1 << (AqlParser.COUNT - 54)) |
                    (1 << (AqlParser.DATA - 54)) |
                    (1 << (AqlParser.DATEADD - 54)) |
                    (1 << (AqlParser.DATEDIFF - 54)) |
                    (1 << (AqlParser.DAYS - 54)) |
                    (1 << (AqlParser.EMPTY - 54)) |
                    (1 << (AqlParser.EXIST - 54)) |
                    (1 << (AqlParser.FILTER - 54)) |
                    (1 << (AqlParser.GETDATE - 54)) |
                    (1 << (AqlParser.GETUTCDATE - 54)) |
                    (1 << (AqlParser.GO_BATCH - 54)) |
                    (1 << (AqlParser.GO - 54)) |
                    (1 << (AqlParser.INT - 54)) |
                    (1 << (AqlParser.MAX - 54)) |
                    (1 << (AqlParser.MIN - 54)) |
                    (1 << (AqlParser.NEXT - 54)) |
                    (1 << (AqlParser.ONLY - 54)) |
                    (1 << (AqlParser.QUERY - 54)) |
                    (1 << (AqlParser.ROW - 54)) |
                    (1 << (AqlParser.ROW_NUMBER - 54)) |
                    (1 << (AqlParser.ROWS - 54)) |
                    (1 << (AqlParser.STDEV - 54)) |
                    (1 << (AqlParser.STDEVP - 54)) |
                    (1 << (AqlParser.STRING_AGG - 54)) |
                    (1 << (AqlParser.SUM - 54)))) !==
                  0) ||
              (((_la - 86) & ~0x1f) === 0 &&
                ((1 << (_la - 86)) &
                  ((1 << (AqlParser.TAKE - 86)) |
                    (1 << (AqlParser.THROW - 86)) |
                    (1 << (AqlParser.TIME - 86)) |
                    (1 << (AqlParser.TRY - 86)) |
                    (1 << (AqlParser.VALUE - 86)) |
                    (1 << (AqlParser.VAR - 86)) |
                    (1 << (AqlParser.VARP - 86)) |
                    (1 << (AqlParser.BEFORE - 86)) |
                    (1 << (AqlParser.ENABLED - 86)) |
                    (1 << (AqlParser.ERROR - 86)) |
                    (1 << (AqlParser.GET - 86)) |
                    (1 << (AqlParser.IIF - 86)) |
                    (1 << (AqlParser.ISNULL - 86)) |
                    (1 << (AqlParser.SPLIT - 86)) |
                    (1 << (AqlParser.START - 86)) |
                    (1 << (AqlParser.STOP - 86)) |
                    (1 << (AqlParser.VARCHAR - 86)) |
                    (1 << (AqlParser.NVARCHAR - 86)) |
                    (1 << (AqlParser.DOUBLE_QUOTE_ID - 86)) |
                    (1 << (AqlParser.SQUARE_BRACKET_ID - 86)) |
                    (1 << (AqlParser.ID - 86)))) !==
                  0)
            ) {
              {
                this.state = 1104;
                _localctx._schema = this.id();
              }
            }

            this.state = 1107;
            this.match(AqlParser.DOT);
            this.state = 1109;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (
              (((_la - 54) & ~0x1f) === 0 &&
                ((1 << (_la - 54)) &
                  ((1 << (AqlParser.AFTER - 54)) |
                    (1 << (AqlParser.AGGREGATE - 54)) |
                    (1 << (AqlParser.APPLY - 54)) |
                    (1 << (AqlParser.AVG - 54)) |
                    (1 << (AqlParser.BINARY_KEYWORD - 54)) |
                    (1 << (AqlParser.CATCH - 54)) |
                    (1 << (AqlParser.CONCAT - 54)) |
                    (1 << (AqlParser.COUNT - 54)) |
                    (1 << (AqlParser.DATA - 54)) |
                    (1 << (AqlParser.DATEADD - 54)) |
                    (1 << (AqlParser.DATEDIFF - 54)) |
                    (1 << (AqlParser.DAYS - 54)) |
                    (1 << (AqlParser.EMPTY - 54)) |
                    (1 << (AqlParser.EXIST - 54)) |
                    (1 << (AqlParser.FILTER - 54)) |
                    (1 << (AqlParser.GETDATE - 54)) |
                    (1 << (AqlParser.GETUTCDATE - 54)) |
                    (1 << (AqlParser.GO_BATCH - 54)) |
                    (1 << (AqlParser.GO - 54)) |
                    (1 << (AqlParser.INT - 54)) |
                    (1 << (AqlParser.MAX - 54)) |
                    (1 << (AqlParser.MIN - 54)) |
                    (1 << (AqlParser.NEXT - 54)) |
                    (1 << (AqlParser.ONLY - 54)) |
                    (1 << (AqlParser.QUERY - 54)) |
                    (1 << (AqlParser.ROW - 54)) |
                    (1 << (AqlParser.ROW_NUMBER - 54)) |
                    (1 << (AqlParser.ROWS - 54)) |
                    (1 << (AqlParser.STDEV - 54)) |
                    (1 << (AqlParser.STDEVP - 54)) |
                    (1 << (AqlParser.STRING_AGG - 54)) |
                    (1 << (AqlParser.SUM - 54)))) !==
                  0) ||
              (((_la - 86) & ~0x1f) === 0 &&
                ((1 << (_la - 86)) &
                  ((1 << (AqlParser.TAKE - 86)) |
                    (1 << (AqlParser.THROW - 86)) |
                    (1 << (AqlParser.TIME - 86)) |
                    (1 << (AqlParser.TRY - 86)) |
                    (1 << (AqlParser.VALUE - 86)) |
                    (1 << (AqlParser.VAR - 86)) |
                    (1 << (AqlParser.VARP - 86)) |
                    (1 << (AqlParser.BEFORE - 86)) |
                    (1 << (AqlParser.ENABLED - 86)) |
                    (1 << (AqlParser.ERROR - 86)) |
                    (1 << (AqlParser.GET - 86)) |
                    (1 << (AqlParser.IIF - 86)) |
                    (1 << (AqlParser.ISNULL - 86)) |
                    (1 << (AqlParser.SPLIT - 86)) |
                    (1 << (AqlParser.START - 86)) |
                    (1 << (AqlParser.STOP - 86)) |
                    (1 << (AqlParser.VARCHAR - 86)) |
                    (1 << (AqlParser.NVARCHAR - 86)) |
                    (1 << (AqlParser.DOUBLE_QUOTE_ID - 86)) |
                    (1 << (AqlParser.SQUARE_BRACKET_ID - 86)) |
                    (1 << (AqlParser.ID - 86)))) !==
                  0)
            ) {
              {
                this.state = 1108;
                _localctx._tablename = this.id();
              }
            }

            this.state = 1111;
            this.match(AqlParser.DOT);
            this.state = 1112;
            _localctx._column_name = this.id();
          }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 1114;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (
              (((_la - 54) & ~0x1f) === 0 &&
                ((1 << (_la - 54)) &
                  ((1 << (AqlParser.AFTER - 54)) |
                    (1 << (AqlParser.AGGREGATE - 54)) |
                    (1 << (AqlParser.APPLY - 54)) |
                    (1 << (AqlParser.AVG - 54)) |
                    (1 << (AqlParser.BINARY_KEYWORD - 54)) |
                    (1 << (AqlParser.CATCH - 54)) |
                    (1 << (AqlParser.CONCAT - 54)) |
                    (1 << (AqlParser.COUNT - 54)) |
                    (1 << (AqlParser.DATA - 54)) |
                    (1 << (AqlParser.DATEADD - 54)) |
                    (1 << (AqlParser.DATEDIFF - 54)) |
                    (1 << (AqlParser.DAYS - 54)) |
                    (1 << (AqlParser.EMPTY - 54)) |
                    (1 << (AqlParser.EXIST - 54)) |
                    (1 << (AqlParser.FILTER - 54)) |
                    (1 << (AqlParser.GETDATE - 54)) |
                    (1 << (AqlParser.GETUTCDATE - 54)) |
                    (1 << (AqlParser.GO_BATCH - 54)) |
                    (1 << (AqlParser.GO - 54)) |
                    (1 << (AqlParser.INT - 54)) |
                    (1 << (AqlParser.MAX - 54)) |
                    (1 << (AqlParser.MIN - 54)) |
                    (1 << (AqlParser.NEXT - 54)) |
                    (1 << (AqlParser.ONLY - 54)) |
                    (1 << (AqlParser.QUERY - 54)) |
                    (1 << (AqlParser.ROW - 54)) |
                    (1 << (AqlParser.ROW_NUMBER - 54)) |
                    (1 << (AqlParser.ROWS - 54)) |
                    (1 << (AqlParser.STDEV - 54)) |
                    (1 << (AqlParser.STDEVP - 54)) |
                    (1 << (AqlParser.STRING_AGG - 54)) |
                    (1 << (AqlParser.SUM - 54)))) !==
                  0) ||
              (((_la - 86) & ~0x1f) === 0 &&
                ((1 << (_la - 86)) &
                  ((1 << (AqlParser.TAKE - 86)) |
                    (1 << (AqlParser.THROW - 86)) |
                    (1 << (AqlParser.TIME - 86)) |
                    (1 << (AqlParser.TRY - 86)) |
                    (1 << (AqlParser.VALUE - 86)) |
                    (1 << (AqlParser.VAR - 86)) |
                    (1 << (AqlParser.VARP - 86)) |
                    (1 << (AqlParser.BEFORE - 86)) |
                    (1 << (AqlParser.ENABLED - 86)) |
                    (1 << (AqlParser.ERROR - 86)) |
                    (1 << (AqlParser.GET - 86)) |
                    (1 << (AqlParser.IIF - 86)) |
                    (1 << (AqlParser.ISNULL - 86)) |
                    (1 << (AqlParser.SPLIT - 86)) |
                    (1 << (AqlParser.START - 86)) |
                    (1 << (AqlParser.STOP - 86)) |
                    (1 << (AqlParser.VARCHAR - 86)) |
                    (1 << (AqlParser.NVARCHAR - 86)) |
                    (1 << (AqlParser.DOUBLE_QUOTE_ID - 86)) |
                    (1 << (AqlParser.SQUARE_BRACKET_ID - 86)) |
                    (1 << (AqlParser.ID - 86)))) !==
                  0)
            ) {
              {
                this.state = 1113;
                _localctx._tablename = this.id();
              }
            }

            this.state = 1116;
            this.match(AqlParser.DOT);
            this.state = 1117;
            _localctx._column_name = this.id();
          }
          break;

        case 4:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 1118;
            _localctx._column_name = this.id();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public column_name_list(): Column_name_listContext {
    let _localctx: Column_name_listContext = new Column_name_listContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 162, AqlParser.RULE_column_name_list);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1121;
        _localctx._id = this.id();
        _localctx._col.push(_localctx._id);
        this.state = 1126;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        while (_la === AqlParser.COMMA) {
          {
            {
              this.state = 1122;
              this.match(AqlParser.COMMA);
              this.state = 1123;
              _localctx._id = this.id();
              _localctx._col.push(_localctx._id);
            }
          }
          this.state = 1128;
          this._errHandler.sync(this);
          _la = this._input.LA(1);
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public null_notnull(): Null_notnullContext {
    let _localctx: Null_notnullContext = new Null_notnullContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 164, AqlParser.RULE_null_notnull);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1130;
        this._errHandler.sync(this);
        _la = this._input.LA(1);
        if (_la === AqlParser.NOT) {
          {
            this.state = 1129;
            this.match(AqlParser.NOT);
          }
        }

        this.state = 1132;
        this.match(AqlParser.NULL);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public scalar_function_name(): Scalar_function_nameContext {
    let _localctx: Scalar_function_nameContext = new Scalar_function_nameContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 166, AqlParser.RULE_scalar_function_name);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1134;
        _la = this._input.LA(1);
        if (!(_la === AqlParser.LEFT || _la === AqlParser.RIGHT)) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }

          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public data_type(): Data_typeContext {
    let _localctx: Data_typeContext = new Data_typeContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 168, AqlParser.RULE_data_type);
    let _la: number;
    try {
      this.state = 1153;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 144, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1136;
            _localctx._scaled = this._input.LT(1);
            _la = this._input.LA(1);
            if (!(_la === AqlParser.VARCHAR || _la === AqlParser.NVARCHAR)) {
              _localctx._scaled = this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
            this.state = 1137;
            this.match(AqlParser.LR_BRACKET);
            this.state = 1138;
            this.match(AqlParser.MAX);
            this.state = 1139;
            this.match(AqlParser.RR_BRACKET);
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1140;
            _localctx._ext_type = this.id();
            this.state = 1141;
            this.match(AqlParser.LR_BRACKET);
            this.state = 1142;
            _localctx._scale = this.match(AqlParser.DECIMAL);
            this.state = 1143;
            this.match(AqlParser.COMMA);
            this.state = 1144;
            _localctx._prec = this.match(AqlParser.DECIMAL);
            this.state = 1145;
            this.match(AqlParser.RR_BRACKET);
          }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 1147;
            _localctx._ext_type = this.id();
            this.state = 1148;
            this.match(AqlParser.LR_BRACKET);
            this.state = 1149;
            _localctx._scale = this.match(AqlParser.DECIMAL);
            this.state = 1150;
            this.match(AqlParser.RR_BRACKET);
          }
          break;

        case 4:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 1152;
            _localctx._unscaled_type = this.id();
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public constant(): ConstantContext {
    let _localctx: ConstantContext = new ConstantContext(this._ctx, this.state);
    this.enterRule(_localctx, 170, AqlParser.RULE_constant);
    let _la: number;
    try {
      this.state = 1170;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 148, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1155;
            this.match(AqlParser.STRING);
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1156;
            this.match(AqlParser.BINARY);
          }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 1158;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === AqlParser.PLUS || _la === AqlParser.MINUS) {
              {
                this.state = 1157;
                this.sign();
              }
            }

            this.state = 1160;
            this.match(AqlParser.DECIMAL);
          }
          break;

        case 4:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 1162;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === AqlParser.PLUS || _la === AqlParser.MINUS) {
              {
                this.state = 1161;
                this.sign();
              }
            }

            this.state = 1164;
            _la = this._input.LA(1);
            if (!(_la === AqlParser.FLOAT || _la === AqlParser.REAL)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
          break;

        case 5:
          this.enterOuterAlt(_localctx, 5);
          {
            this.state = 1166;
            this._errHandler.sync(this);
            _la = this._input.LA(1);
            if (_la === AqlParser.PLUS || _la === AqlParser.MINUS) {
              {
                this.state = 1165;
                this.sign();
              }
            }

            this.state = 1168;
            _localctx._dollar = this.match(AqlParser.DOLLAR);
            this.state = 1169;
            _la = this._input.LA(1);
            if (!(_la === AqlParser.DECIMAL || _la === AqlParser.FLOAT)) {
              this._errHandler.recoverInline(this);
            } else {
              if (this._input.LA(1) === Token.EOF) {
                this.matchedEOF = true;
              }

              this._errHandler.reportMatch(this);
              this.consume();
            }
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public sign(): SignContext {
    let _localctx: SignContext = new SignContext(this._ctx, this.state);
    this.enterRule(_localctx, 172, AqlParser.RULE_sign);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1172;
        _la = this._input.LA(1);
        if (!(_la === AqlParser.PLUS || _la === AqlParser.MINUS)) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }

          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public keyword(): KeywordContext {
    let _localctx: KeywordContext = new KeywordContext(this._ctx, this.state);
    this.enterRule(_localctx, 174, AqlParser.RULE_keyword);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1174;
        _la = this._input.LA(1);
        if (
          !(
            (((_la - 54) & ~0x1f) === 0 &&
              ((1 << (_la - 54)) &
                ((1 << (AqlParser.AFTER - 54)) |
                  (1 << (AqlParser.AGGREGATE - 54)) |
                  (1 << (AqlParser.APPLY - 54)) |
                  (1 << (AqlParser.AVG - 54)) |
                  (1 << (AqlParser.BINARY_KEYWORD - 54)) |
                  (1 << (AqlParser.CATCH - 54)) |
                  (1 << (AqlParser.CONCAT - 54)) |
                  (1 << (AqlParser.COUNT - 54)) |
                  (1 << (AqlParser.DATA - 54)) |
                  (1 << (AqlParser.DATEADD - 54)) |
                  (1 << (AqlParser.DATEDIFF - 54)) |
                  (1 << (AqlParser.DAYS - 54)) |
                  (1 << (AqlParser.EMPTY - 54)) |
                  (1 << (AqlParser.EXIST - 54)) |
                  (1 << (AqlParser.FILTER - 54)) |
                  (1 << (AqlParser.GETDATE - 54)) |
                  (1 << (AqlParser.GETUTCDATE - 54)) |
                  (1 << (AqlParser.GO_BATCH - 54)) |
                  (1 << (AqlParser.GO - 54)) |
                  (1 << (AqlParser.INT - 54)) |
                  (1 << (AqlParser.MAX - 54)) |
                  (1 << (AqlParser.MIN - 54)) |
                  (1 << (AqlParser.NEXT - 54)) |
                  (1 << (AqlParser.ONLY - 54)) |
                  (1 << (AqlParser.QUERY - 54)) |
                  (1 << (AqlParser.ROW - 54)) |
                  (1 << (AqlParser.ROW_NUMBER - 54)) |
                  (1 << (AqlParser.ROWS - 54)) |
                  (1 << (AqlParser.STDEV - 54)) |
                  (1 << (AqlParser.STDEVP - 54)) |
                  (1 << (AqlParser.STRING_AGG - 54)) |
                  (1 << (AqlParser.SUM - 54)))) !==
                0) ||
            (((_la - 86) & ~0x1f) === 0 &&
              ((1 << (_la - 86)) &
                ((1 << (AqlParser.TAKE - 86)) |
                  (1 << (AqlParser.THROW - 86)) |
                  (1 << (AqlParser.TIME - 86)) |
                  (1 << (AqlParser.TRY - 86)) |
                  (1 << (AqlParser.VALUE - 86)) |
                  (1 << (AqlParser.VAR - 86)) |
                  (1 << (AqlParser.VARP - 86)) |
                  (1 << (AqlParser.BEFORE - 86)) |
                  (1 << (AqlParser.ENABLED - 86)) |
                  (1 << (AqlParser.ERROR - 86)) |
                  (1 << (AqlParser.GET - 86)) |
                  (1 << (AqlParser.IIF - 86)) |
                  (1 << (AqlParser.ISNULL - 86)) |
                  (1 << (AqlParser.SPLIT - 86)) |
                  (1 << (AqlParser.START - 86)) |
                  (1 << (AqlParser.STOP - 86)) |
                  (1 << (AqlParser.VARCHAR - 86)) |
                  (1 << (AqlParser.NVARCHAR - 86)))) !==
                0)
          )
        ) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }

          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public id(): IdContext {
    let _localctx: IdContext = new IdContext(this._ctx, this.state);
    this.enterRule(_localctx, 176, AqlParser.RULE_id);
    try {
      this.state = 1180;
      this._errHandler.sync(this);
      switch (this._input.LA(1)) {
        case AqlParser.ID:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1176;
            this.match(AqlParser.ID);
          }
          break;
        case AqlParser.DOUBLE_QUOTE_ID:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1177;
            this.match(AqlParser.DOUBLE_QUOTE_ID);
          }
          break;
        case AqlParser.SQUARE_BRACKET_ID:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 1178;
            this.match(AqlParser.SQUARE_BRACKET_ID);
          }
          break;
        case AqlParser.AFTER:
        case AqlParser.AGGREGATE:
        case AqlParser.APPLY:
        case AqlParser.AVG:
        case AqlParser.BINARY_KEYWORD:
        case AqlParser.CATCH:
        case AqlParser.CONCAT:
        case AqlParser.COUNT:
        case AqlParser.DATA:
        case AqlParser.DATEADD:
        case AqlParser.DATEDIFF:
        case AqlParser.DAYS:
        case AqlParser.EMPTY:
        case AqlParser.EXIST:
        case AqlParser.FILTER:
        case AqlParser.GETDATE:
        case AqlParser.GETUTCDATE:
        case AqlParser.GO_BATCH:
        case AqlParser.GO:
        case AqlParser.INT:
        case AqlParser.MAX:
        case AqlParser.MIN:
        case AqlParser.NEXT:
        case AqlParser.ONLY:
        case AqlParser.QUERY:
        case AqlParser.ROW:
        case AqlParser.ROW_NUMBER:
        case AqlParser.ROWS:
        case AqlParser.STDEV:
        case AqlParser.STDEVP:
        case AqlParser.STRING_AGG:
        case AqlParser.SUM:
        case AqlParser.TAKE:
        case AqlParser.THROW:
        case AqlParser.TIME:
        case AqlParser.TRY:
        case AqlParser.VALUE:
        case AqlParser.VAR:
        case AqlParser.VARP:
        case AqlParser.BEFORE:
        case AqlParser.ENABLED:
        case AqlParser.ERROR:
        case AqlParser.GET:
        case AqlParser.IIF:
        case AqlParser.ISNULL:
        case AqlParser.SPLIT:
        case AqlParser.START:
        case AqlParser.STOP:
        case AqlParser.VARCHAR:
        case AqlParser.NVARCHAR:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 1179;
            this.keyword();
          }
          break;
        default:
          throw new NoViableAltException(this);
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public comparison_operator(): Comparison_operatorContext {
    let _localctx: Comparison_operatorContext = new Comparison_operatorContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 178, AqlParser.RULE_comparison_operator);
    try {
      this.state = 1197;
      this._errHandler.sync(this);
      switch (this.interpreter.adaptivePredict(this._input, 150, this._ctx)) {
        case 1:
          this.enterOuterAlt(_localctx, 1);
          {
            this.state = 1182;
            this.match(AqlParser.EQUAL);
          }
          break;

        case 2:
          this.enterOuterAlt(_localctx, 2);
          {
            this.state = 1183;
            this.match(AqlParser.GREATER);
          }
          break;

        case 3:
          this.enterOuterAlt(_localctx, 3);
          {
            this.state = 1184;
            this.match(AqlParser.LESS);
          }
          break;

        case 4:
          this.enterOuterAlt(_localctx, 4);
          {
            this.state = 1185;
            this.match(AqlParser.LESS);
            this.state = 1186;
            this.match(AqlParser.EQUAL);
          }
          break;

        case 5:
          this.enterOuterAlt(_localctx, 5);
          {
            this.state = 1187;
            this.match(AqlParser.GREATER);
            this.state = 1188;
            this.match(AqlParser.EQUAL);
          }
          break;

        case 6:
          this.enterOuterAlt(_localctx, 6);
          {
            this.state = 1189;
            this.match(AqlParser.LESS);
            this.state = 1190;
            this.match(AqlParser.GREATER);
          }
          break;

        case 7:
          this.enterOuterAlt(_localctx, 7);
          {
            this.state = 1191;
            this.match(AqlParser.EXCLAMATION);
            this.state = 1192;
            this.match(AqlParser.EQUAL);
          }
          break;

        case 8:
          this.enterOuterAlt(_localctx, 8);
          {
            this.state = 1193;
            this.match(AqlParser.EXCLAMATION);
            this.state = 1194;
            this.match(AqlParser.GREATER);
          }
          break;

        case 9:
          this.enterOuterAlt(_localctx, 9);
          {
            this.state = 1195;
            this.match(AqlParser.EXCLAMATION);
            this.state = 1196;
            this.match(AqlParser.LESS);
          }
          break;
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }
  // @RuleVersion(0)
  public assignment_operator(): Assignment_operatorContext {
    let _localctx: Assignment_operatorContext = new Assignment_operatorContext(
      this._ctx,
      this.state
    );
    this.enterRule(_localctx, 180, AqlParser.RULE_assignment_operator);
    let _la: number;
    try {
      this.enterOuterAlt(_localctx, 1);
      {
        this.state = 1199;
        _la = this._input.LA(1);
        if (
          !(
            ((_la - 121) & ~0x1f) === 0 &&
            ((1 << (_la - 121)) &
              ((1 << (AqlParser.PLUS_ASSIGN - 121)) |
                (1 << (AqlParser.MINUS_ASSIGN - 121)) |
                (1 << (AqlParser.MULT_ASSIGN - 121)) |
                (1 << (AqlParser.DIV_ASSIGN - 121)) |
                (1 << (AqlParser.MOD_ASSIGN - 121)) |
                (1 << (AqlParser.AND_ASSIGN - 121)) |
                (1 << (AqlParser.XOR_ASSIGN - 121)) |
                (1 << (AqlParser.OR_ASSIGN - 121)))) !==
              0
          )
        ) {
          this._errHandler.recoverInline(this);
        } else {
          if (this._input.LA(1) === Token.EOF) {
            this.matchedEOF = true;
          }

          this._errHandler.reportMatch(this);
          this.consume();
        }
      }
    } catch (re) {
      if (re instanceof RecognitionException) {
        _localctx.exception = re;
        this._errHandler.reportError(this, re);
        this._errHandler.recover(this, re);
      } else {
        throw re;
      }
    } finally {
      this.exitRule();
    }
    return _localctx;
  }

  public sempred(
    _localctx: RuleContext,
    ruleIndex: number,
    predIndex: number
  ): boolean {
    switch (ruleIndex) {
      case 24:
        return this.expression_sempred(
          _localctx as ExpressionContext,
          predIndex
        );
    }
    return true;
  }
  private expression_sempred(
    _localctx: ExpressionContext,
    predIndex: number
  ): boolean {
    switch (predIndex) {
      case 0:
        return this.precpred(this._ctx, 2);

      case 1:
        return this.precpred(this._ctx, 1);

      case 2:
        return this.precpred(this._ctx, 7);
    }
    return true;
  }

  private static readonly _serializedATNSegments: number = 3;
  private static readonly _serializedATNSegment0: string =
    '\x03\uC91D\uCABA\u058D\uAFBA\u4F53\u0607\uEA8B\uC241\x03\x96\u04B4\x04' +
    '\x02\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04' +
    '\x07\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r' +
    '\x04\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12' +
    '\x04\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x04\x16\t\x16\x04\x17\t\x17' +
    '\x04\x18\t\x18\x04\x19\t\x19\x04\x1A\t\x1A\x04\x1B\t\x1B\x04\x1C\t\x1C' +
    '\x04\x1D\t\x1D\x04\x1E\t\x1E\x04\x1F\t\x1F\x04 \t \x04!\t!\x04"\t"\x04' +
    "#\t#\x04$\t$\x04%\t%\x04&\t&\x04'\t'\x04(\t(\x04)\t)\x04*\t*\x04+\t" +
    '+\x04,\t,\x04-\t-\x04.\t.\x04/\t/\x040\t0\x041\t1\x042\t2\x043\t3\x04' +
    '4\t4\x045\t5\x046\t6\x047\t7\x048\t8\x049\t9\x04:\t:\x04;\t;\x04<\t<\x04' +
    '=\t=\x04>\t>\x04?\t?\x04@\t@\x04A\tA\x04B\tB\x04C\tC\x04D\tD\x04E\tE\x04' +
    'F\tF\x04G\tG\x04H\tH\x04I\tI\x04J\tJ\x04K\tK\x04L\tL\x04M\tM\x04N\tN\x04' +
    'O\tO\x04P\tP\x04Q\tQ\x04R\tR\x04S\tS\x04T\tT\x04U\tU\x04V\tV\x04W\tW\x04' +
    'X\tX\x04Y\tY\x04Z\tZ\x04[\t[\x04\\\t\\\x03\x02\x07\x02\xBA\n\x02\f\x02' +
    '\x0E\x02\xBD\v\x02\x03\x02\x03\x02\x03\x03\x03\x03\x03\x03\x06\x03\xC4' +
    '\n\x03\r\x03\x0E\x03\xC5\x05\x03\xC8\n\x03\x03\x03\x07\x03\xCB\n\x03\f' +
    '\x03\x0E\x03\xCE\v\x03\x03\x03\x05\x03\xD1\n\x03\x03\x04\x03\x04\x05\x04' +
    '\xD5\n\x04\x03\x04\x03\x04\x05\x04\xD9\n\x04\x03\x04\x03\x04\x05\x04\xDD' +
    '\n\x04\x03\x04\x05\x04\xE0\n\x04\x03\x05\x03\x05\x03\x05\x03\x05\x03\x05' +
    '\x03\x05\x03\x05\x03\x05\x03\x05\x05\x05\xEB\n\x05\x03\x06\x03\x06\x05' +
    '\x06\xEF\n\x06\x03\x06\x07\x06\xF2\n\x06\f\x06\x0E\x06\xF5\v\x06\x03\x06' +
    '\x03\x06\x05\x06\xF9\n\x06\x03\x07\x03\x07\x05\x07\xFD\n\x07\x03\b\x03' +
    '\b\x05\b\u0101\n\b\x03\t\x03\t\x03\t\x03\t\x03\t\x05\t\u0108\n\t\x03\t' +
    '\x05\t\u010B\n\t\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x03\n\x05\n\u0114' +
    '\n\n\x03\n\x05\n\u0117\n\n\x03\v\x03\v\x03\f\x03\f\x03\r\x03\r\x03\x0E' +
    '\x03\x0E\x03\x0E\x05\x0E\u0122\n\x0E\x03\x0E\x06\x0E\u0125\n\x0E\r\x0E' +
    '\x0E\x0E\u0126\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u012C\n\x0E\x03\x0E\x03' +
    '\x0E\x03\x0E\x05\x0E\u0131\n\x0E\x03\x0E\x07\x0E\u0134\n\x0E\f\x0E\x0E' +
    '\x0E\u0137\v\x0E\x03\x0E\x03\x0E\x03\x0E\x05\x0E\u013C\n\x0E\x03\x0F\x03' +
    '\x0F\x03\x0F\x03\x0F\x03\x0F\x05\x0F\u0143\n\x0F\x03\x0F\x03\x0F\x05\x0F' +
    '\u0147\n\x0F\x05\x0F\u0149\n\x0F\x03\x10\x03\x10\x03\x10\x05\x10\u014E' +
    '\n\x10\x03\x10\x03\x10\x07\x10\u0152\n\x10\f\x10\x0E\x10\u0155\v\x10\x03' +
    '\x10\x05\x10\u0158\n\x10\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x05\x11' +
    '\u015F\n\x11\x03\x11\x03\x11\x03\x11\x03\x11\x03\x11\x07\x11\u0166\n\x11' +
    '\f\x11\x0E\x11\u0169\v\x11\x05\x11\u016B\n\x11\x03\x12\x03\x12\x03\x13' +
    '\x05\x13\u0170\n\x13\x03\x13\x03\x13\x03\x14\x03\x14\x05\x14\u0176\n\x14' +
    '\x03\x14\x05\x14\u0179\n\x14\x03\x15\x03\x15\x03\x15\x03\x15\x05\x15\u017F' +
    '\n\x15\x03\x15\x03\x15\x03\x15\x05\x15\u0184\n\x15\x03\x15\x03\x15\x03' +
    '\x15\x03\x15\x03\x15\x05\x15\u018B\n\x15\x03\x15\x05\x15\u018E\n\x15\x03' +
    '\x16\x03\x16\x05\x16\u0192\n\x16\x03\x17\x03\x17\x05\x17\u0196\n\x17\x03' +
    '\x18\x03\x18\x03\x18\x03\x18\x05\x18\u019C\n\x18\x03\x18\x05\x18\u019F' +
    '\n\x18\x03\x18\x03\x18\x03\x18\x03\x18\x05\x18\u01A5\n\x18\x05\x18\u01A7' +
    '\n\x18\x03\x19\x03\x19\x05\x19\u01AB\n\x19\x03\x1A\x03\x1A\x03\x1A\x03' +
    '\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A\u01B4\n\x1A\x03\x1A\x03\x1A\x03\x1A' +
    '\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x03\x1A\x05\x1A' +
    '\u01C1\n\x1A\x07\x1A\u01C3\n\x1A\f\x1A\x0E\x1A\u01C6\v\x1A\x03\x1B\x03' +
    '\x1B\x03\x1B\x03\x1B\x05\x1B\u01CC\n\x1B\x03\x1C\x03\x1C\x03\x1C\x06\x1C' +
    '\u01D1\n\x1C\r\x1C\x0E\x1C\u01D2\x03\x1C\x03\x1C\x05\x1C\u01D7\n\x1C\x03' +
    '\x1C\x03\x1C\x03\x1C\x03\x1C\x06\x1C\u01DD\n\x1C\r\x1C\x0E\x1C\u01DE\x03' +
    '\x1C\x03\x1C\x05\x1C\u01E3\n\x1C\x03\x1C\x03\x1C\x05\x1C\u01E7\n\x1C\x03' +
    '\x1D\x03\x1D\x03\x1D\x03\x1D\x05\x1D\u01ED\n\x1D\x03\x1E\x03\x1E\x03\x1E' +
    '\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x03\x1E\x05\x1E\u01F7\n\x1E\x03\x1F\x03' +
    '\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x03\x1F\x05\x1F\u0201\n\x1F' +
    '\x03 \x03 \x03!\x03!\x03!\x03!\x07!\u0209\n!\f!\x0E!\u020C\v!\x03"\x03' +
    '"\x03"\x03"\x03"\x05"\u0213\n"\x03"\x03"\x03"\x03"\x03"\x03' +
    '#\x03#\x03#\x07#\u021D\n#\f#\x0E#\u0220\v#\x03$\x07$\u0223\n$\f$\x0E$' +
    '\u0226\v$\x03$\x03$\x07$\u022A\n$\f$\x0E$\u022D\v$\x03$\x03$\x03$\x03' +
    '$\x05$\u0233\n$\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03%\x03' +
    '%\x03%\x07%\u0241\n%\f%\x0E%\u0244\v%\x03%\x03%\x03%\x03%\x05%\u024A\n' +
    '%\x03%\x03%\x03%\x03%\x03%\x03%\x05%\u0252\n%\x03&\x03&\x03&\x03&\x03' +
    "&\x05&\u0259\n&\x03&\x03&\x05&\u025D\n&\x05&\u025F\n&\x03'\x03'\x05" +
    "'\u0263\n'\x03'\x05'\u0266\n'\x03'\x03'\x03'\x05'\u026B\n'\x03" +
    "'\x03'\x05'\u026F\n'\x03'\x03'\x05'\u0273\n'\x03'\x03'\x03'" +
    "\x03'\x03'\x07'\u027A\n'\f'\x0E'\u027D\v'\x05'\u027F\n'\x03'" +
    "\x03'\x05'\u0283\n'\x03(\x03(\x03(\x05(\u0288\n(\x03)\x03)\x03)\x03" +
    ')\x03)\x03)\x03)\x05)\u0291\n)\x03*\x03*\x03*\x03*\x03*\x05*\u0298\n*' +
    '\x03+\x03+\x03+\x03+\x03+\x07+\u029F\n+\f+\x0E+\u02A2\v+\x03,\x03,\x03' +
    ',\x05,\u02A7\n,\x03-\x03-\x03.\x03.\x03.\x07.\u02AE\n.\f.\x0E.\u02B1\v' +
    '.\x03/\x03/\x03/\x05/\u02B6\n/\x03/\x03/\x030\x030\x050\u02BC\n0\x030' +
    '\x050\u02BF\n0\x031\x031\x031\x031\x031\x031\x051\u02C7\n1\x051\u02C9' +
    '\n1\x032\x032\x032\x032\x032\x052\u02D0\n2\x032\x032\x052\u02D4\n2\x03' +
    '3\x033\x033\x073\u02D9\n3\f3\x0E3\u02DC\v3\x034\x034\x034\x034\x034\x05' +
    '4\u02E3\n4\x035\x035\x075\u02E7\n5\f5\x0E5\u02EA\v5\x036\x036\x056\u02EE' +
    '\n6\x036\x036\x056\u02F2\n6\x036\x036\x036\x036\x036\x056\u02F9\n6\x05' +
    '6\u02FB\n6\x036\x036\x036\x056\u0300\n6\x056\u0302\n6\x036\x036\x056\u0306' +
    '\n6\x036\x036\x036\x036\x036\x056\u030D\n6\x056\u030F\n6\x036\x036\x03' +
    '6\x036\x056\u0315\n6\x056\u0317\n6\x037\x037\x037\x057\u031C\n7\x038\x05' +
    '8\u031F\n8\x038\x038\x058\u0323\n8\x058\u0325\n8\x038\x038\x038\x038\x03' +
    '8\x039\x039\x039\x039\x03:\x03:\x03:\x03:\x03;\x03;\x03;\x03;\x03;\x03' +
    ';\x03;\x03;\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03<\x03=\x03' +
    '=\x03=\x07=\u0349\n=\f=\x0E=\u034C\v=\x03>\x03>\x03?\x03?\x03?\x03?\x03' +
    '?\x05?\u0355\n?\x03@\x03@\x03@\x03@\x05@\u035B\n@\x03@\x03@\x03@\x05@' +
    '\u0360\n@\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x07A\u0369\nA\fA\x0EA\u036C' +
    '\vA\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x03A\x05A\u0377\nA\x03A\x03' +
    'A\x03A\x03A\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x05B\u0384\nB\x03B\x03' +
    'B\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x03' +
    'B\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x03' +
    'B\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x03' +
    'B\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x03B\x03' +
    'B\x03B\x03B\x03B\x05B\u03C3\nB\x03C\x03C\x03C\x03C\x03C\x03C\x03C\x03' +
    'D\x03D\x03D\x03D\x03D\x03E\x03E\x03E\x03E\x03E\x03F\x03F\x03F\x03F\x03' +
    'F\x03G\x03G\x03G\x03G\x03G\x03H\x05H\u03E1\nH\x03H\x03H\x03I\x05I\u03E6' +
    '\nI\x03I\x03I\x03J\x03J\x03K\x03K\x03K\x03K\x07K\u03F0\nK\fK\x0EK\u03F3' +
    '\vK\x03K\x03K\x03L\x03L\x05L\u03F9\nL\x03M\x03M\x03M\x07M\u03FE\nM\fM' +
    '\x0EM\u0401\vM\x03N\x03N\x03N\x03N\x03N\x03N\x03N\x03N\x03N\x05N\u040C' +
    '\nN\x03N\x05N\u040F\nN\x03O\x05O\u0412\nO\x03O\x03O\x03P\x03P\x03P\x03' +
    'P\x03P\x03P\x03P\x03P\x03P\x03P\x05P\u0420\nP\x03P\x03P\x03P\x03P\x03' +
    'P\x05P\u0427\nP\x03P\x03P\x03Q\x03Q\x03Q\x05Q\u042E\nQ\x03Q\x03Q\x03Q' +
    '\x03Q\x03Q\x05Q\u0435\nQ\x03Q\x03Q\x03Q\x03Q\x05Q\u043B\nQ\x03Q\x03Q\x03' +
    'Q\x03Q\x03Q\x05Q\u0442\nQ\x05Q\u0444\nQ\x03R\x05R\u0447\nR\x03R\x03R\x05' +
    'R\u044B\nR\x03R\x03R\x05R\u044F\nR\x03R\x03R\x03R\x05R\u0454\nR\x03R\x03' +
    'R\x05R\u0458\nR\x03R\x03R\x03R\x05R\u045D\nR\x03R\x03R\x03R\x05R\u0462' +
    '\nR\x03S\x03S\x03S\x07S\u0467\nS\fS\x0ES\u046A\vS\x03T\x05T\u046D\nT\x03' +
    'T\x03T\x03U\x03U\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03V\x03' +
    'V\x03V\x03V\x03V\x03V\x03V\x03V\x05V\u0484\nV\x03W\x03W\x03W\x05W\u0489' +
    '\nW\x03W\x03W\x05W\u048D\nW\x03W\x03W\x05W\u0491\nW\x03W\x03W\x05W\u0495' +
    '\nW\x03X\x03X\x03Y\x03Y\x03Z\x03Z\x03Z\x03Z\x05Z\u049F\nZ\x03[\x03[\x03' +
    '[\x03[\x03[\x03[\x03[\x03[\x03[\x03[\x03[\x03[\x03[\x03[\x03[\x05[\u04B0' +
    '\n[\x03\\\x03\\\x03\\\x02\x02\x032]\x02\x02\x04\x02\x06\x02\b\x02\n\x02' +
    '\f\x02\x0E\x02\x10\x02\x12\x02\x14\x02\x16\x02\x18\x02\x1A\x02\x1C\x02' +
    '\x1E\x02 \x02"\x02$\x02&\x02(\x02*\x02,\x02.\x020\x022\x024\x026\x02' +
    '8\x02:\x02<\x02>\x02@\x02B\x02D\x02F\x02H\x02J\x02L\x02N\x02P\x02R\x02' +
    'T\x02V\x02X\x02Z\x02\\\x02^\x02`\x02b\x02d\x02f\x02h\x02j\x02l\x02n\x02' +
    'p\x02r\x02t\x02v\x02x\x02z\x02|\x02~\x02\x80\x02\x82\x02\x84\x02\x86\x02' +
    '\x88\x02\x8A\x02\x8C\x02\x8E\x02\x90\x02\x92\x02\x94\x02\x96\x02\x98\x02' +
    '\x9A\x02\x9C\x02\x9E\x02\xA0\x02\xA2\x02\xA4\x02\xA6\x02\xA8\x02\xAA\x02' +
    '\xAC\x02\xAE\x02\xB0\x02\xB2\x02\xB4\x02\xB6\x02\x02\x11\x03\x02pq\x04' +
    '\x02ppss\x04\x02pqss\x05\x02mmppss\x03\x02\x8E\x90\x05\x02\x83\x83\x91' +
    '\x92\x94\x96\x03\x02\x91\x92\x04\x02\x03\x03&&\x04\x02  --\x07\x02;;L' +
    'MTUWW]^\x03\x02hi\x03\x02uv\x04\x02qquu\x03\x028i\x03\x02{\x82\x02\u0530' +
    '\x02\xBB\x03\x02\x02\x02\x04\xD0\x03\x02\x02\x02\x06\xDF\x03\x02\x02\x02' +
    '\b\xEA\x03\x02\x02\x02\n\xEC\x03\x02\x02\x02\f\xFA\x03\x02\x02\x02\x0E' +
    '\xFE\x03\x02\x02\x02\x10\u0102\x03\x02\x02\x02\x12\u010C\x03\x02\x02\x02' +
    '\x14\u0118\x03\x02\x02\x02\x16\u011A\x03\x02\x02\x02\x18\u011C\x03\x02' +
    '\x02\x02\x1A\u011E\x03\x02\x02\x02\x1C\u013D\x03\x02\x02\x02\x1E\u014A' +
    '\x03\x02\x02\x02 \u016A\x03\x02\x02\x02"\u016C\x03\x02\x02\x02$\u016F' +
    '\x03\x02\x02\x02&\u0173\x03\x02\x02\x02(\u018D\x03\x02\x02\x02*\u018F' +
    '\x03\x02\x02\x02,\u0193\x03\x02\x02\x02.\u01A6\x03\x02\x02\x020\u01AA' +
    '\x03\x02\x02\x022\u01B3\x03\x02\x02\x024\u01CB\x03\x02\x02\x026\u01E6' +
    '\x03\x02\x02\x028\u01EC\x03\x02\x02\x02:\u01F6\x03\x02\x02\x02<\u0200' +
    '\x03\x02\x02\x02>\u0202\x03\x02\x02\x02@\u0204\x03\x02\x02\x02B\u020D' +
    '\x03\x02\x02\x02D\u0219\x03\x02\x02\x02F\u0232\x03\x02\x02\x02H\u0251' +
    '\x03\x02\x02\x02J\u025E\x03\x02\x02\x02L\u0260\x03\x02\x02\x02N\u0284' +
    '\x03\x02\x02\x02P\u0290\x03\x02\x02\x02R\u0297\x03\x02\x02\x02T\u0299' +
    '\x03\x02\x02\x02V\u02A3\x03\x02\x02\x02X\u02A8\x03\x02\x02\x02Z\u02AA' +
    '\x03\x02\x02\x02\\\u02B5\x03\x02\x02\x02^\u02BB\x03\x02\x02\x02`\u02C8' +
    '\x03\x02\x02\x02b\u02D3\x03\x02\x02\x02d\u02D5\x03\x02\x02\x02f\u02E2' +
    '\x03\x02\x02\x02h\u02E4\x03\x02\x02\x02j\u0316\x03\x02\x02\x02l\u031B' +
    '\x03\x02\x02\x02n\u0324\x03\x02\x02\x02p\u032B\x03\x02\x02\x02r\u032F' +
    '\x03\x02\x02\x02t\u0333\x03\x02\x02\x02v\u033B\x03\x02\x02\x02x\u0345' +
    '\x03\x02\x02\x02z\u034D\x03\x02\x02\x02|\u0354\x03\x02\x02\x02~\u035F' +
    '\x03\x02\x02\x02\x80\u0361\x03\x02\x02\x02\x82\u03C2\x03\x02\x02\x02\x84' +
    '\u03C4\x03\x02\x02\x02\x86\u03CB\x03\x02\x02\x02\x88\u03D0\x03\x02\x02' +
    '\x02\x8A\u03D5\x03\x02\x02\x02\x8C\u03DA\x03\x02\x02\x02\x8E\u03E0\x03' +
    '\x02\x02\x02\x90\u03E5\x03\x02\x02\x02\x92\u03E9\x03\x02\x02\x02\x94\u03EB' +
    '\x03\x02\x02\x02\x96\u03F8\x03\x02\x02\x02\x98\u03FA\x03\x02\x02\x02\x9A' +
    '\u040E\x03\x02\x02\x02\x9C\u0411\x03\x02\x02\x02\x9E\u0426\x03\x02\x02' +
    '\x02\xA0\u0443\x03\x02\x02\x02\xA2\u0461\x03\x02\x02\x02\xA4\u0463\x03' +
    '\x02\x02\x02\xA6\u046C\x03\x02\x02\x02\xA8\u0470\x03\x02\x02\x02\xAA\u0483' +
    '\x03\x02\x02\x02\xAC\u0494\x03\x02\x02\x02\xAE\u0496\x03\x02\x02\x02\xB0' +
    '\u0498\x03\x02\x02\x02\xB2\u049E\x03\x02\x02\x02\xB4\u04AF\x03\x02\x02' +
    '\x02\xB6\u04B1\x03\x02\x02\x02\xB8\xBA\x05\x04\x03\x02\xB9\xB8\x03\x02' +
    '\x02\x02\xBA\xBD\x03\x02\x02\x02\xBB\xB9\x03\x02\x02\x02\xBB\xBC\x03\x02' +
    '\x02\x02\xBC\xBE\x03\x02\x02\x02\xBD\xBB\x03\x02\x02\x02\xBE\xBF\x07\x02' +
    '\x02\x03\xBF\x03\x03\x02\x02\x02\xC0\xD1\x05*\x16\x02\xC1\xC8\x05*\x16' +
    '\x02\xC2\xC4\x05\x06\x04\x02\xC3\xC2\x03\x02\x02\x02\xC4\xC5\x03\x02\x02' +
    '\x02\xC5\xC3\x03\x02\x02\x02\xC5\xC6\x03\x02\x02\x02\xC6\xC8\x03\x02\x02' +
    '\x02\xC7\xC1\x03\x02\x02\x02\xC7\xC3\x03\x02\x02\x02\xC8\xCC\x03\x02\x02' +
    '\x02\xC9\xCB\x05,\x17\x02\xCA\xC9\x03\x02\x02\x02\xCB\xCE\x03\x02\x02' +
    '\x02\xCC\xCA\x03\x02\x02\x02\xCC\xCD\x03\x02\x02\x02\xCD\xD1\x03\x02\x02' +
    '\x02\xCE\xCC\x03\x02\x02\x02\xCF\xD1\x05,\x17\x02\xD0\xC0\x03\x02\x02' +
    '\x02\xD0\xC7\x03\x02\x02\x02\xD0\xCF\x03\x02\x02\x02\xD1\x05\x03\x02\x02' +
    '\x02\xD2\xD4\x05$\x13\x02\xD3\xD5\x07\x8C\x02\x02\xD4\xD3\x03\x02\x02' +
    '\x02\xD4\xD5\x03\x02\x02\x02\xD5\xE0\x03\x02\x02\x02\xD6\xD8\x05\b\x05' +
    '\x02\xD7\xD9\x07\x8C\x02\x02\xD8\xD7\x03\x02\x02\x02\xD8\xD9\x03\x02\x02' +
    '\x02\xD9\xE0\x03\x02\x02\x02\xDA\xDC\x05"\x12\x02\xDB\xDD\x07\x8C\x02' +
    '\x02\xDC\xDB\x03\x02\x02\x02\xDC\xDD\x03\x02\x02\x02\xDD\xE0\x03\x02\x02' +
    '\x02\xDE\xE0\x07\x8C\x02\x02\xDF\xD2\x03\x02\x02\x02\xDF\xD6\x03\x02\x02' +
    '\x02\xDF\xDA\x03\x02\x02\x02\xDF\xDE\x03\x02\x02\x02\xE0\x07\x03\x02\x02' +
    '\x02\xE1\xEB\x05\n\x06\x02\xE2\xEB\x05\f\x07\x02\xE3\xEB\x05\x0E\b\x02' +
    '\xE4\xEB\x05\x10\t\x02\xE5\xEB\x05\x12\n\x02\xE6\xEB\x05\x1A\x0E\x02\xE7' +
    '\xEB\x05\x1C\x0F\x02\xE8\xEB\x05\x1E\x10\x02\xE9\xEB\x05 \x11\x02\xEA' +
    '\xE1\x03\x02\x02\x02\xEA\xE2\x03\x02\x02\x02\xEA\xE3\x03\x02\x02\x02\xEA' +
    '\xE4\x03\x02\x02\x02\xEA\xE5\x03\x02\x02\x02\xEA\xE6\x03\x02\x02\x02\xEA' +
    '\xE7\x03\x02\x02\x02\xEA\xE8\x03\x02\x02\x02\xEA\xE9\x03\x02\x02\x02\xEB' +
    '\t\x03\x02\x02\x02\xEC\xEE\x07\x06\x02\x02\xED\xEF\x07\x8C\x02\x02\xEE' +
    '\xED\x03\x02\x02\x02\xEE\xEF\x03\x02\x02\x02\xEF\xF3\x03\x02\x02\x02\xF0' +
    '\xF2\x05\x06\x04\x02\xF1\xF0\x03\x02\x02\x02\xF2\xF5\x03\x02\x02\x02\xF3' +
    '\xF1\x03\x02\x02\x02\xF3\xF4\x03\x02\x02\x02\xF4\xF6\x03\x02\x02\x02\xF5' +
    '\xF3\x03\x02\x02\x02\xF6\xF8\x07\x14\x02\x02\xF7\xF9\x07\x8C\x02\x02\xF8' +
    '\xF7\x03\x02\x02\x02\xF8\xF9\x03\x02\x02\x02\xF9\v\x03\x02\x02\x02\xFA' +
    '\xFC\x07\x07\x02\x02\xFB\xFD\x07\x8C\x02\x02\xFC\xFB\x03\x02\x02\x02\xFC' +
    '\xFD\x03\x02\x02\x02\xFD\r\x03\x02\x02\x02\xFE\u0100\x07\f\x02\x02\xFF' +
    '\u0101\x07\x8C\x02\x02\u0100\xFF\x03\x02\x02\x02\u0100\u0101\x03\x02\x02' +
    '\x02\u0101\x0F\x03\x02\x02\x02\u0102\u0103\x07\x1A\x02\x02\u0103\u0104' +
    '\x05D#\x02\u0104\u0107\x05\x06\x04\x02\u0105\u0106\x07\x13\x02\x02\u0106' +
    '\u0108\x05\x06\x04\x02\u0107\u0105\x03\x02\x02\x02\u0107\u0108\x03\x02' +
    '\x02\x02\u0108\u010A\x03\x02\x02\x02\u0109\u010B\x07\x8C\x02\x02\u010A' +
    '\u0109\x03\x02\x02\x02\u010A\u010B\x03\x02\x02\x02\u010B\x11\x03\x02\x02' +
    '\x02\u010C\u0113\x07Y\x02\x02\u010D\u010E\x05\x14\v\x02\u010E\u010F\x07' +
    '\x8B\x02\x02\u010F\u0110\x05\x16\f\x02\u0110\u0111\x07\x8B\x02\x02\u0111' +
    '\u0112\x05\x18\r\x02\u0112\u0114\x03\x02\x02\x02\u0113\u010D\x03\x02\x02' +
    '\x02\u0113\u0114\x03\x02\x02\x02\u0114\u0116\x03\x02\x02\x02\u0115\u0117' +
    '\x07\x8C\x02\x02\u0116\u0115\x03\x02\x02\x02\u0116\u0117\x03\x02\x02\x02' +
    '\u0117\x13\x03\x02\x02\x02\u0118\u0119\t\x02\x02\x02\u0119\x15\x03\x02' +
    '\x02\x02\u011A\u011B\t\x03\x02\x02\u011B\x17\x03\x02\x02\x02\u011C\u011D' +
    '\t\x02\x02\x02\u011D\x19\x03\x02\x02\x02\u011E\u011F\x07\x06\x02\x02\u011F' +
    '\u0121\x07[\x02\x02\u0120\u0122\x07\x8C\x02\x02\u0121\u0120\x03\x02\x02' +
    '\x02\u0121\u0122\x03\x02\x02\x02\u0122\u0124\x03\x02\x02\x02\u0123\u0125' +
    '\x05\x06\x04\x02\u0124\u0123\x03\x02\x02\x02\u0125\u0126\x03\x02\x02\x02' +
    '\u0126\u0124\x03\x02\x02\x02\u0126\u0127\x03\x02\x02\x02\u0127\u0128\x03' +
    '\x02\x02\x02\u0128\u0129\x07\x14\x02\x02\u0129\u012B\x07[\x02\x02\u012A' +
    '\u012C\x07\x8C\x02\x02\u012B\u012A\x03\x02\x02\x02\u012B\u012C\x03\x02' +
    '\x02\x02\u012C\u012D\x03\x02\x02\x02\u012D\u012E\x07\x06\x02\x02\u012E' +
    '\u0130\x07=\x02\x02\u012F\u0131\x07\x8C\x02\x02\u0130\u012F\x03\x02\x02' +
    '\x02\u0130\u0131\x03\x02\x02\x02\u0131\u0135\x03\x02\x02\x02\u0132\u0134' +
    '\x05\x06\x04\x02\u0133\u0132\x03\x02\x02\x02\u0134\u0137\x03\x02\x02\x02' +
    '\u0135\u0133\x03\x02\x02\x02\u0135\u0136\x03\x02\x02\x02\u0136\u0138\x03' +
    '\x02\x02\x02\u0137\u0135\x03\x02\x02\x02\u0138\u0139\x07\x14\x02\x02\u0139' +
    '\u013B\x07=\x02\x02\u013A\u013C\x07\x8C\x02\x02\u013B\u013A\x03\x02\x02' +
    '\x02\u013B\u013C\x03\x02\x02\x02\u013C\x1B\x03\x02\x02\x02\u013D\u013E' +
    '\x076\x02\x02\u013E\u0148\x05D#\x02\u013F\u0149\x05\x06\x04\x02\u0140' +
    '\u0142\x07\x07\x02\x02\u0141\u0143\x07\x8C\x02\x02\u0142\u0141\x03\x02' +
    '\x02\x02\u0142\u0143\x03\x02\x02\x02\u0143\u0149\x03\x02\x02\x02\u0144' +
    '\u0146\x07\f\x02\x02\u0145\u0147\x07\x8C\x02\x02\u0146\u0145\x03\x02\x02' +
    '\x02\u0146\u0147\x03\x02\x02\x02\u0147\u0149\x03\x02\x02\x02\u0148\u013F' +
    '\x03\x02\x02\x02\u0148\u0140\x03\x02\x02\x02\u0148\u0144\x03\x02\x02\x02' +
    '\u0149\x1D\x03\x02\x02\x02\u014A\u014D\x07+\x02\x02\u014B\u014E\x052\x1A' +
    '\x02\u014C\u014E\x07m\x02\x02\u014D\u014B\x03\x02\x02\x02\u014D\u014C' +
    '\x03\x02\x02\x02\u014E\u0153\x03\x02\x02\x02\u014F\u0150\x07\x8B\x02\x02' +
    '\u0150\u0152\x07p\x02\x02\u0151\u014F\x03\x02\x02\x02\u0152\u0155\x03' +
    '\x02\x02\x02\u0153\u0151\x03\x02\x02\x02\u0153\u0154\x03\x02\x02\x02\u0154' +
    '\u0157\x03\x02\x02\x02\u0155\u0153\x03\x02\x02\x02\u0156\u0158\x07\x8C' +
    '\x02\x02\u0157\u0156\x03\x02\x02\x02\u0157\u0158\x03\x02\x02\x02\u0158' +
    '\x1F\x03\x02\x02\x02\u0159\u015A\x07,\x02\x02\u015A\u015B\x07\x89\x02' +
    '\x02\u015B\u015C\t\x04\x02\x02\u015C\u015E\x07\x8A\x02\x02\u015D\u015F' +
    '\x07\x8C\x02\x02\u015E\u015D\x03\x02\x02\x02\u015E\u015F\x03\x02\x02\x02' +
    '\u015F\u016B\x03\x02\x02\x02\u0160\u0161\x07,\x02\x02\u0161\u0162\x07' +
    'q\x02\x02\u0162\u0167\t\x05\x02\x02\u0163\u0164\x07\x8B\x02\x02\u0164' +
    '\u0166\t\x04\x02\x02\u0165\u0163\x03\x02\x02\x02\u0166\u0169\x03\x02\x02' +
    '\x02\u0167\u0165\x03\x02\x02\x02\u0167\u0168\x03\x02\x02\x02\u0168\u016B' +
    '\x03\x02\x02\x02\u0169\u0167\x03\x02\x02\x02\u016A\u0159\x03\x02\x02\x02' +
    '\u016A\u0160\x03\x02\x02\x02\u016B!\x03\x02\x02\x02\u016C\u016D\x05(\x15' +
    '\x02\u016D#\x03\x02\x02\x02\u016E\u0170\x05@!\x02\u016F\u016E\x03\x02' +
    '\x02\x02\u016F\u0170\x03\x02\x02\x02\u0170\u0171\x03\x02\x02\x02\u0171' +
    '\u0172\x05&\x14\x02\u0172%\x03\x02\x02\x02\u0173\u0175\x05J&\x02\u0174' +
    '\u0176\x05T+\x02\u0175\u0174\x03\x02\x02\x02\u0175\u0176\x03\x02\x02\x02' +
    '\u0176\u0178\x03\x02\x02\x02\u0177\u0179\x07\x8C\x02\x02\u0178\u0177\x03' +
    "\x02\x02\x02\u0178\u0179\x03\x02\x02\x02\u0179'\x03\x02\x02\x02\u017A" +
    '\u017B\x070\x02\x02\u017B\u017E\x07p\x02\x02\u017C\u017D\x07\x84\x02\x02' +
    '\u017D\u017F\x05\xB2Z\x02\u017E\u017C\x03\x02\x02\x02\u017E\u017F\x03' +
    '\x02\x02\x02\u017F\u0180\x03\x02\x02\x02\u0180\u0181\x07w\x02\x02\u0181' +
    '\u0183\x052\x1A\x02\u0182\u0184\x07\x8C\x02\x02\u0183\u0182\x03\x02\x02' +
    '\x02\u0183\u0184\x03\x02\x02\x02\u0184\u018E\x03\x02\x02\x02\u0185\u0186' +
    '\x070\x02\x02\u0186\u0187\x07p\x02\x02\u0187\u0188\x05\xB6\\\x02\u0188' +
    '\u018A\x052\x1A\x02\u0189\u018B\x07\x8C\x02\x02\u018A\u0189\x03\x02\x02' +
    '\x02\u018A\u018B\x03\x02\x02\x02\u018B\u018E\x03\x02\x02\x02\u018C\u018E' +
    '\x05.\x18\x02\u018D';
  private static readonly _serializedATNSegment1: string =
    '\u017A\x03\x02\x02\x02\u018D\u0185\x03\x02\x02\x02\u018D\u018C\x03\x02' +
    '\x02\x02\u018E)\x03\x02\x02\x02\u018F\u0191\x07I\x02\x02\u0190\u0192\x07' +
    'q\x02\x02\u0191\u0190\x03\x02\x02\x02\u0191\u0192\x03\x02\x02\x02\u0192' +
    '+\x03\x02\x02\x02\u0193\u0195\x07J\x02\x02\u0194\u0196\x07q\x02\x02\u0195' +
    '\u0194\x03\x02\x02\x02\u0195\u0196\x03\x02\x02\x02\u0196-\x03\x02\x02' +
    '\x02\u0197\u0198\x070\x02\x02\u0198\u019B\x05\xB2Z\x02\u0199\u019C\x05' +
    '\xB2Z\x02\u019A\u019C\x050\x19\x02\u019B\u0199\x03\x02\x02\x02\u019B\u019A' +
    '\x03\x02\x02\x02\u019C\u019E\x03\x02\x02\x02\u019D\u019F\x07\x8C\x02\x02' +
    '\u019E\u019D\x03\x02\x02\x02\u019E\u019F\x03\x02\x02\x02\u019F\u01A7\x03' +
    '\x02\x02\x02\u01A0\u01A1\x070\x02\x02\u01A1\u01A2\x07.\x02\x02\u01A2\u01A4' +
    '\t\x02\x02\x02\u01A3\u01A5\x07\x8C\x02\x02\u01A4\u01A3\x03\x02\x02\x02' +
    '\u01A4\u01A5\x03\x02\x02\x02\u01A5\u01A7\x03\x02\x02\x02\u01A6\u0197\x03' +
    '\x02\x02\x02\u01A6\u01A0\x03\x02\x02\x02\u01A7/\x03\x02\x02\x02\u01A8' +
    '\u01AB\x05\xACW\x02\u01A9\u01AB\x07p\x02\x02\u01AA\u01A8\x03\x02\x02\x02' +
    '\u01AA\u01A9\x03\x02\x02\x02\u01AB1\x03\x02\x02\x02\u01AC\u01AD\b\x1A' +
    '\x01\x02\u01AD\u01B4\x054\x1B\x02\u01AE\u01B4\x05~@\x02\u01AF\u01B4\x05' +
    '6\x1C\x02\u01B0\u01B4\x05\xA2R\x02\u01B1\u01B4\x05:\x1E\x02\u01B2\u01B4' +
    '\x058\x1D\x02\u01B3\u01AC\x03\x02\x02\x02\u01B3\u01AE\x03\x02\x02\x02' +
    '\u01B3\u01AF\x03\x02\x02\x02\u01B3\u01B0\x03\x02\x02\x02\u01B3\u01B1\x03' +
    '\x02\x02\x02\u01B3\u01B2\x03\x02\x02\x02\u01B4\u01C4\x03\x02\x02\x02\u01B5' +
    '\u01B6\f\x04\x02\x02\u01B6\u01B7\t\x06\x02\x02\u01B7\u01C3\x052\x1A\x05' +
    '\u01B8\u01B9\f\x03\x02\x02\u01B9\u01BA\t\x07\x02\x02\u01BA\u01C3\x052' +
    '\x1A\x04\u01BB\u01BC\f\t\x02\x02\u01BC\u01C0\x07\x84\x02\x02\u01BD\u01C1' +
    '\x05\x84C\x02\u01BE\u01C1\x05\x86D\x02\u01BF\u01C1\x05\x88E\x02\u01C0' +
    '\u01BD\x03\x02\x02\x02\u01C0\u01BE\x03\x02\x02\x02\u01C0\u01BF\x03\x02' +
    '\x02\x02\u01C1\u01C3\x03\x02\x02\x02\u01C2\u01B5\x03\x02\x02\x02\u01C2' +
    '\u01B8\x03\x02\x02\x02\u01C2\u01BB\x03\x02\x02\x02\u01C3\u01C6\x03\x02' +
    '\x02\x02\u01C4\u01C2\x03\x02\x02\x02\u01C4\u01C5\x03\x02\x02\x02\u01C5' +
    '3\x03\x02\x02\x02\u01C6\u01C4\x03\x02\x02\x02\u01C7\u01CC\x07\x0F\x02' +
    '\x02\u01C8\u01CC\x07#\x02\x02\u01C9\u01CC\x07p\x02\x02\u01CA\u01CC\x05' +
    '\xACW\x02\u01CB\u01C7\x03\x02\x02\x02\u01CB\u01C8\x03\x02\x02\x02\u01CB' +
    '\u01C9\x03\x02\x02\x02\u01CB\u01CA\x03\x02\x02\x02\u01CC5\x03\x02\x02' +
    '\x02\u01CD\u01CE\x07\t\x02\x02\u01CE\u01D0\x052\x1A\x02\u01CF\u01D1\x05' +
    '\x8AF\x02\u01D0\u01CF\x03\x02\x02\x02\u01D1\u01D2\x03\x02\x02\x02\u01D2' +
    '\u01D0\x03\x02\x02\x02\u01D2\u01D3\x03\x02\x02\x02\u01D3\u01D6\x03\x02' +
    '\x02\x02\u01D4\u01D5\x07\x13\x02\x02\u01D5\u01D7\x052\x1A\x02\u01D6\u01D4' +
    '\x03\x02\x02\x02\u01D6\u01D7\x03\x02\x02\x02\u01D7\u01D8\x03\x02\x02\x02' +
    '\u01D8\u01D9\x07\x14\x02\x02\u01D9\u01E7\x03\x02\x02\x02\u01DA\u01DC\x07' +
    '\t\x02\x02\u01DB\u01DD\x05\x8CG\x02\u01DC\u01DB\x03\x02\x02\x02\u01DD' +
    '\u01DE\x03\x02\x02\x02\u01DE\u01DC\x03\x02\x02\x02\u01DE\u01DF\x03\x02' +
    '\x02\x02\u01DF\u01E2\x03\x02\x02\x02\u01E0\u01E1\x07\x13\x02\x02\u01E1' +
    '\u01E3\x052\x1A\x02\u01E2\u01E0\x03\x02\x02\x02\u01E2\u01E3\x03\x02\x02' +
    '\x02\u01E3\u01E4\x03\x02\x02\x02\u01E4\u01E5\x07\x14\x02\x02\u01E5\u01E7' +
    '\x03\x02\x02\x02\u01E6\u01CD\x03\x02\x02\x02\u01E6\u01DA\x03\x02\x02\x02' +
    '\u01E77\x03\x02\x02\x02\u01E8\u01E9\x07\x93\x02\x02\u01E9\u01ED\x052\x1A' +
    '\x02\u01EA\u01EB\t\b\x02\x02\u01EB\u01ED\x052\x1A\x02\u01EC\u01E8\x03' +
    '\x02\x02\x02\u01EC\u01EA\x03\x02\x02\x02\u01ED9\x03\x02\x02\x02\u01EE' +
    '\u01EF\x07\x89\x02\x02\u01EF\u01F0\x052\x1A\x02\u01F0\u01F1\x07\x8A\x02' +
    '\x02\u01F1\u01F7\x03\x02\x02\x02\u01F2\u01F3\x07\x89\x02\x02\u01F3\u01F4' +
    '\x05> \x02\u01F4\u01F5\x07\x8A\x02\x02\u01F5\u01F7\x03\x02\x02\x02\u01F6' +
    '\u01EE\x03\x02\x02\x02\u01F6\u01F2\x03\x02\x02\x02\u01F7;\x03\x02\x02' +
    '\x02\u01F8\u0201\x07#\x02\x02\u01F9\u0201\x05\xACW\x02\u01FA\u0201\x05' +
    '~@\x02\u01FB\u0201\x07p\x02\x02\u01FC\u01FD\x07\x89\x02\x02\u01FD\u01FE' +
    '\x05<\x1F\x02\u01FE\u01FF\x07\x8A\x02\x02\u01FF\u0201\x03\x02\x02\x02' +
    '\u0200\u01F8\x03\x02\x02\x02\u0200\u01F9\x03\x02\x02\x02\u0200\u01FA\x03' +
    '\x02\x02\x02\u0200\u01FB\x03\x02\x02\x02\u0200\u01FC\x03\x02\x02\x02\u0201' +
    '=\x03\x02\x02\x02\u0202\u0203\x05&\x14\x02\u0203?\x03\x02\x02\x02\u0204' +
    '\u0205\x077\x02\x02\u0205\u020A\x05B"\x02\u0206\u0207\x07\x8B\x02\x02' +
    '\u0207\u0209\x05B"\x02\u0208\u0206\x03\x02\x02\x02\u0209\u020C\x03\x02' +
    '\x02\x02\u020A\u0208\x03\x02\x02\x02\u020A\u020B\x03\x02\x02\x02\u020B' +
    'A\x03\x02\x02\x02\u020C\u020A\x03\x02\x02\x02\u020D\u0212\x05\xB2Z\x02' +
    '\u020E\u020F\x07\x89\x02\x02\u020F\u0210\x05\xA4S\x02\u0210\u0211\x07' +
    '\x8A\x02\x02\u0211\u0213\x03\x02\x02\x02\u0212\u020E\x03\x02\x02\x02\u0212' +
    '\u0213\x03\x02\x02\x02\u0213\u0214\x03\x02\x02\x02\u0214\u0215\x07\x04' +
    '\x02\x02\u0215\u0216\x07\x89\x02\x02\u0216\u0217\x05&\x14\x02\u0217\u0218' +
    '\x07\x8A\x02\x02\u0218C\x03\x02\x02\x02\u0219\u021E\x05F$\x02\u021A\u021B' +
    '\t\t\x02\x02\u021B\u021D\x05F$\x02\u021C\u021A\x03\x02\x02\x02\u021D\u0220' +
    '\x03\x02\x02\x02\u021E\u021C\x03\x02\x02\x02\u021E\u021F\x03\x02\x02\x02' +
    '\u021FE\x03\x02\x02\x02\u0220\u021E\x03\x02\x02\x02\u0221\u0223\x07"' +
    '\x02\x02\u0222\u0221\x03\x02\x02\x02\u0223\u0226\x03\x02\x02\x02\u0224' +
    '\u0222\x03\x02\x02\x02\u0224\u0225\x03\x02\x02\x02\u0225\u0227\x03\x02' +
    '\x02\x02\u0226\u0224\x03\x02\x02\x02\u0227\u0233\x05H%\x02\u0228\u022A' +
    '\x07"\x02\x02\u0229\u0228\x03\x02\x02\x02\u022A\u022D\x03\x02\x02\x02' +
    '\u022B\u0229\x03\x02\x02\x02\u022B\u022C\x03\x02\x02\x02\u022C\u022E\x03' +
    '\x02\x02\x02\u022D\u022B\x03\x02\x02\x02\u022E\u022F\x07\x89\x02\x02\u022F' +
    '\u0230\x05D#\x02\u0230\u0231\x07\x8A\x02\x02\u0231\u0233\x03\x02\x02\x02' +
    '\u0232\u0224\x03\x02\x02\x02\u0232\u022B\x03\x02\x02\x02\u0233G\x03\x02' +
    '\x02\x02\u0234\u0235\x07\x15\x02\x02\u0235\u0236\x07\x89\x02\x02\u0236' +
    '\u0237\x05> \x02\u0237\u0238\x07\x8A\x02\x02\u0238\u0252\x03\x02\x02\x02' +
    '\u0239\u0252\x05\x80A\x02\u023A\u023B\x052\x1A\x02\u023B\u023C\x05\xB4' +
    '[\x02\u023C\u023D\x052\x1A\x02\u023D\u0252\x03\x02\x02\x02\u023E\u0242' +
    '\x052\x1A\x02\u023F\u0241\x07"\x02\x02\u0240\u023F\x03\x02\x02\x02\u0241' +
    '\u0244\x03\x02\x02\x02\u0242\u0240\x03\x02\x02\x02\u0242\u0243\x03\x02' +
    '\x02\x02\u0243\u0245\x03\x02\x02\x02\u0244\u0242\x03\x02\x02\x02\u0245' +
    '\u0246\x07\x1B\x02\x02\u0246\u0249\x07\x89\x02\x02\u0247\u024A\x05> \x02' +
    '\u0248\u024A\x05\x98M\x02\u0249\u0247\x03\x02\x02\x02\u0249\u0248\x03' +
    '\x02\x02\x02\u024A\u024B\x03\x02\x02\x02\u024B\u024C\x07\x8A\x02\x02\u024C' +
    '\u0252\x03\x02\x02\x02\u024D\u024E\x052\x1A\x02\u024E\u024F\x07\x1E\x02' +
    '\x02\u024F\u0250\x05\xA6T\x02\u0250\u0252\x03\x02\x02\x02\u0251\u0234' +
    '\x03\x02\x02\x02\u0251\u0239\x03\x02\x02\x02\u0251\u023A\x03\x02\x02\x02' +
    '\u0251\u023E\x03\x02\x02\x02\u0251\u024D\x03\x02\x02\x02\u0252I\x03\x02' +
    "\x02\x02\u0253\u0259\x05L'\x02\u0254\u0255\x07\x89\x02\x02\u0255\u0256" +
    '\x05J&\x02\u0256\u0257\x07\x8A\x02\x02\u0257\u0259\x03\x02\x02\x02\u0258' +
    '\u0253\x03\x02\x02\x02\u0258\u0254\x03\x02\x02\x02\u0259\u025F\x03\x02' +
    "\x02\x02\u025A\u025C\x05L'\x02\u025B\u025D\x05T+\x02\u025C\u025B\x03" +
    '\x02\x02\x02\u025C\u025D\x03\x02\x02\x02\u025D\u025F\x03\x02\x02\x02\u025E' +
    '\u0258\x03\x02\x02\x02\u025E\u025A\x03\x02\x02\x02\u025FK\x03\x02\x02' +
    '\x02\u0260\u0262\x07/\x02\x02\u0261\u0263\x07\x11\x02\x02\u0262\u0261' +
    '\x03\x02\x02\x02\u0262\u0263\x03\x02\x02\x02\u0263\u0265\x03\x02\x02\x02' +
    '\u0264\u0266\x05N(\x02\u0265\u0264\x03\x02\x02\x02\u0265\u0266\x03\x02' +
    '\x02\x02\u0266\u0267\x03\x02\x02\x02\u0267\u026A\x05Z.\x02\u0268\u0269' +
    '\x07\x1D\x02\x02\u0269\u026B\x05\xA0Q\x02\u026A\u0268\x03\x02\x02\x02' +
    '\u026A\u026B\x03\x02\x02\x02\u026B\u026E\x03\x02\x02\x02\u026C\u026D\x07' +
    '\x17\x02\x02\u026D\u026F\x05d3\x02\u026E\u026C\x03\x02\x02\x02\u026E\u026F' +
    '\x03\x02\x02\x02\u026F\u0272\x03\x02\x02\x02\u0270\u0271\x075\x02\x02' +
    '\u0271\u0273\x05D#\x02\u0272\u0270\x03\x02\x02\x02\u0272\u0273\x03\x02' +
    '\x02\x02\u0273\u027E\x03\x02\x02\x02\u0274\u0275\x07\x18\x02\x02\u0275' +
    '\u0276\x07\b\x02\x02\u0276\u027B\x05X-\x02\u0277\u0278\x07\x8B\x02\x02' +
    '\u0278\u027A\x05X-\x02\u0279\u0277\x03\x02\x02\x02\u027A\u027D\x03\x02' +
    '\x02\x02\u027B\u0279\x03\x02\x02\x02\u027B\u027C\x03\x02\x02\x02\u027C' +
    '\u027F\x03\x02\x02\x02\u027D\u027B\x03\x02\x02\x02\u027E\u0274\x03\x02' +
    '\x02\x02\u027E\u027F\x03\x02\x02\x02\u027F\u0282\x03\x02\x02\x02\u0280' +
    '\u0281\x07\x19\x02\x02\u0281\u0283\x05D#\x02\u0282\u0280\x03\x02\x02\x02' +
    '\u0282\u0283\x03\x02\x02\x02\u0283M\x03\x02\x02\x02\u0284\u0287\x072\x02' +
    '\x02\u0285\u0288\x05P)\x02\u0286\u0288\x05R*\x02\u0287\u0285\x03\x02\x02' +
    '\x02\u0287\u0286\x03\x02\x02\x02\u0288O\x03\x02\x02\x02\u0289\u028A\x07' +
    'q\x02\x02\u028A\u0291\x07)\x02\x02\u028B\u028C\x07\x89\x02\x02\u028C\u028D' +
    '\x052\x1A\x02\u028D\u028E\x07\x8A\x02\x02\u028E\u028F\x07)\x02\x02\u028F' +
    '\u0291\x03\x02\x02\x02\u0290\u0289\x03\x02\x02\x02\u0290\u028B\x03\x02' +
    '\x02\x02\u0291Q\x03\x02\x02\x02\u0292\u0298\x07q\x02\x02\u0293\u0294\x07' +
    '\x89\x02\x02\u0294\u0295\x052\x1A\x02\u0295\u0296\x07\x8A\x02\x02\u0296' +
    '\u0298\x03\x02\x02\x02\u0297\u0292\x03\x02\x02\x02\u0297\u0293\x03\x02' +
    "\x02\x02\u0298S\x03\x02\x02\x02\u0299\u029A\x07'\x02\x02\u029A\u029B" +
    '\x07\b\x02\x02\u029B\u02A0\x05V,\x02\u029C\u029D\x07\x8B\x02\x02\u029D' +
    '\u029F\x05V,\x02\u029E\u029C\x03\x02\x02\x02\u029F\u02A2\x03\x02\x02\x02' +
    '\u02A0\u029E\x03\x02\x02\x02\u02A0\u02A1\x03\x02\x02\x02\u02A1U\x03\x02' +
    '\x02\x02\u02A2\u02A0\x03\x02\x02\x02\u02A3\u02A6\x052\x1A\x02\u02A4\u02A7' +
    '\x07\x05\x02\x02\u02A5\u02A7\x07\x10\x02\x02\u02A6\u02A4\x03\x02\x02\x02' +
    '\u02A6\u02A5\x03\x02\x02\x02\u02A6\u02A7\x03\x02\x02\x02\u02A7W\x03\x02' +
    '\x02\x02\u02A8\u02A9\x052\x1A\x02\u02A9Y\x03\x02\x02\x02\u02AA\u02AF\x05' +
    'b2\x02\u02AB\u02AC\x07\x8B\x02\x02\u02AC\u02AE\x05b2\x02\u02AD\u02AB\x03' +
    '\x02\x02\x02\u02AE\u02B1\x03\x02\x02\x02\u02AF\u02AD\x03\x02\x02\x02\u02AF' +
    '\u02B0\x03\x02\x02\x02\u02B0[\x03\x02\x02\x02\u02B1\u02AF\x03\x02\x02' +
    '\x02\u02B2\u02B3\x05\xA0Q\x02\u02B3\u02B4\x07\x84\x02\x02\u02B4\u02B6' +
    '\x03\x02\x02\x02\u02B5\u02B2\x03\x02\x02\x02\u02B5\u02B6\x03\x02\x02\x02' +
    '\u02B6\u02B7\x03\x02\x02\x02\u02B7\u02B8\x07\x8E\x02\x02\u02B8]\x03\x02' +
    '\x02\x02\u02B9\u02BC\x05\xA2R\x02\u02BA\u02BC\x07#\x02\x02\u02BB\u02B9' +
    '\x03\x02\x02\x02\u02BB\u02BA\x03\x02\x02\x02\u02BC\u02BE\x03\x02\x02\x02' +
    '\u02BD\u02BF\x05\x8EH\x02\u02BE\u02BD\x03\x02\x02\x02\u02BE\u02BF\x03' +
    '\x02\x02\x02\u02BF_\x03\x02\x02\x02\u02C0\u02C1\x05\x96L\x02\u02C1\u02C2' +
    '\x07w\x02\x02\u02C2\u02C3\x052\x1A\x02\u02C3\u02C9\x03\x02\x02\x02\u02C4' +
    '\u02C6\x052\x1A\x02\u02C5\u02C7\x05\x8EH\x02\u02C6\u02C5\x03\x02\x02\x02' +
    '\u02C6\u02C7\x03\x02\x02\x02\u02C7\u02C9\x03\x02\x02\x02\u02C8\u02C0\x03' +
    '\x02\x02\x02\u02C8\u02C4\x03\x02\x02\x02\u02C9a\x03\x02\x02\x02\u02CA' +
    '\u02D4\x05\\/\x02\u02CB\u02D4\x05^0\x02\u02CC\u02CF\x07p\x02\x02\u02CD' +
    '\u02D0\x05\xB6\\\x02\u02CE\u02D0\x07w\x02\x02\u02CF\u02CD\x03\x02\x02' +
    '\x02\u02CF\u02CE\x03\x02\x02\x02\u02D0\u02D1\x03\x02\x02\x02\u02D1\u02D4' +
    '\x052\x1A\x02\u02D2\u02D4\x05`1\x02\u02D3\u02CA\x03\x02\x02\x02\u02D3' +
    '\u02CB\x03\x02\x02\x02\u02D3\u02CC\x03\x02\x02\x02\u02D3\u02D2\x03\x02' +
    '\x02\x02\u02D4c\x03\x02\x02\x02\u02D5\u02DA\x05f4\x02\u02D6\u02D7\x07' +
    '\x8B\x02\x02\u02D7\u02D9\x05f4\x02\u02D8\u02D6\x03\x02\x02\x02\u02D9\u02DC' +
    '\x03\x02\x02\x02\u02DA\u02D8\x03\x02\x02\x02\u02DA\u02DB\x03\x02\x02\x02' +
    '\u02DBe\x03\x02\x02\x02\u02DC\u02DA\x03\x02\x02\x02\u02DD\u02E3\x05h5' +
    '\x02\u02DE\u02DF\x07\x89\x02\x02\u02DF\u02E0\x05h5\x02\u02E0\u02E1\x07' +
    '\x8A\x02\x02\u02E1\u02E3\x03\x02\x02\x02\u02E2\u02DD\x03\x02\x02\x02\u02E2' +
    '\u02DE\x03\x02\x02\x02\u02E3g\x03\x02\x02\x02\u02E4\u02E8\x05j6\x02\u02E5' +
    '\u02E7\x05l7\x02\u02E6\u02E5\x03\x02\x02\x02\u02E7\u02EA\x03\x02\x02\x02' +
    '\u02E8\u02E6\x03\x02\x02\x02\u02E8\u02E9\x03\x02\x02\x02\u02E9i\x03\x02' +
    '\x02\x02\u02EA\u02E8\x03\x02\x02\x02\u02EB\u02ED\x05z>\x02\u02EC\u02EE' +
    '\x05\x90I\x02\u02ED\u02EC\x03\x02\x02\x02\u02ED\u02EE\x03\x02\x02\x02' +
    '\u02EE\u0317\x03\x02\x02\x02\u02EF\u02F1\x05\x9EP\x02\u02F0\u02F2\x05' +
    '\x90I\x02\u02F1\u02F0\x03\x02\x02\x02\u02F1\u02F2\x03\x02\x02\x02\u02F2' +
    '\u0317\x03\x02\x02\x02\u02F3\u02F4\x07\x89\x02\x02\u02F4\u02F5\x05|?\x02' +
    '\u02F5\u02FA\x07\x8A\x02\x02\u02F6\u02F8\x05\x90I\x02\u02F7\u02F9\x05' +
    '\x94K\x02\u02F8\u02F7\x03\x02\x02\x02\u02F8\u02F9\x03\x02\x02\x02\u02F9' +
    '\u02FB\x03\x02\x02\x02\u02FA\u02F6\x03\x02\x02\x02\u02FA\u02FB\x03\x02' +
    '\x02\x02\u02FB\u0317\x03\x02\x02\x02\u02FC\u0301\x05~@\x02\u02FD\u02FF' +
    '\x05\x90I\x02\u02FE\u0300\x05\x94K\x02\u02FF\u02FE\x03\x02\x02\x02\u02FF' +
    '\u0300\x03\x02\x02\x02\u0300\u0302\x03\x02\x02\x02\u0301\u02FD\x03\x02' +
    '\x02\x02\u0301\u0302\x03\x02\x02\x02\u0302\u0317\x03\x02\x02\x02\u0303' +
    '\u0305\x07p\x02\x02\u0304\u0306\x05\x90I\x02\u0305\u0304\x03\x02\x02\x02' +
    '\u0305\u0306\x03\x02\x02\x02\u0306\u0317\x03\x02\x02\x02\u0307\u0308\x07' +
    'p\x02\x02\u0308\u0309\x07\x84\x02\x02\u0309\u030E\x05~@\x02\u030A\u030C' +
    '\x05\x90I\x02\u030B\u030D\x05\x94K\x02\u030C\u030B\x03\x02\x02\x02\u030C' +
    '\u030D\x03\x02\x02\x02\u030D\u030F\x03\x02\x02\x02\u030E\u030A\x03\x02' +
    '\x02\x02\u030E\u030F\x03\x02\x02\x02\u030F\u0317\x03\x02\x02\x02\u0310' +
    '\u0311\x07\x8D\x02\x02\u0311\u0312\x07\x8D\x02\x02\u0312\u0314\x05~@\x02' +
    '\u0313\u0315\x05\x90I\x02\u0314\u0313\x03\x02\x02\x02\u0314\u0315\x03' +
    '\x02\x02\x02\u0315\u0317\x03\x02\x02\x02\u0316\u02EB\x03\x02\x02\x02\u0316' +
    '\u02EF\x03\x02\x02\x02\u0316\u02F3\x03\x02\x02\x02\u0316\u02FC\x03\x02' +
    '\x02\x02\u0316\u0303\x03\x02\x02\x02\u0316\u0307\x03\x02\x02\x02\u0316' +
    '\u0310\x03\x02\x02\x02\u0317k\x03\x02\x02\x02\u0318\u031C\x05n8\x02\u0319' +
    '\u031C\x05p9\x02\u031A\u031C\x05r:\x02\u031B\u0318\x03\x02\x02\x02\u031B' +
    '\u0319\x03\x02\x02\x02\u031B\u031A\x03\x02\x02\x02\u031Cm\x03\x02\x02' +
    '\x02\u031D\u031F\x07\x1C\x02\x02\u031E\u031D\x03\x02\x02\x02\u031E\u031F' +
    '\x03\x02\x02\x02\u031F\u0325\x03\x02\x02\x02\u0320\u0322\t\n\x02\x02\u0321' +
    '\u0323\x07(\x02\x02\u0322\u0321\x03\x02\x02\x02\u0322\u0323\x03\x02\x02' +
    '\x02\u0323\u0325\x03\x02\x02\x02\u0324\u031E\x03\x02\x02\x02\u0324\u0320' +
    '\x03\x02\x02\x02\u0325\u0326\x03\x02\x02\x02\u0326\u0327\x07\x1F\x02\x02' +
    '\u0327\u0328\x05f4\x02\u0328\u0329\x07%\x02\x02\u0329\u032A\x05D#\x02' +
    '\u032Ao\x03\x02\x02\x02\u032B\u032C\x07*\x02\x02\u032C\u032D\x05t;\x02' +
    '\u032D\u032E\x05\x90I\x02\u032Eq\x03\x02\x02\x02\u032F\u0330\x073\x02' +
    '\x02\u0330\u0331\x05v<\x02\u0331\u0332\x05\x90I\x02\u0332s\x03\x02\x02' +
    '\x02\u0333\u0334\x07\x89\x02\x02\u0334\u0335\x05\x9AN\x02\u0335\u0336' +
    '\x07\x16\x02\x02\u0336\u0337\x05\xA2R\x02\u0337\u0338\x07\x1B\x02\x02' +
    '\u0338\u0339\x05\x94K\x02\u0339\u033A\x07\x8A\x02\x02\u033Au\x03\x02\x02' +
    '\x02\u033B\u033C\x07\x89\x02\x02\u033C\u033D\x052\x1A\x02\u033D\u033E' +
    '\x07\x16\x02\x02\u033E\u033F\x05\xA2R\x02\u033F\u0340\x07\x1B\x02\x02' +
    '\u0340\u0341\x07\x89\x02\x02\u0341\u0342\x05x=\x02\u0342\u0343\x07\x8A' +
    '\x02\x02\u0343\u0344\x07\x8A\x02\x02\u0344w\x03\x02\x02\x02\u0345\u034A' +
    '\x05\xA2R\x02\u0346\u0347\x07\x8B\x02\x02\u0347\u0349\x05\xA2R\x02\u0348' +
    '\u0346\x03\x02\x02\x02\u0349\u034C\x03\x02\x02\x02\u034A\u0348\x03\x02' +
    '\x02\x02\u034A\u034B\x03\x02\x02\x02\u034By\x03\x02\x02\x02\u034C\u034A' +
    '\x03\x02\x02\x02\u034D\u034E\x05\xA0Q\x02\u034E{\x03\x02\x02\x02\u034F' +
    '\u0355\x05> \x02\u0350\u0351\x07\x89\x02\x02\u0351\u0352\x05> \x02\u0352' +
    '\u0353\x07\x8A\x02\x02\u0353\u0355\x03\x02\x02\x02\u0354\u034F\x03\x02' +
    '\x02\x02\u0354\u0350\x03\x02\x02\x02\u0355}\x03\x02\x02\x02\u0356\u0360' +
    '\x05\x9AN\x02\u0357\u0358\x05\xA8U\x02\u0358\u035A\x07\x89\x02\x02\u0359' +
    '\u035B\x05\x98M\x02\u035A\u0359\x03\x02\x02\x02\u035A\u035B\x03\x02\x02' +
    '\x02\u035B\u035C\x03\x02\x02\x02\u035C\u035D\x07\x8A\x02\x02\u035D\u0360' +
    '\x03\x02\x02\x02\u035E\u0360\x05\x82B\x02\u035F\u0356\x03\x02\x02\x02' +
    '\u035F\u0357\x03\x02\x02\x02\u035F\u035E\x03\x02\x02\x02\u0360\x7F\x03' +
    '\x02\x02\x02\u0361\u0362\x07\v\x02\x02\u0362\u0376\x07\x89\x02\x02\u0363' +
    '\u0377\x05\xA2R\x02\u0364\u0365\x07\x89\x02\x02\u0365\u036A\x05\xA2R\x02' +
    '\u0366\u0367\x07\x8B\x02\x02\u0367\u0369\x05\xA2R\x02\u0368\u0366\x03' +
    '\x02\x02\x02\u0369\u036C\x03\x02\x02\x02\u036A\u0368\x03\x02\x02\x02\u036A' +
    '\u036B\x03\x02\x02\x02\u036B\u036D\x03\x02\x02\x02\u036C\u036A\x03\x02' +
    '\x02\x02\u036D\u036E\x07\x8A\x02\x02\u036E\u0377\x03\x02\x02\x02\u036F' +
    '\u0370\x07\x8E\x02\x02\u0370\u0371\x07\x89\x02\x02\u0371\u0372\x05\xA2' +
    'R\x02\u0372\u0373\x07\x8B\x02\x02\u0373\u0374\x052\x1A\x02\u0374\u0375' +
    '\x07\x8A\x02\x02\u0375\u0377\x03\x02\x02\x02\u0376\u0363\x03\x02\x02\x02' +
    '\u0376\u0364\x03\x02\x02\x02\u0376\u036F\x03\x02\x02\x02\u0377\u0378\x03' +
    '\x02\x02\x02\u0378\u0379\x07\x8B\x02\x02\u0379\u037A\x052\x1A\x02\u037A' +
    '\u037B\x07\x8A\x02\x02\u037B\x81\x03\x02\x02\x02\u037C\u037D\x07\r\x02' +
    '\x02\u037D\u037E\x07\x89\x02\x02\u037E\u037F\x05\xAAV\x02\u037F\u0380' +
    '\x07\x8B\x02\x02\u0380\u0383\x052\x1A\x02\u0381\u0382\x07\x8B\x02\x02' +
    '\u0382\u0384\x052\x1A\x02\u0383\u0381\x03\x02\x02\x02\u0383\u0384\x03' +
    '\x02\x02\x02\u0384\u0385\x03\x02\x02\x02\u0385\u0386\x07\x8A\x02\x02\u0386' +
    '\u03C3\x03\x02\x02\x02\u0387\u0388\x07\n\x02\x02\u0388\u0389\x07\x89\x02' +
    '\x02\u0389\u038A\x05\x98M\x02\u038A\u038B\x07\x8A\x02\x02\u038B\u03C3' +
    '\x03\x02\x02\x02\u038C\u038D\x07A\x02\x02\u038D\u038E\x07\x89\x02\x02' +
    '\u038E\u038F\x07r\x02\x02\u038F\u0390\x07\x8B\x02\x02\u0390\u0391\x05' +
    '2\x1A\x02\u0391\u0392\x07\x8B\x02\x02\u0392\u0393\x052\x1A\x02\u0393\u0394' +
    '\x07\x8A\x02\x02\u0394\u03C3\x03\x02\x02\x02\u0395\u0396\x07B\x02\x02' +
    '\u0396\u0397\x07\x89\x02\x02\u0397\u0398\x07r\x02\x02\u0398\u0399\x07' +
    '\x8B\x02\x02\u0399\u039A\x052\x1A\x02\u039A\u039B\x07\x8B\x02\x02\u039B' +
    '\u039C\x052\x1A\x02\u039C\u039D\x07\x8A\x02\x02\u039D\u03C3\x03\x02\x02' +
    '\x02\u039E\u039F\x07G\x02\x02\u039F\u03A0\x07\x89\x02\x02\u03A0\u03C3' +
    '\x07\x8A\x02\x02\u03A1\u03A2\x07H\x02\x02\u03A2\u03A3\x07\x89\x02\x02' +
    '\u03A3\u03C3\x07\x8A\x02\x02\u03A4\u03A5\x07$\x02\x02\u03A5\u03A6\x07' +
    '\x89\x02\x02\u03A6\u03A7\x052\x1A\x02\u03A7\u03A8\x07\x8B\x02\x02\u03A8' +
    '\u03A9\x052\x1A\x02\u03A9\u03AA\x07\x8A\x02\x02\u03AA\u03C3\x03\x02\x02' +
    '\x02\u03AB\u03AC\x07d\x02\x02\u03AC\u03AD\x07\x89\x02\x02\u03AD\u03AE' +
    '\x052\x1A\x02\u03AE\u03AF\x07\x8B\x02\x02\u03AF\u03B0\x052\x1A\x02\u03B0' +
    '\u03B1\x07\x8A\x02\x02\u03B1\u03C3\x03\x02\x02\x02\u03B2\u03B3\x07c\x02' +
    '\x02\u03B3\u03B4\x07\x89\x02\x02\u03B4\u03B5\x05D#\x02\u03B5\u03B6\x07' +
    '\x8B\x02\x02\u03B6\u03B7\x052\x1A\x02\u03B7\u03B8\x07\x8B\x02\x02\u03B8' +
    '\u03B9\x052\x1A\x02\u03B9\u03BA\x07\x8A\x02\x02\u03BA\u03C3\x03\x02\x02' +
    '\x02\u03BB\u03BC\x07V\x02\x02\u03BC\u03BD\x07\x89\x02\x02\u03BD\u03BE' +
    '\x052\x1A\x02\u03BE\u03BF\x07\x8B\x02\x02\u03BF\u03C0\x052\x1A\x02\u03C0' +
    '\u03C1\x07\x8A\x02\x02\u03C1\u03C3\x03\x02\x02\x02\u03C2\u037C\x03\x02' +
    '\x02\x02\u03C2\u0387\x03\x02\x02\x02\u03C2\u038C\x03\x02\x02\x02\u03C2' +
    '\u0395\x03\x02\x02\x02\u03C2\u039E\x03\x02\x02\x02\u03C2\u03A1\x03\x02' +
    '\x02\x02\u03C2\u03A4\x03\x02\x02\x02\u03C2\u03AB\x03\x02\x02\x02\u03C2' +
    '\u03B2\x03\x02\x02\x02\u03C2\u03BB\x03\x02\x02\x02\u03C3\x83\x03\x02\x02' +
    '\x02\u03C4\u03C5\x07\\\x02\x02\u03C5\u03C6\x07\x89\x02\x02\u03C6\u03C7' +
    '\x07s\x02\x02\u03C7\u03C8\x07\x8B\x02\x02\u03C8\u03C9\x07s\x02\x02\u03C9' +
    '\u03CA\x07\x8A\x02\x02\u03CA\x85\x03\x02\x02\x02\u03CB\u03CC\x07P\x02' +
    '\x02\u03CC\u03CD\x07\x89\x02\x02\u03CD\u03CE\x07s\x02\x02\u03CE\u03CF' +
    '\x07\x8A\x02\x02\u03CF\x87\x03\x02\x02\x02\u03D0\u03D1\x07E\x02\x02\u03D1' +
    '\u03D2\x07\x89\x02\x02\u03D2\u03D3\x07s\x02\x02\u03D3\u03D4\x07\x8A\x02' +
    '\x02\u03D4\x89\x03\x02\x02\x02\u03D5\u03D6\x074\x02\x02\u03D6\u03D7\x05' +
    '2\x1A\x02\u03D7\u03D8\x071\x02\x02\u03D8\u03D9\x052\x1A\x02\u03D9\x8B' +
    '\x03\x02\x02\x02\u03DA\u03DB\x074\x02\x02\u03DB\u03DC\x05D#\x02\u03DC' +
    '\u03DD\x071\x02\x02\u03DD\u03DE\x052\x1A\x02\u03DE\x8D\x03\x02\x02\x02' +
    '\u03DF\u03E1\x07\x04\x02\x02\u03E0\u03DF\x03\x02\x02\x02\u03E0\u03E1\x03' +
    '\x02\x02\x02\u03E1\u03E2\x03\x02\x02\x02\u03E2\u03E3\x05\x96L\x02\u03E3' +
    '\x8F\x03\x02\x02\x02\u03E4\u03E6\x07\x04\x02\x02\u03E5\u03E4\x03\x02\x02' +
    '\x02\u03E5\u03E6\x03\x02\x02\x02\u03E6\u03E7\x03\x02\x02\x02\u03E7\u03E8' +
    '\x05\x92J\x02\u03E8\x91\x03\x02\x02\x02\u03E9\u03EA\x05\xB2Z\x02\u03EA' +
    '\x93\x03\x02\x02\x02\u03EB\u03EC\x07\x89\x02\x02\u03EC\u03F1\x05\x96L' +
    '\x02\u03ED\u03EE\x07\x8B\x02\x02\u03EE\u03F0\x05\x96L\x02\u03EF\u03ED' +
    '\x03\x02\x02\x02\u03F0\u03F3\x03\x02\x02\x02\u03F1\u03EF\x03\x02\x02\x02' +
    '\u03F1\u03F2\x03\x02\x02\x02\u03F2\u03F4\x03\x02\x02\x02\u03F3\u03F1\x03' +
    '\x02\x02\x02\u03F4\u03F5\x07\x8A\x02\x02\u03F5\x95\x03\x02\x02\x02\u03F6' +
    '\u03F9\x05\xB2Z\x02\u03F7\u03F9\x07s\x02\x02\u03F8\u03F6\x03\x02\x02\x02' +
    '\u03F8\u03F7\x03\x02\x02\x02\u03F9\x97\x03\x02\x02\x02\u03FA\u03FF\x05' +
    '2\x1A\x02\u03FB\u03FC\x07\x8B\x02\x02\u03FC\u03FE\x052\x1A\x02\u03FD\u03FB' +
    '\x03\x02\x02\x02\u03FE\u0401\x03\x02\x02\x02\u03FF\u03FD\x03\x02\x02\x02' +
    '\u03FF\u0400\x03\x02\x02\x02\u0400\x99\x03\x02\x02\x02\u0401\u03FF\x03' +
    '\x02\x02\x02\u0402\u0403\t\v\x02\x02\u0403\u0404\x07\x89\x02\x02\u0404' +
    '\u0405\x05\x9CO\x02\u0405\u0406\x07\x8A\x02\x02\u0406\u040F\x03\x02\x02' +
    '\x02\u0407\u0408\x07?\x02\x02\u0408\u040B\x07\x89\x02\x02\u0409\u040C' +
    '\x07\x8E\x02\x02\u040A\u040C\x05\x9CO\x02\u040B\u0409\x03\x02\x02\x02' +
    '\u040B\u040A\x03\x02\x02\x02\u040C\u040D\x03\x02\x02\x02\u040D\u040F\x07' +
    '\x8A\x02\x02\u040E\u0402\x03\x02\x02\x02\u040E\u0407\x03\x02\x02\x02\u040F' +
    '\x9B\x03\x02\x02\x02\u0410\u0412\x07\x11\x02\x02\u0411\u0410\x03\x02\x02' +
    '\x02\u0411\u0412\x03\x02\x02\x02\u0412\u0413\x03\x02\x02\x02\u0413\u0414' +
    '\x052\x1A\x02\u0414\x9D\x03\x02\x02\x02\u0415\u0416\x05\xB2Z\x02\u0416' +
    '\u0417\x07\x84\x02\x02\u0417\u0418\x05\xB2Z\x02\u0418\u0419\x07\x84\x02' +
    '\x02\u0419\u041A\x05\xB2Z\x02\u041A\u041B\x07\x84\x02\x02\u041B\u0427' +
    '\x03\x02\x02\x02\u041C\u041D\x05\xB2Z\x02\u041D\u041F\x07\x84\x02\x02' +
    '\u041E\u0420\x05\xB2Z\x02\u041F\u041E\x03\x02\x02\x02\u041F\u0420\x03' +
    '\x02\x02\x02\u0420\u0421\x03\x02\x02\x02\u0421\u0422\x07\x84\x02\x02\u0422' +
    '\u0427\x03\x02\x02\x02\u0423\u0424\x05\xB2Z\x02\u0424\u0425\x07\x84\x02' +
    '\x02\u0425\u0427\x03\x02\x02\x02\u0426\u0415\x03\x02\x02\x02\u0426\u041C' +
    '\x03\x02\x02\x02\u0426\u0423\x03\x02\x02\x02\u0426\u0427\x03\x02\x02\x02' +
    '\u0427\u0428\x03\x02\x02\x02\u0428\u0429\x05\xB2Z\x02\u0429\x9F\x03\x02' +
    '\x02\x02\u042A\u042B\x05\xB2Z\x02\u042B\u042D\x07\x84\x02\x02\u042C\u042E' +
    '\x05\xB2Z\x02\u042D\u042C\x03\x02\x02\x02\u042D\u042E\x03\x02\x02\x02' +
    '\u042E\u042F\x03\x02\x02\x02\u042F\u0430\x07\x84\x02\x02\u0430\u0435\x03' +
    '\x02\x02\x02\u0431\u0432\x05\xB2Z\x02\u0432\u0433\x07\x84\x02\x02\u0433' +
    '\u0435\x03\x02\x02\x02\u0434\u042A\x03\x02\x02\x02\u0434\u0431\x03\x02' +
    '\x02\x02\u0434\u0435\x03\x02\x02\x02\u0435\u0436\x03\x02\x02\x02\u0436' +
    '\u0444\x05\xB2Z\x02\u0437\u0438\x05\xB2Z\x02\u0438\u043A\x07\x84\x02\x02' +
    '\u0439\u043B\x05\xB2Z\x02\u043A\u0439\x03\x02\x02\x02\u043A\u043B\x03' +
    '\x02\x02\x02\u043B\u043C\x03\x02\x02\x02\u043C\u043D\x07\x84\x02\x02\u043D' +
    '\u0442\x03\x02\x02\x02\u043E\u043F\x05\xB2Z\x02\u043F\u0440\x07\x84\x02' +
    '\x02\u0440\u0442\x03\x02\x02\x02\u0441\u0437\x03\x02\x02\x02\u0441\u043E' +
    '\x03\x02\x02\x02\u0441\u0442\x03\x02\x02\x02\u0442\u0444\x03\x02\x02\x02' +
    '\u0443\u0434\x03\x02\x02\x02\u0443\u0441\x03\x02\x02\x02\u0444\xA1\x03' +
    '\x02\x02\x02\u0445\u0447\x05\xB2Z\x02\u0446\u0445\x03\x02\x02\x02\u0446' +
    '\u0447\x03\x02\x02\x02\u0447\u0448\x03\x02\x02\x02\u0448\u044A\x07';
  private static readonly _serializedATNSegment2: string =
    '\x84\x02\x02\u0449\u044B\x05\xB2Z\x02\u044A\u0449\x03\x02\x02\x02\u044A' +
    '\u044B\x03\x02\x02\x02\u044B\u044C\x03\x02\x02\x02\u044C\u044E\x07\x84' +
    '\x02\x02\u044D\u044F\x05\xB2Z\x02\u044E\u044D\x03\x02\x02\x02\u044E\u044F' +
    '\x03\x02\x02\x02\u044F\u0450\x03\x02\x02\x02\u0450\u0451\x07\x84\x02\x02' +
    '\u0451\u0462\x05\xB2Z\x02\u0452\u0454\x05\xB2Z\x02\u0453\u0452\x03\x02' +
    '\x02\x02\u0453\u0454\x03\x02\x02\x02\u0454\u0455\x03\x02\x02\x02\u0455' +
    '\u0457\x07\x84\x02\x02\u0456\u0458\x05\xB2Z\x02\u0457\u0456\x03\x02\x02' +
    '\x02\u0457\u0458\x03\x02\x02\x02\u0458\u0459\x03\x02\x02\x02\u0459\u045A' +
    '\x07\x84\x02\x02\u045A\u0462\x05\xB2Z\x02\u045B\u045D\x05\xB2Z\x02\u045C' +
    '\u045B\x03\x02\x02\x02\u045C\u045D\x03\x02\x02\x02\u045D\u045E\x03\x02' +
    '\x02\x02\u045E\u045F\x07\x84\x02\x02\u045F\u0462\x05\xB2Z\x02\u0460\u0462' +
    '\x05\xB2Z\x02\u0461\u0446\x03\x02\x02\x02\u0461\u0453\x03\x02\x02\x02' +
    '\u0461\u045C\x03\x02\x02\x02\u0461\u0460\x03\x02\x02\x02\u0462\xA3\x03' +
    '\x02\x02\x02\u0463\u0468\x05\xB2Z\x02\u0464\u0465\x07\x8B\x02\x02\u0465' +
    '\u0467\x05\xB2Z\x02\u0466\u0464\x03\x02\x02\x02\u0467\u046A\x03\x02\x02' +
    '\x02\u0468\u0466\x03\x02\x02\x02\u0468\u0469\x03\x02\x02\x02\u0469\xA5' +
    '\x03\x02\x02\x02\u046A\u0468\x03\x02\x02\x02\u046B\u046D\x07"\x02\x02' +
    '\u046C\u046B\x03\x02\x02\x02\u046C\u046D\x03\x02\x02\x02\u046D\u046E\x03' +
    '\x02\x02\x02\u046E\u046F\x07#\x02\x02\u046F\xA7\x03\x02\x02\x02\u0470' +
    '\u0471\t\n\x02\x02\u0471\xA9\x03\x02\x02\x02\u0472\u0473\t\f\x02\x02\u0473' +
    '\u0474\x07\x89\x02\x02\u0474\u0475\x07L\x02\x02\u0475\u0484\x07\x8A\x02' +
    '\x02\u0476\u0477\x05\xB2Z\x02\u0477\u0478\x07\x89\x02\x02\u0478\u0479' +
    '\x07q\x02\x02\u0479\u047A\x07\x8B\x02\x02\u047A\u047B\x07q\x02\x02\u047B' +
    '\u047C\x07\x8A\x02\x02\u047C\u0484\x03\x02\x02\x02\u047D\u047E\x05\xB2' +
    'Z\x02\u047E\u047F\x07\x89\x02\x02\u047F\u0480\x07q\x02\x02\u0480\u0481' +
    '\x07\x8A\x02\x02\u0481\u0484\x03\x02\x02\x02\u0482\u0484\x05\xB2Z\x02' +
    '\u0483\u0472\x03\x02\x02\x02\u0483\u0476\x03\x02\x02\x02\u0483\u047D\x03' +
    '\x02\x02\x02\u0483\u0482\x03\x02\x02\x02\u0484\xAB\x03\x02\x02\x02\u0485' +
    '\u0495\x07s\x02\x02\u0486\u0495\x07t\x02\x02\u0487\u0489\x05\xAEX\x02' +
    '\u0488\u0487\x03\x02\x02\x02\u0488\u0489\x03\x02\x02\x02\u0489\u048A\x03' +
    '\x02\x02\x02\u048A\u0495\x07q\x02\x02\u048B\u048D\x05\xAEX\x02\u048C\u048B' +
    '\x03\x02\x02\x02\u048C\u048D\x03\x02\x02\x02\u048D\u048E\x03\x02\x02\x02' +
    '\u048E\u0495\t\r\x02\x02\u048F\u0491\x05\xAEX\x02\u0490\u048F\x03\x02' +
    '\x02\x02\u0490\u0491\x03\x02\x02\x02\u0491\u0492\x03\x02\x02\x02\u0492' +
    '\u0493\x07\x88\x02\x02\u0493\u0495\t\x0E\x02\x02\u0494\u0485\x03\x02\x02' +
    '\x02\u0494\u0486\x03\x02\x02\x02\u0494\u0488\x03\x02\x02\x02\u0494\u048C' +
    '\x03\x02\x02\x02\u0494\u0490\x03\x02\x02\x02\u0495\xAD\x03\x02\x02\x02' +
    '\u0496\u0497\t\b\x02\x02\u0497\xAF\x03\x02\x02\x02\u0498\u0499\t\x0F\x02' +
    '\x02\u0499\xB1\x03\x02\x02\x02\u049A\u049F\x07r\x02\x02\u049B\u049F\x07' +
    'm\x02\x02\u049C\u049F\x07o\x02\x02\u049D\u049F\x05\xB0Y\x02\u049E\u049A' +
    '\x03\x02\x02\x02\u049E\u049B\x03\x02\x02\x02\u049E\u049C\x03\x02\x02\x02' +
    '\u049E\u049D\x03\x02\x02\x02\u049F\xB3\x03\x02\x02\x02\u04A0\u04B0\x07' +
    'w\x02\x02\u04A1\u04B0\x07x\x02\x02\u04A2\u04B0\x07y\x02\x02\u04A3\u04A4' +
    '\x07y\x02\x02\u04A4\u04B0\x07w\x02\x02\u04A5\u04A6\x07x\x02\x02\u04A6' +
    '\u04B0\x07w\x02\x02\u04A7\u04A8\x07y\x02\x02\u04A8\u04B0\x07x\x02\x02' +
    '\u04A9\u04AA\x07z\x02\x02\u04AA\u04B0\x07w\x02\x02\u04AB\u04AC\x07z\x02' +
    '\x02\u04AC\u04B0\x07x\x02\x02\u04AD\u04AE\x07z\x02\x02\u04AE\u04B0\x07' +
    'y\x02\x02\u04AF\u04A0\x03\x02\x02\x02\u04AF\u04A1\x03\x02\x02\x02\u04AF' +
    '\u04A2\x03\x02\x02\x02\u04AF\u04A3\x03\x02\x02\x02\u04AF\u04A5\x03\x02' +
    '\x02\x02\u04AF\u04A7\x03\x02\x02\x02\u04AF\u04A9\x03\x02\x02\x02\u04AF' +
    '\u04AB\x03\x02\x02\x02\u04AF\u04AD\x03\x02\x02\x02\u04B0\xB5\x03\x02\x02' +
    '\x02\u04B1\u04B2\t\x10\x02\x02\u04B2\xB7\x03\x02\x02\x02\x99\xBB\xC5\xC7' +
    '\xCC\xD0\xD4\xD8\xDC\xDF\xEA\xEE\xF3\xF8\xFC\u0100\u0107\u010A\u0113\u0116' +
    '\u0121\u0126\u012B\u0130\u0135\u013B\u0142\u0146\u0148\u014D\u0153\u0157' +
    '\u015E\u0167\u016A\u016F\u0175\u0178\u017E\u0183\u018A\u018D\u0191\u0195' +
    '\u019B\u019E\u01A4\u01A6\u01AA\u01B3\u01C0\u01C2\u01C4\u01CB\u01D2\u01D6' +
    '\u01DE\u01E2\u01E6\u01EC\u01F6\u0200\u020A\u0212\u021E\u0224\u022B\u0232' +
    '\u0242\u0249\u0251\u0258\u025C\u025E\u0262\u0265\u026A\u026E\u0272\u027B' +
    '\u027E\u0282\u0287\u0290\u0297\u02A0\u02A6\u02AF\u02B5\u02BB\u02BE\u02C6' +
    '\u02C8\u02CF\u02D3\u02DA\u02E2\u02E8\u02ED\u02F1\u02F8\u02FA\u02FF\u0301' +
    '\u0305\u030C\u030E\u0314\u0316\u031B\u031E\u0322\u0324\u034A\u0354\u035A' +
    '\u035F\u036A\u0376\u0383\u03C2\u03E0\u03E5\u03F1\u03F8\u03FF\u040B\u040E' +
    '\u0411\u041F\u0426\u042D\u0434\u043A\u0441\u0443\u0446\u044A\u044E\u0453' +
    '\u0457\u045C\u0461\u0468\u046C\u0483\u0488\u048C\u0490\u0494\u049E\u04AF';
  public static readonly _serializedATN: string = Utils.join(
    [
      AqlParser._serializedATNSegment0,
      AqlParser._serializedATNSegment1,
      AqlParser._serializedATNSegment2,
    ],
    ''
  );
  public static __ATN: ATN;
  public static get _ATN(): ATN {
    if (!AqlParser.__ATN) {
      AqlParser.__ATN = new ATNDeserializer().deserialize(
        Utils.toCharArray(AqlParser._serializedATN)
      );
    }

    return AqlParser.__ATN;
  }
}

export class Tsql_fileContext extends ParserRuleContext {
  public EOF(): TerminalNode {
    return this.getToken(AqlParser.EOF, 0);
  }
  public batch(): BatchContext[];
  public batch(i: number): BatchContext;
  public batch(i?: number): BatchContext | BatchContext[] {
    if (i === undefined) {
      return this.getRuleContexts(BatchContext);
    } else {
      return this.getRuleContext(i, BatchContext);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_tsql_file;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterTsql_file) {
      listener.enterTsql_file(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitTsql_file) {
      listener.exitTsql_file(this);
    }
  }
}

export class BatchContext extends ParserRuleContext {
  public go_batch_statement(): Go_batch_statementContext | undefined {
    return this.tryGetRuleContext(0, Go_batch_statementContext);
  }
  public go_statement(): Go_statementContext[];
  public go_statement(i: number): Go_statementContext;
  public go_statement(i?: number): Go_statementContext | Go_statementContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Go_statementContext);
    } else {
      return this.getRuleContext(i, Go_statementContext);
    }
  }
  public sql_clauses(): Sql_clausesContext[];
  public sql_clauses(i: number): Sql_clausesContext;
  public sql_clauses(i?: number): Sql_clausesContext | Sql_clausesContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Sql_clausesContext);
    } else {
      return this.getRuleContext(i, Sql_clausesContext);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_batch;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterBatch) {
      listener.enterBatch(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitBatch) {
      listener.exitBatch(this);
    }
  }
}

export class Sql_clausesContext extends ParserRuleContext {
  public select_statement_standalone():
    | Select_statement_standaloneContext
    | undefined {
    return this.tryGetRuleContext(0, Select_statement_standaloneContext);
  }
  public SEMI(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.SEMI, 0);
  }
  public cfl_statement(): Cfl_statementContext | undefined {
    return this.tryGetRuleContext(0, Cfl_statementContext);
  }
  public another_statement(): Another_statementContext | undefined {
    return this.tryGetRuleContext(0, Another_statementContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_sql_clauses;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterSql_clauses) {
      listener.enterSql_clauses(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitSql_clauses) {
      listener.exitSql_clauses(this);
    }
  }
}

export class Cfl_statementContext extends ParserRuleContext {
  public block_statement(): Block_statementContext | undefined {
    return this.tryGetRuleContext(0, Block_statementContext);
  }
  public break_statement(): Break_statementContext | undefined {
    return this.tryGetRuleContext(0, Break_statementContext);
  }
  public continue_statement(): Continue_statementContext | undefined {
    return this.tryGetRuleContext(0, Continue_statementContext);
  }
  public if_statement(): If_statementContext | undefined {
    return this.tryGetRuleContext(0, If_statementContext);
  }
  public throw_statement(): Throw_statementContext | undefined {
    return this.tryGetRuleContext(0, Throw_statementContext);
  }
  public try_catch_statement(): Try_catch_statementContext | undefined {
    return this.tryGetRuleContext(0, Try_catch_statementContext);
  }
  public while_statement(): While_statementContext | undefined {
    return this.tryGetRuleContext(0, While_statementContext);
  }
  public print_statement(): Print_statementContext | undefined {
    return this.tryGetRuleContext(0, Print_statementContext);
  }
  public raiseerror_statement(): Raiseerror_statementContext | undefined {
    return this.tryGetRuleContext(0, Raiseerror_statementContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_cfl_statement;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterCfl_statement) {
      listener.enterCfl_statement(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitCfl_statement) {
      listener.exitCfl_statement(this);
    }
  }
}

export class Block_statementContext extends ParserRuleContext {
  public BEGIN(): TerminalNode {
    return this.getToken(AqlParser.BEGIN, 0);
  }
  public END(): TerminalNode {
    return this.getToken(AqlParser.END, 0);
  }
  public SEMI(): TerminalNode[];
  public SEMI(i: number): TerminalNode;
  public SEMI(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(AqlParser.SEMI);
    } else {
      return this.getToken(AqlParser.SEMI, i);
    }
  }
  public sql_clauses(): Sql_clausesContext[];
  public sql_clauses(i: number): Sql_clausesContext;
  public sql_clauses(i?: number): Sql_clausesContext | Sql_clausesContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Sql_clausesContext);
    } else {
      return this.getRuleContext(i, Sql_clausesContext);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_block_statement;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterBlock_statement) {
      listener.enterBlock_statement(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitBlock_statement) {
      listener.exitBlock_statement(this);
    }
  }
}

export class Break_statementContext extends ParserRuleContext {
  public BREAK(): TerminalNode {
    return this.getToken(AqlParser.BREAK, 0);
  }
  public SEMI(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.SEMI, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_break_statement;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterBreak_statement) {
      listener.enterBreak_statement(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitBreak_statement) {
      listener.exitBreak_statement(this);
    }
  }
}

export class Continue_statementContext extends ParserRuleContext {
  public CONTINUE(): TerminalNode {
    return this.getToken(AqlParser.CONTINUE, 0);
  }
  public SEMI(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.SEMI, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_continue_statement;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterContinue_statement) {
      listener.enterContinue_statement(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitContinue_statement) {
      listener.exitContinue_statement(this);
    }
  }
}

export class If_statementContext extends ParserRuleContext {
  public IF(): TerminalNode {
    return this.getToken(AqlParser.IF, 0);
  }
  public search_condition(): Search_conditionContext {
    return this.getRuleContext(0, Search_conditionContext);
  }
  public sql_clauses(): Sql_clausesContext[];
  public sql_clauses(i: number): Sql_clausesContext;
  public sql_clauses(i?: number): Sql_clausesContext | Sql_clausesContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Sql_clausesContext);
    } else {
      return this.getRuleContext(i, Sql_clausesContext);
    }
  }
  public ELSE(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.ELSE, 0);
  }
  public SEMI(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.SEMI, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_if_statement;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterIf_statement) {
      listener.enterIf_statement(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitIf_statement) {
      listener.exitIf_statement(this);
    }
  }
}

export class Throw_statementContext extends ParserRuleContext {
  public THROW(): TerminalNode {
    return this.getToken(AqlParser.THROW, 0);
  }
  public throw_error_number(): Throw_error_numberContext | undefined {
    return this.tryGetRuleContext(0, Throw_error_numberContext);
  }
  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(AqlParser.COMMA);
    } else {
      return this.getToken(AqlParser.COMMA, i);
    }
  }
  public throw_message(): Throw_messageContext | undefined {
    return this.tryGetRuleContext(0, Throw_messageContext);
  }
  public throw_state(): Throw_stateContext | undefined {
    return this.tryGetRuleContext(0, Throw_stateContext);
  }
  public SEMI(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.SEMI, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_throw_statement;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterThrow_statement) {
      listener.enterThrow_statement(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitThrow_statement) {
      listener.exitThrow_statement(this);
    }
  }
}

export class Throw_error_numberContext extends ParserRuleContext {
  public DECIMAL(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.DECIMAL, 0);
  }
  public LOCAL_ID(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.LOCAL_ID, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_throw_error_number;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterThrow_error_number) {
      listener.enterThrow_error_number(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitThrow_error_number) {
      listener.exitThrow_error_number(this);
    }
  }
}

export class Throw_messageContext extends ParserRuleContext {
  public STRING(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.STRING, 0);
  }
  public LOCAL_ID(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.LOCAL_ID, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_throw_message;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterThrow_message) {
      listener.enterThrow_message(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitThrow_message) {
      listener.exitThrow_message(this);
    }
  }
}

export class Throw_stateContext extends ParserRuleContext {
  public DECIMAL(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.DECIMAL, 0);
  }
  public LOCAL_ID(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.LOCAL_ID, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_throw_state;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterThrow_state) {
      listener.enterThrow_state(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitThrow_state) {
      listener.exitThrow_state(this);
    }
  }
}

export class Try_catch_statementContext extends ParserRuleContext {
  public _try_clauses: Sql_clausesContext;
  public _catch_clauses: Sql_clausesContext;
  public BEGIN(): TerminalNode[];
  public BEGIN(i: number): TerminalNode;
  public BEGIN(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(AqlParser.BEGIN);
    } else {
      return this.getToken(AqlParser.BEGIN, i);
    }
  }
  public TRY(): TerminalNode[];
  public TRY(i: number): TerminalNode;
  public TRY(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(AqlParser.TRY);
    } else {
      return this.getToken(AqlParser.TRY, i);
    }
  }
  public END(): TerminalNode[];
  public END(i: number): TerminalNode;
  public END(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(AqlParser.END);
    } else {
      return this.getToken(AqlParser.END, i);
    }
  }
  public CATCH(): TerminalNode[];
  public CATCH(i: number): TerminalNode;
  public CATCH(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(AqlParser.CATCH);
    } else {
      return this.getToken(AqlParser.CATCH, i);
    }
  }
  public SEMI(): TerminalNode[];
  public SEMI(i: number): TerminalNode;
  public SEMI(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(AqlParser.SEMI);
    } else {
      return this.getToken(AqlParser.SEMI, i);
    }
  }
  public sql_clauses(): Sql_clausesContext[];
  public sql_clauses(i: number): Sql_clausesContext;
  public sql_clauses(i?: number): Sql_clausesContext | Sql_clausesContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Sql_clausesContext);
    } else {
      return this.getRuleContext(i, Sql_clausesContext);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_try_catch_statement;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterTry_catch_statement) {
      listener.enterTry_catch_statement(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitTry_catch_statement) {
      listener.exitTry_catch_statement(this);
    }
  }
}

export class While_statementContext extends ParserRuleContext {
  public WHILE(): TerminalNode {
    return this.getToken(AqlParser.WHILE, 0);
  }
  public search_condition(): Search_conditionContext {
    return this.getRuleContext(0, Search_conditionContext);
  }
  public sql_clauses(): Sql_clausesContext | undefined {
    return this.tryGetRuleContext(0, Sql_clausesContext);
  }
  public BREAK(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.BREAK, 0);
  }
  public CONTINUE(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.CONTINUE, 0);
  }
  public SEMI(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.SEMI, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_while_statement;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterWhile_statement) {
      listener.enterWhile_statement(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitWhile_statement) {
      listener.exitWhile_statement(this);
    }
  }
}

export class Print_statementContext extends ParserRuleContext {
  public PRINT(): TerminalNode {
    return this.getToken(AqlParser.PRINT, 0);
  }
  public expression(): ExpressionContext | undefined {
    return this.tryGetRuleContext(0, ExpressionContext);
  }
  public DOUBLE_QUOTE_ID(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.DOUBLE_QUOTE_ID, 0);
  }
  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(AqlParser.COMMA);
    } else {
      return this.getToken(AqlParser.COMMA, i);
    }
  }
  public LOCAL_ID(): TerminalNode[];
  public LOCAL_ID(i: number): TerminalNode;
  public LOCAL_ID(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(AqlParser.LOCAL_ID);
    } else {
      return this.getToken(AqlParser.LOCAL_ID, i);
    }
  }
  public SEMI(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.SEMI, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_print_statement;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterPrint_statement) {
      listener.enterPrint_statement(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitPrint_statement) {
      listener.exitPrint_statement(this);
    }
  }
}

export class Raiseerror_statementContext extends ParserRuleContext {
  public _msg: Token;
  public _formatstring: Token;
  public _argument: Token;
  public RAISERROR(): TerminalNode {
    return this.getToken(AqlParser.RAISERROR, 0);
  }
  public LR_BRACKET(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.LR_BRACKET, 0);
  }
  public RR_BRACKET(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.RR_BRACKET, 0);
  }
  public DECIMAL(): TerminalNode[];
  public DECIMAL(i: number): TerminalNode;
  public DECIMAL(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(AqlParser.DECIMAL);
    } else {
      return this.getToken(AqlParser.DECIMAL, i);
    }
  }
  public STRING(): TerminalNode[];
  public STRING(i: number): TerminalNode;
  public STRING(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(AqlParser.STRING);
    } else {
      return this.getToken(AqlParser.STRING, i);
    }
  }
  public LOCAL_ID(): TerminalNode[];
  public LOCAL_ID(i: number): TerminalNode;
  public LOCAL_ID(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(AqlParser.LOCAL_ID);
    } else {
      return this.getToken(AqlParser.LOCAL_ID, i);
    }
  }
  public SEMI(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.SEMI, 0);
  }
  public DOUBLE_QUOTE_ID(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.DOUBLE_QUOTE_ID, 0);
  }
  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(AqlParser.COMMA);
    } else {
      return this.getToken(AqlParser.COMMA, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_raiseerror_statement;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterRaiseerror_statement) {
      listener.enterRaiseerror_statement(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitRaiseerror_statement) {
      listener.exitRaiseerror_statement(this);
    }
  }
}

export class Another_statementContext extends ParserRuleContext {
  public set_statement(): Set_statementContext {
    return this.getRuleContext(0, Set_statementContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_another_statement;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterAnother_statement) {
      listener.enterAnother_statement(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitAnother_statement) {
      listener.exitAnother_statement(this);
    }
  }
}

export class Select_statement_standaloneContext extends ParserRuleContext {
  public select_statement(): Select_statementContext {
    return this.getRuleContext(0, Select_statementContext);
  }
  public with_expression(): With_expressionContext | undefined {
    return this.tryGetRuleContext(0, With_expressionContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_select_statement_standalone;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterSelect_statement_standalone) {
      listener.enterSelect_statement_standalone(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitSelect_statement_standalone) {
      listener.exitSelect_statement_standalone(this);
    }
  }
}

export class Select_statementContext extends ParserRuleContext {
  public query_expression(): Query_expressionContext {
    return this.getRuleContext(0, Query_expressionContext);
  }
  public order_by_clause(): Order_by_clauseContext | undefined {
    return this.tryGetRuleContext(0, Order_by_clauseContext);
  }
  public SEMI(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.SEMI, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_select_statement;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterSelect_statement) {
      listener.enterSelect_statement(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitSelect_statement) {
      listener.exitSelect_statement(this);
    }
  }
}

export class Set_statementContext extends ParserRuleContext {
  public _member_name: IdContext;
  public SET(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.SET, 0);
  }
  public LOCAL_ID(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.LOCAL_ID, 0);
  }
  public EQUAL(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.EQUAL, 0);
  }
  public expression(): ExpressionContext | undefined {
    return this.tryGetRuleContext(0, ExpressionContext);
  }
  public DOT(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.DOT, 0);
  }
  public SEMI(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.SEMI, 0);
  }
  public id(): IdContext | undefined {
    return this.tryGetRuleContext(0, IdContext);
  }
  public assignment_operator(): Assignment_operatorContext | undefined {
    return this.tryGetRuleContext(0, Assignment_operatorContext);
  }
  public set_special(): Set_specialContext | undefined {
    return this.tryGetRuleContext(0, Set_specialContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_set_statement;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterSet_statement) {
      listener.enterSet_statement(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitSet_statement) {
      listener.exitSet_statement(this);
    }
  }
}

export class Go_batch_statementContext extends ParserRuleContext {
  public _count: Token;
  public GO_BATCH(): TerminalNode {
    return this.getToken(AqlParser.GO_BATCH, 0);
  }
  public DECIMAL(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.DECIMAL, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_go_batch_statement;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterGo_batch_statement) {
      listener.enterGo_batch_statement(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitGo_batch_statement) {
      listener.exitGo_batch_statement(this);
    }
  }
}

export class Go_statementContext extends ParserRuleContext {
  public _count: Token;
  public GO(): TerminalNode {
    return this.getToken(AqlParser.GO, 0);
  }
  public DECIMAL(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.DECIMAL, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_go_statement;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterGo_statement) {
      listener.enterGo_statement(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitGo_statement) {
      listener.exitGo_statement(this);
    }
  }
}

export class Set_specialContext extends ParserRuleContext {
  public SET(): TerminalNode {
    return this.getToken(AqlParser.SET, 0);
  }
  public id(): IdContext[];
  public id(i: number): IdContext;
  public id(i?: number): IdContext | IdContext[] {
    if (i === undefined) {
      return this.getRuleContexts(IdContext);
    } else {
      return this.getRuleContext(i, IdContext);
    }
  }
  public constant_LOCAL_ID(): Constant_LOCAL_IDContext | undefined {
    return this.tryGetRuleContext(0, Constant_LOCAL_IDContext);
  }
  public SEMI(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.SEMI, 0);
  }
  public ROWCOUNT(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.ROWCOUNT, 0);
  }
  public LOCAL_ID(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.LOCAL_ID, 0);
  }
  public DECIMAL(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.DECIMAL, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_set_special;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterSet_special) {
      listener.enterSet_special(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitSet_special) {
      listener.exitSet_special(this);
    }
  }
}

export class Constant_LOCAL_IDContext extends ParserRuleContext {
  public constant(): ConstantContext | undefined {
    return this.tryGetRuleContext(0, ConstantContext);
  }
  public LOCAL_ID(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.LOCAL_ID, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_constant_LOCAL_ID;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterConstant_LOCAL_ID) {
      listener.enterConstant_LOCAL_ID(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitConstant_LOCAL_ID) {
      listener.exitConstant_LOCAL_ID(this);
    }
  }
}

export class ExpressionContext extends ParserRuleContext {
  public _op: Token;
  public primitive_expression(): Primitive_expressionContext | undefined {
    return this.tryGetRuleContext(0, Primitive_expressionContext);
  }
  public function_call(): Function_callContext | undefined {
    return this.tryGetRuleContext(0, Function_callContext);
  }
  public expression(): ExpressionContext[];
  public expression(i: number): ExpressionContext;
  public expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext);
    } else {
      return this.getRuleContext(i, ExpressionContext);
    }
  }
  public DOT(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.DOT, 0);
  }
  public value_call(): Value_callContext | undefined {
    return this.tryGetRuleContext(0, Value_callContext);
  }
  public query_call(): Query_callContext | undefined {
    return this.tryGetRuleContext(0, Query_callContext);
  }
  public exist_call(): Exist_callContext | undefined {
    return this.tryGetRuleContext(0, Exist_callContext);
  }
  public case_expression(): Case_expressionContext | undefined {
    return this.tryGetRuleContext(0, Case_expressionContext);
  }
  public full_column_name(): Full_column_nameContext | undefined {
    return this.tryGetRuleContext(0, Full_column_nameContext);
  }
  public bracket_expression(): Bracket_expressionContext | undefined {
    return this.tryGetRuleContext(0, Bracket_expressionContext);
  }
  public unary_operator_expression():
    | Unary_operator_expressionContext
    | undefined {
    return this.tryGetRuleContext(0, Unary_operator_expressionContext);
  }
  public STAR(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.STAR, 0);
  }
  public DIVIDE(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.DIVIDE, 0);
  }
  public MODULE(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.MODULE, 0);
  }
  public PLUS(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.PLUS, 0);
  }
  public MINUS(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.MINUS, 0);
  }
  public BIT_AND(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.BIT_AND, 0);
  }
  public BIT_XOR(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.BIT_XOR, 0);
  }
  public BIT_OR(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.BIT_OR, 0);
  }
  public DOUBLE_BAR(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.DOUBLE_BAR, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_expression;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterExpression) {
      listener.enterExpression(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitExpression) {
      listener.exitExpression(this);
    }
  }
}

export class Primitive_expressionContext extends ParserRuleContext {
  public DEFAULT(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.DEFAULT, 0);
  }
  public NULL(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.NULL, 0);
  }
  public LOCAL_ID(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.LOCAL_ID, 0);
  }
  public constant(): ConstantContext | undefined {
    return this.tryGetRuleContext(0, ConstantContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_primitive_expression;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterPrimitive_expression) {
      listener.enterPrimitive_expression(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitPrimitive_expression) {
      listener.exitPrimitive_expression(this);
    }
  }
}

export class Case_expressionContext extends ParserRuleContext {
  public _caseExpr: ExpressionContext;
  public _elseExpr: ExpressionContext;
  public CASE(): TerminalNode {
    return this.getToken(AqlParser.CASE, 0);
  }
  public END(): TerminalNode {
    return this.getToken(AqlParser.END, 0);
  }
  public expression(): ExpressionContext[];
  public expression(i: number): ExpressionContext;
  public expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext);
    } else {
      return this.getRuleContext(i, ExpressionContext);
    }
  }
  public switch_section(): Switch_sectionContext[];
  public switch_section(i: number): Switch_sectionContext;
  public switch_section(
    i?: number
  ): Switch_sectionContext | Switch_sectionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Switch_sectionContext);
    } else {
      return this.getRuleContext(i, Switch_sectionContext);
    }
  }
  public ELSE(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.ELSE, 0);
  }
  public switch_search_condition_section(): Switch_search_condition_sectionContext[];
  public switch_search_condition_section(
    i: number
  ): Switch_search_condition_sectionContext;
  public switch_search_condition_section(
    i?: number
  ):
    | Switch_search_condition_sectionContext
    | Switch_search_condition_sectionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Switch_search_condition_sectionContext);
    } else {
      return this.getRuleContext(i, Switch_search_condition_sectionContext);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_case_expression;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterCase_expression) {
      listener.enterCase_expression(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitCase_expression) {
      listener.exitCase_expression(this);
    }
  }
}

export class Unary_operator_expressionContext extends ParserRuleContext {
  public _op: Token;
  public BIT_NOT(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.BIT_NOT, 0);
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext);
  }
  public PLUS(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.PLUS, 0);
  }
  public MINUS(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.MINUS, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_unary_operator_expression;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterUnary_operator_expression) {
      listener.enterUnary_operator_expression(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitUnary_operator_expression) {
      listener.exitUnary_operator_expression(this);
    }
  }
}

export class Bracket_expressionContext extends ParserRuleContext {
  public LR_BRACKET(): TerminalNode {
    return this.getToken(AqlParser.LR_BRACKET, 0);
  }
  public expression(): ExpressionContext | undefined {
    return this.tryGetRuleContext(0, ExpressionContext);
  }
  public RR_BRACKET(): TerminalNode {
    return this.getToken(AqlParser.RR_BRACKET, 0);
  }
  public subquery(): SubqueryContext | undefined {
    return this.tryGetRuleContext(0, SubqueryContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_bracket_expression;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterBracket_expression) {
      listener.enterBracket_expression(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitBracket_expression) {
      listener.exitBracket_expression(this);
    }
  }
}

export class Constant_expressionContext extends ParserRuleContext {
  public NULL(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.NULL, 0);
  }
  public constant(): ConstantContext | undefined {
    return this.tryGetRuleContext(0, ConstantContext);
  }
  public function_call(): Function_callContext | undefined {
    return this.tryGetRuleContext(0, Function_callContext);
  }
  public LOCAL_ID(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.LOCAL_ID, 0);
  }
  public LR_BRACKET(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.LR_BRACKET, 0);
  }
  public constant_expression(): Constant_expressionContext | undefined {
    return this.tryGetRuleContext(0, Constant_expressionContext);
  }
  public RR_BRACKET(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.RR_BRACKET, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_constant_expression;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterConstant_expression) {
      listener.enterConstant_expression(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitConstant_expression) {
      listener.exitConstant_expression(this);
    }
  }
}

export class SubqueryContext extends ParserRuleContext {
  public select_statement(): Select_statementContext {
    return this.getRuleContext(0, Select_statementContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_subquery;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterSubquery) {
      listener.enterSubquery(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitSubquery) {
      listener.exitSubquery(this);
    }
  }
}

export class With_expressionContext extends ParserRuleContext {
  public _common_table_expression: Common_table_expressionContext;
  public _ctes: Common_table_expressionContext[] = [];
  public WITH(): TerminalNode {
    return this.getToken(AqlParser.WITH, 0);
  }
  public common_table_expression(): Common_table_expressionContext[];
  public common_table_expression(i: number): Common_table_expressionContext;
  public common_table_expression(
    i?: number
  ): Common_table_expressionContext | Common_table_expressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Common_table_expressionContext);
    } else {
      return this.getRuleContext(i, Common_table_expressionContext);
    }
  }
  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(AqlParser.COMMA);
    } else {
      return this.getToken(AqlParser.COMMA, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_with_expression;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterWith_expression) {
      listener.enterWith_expression(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitWith_expression) {
      listener.exitWith_expression(this);
    }
  }
}

export class Common_table_expressionContext extends ParserRuleContext {
  public _expression_name: IdContext;
  public _columns: Column_name_listContext;
  public _cte_query: Select_statementContext;
  public AS(): TerminalNode {
    return this.getToken(AqlParser.AS, 0);
  }
  public LR_BRACKET(): TerminalNode[];
  public LR_BRACKET(i: number): TerminalNode;
  public LR_BRACKET(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(AqlParser.LR_BRACKET);
    } else {
      return this.getToken(AqlParser.LR_BRACKET, i);
    }
  }
  public RR_BRACKET(): TerminalNode[];
  public RR_BRACKET(i: number): TerminalNode;
  public RR_BRACKET(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(AqlParser.RR_BRACKET);
    } else {
      return this.getToken(AqlParser.RR_BRACKET, i);
    }
  }
  public id(): IdContext {
    return this.getRuleContext(0, IdContext);
  }
  public select_statement(): Select_statementContext {
    return this.getRuleContext(0, Select_statementContext);
  }
  public column_name_list(): Column_name_listContext | undefined {
    return this.tryGetRuleContext(0, Column_name_listContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_common_table_expression;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterCommon_table_expression) {
      listener.enterCommon_table_expression(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitCommon_table_expression) {
      listener.exitCommon_table_expression(this);
    }
  }
}

export class Search_conditionContext extends ParserRuleContext {
  public _predicate_br: Predicate_brContext;
  public _pred: Predicate_brContext[] = [];
  public _log: Token;
  public predicate_br(): Predicate_brContext[];
  public predicate_br(i: number): Predicate_brContext;
  public predicate_br(i?: number): Predicate_brContext | Predicate_brContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Predicate_brContext);
    } else {
      return this.getRuleContext(i, Predicate_brContext);
    }
  }
  public OR(): TerminalNode[];
  public OR(i: number): TerminalNode;
  public OR(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(AqlParser.OR);
    } else {
      return this.getToken(AqlParser.OR, i);
    }
  }
  public AND(): TerminalNode[];
  public AND(i: number): TerminalNode;
  public AND(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(AqlParser.AND);
    } else {
      return this.getToken(AqlParser.AND, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_search_condition;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterSearch_condition) {
      listener.enterSearch_condition(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitSearch_condition) {
      listener.exitSearch_condition(this);
    }
  }
}

export class Predicate_brContext extends ParserRuleContext {
  public predicate(): PredicateContext | undefined {
    return this.tryGetRuleContext(0, PredicateContext);
  }
  public NOT(): TerminalNode[];
  public NOT(i: number): TerminalNode;
  public NOT(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(AqlParser.NOT);
    } else {
      return this.getToken(AqlParser.NOT, i);
    }
  }
  public LR_BRACKET(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.LR_BRACKET, 0);
  }
  public search_condition(): Search_conditionContext | undefined {
    return this.tryGetRuleContext(0, Search_conditionContext);
  }
  public RR_BRACKET(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.RR_BRACKET, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_predicate_br;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterPredicate_br) {
      listener.enterPredicate_br(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitPredicate_br) {
      listener.exitPredicate_br(this);
    }
  }
}

export class PredicateContext extends ParserRuleContext {
  public EXISTS(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.EXISTS, 0);
  }
  public LR_BRACKET(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.LR_BRACKET, 0);
  }
  public subquery(): SubqueryContext | undefined {
    return this.tryGetRuleContext(0, SubqueryContext);
  }
  public RR_BRACKET(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.RR_BRACKET, 0);
  }
  public freetext_predicate(): Freetext_predicateContext | undefined {
    return this.tryGetRuleContext(0, Freetext_predicateContext);
  }
  public expression(): ExpressionContext[];
  public expression(i: number): ExpressionContext;
  public expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext);
    } else {
      return this.getRuleContext(i, ExpressionContext);
    }
  }
  public comparison_operator(): Comparison_operatorContext | undefined {
    return this.tryGetRuleContext(0, Comparison_operatorContext);
  }
  public IN(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.IN, 0);
  }
  public expression_list(): Expression_listContext | undefined {
    return this.tryGetRuleContext(0, Expression_listContext);
  }
  public NOT(): TerminalNode[];
  public NOT(i: number): TerminalNode;
  public NOT(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(AqlParser.NOT);
    } else {
      return this.getToken(AqlParser.NOT, i);
    }
  }
  public IS(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.IS, 0);
  }
  public null_notnull(): Null_notnullContext | undefined {
    return this.tryGetRuleContext(0, Null_notnullContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_predicate;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterPredicate) {
      listener.enterPredicate(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitPredicate) {
      listener.exitPredicate(this);
    }
  }
}

export class Query_expressionContext extends ParserRuleContext {
  public query_specification(): Query_specificationContext | undefined {
    return this.tryGetRuleContext(0, Query_specificationContext);
  }
  public LR_BRACKET(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.LR_BRACKET, 0);
  }
  public query_expression(): Query_expressionContext | undefined {
    return this.tryGetRuleContext(0, Query_expressionContext);
  }
  public RR_BRACKET(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.RR_BRACKET, 0);
  }
  public order_by_clause(): Order_by_clauseContext | undefined {
    return this.tryGetRuleContext(0, Order_by_clauseContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_query_expression;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterQuery_expression) {
      listener.enterQuery_expression(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitQuery_expression) {
      listener.exitQuery_expression(this);
    }
  }
}

export class Query_specificationContext extends ParserRuleContext {
  public _top: Top_clauseContext;
  public _columns: Select_listContext;
  public _into: Table_nameContext;
  public _from: Table_sourcesContext;
  public _where: Search_conditionContext;
  public _group_by_item: Group_by_itemContext;
  public _groupBys: Group_by_itemContext[] = [];
  public _having: Search_conditionContext;
  public SELECT(): TerminalNode {
    return this.getToken(AqlParser.SELECT, 0);
  }
  public select_list(): Select_listContext {
    return this.getRuleContext(0, Select_listContext);
  }
  public DISTINCT(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.DISTINCT, 0);
  }
  public INTO(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.INTO, 0);
  }
  public FROM(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.FROM, 0);
  }
  public WHERE(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.WHERE, 0);
  }
  public GROUP(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.GROUP, 0);
  }
  public BY(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.BY, 0);
  }
  public HAVING(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.HAVING, 0);
  }
  public top_clause(): Top_clauseContext | undefined {
    return this.tryGetRuleContext(0, Top_clauseContext);
  }
  public table_name(): Table_nameContext | undefined {
    return this.tryGetRuleContext(0, Table_nameContext);
  }
  public table_sources(): Table_sourcesContext | undefined {
    return this.tryGetRuleContext(0, Table_sourcesContext);
  }
  public search_condition(): Search_conditionContext[];
  public search_condition(i: number): Search_conditionContext;
  public search_condition(
    i?: number
  ): Search_conditionContext | Search_conditionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Search_conditionContext);
    } else {
      return this.getRuleContext(i, Search_conditionContext);
    }
  }
  public group_by_item(): Group_by_itemContext[];
  public group_by_item(i: number): Group_by_itemContext;
  public group_by_item(
    i?: number
  ): Group_by_itemContext | Group_by_itemContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Group_by_itemContext);
    } else {
      return this.getRuleContext(i, Group_by_itemContext);
    }
  }
  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(AqlParser.COMMA);
    } else {
      return this.getToken(AqlParser.COMMA, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_query_specification;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterQuery_specification) {
      listener.enterQuery_specification(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitQuery_specification) {
      listener.exitQuery_specification(this);
    }
  }
}

export class Top_clauseContext extends ParserRuleContext {
  public TOP(): TerminalNode {
    return this.getToken(AqlParser.TOP, 0);
  }
  public top_percent(): Top_percentContext | undefined {
    return this.tryGetRuleContext(0, Top_percentContext);
  }
  public top_count(): Top_countContext | undefined {
    return this.tryGetRuleContext(0, Top_countContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_top_clause;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterTop_clause) {
      listener.enterTop_clause(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitTop_clause) {
      listener.exitTop_clause(this);
    }
  }
}

export class Top_percentContext extends ParserRuleContext {
  public _topper_expression: ExpressionContext;
  public DECIMAL(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.DECIMAL, 0);
  }
  public PERCENT(): TerminalNode {
    return this.getToken(AqlParser.PERCENT, 0);
  }
  public LR_BRACKET(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.LR_BRACKET, 0);
  }
  public RR_BRACKET(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.RR_BRACKET, 0);
  }
  public expression(): ExpressionContext | undefined {
    return this.tryGetRuleContext(0, ExpressionContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_top_percent;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterTop_percent) {
      listener.enterTop_percent(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitTop_percent) {
      listener.exitTop_percent(this);
    }
  }
}

export class Top_countContext extends ParserRuleContext {
  public _count_constant: Token;
  public _topcount_expression: ExpressionContext;
  public DECIMAL(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.DECIMAL, 0);
  }
  public LR_BRACKET(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.LR_BRACKET, 0);
  }
  public RR_BRACKET(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.RR_BRACKET, 0);
  }
  public expression(): ExpressionContext | undefined {
    return this.tryGetRuleContext(0, ExpressionContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_top_count;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterTop_count) {
      listener.enterTop_count(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitTop_count) {
      listener.exitTop_count(this);
    }
  }
}

export class Order_by_clauseContext extends ParserRuleContext {
  public _order_by_expression: Order_by_expressionContext;
  public _order_bys: Order_by_expressionContext[] = [];
  public ORDER(): TerminalNode {
    return this.getToken(AqlParser.ORDER, 0);
  }
  public BY(): TerminalNode {
    return this.getToken(AqlParser.BY, 0);
  }
  public order_by_expression(): Order_by_expressionContext[];
  public order_by_expression(i: number): Order_by_expressionContext;
  public order_by_expression(
    i?: number
  ): Order_by_expressionContext | Order_by_expressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Order_by_expressionContext);
    } else {
      return this.getRuleContext(i, Order_by_expressionContext);
    }
  }
  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(AqlParser.COMMA);
    } else {
      return this.getToken(AqlParser.COMMA, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_order_by_clause;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterOrder_by_clause) {
      listener.enterOrder_by_clause(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitOrder_by_clause) {
      listener.exitOrder_by_clause(this);
    }
  }
}

export class Order_by_expressionContext extends ParserRuleContext {
  public _order_by: ExpressionContext;
  public _ascending: Token;
  public _descending: Token;
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext);
  }
  public ASC(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.ASC, 0);
  }
  public DESC(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.DESC, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_order_by_expression;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterOrder_by_expression) {
      listener.enterOrder_by_expression(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitOrder_by_expression) {
      listener.exitOrder_by_expression(this);
    }
  }
}

export class Group_by_itemContext extends ParserRuleContext {
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_group_by_item;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterGroup_by_item) {
      listener.enterGroup_by_item(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitGroup_by_item) {
      listener.exitGroup_by_item(this);
    }
  }
}

export class Select_listContext extends ParserRuleContext {
  public _select_list_elem: Select_list_elemContext;
  public _selectElement: Select_list_elemContext[] = [];
  public select_list_elem(): Select_list_elemContext[];
  public select_list_elem(i: number): Select_list_elemContext;
  public select_list_elem(
    i?: number
  ): Select_list_elemContext | Select_list_elemContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Select_list_elemContext);
    } else {
      return this.getRuleContext(i, Select_list_elemContext);
    }
  }
  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(AqlParser.COMMA);
    } else {
      return this.getToken(AqlParser.COMMA, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_select_list;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterSelect_list) {
      listener.enterSelect_list(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitSelect_list) {
      listener.exitSelect_list(this);
    }
  }
}

export class AsteriskContext extends ParserRuleContext {
  public STAR(): TerminalNode {
    return this.getToken(AqlParser.STAR, 0);
  }
  public table_name(): Table_nameContext | undefined {
    return this.tryGetRuleContext(0, Table_nameContext);
  }
  public DOT(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.DOT, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_asterisk;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterAsterisk) {
      listener.enterAsterisk(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitAsterisk) {
      listener.exitAsterisk(this);
    }
  }
}

export class Column_elemContext extends ParserRuleContext {
  public full_column_name(): Full_column_nameContext | undefined {
    return this.tryGetRuleContext(0, Full_column_nameContext);
  }
  public NULL(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.NULL, 0);
  }
  public as_column_alias(): As_column_aliasContext | undefined {
    return this.tryGetRuleContext(0, As_column_aliasContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_column_elem;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterColumn_elem) {
      listener.enterColumn_elem(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitColumn_elem) {
      listener.exitColumn_elem(this);
    }
  }
}

export class Expression_elemContext extends ParserRuleContext {
  public _leftAlias: Column_aliasContext;
  public _eq: Token;
  public _leftAssignment: ExpressionContext;
  public _expressionAs: ExpressionContext;
  public column_alias(): Column_aliasContext | undefined {
    return this.tryGetRuleContext(0, Column_aliasContext);
  }
  public EQUAL(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.EQUAL, 0);
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext);
  }
  public as_column_alias(): As_column_aliasContext | undefined {
    return this.tryGetRuleContext(0, As_column_aliasContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_expression_elem;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterExpression_elem) {
      listener.enterExpression_elem(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitExpression_elem) {
      listener.exitExpression_elem(this);
    }
  }
}

export class Select_list_elemContext extends ParserRuleContext {
  public asterisk(): AsteriskContext | undefined {
    return this.tryGetRuleContext(0, AsteriskContext);
  }
  public column_elem(): Column_elemContext | undefined {
    return this.tryGetRuleContext(0, Column_elemContext);
  }
  public LOCAL_ID(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.LOCAL_ID, 0);
  }
  public expression(): ExpressionContext | undefined {
    return this.tryGetRuleContext(0, ExpressionContext);
  }
  public assignment_operator(): Assignment_operatorContext | undefined {
    return this.tryGetRuleContext(0, Assignment_operatorContext);
  }
  public EQUAL(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.EQUAL, 0);
  }
  public expression_elem(): Expression_elemContext | undefined {
    return this.tryGetRuleContext(0, Expression_elemContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_select_list_elem;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterSelect_list_elem) {
      listener.enterSelect_list_elem(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitSelect_list_elem) {
      listener.exitSelect_list_elem(this);
    }
  }
}

export class Table_sourcesContext extends ParserRuleContext {
  public _table_source: Table_sourceContext;
  public _source: Table_sourceContext[] = [];
  public table_source(): Table_sourceContext[];
  public table_source(i: number): Table_sourceContext;
  public table_source(i?: number): Table_sourceContext | Table_sourceContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Table_sourceContext);
    } else {
      return this.getRuleContext(i, Table_sourceContext);
    }
  }
  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(AqlParser.COMMA);
    } else {
      return this.getToken(AqlParser.COMMA, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_table_sources;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterTable_sources) {
      listener.enterTable_sources(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitTable_sources) {
      listener.exitTable_sources(this);
    }
  }
}

export class Table_sourceContext extends ParserRuleContext {
  public table_source_item_joined(): Table_source_item_joinedContext {
    return this.getRuleContext(0, Table_source_item_joinedContext);
  }
  public LR_BRACKET(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.LR_BRACKET, 0);
  }
  public RR_BRACKET(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.RR_BRACKET, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_table_source;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterTable_source) {
      listener.enterTable_source(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitTable_source) {
      listener.exitTable_source(this);
    }
  }
}

export class Table_source_item_joinedContext extends ParserRuleContext {
  public _join_part: Join_partContext;
  public _joins: Join_partContext[] = [];
  public table_source_item(): Table_source_itemContext {
    return this.getRuleContext(0, Table_source_itemContext);
  }
  public join_part(): Join_partContext[];
  public join_part(i: number): Join_partContext;
  public join_part(i?: number): Join_partContext | Join_partContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Join_partContext);
    } else {
      return this.getRuleContext(i, Join_partContext);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_table_source_item_joined;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterTable_source_item_joined) {
      listener.enterTable_source_item_joined(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitTable_source_item_joined) {
      listener.exitTable_source_item_joined(this);
    }
  }
}

export class Table_source_itemContext extends ParserRuleContext {
  public _loc_id: Token;
  public _loc_id_call: Token;
  public _loc_fcall: Function_callContext;
  public _oldstyle_fcall: Function_callContext;
  public table_name_with_hint(): Table_name_with_hintContext | undefined {
    return this.tryGetRuleContext(0, Table_name_with_hintContext);
  }
  public as_table_alias(): As_table_aliasContext | undefined {
    return this.tryGetRuleContext(0, As_table_aliasContext);
  }
  public full_table_name(): Full_table_nameContext | undefined {
    return this.tryGetRuleContext(0, Full_table_nameContext);
  }
  public LR_BRACKET(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.LR_BRACKET, 0);
  }
  public derived_table(): Derived_tableContext | undefined {
    return this.tryGetRuleContext(0, Derived_tableContext);
  }
  public RR_BRACKET(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.RR_BRACKET, 0);
  }
  public column_alias_list(): Column_alias_listContext | undefined {
    return this.tryGetRuleContext(0, Column_alias_listContext);
  }
  public function_call(): Function_callContext | undefined {
    return this.tryGetRuleContext(0, Function_callContext);
  }
  public LOCAL_ID(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.LOCAL_ID, 0);
  }
  public DOT(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.DOT, 0);
  }
  public COLON(): TerminalNode[];
  public COLON(i: number): TerminalNode;
  public COLON(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(AqlParser.COLON);
    } else {
      return this.getToken(AqlParser.COLON, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_table_source_item;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterTable_source_item) {
      listener.enterTable_source_item(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitTable_source_item) {
      listener.exitTable_source_item(this);
    }
  }
}

export class Join_partContext extends ParserRuleContext {
  public join_on(): Join_onContext | undefined {
    return this.tryGetRuleContext(0, Join_onContext);
  }
  public pivot(): PivotContext | undefined {
    return this.tryGetRuleContext(0, PivotContext);
  }
  public unpivot(): UnpivotContext | undefined {
    return this.tryGetRuleContext(0, UnpivotContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_join_part;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterJoin_part) {
      listener.enterJoin_part(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitJoin_part) {
      listener.exitJoin_part(this);
    }
  }
}

export class Join_onContext extends ParserRuleContext {
  public _inner: Token;
  public _join_type: Token;
  public _outer: Token;
  public _source: Table_sourceContext;
  public _cond: Search_conditionContext;
  public JOIN(): TerminalNode {
    return this.getToken(AqlParser.JOIN, 0);
  }
  public ON(): TerminalNode {
    return this.getToken(AqlParser.ON, 0);
  }
  public table_source(): Table_sourceContext {
    return this.getRuleContext(0, Table_sourceContext);
  }
  public search_condition(): Search_conditionContext {
    return this.getRuleContext(0, Search_conditionContext);
  }
  public LEFT(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.LEFT, 0);
  }
  public RIGHT(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.RIGHT, 0);
  }
  public INNER(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.INNER, 0);
  }
  public OUTER(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.OUTER, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_join_on;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterJoin_on) {
      listener.enterJoin_on(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitJoin_on) {
      listener.exitJoin_on(this);
    }
  }
}

export class PivotContext extends ParserRuleContext {
  public PIVOT(): TerminalNode {
    return this.getToken(AqlParser.PIVOT, 0);
  }
  public pivot_clause(): Pivot_clauseContext {
    return this.getRuleContext(0, Pivot_clauseContext);
  }
  public as_table_alias(): As_table_aliasContext {
    return this.getRuleContext(0, As_table_aliasContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_pivot;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterPivot) {
      listener.enterPivot(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitPivot) {
      listener.exitPivot(this);
    }
  }
}

export class UnpivotContext extends ParserRuleContext {
  public UNPIVOT(): TerminalNode {
    return this.getToken(AqlParser.UNPIVOT, 0);
  }
  public unpivot_clause(): Unpivot_clauseContext {
    return this.getRuleContext(0, Unpivot_clauseContext);
  }
  public as_table_alias(): As_table_aliasContext {
    return this.getRuleContext(0, As_table_aliasContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_unpivot;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterUnpivot) {
      listener.enterUnpivot(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitUnpivot) {
      listener.exitUnpivot(this);
    }
  }
}

export class Pivot_clauseContext extends ParserRuleContext {
  public LR_BRACKET(): TerminalNode {
    return this.getToken(AqlParser.LR_BRACKET, 0);
  }
  public aggregate_windowed_function(): Aggregate_windowed_functionContext {
    return this.getRuleContext(0, Aggregate_windowed_functionContext);
  }
  public FOR(): TerminalNode {
    return this.getToken(AqlParser.FOR, 0);
  }
  public full_column_name(): Full_column_nameContext {
    return this.getRuleContext(0, Full_column_nameContext);
  }
  public IN(): TerminalNode {
    return this.getToken(AqlParser.IN, 0);
  }
  public column_alias_list(): Column_alias_listContext {
    return this.getRuleContext(0, Column_alias_listContext);
  }
  public RR_BRACKET(): TerminalNode {
    return this.getToken(AqlParser.RR_BRACKET, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_pivot_clause;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterPivot_clause) {
      listener.enterPivot_clause(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitPivot_clause) {
      listener.exitPivot_clause(this);
    }
  }
}

export class Unpivot_clauseContext extends ParserRuleContext {
  public _unpivot_exp: ExpressionContext;
  public LR_BRACKET(): TerminalNode[];
  public LR_BRACKET(i: number): TerminalNode;
  public LR_BRACKET(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(AqlParser.LR_BRACKET);
    } else {
      return this.getToken(AqlParser.LR_BRACKET, i);
    }
  }
  public FOR(): TerminalNode {
    return this.getToken(AqlParser.FOR, 0);
  }
  public full_column_name(): Full_column_nameContext {
    return this.getRuleContext(0, Full_column_nameContext);
  }
  public IN(): TerminalNode {
    return this.getToken(AqlParser.IN, 0);
  }
  public full_column_name_list(): Full_column_name_listContext {
    return this.getRuleContext(0, Full_column_name_listContext);
  }
  public RR_BRACKET(): TerminalNode[];
  public RR_BRACKET(i: number): TerminalNode;
  public RR_BRACKET(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(AqlParser.RR_BRACKET);
    } else {
      return this.getToken(AqlParser.RR_BRACKET, i);
    }
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_unpivot_clause;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterUnpivot_clause) {
      listener.enterUnpivot_clause(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitUnpivot_clause) {
      listener.exitUnpivot_clause(this);
    }
  }
}

export class Full_column_name_listContext extends ParserRuleContext {
  public _full_column_name: Full_column_nameContext;
  public _column: Full_column_nameContext[] = [];
  public full_column_name(): Full_column_nameContext[];
  public full_column_name(i: number): Full_column_nameContext;
  public full_column_name(
    i?: number
  ): Full_column_nameContext | Full_column_nameContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Full_column_nameContext);
    } else {
      return this.getRuleContext(i, Full_column_nameContext);
    }
  }
  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(AqlParser.COMMA);
    } else {
      return this.getToken(AqlParser.COMMA, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_full_column_name_list;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterFull_column_name_list) {
      listener.enterFull_column_name_list(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitFull_column_name_list) {
      listener.exitFull_column_name_list(this);
    }
  }
}

export class Table_name_with_hintContext extends ParserRuleContext {
  public table_name(): Table_nameContext {
    return this.getRuleContext(0, Table_nameContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_table_name_with_hint;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterTable_name_with_hint) {
      listener.enterTable_name_with_hint(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitTable_name_with_hint) {
      listener.exitTable_name_with_hint(this);
    }
  }
}

export class Derived_tableContext extends ParserRuleContext {
  public subquery(): SubqueryContext {
    return this.getRuleContext(0, SubqueryContext);
  }
  public LR_BRACKET(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.LR_BRACKET, 0);
  }
  public RR_BRACKET(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.RR_BRACKET, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_derived_table;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterDerived_table) {
      listener.enterDerived_table(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitDerived_table) {
      listener.exitDerived_table(this);
    }
  }
}

export class Function_callContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_function_call;
  }
  public copyFrom(ctx: Function_callContext): void {
    super.copyFrom(ctx);
  }
}
export class AGGREGATE_WINDOWED_FUNCContext extends Function_callContext {
  public aggregate_windowed_function(): Aggregate_windowed_functionContext {
    return this.getRuleContext(0, Aggregate_windowed_functionContext);
  }
  constructor(ctx: Function_callContext) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterAGGREGATE_WINDOWED_FUNC) {
      listener.enterAGGREGATE_WINDOWED_FUNC(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitAGGREGATE_WINDOWED_FUNC) {
      listener.exitAGGREGATE_WINDOWED_FUNC(this);
    }
  }
}
export class SCALAR_FUNCTIONContext extends Function_callContext {
  public scalar_function_name(): Scalar_function_nameContext {
    return this.getRuleContext(0, Scalar_function_nameContext);
  }
  public LR_BRACKET(): TerminalNode {
    return this.getToken(AqlParser.LR_BRACKET, 0);
  }
  public RR_BRACKET(): TerminalNode {
    return this.getToken(AqlParser.RR_BRACKET, 0);
  }
  public expression_list(): Expression_listContext | undefined {
    return this.tryGetRuleContext(0, Expression_listContext);
  }
  constructor(ctx: Function_callContext) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterSCALAR_FUNCTION) {
      listener.enterSCALAR_FUNCTION(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitSCALAR_FUNCTION) {
      listener.exitSCALAR_FUNCTION(this);
    }
  }
}
export class BUILT_IN_FUNCContext extends Function_callContext {
  public build_in_functions(): Build_in_functionsContext {
    return this.getRuleContext(0, Build_in_functionsContext);
  }
  constructor(ctx: Function_callContext) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterBUILT_IN_FUNC) {
      listener.enterBUILT_IN_FUNC(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitBUILT_IN_FUNC) {
      listener.exitBUILT_IN_FUNC(this);
    }
  }
}

export class Freetext_predicateContext extends ParserRuleContext {
  public CONTAINS(): TerminalNode {
    return this.getToken(AqlParser.CONTAINS, 0);
  }
  public LR_BRACKET(): TerminalNode[];
  public LR_BRACKET(i: number): TerminalNode;
  public LR_BRACKET(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(AqlParser.LR_BRACKET);
    } else {
      return this.getToken(AqlParser.LR_BRACKET, i);
    }
  }
  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(AqlParser.COMMA);
    } else {
      return this.getToken(AqlParser.COMMA, i);
    }
  }
  public expression(): ExpressionContext[];
  public expression(i: number): ExpressionContext;
  public expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext);
    } else {
      return this.getRuleContext(i, ExpressionContext);
    }
  }
  public RR_BRACKET(): TerminalNode[];
  public RR_BRACKET(i: number): TerminalNode;
  public RR_BRACKET(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(AqlParser.RR_BRACKET);
    } else {
      return this.getToken(AqlParser.RR_BRACKET, i);
    }
  }
  public full_column_name(): Full_column_nameContext[];
  public full_column_name(i: number): Full_column_nameContext;
  public full_column_name(
    i?: number
  ): Full_column_nameContext | Full_column_nameContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Full_column_nameContext);
    } else {
      return this.getRuleContext(i, Full_column_nameContext);
    }
  }
  public STAR(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.STAR, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_freetext_predicate;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterFreetext_predicate) {
      listener.enterFreetext_predicate(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitFreetext_predicate) {
      listener.exitFreetext_predicate(this);
    }
  }
}

export class Build_in_functionsContext extends ParserRuleContext {
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_build_in_functions;
  }
  public copyFrom(ctx: Build_in_functionsContext): void {
    super.copyFrom(ctx);
  }
}
export class CONVERTContext extends Build_in_functionsContext {
  public _convert_data_type: Data_typeContext;
  public _convert_expression: ExpressionContext;
  public _style: ExpressionContext;
  public CONVERT(): TerminalNode {
    return this.getToken(AqlParser.CONVERT, 0);
  }
  public LR_BRACKET(): TerminalNode {
    return this.getToken(AqlParser.LR_BRACKET, 0);
  }
  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(AqlParser.COMMA);
    } else {
      return this.getToken(AqlParser.COMMA, i);
    }
  }
  public RR_BRACKET(): TerminalNode {
    return this.getToken(AqlParser.RR_BRACKET, 0);
  }
  public data_type(): Data_typeContext {
    return this.getRuleContext(0, Data_typeContext);
  }
  public expression(): ExpressionContext[];
  public expression(i: number): ExpressionContext;
  public expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext);
    } else {
      return this.getRuleContext(i, ExpressionContext);
    }
  }
  constructor(ctx: Build_in_functionsContext) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterCONVERT) {
      listener.enterCONVERT(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitCONVERT) {
      listener.exitCONVERT(this);
    }
  }
}
export class COALESCEContext extends Build_in_functionsContext {
  public COALESCE(): TerminalNode {
    return this.getToken(AqlParser.COALESCE, 0);
  }
  public LR_BRACKET(): TerminalNode {
    return this.getToken(AqlParser.LR_BRACKET, 0);
  }
  public expression_list(): Expression_listContext {
    return this.getRuleContext(0, Expression_listContext);
  }
  public RR_BRACKET(): TerminalNode {
    return this.getToken(AqlParser.RR_BRACKET, 0);
  }
  constructor(ctx: Build_in_functionsContext) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterCOALESCE) {
      listener.enterCOALESCE(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitCOALESCE) {
      listener.exitCOALESCE(this);
    }
  }
}
export class DATEADDContext extends Build_in_functionsContext {
  public _datepart: Token;
  public _number: ExpressionContext;
  public _date: ExpressionContext;
  public DATEADD(): TerminalNode {
    return this.getToken(AqlParser.DATEADD, 0);
  }
  public LR_BRACKET(): TerminalNode {
    return this.getToken(AqlParser.LR_BRACKET, 0);
  }
  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(AqlParser.COMMA);
    } else {
      return this.getToken(AqlParser.COMMA, i);
    }
  }
  public RR_BRACKET(): TerminalNode {
    return this.getToken(AqlParser.RR_BRACKET, 0);
  }
  public ID(): TerminalNode {
    return this.getToken(AqlParser.ID, 0);
  }
  public expression(): ExpressionContext[];
  public expression(i: number): ExpressionContext;
  public expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext);
    } else {
      return this.getRuleContext(i, ExpressionContext);
    }
  }
  constructor(ctx: Build_in_functionsContext) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterDATEADD) {
      listener.enterDATEADD(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitDATEADD) {
      listener.exitDATEADD(this);
    }
  }
}
export class DATEDIFFContext extends Build_in_functionsContext {
  public _datepart: Token;
  public _date_first: ExpressionContext;
  public _date_second: ExpressionContext;
  public DATEDIFF(): TerminalNode {
    return this.getToken(AqlParser.DATEDIFF, 0);
  }
  public LR_BRACKET(): TerminalNode {
    return this.getToken(AqlParser.LR_BRACKET, 0);
  }
  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(AqlParser.COMMA);
    } else {
      return this.getToken(AqlParser.COMMA, i);
    }
  }
  public RR_BRACKET(): TerminalNode {
    return this.getToken(AqlParser.RR_BRACKET, 0);
  }
  public ID(): TerminalNode {
    return this.getToken(AqlParser.ID, 0);
  }
  public expression(): ExpressionContext[];
  public expression(i: number): ExpressionContext;
  public expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext);
    } else {
      return this.getRuleContext(i, ExpressionContext);
    }
  }
  constructor(ctx: Build_in_functionsContext) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterDATEDIFF) {
      listener.enterDATEDIFF(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitDATEDIFF) {
      listener.exitDATEDIFF(this);
    }
  }
}
export class GETDATEContext extends Build_in_functionsContext {
  public GETDATE(): TerminalNode {
    return this.getToken(AqlParser.GETDATE, 0);
  }
  public LR_BRACKET(): TerminalNode {
    return this.getToken(AqlParser.LR_BRACKET, 0);
  }
  public RR_BRACKET(): TerminalNode {
    return this.getToken(AqlParser.RR_BRACKET, 0);
  }
  constructor(ctx: Build_in_functionsContext) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterGETDATE) {
      listener.enterGETDATE(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitGETDATE) {
      listener.exitGETDATE(this);
    }
  }
}
export class GETUTCDATEContext extends Build_in_functionsContext {
  public GETUTCDATE(): TerminalNode {
    return this.getToken(AqlParser.GETUTCDATE, 0);
  }
  public LR_BRACKET(): TerminalNode {
    return this.getToken(AqlParser.LR_BRACKET, 0);
  }
  public RR_BRACKET(): TerminalNode {
    return this.getToken(AqlParser.RR_BRACKET, 0);
  }
  constructor(ctx: Build_in_functionsContext) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterGETUTCDATE) {
      listener.enterGETUTCDATE(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitGETUTCDATE) {
      listener.exitGETUTCDATE(this);
    }
  }
}
export class NULLIFContext extends Build_in_functionsContext {
  public _left: ExpressionContext;
  public _right: ExpressionContext;
  public NULLIF(): TerminalNode {
    return this.getToken(AqlParser.NULLIF, 0);
  }
  public LR_BRACKET(): TerminalNode {
    return this.getToken(AqlParser.LR_BRACKET, 0);
  }
  public COMMA(): TerminalNode {
    return this.getToken(AqlParser.COMMA, 0);
  }
  public RR_BRACKET(): TerminalNode {
    return this.getToken(AqlParser.RR_BRACKET, 0);
  }
  public expression(): ExpressionContext[];
  public expression(i: number): ExpressionContext;
  public expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext);
    } else {
      return this.getRuleContext(i, ExpressionContext);
    }
  }
  constructor(ctx: Build_in_functionsContext) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterNULLIF) {
      listener.enterNULLIF(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitNULLIF) {
      listener.exitNULLIF(this);
    }
  }
}
export class ISNULLContext extends Build_in_functionsContext {
  public _left: ExpressionContext;
  public _right: ExpressionContext;
  public ISNULL(): TerminalNode {
    return this.getToken(AqlParser.ISNULL, 0);
  }
  public LR_BRACKET(): TerminalNode {
    return this.getToken(AqlParser.LR_BRACKET, 0);
  }
  public COMMA(): TerminalNode {
    return this.getToken(AqlParser.COMMA, 0);
  }
  public RR_BRACKET(): TerminalNode {
    return this.getToken(AqlParser.RR_BRACKET, 0);
  }
  public expression(): ExpressionContext[];
  public expression(i: number): ExpressionContext;
  public expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext);
    } else {
      return this.getRuleContext(i, ExpressionContext);
    }
  }
  constructor(ctx: Build_in_functionsContext) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterISNULL) {
      listener.enterISNULL(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitISNULL) {
      listener.exitISNULL(this);
    }
  }
}
export class IIFContext extends Build_in_functionsContext {
  public _cond: Search_conditionContext;
  public _left: ExpressionContext;
  public _right: ExpressionContext;
  public IIF(): TerminalNode {
    return this.getToken(AqlParser.IIF, 0);
  }
  public LR_BRACKET(): TerminalNode {
    return this.getToken(AqlParser.LR_BRACKET, 0);
  }
  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(AqlParser.COMMA);
    } else {
      return this.getToken(AqlParser.COMMA, i);
    }
  }
  public RR_BRACKET(): TerminalNode {
    return this.getToken(AqlParser.RR_BRACKET, 0);
  }
  public search_condition(): Search_conditionContext {
    return this.getRuleContext(0, Search_conditionContext);
  }
  public expression(): ExpressionContext[];
  public expression(i: number): ExpressionContext;
  public expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext);
    } else {
      return this.getRuleContext(i, ExpressionContext);
    }
  }
  constructor(ctx: Build_in_functionsContext) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterIIF) {
      listener.enterIIF(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitIIF) {
      listener.exitIIF(this);
    }
  }
}
export class STRINGAGGContext extends Build_in_functionsContext {
  public _expr: ExpressionContext;
  public _separator: ExpressionContext;
  public STRING_AGG(): TerminalNode {
    return this.getToken(AqlParser.STRING_AGG, 0);
  }
  public LR_BRACKET(): TerminalNode {
    return this.getToken(AqlParser.LR_BRACKET, 0);
  }
  public COMMA(): TerminalNode {
    return this.getToken(AqlParser.COMMA, 0);
  }
  public RR_BRACKET(): TerminalNode {
    return this.getToken(AqlParser.RR_BRACKET, 0);
  }
  public expression(): ExpressionContext[];
  public expression(i: number): ExpressionContext;
  public expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext);
    } else {
      return this.getRuleContext(i, ExpressionContext);
    }
  }
  constructor(ctx: Build_in_functionsContext) {
    super(ctx.parent, ctx.invokingState);
    this.copyFrom(ctx);
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterSTRINGAGG) {
      listener.enterSTRINGAGG(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitSTRINGAGG) {
      listener.exitSTRINGAGG(this);
    }
  }
}

export class Value_callContext extends ParserRuleContext {
  public _xquery: Token;
  public _sqltype: Token;
  public VALUE(): TerminalNode {
    return this.getToken(AqlParser.VALUE, 0);
  }
  public LR_BRACKET(): TerminalNode {
    return this.getToken(AqlParser.LR_BRACKET, 0);
  }
  public COMMA(): TerminalNode {
    return this.getToken(AqlParser.COMMA, 0);
  }
  public RR_BRACKET(): TerminalNode {
    return this.getToken(AqlParser.RR_BRACKET, 0);
  }
  public STRING(): TerminalNode[];
  public STRING(i: number): TerminalNode;
  public STRING(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(AqlParser.STRING);
    } else {
      return this.getToken(AqlParser.STRING, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_value_call;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterValue_call) {
      listener.enterValue_call(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitValue_call) {
      listener.exitValue_call(this);
    }
  }
}

export class Query_callContext extends ParserRuleContext {
  public _xquery: Token;
  public QUERY(): TerminalNode {
    return this.getToken(AqlParser.QUERY, 0);
  }
  public LR_BRACKET(): TerminalNode {
    return this.getToken(AqlParser.LR_BRACKET, 0);
  }
  public RR_BRACKET(): TerminalNode {
    return this.getToken(AqlParser.RR_BRACKET, 0);
  }
  public STRING(): TerminalNode {
    return this.getToken(AqlParser.STRING, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_query_call;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterQuery_call) {
      listener.enterQuery_call(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitQuery_call) {
      listener.exitQuery_call(this);
    }
  }
}

export class Exist_callContext extends ParserRuleContext {
  public _xquery: Token;
  public EXIST(): TerminalNode {
    return this.getToken(AqlParser.EXIST, 0);
  }
  public LR_BRACKET(): TerminalNode {
    return this.getToken(AqlParser.LR_BRACKET, 0);
  }
  public RR_BRACKET(): TerminalNode {
    return this.getToken(AqlParser.RR_BRACKET, 0);
  }
  public STRING(): TerminalNode {
    return this.getToken(AqlParser.STRING, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_exist_call;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterExist_call) {
      listener.enterExist_call(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitExist_call) {
      listener.exitExist_call(this);
    }
  }
}

export class Switch_sectionContext extends ParserRuleContext {
  public WHEN(): TerminalNode {
    return this.getToken(AqlParser.WHEN, 0);
  }
  public expression(): ExpressionContext[];
  public expression(i: number): ExpressionContext;
  public expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext);
    } else {
      return this.getRuleContext(i, ExpressionContext);
    }
  }
  public THEN(): TerminalNode {
    return this.getToken(AqlParser.THEN, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_switch_section;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterSwitch_section) {
      listener.enterSwitch_section(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitSwitch_section) {
      listener.exitSwitch_section(this);
    }
  }
}

export class Switch_search_condition_sectionContext extends ParserRuleContext {
  public WHEN(): TerminalNode {
    return this.getToken(AqlParser.WHEN, 0);
  }
  public search_condition(): Search_conditionContext {
    return this.getRuleContext(0, Search_conditionContext);
  }
  public THEN(): TerminalNode {
    return this.getToken(AqlParser.THEN, 0);
  }
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_switch_search_condition_section;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterSwitch_search_condition_section) {
      listener.enterSwitch_search_condition_section(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitSwitch_search_condition_section) {
      listener.exitSwitch_search_condition_section(this);
    }
  }
}

export class As_column_aliasContext extends ParserRuleContext {
  public column_alias(): Column_aliasContext {
    return this.getRuleContext(0, Column_aliasContext);
  }
  public AS(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.AS, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_as_column_alias;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterAs_column_alias) {
      listener.enterAs_column_alias(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitAs_column_alias) {
      listener.exitAs_column_alias(this);
    }
  }
}

export class As_table_aliasContext extends ParserRuleContext {
  public table_alias(): Table_aliasContext {
    return this.getRuleContext(0, Table_aliasContext);
  }
  public AS(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.AS, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_as_table_alias;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterAs_table_alias) {
      listener.enterAs_table_alias(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitAs_table_alias) {
      listener.exitAs_table_alias(this);
    }
  }
}

export class Table_aliasContext extends ParserRuleContext {
  public id(): IdContext {
    return this.getRuleContext(0, IdContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_table_alias;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterTable_alias) {
      listener.enterTable_alias(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitTable_alias) {
      listener.exitTable_alias(this);
    }
  }
}

export class Column_alias_listContext extends ParserRuleContext {
  public _column_alias: Column_aliasContext;
  public _alias: Column_aliasContext[] = [];
  public LR_BRACKET(): TerminalNode {
    return this.getToken(AqlParser.LR_BRACKET, 0);
  }
  public RR_BRACKET(): TerminalNode {
    return this.getToken(AqlParser.RR_BRACKET, 0);
  }
  public column_alias(): Column_aliasContext[];
  public column_alias(i: number): Column_aliasContext;
  public column_alias(i?: number): Column_aliasContext | Column_aliasContext[] {
    if (i === undefined) {
      return this.getRuleContexts(Column_aliasContext);
    } else {
      return this.getRuleContext(i, Column_aliasContext);
    }
  }
  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(AqlParser.COMMA);
    } else {
      return this.getToken(AqlParser.COMMA, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_column_alias_list;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterColumn_alias_list) {
      listener.enterColumn_alias_list(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitColumn_alias_list) {
      listener.exitColumn_alias_list(this);
    }
  }
}

export class Column_aliasContext extends ParserRuleContext {
  public id(): IdContext | undefined {
    return this.tryGetRuleContext(0, IdContext);
  }
  public STRING(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.STRING, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_column_alias;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterColumn_alias) {
      listener.enterColumn_alias(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitColumn_alias) {
      listener.exitColumn_alias(this);
    }
  }
}

export class Expression_listContext extends ParserRuleContext {
  public _expression: ExpressionContext;
  public _exp: ExpressionContext[] = [];
  public expression(): ExpressionContext[];
  public expression(i: number): ExpressionContext;
  public expression(i?: number): ExpressionContext | ExpressionContext[] {
    if (i === undefined) {
      return this.getRuleContexts(ExpressionContext);
    } else {
      return this.getRuleContext(i, ExpressionContext);
    }
  }
  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(AqlParser.COMMA);
    } else {
      return this.getToken(AqlParser.COMMA, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_expression_list;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterExpression_list) {
      listener.enterExpression_list(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitExpression_list) {
      listener.exitExpression_list(this);
    }
  }
}

export class Aggregate_windowed_functionContext extends ParserRuleContext {
  public _agg_func: Token;
  public LR_BRACKET(): TerminalNode {
    return this.getToken(AqlParser.LR_BRACKET, 0);
  }
  public all_distinct_expression(): All_distinct_expressionContext | undefined {
    return this.tryGetRuleContext(0, All_distinct_expressionContext);
  }
  public RR_BRACKET(): TerminalNode {
    return this.getToken(AqlParser.RR_BRACKET, 0);
  }
  public AVG(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.AVG, 0);
  }
  public MAX(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.MAX, 0);
  }
  public MIN(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.MIN, 0);
  }
  public SUM(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.SUM, 0);
  }
  public STDEV(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.STDEV, 0);
  }
  public STDEVP(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.STDEVP, 0);
  }
  public VAR(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.VAR, 0);
  }
  public VARP(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.VARP, 0);
  }
  public COUNT(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.COUNT, 0);
  }
  public STAR(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.STAR, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_aggregate_windowed_function;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterAggregate_windowed_function) {
      listener.enterAggregate_windowed_function(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitAggregate_windowed_function) {
      listener.exitAggregate_windowed_function(this);
    }
  }
}

export class All_distinct_expressionContext extends ParserRuleContext {
  public expression(): ExpressionContext {
    return this.getRuleContext(0, ExpressionContext);
  }
  public DISTINCT(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.DISTINCT, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_all_distinct_expression;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterAll_distinct_expression) {
      listener.enterAll_distinct_expression(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitAll_distinct_expression) {
      listener.exitAll_distinct_expression(this);
    }
  }
}

export class Full_table_nameContext extends ParserRuleContext {
  public _server: IdContext;
  public _database: IdContext;
  public _schema: IdContext;
  public _table: IdContext;
  public id(): IdContext[];
  public id(i: number): IdContext;
  public id(i?: number): IdContext | IdContext[] {
    if (i === undefined) {
      return this.getRuleContexts(IdContext);
    } else {
      return this.getRuleContext(i, IdContext);
    }
  }
  public DOT(): TerminalNode[];
  public DOT(i: number): TerminalNode;
  public DOT(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(AqlParser.DOT);
    } else {
      return this.getToken(AqlParser.DOT, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_full_table_name;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterFull_table_name) {
      listener.enterFull_table_name(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitFull_table_name) {
      listener.exitFull_table_name(this);
    }
  }
}

export class Table_nameContext extends ParserRuleContext {
  public _database: IdContext;
  public _schema: IdContext;
  public _table: IdContext;
  public id(): IdContext[];
  public id(i: number): IdContext;
  public id(i?: number): IdContext | IdContext[] {
    if (i === undefined) {
      return this.getRuleContexts(IdContext);
    } else {
      return this.getRuleContext(i, IdContext);
    }
  }
  public DOT(): TerminalNode[];
  public DOT(i: number): TerminalNode;
  public DOT(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(AqlParser.DOT);
    } else {
      return this.getToken(AqlParser.DOT, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_table_name;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterTable_name) {
      listener.enterTable_name(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitTable_name) {
      listener.exitTable_name(this);
    }
  }
}

export class Full_column_nameContext extends ParserRuleContext {
  public _server: IdContext;
  public _schema: IdContext;
  public _tablename: IdContext;
  public _column_name: IdContext;
  public DOT(): TerminalNode[];
  public DOT(i: number): TerminalNode;
  public DOT(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(AqlParser.DOT);
    } else {
      return this.getToken(AqlParser.DOT, i);
    }
  }
  public id(): IdContext[];
  public id(i: number): IdContext;
  public id(i?: number): IdContext | IdContext[] {
    if (i === undefined) {
      return this.getRuleContexts(IdContext);
    } else {
      return this.getRuleContext(i, IdContext);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_full_column_name;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterFull_column_name) {
      listener.enterFull_column_name(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitFull_column_name) {
      listener.exitFull_column_name(this);
    }
  }
}

export class Column_name_listContext extends ParserRuleContext {
  public _id: IdContext;
  public _col: IdContext[] = [];
  public id(): IdContext[];
  public id(i: number): IdContext;
  public id(i?: number): IdContext | IdContext[] {
    if (i === undefined) {
      return this.getRuleContexts(IdContext);
    } else {
      return this.getRuleContext(i, IdContext);
    }
  }
  public COMMA(): TerminalNode[];
  public COMMA(i: number): TerminalNode;
  public COMMA(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(AqlParser.COMMA);
    } else {
      return this.getToken(AqlParser.COMMA, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_column_name_list;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterColumn_name_list) {
      listener.enterColumn_name_list(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitColumn_name_list) {
      listener.exitColumn_name_list(this);
    }
  }
}

export class Null_notnullContext extends ParserRuleContext {
  public NULL(): TerminalNode {
    return this.getToken(AqlParser.NULL, 0);
  }
  public NOT(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.NOT, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_null_notnull;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterNull_notnull) {
      listener.enterNull_notnull(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitNull_notnull) {
      listener.exitNull_notnull(this);
    }
  }
}

export class Scalar_function_nameContext extends ParserRuleContext {
  public RIGHT(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.RIGHT, 0);
  }
  public LEFT(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.LEFT, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_scalar_function_name;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterScalar_function_name) {
      listener.enterScalar_function_name(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitScalar_function_name) {
      listener.exitScalar_function_name(this);
    }
  }
}

export class Data_typeContext extends ParserRuleContext {
  public _scaled: Token;
  public _ext_type: IdContext;
  public _scale: Token;
  public _prec: Token;
  public _unscaled_type: IdContext;
  public LR_BRACKET(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.LR_BRACKET, 0);
  }
  public MAX(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.MAX, 0);
  }
  public RR_BRACKET(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.RR_BRACKET, 0);
  }
  public VARCHAR(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.VARCHAR, 0);
  }
  public NVARCHAR(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.NVARCHAR, 0);
  }
  public COMMA(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.COMMA, 0);
  }
  public id(): IdContext | undefined {
    return this.tryGetRuleContext(0, IdContext);
  }
  public DECIMAL(): TerminalNode[];
  public DECIMAL(i: number): TerminalNode;
  public DECIMAL(i?: number): TerminalNode | TerminalNode[] {
    if (i === undefined) {
      return this.getTokens(AqlParser.DECIMAL);
    } else {
      return this.getToken(AqlParser.DECIMAL, i);
    }
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_data_type;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterData_type) {
      listener.enterData_type(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitData_type) {
      listener.exitData_type(this);
    }
  }
}

export class ConstantContext extends ParserRuleContext {
  public _dollar: Token;
  public STRING(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.STRING, 0);
  }
  public BINARY(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.BINARY, 0);
  }
  public DECIMAL(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.DECIMAL, 0);
  }
  public sign(): SignContext | undefined {
    return this.tryGetRuleContext(0, SignContext);
  }
  public REAL(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.REAL, 0);
  }
  public FLOAT(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.FLOAT, 0);
  }
  public DOLLAR(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.DOLLAR, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_constant;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterConstant) {
      listener.enterConstant(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitConstant) {
      listener.exitConstant(this);
    }
  }
}

export class SignContext extends ParserRuleContext {
  public PLUS(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.PLUS, 0);
  }
  public MINUS(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.MINUS, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_sign;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterSign) {
      listener.enterSign(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitSign) {
      listener.exitSign(this);
    }
  }
}

export class KeywordContext extends ParserRuleContext {
  public AFTER(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.AFTER, 0);
  }
  public AGGREGATE(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.AGGREGATE, 0);
  }
  public APPLY(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.APPLY, 0);
  }
  public AVG(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.AVG, 0);
  }
  public CATCH(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.CATCH, 0);
  }
  public CONCAT(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.CONCAT, 0);
  }
  public COUNT(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.COUNT, 0);
  }
  public DATA(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.DATA, 0);
  }
  public DATEADD(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.DATEADD, 0);
  }
  public DATEDIFF(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.DATEDIFF, 0);
  }
  public DAYS(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.DAYS, 0);
  }
  public EMPTY(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.EMPTY, 0);
  }
  public EXIST(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.EXIST, 0);
  }
  public FILTER(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.FILTER, 0);
  }
  public GETDATE(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.GETDATE, 0);
  }
  public GETUTCDATE(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.GETUTCDATE, 0);
  }
  public GO(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.GO, 0);
  }
  public GO_BATCH(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.GO_BATCH, 0);
  }
  public INT(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.INT, 0);
  }
  public MAX(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.MAX, 0);
  }
  public MIN(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.MIN, 0);
  }
  public NEXT(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.NEXT, 0);
  }
  public ONLY(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.ONLY, 0);
  }
  public QUERY(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.QUERY, 0);
  }
  public ROW(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.ROW, 0);
  }
  public ROW_NUMBER(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.ROW_NUMBER, 0);
  }
  public ROWS(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.ROWS, 0);
  }
  public STDEV(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.STDEV, 0);
  }
  public STDEVP(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.STDEVP, 0);
  }
  public STRING_AGG(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.STRING_AGG, 0);
  }
  public SUM(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.SUM, 0);
  }
  public TAKE(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.TAKE, 0);
  }
  public THROW(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.THROW, 0);
  }
  public TIME(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.TIME, 0);
  }
  public TRY(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.TRY, 0);
  }
  public VALUE(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.VALUE, 0);
  }
  public VAR(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.VAR, 0);
  }
  public VARP(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.VARP, 0);
  }
  public BEFORE(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.BEFORE, 0);
  }
  public ENABLED(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.ENABLED, 0);
  }
  public ERROR(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.ERROR, 0);
  }
  public GET(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.GET, 0);
  }
  public IIF(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.IIF, 0);
  }
  public ISNULL(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.ISNULL, 0);
  }
  public SPLIT(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.SPLIT, 0);
  }
  public START(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.START, 0);
  }
  public STOP(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.STOP, 0);
  }
  public VARCHAR(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.VARCHAR, 0);
  }
  public NVARCHAR(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.NVARCHAR, 0);
  }
  public BINARY_KEYWORD(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.BINARY_KEYWORD, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_keyword;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterKeyword) {
      listener.enterKeyword(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitKeyword) {
      listener.exitKeyword(this);
    }
  }
}

export class IdContext extends ParserRuleContext {
  public ID(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.ID, 0);
  }
  public DOUBLE_QUOTE_ID(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.DOUBLE_QUOTE_ID, 0);
  }
  public SQUARE_BRACKET_ID(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.SQUARE_BRACKET_ID, 0);
  }
  public keyword(): KeywordContext | undefined {
    return this.tryGetRuleContext(0, KeywordContext);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_id;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterId) {
      listener.enterId(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitId) {
      listener.exitId(this);
    }
  }
}

export class Comparison_operatorContext extends ParserRuleContext {
  public EQUAL(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.EQUAL, 0);
  }
  public GREATER(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.GREATER, 0);
  }
  public LESS(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.LESS, 0);
  }
  public EXCLAMATION(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.EXCLAMATION, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_comparison_operator;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterComparison_operator) {
      listener.enterComparison_operator(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitComparison_operator) {
      listener.exitComparison_operator(this);
    }
  }
}

export class Assignment_operatorContext extends ParserRuleContext {
  public PLUS_ASSIGN(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.PLUS_ASSIGN, 0);
  }
  public MINUS_ASSIGN(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.MINUS_ASSIGN, 0);
  }
  public MULT_ASSIGN(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.MULT_ASSIGN, 0);
  }
  public DIV_ASSIGN(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.DIV_ASSIGN, 0);
  }
  public MOD_ASSIGN(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.MOD_ASSIGN, 0);
  }
  public AND_ASSIGN(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.AND_ASSIGN, 0);
  }
  public XOR_ASSIGN(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.XOR_ASSIGN, 0);
  }
  public OR_ASSIGN(): TerminalNode | undefined {
    return this.tryGetToken(AqlParser.OR_ASSIGN, 0);
  }
  constructor(parent: ParserRuleContext | undefined, invokingState: number) {
    super(parent, invokingState);
  }
  // @Override
  public get ruleIndex(): number {
    return AqlParser.RULE_assignment_operator;
  }
  // @Override
  public enterRule(listener: AqlParserListener): void {
    if (listener.enterAssignment_operator) {
      listener.enterAssignment_operator(this);
    }
  }
  // @Override
  public exitRule(listener: AqlParserListener): void {
    if (listener.exitAssignment_operator) {
      listener.exitAssignment_operator(this);
    }
  }
}
