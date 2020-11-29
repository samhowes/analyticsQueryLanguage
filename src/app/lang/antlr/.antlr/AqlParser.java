// Generated from /Users/samh/dev/analyticsQueryLanguage/src/app/lang/antlr/AqlParser.g4 by ANTLR 4.8
import org.antlr.v4.runtime.atn.*;
import org.antlr.v4.runtime.dfa.DFA;
import org.antlr.v4.runtime.*;
import org.antlr.v4.runtime.misc.*;
import org.antlr.v4.runtime.tree.*;
import java.util.List;
import java.util.Iterator;
import java.util.ArrayList;

@SuppressWarnings({"all", "warnings", "unchecked", "unused", "cast"})
public class AqlParser extends Parser {
	static { RuntimeMetaData.checkVersion("4.8", RuntimeMetaData.VERSION); }

	protected static final DFA[] _decisionToDFA;
	protected static final PredictionContextCache _sharedContextCache =
		new PredictionContextCache();
	public static final int
		AND=1, AS=2, ASC=3, BEGIN=4, BREAK=5, BY=6, CASE=7, COALESCE=8, CONTAINS=9, 
		CONTINUE=10, CONVERT=11, DECLARE=12, DEFAULT=13, DESC=14, DISTINCT=15, 
		DISTRIBUTED=16, ELSE=17, END=18, EXISTS=19, FOR=20, FROM=21, GROUP=22, 
		HAVING=23, IF=24, IN=25, INNER=26, INTO=27, IS=28, JOIN=29, LEFT=30, LIKE=31, 
		NOT=32, NULL=33, NULLIF=34, ON=35, OR=36, ORDER=37, OUTER=38, PERCENT=39, 
		PIVOT=40, PRINT=41, RAISERROR=42, RIGHT=43, ROWCOUNT=44, SELECT=45, SET=46, 
		THEN=47, TOP=48, UNPIVOT=49, WHEN=50, WHERE=51, WHILE=52, WITH=53, AFTER=54, 
		AGGREGATE=55, APPLY=56, AVG=57, BINARY_KEYWORD=58, CATCH=59, CONCAT=60, 
		COUNT=61, DATA=62, DATEADD=63, DATEDIFF=64, DAYS=65, EMPTY=66, EXIST=67, 
		FILTER=68, GETDATE=69, GETUTCDATE=70, GO_BATCH=71, GO=72, INT=73, MAX=74, 
		MIN=75, NEXT=76, ONLY=77, QUERY=78, ROW=79, ROW_NUMBER=80, ROWS=81, STDEV=82, 
		STDEVP=83, STRING_AGG=84, SUM=85, TAKE=86, THROW=87, TIME=88, TRY=89, 
		VALUE=90, VAR=91, VARP=92, BEFORE=93, ENABLED=94, ERROR=95, GET=96, IIF=97, 
		ISNULL=98, SPLIT=99, START=100, STOP=101, VARCHAR=102, NVARCHAR=103, SPACE=104, 
		COMMENT=105, LINE_COMMENT=106, DOUBLE_QUOTE_ID=107, SINGLE_QUOTE=108, 
		SQUARE_BRACKET_ID=109, LOCAL_ID=110, DECIMAL=111, ID=112, STRING=113, 
		BINARY=114, FLOAT=115, REAL=116, EQUAL=117, GREATER=118, LESS=119, EXCLAMATION=120, 
		PLUS_ASSIGN=121, MINUS_ASSIGN=122, MULT_ASSIGN=123, DIV_ASSIGN=124, MOD_ASSIGN=125, 
		AND_ASSIGN=126, XOR_ASSIGN=127, OR_ASSIGN=128, DOUBLE_BAR=129, DOT=130, 
		UNDERLINE=131, AT=132, SHARP=133, DOLLAR=134, LR_BRACKET=135, RR_BRACKET=136, 
		COMMA=137, SEMI=138, COLON=139, STAR=140, DIVIDE=141, MODULE=142, PLUS=143, 
		MINUS=144, BIT_NOT=145, BIT_OR=146, BIT_AND=147, BIT_XOR=148;
	public static final int
		RULE_tsql_file = 0, RULE_batch = 1, RULE_sql_clauses = 2, RULE_cfl_statement = 3, 
		RULE_block_statement = 4, RULE_break_statement = 5, RULE_continue_statement = 6, 
		RULE_if_statement = 7, RULE_throw_statement = 8, RULE_throw_error_number = 9, 
		RULE_throw_message = 10, RULE_throw_state = 11, RULE_try_catch_statement = 12, 
		RULE_while_statement = 13, RULE_print_statement = 14, RULE_raiseerror_statement = 15, 
		RULE_another_statement = 16, RULE_select_statement_standalone = 17, RULE_select_statement = 18, 
		RULE_set_statement = 19, RULE_go_batch_statement = 20, RULE_go_statement = 21, 
		RULE_set_special = 22, RULE_constant_LOCAL_ID = 23, RULE_expression = 24, 
		RULE_primitive_expression = 25, RULE_case_expression = 26, RULE_unary_operator_expression = 27, 
		RULE_bracket_expression = 28, RULE_constant_expression = 29, RULE_subquery = 30, 
		RULE_with_expression = 31, RULE_common_table_expression = 32, RULE_search_condition = 33, 
		RULE_predicate_br = 34, RULE_predicate = 35, RULE_query_expression = 36, 
		RULE_query_specification = 37, RULE_top_clause = 38, RULE_top_percent = 39, 
		RULE_top_count = 40, RULE_order_by_clause = 41, RULE_order_by_expression = 42, 
		RULE_group_by_item = 43, RULE_select_list = 44, RULE_asterisk = 45, RULE_column_elem = 46, 
		RULE_expression_elem = 47, RULE_select_list_elem = 48, RULE_table_sources = 49, 
		RULE_table_source = 50, RULE_table_source_item_joined = 51, RULE_table_source_item = 52, 
		RULE_join_part = 53, RULE_join_on = 54, RULE_pivot = 55, RULE_unpivot = 56, 
		RULE_pivot_clause = 57, RULE_unpivot_clause = 58, RULE_full_column_name_list = 59, 
		RULE_table_name_with_hint = 60, RULE_derived_table = 61, RULE_function_call = 62, 
		RULE_freetext_predicate = 63, RULE_build_in_functions = 64, RULE_value_call = 65, 
		RULE_query_call = 66, RULE_exist_call = 67, RULE_switch_section = 68, 
		RULE_switch_search_condition_section = 69, RULE_as_column_alias = 70, 
		RULE_as_table_alias = 71, RULE_table_alias = 72, RULE_column_alias_list = 73, 
		RULE_column_alias = 74, RULE_expression_list = 75, RULE_aggregate_windowed_function = 76, 
		RULE_all_distinct_expression = 77, RULE_full_table_name = 78, RULE_table_name = 79, 
		RULE_full_column_name = 80, RULE_column_name_list = 81, RULE_null_notnull = 82, 
		RULE_scalar_function_name = 83, RULE_data_type = 84, RULE_constant = 85, 
		RULE_sign = 86, RULE_keyword = 87, RULE_id = 88, RULE_comparison_operator = 89, 
		RULE_assignment_operator = 90;
	private static String[] makeRuleNames() {
		return new String[] {
			"tsql_file", "batch", "sql_clauses", "cfl_statement", "block_statement", 
			"break_statement", "continue_statement", "if_statement", "throw_statement", 
			"throw_error_number", "throw_message", "throw_state", "try_catch_statement", 
			"while_statement", "print_statement", "raiseerror_statement", "another_statement", 
			"select_statement_standalone", "select_statement", "set_statement", "go_batch_statement", 
			"go_statement", "set_special", "constant_LOCAL_ID", "expression", "primitive_expression", 
			"case_expression", "unary_operator_expression", "bracket_expression", 
			"constant_expression", "subquery", "with_expression", "common_table_expression", 
			"search_condition", "predicate_br", "predicate", "query_expression", 
			"query_specification", "top_clause", "top_percent", "top_count", "order_by_clause", 
			"order_by_expression", "group_by_item", "select_list", "asterisk", "column_elem", 
			"expression_elem", "select_list_elem", "table_sources", "table_source", 
			"table_source_item_joined", "table_source_item", "join_part", "join_on", 
			"pivot", "unpivot", "pivot_clause", "unpivot_clause", "full_column_name_list", 
			"table_name_with_hint", "derived_table", "function_call", "freetext_predicate", 
			"build_in_functions", "value_call", "query_call", "exist_call", "switch_section", 
			"switch_search_condition_section", "as_column_alias", "as_table_alias", 
			"table_alias", "column_alias_list", "column_alias", "expression_list", 
			"aggregate_windowed_function", "all_distinct_expression", "full_table_name", 
			"table_name", "full_column_name", "column_name_list", "null_notnull", 
			"scalar_function_name", "data_type", "constant", "sign", "keyword", "id", 
			"comparison_operator", "assignment_operator"
		};
	}
	public static final String[] ruleNames = makeRuleNames();

	private static String[] makeLiteralNames() {
		return new String[] {
			null, "'AND'", "'AS'", "'ASC'", "'BEGIN'", "'BREAK'", "'BY'", "'CASE'", 
			"'COALESCE'", "'CONTAINS'", "'CONTINUE'", null, "'DECLARE'", "'DEFAULT'", 
			"'DESC'", "'DISTINCT'", "'DISTRIBUTED'", "'ELSE'", "'END'", "'EXISTS'", 
			"'FOR'", "'FROM'", "'GROUP'", "'HAVING'", "'IF'", "'IN'", "'INNER'", 
			"'INTO'", "'IS'", "'JOIN'", "'LEFT'", "'LIKE'", "'NOT'", "'NULL'", "'NULLIF'", 
			"'ON'", "'OR'", "'ORDER'", "'OUTER'", "'PERCENT'", "'PIVOT'", "'PRINT'", 
			"'RAISERROR'", "'RIGHT'", "'ROWCOUNT'", "'SELECT'", "'SET'", "'THEN'", 
			"'TOP'", "'UNPIVOT'", "'WHEN'", "'WHERE'", "'WHILE'", "'WITH'", "'AFTER'", 
			"'AGGREGATE'", "'APPLY'", "'AVG'", "'BINARY'", "'CATCH'", "'CONCAT'", 
			"'COUNT'", "'DATA'", "'DATEADD'", "'DATEDIFF'", "'DAYS'", "'EMPTY'", 
			"'EXIST'", "'FILTER'", "'GETDATE'", "'GETUTCDATE'", null, "'GO'", "'INT'", 
			"'MAX'", "'MIN'", "'NEXT'", "'ONLY'", "'QUERY'", "'ROW'", "'ROW_NUMBER'", 
			"'ROWS'", "'STDEV'", "'STDEVP'", "'STRING_AGG'", "'SUM'", "'TAKE'", "'THROW'", 
			"'TIME'", "'TRY'", "'VALUE'", "'VAR'", "'VARP'", "'BEFORE'", "'ENABLED'", 
			"'ERROR'", "'GET'", "'IIF'", "'ISNULL'", "'SPLIT'", "'START'", "'STOP'", 
			"'VARCHAR'", "'NVARCHAR'", null, null, null, null, "'''", null, null, 
			null, null, null, null, null, null, "'='", "'>'", "'<'", "'!'", "'+='", 
			"'-='", "'*='", "'/='", "'%='", "'&='", "'^='", "'|='", "'||'", "'.'", 
			"'_'", "'@'", "'#'", "'$'", "'('", "')'", "','", "';'", "':'", "'*'", 
			"'/'", "'%'", "'+'", "'-'", "'~'", "'|'", "'&'", "'^'"
		};
	}
	private static final String[] _LITERAL_NAMES = makeLiteralNames();
	private static String[] makeSymbolicNames() {
		return new String[] {
			null, "AND", "AS", "ASC", "BEGIN", "BREAK", "BY", "CASE", "COALESCE", 
			"CONTAINS", "CONTINUE", "CONVERT", "DECLARE", "DEFAULT", "DESC", "DISTINCT", 
			"DISTRIBUTED", "ELSE", "END", "EXISTS", "FOR", "FROM", "GROUP", "HAVING", 
			"IF", "IN", "INNER", "INTO", "IS", "JOIN", "LEFT", "LIKE", "NOT", "NULL", 
			"NULLIF", "ON", "OR", "ORDER", "OUTER", "PERCENT", "PIVOT", "PRINT", 
			"RAISERROR", "RIGHT", "ROWCOUNT", "SELECT", "SET", "THEN", "TOP", "UNPIVOT", 
			"WHEN", "WHERE", "WHILE", "WITH", "AFTER", "AGGREGATE", "APPLY", "AVG", 
			"BINARY_KEYWORD", "CATCH", "CONCAT", "COUNT", "DATA", "DATEADD", "DATEDIFF", 
			"DAYS", "EMPTY", "EXIST", "FILTER", "GETDATE", "GETUTCDATE", "GO_BATCH", 
			"GO", "INT", "MAX", "MIN", "NEXT", "ONLY", "QUERY", "ROW", "ROW_NUMBER", 
			"ROWS", "STDEV", "STDEVP", "STRING_AGG", "SUM", "TAKE", "THROW", "TIME", 
			"TRY", "VALUE", "VAR", "VARP", "BEFORE", "ENABLED", "ERROR", "GET", "IIF", 
			"ISNULL", "SPLIT", "START", "STOP", "VARCHAR", "NVARCHAR", "SPACE", "COMMENT", 
			"LINE_COMMENT", "DOUBLE_QUOTE_ID", "SINGLE_QUOTE", "SQUARE_BRACKET_ID", 
			"LOCAL_ID", "DECIMAL", "ID", "STRING", "BINARY", "FLOAT", "REAL", "EQUAL", 
			"GREATER", "LESS", "EXCLAMATION", "PLUS_ASSIGN", "MINUS_ASSIGN", "MULT_ASSIGN", 
			"DIV_ASSIGN", "MOD_ASSIGN", "AND_ASSIGN", "XOR_ASSIGN", "OR_ASSIGN", 
			"DOUBLE_BAR", "DOT", "UNDERLINE", "AT", "SHARP", "DOLLAR", "LR_BRACKET", 
			"RR_BRACKET", "COMMA", "SEMI", "COLON", "STAR", "DIVIDE", "MODULE", "PLUS", 
			"MINUS", "BIT_NOT", "BIT_OR", "BIT_AND", "BIT_XOR"
		};
	}
	private static final String[] _SYMBOLIC_NAMES = makeSymbolicNames();
	public static final Vocabulary VOCABULARY = new VocabularyImpl(_LITERAL_NAMES, _SYMBOLIC_NAMES);

	/**
	 * @deprecated Use {@link #VOCABULARY} instead.
	 */
	@Deprecated
	public static final String[] tokenNames;
	static {
		tokenNames = new String[_SYMBOLIC_NAMES.length];
		for (int i = 0; i < tokenNames.length; i++) {
			tokenNames[i] = VOCABULARY.getLiteralName(i);
			if (tokenNames[i] == null) {
				tokenNames[i] = VOCABULARY.getSymbolicName(i);
			}

			if (tokenNames[i] == null) {
				tokenNames[i] = "<INVALID>";
			}
		}
	}

	@Override
	@Deprecated
	public String[] getTokenNames() {
		return tokenNames;
	}

	@Override

	public Vocabulary getVocabulary() {
		return VOCABULARY;
	}

	@Override
	public String getGrammarFileName() { return "AqlParser.g4"; }

	@Override
	public String[] getRuleNames() { return ruleNames; }

	@Override
	public String getSerializedATN() { return _serializedATN; }

	@Override
	public ATN getATN() { return _ATN; }

	public AqlParser(TokenStream input) {
		super(input);
		_interp = new ParserATNSimulator(this,_ATN,_decisionToDFA,_sharedContextCache);
	}

	public static class Tsql_fileContext extends ParserRuleContext {
		public TerminalNode EOF() { return getToken(AqlParser.EOF, 0); }
		public List<BatchContext> batch() {
			return getRuleContexts(BatchContext.class);
		}
		public BatchContext batch(int i) {
			return getRuleContext(BatchContext.class,i);
		}
		public Tsql_fileContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_tsql_file; }
	}

	public final Tsql_fileContext tsql_file() throws RecognitionException {
		Tsql_fileContext _localctx = new Tsql_fileContext(_ctx, getState());
		enterRule(_localctx, 0, RULE_tsql_file);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(185);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BEGIN) | (1L << BREAK) | (1L << CONTINUE) | (1L << IF) | (1L << PRINT) | (1L << RAISERROR) | (1L << SELECT) | (1L << SET) | (1L << WHILE) | (1L << WITH))) != 0) || ((((_la - 71)) & ~0x3f) == 0 && ((1L << (_la - 71)) & ((1L << (GO_BATCH - 71)) | (1L << (GO - 71)) | (1L << (THROW - 71)))) != 0) || _la==LR_BRACKET || _la==SEMI) {
				{
				{
				setState(182);
				batch();
				}
				}
				setState(187);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(188);
			match(EOF);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class BatchContext extends ParserRuleContext {
		public Go_batch_statementContext go_batch_statement() {
			return getRuleContext(Go_batch_statementContext.class,0);
		}
		public List<Go_statementContext> go_statement() {
			return getRuleContexts(Go_statementContext.class);
		}
		public Go_statementContext go_statement(int i) {
			return getRuleContext(Go_statementContext.class,i);
		}
		public List<Sql_clausesContext> sql_clauses() {
			return getRuleContexts(Sql_clausesContext.class);
		}
		public Sql_clausesContext sql_clauses(int i) {
			return getRuleContext(Sql_clausesContext.class,i);
		}
		public BatchContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_batch; }
	}

	public final BatchContext batch() throws RecognitionException {
		BatchContext _localctx = new BatchContext(_ctx, getState());
		enterRule(_localctx, 2, RULE_batch);
		try {
			int _alt;
			setState(206);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,4,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(190);
				go_batch_statement();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(197);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case GO_BATCH:
					{
					setState(191);
					go_batch_statement();
					}
					break;
				case BEGIN:
				case BREAK:
				case CONTINUE:
				case IF:
				case PRINT:
				case RAISERROR:
				case SELECT:
				case SET:
				case WHILE:
				case WITH:
				case THROW:
				case LR_BRACKET:
				case SEMI:
					{
					setState(193); 
					_errHandler.sync(this);
					_alt = 1;
					do {
						switch (_alt) {
						case 1:
							{
							{
							setState(192);
							sql_clauses();
							}
							}
							break;
						default:
							throw new NoViableAltException(this);
						}
						setState(195); 
						_errHandler.sync(this);
						_alt = getInterpreter().adaptivePredict(_input,1,_ctx);
					} while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER );
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(202);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,3,_ctx);
				while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
					if ( _alt==1 ) {
						{
						{
						setState(199);
						go_statement();
						}
						} 
					}
					setState(204);
					_errHandler.sync(this);
					_alt = getInterpreter().adaptivePredict(_input,3,_ctx);
				}
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(205);
				go_statement();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Sql_clausesContext extends ParserRuleContext {
		public Select_statement_standaloneContext select_statement_standalone() {
			return getRuleContext(Select_statement_standaloneContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(AqlParser.SEMI, 0); }
		public Cfl_statementContext cfl_statement() {
			return getRuleContext(Cfl_statementContext.class,0);
		}
		public Another_statementContext another_statement() {
			return getRuleContext(Another_statementContext.class,0);
		}
		public Sql_clausesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sql_clauses; }
	}

	public final Sql_clausesContext sql_clauses() throws RecognitionException {
		Sql_clausesContext _localctx = new Sql_clausesContext(_ctx, getState());
		enterRule(_localctx, 4, RULE_sql_clauses);
		try {
			setState(221);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case SELECT:
			case WITH:
			case LR_BRACKET:
				enterOuterAlt(_localctx, 1);
				{
				setState(208);
				select_statement_standalone();
				setState(210);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,5,_ctx) ) {
				case 1:
					{
					setState(209);
					match(SEMI);
					}
					break;
				}
				}
				break;
			case BEGIN:
			case BREAK:
			case CONTINUE:
			case IF:
			case PRINT:
			case RAISERROR:
			case WHILE:
			case THROW:
				enterOuterAlt(_localctx, 2);
				{
				setState(212);
				cfl_statement();
				setState(214);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,6,_ctx) ) {
				case 1:
					{
					setState(213);
					match(SEMI);
					}
					break;
				}
				}
				break;
			case SET:
				enterOuterAlt(_localctx, 3);
				{
				setState(216);
				another_statement();
				setState(218);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,7,_ctx) ) {
				case 1:
					{
					setState(217);
					match(SEMI);
					}
					break;
				}
				}
				break;
			case SEMI:
				enterOuterAlt(_localctx, 4);
				{
				setState(220);
				match(SEMI);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Cfl_statementContext extends ParserRuleContext {
		public Block_statementContext block_statement() {
			return getRuleContext(Block_statementContext.class,0);
		}
		public Break_statementContext break_statement() {
			return getRuleContext(Break_statementContext.class,0);
		}
		public Continue_statementContext continue_statement() {
			return getRuleContext(Continue_statementContext.class,0);
		}
		public If_statementContext if_statement() {
			return getRuleContext(If_statementContext.class,0);
		}
		public Throw_statementContext throw_statement() {
			return getRuleContext(Throw_statementContext.class,0);
		}
		public Try_catch_statementContext try_catch_statement() {
			return getRuleContext(Try_catch_statementContext.class,0);
		}
		public While_statementContext while_statement() {
			return getRuleContext(While_statementContext.class,0);
		}
		public Print_statementContext print_statement() {
			return getRuleContext(Print_statementContext.class,0);
		}
		public Raiseerror_statementContext raiseerror_statement() {
			return getRuleContext(Raiseerror_statementContext.class,0);
		}
		public Cfl_statementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_cfl_statement; }
	}

	public final Cfl_statementContext cfl_statement() throws RecognitionException {
		Cfl_statementContext _localctx = new Cfl_statementContext(_ctx, getState());
		enterRule(_localctx, 6, RULE_cfl_statement);
		try {
			setState(232);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,9,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(223);
				block_statement();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(224);
				break_statement();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(225);
				continue_statement();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(226);
				if_statement();
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(227);
				throw_statement();
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(228);
				try_catch_statement();
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(229);
				while_statement();
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(230);
				print_statement();
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(231);
				raiseerror_statement();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Block_statementContext extends ParserRuleContext {
		public TerminalNode BEGIN() { return getToken(AqlParser.BEGIN, 0); }
		public TerminalNode END() { return getToken(AqlParser.END, 0); }
		public List<TerminalNode> SEMI() { return getTokens(AqlParser.SEMI); }
		public TerminalNode SEMI(int i) {
			return getToken(AqlParser.SEMI, i);
		}
		public List<Sql_clausesContext> sql_clauses() {
			return getRuleContexts(Sql_clausesContext.class);
		}
		public Sql_clausesContext sql_clauses(int i) {
			return getRuleContext(Sql_clausesContext.class,i);
		}
		public Block_statementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_block_statement; }
	}

	public final Block_statementContext block_statement() throws RecognitionException {
		Block_statementContext _localctx = new Block_statementContext(_ctx, getState());
		enterRule(_localctx, 8, RULE_block_statement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(234);
			match(BEGIN);
			setState(236);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,10,_ctx) ) {
			case 1:
				{
				setState(235);
				match(SEMI);
				}
				break;
			}
			setState(241);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BEGIN) | (1L << BREAK) | (1L << CONTINUE) | (1L << IF) | (1L << PRINT) | (1L << RAISERROR) | (1L << SELECT) | (1L << SET) | (1L << WHILE) | (1L << WITH))) != 0) || ((((_la - 87)) & ~0x3f) == 0 && ((1L << (_la - 87)) & ((1L << (THROW - 87)) | (1L << (LR_BRACKET - 87)) | (1L << (SEMI - 87)))) != 0)) {
				{
				{
				setState(238);
				sql_clauses();
				}
				}
				setState(243);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(244);
			match(END);
			setState(246);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,12,_ctx) ) {
			case 1:
				{
				setState(245);
				match(SEMI);
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Break_statementContext extends ParserRuleContext {
		public TerminalNode BREAK() { return getToken(AqlParser.BREAK, 0); }
		public TerminalNode SEMI() { return getToken(AqlParser.SEMI, 0); }
		public Break_statementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_break_statement; }
	}

	public final Break_statementContext break_statement() throws RecognitionException {
		Break_statementContext _localctx = new Break_statementContext(_ctx, getState());
		enterRule(_localctx, 10, RULE_break_statement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(248);
			match(BREAK);
			setState(250);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,13,_ctx) ) {
			case 1:
				{
				setState(249);
				match(SEMI);
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Continue_statementContext extends ParserRuleContext {
		public TerminalNode CONTINUE() { return getToken(AqlParser.CONTINUE, 0); }
		public TerminalNode SEMI() { return getToken(AqlParser.SEMI, 0); }
		public Continue_statementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_continue_statement; }
	}

	public final Continue_statementContext continue_statement() throws RecognitionException {
		Continue_statementContext _localctx = new Continue_statementContext(_ctx, getState());
		enterRule(_localctx, 12, RULE_continue_statement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(252);
			match(CONTINUE);
			setState(254);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,14,_ctx) ) {
			case 1:
				{
				setState(253);
				match(SEMI);
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class If_statementContext extends ParserRuleContext {
		public TerminalNode IF() { return getToken(AqlParser.IF, 0); }
		public Search_conditionContext search_condition() {
			return getRuleContext(Search_conditionContext.class,0);
		}
		public List<Sql_clausesContext> sql_clauses() {
			return getRuleContexts(Sql_clausesContext.class);
		}
		public Sql_clausesContext sql_clauses(int i) {
			return getRuleContext(Sql_clausesContext.class,i);
		}
		public TerminalNode ELSE() { return getToken(AqlParser.ELSE, 0); }
		public TerminalNode SEMI() { return getToken(AqlParser.SEMI, 0); }
		public If_statementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_if_statement; }
	}

	public final If_statementContext if_statement() throws RecognitionException {
		If_statementContext _localctx = new If_statementContext(_ctx, getState());
		enterRule(_localctx, 14, RULE_if_statement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(256);
			match(IF);
			setState(257);
			search_condition();
			setState(258);
			sql_clauses();
			setState(261);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,15,_ctx) ) {
			case 1:
				{
				setState(259);
				match(ELSE);
				setState(260);
				sql_clauses();
				}
				break;
			}
			setState(264);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,16,_ctx) ) {
			case 1:
				{
				setState(263);
				match(SEMI);
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Throw_statementContext extends ParserRuleContext {
		public TerminalNode THROW() { return getToken(AqlParser.THROW, 0); }
		public Throw_error_numberContext throw_error_number() {
			return getRuleContext(Throw_error_numberContext.class,0);
		}
		public List<TerminalNode> COMMA() { return getTokens(AqlParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(AqlParser.COMMA, i);
		}
		public Throw_messageContext throw_message() {
			return getRuleContext(Throw_messageContext.class,0);
		}
		public Throw_stateContext throw_state() {
			return getRuleContext(Throw_stateContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(AqlParser.SEMI, 0); }
		public Throw_statementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_throw_statement; }
	}

	public final Throw_statementContext throw_statement() throws RecognitionException {
		Throw_statementContext _localctx = new Throw_statementContext(_ctx, getState());
		enterRule(_localctx, 16, RULE_throw_statement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(266);
			match(THROW);
			setState(273);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LOCAL_ID || _la==DECIMAL) {
				{
				setState(267);
				throw_error_number();
				setState(268);
				match(COMMA);
				setState(269);
				throw_message();
				setState(270);
				match(COMMA);
				setState(271);
				throw_state();
				}
			}

			setState(276);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,18,_ctx) ) {
			case 1:
				{
				setState(275);
				match(SEMI);
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Throw_error_numberContext extends ParserRuleContext {
		public TerminalNode DECIMAL() { return getToken(AqlParser.DECIMAL, 0); }
		public TerminalNode LOCAL_ID() { return getToken(AqlParser.LOCAL_ID, 0); }
		public Throw_error_numberContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_throw_error_number; }
	}

	public final Throw_error_numberContext throw_error_number() throws RecognitionException {
		Throw_error_numberContext _localctx = new Throw_error_numberContext(_ctx, getState());
		enterRule(_localctx, 18, RULE_throw_error_number);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(278);
			_la = _input.LA(1);
			if ( !(_la==LOCAL_ID || _la==DECIMAL) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Throw_messageContext extends ParserRuleContext {
		public TerminalNode STRING() { return getToken(AqlParser.STRING, 0); }
		public TerminalNode LOCAL_ID() { return getToken(AqlParser.LOCAL_ID, 0); }
		public Throw_messageContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_throw_message; }
	}

	public final Throw_messageContext throw_message() throws RecognitionException {
		Throw_messageContext _localctx = new Throw_messageContext(_ctx, getState());
		enterRule(_localctx, 20, RULE_throw_message);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(280);
			_la = _input.LA(1);
			if ( !(_la==LOCAL_ID || _la==STRING) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Throw_stateContext extends ParserRuleContext {
		public TerminalNode DECIMAL() { return getToken(AqlParser.DECIMAL, 0); }
		public TerminalNode LOCAL_ID() { return getToken(AqlParser.LOCAL_ID, 0); }
		public Throw_stateContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_throw_state; }
	}

	public final Throw_stateContext throw_state() throws RecognitionException {
		Throw_stateContext _localctx = new Throw_stateContext(_ctx, getState());
		enterRule(_localctx, 22, RULE_throw_state);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(282);
			_la = _input.LA(1);
			if ( !(_la==LOCAL_ID || _la==DECIMAL) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Try_catch_statementContext extends ParserRuleContext {
		public Sql_clausesContext try_clauses;
		public Sql_clausesContext catch_clauses;
		public List<TerminalNode> BEGIN() { return getTokens(AqlParser.BEGIN); }
		public TerminalNode BEGIN(int i) {
			return getToken(AqlParser.BEGIN, i);
		}
		public List<TerminalNode> TRY() { return getTokens(AqlParser.TRY); }
		public TerminalNode TRY(int i) {
			return getToken(AqlParser.TRY, i);
		}
		public List<TerminalNode> END() { return getTokens(AqlParser.END); }
		public TerminalNode END(int i) {
			return getToken(AqlParser.END, i);
		}
		public List<TerminalNode> CATCH() { return getTokens(AqlParser.CATCH); }
		public TerminalNode CATCH(int i) {
			return getToken(AqlParser.CATCH, i);
		}
		public List<TerminalNode> SEMI() { return getTokens(AqlParser.SEMI); }
		public TerminalNode SEMI(int i) {
			return getToken(AqlParser.SEMI, i);
		}
		public List<Sql_clausesContext> sql_clauses() {
			return getRuleContexts(Sql_clausesContext.class);
		}
		public Sql_clausesContext sql_clauses(int i) {
			return getRuleContext(Sql_clausesContext.class,i);
		}
		public Try_catch_statementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_try_catch_statement; }
	}

	public final Try_catch_statementContext try_catch_statement() throws RecognitionException {
		Try_catch_statementContext _localctx = new Try_catch_statementContext(_ctx, getState());
		enterRule(_localctx, 24, RULE_try_catch_statement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(284);
			match(BEGIN);
			setState(285);
			match(TRY);
			setState(287);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,19,_ctx) ) {
			case 1:
				{
				setState(286);
				match(SEMI);
				}
				break;
			}
			setState(290); 
			_errHandler.sync(this);
			_la = _input.LA(1);
			do {
				{
				{
				setState(289);
				((Try_catch_statementContext)_localctx).try_clauses = sql_clauses();
				}
				}
				setState(292); 
				_errHandler.sync(this);
				_la = _input.LA(1);
			} while ( (((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BEGIN) | (1L << BREAK) | (1L << CONTINUE) | (1L << IF) | (1L << PRINT) | (1L << RAISERROR) | (1L << SELECT) | (1L << SET) | (1L << WHILE) | (1L << WITH))) != 0) || ((((_la - 87)) & ~0x3f) == 0 && ((1L << (_la - 87)) & ((1L << (THROW - 87)) | (1L << (LR_BRACKET - 87)) | (1L << (SEMI - 87)))) != 0) );
			setState(294);
			match(END);
			setState(295);
			match(TRY);
			setState(297);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==SEMI) {
				{
				setState(296);
				match(SEMI);
				}
			}

			setState(299);
			match(BEGIN);
			setState(300);
			match(CATCH);
			setState(302);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,22,_ctx) ) {
			case 1:
				{
				setState(301);
				match(SEMI);
				}
				break;
			}
			setState(307);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << BEGIN) | (1L << BREAK) | (1L << CONTINUE) | (1L << IF) | (1L << PRINT) | (1L << RAISERROR) | (1L << SELECT) | (1L << SET) | (1L << WHILE) | (1L << WITH))) != 0) || ((((_la - 87)) & ~0x3f) == 0 && ((1L << (_la - 87)) & ((1L << (THROW - 87)) | (1L << (LR_BRACKET - 87)) | (1L << (SEMI - 87)))) != 0)) {
				{
				{
				setState(304);
				((Try_catch_statementContext)_localctx).catch_clauses = sql_clauses();
				}
				}
				setState(309);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(310);
			match(END);
			setState(311);
			match(CATCH);
			setState(313);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,24,_ctx) ) {
			case 1:
				{
				setState(312);
				match(SEMI);
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class While_statementContext extends ParserRuleContext {
		public TerminalNode WHILE() { return getToken(AqlParser.WHILE, 0); }
		public Search_conditionContext search_condition() {
			return getRuleContext(Search_conditionContext.class,0);
		}
		public Sql_clausesContext sql_clauses() {
			return getRuleContext(Sql_clausesContext.class,0);
		}
		public TerminalNode BREAK() { return getToken(AqlParser.BREAK, 0); }
		public TerminalNode CONTINUE() { return getToken(AqlParser.CONTINUE, 0); }
		public TerminalNode SEMI() { return getToken(AqlParser.SEMI, 0); }
		public While_statementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_while_statement; }
	}

	public final While_statementContext while_statement() throws RecognitionException {
		While_statementContext _localctx = new While_statementContext(_ctx, getState());
		enterRule(_localctx, 26, RULE_while_statement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(315);
			match(WHILE);
			setState(316);
			search_condition();
			setState(326);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,27,_ctx) ) {
			case 1:
				{
				setState(317);
				sql_clauses();
				}
				break;
			case 2:
				{
				setState(318);
				match(BREAK);
				setState(320);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,25,_ctx) ) {
				case 1:
					{
					setState(319);
					match(SEMI);
					}
					break;
				}
				}
				break;
			case 3:
				{
				setState(322);
				match(CONTINUE);
				setState(324);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,26,_ctx) ) {
				case 1:
					{
					setState(323);
					match(SEMI);
					}
					break;
				}
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Print_statementContext extends ParserRuleContext {
		public TerminalNode PRINT() { return getToken(AqlParser.PRINT, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode DOUBLE_QUOTE_ID() { return getToken(AqlParser.DOUBLE_QUOTE_ID, 0); }
		public List<TerminalNode> COMMA() { return getTokens(AqlParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(AqlParser.COMMA, i);
		}
		public List<TerminalNode> LOCAL_ID() { return getTokens(AqlParser.LOCAL_ID); }
		public TerminalNode LOCAL_ID(int i) {
			return getToken(AqlParser.LOCAL_ID, i);
		}
		public TerminalNode SEMI() { return getToken(AqlParser.SEMI, 0); }
		public Print_statementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_print_statement; }
	}

	public final Print_statementContext print_statement() throws RecognitionException {
		Print_statementContext _localctx = new Print_statementContext(_ctx, getState());
		enterRule(_localctx, 28, RULE_print_statement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(328);
			match(PRINT);
			setState(331);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,28,_ctx) ) {
			case 1:
				{
				setState(329);
				expression(0);
				}
				break;
			case 2:
				{
				setState(330);
				match(DOUBLE_QUOTE_ID);
				}
				break;
			}
			setState(337);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(333);
				match(COMMA);
				setState(334);
				match(LOCAL_ID);
				}
				}
				setState(339);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(341);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,30,_ctx) ) {
			case 1:
				{
				setState(340);
				match(SEMI);
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Raiseerror_statementContext extends ParserRuleContext {
		public Token msg;
		public Token formatstring;
		public Token argument;
		public TerminalNode RAISERROR() { return getToken(AqlParser.RAISERROR, 0); }
		public TerminalNode LR_BRACKET() { return getToken(AqlParser.LR_BRACKET, 0); }
		public TerminalNode RR_BRACKET() { return getToken(AqlParser.RR_BRACKET, 0); }
		public List<TerminalNode> DECIMAL() { return getTokens(AqlParser.DECIMAL); }
		public TerminalNode DECIMAL(int i) {
			return getToken(AqlParser.DECIMAL, i);
		}
		public List<TerminalNode> STRING() { return getTokens(AqlParser.STRING); }
		public TerminalNode STRING(int i) {
			return getToken(AqlParser.STRING, i);
		}
		public List<TerminalNode> LOCAL_ID() { return getTokens(AqlParser.LOCAL_ID); }
		public TerminalNode LOCAL_ID(int i) {
			return getToken(AqlParser.LOCAL_ID, i);
		}
		public TerminalNode SEMI() { return getToken(AqlParser.SEMI, 0); }
		public TerminalNode DOUBLE_QUOTE_ID() { return getToken(AqlParser.DOUBLE_QUOTE_ID, 0); }
		public List<TerminalNode> COMMA() { return getTokens(AqlParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(AqlParser.COMMA, i);
		}
		public Raiseerror_statementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_raiseerror_statement; }
	}

	public final Raiseerror_statementContext raiseerror_statement() throws RecognitionException {
		Raiseerror_statementContext _localctx = new Raiseerror_statementContext(_ctx, getState());
		enterRule(_localctx, 30, RULE_raiseerror_statement);
		int _la;
		try {
			setState(360);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,33,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(343);
				match(RAISERROR);
				setState(344);
				match(LR_BRACKET);
				setState(345);
				((Raiseerror_statementContext)_localctx).msg = _input.LT(1);
				_la = _input.LA(1);
				if ( !(((((_la - 110)) & ~0x3f) == 0 && ((1L << (_la - 110)) & ((1L << (LOCAL_ID - 110)) | (1L << (DECIMAL - 110)) | (1L << (STRING - 110)))) != 0)) ) {
					((Raiseerror_statementContext)_localctx).msg = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(346);
				match(RR_BRACKET);
				setState(348);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,31,_ctx) ) {
				case 1:
					{
					setState(347);
					match(SEMI);
					}
					break;
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(350);
				match(RAISERROR);
				setState(351);
				match(DECIMAL);
				setState(352);
				((Raiseerror_statementContext)_localctx).formatstring = _input.LT(1);
				_la = _input.LA(1);
				if ( !(((((_la - 107)) & ~0x3f) == 0 && ((1L << (_la - 107)) & ((1L << (DOUBLE_QUOTE_ID - 107)) | (1L << (LOCAL_ID - 107)) | (1L << (STRING - 107)))) != 0)) ) {
					((Raiseerror_statementContext)_localctx).formatstring = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(357);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(353);
					match(COMMA);
					setState(354);
					((Raiseerror_statementContext)_localctx).argument = _input.LT(1);
					_la = _input.LA(1);
					if ( !(((((_la - 110)) & ~0x3f) == 0 && ((1L << (_la - 110)) & ((1L << (LOCAL_ID - 110)) | (1L << (DECIMAL - 110)) | (1L << (STRING - 110)))) != 0)) ) {
						((Raiseerror_statementContext)_localctx).argument = (Token)_errHandler.recoverInline(this);
					}
					else {
						if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
						_errHandler.reportMatch(this);
						consume();
					}
					}
					}
					setState(359);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Another_statementContext extends ParserRuleContext {
		public Set_statementContext set_statement() {
			return getRuleContext(Set_statementContext.class,0);
		}
		public Another_statementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_another_statement; }
	}

	public final Another_statementContext another_statement() throws RecognitionException {
		Another_statementContext _localctx = new Another_statementContext(_ctx, getState());
		enterRule(_localctx, 32, RULE_another_statement);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(362);
			set_statement();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Select_statement_standaloneContext extends ParserRuleContext {
		public Select_statementContext select_statement() {
			return getRuleContext(Select_statementContext.class,0);
		}
		public With_expressionContext with_expression() {
			return getRuleContext(With_expressionContext.class,0);
		}
		public Select_statement_standaloneContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_select_statement_standalone; }
	}

	public final Select_statement_standaloneContext select_statement_standalone() throws RecognitionException {
		Select_statement_standaloneContext _localctx = new Select_statement_standaloneContext(_ctx, getState());
		enterRule(_localctx, 34, RULE_select_statement_standalone);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(365);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==WITH) {
				{
				setState(364);
				with_expression();
				}
			}

			setState(367);
			select_statement();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Select_statementContext extends ParserRuleContext {
		public Query_expressionContext query_expression() {
			return getRuleContext(Query_expressionContext.class,0);
		}
		public Order_by_clauseContext order_by_clause() {
			return getRuleContext(Order_by_clauseContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(AqlParser.SEMI, 0); }
		public Select_statementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_select_statement; }
	}

	public final Select_statementContext select_statement() throws RecognitionException {
		Select_statementContext _localctx = new Select_statementContext(_ctx, getState());
		enterRule(_localctx, 36, RULE_select_statement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(369);
			query_expression();
			setState(371);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==ORDER) {
				{
				setState(370);
				order_by_clause();
				}
			}

			setState(374);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,36,_ctx) ) {
			case 1:
				{
				setState(373);
				match(SEMI);
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Set_statementContext extends ParserRuleContext {
		public IdContext member_name;
		public TerminalNode SET() { return getToken(AqlParser.SET, 0); }
		public TerminalNode LOCAL_ID() { return getToken(AqlParser.LOCAL_ID, 0); }
		public TerminalNode EQUAL() { return getToken(AqlParser.EQUAL, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode DOT() { return getToken(AqlParser.DOT, 0); }
		public TerminalNode SEMI() { return getToken(AqlParser.SEMI, 0); }
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public Assignment_operatorContext assignment_operator() {
			return getRuleContext(Assignment_operatorContext.class,0);
		}
		public Set_specialContext set_special() {
			return getRuleContext(Set_specialContext.class,0);
		}
		public Set_statementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_set_statement; }
	}

	public final Set_statementContext set_statement() throws RecognitionException {
		Set_statementContext _localctx = new Set_statementContext(_ctx, getState());
		enterRule(_localctx, 38, RULE_set_statement);
		int _la;
		try {
			setState(395);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,40,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(376);
				match(SET);
				setState(377);
				match(LOCAL_ID);
				setState(380);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==DOT) {
					{
					setState(378);
					match(DOT);
					setState(379);
					((Set_statementContext)_localctx).member_name = id();
					}
				}

				setState(382);
				match(EQUAL);
				setState(383);
				expression(0);
				setState(385);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,38,_ctx) ) {
				case 1:
					{
					setState(384);
					match(SEMI);
					}
					break;
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(387);
				match(SET);
				setState(388);
				match(LOCAL_ID);
				setState(389);
				assignment_operator();
				setState(390);
				expression(0);
				setState(392);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,39,_ctx) ) {
				case 1:
					{
					setState(391);
					match(SEMI);
					}
					break;
				}
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(394);
				set_special();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Go_batch_statementContext extends ParserRuleContext {
		public Token count;
		public TerminalNode GO_BATCH() { return getToken(AqlParser.GO_BATCH, 0); }
		public TerminalNode DECIMAL() { return getToken(AqlParser.DECIMAL, 0); }
		public Go_batch_statementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_go_batch_statement; }
	}

	public final Go_batch_statementContext go_batch_statement() throws RecognitionException {
		Go_batch_statementContext _localctx = new Go_batch_statementContext(_ctx, getState());
		enterRule(_localctx, 40, RULE_go_batch_statement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(397);
			match(GO_BATCH);
			setState(399);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==DECIMAL) {
				{
				setState(398);
				((Go_batch_statementContext)_localctx).count = match(DECIMAL);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Go_statementContext extends ParserRuleContext {
		public Token count;
		public TerminalNode GO() { return getToken(AqlParser.GO, 0); }
		public TerminalNode DECIMAL() { return getToken(AqlParser.DECIMAL, 0); }
		public Go_statementContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_go_statement; }
	}

	public final Go_statementContext go_statement() throws RecognitionException {
		Go_statementContext _localctx = new Go_statementContext(_ctx, getState());
		enterRule(_localctx, 42, RULE_go_statement);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(401);
			match(GO);
			setState(403);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==DECIMAL) {
				{
				setState(402);
				((Go_statementContext)_localctx).count = match(DECIMAL);
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Set_specialContext extends ParserRuleContext {
		public TerminalNode SET() { return getToken(AqlParser.SET, 0); }
		public List<IdContext> id() {
			return getRuleContexts(IdContext.class);
		}
		public IdContext id(int i) {
			return getRuleContext(IdContext.class,i);
		}
		public Constant_LOCAL_IDContext constant_LOCAL_ID() {
			return getRuleContext(Constant_LOCAL_IDContext.class,0);
		}
		public TerminalNode SEMI() { return getToken(AqlParser.SEMI, 0); }
		public TerminalNode ROWCOUNT() { return getToken(AqlParser.ROWCOUNT, 0); }
		public TerminalNode LOCAL_ID() { return getToken(AqlParser.LOCAL_ID, 0); }
		public TerminalNode DECIMAL() { return getToken(AqlParser.DECIMAL, 0); }
		public Set_specialContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_set_special; }
	}

	public final Set_specialContext set_special() throws RecognitionException {
		Set_specialContext _localctx = new Set_specialContext(_ctx, getState());
		enterRule(_localctx, 44, RULE_set_special);
		int _la;
		try {
			setState(420);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,46,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(405);
				match(SET);
				setState(406);
				id();
				setState(409);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case AFTER:
				case AGGREGATE:
				case APPLY:
				case AVG:
				case BINARY_KEYWORD:
				case CATCH:
				case CONCAT:
				case COUNT:
				case DATA:
				case DATEADD:
				case DATEDIFF:
				case DAYS:
				case EMPTY:
				case EXIST:
				case FILTER:
				case GETDATE:
				case GETUTCDATE:
				case GO_BATCH:
				case GO:
				case INT:
				case MAX:
				case MIN:
				case NEXT:
				case ONLY:
				case QUERY:
				case ROW:
				case ROW_NUMBER:
				case ROWS:
				case STDEV:
				case STDEVP:
				case STRING_AGG:
				case SUM:
				case TAKE:
				case THROW:
				case TIME:
				case TRY:
				case VALUE:
				case VAR:
				case VARP:
				case BEFORE:
				case ENABLED:
				case ERROR:
				case GET:
				case IIF:
				case ISNULL:
				case SPLIT:
				case START:
				case STOP:
				case VARCHAR:
				case NVARCHAR:
				case DOUBLE_QUOTE_ID:
				case SQUARE_BRACKET_ID:
				case ID:
					{
					setState(407);
					id();
					}
					break;
				case LOCAL_ID:
				case DECIMAL:
				case STRING:
				case BINARY:
				case FLOAT:
				case REAL:
				case DOLLAR:
				case PLUS:
				case MINUS:
					{
					setState(408);
					constant_LOCAL_ID();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(412);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,44,_ctx) ) {
				case 1:
					{
					setState(411);
					match(SEMI);
					}
					break;
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(414);
				match(SET);
				setState(415);
				match(ROWCOUNT);
				setState(416);
				_la = _input.LA(1);
				if ( !(_la==LOCAL_ID || _la==DECIMAL) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(418);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,45,_ctx) ) {
				case 1:
					{
					setState(417);
					match(SEMI);
					}
					break;
				}
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Constant_LOCAL_IDContext extends ParserRuleContext {
		public ConstantContext constant() {
			return getRuleContext(ConstantContext.class,0);
		}
		public TerminalNode LOCAL_ID() { return getToken(AqlParser.LOCAL_ID, 0); }
		public Constant_LOCAL_IDContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_constant_LOCAL_ID; }
	}

	public final Constant_LOCAL_IDContext constant_LOCAL_ID() throws RecognitionException {
		Constant_LOCAL_IDContext _localctx = new Constant_LOCAL_IDContext(_ctx, getState());
		enterRule(_localctx, 46, RULE_constant_LOCAL_ID);
		try {
			setState(424);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case DECIMAL:
			case STRING:
			case BINARY:
			case FLOAT:
			case REAL:
			case DOLLAR:
			case PLUS:
			case MINUS:
				enterOuterAlt(_localctx, 1);
				{
				setState(422);
				constant();
				}
				break;
			case LOCAL_ID:
				enterOuterAlt(_localctx, 2);
				{
				setState(423);
				match(LOCAL_ID);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ExpressionContext extends ParserRuleContext {
		public Token op;
		public Primitive_expressionContext primitive_expression() {
			return getRuleContext(Primitive_expressionContext.class,0);
		}
		public Function_callContext function_call() {
			return getRuleContext(Function_callContext.class,0);
		}
		public Case_expressionContext case_expression() {
			return getRuleContext(Case_expressionContext.class,0);
		}
		public Full_column_nameContext full_column_name() {
			return getRuleContext(Full_column_nameContext.class,0);
		}
		public Bracket_expressionContext bracket_expression() {
			return getRuleContext(Bracket_expressionContext.class,0);
		}
		public Unary_operator_expressionContext unary_operator_expression() {
			return getRuleContext(Unary_operator_expressionContext.class,0);
		}
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode STAR() { return getToken(AqlParser.STAR, 0); }
		public TerminalNode DIVIDE() { return getToken(AqlParser.DIVIDE, 0); }
		public TerminalNode MODULE() { return getToken(AqlParser.MODULE, 0); }
		public TerminalNode PLUS() { return getToken(AqlParser.PLUS, 0); }
		public TerminalNode MINUS() { return getToken(AqlParser.MINUS, 0); }
		public TerminalNode BIT_AND() { return getToken(AqlParser.BIT_AND, 0); }
		public TerminalNode BIT_XOR() { return getToken(AqlParser.BIT_XOR, 0); }
		public TerminalNode BIT_OR() { return getToken(AqlParser.BIT_OR, 0); }
		public TerminalNode DOUBLE_BAR() { return getToken(AqlParser.DOUBLE_BAR, 0); }
		public TerminalNode DOT() { return getToken(AqlParser.DOT, 0); }
		public Value_callContext value_call() {
			return getRuleContext(Value_callContext.class,0);
		}
		public Query_callContext query_call() {
			return getRuleContext(Query_callContext.class,0);
		}
		public Exist_callContext exist_call() {
			return getRuleContext(Exist_callContext.class,0);
		}
		public ExpressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression; }
	}

	public final ExpressionContext expression() throws RecognitionException {
		return expression(0);
	}

	private ExpressionContext expression(int _p) throws RecognitionException {
		ParserRuleContext _parentctx = _ctx;
		int _parentState = getState();
		ExpressionContext _localctx = new ExpressionContext(_ctx, _parentState);
		ExpressionContext _prevctx = _localctx;
		int _startState = 48;
		enterRecursionRule(_localctx, 48, RULE_expression, _p);
		int _la;
		try {
			int _alt;
			enterOuterAlt(_localctx, 1);
			{
			setState(433);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,48,_ctx) ) {
			case 1:
				{
				setState(427);
				primitive_expression();
				}
				break;
			case 2:
				{
				setState(428);
				function_call();
				}
				break;
			case 3:
				{
				setState(429);
				case_expression();
				}
				break;
			case 4:
				{
				setState(430);
				full_column_name();
				}
				break;
			case 5:
				{
				setState(431);
				bracket_expression();
				}
				break;
			case 6:
				{
				setState(432);
				unary_operator_expression();
				}
				break;
			}
			_ctx.stop = _input.LT(-1);
			setState(450);
			_errHandler.sync(this);
			_alt = getInterpreter().adaptivePredict(_input,51,_ctx);
			while ( _alt!=2 && _alt!=org.antlr.v4.runtime.atn.ATN.INVALID_ALT_NUMBER ) {
				if ( _alt==1 ) {
					if ( _parseListeners!=null ) triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					setState(448);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,50,_ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(435);
						if (!(precpred(_ctx, 2))) throw new FailedPredicateException(this, "precpred(_ctx, 2)");
						setState(436);
						((ExpressionContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !(((((_la - 140)) & ~0x3f) == 0 && ((1L << (_la - 140)) & ((1L << (STAR - 140)) | (1L << (DIVIDE - 140)) | (1L << (MODULE - 140)))) != 0)) ) {
							((ExpressionContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(437);
						expression(3);
						}
						break;
					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(438);
						if (!(precpred(_ctx, 1))) throw new FailedPredicateException(this, "precpred(_ctx, 1)");
						setState(439);
						((ExpressionContext)_localctx).op = _input.LT(1);
						_la = _input.LA(1);
						if ( !(((((_la - 129)) & ~0x3f) == 0 && ((1L << (_la - 129)) & ((1L << (DOUBLE_BAR - 129)) | (1L << (PLUS - 129)) | (1L << (MINUS - 129)) | (1L << (BIT_OR - 129)) | (1L << (BIT_AND - 129)) | (1L << (BIT_XOR - 129)))) != 0)) ) {
							((ExpressionContext)_localctx).op = (Token)_errHandler.recoverInline(this);
						}
						else {
							if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
							_errHandler.reportMatch(this);
							consume();
						}
						setState(440);
						expression(2);
						}
						break;
					case 3:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						pushNewRecursionContext(_localctx, _startState, RULE_expression);
						setState(441);
						if (!(precpred(_ctx, 7))) throw new FailedPredicateException(this, "precpred(_ctx, 7)");
						setState(442);
						match(DOT);
						setState(446);
						_errHandler.sync(this);
						switch (_input.LA(1)) {
						case VALUE:
							{
							setState(443);
							value_call();
							}
							break;
						case QUERY:
							{
							setState(444);
							query_call();
							}
							break;
						case EXIST:
							{
							setState(445);
							exist_call();
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
				setState(452);
				_errHandler.sync(this);
				_alt = getInterpreter().adaptivePredict(_input,51,_ctx);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}

	public static class Primitive_expressionContext extends ParserRuleContext {
		public TerminalNode DEFAULT() { return getToken(AqlParser.DEFAULT, 0); }
		public TerminalNode NULL() { return getToken(AqlParser.NULL, 0); }
		public TerminalNode LOCAL_ID() { return getToken(AqlParser.LOCAL_ID, 0); }
		public ConstantContext constant() {
			return getRuleContext(ConstantContext.class,0);
		}
		public Primitive_expressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_primitive_expression; }
	}

	public final Primitive_expressionContext primitive_expression() throws RecognitionException {
		Primitive_expressionContext _localctx = new Primitive_expressionContext(_ctx, getState());
		enterRule(_localctx, 50, RULE_primitive_expression);
		try {
			setState(457);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case DEFAULT:
				enterOuterAlt(_localctx, 1);
				{
				setState(453);
				match(DEFAULT);
				}
				break;
			case NULL:
				enterOuterAlt(_localctx, 2);
				{
				setState(454);
				match(NULL);
				}
				break;
			case LOCAL_ID:
				enterOuterAlt(_localctx, 3);
				{
				setState(455);
				match(LOCAL_ID);
				}
				break;
			case DECIMAL:
			case STRING:
			case BINARY:
			case FLOAT:
			case REAL:
			case DOLLAR:
			case PLUS:
			case MINUS:
				enterOuterAlt(_localctx, 4);
				{
				setState(456);
				constant();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Case_expressionContext extends ParserRuleContext {
		public ExpressionContext caseExpr;
		public ExpressionContext elseExpr;
		public TerminalNode CASE() { return getToken(AqlParser.CASE, 0); }
		public TerminalNode END() { return getToken(AqlParser.END, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public List<Switch_sectionContext> switch_section() {
			return getRuleContexts(Switch_sectionContext.class);
		}
		public Switch_sectionContext switch_section(int i) {
			return getRuleContext(Switch_sectionContext.class,i);
		}
		public TerminalNode ELSE() { return getToken(AqlParser.ELSE, 0); }
		public List<Switch_search_condition_sectionContext> switch_search_condition_section() {
			return getRuleContexts(Switch_search_condition_sectionContext.class);
		}
		public Switch_search_condition_sectionContext switch_search_condition_section(int i) {
			return getRuleContext(Switch_search_condition_sectionContext.class,i);
		}
		public Case_expressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_case_expression; }
	}

	public final Case_expressionContext case_expression() throws RecognitionException {
		Case_expressionContext _localctx = new Case_expressionContext(_ctx, getState());
		enterRule(_localctx, 52, RULE_case_expression);
		int _la;
		try {
			setState(484);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,57,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(459);
				match(CASE);
				setState(460);
				((Case_expressionContext)_localctx).caseExpr = expression(0);
				setState(462); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(461);
					switch_section();
					}
					}
					setState(464); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==WHEN );
				setState(468);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==ELSE) {
					{
					setState(466);
					match(ELSE);
					setState(467);
					((Case_expressionContext)_localctx).elseExpr = expression(0);
					}
				}

				setState(470);
				match(END);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(472);
				match(CASE);
				setState(474); 
				_errHandler.sync(this);
				_la = _input.LA(1);
				do {
					{
					{
					setState(473);
					switch_search_condition_section();
					}
					}
					setState(476); 
					_errHandler.sync(this);
					_la = _input.LA(1);
				} while ( _la==WHEN );
				setState(480);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==ELSE) {
					{
					setState(478);
					match(ELSE);
					setState(479);
					((Case_expressionContext)_localctx).elseExpr = expression(0);
					}
				}

				setState(482);
				match(END);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Unary_operator_expressionContext extends ParserRuleContext {
		public Token op;
		public TerminalNode BIT_NOT() { return getToken(AqlParser.BIT_NOT, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode PLUS() { return getToken(AqlParser.PLUS, 0); }
		public TerminalNode MINUS() { return getToken(AqlParser.MINUS, 0); }
		public Unary_operator_expressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_unary_operator_expression; }
	}

	public final Unary_operator_expressionContext unary_operator_expression() throws RecognitionException {
		Unary_operator_expressionContext _localctx = new Unary_operator_expressionContext(_ctx, getState());
		enterRule(_localctx, 54, RULE_unary_operator_expression);
		int _la;
		try {
			setState(490);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case BIT_NOT:
				enterOuterAlt(_localctx, 1);
				{
				setState(486);
				match(BIT_NOT);
				setState(487);
				expression(0);
				}
				break;
			case PLUS:
			case MINUS:
				enterOuterAlt(_localctx, 2);
				{
				setState(488);
				((Unary_operator_expressionContext)_localctx).op = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==PLUS || _la==MINUS) ) {
					((Unary_operator_expressionContext)_localctx).op = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(489);
				expression(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Bracket_expressionContext extends ParserRuleContext {
		public TerminalNode LR_BRACKET() { return getToken(AqlParser.LR_BRACKET, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode RR_BRACKET() { return getToken(AqlParser.RR_BRACKET, 0); }
		public SubqueryContext subquery() {
			return getRuleContext(SubqueryContext.class,0);
		}
		public Bracket_expressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_bracket_expression; }
	}

	public final Bracket_expressionContext bracket_expression() throws RecognitionException {
		Bracket_expressionContext _localctx = new Bracket_expressionContext(_ctx, getState());
		enterRule(_localctx, 56, RULE_bracket_expression);
		try {
			setState(500);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,59,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(492);
				match(LR_BRACKET);
				setState(493);
				expression(0);
				setState(494);
				match(RR_BRACKET);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(496);
				match(LR_BRACKET);
				setState(497);
				subquery();
				setState(498);
				match(RR_BRACKET);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Constant_expressionContext extends ParserRuleContext {
		public TerminalNode NULL() { return getToken(AqlParser.NULL, 0); }
		public ConstantContext constant() {
			return getRuleContext(ConstantContext.class,0);
		}
		public Function_callContext function_call() {
			return getRuleContext(Function_callContext.class,0);
		}
		public TerminalNode LOCAL_ID() { return getToken(AqlParser.LOCAL_ID, 0); }
		public TerminalNode LR_BRACKET() { return getToken(AqlParser.LR_BRACKET, 0); }
		public Constant_expressionContext constant_expression() {
			return getRuleContext(Constant_expressionContext.class,0);
		}
		public TerminalNode RR_BRACKET() { return getToken(AqlParser.RR_BRACKET, 0); }
		public Constant_expressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_constant_expression; }
	}

	public final Constant_expressionContext constant_expression() throws RecognitionException {
		Constant_expressionContext _localctx = new Constant_expressionContext(_ctx, getState());
		enterRule(_localctx, 58, RULE_constant_expression);
		try {
			setState(510);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case NULL:
				enterOuterAlt(_localctx, 1);
				{
				setState(502);
				match(NULL);
				}
				break;
			case DECIMAL:
			case STRING:
			case BINARY:
			case FLOAT:
			case REAL:
			case DOLLAR:
			case PLUS:
			case MINUS:
				enterOuterAlt(_localctx, 2);
				{
				setState(503);
				constant();
				}
				break;
			case COALESCE:
			case CONVERT:
			case LEFT:
			case NULLIF:
			case RIGHT:
			case AVG:
			case COUNT:
			case DATEADD:
			case DATEDIFF:
			case GETDATE:
			case GETUTCDATE:
			case MAX:
			case MIN:
			case STDEV:
			case STDEVP:
			case STRING_AGG:
			case SUM:
			case VAR:
			case VARP:
			case IIF:
			case ISNULL:
				enterOuterAlt(_localctx, 3);
				{
				setState(504);
				function_call();
				}
				break;
			case LOCAL_ID:
				enterOuterAlt(_localctx, 4);
				{
				setState(505);
				match(LOCAL_ID);
				}
				break;
			case LR_BRACKET:
				enterOuterAlt(_localctx, 5);
				{
				setState(506);
				match(LR_BRACKET);
				setState(507);
				constant_expression();
				setState(508);
				match(RR_BRACKET);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SubqueryContext extends ParserRuleContext {
		public Select_statementContext select_statement() {
			return getRuleContext(Select_statementContext.class,0);
		}
		public SubqueryContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_subquery; }
	}

	public final SubqueryContext subquery() throws RecognitionException {
		SubqueryContext _localctx = new SubqueryContext(_ctx, getState());
		enterRule(_localctx, 60, RULE_subquery);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(512);
			select_statement();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class With_expressionContext extends ParserRuleContext {
		public Common_table_expressionContext common_table_expression;
		public List<Common_table_expressionContext> ctes = new ArrayList<Common_table_expressionContext>();
		public TerminalNode WITH() { return getToken(AqlParser.WITH, 0); }
		public List<Common_table_expressionContext> common_table_expression() {
			return getRuleContexts(Common_table_expressionContext.class);
		}
		public Common_table_expressionContext common_table_expression(int i) {
			return getRuleContext(Common_table_expressionContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(AqlParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(AqlParser.COMMA, i);
		}
		public With_expressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_with_expression; }
	}

	public final With_expressionContext with_expression() throws RecognitionException {
		With_expressionContext _localctx = new With_expressionContext(_ctx, getState());
		enterRule(_localctx, 62, RULE_with_expression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(514);
			match(WITH);
			setState(515);
			((With_expressionContext)_localctx).common_table_expression = common_table_expression();
			((With_expressionContext)_localctx).ctes.add(((With_expressionContext)_localctx).common_table_expression);
			setState(520);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(516);
				match(COMMA);
				setState(517);
				((With_expressionContext)_localctx).common_table_expression = common_table_expression();
				((With_expressionContext)_localctx).ctes.add(((With_expressionContext)_localctx).common_table_expression);
				}
				}
				setState(522);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Common_table_expressionContext extends ParserRuleContext {
		public IdContext expression_name;
		public Column_name_listContext columns;
		public Select_statementContext cte_query;
		public TerminalNode AS() { return getToken(AqlParser.AS, 0); }
		public List<TerminalNode> LR_BRACKET() { return getTokens(AqlParser.LR_BRACKET); }
		public TerminalNode LR_BRACKET(int i) {
			return getToken(AqlParser.LR_BRACKET, i);
		}
		public List<TerminalNode> RR_BRACKET() { return getTokens(AqlParser.RR_BRACKET); }
		public TerminalNode RR_BRACKET(int i) {
			return getToken(AqlParser.RR_BRACKET, i);
		}
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public Select_statementContext select_statement() {
			return getRuleContext(Select_statementContext.class,0);
		}
		public Column_name_listContext column_name_list() {
			return getRuleContext(Column_name_listContext.class,0);
		}
		public Common_table_expressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_common_table_expression; }
	}

	public final Common_table_expressionContext common_table_expression() throws RecognitionException {
		Common_table_expressionContext _localctx = new Common_table_expressionContext(_ctx, getState());
		enterRule(_localctx, 64, RULE_common_table_expression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(523);
			((Common_table_expressionContext)_localctx).expression_name = id();
			setState(528);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==LR_BRACKET) {
				{
				setState(524);
				match(LR_BRACKET);
				setState(525);
				((Common_table_expressionContext)_localctx).columns = column_name_list();
				setState(526);
				match(RR_BRACKET);
				}
			}

			setState(530);
			match(AS);
			setState(531);
			match(LR_BRACKET);
			setState(532);
			((Common_table_expressionContext)_localctx).cte_query = select_statement();
			setState(533);
			match(RR_BRACKET);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Search_conditionContext extends ParserRuleContext {
		public Predicate_brContext predicate_br;
		public List<Predicate_brContext> pred = new ArrayList<Predicate_brContext>();
		public Token log;
		public List<Predicate_brContext> predicate_br() {
			return getRuleContexts(Predicate_brContext.class);
		}
		public Predicate_brContext predicate_br(int i) {
			return getRuleContext(Predicate_brContext.class,i);
		}
		public List<TerminalNode> OR() { return getTokens(AqlParser.OR); }
		public TerminalNode OR(int i) {
			return getToken(AqlParser.OR, i);
		}
		public List<TerminalNode> AND() { return getTokens(AqlParser.AND); }
		public TerminalNode AND(int i) {
			return getToken(AqlParser.AND, i);
		}
		public Search_conditionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_search_condition; }
	}

	public final Search_conditionContext search_condition() throws RecognitionException {
		Search_conditionContext _localctx = new Search_conditionContext(_ctx, getState());
		enterRule(_localctx, 66, RULE_search_condition);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(535);
			((Search_conditionContext)_localctx).predicate_br = predicate_br();
			((Search_conditionContext)_localctx).pred.add(((Search_conditionContext)_localctx).predicate_br);
			setState(540);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==AND || _la==OR) {
				{
				{
				setState(536);
				((Search_conditionContext)_localctx).log = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==AND || _la==OR) ) {
					((Search_conditionContext)_localctx).log = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(537);
				((Search_conditionContext)_localctx).predicate_br = predicate_br();
				((Search_conditionContext)_localctx).pred.add(((Search_conditionContext)_localctx).predicate_br);
				}
				}
				setState(542);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Predicate_brContext extends ParserRuleContext {
		public PredicateContext predicate() {
			return getRuleContext(PredicateContext.class,0);
		}
		public List<TerminalNode> NOT() { return getTokens(AqlParser.NOT); }
		public TerminalNode NOT(int i) {
			return getToken(AqlParser.NOT, i);
		}
		public TerminalNode LR_BRACKET() { return getToken(AqlParser.LR_BRACKET, 0); }
		public Search_conditionContext search_condition() {
			return getRuleContext(Search_conditionContext.class,0);
		}
		public TerminalNode RR_BRACKET() { return getToken(AqlParser.RR_BRACKET, 0); }
		public Predicate_brContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_predicate_br; }
	}

	public final Predicate_brContext predicate_br() throws RecognitionException {
		Predicate_brContext _localctx = new Predicate_brContext(_ctx, getState());
		enterRule(_localctx, 68, RULE_predicate_br);
		int _la;
		try {
			setState(560);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,66,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(546);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==NOT) {
					{
					{
					setState(543);
					match(NOT);
					}
					}
					setState(548);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(549);
				predicate();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(553);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==NOT) {
					{
					{
					setState(550);
					match(NOT);
					}
					}
					setState(555);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(556);
				match(LR_BRACKET);
				setState(557);
				search_condition();
				setState(558);
				match(RR_BRACKET);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PredicateContext extends ParserRuleContext {
		public TerminalNode EXISTS() { return getToken(AqlParser.EXISTS, 0); }
		public TerminalNode LR_BRACKET() { return getToken(AqlParser.LR_BRACKET, 0); }
		public SubqueryContext subquery() {
			return getRuleContext(SubqueryContext.class,0);
		}
		public TerminalNode RR_BRACKET() { return getToken(AqlParser.RR_BRACKET, 0); }
		public Freetext_predicateContext freetext_predicate() {
			return getRuleContext(Freetext_predicateContext.class,0);
		}
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public Comparison_operatorContext comparison_operator() {
			return getRuleContext(Comparison_operatorContext.class,0);
		}
		public TerminalNode IN() { return getToken(AqlParser.IN, 0); }
		public Expression_listContext expression_list() {
			return getRuleContext(Expression_listContext.class,0);
		}
		public List<TerminalNode> NOT() { return getTokens(AqlParser.NOT); }
		public TerminalNode NOT(int i) {
			return getToken(AqlParser.NOT, i);
		}
		public TerminalNode IS() { return getToken(AqlParser.IS, 0); }
		public Null_notnullContext null_notnull() {
			return getRuleContext(Null_notnullContext.class,0);
		}
		public PredicateContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_predicate; }
	}

	public final PredicateContext predicate() throws RecognitionException {
		PredicateContext _localctx = new PredicateContext(_ctx, getState());
		enterRule(_localctx, 70, RULE_predicate);
		int _la;
		try {
			setState(591);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,69,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(562);
				match(EXISTS);
				setState(563);
				match(LR_BRACKET);
				setState(564);
				subquery();
				setState(565);
				match(RR_BRACKET);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(567);
				freetext_predicate();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(568);
				expression(0);
				setState(569);
				comparison_operator();
				setState(570);
				expression(0);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(572);
				expression(0);
				setState(576);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==NOT) {
					{
					{
					setState(573);
					match(NOT);
					}
					}
					setState(578);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(579);
				match(IN);
				setState(580);
				match(LR_BRACKET);
				setState(583);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,68,_ctx) ) {
				case 1:
					{
					setState(581);
					subquery();
					}
					break;
				case 2:
					{
					setState(582);
					expression_list();
					}
					break;
				}
				setState(585);
				match(RR_BRACKET);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(587);
				expression(0);
				setState(588);
				match(IS);
				setState(589);
				null_notnull();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Query_expressionContext extends ParserRuleContext {
		public Query_specificationContext query_specification() {
			return getRuleContext(Query_specificationContext.class,0);
		}
		public TerminalNode LR_BRACKET() { return getToken(AqlParser.LR_BRACKET, 0); }
		public Query_expressionContext query_expression() {
			return getRuleContext(Query_expressionContext.class,0);
		}
		public TerminalNode RR_BRACKET() { return getToken(AqlParser.RR_BRACKET, 0); }
		public Order_by_clauseContext order_by_clause() {
			return getRuleContext(Order_by_clauseContext.class,0);
		}
		public Query_expressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_query_expression; }
	}

	public final Query_expressionContext query_expression() throws RecognitionException {
		Query_expressionContext _localctx = new Query_expressionContext(_ctx, getState());
		enterRule(_localctx, 72, RULE_query_expression);
		try {
			setState(604);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,72,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(598);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case SELECT:
					{
					setState(593);
					query_specification();
					}
					break;
				case LR_BRACKET:
					{
					setState(594);
					match(LR_BRACKET);
					setState(595);
					query_expression();
					setState(596);
					match(RR_BRACKET);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(600);
				query_specification();
				setState(602);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,71,_ctx) ) {
				case 1:
					{
					setState(601);
					order_by_clause();
					}
					break;
				}
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Query_specificationContext extends ParserRuleContext {
		public Top_clauseContext top;
		public Select_listContext columns;
		public Table_nameContext into;
		public Table_sourcesContext from;
		public Search_conditionContext where;
		public Group_by_itemContext group_by_item;
		public List<Group_by_itemContext> groupBys = new ArrayList<Group_by_itemContext>();
		public Search_conditionContext having;
		public TerminalNode SELECT() { return getToken(AqlParser.SELECT, 0); }
		public Select_listContext select_list() {
			return getRuleContext(Select_listContext.class,0);
		}
		public TerminalNode DISTINCT() { return getToken(AqlParser.DISTINCT, 0); }
		public TerminalNode INTO() { return getToken(AqlParser.INTO, 0); }
		public TerminalNode FROM() { return getToken(AqlParser.FROM, 0); }
		public TerminalNode WHERE() { return getToken(AqlParser.WHERE, 0); }
		public TerminalNode GROUP() { return getToken(AqlParser.GROUP, 0); }
		public TerminalNode BY() { return getToken(AqlParser.BY, 0); }
		public TerminalNode HAVING() { return getToken(AqlParser.HAVING, 0); }
		public Top_clauseContext top_clause() {
			return getRuleContext(Top_clauseContext.class,0);
		}
		public Table_nameContext table_name() {
			return getRuleContext(Table_nameContext.class,0);
		}
		public Table_sourcesContext table_sources() {
			return getRuleContext(Table_sourcesContext.class,0);
		}
		public List<Search_conditionContext> search_condition() {
			return getRuleContexts(Search_conditionContext.class);
		}
		public Search_conditionContext search_condition(int i) {
			return getRuleContext(Search_conditionContext.class,i);
		}
		public List<Group_by_itemContext> group_by_item() {
			return getRuleContexts(Group_by_itemContext.class);
		}
		public Group_by_itemContext group_by_item(int i) {
			return getRuleContext(Group_by_itemContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(AqlParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(AqlParser.COMMA, i);
		}
		public Query_specificationContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_query_specification; }
	}

	public final Query_specificationContext query_specification() throws RecognitionException {
		Query_specificationContext _localctx = new Query_specificationContext(_ctx, getState());
		enterRule(_localctx, 74, RULE_query_specification);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(606);
			match(SELECT);
			setState(608);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==DISTINCT) {
				{
				setState(607);
				match(DISTINCT);
				}
			}

			setState(611);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==TOP) {
				{
				setState(610);
				((Query_specificationContext)_localctx).top = top_clause();
				}
			}

			setState(613);
			((Query_specificationContext)_localctx).columns = select_list();
			setState(616);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==INTO) {
				{
				setState(614);
				match(INTO);
				setState(615);
				((Query_specificationContext)_localctx).into = table_name();
				}
			}

			setState(620);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==FROM) {
				{
				setState(618);
				match(FROM);
				setState(619);
				((Query_specificationContext)_localctx).from = table_sources();
				}
			}

			setState(624);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==WHERE) {
				{
				setState(622);
				match(WHERE);
				setState(623);
				((Query_specificationContext)_localctx).where = search_condition();
				}
			}

			setState(636);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==GROUP) {
				{
				setState(626);
				match(GROUP);
				setState(627);
				match(BY);
				setState(628);
				((Query_specificationContext)_localctx).group_by_item = group_by_item();
				((Query_specificationContext)_localctx).groupBys.add(((Query_specificationContext)_localctx).group_by_item);
				setState(633);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(629);
					match(COMMA);
					setState(630);
					((Query_specificationContext)_localctx).group_by_item = group_by_item();
					((Query_specificationContext)_localctx).groupBys.add(((Query_specificationContext)_localctx).group_by_item);
					}
					}
					setState(635);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				}
			}

			setState(640);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==HAVING) {
				{
				setState(638);
				match(HAVING);
				setState(639);
				((Query_specificationContext)_localctx).having = search_condition();
				}
			}

			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Top_clauseContext extends ParserRuleContext {
		public TerminalNode TOP() { return getToken(AqlParser.TOP, 0); }
		public Top_percentContext top_percent() {
			return getRuleContext(Top_percentContext.class,0);
		}
		public Top_countContext top_count() {
			return getRuleContext(Top_countContext.class,0);
		}
		public Top_clauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_top_clause; }
	}

	public final Top_clauseContext top_clause() throws RecognitionException {
		Top_clauseContext _localctx = new Top_clauseContext(_ctx, getState());
		enterRule(_localctx, 76, RULE_top_clause);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(642);
			match(TOP);
			setState(645);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,81,_ctx) ) {
			case 1:
				{
				setState(643);
				top_percent();
				}
				break;
			case 2:
				{
				setState(644);
				top_count();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Top_percentContext extends ParserRuleContext {
		public ExpressionContext topper_expression;
		public TerminalNode DECIMAL() { return getToken(AqlParser.DECIMAL, 0); }
		public TerminalNode PERCENT() { return getToken(AqlParser.PERCENT, 0); }
		public TerminalNode LR_BRACKET() { return getToken(AqlParser.LR_BRACKET, 0); }
		public TerminalNode RR_BRACKET() { return getToken(AqlParser.RR_BRACKET, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public Top_percentContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_top_percent; }
	}

	public final Top_percentContext top_percent() throws RecognitionException {
		Top_percentContext _localctx = new Top_percentContext(_ctx, getState());
		enterRule(_localctx, 78, RULE_top_percent);
		try {
			setState(654);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case DECIMAL:
				enterOuterAlt(_localctx, 1);
				{
				setState(647);
				match(DECIMAL);
				setState(648);
				match(PERCENT);
				}
				break;
			case LR_BRACKET:
				enterOuterAlt(_localctx, 2);
				{
				setState(649);
				match(LR_BRACKET);
				setState(650);
				((Top_percentContext)_localctx).topper_expression = expression(0);
				setState(651);
				match(RR_BRACKET);
				setState(652);
				match(PERCENT);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Top_countContext extends ParserRuleContext {
		public Token count_constant;
		public ExpressionContext topcount_expression;
		public TerminalNode DECIMAL() { return getToken(AqlParser.DECIMAL, 0); }
		public TerminalNode LR_BRACKET() { return getToken(AqlParser.LR_BRACKET, 0); }
		public TerminalNode RR_BRACKET() { return getToken(AqlParser.RR_BRACKET, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public Top_countContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_top_count; }
	}

	public final Top_countContext top_count() throws RecognitionException {
		Top_countContext _localctx = new Top_countContext(_ctx, getState());
		enterRule(_localctx, 80, RULE_top_count);
		try {
			setState(661);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case DECIMAL:
				enterOuterAlt(_localctx, 1);
				{
				setState(656);
				((Top_countContext)_localctx).count_constant = match(DECIMAL);
				}
				break;
			case LR_BRACKET:
				enterOuterAlt(_localctx, 2);
				{
				setState(657);
				match(LR_BRACKET);
				setState(658);
				((Top_countContext)_localctx).topcount_expression = expression(0);
				setState(659);
				match(RR_BRACKET);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Order_by_clauseContext extends ParserRuleContext {
		public Order_by_expressionContext order_by_expression;
		public List<Order_by_expressionContext> order_bys = new ArrayList<Order_by_expressionContext>();
		public TerminalNode ORDER() { return getToken(AqlParser.ORDER, 0); }
		public TerminalNode BY() { return getToken(AqlParser.BY, 0); }
		public List<Order_by_expressionContext> order_by_expression() {
			return getRuleContexts(Order_by_expressionContext.class);
		}
		public Order_by_expressionContext order_by_expression(int i) {
			return getRuleContext(Order_by_expressionContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(AqlParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(AqlParser.COMMA, i);
		}
		public Order_by_clauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_order_by_clause; }
	}

	public final Order_by_clauseContext order_by_clause() throws RecognitionException {
		Order_by_clauseContext _localctx = new Order_by_clauseContext(_ctx, getState());
		enterRule(_localctx, 82, RULE_order_by_clause);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(663);
			match(ORDER);
			setState(664);
			match(BY);
			setState(665);
			((Order_by_clauseContext)_localctx).order_by_expression = order_by_expression();
			((Order_by_clauseContext)_localctx).order_bys.add(((Order_by_clauseContext)_localctx).order_by_expression);
			setState(670);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(666);
				match(COMMA);
				setState(667);
				((Order_by_clauseContext)_localctx).order_by_expression = order_by_expression();
				((Order_by_clauseContext)_localctx).order_bys.add(((Order_by_clauseContext)_localctx).order_by_expression);
				}
				}
				setState(672);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Order_by_expressionContext extends ParserRuleContext {
		public ExpressionContext order_by;
		public Token ascending;
		public Token descending;
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode ASC() { return getToken(AqlParser.ASC, 0); }
		public TerminalNode DESC() { return getToken(AqlParser.DESC, 0); }
		public Order_by_expressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_order_by_expression; }
	}

	public final Order_by_expressionContext order_by_expression() throws RecognitionException {
		Order_by_expressionContext _localctx = new Order_by_expressionContext(_ctx, getState());
		enterRule(_localctx, 84, RULE_order_by_expression);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(673);
			((Order_by_expressionContext)_localctx).order_by = expression(0);
			setState(676);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ASC:
				{
				setState(674);
				((Order_by_expressionContext)_localctx).ascending = match(ASC);
				}
				break;
			case DESC:
				{
				setState(675);
				((Order_by_expressionContext)_localctx).descending = match(DESC);
				}
				break;
			case EOF:
			case BEGIN:
			case BREAK:
			case CONTINUE:
			case ELSE:
			case END:
			case IF:
			case ORDER:
			case PRINT:
			case RAISERROR:
			case SELECT:
			case SET:
			case WHILE:
			case WITH:
			case GO_BATCH:
			case GO:
			case THROW:
			case LR_BRACKET:
			case RR_BRACKET:
			case COMMA:
			case SEMI:
				break;
			default:
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Group_by_itemContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public Group_by_itemContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_group_by_item; }
	}

	public final Group_by_itemContext group_by_item() throws RecognitionException {
		Group_by_itemContext _localctx = new Group_by_itemContext(_ctx, getState());
		enterRule(_localctx, 86, RULE_group_by_item);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(678);
			expression(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Select_listContext extends ParserRuleContext {
		public Select_list_elemContext select_list_elem;
		public List<Select_list_elemContext> selectElement = new ArrayList<Select_list_elemContext>();
		public List<Select_list_elemContext> select_list_elem() {
			return getRuleContexts(Select_list_elemContext.class);
		}
		public Select_list_elemContext select_list_elem(int i) {
			return getRuleContext(Select_list_elemContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(AqlParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(AqlParser.COMMA, i);
		}
		public Select_listContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_select_list; }
	}

	public final Select_listContext select_list() throws RecognitionException {
		Select_listContext _localctx = new Select_listContext(_ctx, getState());
		enterRule(_localctx, 88, RULE_select_list);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(680);
			((Select_listContext)_localctx).select_list_elem = select_list_elem();
			((Select_listContext)_localctx).selectElement.add(((Select_listContext)_localctx).select_list_elem);
			setState(685);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(681);
				match(COMMA);
				setState(682);
				((Select_listContext)_localctx).select_list_elem = select_list_elem();
				((Select_listContext)_localctx).selectElement.add(((Select_listContext)_localctx).select_list_elem);
				}
				}
				setState(687);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class AsteriskContext extends ParserRuleContext {
		public TerminalNode STAR() { return getToken(AqlParser.STAR, 0); }
		public Table_nameContext table_name() {
			return getRuleContext(Table_nameContext.class,0);
		}
		public TerminalNode DOT() { return getToken(AqlParser.DOT, 0); }
		public AsteriskContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_asterisk; }
	}

	public final AsteriskContext asterisk() throws RecognitionException {
		AsteriskContext _localctx = new AsteriskContext(_ctx, getState());
		enterRule(_localctx, 90, RULE_asterisk);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(691);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (((((_la - 54)) & ~0x3f) == 0 && ((1L << (_la - 54)) & ((1L << (AFTER - 54)) | (1L << (AGGREGATE - 54)) | (1L << (APPLY - 54)) | (1L << (AVG - 54)) | (1L << (BINARY_KEYWORD - 54)) | (1L << (CATCH - 54)) | (1L << (CONCAT - 54)) | (1L << (COUNT - 54)) | (1L << (DATA - 54)) | (1L << (DATEADD - 54)) | (1L << (DATEDIFF - 54)) | (1L << (DAYS - 54)) | (1L << (EMPTY - 54)) | (1L << (EXIST - 54)) | (1L << (FILTER - 54)) | (1L << (GETDATE - 54)) | (1L << (GETUTCDATE - 54)) | (1L << (GO_BATCH - 54)) | (1L << (GO - 54)) | (1L << (INT - 54)) | (1L << (MAX - 54)) | (1L << (MIN - 54)) | (1L << (NEXT - 54)) | (1L << (ONLY - 54)) | (1L << (QUERY - 54)) | (1L << (ROW - 54)) | (1L << (ROW_NUMBER - 54)) | (1L << (ROWS - 54)) | (1L << (STDEV - 54)) | (1L << (STDEVP - 54)) | (1L << (STRING_AGG - 54)) | (1L << (SUM - 54)) | (1L << (TAKE - 54)) | (1L << (THROW - 54)) | (1L << (TIME - 54)) | (1L << (TRY - 54)) | (1L << (VALUE - 54)) | (1L << (VAR - 54)) | (1L << (VARP - 54)) | (1L << (BEFORE - 54)) | (1L << (ENABLED - 54)) | (1L << (ERROR - 54)) | (1L << (GET - 54)) | (1L << (IIF - 54)) | (1L << (ISNULL - 54)) | (1L << (SPLIT - 54)) | (1L << (START - 54)) | (1L << (STOP - 54)) | (1L << (VARCHAR - 54)) | (1L << (NVARCHAR - 54)) | (1L << (DOUBLE_QUOTE_ID - 54)) | (1L << (SQUARE_BRACKET_ID - 54)) | (1L << (ID - 54)))) != 0) || _la==DOT) {
				{
				setState(688);
				table_name();
				setState(689);
				match(DOT);
				}
			}

			setState(693);
			match(STAR);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Column_elemContext extends ParserRuleContext {
		public Full_column_nameContext full_column_name() {
			return getRuleContext(Full_column_nameContext.class,0);
		}
		public TerminalNode NULL() { return getToken(AqlParser.NULL, 0); }
		public As_column_aliasContext as_column_alias() {
			return getRuleContext(As_column_aliasContext.class,0);
		}
		public Column_elemContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_column_elem; }
	}

	public final Column_elemContext column_elem() throws RecognitionException {
		Column_elemContext _localctx = new Column_elemContext(_ctx, getState());
		enterRule(_localctx, 92, RULE_column_elem);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(697);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case AFTER:
			case AGGREGATE:
			case APPLY:
			case AVG:
			case BINARY_KEYWORD:
			case CATCH:
			case CONCAT:
			case COUNT:
			case DATA:
			case DATEADD:
			case DATEDIFF:
			case DAYS:
			case EMPTY:
			case EXIST:
			case FILTER:
			case GETDATE:
			case GETUTCDATE:
			case GO_BATCH:
			case GO:
			case INT:
			case MAX:
			case MIN:
			case NEXT:
			case ONLY:
			case QUERY:
			case ROW:
			case ROW_NUMBER:
			case ROWS:
			case STDEV:
			case STDEVP:
			case STRING_AGG:
			case SUM:
			case TAKE:
			case THROW:
			case TIME:
			case TRY:
			case VALUE:
			case VAR:
			case VARP:
			case BEFORE:
			case ENABLED:
			case ERROR:
			case GET:
			case IIF:
			case ISNULL:
			case SPLIT:
			case START:
			case STOP:
			case VARCHAR:
			case NVARCHAR:
			case DOUBLE_QUOTE_ID:
			case SQUARE_BRACKET_ID:
			case ID:
			case DOT:
				{
				setState(695);
				full_column_name();
				}
				break;
			case NULL:
				{
				setState(696);
				match(NULL);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(700);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,89,_ctx) ) {
			case 1:
				{
				setState(699);
				as_column_alias();
				}
				break;
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Expression_elemContext extends ParserRuleContext {
		public Column_aliasContext leftAlias;
		public Token eq;
		public ExpressionContext leftAssignment;
		public ExpressionContext expressionAs;
		public Column_aliasContext column_alias() {
			return getRuleContext(Column_aliasContext.class,0);
		}
		public TerminalNode EQUAL() { return getToken(AqlParser.EQUAL, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public As_column_aliasContext as_column_alias() {
			return getRuleContext(As_column_aliasContext.class,0);
		}
		public Expression_elemContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression_elem; }
	}

	public final Expression_elemContext expression_elem() throws RecognitionException {
		Expression_elemContext _localctx = new Expression_elemContext(_ctx, getState());
		enterRule(_localctx, 94, RULE_expression_elem);
		try {
			setState(710);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,91,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(702);
				((Expression_elemContext)_localctx).leftAlias = column_alias();
				setState(703);
				((Expression_elemContext)_localctx).eq = match(EQUAL);
				setState(704);
				((Expression_elemContext)_localctx).leftAssignment = expression(0);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(706);
				((Expression_elemContext)_localctx).expressionAs = expression(0);
				setState(708);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,90,_ctx) ) {
				case 1:
					{
					setState(707);
					as_column_alias();
					}
					break;
				}
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Select_list_elemContext extends ParserRuleContext {
		public AsteriskContext asterisk() {
			return getRuleContext(AsteriskContext.class,0);
		}
		public Column_elemContext column_elem() {
			return getRuleContext(Column_elemContext.class,0);
		}
		public TerminalNode LOCAL_ID() { return getToken(AqlParser.LOCAL_ID, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public Assignment_operatorContext assignment_operator() {
			return getRuleContext(Assignment_operatorContext.class,0);
		}
		public TerminalNode EQUAL() { return getToken(AqlParser.EQUAL, 0); }
		public Expression_elemContext expression_elem() {
			return getRuleContext(Expression_elemContext.class,0);
		}
		public Select_list_elemContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_select_list_elem; }
	}

	public final Select_list_elemContext select_list_elem() throws RecognitionException {
		Select_list_elemContext _localctx = new Select_list_elemContext(_ctx, getState());
		enterRule(_localctx, 96, RULE_select_list_elem);
		try {
			setState(721);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,93,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(712);
				asterisk();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(713);
				column_elem();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(714);
				match(LOCAL_ID);
				setState(717);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case PLUS_ASSIGN:
				case MINUS_ASSIGN:
				case MULT_ASSIGN:
				case DIV_ASSIGN:
				case MOD_ASSIGN:
				case AND_ASSIGN:
				case XOR_ASSIGN:
				case OR_ASSIGN:
					{
					setState(715);
					assignment_operator();
					}
					break;
				case EQUAL:
					{
					setState(716);
					match(EQUAL);
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(719);
				expression(0);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(720);
				expression_elem();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Table_sourcesContext extends ParserRuleContext {
		public Table_sourceContext table_source;
		public List<Table_sourceContext> source = new ArrayList<Table_sourceContext>();
		public List<Table_sourceContext> table_source() {
			return getRuleContexts(Table_sourceContext.class);
		}
		public Table_sourceContext table_source(int i) {
			return getRuleContext(Table_sourceContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(AqlParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(AqlParser.COMMA, i);
		}
		public Table_sourcesContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_table_sources; }
	}

	public final Table_sourcesContext table_sources() throws RecognitionException {
		Table_sourcesContext _localctx = new Table_sourcesContext(_ctx, getState());
		enterRule(_localctx, 98, RULE_table_sources);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(723);
			((Table_sourcesContext)_localctx).table_source = table_source();
			((Table_sourcesContext)_localctx).source.add(((Table_sourcesContext)_localctx).table_source);
			setState(728);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(724);
				match(COMMA);
				setState(725);
				((Table_sourcesContext)_localctx).table_source = table_source();
				((Table_sourcesContext)_localctx).source.add(((Table_sourcesContext)_localctx).table_source);
				}
				}
				setState(730);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Table_sourceContext extends ParserRuleContext {
		public Table_source_item_joinedContext table_source_item_joined() {
			return getRuleContext(Table_source_item_joinedContext.class,0);
		}
		public TerminalNode LR_BRACKET() { return getToken(AqlParser.LR_BRACKET, 0); }
		public TerminalNode RR_BRACKET() { return getToken(AqlParser.RR_BRACKET, 0); }
		public Table_sourceContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_table_source; }
	}

	public final Table_sourceContext table_source() throws RecognitionException {
		Table_sourceContext _localctx = new Table_sourceContext(_ctx, getState());
		enterRule(_localctx, 100, RULE_table_source);
		try {
			setState(736);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,95,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(731);
				table_source_item_joined();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(732);
				match(LR_BRACKET);
				setState(733);
				table_source_item_joined();
				setState(734);
				match(RR_BRACKET);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Table_source_item_joinedContext extends ParserRuleContext {
		public Join_partContext join_part;
		public List<Join_partContext> joins = new ArrayList<Join_partContext>();
		public Table_source_itemContext table_source_item() {
			return getRuleContext(Table_source_itemContext.class,0);
		}
		public List<Join_partContext> join_part() {
			return getRuleContexts(Join_partContext.class);
		}
		public Join_partContext join_part(int i) {
			return getRuleContext(Join_partContext.class,i);
		}
		public Table_source_item_joinedContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_table_source_item_joined; }
	}

	public final Table_source_item_joinedContext table_source_item_joined() throws RecognitionException {
		Table_source_item_joinedContext _localctx = new Table_source_item_joinedContext(_ctx, getState());
		enterRule(_localctx, 102, RULE_table_source_item_joined);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(738);
			table_source_item();
			setState(742);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << INNER) | (1L << JOIN) | (1L << LEFT) | (1L << PIVOT) | (1L << RIGHT) | (1L << UNPIVOT))) != 0)) {
				{
				{
				setState(739);
				((Table_source_item_joinedContext)_localctx).join_part = join_part();
				((Table_source_item_joinedContext)_localctx).joins.add(((Table_source_item_joinedContext)_localctx).join_part);
				}
				}
				setState(744);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Table_source_itemContext extends ParserRuleContext {
		public Token loc_id;
		public Token loc_id_call;
		public Function_callContext loc_fcall;
		public Function_callContext oldstyle_fcall;
		public Table_name_with_hintContext table_name_with_hint() {
			return getRuleContext(Table_name_with_hintContext.class,0);
		}
		public As_table_aliasContext as_table_alias() {
			return getRuleContext(As_table_aliasContext.class,0);
		}
		public Full_table_nameContext full_table_name() {
			return getRuleContext(Full_table_nameContext.class,0);
		}
		public TerminalNode LR_BRACKET() { return getToken(AqlParser.LR_BRACKET, 0); }
		public Derived_tableContext derived_table() {
			return getRuleContext(Derived_tableContext.class,0);
		}
		public TerminalNode RR_BRACKET() { return getToken(AqlParser.RR_BRACKET, 0); }
		public Column_alias_listContext column_alias_list() {
			return getRuleContext(Column_alias_listContext.class,0);
		}
		public Function_callContext function_call() {
			return getRuleContext(Function_callContext.class,0);
		}
		public TerminalNode LOCAL_ID() { return getToken(AqlParser.LOCAL_ID, 0); }
		public TerminalNode DOT() { return getToken(AqlParser.DOT, 0); }
		public List<TerminalNode> COLON() { return getTokens(AqlParser.COLON); }
		public TerminalNode COLON(int i) {
			return getToken(AqlParser.COLON, i);
		}
		public Table_source_itemContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_table_source_item; }
	}

	public final Table_source_itemContext table_source_item() throws RecognitionException {
		Table_source_itemContext _localctx = new Table_source_itemContext(_ctx, getState());
		enterRule(_localctx, 104, RULE_table_source_item);
		try {
			setState(788);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,107,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(745);
				table_name_with_hint();
				setState(747);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,97,_ctx) ) {
				case 1:
					{
					setState(746);
					as_table_alias();
					}
					break;
				}
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(749);
				full_table_name();
				setState(751);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,98,_ctx) ) {
				case 1:
					{
					setState(750);
					as_table_alias();
					}
					break;
				}
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(753);
				match(LR_BRACKET);
				setState(754);
				derived_table();
				setState(755);
				match(RR_BRACKET);
				setState(760);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,100,_ctx) ) {
				case 1:
					{
					setState(756);
					as_table_alias();
					setState(758);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,99,_ctx) ) {
					case 1:
						{
						setState(757);
						column_alias_list();
						}
						break;
					}
					}
					break;
				}
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(762);
				function_call();
				setState(767);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,102,_ctx) ) {
				case 1:
					{
					setState(763);
					as_table_alias();
					setState(765);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,101,_ctx) ) {
					case 1:
						{
						setState(764);
						column_alias_list();
						}
						break;
					}
					}
					break;
				}
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(769);
				((Table_source_itemContext)_localctx).loc_id = match(LOCAL_ID);
				setState(771);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,103,_ctx) ) {
				case 1:
					{
					setState(770);
					as_table_alias();
					}
					break;
				}
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(773);
				((Table_source_itemContext)_localctx).loc_id_call = match(LOCAL_ID);
				setState(774);
				match(DOT);
				setState(775);
				((Table_source_itemContext)_localctx).loc_fcall = function_call();
				setState(780);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,105,_ctx) ) {
				case 1:
					{
					setState(776);
					as_table_alias();
					setState(778);
					_errHandler.sync(this);
					switch ( getInterpreter().adaptivePredict(_input,104,_ctx) ) {
					case 1:
						{
						setState(777);
						column_alias_list();
						}
						break;
					}
					}
					break;
				}
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(782);
				match(COLON);
				setState(783);
				match(COLON);
				setState(784);
				((Table_source_itemContext)_localctx).oldstyle_fcall = function_call();
				setState(786);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,106,_ctx) ) {
				case 1:
					{
					setState(785);
					as_table_alias();
					}
					break;
				}
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Join_partContext extends ParserRuleContext {
		public Join_onContext join_on() {
			return getRuleContext(Join_onContext.class,0);
		}
		public PivotContext pivot() {
			return getRuleContext(PivotContext.class,0);
		}
		public UnpivotContext unpivot() {
			return getRuleContext(UnpivotContext.class,0);
		}
		public Join_partContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_join_part; }
	}

	public final Join_partContext join_part() throws RecognitionException {
		Join_partContext _localctx = new Join_partContext(_ctx, getState());
		enterRule(_localctx, 106, RULE_join_part);
		try {
			setState(793);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case INNER:
			case JOIN:
			case LEFT:
			case RIGHT:
				enterOuterAlt(_localctx, 1);
				{
				setState(790);
				join_on();
				}
				break;
			case PIVOT:
				enterOuterAlt(_localctx, 2);
				{
				setState(791);
				pivot();
				}
				break;
			case UNPIVOT:
				enterOuterAlt(_localctx, 3);
				{
				setState(792);
				unpivot();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Join_onContext extends ParserRuleContext {
		public Token inner;
		public Token join_type;
		public Token outer;
		public Table_sourceContext source;
		public Search_conditionContext cond;
		public TerminalNode JOIN() { return getToken(AqlParser.JOIN, 0); }
		public TerminalNode ON() { return getToken(AqlParser.ON, 0); }
		public Table_sourceContext table_source() {
			return getRuleContext(Table_sourceContext.class,0);
		}
		public Search_conditionContext search_condition() {
			return getRuleContext(Search_conditionContext.class,0);
		}
		public TerminalNode LEFT() { return getToken(AqlParser.LEFT, 0); }
		public TerminalNode RIGHT() { return getToken(AqlParser.RIGHT, 0); }
		public TerminalNode INNER() { return getToken(AqlParser.INNER, 0); }
		public TerminalNode OUTER() { return getToken(AqlParser.OUTER, 0); }
		public Join_onContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_join_on; }
	}

	public final Join_onContext join_on() throws RecognitionException {
		Join_onContext _localctx = new Join_onContext(_ctx, getState());
		enterRule(_localctx, 108, RULE_join_on);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(802);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case INNER:
			case JOIN:
				{
				setState(796);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==INNER) {
					{
					setState(795);
					((Join_onContext)_localctx).inner = match(INNER);
					}
				}

				}
				break;
			case LEFT:
			case RIGHT:
				{
				setState(798);
				((Join_onContext)_localctx).join_type = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==LEFT || _la==RIGHT) ) {
					((Join_onContext)_localctx).join_type = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(800);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==OUTER) {
					{
					setState(799);
					((Join_onContext)_localctx).outer = match(OUTER);
					}
				}

				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(804);
			match(JOIN);
			setState(805);
			((Join_onContext)_localctx).source = table_source();
			setState(806);
			match(ON);
			setState(807);
			((Join_onContext)_localctx).cond = search_condition();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class PivotContext extends ParserRuleContext {
		public TerminalNode PIVOT() { return getToken(AqlParser.PIVOT, 0); }
		public Pivot_clauseContext pivot_clause() {
			return getRuleContext(Pivot_clauseContext.class,0);
		}
		public As_table_aliasContext as_table_alias() {
			return getRuleContext(As_table_aliasContext.class,0);
		}
		public PivotContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_pivot; }
	}

	public final PivotContext pivot() throws RecognitionException {
		PivotContext _localctx = new PivotContext(_ctx, getState());
		enterRule(_localctx, 110, RULE_pivot);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(809);
			match(PIVOT);
			setState(810);
			pivot_clause();
			setState(811);
			as_table_alias();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class UnpivotContext extends ParserRuleContext {
		public TerminalNode UNPIVOT() { return getToken(AqlParser.UNPIVOT, 0); }
		public Unpivot_clauseContext unpivot_clause() {
			return getRuleContext(Unpivot_clauseContext.class,0);
		}
		public As_table_aliasContext as_table_alias() {
			return getRuleContext(As_table_aliasContext.class,0);
		}
		public UnpivotContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_unpivot; }
	}

	public final UnpivotContext unpivot() throws RecognitionException {
		UnpivotContext _localctx = new UnpivotContext(_ctx, getState());
		enterRule(_localctx, 112, RULE_unpivot);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(813);
			match(UNPIVOT);
			setState(814);
			unpivot_clause();
			setState(815);
			as_table_alias();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Pivot_clauseContext extends ParserRuleContext {
		public TerminalNode LR_BRACKET() { return getToken(AqlParser.LR_BRACKET, 0); }
		public Aggregate_windowed_functionContext aggregate_windowed_function() {
			return getRuleContext(Aggregate_windowed_functionContext.class,0);
		}
		public TerminalNode FOR() { return getToken(AqlParser.FOR, 0); }
		public Full_column_nameContext full_column_name() {
			return getRuleContext(Full_column_nameContext.class,0);
		}
		public TerminalNode IN() { return getToken(AqlParser.IN, 0); }
		public Column_alias_listContext column_alias_list() {
			return getRuleContext(Column_alias_listContext.class,0);
		}
		public TerminalNode RR_BRACKET() { return getToken(AqlParser.RR_BRACKET, 0); }
		public Pivot_clauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_pivot_clause; }
	}

	public final Pivot_clauseContext pivot_clause() throws RecognitionException {
		Pivot_clauseContext _localctx = new Pivot_clauseContext(_ctx, getState());
		enterRule(_localctx, 114, RULE_pivot_clause);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(817);
			match(LR_BRACKET);
			setState(818);
			aggregate_windowed_function();
			setState(819);
			match(FOR);
			setState(820);
			full_column_name();
			setState(821);
			match(IN);
			setState(822);
			column_alias_list();
			setState(823);
			match(RR_BRACKET);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Unpivot_clauseContext extends ParserRuleContext {
		public ExpressionContext unpivot_exp;
		public List<TerminalNode> LR_BRACKET() { return getTokens(AqlParser.LR_BRACKET); }
		public TerminalNode LR_BRACKET(int i) {
			return getToken(AqlParser.LR_BRACKET, i);
		}
		public TerminalNode FOR() { return getToken(AqlParser.FOR, 0); }
		public Full_column_nameContext full_column_name() {
			return getRuleContext(Full_column_nameContext.class,0);
		}
		public TerminalNode IN() { return getToken(AqlParser.IN, 0); }
		public Full_column_name_listContext full_column_name_list() {
			return getRuleContext(Full_column_name_listContext.class,0);
		}
		public List<TerminalNode> RR_BRACKET() { return getTokens(AqlParser.RR_BRACKET); }
		public TerminalNode RR_BRACKET(int i) {
			return getToken(AqlParser.RR_BRACKET, i);
		}
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public Unpivot_clauseContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_unpivot_clause; }
	}

	public final Unpivot_clauseContext unpivot_clause() throws RecognitionException {
		Unpivot_clauseContext _localctx = new Unpivot_clauseContext(_ctx, getState());
		enterRule(_localctx, 116, RULE_unpivot_clause);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(825);
			match(LR_BRACKET);
			setState(826);
			((Unpivot_clauseContext)_localctx).unpivot_exp = expression(0);
			setState(827);
			match(FOR);
			setState(828);
			full_column_name();
			setState(829);
			match(IN);
			setState(830);
			match(LR_BRACKET);
			setState(831);
			full_column_name_list();
			setState(832);
			match(RR_BRACKET);
			setState(833);
			match(RR_BRACKET);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Full_column_name_listContext extends ParserRuleContext {
		public Full_column_nameContext full_column_name;
		public List<Full_column_nameContext> column = new ArrayList<Full_column_nameContext>();
		public List<Full_column_nameContext> full_column_name() {
			return getRuleContexts(Full_column_nameContext.class);
		}
		public Full_column_nameContext full_column_name(int i) {
			return getRuleContext(Full_column_nameContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(AqlParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(AqlParser.COMMA, i);
		}
		public Full_column_name_listContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_full_column_name_list; }
	}

	public final Full_column_name_listContext full_column_name_list() throws RecognitionException {
		Full_column_name_listContext _localctx = new Full_column_name_listContext(_ctx, getState());
		enterRule(_localctx, 118, RULE_full_column_name_list);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(835);
			((Full_column_name_listContext)_localctx).full_column_name = full_column_name();
			((Full_column_name_listContext)_localctx).column.add(((Full_column_name_listContext)_localctx).full_column_name);
			setState(840);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(836);
				match(COMMA);
				setState(837);
				((Full_column_name_listContext)_localctx).full_column_name = full_column_name();
				((Full_column_name_listContext)_localctx).column.add(((Full_column_name_listContext)_localctx).full_column_name);
				}
				}
				setState(842);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Table_name_with_hintContext extends ParserRuleContext {
		public Table_nameContext table_name() {
			return getRuleContext(Table_nameContext.class,0);
		}
		public Table_name_with_hintContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_table_name_with_hint; }
	}

	public final Table_name_with_hintContext table_name_with_hint() throws RecognitionException {
		Table_name_with_hintContext _localctx = new Table_name_with_hintContext(_ctx, getState());
		enterRule(_localctx, 120, RULE_table_name_with_hint);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(843);
			table_name();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Derived_tableContext extends ParserRuleContext {
		public SubqueryContext subquery() {
			return getRuleContext(SubqueryContext.class,0);
		}
		public TerminalNode LR_BRACKET() { return getToken(AqlParser.LR_BRACKET, 0); }
		public TerminalNode RR_BRACKET() { return getToken(AqlParser.RR_BRACKET, 0); }
		public Derived_tableContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_derived_table; }
	}

	public final Derived_tableContext derived_table() throws RecognitionException {
		Derived_tableContext _localctx = new Derived_tableContext(_ctx, getState());
		enterRule(_localctx, 122, RULE_derived_table);
		try {
			setState(850);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,113,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(845);
				subquery();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(846);
				match(LR_BRACKET);
				setState(847);
				subquery();
				setState(848);
				match(RR_BRACKET);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Function_callContext extends ParserRuleContext {
		public Function_callContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_function_call; }
	 
		public Function_callContext() { }
		public void copyFrom(Function_callContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class BUILT_IN_FUNCContext extends Function_callContext {
		public Build_in_functionsContext build_in_functions() {
			return getRuleContext(Build_in_functionsContext.class,0);
		}
		public BUILT_IN_FUNCContext(Function_callContext ctx) { copyFrom(ctx); }
	}
	public static class SCALAR_FUNCTIONContext extends Function_callContext {
		public Scalar_function_nameContext scalar_function_name() {
			return getRuleContext(Scalar_function_nameContext.class,0);
		}
		public TerminalNode LR_BRACKET() { return getToken(AqlParser.LR_BRACKET, 0); }
		public TerminalNode RR_BRACKET() { return getToken(AqlParser.RR_BRACKET, 0); }
		public Expression_listContext expression_list() {
			return getRuleContext(Expression_listContext.class,0);
		}
		public SCALAR_FUNCTIONContext(Function_callContext ctx) { copyFrom(ctx); }
	}
	public static class AGGREGATE_WINDOWED_FUNCContext extends Function_callContext {
		public Aggregate_windowed_functionContext aggregate_windowed_function() {
			return getRuleContext(Aggregate_windowed_functionContext.class,0);
		}
		public AGGREGATE_WINDOWED_FUNCContext(Function_callContext ctx) { copyFrom(ctx); }
	}

	public final Function_callContext function_call() throws RecognitionException {
		Function_callContext _localctx = new Function_callContext(_ctx, getState());
		enterRule(_localctx, 124, RULE_function_call);
		int _la;
		try {
			setState(861);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case AVG:
			case COUNT:
			case MAX:
			case MIN:
			case STDEV:
			case STDEVP:
			case SUM:
			case VAR:
			case VARP:
				_localctx = new AGGREGATE_WINDOWED_FUNCContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(852);
				aggregate_windowed_function();
				}
				break;
			case LEFT:
			case RIGHT:
				_localctx = new SCALAR_FUNCTIONContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(853);
				scalar_function_name();
				setState(854);
				match(LR_BRACKET);
				setState(856);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if ((((_la) & ~0x3f) == 0 && ((1L << _la) & ((1L << CASE) | (1L << COALESCE) | (1L << CONVERT) | (1L << DEFAULT) | (1L << LEFT) | (1L << NULL) | (1L << NULLIF) | (1L << RIGHT) | (1L << AFTER) | (1L << AGGREGATE) | (1L << APPLY) | (1L << AVG) | (1L << BINARY_KEYWORD) | (1L << CATCH) | (1L << CONCAT) | (1L << COUNT) | (1L << DATA) | (1L << DATEADD))) != 0) || ((((_la - 64)) & ~0x3f) == 0 && ((1L << (_la - 64)) & ((1L << (DATEDIFF - 64)) | (1L << (DAYS - 64)) | (1L << (EMPTY - 64)) | (1L << (EXIST - 64)) | (1L << (FILTER - 64)) | (1L << (GETDATE - 64)) | (1L << (GETUTCDATE - 64)) | (1L << (GO_BATCH - 64)) | (1L << (GO - 64)) | (1L << (INT - 64)) | (1L << (MAX - 64)) | (1L << (MIN - 64)) | (1L << (NEXT - 64)) | (1L << (ONLY - 64)) | (1L << (QUERY - 64)) | (1L << (ROW - 64)) | (1L << (ROW_NUMBER - 64)) | (1L << (ROWS - 64)) | (1L << (STDEV - 64)) | (1L << (STDEVP - 64)) | (1L << (STRING_AGG - 64)) | (1L << (SUM - 64)) | (1L << (TAKE - 64)) | (1L << (THROW - 64)) | (1L << (TIME - 64)) | (1L << (TRY - 64)) | (1L << (VALUE - 64)) | (1L << (VAR - 64)) | (1L << (VARP - 64)) | (1L << (BEFORE - 64)) | (1L << (ENABLED - 64)) | (1L << (ERROR - 64)) | (1L << (GET - 64)) | (1L << (IIF - 64)) | (1L << (ISNULL - 64)) | (1L << (SPLIT - 64)) | (1L << (START - 64)) | (1L << (STOP - 64)) | (1L << (VARCHAR - 64)) | (1L << (NVARCHAR - 64)) | (1L << (DOUBLE_QUOTE_ID - 64)) | (1L << (SQUARE_BRACKET_ID - 64)) | (1L << (LOCAL_ID - 64)) | (1L << (DECIMAL - 64)) | (1L << (ID - 64)) | (1L << (STRING - 64)) | (1L << (BINARY - 64)) | (1L << (FLOAT - 64)) | (1L << (REAL - 64)))) != 0) || ((((_la - 130)) & ~0x3f) == 0 && ((1L << (_la - 130)) & ((1L << (DOT - 130)) | (1L << (DOLLAR - 130)) | (1L << (LR_BRACKET - 130)) | (1L << (PLUS - 130)) | (1L << (MINUS - 130)) | (1L << (BIT_NOT - 130)))) != 0)) {
					{
					setState(855);
					expression_list();
					}
				}

				setState(858);
				match(RR_BRACKET);
				}
				break;
			case COALESCE:
			case CONVERT:
			case NULLIF:
			case DATEADD:
			case DATEDIFF:
			case GETDATE:
			case GETUTCDATE:
			case STRING_AGG:
			case IIF:
			case ISNULL:
				_localctx = new BUILT_IN_FUNCContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(860);
				build_in_functions();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Freetext_predicateContext extends ParserRuleContext {
		public TerminalNode CONTAINS() { return getToken(AqlParser.CONTAINS, 0); }
		public List<TerminalNode> LR_BRACKET() { return getTokens(AqlParser.LR_BRACKET); }
		public TerminalNode LR_BRACKET(int i) {
			return getToken(AqlParser.LR_BRACKET, i);
		}
		public List<TerminalNode> COMMA() { return getTokens(AqlParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(AqlParser.COMMA, i);
		}
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public List<TerminalNode> RR_BRACKET() { return getTokens(AqlParser.RR_BRACKET); }
		public TerminalNode RR_BRACKET(int i) {
			return getToken(AqlParser.RR_BRACKET, i);
		}
		public List<Full_column_nameContext> full_column_name() {
			return getRuleContexts(Full_column_nameContext.class);
		}
		public Full_column_nameContext full_column_name(int i) {
			return getRuleContext(Full_column_nameContext.class,i);
		}
		public TerminalNode STAR() { return getToken(AqlParser.STAR, 0); }
		public Freetext_predicateContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_freetext_predicate; }
	}

	public final Freetext_predicateContext freetext_predicate() throws RecognitionException {
		Freetext_predicateContext _localctx = new Freetext_predicateContext(_ctx, getState());
		enterRule(_localctx, 126, RULE_freetext_predicate);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(863);
			match(CONTAINS);
			setState(864);
			match(LR_BRACKET);
			setState(884);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case AFTER:
			case AGGREGATE:
			case APPLY:
			case AVG:
			case BINARY_KEYWORD:
			case CATCH:
			case CONCAT:
			case COUNT:
			case DATA:
			case DATEADD:
			case DATEDIFF:
			case DAYS:
			case EMPTY:
			case EXIST:
			case FILTER:
			case GETDATE:
			case GETUTCDATE:
			case GO_BATCH:
			case GO:
			case INT:
			case MAX:
			case MIN:
			case NEXT:
			case ONLY:
			case QUERY:
			case ROW:
			case ROW_NUMBER:
			case ROWS:
			case STDEV:
			case STDEVP:
			case STRING_AGG:
			case SUM:
			case TAKE:
			case THROW:
			case TIME:
			case TRY:
			case VALUE:
			case VAR:
			case VARP:
			case BEFORE:
			case ENABLED:
			case ERROR:
			case GET:
			case IIF:
			case ISNULL:
			case SPLIT:
			case START:
			case STOP:
			case VARCHAR:
			case NVARCHAR:
			case DOUBLE_QUOTE_ID:
			case SQUARE_BRACKET_ID:
			case ID:
			case DOT:
				{
				setState(865);
				full_column_name();
				}
				break;
			case LR_BRACKET:
				{
				setState(866);
				match(LR_BRACKET);
				setState(867);
				full_column_name();
				setState(872);
				_errHandler.sync(this);
				_la = _input.LA(1);
				while (_la==COMMA) {
					{
					{
					setState(868);
					match(COMMA);
					setState(869);
					full_column_name();
					}
					}
					setState(874);
					_errHandler.sync(this);
					_la = _input.LA(1);
				}
				setState(875);
				match(RR_BRACKET);
				}
				break;
			case STAR:
				{
				setState(877);
				match(STAR);
				setState(878);
				match(LR_BRACKET);
				setState(879);
				full_column_name();
				setState(880);
				match(COMMA);
				setState(881);
				expression(0);
				setState(882);
				match(RR_BRACKET);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
			setState(886);
			match(COMMA);
			setState(887);
			expression(0);
			setState(888);
			match(RR_BRACKET);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Build_in_functionsContext extends ParserRuleContext {
		public Build_in_functionsContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_build_in_functions; }
	 
		public Build_in_functionsContext() { }
		public void copyFrom(Build_in_functionsContext ctx) {
			super.copyFrom(ctx);
		}
	}
	public static class CONVERTContext extends Build_in_functionsContext {
		public Data_typeContext convert_data_type;
		public ExpressionContext convert_expression;
		public ExpressionContext style;
		public TerminalNode CONVERT() { return getToken(AqlParser.CONVERT, 0); }
		public TerminalNode LR_BRACKET() { return getToken(AqlParser.LR_BRACKET, 0); }
		public List<TerminalNode> COMMA() { return getTokens(AqlParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(AqlParser.COMMA, i);
		}
		public TerminalNode RR_BRACKET() { return getToken(AqlParser.RR_BRACKET, 0); }
		public Data_typeContext data_type() {
			return getRuleContext(Data_typeContext.class,0);
		}
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public CONVERTContext(Build_in_functionsContext ctx) { copyFrom(ctx); }
	}
	public static class DATEADDContext extends Build_in_functionsContext {
		public Token datepart;
		public ExpressionContext number;
		public ExpressionContext date;
		public TerminalNode DATEADD() { return getToken(AqlParser.DATEADD, 0); }
		public TerminalNode LR_BRACKET() { return getToken(AqlParser.LR_BRACKET, 0); }
		public List<TerminalNode> COMMA() { return getTokens(AqlParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(AqlParser.COMMA, i);
		}
		public TerminalNode RR_BRACKET() { return getToken(AqlParser.RR_BRACKET, 0); }
		public TerminalNode ID() { return getToken(AqlParser.ID, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public DATEADDContext(Build_in_functionsContext ctx) { copyFrom(ctx); }
	}
	public static class COALESCEContext extends Build_in_functionsContext {
		public TerminalNode COALESCE() { return getToken(AqlParser.COALESCE, 0); }
		public TerminalNode LR_BRACKET() { return getToken(AqlParser.LR_BRACKET, 0); }
		public Expression_listContext expression_list() {
			return getRuleContext(Expression_listContext.class,0);
		}
		public TerminalNode RR_BRACKET() { return getToken(AqlParser.RR_BRACKET, 0); }
		public COALESCEContext(Build_in_functionsContext ctx) { copyFrom(ctx); }
	}
	public static class GETUTCDATEContext extends Build_in_functionsContext {
		public TerminalNode GETUTCDATE() { return getToken(AqlParser.GETUTCDATE, 0); }
		public TerminalNode LR_BRACKET() { return getToken(AqlParser.LR_BRACKET, 0); }
		public TerminalNode RR_BRACKET() { return getToken(AqlParser.RR_BRACKET, 0); }
		public GETUTCDATEContext(Build_in_functionsContext ctx) { copyFrom(ctx); }
	}
	public static class IIFContext extends Build_in_functionsContext {
		public Search_conditionContext cond;
		public ExpressionContext left;
		public ExpressionContext right;
		public TerminalNode IIF() { return getToken(AqlParser.IIF, 0); }
		public TerminalNode LR_BRACKET() { return getToken(AqlParser.LR_BRACKET, 0); }
		public List<TerminalNode> COMMA() { return getTokens(AqlParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(AqlParser.COMMA, i);
		}
		public TerminalNode RR_BRACKET() { return getToken(AqlParser.RR_BRACKET, 0); }
		public Search_conditionContext search_condition() {
			return getRuleContext(Search_conditionContext.class,0);
		}
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public IIFContext(Build_in_functionsContext ctx) { copyFrom(ctx); }
	}
	public static class ISNULLContext extends Build_in_functionsContext {
		public ExpressionContext left;
		public ExpressionContext right;
		public TerminalNode ISNULL() { return getToken(AqlParser.ISNULL, 0); }
		public TerminalNode LR_BRACKET() { return getToken(AqlParser.LR_BRACKET, 0); }
		public TerminalNode COMMA() { return getToken(AqlParser.COMMA, 0); }
		public TerminalNode RR_BRACKET() { return getToken(AqlParser.RR_BRACKET, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public ISNULLContext(Build_in_functionsContext ctx) { copyFrom(ctx); }
	}
	public static class DATEDIFFContext extends Build_in_functionsContext {
		public Token datepart;
		public ExpressionContext date_first;
		public ExpressionContext date_second;
		public TerminalNode DATEDIFF() { return getToken(AqlParser.DATEDIFF, 0); }
		public TerminalNode LR_BRACKET() { return getToken(AqlParser.LR_BRACKET, 0); }
		public List<TerminalNode> COMMA() { return getTokens(AqlParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(AqlParser.COMMA, i);
		}
		public TerminalNode RR_BRACKET() { return getToken(AqlParser.RR_BRACKET, 0); }
		public TerminalNode ID() { return getToken(AqlParser.ID, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public DATEDIFFContext(Build_in_functionsContext ctx) { copyFrom(ctx); }
	}
	public static class GETDATEContext extends Build_in_functionsContext {
		public TerminalNode GETDATE() { return getToken(AqlParser.GETDATE, 0); }
		public TerminalNode LR_BRACKET() { return getToken(AqlParser.LR_BRACKET, 0); }
		public TerminalNode RR_BRACKET() { return getToken(AqlParser.RR_BRACKET, 0); }
		public GETDATEContext(Build_in_functionsContext ctx) { copyFrom(ctx); }
	}
	public static class NULLIFContext extends Build_in_functionsContext {
		public ExpressionContext left;
		public ExpressionContext right;
		public TerminalNode NULLIF() { return getToken(AqlParser.NULLIF, 0); }
		public TerminalNode LR_BRACKET() { return getToken(AqlParser.LR_BRACKET, 0); }
		public TerminalNode COMMA() { return getToken(AqlParser.COMMA, 0); }
		public TerminalNode RR_BRACKET() { return getToken(AqlParser.RR_BRACKET, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public NULLIFContext(Build_in_functionsContext ctx) { copyFrom(ctx); }
	}
	public static class STRINGAGGContext extends Build_in_functionsContext {
		public ExpressionContext expr;
		public ExpressionContext separator;
		public TerminalNode STRING_AGG() { return getToken(AqlParser.STRING_AGG, 0); }
		public TerminalNode LR_BRACKET() { return getToken(AqlParser.LR_BRACKET, 0); }
		public TerminalNode COMMA() { return getToken(AqlParser.COMMA, 0); }
		public TerminalNode RR_BRACKET() { return getToken(AqlParser.RR_BRACKET, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public STRINGAGGContext(Build_in_functionsContext ctx) { copyFrom(ctx); }
	}

	public final Build_in_functionsContext build_in_functions() throws RecognitionException {
		Build_in_functionsContext _localctx = new Build_in_functionsContext(_ctx, getState());
		enterRule(_localctx, 128, RULE_build_in_functions);
		int _la;
		try {
			setState(960);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case CONVERT:
				_localctx = new CONVERTContext(_localctx);
				enterOuterAlt(_localctx, 1);
				{
				setState(890);
				match(CONVERT);
				setState(891);
				match(LR_BRACKET);
				setState(892);
				((CONVERTContext)_localctx).convert_data_type = data_type();
				setState(893);
				match(COMMA);
				setState(894);
				((CONVERTContext)_localctx).convert_expression = expression(0);
				setState(897);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==COMMA) {
					{
					setState(895);
					match(COMMA);
					setState(896);
					((CONVERTContext)_localctx).style = expression(0);
					}
				}

				setState(899);
				match(RR_BRACKET);
				}
				break;
			case COALESCE:
				_localctx = new COALESCEContext(_localctx);
				enterOuterAlt(_localctx, 2);
				{
				setState(901);
				match(COALESCE);
				setState(902);
				match(LR_BRACKET);
				setState(903);
				expression_list();
				setState(904);
				match(RR_BRACKET);
				}
				break;
			case DATEADD:
				_localctx = new DATEADDContext(_localctx);
				enterOuterAlt(_localctx, 3);
				{
				setState(906);
				match(DATEADD);
				setState(907);
				match(LR_BRACKET);
				setState(908);
				((DATEADDContext)_localctx).datepart = match(ID);
				setState(909);
				match(COMMA);
				setState(910);
				((DATEADDContext)_localctx).number = expression(0);
				setState(911);
				match(COMMA);
				setState(912);
				((DATEADDContext)_localctx).date = expression(0);
				setState(913);
				match(RR_BRACKET);
				}
				break;
			case DATEDIFF:
				_localctx = new DATEDIFFContext(_localctx);
				enterOuterAlt(_localctx, 4);
				{
				setState(915);
				match(DATEDIFF);
				setState(916);
				match(LR_BRACKET);
				setState(917);
				((DATEDIFFContext)_localctx).datepart = match(ID);
				setState(918);
				match(COMMA);
				setState(919);
				((DATEDIFFContext)_localctx).date_first = expression(0);
				setState(920);
				match(COMMA);
				setState(921);
				((DATEDIFFContext)_localctx).date_second = expression(0);
				setState(922);
				match(RR_BRACKET);
				}
				break;
			case GETDATE:
				_localctx = new GETDATEContext(_localctx);
				enterOuterAlt(_localctx, 5);
				{
				setState(924);
				match(GETDATE);
				setState(925);
				match(LR_BRACKET);
				setState(926);
				match(RR_BRACKET);
				}
				break;
			case GETUTCDATE:
				_localctx = new GETUTCDATEContext(_localctx);
				enterOuterAlt(_localctx, 6);
				{
				setState(927);
				match(GETUTCDATE);
				setState(928);
				match(LR_BRACKET);
				setState(929);
				match(RR_BRACKET);
				}
				break;
			case NULLIF:
				_localctx = new NULLIFContext(_localctx);
				enterOuterAlt(_localctx, 7);
				{
				setState(930);
				match(NULLIF);
				setState(931);
				match(LR_BRACKET);
				setState(932);
				((NULLIFContext)_localctx).left = expression(0);
				setState(933);
				match(COMMA);
				setState(934);
				((NULLIFContext)_localctx).right = expression(0);
				setState(935);
				match(RR_BRACKET);
				}
				break;
			case ISNULL:
				_localctx = new ISNULLContext(_localctx);
				enterOuterAlt(_localctx, 8);
				{
				setState(937);
				match(ISNULL);
				setState(938);
				match(LR_BRACKET);
				setState(939);
				((ISNULLContext)_localctx).left = expression(0);
				setState(940);
				match(COMMA);
				setState(941);
				((ISNULLContext)_localctx).right = expression(0);
				setState(942);
				match(RR_BRACKET);
				}
				break;
			case IIF:
				_localctx = new IIFContext(_localctx);
				enterOuterAlt(_localctx, 9);
				{
				setState(944);
				match(IIF);
				setState(945);
				match(LR_BRACKET);
				setState(946);
				((IIFContext)_localctx).cond = search_condition();
				setState(947);
				match(COMMA);
				setState(948);
				((IIFContext)_localctx).left = expression(0);
				setState(949);
				match(COMMA);
				setState(950);
				((IIFContext)_localctx).right = expression(0);
				setState(951);
				match(RR_BRACKET);
				}
				break;
			case STRING_AGG:
				_localctx = new STRINGAGGContext(_localctx);
				enterOuterAlt(_localctx, 10);
				{
				setState(953);
				match(STRING_AGG);
				setState(954);
				match(LR_BRACKET);
				setState(955);
				((STRINGAGGContext)_localctx).expr = expression(0);
				setState(956);
				match(COMMA);
				setState(957);
				((STRINGAGGContext)_localctx).separator = expression(0);
				setState(958);
				match(RR_BRACKET);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Value_callContext extends ParserRuleContext {
		public Token xquery;
		public Token sqltype;
		public TerminalNode VALUE() { return getToken(AqlParser.VALUE, 0); }
		public TerminalNode LR_BRACKET() { return getToken(AqlParser.LR_BRACKET, 0); }
		public TerminalNode COMMA() { return getToken(AqlParser.COMMA, 0); }
		public TerminalNode RR_BRACKET() { return getToken(AqlParser.RR_BRACKET, 0); }
		public List<TerminalNode> STRING() { return getTokens(AqlParser.STRING); }
		public TerminalNode STRING(int i) {
			return getToken(AqlParser.STRING, i);
		}
		public Value_callContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_value_call; }
	}

	public final Value_callContext value_call() throws RecognitionException {
		Value_callContext _localctx = new Value_callContext(_ctx, getState());
		enterRule(_localctx, 130, RULE_value_call);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(962);
			match(VALUE);
			setState(963);
			match(LR_BRACKET);
			setState(964);
			((Value_callContext)_localctx).xquery = match(STRING);
			setState(965);
			match(COMMA);
			setState(966);
			((Value_callContext)_localctx).sqltype = match(STRING);
			setState(967);
			match(RR_BRACKET);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Query_callContext extends ParserRuleContext {
		public Token xquery;
		public TerminalNode QUERY() { return getToken(AqlParser.QUERY, 0); }
		public TerminalNode LR_BRACKET() { return getToken(AqlParser.LR_BRACKET, 0); }
		public TerminalNode RR_BRACKET() { return getToken(AqlParser.RR_BRACKET, 0); }
		public TerminalNode STRING() { return getToken(AqlParser.STRING, 0); }
		public Query_callContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_query_call; }
	}

	public final Query_callContext query_call() throws RecognitionException {
		Query_callContext _localctx = new Query_callContext(_ctx, getState());
		enterRule(_localctx, 132, RULE_query_call);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(969);
			match(QUERY);
			setState(970);
			match(LR_BRACKET);
			setState(971);
			((Query_callContext)_localctx).xquery = match(STRING);
			setState(972);
			match(RR_BRACKET);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Exist_callContext extends ParserRuleContext {
		public Token xquery;
		public TerminalNode EXIST() { return getToken(AqlParser.EXIST, 0); }
		public TerminalNode LR_BRACKET() { return getToken(AqlParser.LR_BRACKET, 0); }
		public TerminalNode RR_BRACKET() { return getToken(AqlParser.RR_BRACKET, 0); }
		public TerminalNode STRING() { return getToken(AqlParser.STRING, 0); }
		public Exist_callContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_exist_call; }
	}

	public final Exist_callContext exist_call() throws RecognitionException {
		Exist_callContext _localctx = new Exist_callContext(_ctx, getState());
		enterRule(_localctx, 134, RULE_exist_call);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(974);
			match(EXIST);
			setState(975);
			match(LR_BRACKET);
			setState(976);
			((Exist_callContext)_localctx).xquery = match(STRING);
			setState(977);
			match(RR_BRACKET);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Switch_sectionContext extends ParserRuleContext {
		public TerminalNode WHEN() { return getToken(AqlParser.WHEN, 0); }
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public TerminalNode THEN() { return getToken(AqlParser.THEN, 0); }
		public Switch_sectionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_switch_section; }
	}

	public final Switch_sectionContext switch_section() throws RecognitionException {
		Switch_sectionContext _localctx = new Switch_sectionContext(_ctx, getState());
		enterRule(_localctx, 136, RULE_switch_section);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(979);
			match(WHEN);
			setState(980);
			expression(0);
			setState(981);
			match(THEN);
			setState(982);
			expression(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Switch_search_condition_sectionContext extends ParserRuleContext {
		public TerminalNode WHEN() { return getToken(AqlParser.WHEN, 0); }
		public Search_conditionContext search_condition() {
			return getRuleContext(Search_conditionContext.class,0);
		}
		public TerminalNode THEN() { return getToken(AqlParser.THEN, 0); }
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public Switch_search_condition_sectionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_switch_search_condition_section; }
	}

	public final Switch_search_condition_sectionContext switch_search_condition_section() throws RecognitionException {
		Switch_search_condition_sectionContext _localctx = new Switch_search_condition_sectionContext(_ctx, getState());
		enterRule(_localctx, 138, RULE_switch_search_condition_section);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(984);
			match(WHEN);
			setState(985);
			search_condition();
			setState(986);
			match(THEN);
			setState(987);
			expression(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class As_column_aliasContext extends ParserRuleContext {
		public Column_aliasContext column_alias() {
			return getRuleContext(Column_aliasContext.class,0);
		}
		public TerminalNode AS() { return getToken(AqlParser.AS, 0); }
		public As_column_aliasContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_as_column_alias; }
	}

	public final As_column_aliasContext as_column_alias() throws RecognitionException {
		As_column_aliasContext _localctx = new As_column_aliasContext(_ctx, getState());
		enterRule(_localctx, 140, RULE_as_column_alias);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(990);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==AS) {
				{
				setState(989);
				match(AS);
				}
			}

			setState(992);
			column_alias();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class As_table_aliasContext extends ParserRuleContext {
		public Table_aliasContext table_alias() {
			return getRuleContext(Table_aliasContext.class,0);
		}
		public TerminalNode AS() { return getToken(AqlParser.AS, 0); }
		public As_table_aliasContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_as_table_alias; }
	}

	public final As_table_aliasContext as_table_alias() throws RecognitionException {
		As_table_aliasContext _localctx = new As_table_aliasContext(_ctx, getState());
		enterRule(_localctx, 142, RULE_as_table_alias);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(995);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==AS) {
				{
				setState(994);
				match(AS);
				}
			}

			setState(997);
			table_alias();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Table_aliasContext extends ParserRuleContext {
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public Table_aliasContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_table_alias; }
	}

	public final Table_aliasContext table_alias() throws RecognitionException {
		Table_aliasContext _localctx = new Table_aliasContext(_ctx, getState());
		enterRule(_localctx, 144, RULE_table_alias);
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(999);
			id();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Column_alias_listContext extends ParserRuleContext {
		public Column_aliasContext column_alias;
		public List<Column_aliasContext> alias = new ArrayList<Column_aliasContext>();
		public TerminalNode LR_BRACKET() { return getToken(AqlParser.LR_BRACKET, 0); }
		public TerminalNode RR_BRACKET() { return getToken(AqlParser.RR_BRACKET, 0); }
		public List<Column_aliasContext> column_alias() {
			return getRuleContexts(Column_aliasContext.class);
		}
		public Column_aliasContext column_alias(int i) {
			return getRuleContext(Column_aliasContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(AqlParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(AqlParser.COMMA, i);
		}
		public Column_alias_listContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_column_alias_list; }
	}

	public final Column_alias_listContext column_alias_list() throws RecognitionException {
		Column_alias_listContext _localctx = new Column_alias_listContext(_ctx, getState());
		enterRule(_localctx, 146, RULE_column_alias_list);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1001);
			match(LR_BRACKET);
			setState(1002);
			((Column_alias_listContext)_localctx).column_alias = column_alias();
			((Column_alias_listContext)_localctx).alias.add(((Column_alias_listContext)_localctx).column_alias);
			setState(1007);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1003);
				match(COMMA);
				setState(1004);
				((Column_alias_listContext)_localctx).column_alias = column_alias();
				((Column_alias_listContext)_localctx).alias.add(((Column_alias_listContext)_localctx).column_alias);
				}
				}
				setState(1009);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			setState(1010);
			match(RR_BRACKET);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Column_aliasContext extends ParserRuleContext {
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public TerminalNode STRING() { return getToken(AqlParser.STRING, 0); }
		public Column_aliasContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_column_alias; }
	}

	public final Column_aliasContext column_alias() throws RecognitionException {
		Column_aliasContext _localctx = new Column_aliasContext(_ctx, getState());
		enterRule(_localctx, 148, RULE_column_alias);
		try {
			setState(1014);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case AFTER:
			case AGGREGATE:
			case APPLY:
			case AVG:
			case BINARY_KEYWORD:
			case CATCH:
			case CONCAT:
			case COUNT:
			case DATA:
			case DATEADD:
			case DATEDIFF:
			case DAYS:
			case EMPTY:
			case EXIST:
			case FILTER:
			case GETDATE:
			case GETUTCDATE:
			case GO_BATCH:
			case GO:
			case INT:
			case MAX:
			case MIN:
			case NEXT:
			case ONLY:
			case QUERY:
			case ROW:
			case ROW_NUMBER:
			case ROWS:
			case STDEV:
			case STDEVP:
			case STRING_AGG:
			case SUM:
			case TAKE:
			case THROW:
			case TIME:
			case TRY:
			case VALUE:
			case VAR:
			case VARP:
			case BEFORE:
			case ENABLED:
			case ERROR:
			case GET:
			case IIF:
			case ISNULL:
			case SPLIT:
			case START:
			case STOP:
			case VARCHAR:
			case NVARCHAR:
			case DOUBLE_QUOTE_ID:
			case SQUARE_BRACKET_ID:
			case ID:
				enterOuterAlt(_localctx, 1);
				{
				setState(1012);
				id();
				}
				break;
			case STRING:
				enterOuterAlt(_localctx, 2);
				{
				setState(1013);
				match(STRING);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Expression_listContext extends ParserRuleContext {
		public ExpressionContext expression;
		public List<ExpressionContext> exp = new ArrayList<ExpressionContext>();
		public List<ExpressionContext> expression() {
			return getRuleContexts(ExpressionContext.class);
		}
		public ExpressionContext expression(int i) {
			return getRuleContext(ExpressionContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(AqlParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(AqlParser.COMMA, i);
		}
		public Expression_listContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_expression_list; }
	}

	public final Expression_listContext expression_list() throws RecognitionException {
		Expression_listContext _localctx = new Expression_listContext(_ctx, getState());
		enterRule(_localctx, 150, RULE_expression_list);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1016);
			((Expression_listContext)_localctx).expression = expression(0);
			((Expression_listContext)_localctx).exp.add(((Expression_listContext)_localctx).expression);
			setState(1021);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1017);
				match(COMMA);
				setState(1018);
				((Expression_listContext)_localctx).expression = expression(0);
				((Expression_listContext)_localctx).exp.add(((Expression_listContext)_localctx).expression);
				}
				}
				setState(1023);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Aggregate_windowed_functionContext extends ParserRuleContext {
		public Token agg_func;
		public TerminalNode LR_BRACKET() { return getToken(AqlParser.LR_BRACKET, 0); }
		public All_distinct_expressionContext all_distinct_expression() {
			return getRuleContext(All_distinct_expressionContext.class,0);
		}
		public TerminalNode RR_BRACKET() { return getToken(AqlParser.RR_BRACKET, 0); }
		public TerminalNode AVG() { return getToken(AqlParser.AVG, 0); }
		public TerminalNode MAX() { return getToken(AqlParser.MAX, 0); }
		public TerminalNode MIN() { return getToken(AqlParser.MIN, 0); }
		public TerminalNode SUM() { return getToken(AqlParser.SUM, 0); }
		public TerminalNode STDEV() { return getToken(AqlParser.STDEV, 0); }
		public TerminalNode STDEVP() { return getToken(AqlParser.STDEVP, 0); }
		public TerminalNode VAR() { return getToken(AqlParser.VAR, 0); }
		public TerminalNode VARP() { return getToken(AqlParser.VARP, 0); }
		public TerminalNode COUNT() { return getToken(AqlParser.COUNT, 0); }
		public TerminalNode STAR() { return getToken(AqlParser.STAR, 0); }
		public Aggregate_windowed_functionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_aggregate_windowed_function; }
	}

	public final Aggregate_windowed_functionContext aggregate_windowed_function() throws RecognitionException {
		Aggregate_windowed_functionContext _localctx = new Aggregate_windowed_functionContext(_ctx, getState());
		enterRule(_localctx, 152, RULE_aggregate_windowed_function);
		int _la;
		try {
			setState(1036);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case AVG:
			case MAX:
			case MIN:
			case STDEV:
			case STDEVP:
			case SUM:
			case VAR:
			case VARP:
				enterOuterAlt(_localctx, 1);
				{
				setState(1024);
				((Aggregate_windowed_functionContext)_localctx).agg_func = _input.LT(1);
				_la = _input.LA(1);
				if ( !(((((_la - 57)) & ~0x3f) == 0 && ((1L << (_la - 57)) & ((1L << (AVG - 57)) | (1L << (MAX - 57)) | (1L << (MIN - 57)) | (1L << (STDEV - 57)) | (1L << (STDEVP - 57)) | (1L << (SUM - 57)) | (1L << (VAR - 57)) | (1L << (VARP - 57)))) != 0)) ) {
					((Aggregate_windowed_functionContext)_localctx).agg_func = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(1025);
				match(LR_BRACKET);
				setState(1026);
				all_distinct_expression();
				setState(1027);
				match(RR_BRACKET);
				}
				break;
			case COUNT:
				enterOuterAlt(_localctx, 2);
				{
				setState(1029);
				match(COUNT);
				setState(1030);
				match(LR_BRACKET);
				setState(1033);
				_errHandler.sync(this);
				switch (_input.LA(1)) {
				case STAR:
					{
					setState(1031);
					match(STAR);
					}
					break;
				case CASE:
				case COALESCE:
				case CONVERT:
				case DEFAULT:
				case DISTINCT:
				case LEFT:
				case NULL:
				case NULLIF:
				case RIGHT:
				case AFTER:
				case AGGREGATE:
				case APPLY:
				case AVG:
				case BINARY_KEYWORD:
				case CATCH:
				case CONCAT:
				case COUNT:
				case DATA:
				case DATEADD:
				case DATEDIFF:
				case DAYS:
				case EMPTY:
				case EXIST:
				case FILTER:
				case GETDATE:
				case GETUTCDATE:
				case GO_BATCH:
				case GO:
				case INT:
				case MAX:
				case MIN:
				case NEXT:
				case ONLY:
				case QUERY:
				case ROW:
				case ROW_NUMBER:
				case ROWS:
				case STDEV:
				case STDEVP:
				case STRING_AGG:
				case SUM:
				case TAKE:
				case THROW:
				case TIME:
				case TRY:
				case VALUE:
				case VAR:
				case VARP:
				case BEFORE:
				case ENABLED:
				case ERROR:
				case GET:
				case IIF:
				case ISNULL:
				case SPLIT:
				case START:
				case STOP:
				case VARCHAR:
				case NVARCHAR:
				case DOUBLE_QUOTE_ID:
				case SQUARE_BRACKET_ID:
				case LOCAL_ID:
				case DECIMAL:
				case ID:
				case STRING:
				case BINARY:
				case FLOAT:
				case REAL:
				case DOT:
				case DOLLAR:
				case LR_BRACKET:
				case PLUS:
				case MINUS:
				case BIT_NOT:
					{
					setState(1032);
					all_distinct_expression();
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				setState(1035);
				match(RR_BRACKET);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class All_distinct_expressionContext extends ParserRuleContext {
		public ExpressionContext expression() {
			return getRuleContext(ExpressionContext.class,0);
		}
		public TerminalNode DISTINCT() { return getToken(AqlParser.DISTINCT, 0); }
		public All_distinct_expressionContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_all_distinct_expression; }
	}

	public final All_distinct_expressionContext all_distinct_expression() throws RecognitionException {
		All_distinct_expressionContext _localctx = new All_distinct_expressionContext(_ctx, getState());
		enterRule(_localctx, 154, RULE_all_distinct_expression);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1039);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==DISTINCT) {
				{
				setState(1038);
				match(DISTINCT);
				}
			}

			setState(1041);
			expression(0);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Full_table_nameContext extends ParserRuleContext {
		public IdContext server;
		public IdContext database;
		public IdContext schema;
		public IdContext table;
		public List<IdContext> id() {
			return getRuleContexts(IdContext.class);
		}
		public IdContext id(int i) {
			return getRuleContext(IdContext.class,i);
		}
		public List<TerminalNode> DOT() { return getTokens(AqlParser.DOT); }
		public TerminalNode DOT(int i) {
			return getToken(AqlParser.DOT, i);
		}
		public Full_table_nameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_full_table_name; }
	}

	public final Full_table_nameContext full_table_name() throws RecognitionException {
		Full_table_nameContext _localctx = new Full_table_nameContext(_ctx, getState());
		enterRule(_localctx, 156, RULE_full_table_name);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1060);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,129,_ctx) ) {
			case 1:
				{
				setState(1043);
				((Full_table_nameContext)_localctx).server = id();
				setState(1044);
				match(DOT);
				setState(1045);
				((Full_table_nameContext)_localctx).database = id();
				setState(1046);
				match(DOT);
				setState(1047);
				((Full_table_nameContext)_localctx).schema = id();
				setState(1048);
				match(DOT);
				}
				break;
			case 2:
				{
				setState(1050);
				((Full_table_nameContext)_localctx).database = id();
				setState(1051);
				match(DOT);
				setState(1053);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (((((_la - 54)) & ~0x3f) == 0 && ((1L << (_la - 54)) & ((1L << (AFTER - 54)) | (1L << (AGGREGATE - 54)) | (1L << (APPLY - 54)) | (1L << (AVG - 54)) | (1L << (BINARY_KEYWORD - 54)) | (1L << (CATCH - 54)) | (1L << (CONCAT - 54)) | (1L << (COUNT - 54)) | (1L << (DATA - 54)) | (1L << (DATEADD - 54)) | (1L << (DATEDIFF - 54)) | (1L << (DAYS - 54)) | (1L << (EMPTY - 54)) | (1L << (EXIST - 54)) | (1L << (FILTER - 54)) | (1L << (GETDATE - 54)) | (1L << (GETUTCDATE - 54)) | (1L << (GO_BATCH - 54)) | (1L << (GO - 54)) | (1L << (INT - 54)) | (1L << (MAX - 54)) | (1L << (MIN - 54)) | (1L << (NEXT - 54)) | (1L << (ONLY - 54)) | (1L << (QUERY - 54)) | (1L << (ROW - 54)) | (1L << (ROW_NUMBER - 54)) | (1L << (ROWS - 54)) | (1L << (STDEV - 54)) | (1L << (STDEVP - 54)) | (1L << (STRING_AGG - 54)) | (1L << (SUM - 54)) | (1L << (TAKE - 54)) | (1L << (THROW - 54)) | (1L << (TIME - 54)) | (1L << (TRY - 54)) | (1L << (VALUE - 54)) | (1L << (VAR - 54)) | (1L << (VARP - 54)) | (1L << (BEFORE - 54)) | (1L << (ENABLED - 54)) | (1L << (ERROR - 54)) | (1L << (GET - 54)) | (1L << (IIF - 54)) | (1L << (ISNULL - 54)) | (1L << (SPLIT - 54)) | (1L << (START - 54)) | (1L << (STOP - 54)) | (1L << (VARCHAR - 54)) | (1L << (NVARCHAR - 54)) | (1L << (DOUBLE_QUOTE_ID - 54)) | (1L << (SQUARE_BRACKET_ID - 54)) | (1L << (ID - 54)))) != 0)) {
					{
					setState(1052);
					((Full_table_nameContext)_localctx).schema = id();
					}
				}

				setState(1055);
				match(DOT);
				}
				break;
			case 3:
				{
				setState(1057);
				((Full_table_nameContext)_localctx).schema = id();
				setState(1058);
				match(DOT);
				}
				break;
			}
			setState(1062);
			((Full_table_nameContext)_localctx).table = id();
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Table_nameContext extends ParserRuleContext {
		public IdContext database;
		public IdContext schema;
		public IdContext table;
		public List<IdContext> id() {
			return getRuleContexts(IdContext.class);
		}
		public IdContext id(int i) {
			return getRuleContext(IdContext.class,i);
		}
		public List<TerminalNode> DOT() { return getTokens(AqlParser.DOT); }
		public TerminalNode DOT(int i) {
			return getToken(AqlParser.DOT, i);
		}
		public Table_nameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_table_name; }
	}

	public final Table_nameContext table_name() throws RecognitionException {
		Table_nameContext _localctx = new Table_nameContext(_ctx, getState());
		enterRule(_localctx, 158, RULE_table_name);
		int _la;
		try {
			setState(1089);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,134,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1074);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,131,_ctx) ) {
				case 1:
					{
					setState(1064);
					((Table_nameContext)_localctx).database = id();
					setState(1065);
					match(DOT);
					setState(1067);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (((((_la - 54)) & ~0x3f) == 0 && ((1L << (_la - 54)) & ((1L << (AFTER - 54)) | (1L << (AGGREGATE - 54)) | (1L << (APPLY - 54)) | (1L << (AVG - 54)) | (1L << (BINARY_KEYWORD - 54)) | (1L << (CATCH - 54)) | (1L << (CONCAT - 54)) | (1L << (COUNT - 54)) | (1L << (DATA - 54)) | (1L << (DATEADD - 54)) | (1L << (DATEDIFF - 54)) | (1L << (DAYS - 54)) | (1L << (EMPTY - 54)) | (1L << (EXIST - 54)) | (1L << (FILTER - 54)) | (1L << (GETDATE - 54)) | (1L << (GETUTCDATE - 54)) | (1L << (GO_BATCH - 54)) | (1L << (GO - 54)) | (1L << (INT - 54)) | (1L << (MAX - 54)) | (1L << (MIN - 54)) | (1L << (NEXT - 54)) | (1L << (ONLY - 54)) | (1L << (QUERY - 54)) | (1L << (ROW - 54)) | (1L << (ROW_NUMBER - 54)) | (1L << (ROWS - 54)) | (1L << (STDEV - 54)) | (1L << (STDEVP - 54)) | (1L << (STRING_AGG - 54)) | (1L << (SUM - 54)) | (1L << (TAKE - 54)) | (1L << (THROW - 54)) | (1L << (TIME - 54)) | (1L << (TRY - 54)) | (1L << (VALUE - 54)) | (1L << (VAR - 54)) | (1L << (VARP - 54)) | (1L << (BEFORE - 54)) | (1L << (ENABLED - 54)) | (1L << (ERROR - 54)) | (1L << (GET - 54)) | (1L << (IIF - 54)) | (1L << (ISNULL - 54)) | (1L << (SPLIT - 54)) | (1L << (START - 54)) | (1L << (STOP - 54)) | (1L << (VARCHAR - 54)) | (1L << (NVARCHAR - 54)) | (1L << (DOUBLE_QUOTE_ID - 54)) | (1L << (SQUARE_BRACKET_ID - 54)) | (1L << (ID - 54)))) != 0)) {
						{
						setState(1066);
						((Table_nameContext)_localctx).schema = id();
						}
					}

					setState(1069);
					match(DOT);
					}
					break;
				case 2:
					{
					setState(1071);
					((Table_nameContext)_localctx).schema = id();
					setState(1072);
					match(DOT);
					}
					break;
				}
				setState(1076);
				((Table_nameContext)_localctx).table = id();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1087);
				_errHandler.sync(this);
				switch ( getInterpreter().adaptivePredict(_input,133,_ctx) ) {
				case 1:
					{
					setState(1077);
					((Table_nameContext)_localctx).database = id();
					setState(1078);
					match(DOT);
					setState(1080);
					_errHandler.sync(this);
					_la = _input.LA(1);
					if (((((_la - 54)) & ~0x3f) == 0 && ((1L << (_la - 54)) & ((1L << (AFTER - 54)) | (1L << (AGGREGATE - 54)) | (1L << (APPLY - 54)) | (1L << (AVG - 54)) | (1L << (BINARY_KEYWORD - 54)) | (1L << (CATCH - 54)) | (1L << (CONCAT - 54)) | (1L << (COUNT - 54)) | (1L << (DATA - 54)) | (1L << (DATEADD - 54)) | (1L << (DATEDIFF - 54)) | (1L << (DAYS - 54)) | (1L << (EMPTY - 54)) | (1L << (EXIST - 54)) | (1L << (FILTER - 54)) | (1L << (GETDATE - 54)) | (1L << (GETUTCDATE - 54)) | (1L << (GO_BATCH - 54)) | (1L << (GO - 54)) | (1L << (INT - 54)) | (1L << (MAX - 54)) | (1L << (MIN - 54)) | (1L << (NEXT - 54)) | (1L << (ONLY - 54)) | (1L << (QUERY - 54)) | (1L << (ROW - 54)) | (1L << (ROW_NUMBER - 54)) | (1L << (ROWS - 54)) | (1L << (STDEV - 54)) | (1L << (STDEVP - 54)) | (1L << (STRING_AGG - 54)) | (1L << (SUM - 54)) | (1L << (TAKE - 54)) | (1L << (THROW - 54)) | (1L << (TIME - 54)) | (1L << (TRY - 54)) | (1L << (VALUE - 54)) | (1L << (VAR - 54)) | (1L << (VARP - 54)) | (1L << (BEFORE - 54)) | (1L << (ENABLED - 54)) | (1L << (ERROR - 54)) | (1L << (GET - 54)) | (1L << (IIF - 54)) | (1L << (ISNULL - 54)) | (1L << (SPLIT - 54)) | (1L << (START - 54)) | (1L << (STOP - 54)) | (1L << (VARCHAR - 54)) | (1L << (NVARCHAR - 54)) | (1L << (DOUBLE_QUOTE_ID - 54)) | (1L << (SQUARE_BRACKET_ID - 54)) | (1L << (ID - 54)))) != 0)) {
						{
						setState(1079);
						((Table_nameContext)_localctx).schema = id();
						}
					}

					setState(1082);
					match(DOT);
					}
					break;
				case 2:
					{
					setState(1084);
					((Table_nameContext)_localctx).schema = id();
					setState(1085);
					match(DOT);
					}
					break;
				}
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Full_column_nameContext extends ParserRuleContext {
		public IdContext server;
		public IdContext schema;
		public IdContext tablename;
		public IdContext column_name;
		public List<TerminalNode> DOT() { return getTokens(AqlParser.DOT); }
		public TerminalNode DOT(int i) {
			return getToken(AqlParser.DOT, i);
		}
		public List<IdContext> id() {
			return getRuleContexts(IdContext.class);
		}
		public IdContext id(int i) {
			return getRuleContext(IdContext.class,i);
		}
		public Full_column_nameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_full_column_name; }
	}

	public final Full_column_nameContext full_column_name() throws RecognitionException {
		Full_column_nameContext _localctx = new Full_column_nameContext(_ctx, getState());
		enterRule(_localctx, 160, RULE_full_column_name);
		int _la;
		try {
			setState(1119);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,141,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1092);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (((((_la - 54)) & ~0x3f) == 0 && ((1L << (_la - 54)) & ((1L << (AFTER - 54)) | (1L << (AGGREGATE - 54)) | (1L << (APPLY - 54)) | (1L << (AVG - 54)) | (1L << (BINARY_KEYWORD - 54)) | (1L << (CATCH - 54)) | (1L << (CONCAT - 54)) | (1L << (COUNT - 54)) | (1L << (DATA - 54)) | (1L << (DATEADD - 54)) | (1L << (DATEDIFF - 54)) | (1L << (DAYS - 54)) | (1L << (EMPTY - 54)) | (1L << (EXIST - 54)) | (1L << (FILTER - 54)) | (1L << (GETDATE - 54)) | (1L << (GETUTCDATE - 54)) | (1L << (GO_BATCH - 54)) | (1L << (GO - 54)) | (1L << (INT - 54)) | (1L << (MAX - 54)) | (1L << (MIN - 54)) | (1L << (NEXT - 54)) | (1L << (ONLY - 54)) | (1L << (QUERY - 54)) | (1L << (ROW - 54)) | (1L << (ROW_NUMBER - 54)) | (1L << (ROWS - 54)) | (1L << (STDEV - 54)) | (1L << (STDEVP - 54)) | (1L << (STRING_AGG - 54)) | (1L << (SUM - 54)) | (1L << (TAKE - 54)) | (1L << (THROW - 54)) | (1L << (TIME - 54)) | (1L << (TRY - 54)) | (1L << (VALUE - 54)) | (1L << (VAR - 54)) | (1L << (VARP - 54)) | (1L << (BEFORE - 54)) | (1L << (ENABLED - 54)) | (1L << (ERROR - 54)) | (1L << (GET - 54)) | (1L << (IIF - 54)) | (1L << (ISNULL - 54)) | (1L << (SPLIT - 54)) | (1L << (START - 54)) | (1L << (STOP - 54)) | (1L << (VARCHAR - 54)) | (1L << (NVARCHAR - 54)) | (1L << (DOUBLE_QUOTE_ID - 54)) | (1L << (SQUARE_BRACKET_ID - 54)) | (1L << (ID - 54)))) != 0)) {
					{
					setState(1091);
					((Full_column_nameContext)_localctx).server = id();
					}
				}

				setState(1094);
				match(DOT);
				setState(1096);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (((((_la - 54)) & ~0x3f) == 0 && ((1L << (_la - 54)) & ((1L << (AFTER - 54)) | (1L << (AGGREGATE - 54)) | (1L << (APPLY - 54)) | (1L << (AVG - 54)) | (1L << (BINARY_KEYWORD - 54)) | (1L << (CATCH - 54)) | (1L << (CONCAT - 54)) | (1L << (COUNT - 54)) | (1L << (DATA - 54)) | (1L << (DATEADD - 54)) | (1L << (DATEDIFF - 54)) | (1L << (DAYS - 54)) | (1L << (EMPTY - 54)) | (1L << (EXIST - 54)) | (1L << (FILTER - 54)) | (1L << (GETDATE - 54)) | (1L << (GETUTCDATE - 54)) | (1L << (GO_BATCH - 54)) | (1L << (GO - 54)) | (1L << (INT - 54)) | (1L << (MAX - 54)) | (1L << (MIN - 54)) | (1L << (NEXT - 54)) | (1L << (ONLY - 54)) | (1L << (QUERY - 54)) | (1L << (ROW - 54)) | (1L << (ROW_NUMBER - 54)) | (1L << (ROWS - 54)) | (1L << (STDEV - 54)) | (1L << (STDEVP - 54)) | (1L << (STRING_AGG - 54)) | (1L << (SUM - 54)) | (1L << (TAKE - 54)) | (1L << (THROW - 54)) | (1L << (TIME - 54)) | (1L << (TRY - 54)) | (1L << (VALUE - 54)) | (1L << (VAR - 54)) | (1L << (VARP - 54)) | (1L << (BEFORE - 54)) | (1L << (ENABLED - 54)) | (1L << (ERROR - 54)) | (1L << (GET - 54)) | (1L << (IIF - 54)) | (1L << (ISNULL - 54)) | (1L << (SPLIT - 54)) | (1L << (START - 54)) | (1L << (STOP - 54)) | (1L << (VARCHAR - 54)) | (1L << (NVARCHAR - 54)) | (1L << (DOUBLE_QUOTE_ID - 54)) | (1L << (SQUARE_BRACKET_ID - 54)) | (1L << (ID - 54)))) != 0)) {
					{
					setState(1095);
					((Full_column_nameContext)_localctx).schema = id();
					}
				}

				setState(1098);
				match(DOT);
				setState(1100);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (((((_la - 54)) & ~0x3f) == 0 && ((1L << (_la - 54)) & ((1L << (AFTER - 54)) | (1L << (AGGREGATE - 54)) | (1L << (APPLY - 54)) | (1L << (AVG - 54)) | (1L << (BINARY_KEYWORD - 54)) | (1L << (CATCH - 54)) | (1L << (CONCAT - 54)) | (1L << (COUNT - 54)) | (1L << (DATA - 54)) | (1L << (DATEADD - 54)) | (1L << (DATEDIFF - 54)) | (1L << (DAYS - 54)) | (1L << (EMPTY - 54)) | (1L << (EXIST - 54)) | (1L << (FILTER - 54)) | (1L << (GETDATE - 54)) | (1L << (GETUTCDATE - 54)) | (1L << (GO_BATCH - 54)) | (1L << (GO - 54)) | (1L << (INT - 54)) | (1L << (MAX - 54)) | (1L << (MIN - 54)) | (1L << (NEXT - 54)) | (1L << (ONLY - 54)) | (1L << (QUERY - 54)) | (1L << (ROW - 54)) | (1L << (ROW_NUMBER - 54)) | (1L << (ROWS - 54)) | (1L << (STDEV - 54)) | (1L << (STDEVP - 54)) | (1L << (STRING_AGG - 54)) | (1L << (SUM - 54)) | (1L << (TAKE - 54)) | (1L << (THROW - 54)) | (1L << (TIME - 54)) | (1L << (TRY - 54)) | (1L << (VALUE - 54)) | (1L << (VAR - 54)) | (1L << (VARP - 54)) | (1L << (BEFORE - 54)) | (1L << (ENABLED - 54)) | (1L << (ERROR - 54)) | (1L << (GET - 54)) | (1L << (IIF - 54)) | (1L << (ISNULL - 54)) | (1L << (SPLIT - 54)) | (1L << (START - 54)) | (1L << (STOP - 54)) | (1L << (VARCHAR - 54)) | (1L << (NVARCHAR - 54)) | (1L << (DOUBLE_QUOTE_ID - 54)) | (1L << (SQUARE_BRACKET_ID - 54)) | (1L << (ID - 54)))) != 0)) {
					{
					setState(1099);
					((Full_column_nameContext)_localctx).tablename = id();
					}
				}

				setState(1102);
				match(DOT);
				setState(1103);
				((Full_column_nameContext)_localctx).column_name = id();
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1105);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (((((_la - 54)) & ~0x3f) == 0 && ((1L << (_la - 54)) & ((1L << (AFTER - 54)) | (1L << (AGGREGATE - 54)) | (1L << (APPLY - 54)) | (1L << (AVG - 54)) | (1L << (BINARY_KEYWORD - 54)) | (1L << (CATCH - 54)) | (1L << (CONCAT - 54)) | (1L << (COUNT - 54)) | (1L << (DATA - 54)) | (1L << (DATEADD - 54)) | (1L << (DATEDIFF - 54)) | (1L << (DAYS - 54)) | (1L << (EMPTY - 54)) | (1L << (EXIST - 54)) | (1L << (FILTER - 54)) | (1L << (GETDATE - 54)) | (1L << (GETUTCDATE - 54)) | (1L << (GO_BATCH - 54)) | (1L << (GO - 54)) | (1L << (INT - 54)) | (1L << (MAX - 54)) | (1L << (MIN - 54)) | (1L << (NEXT - 54)) | (1L << (ONLY - 54)) | (1L << (QUERY - 54)) | (1L << (ROW - 54)) | (1L << (ROW_NUMBER - 54)) | (1L << (ROWS - 54)) | (1L << (STDEV - 54)) | (1L << (STDEVP - 54)) | (1L << (STRING_AGG - 54)) | (1L << (SUM - 54)) | (1L << (TAKE - 54)) | (1L << (THROW - 54)) | (1L << (TIME - 54)) | (1L << (TRY - 54)) | (1L << (VALUE - 54)) | (1L << (VAR - 54)) | (1L << (VARP - 54)) | (1L << (BEFORE - 54)) | (1L << (ENABLED - 54)) | (1L << (ERROR - 54)) | (1L << (GET - 54)) | (1L << (IIF - 54)) | (1L << (ISNULL - 54)) | (1L << (SPLIT - 54)) | (1L << (START - 54)) | (1L << (STOP - 54)) | (1L << (VARCHAR - 54)) | (1L << (NVARCHAR - 54)) | (1L << (DOUBLE_QUOTE_ID - 54)) | (1L << (SQUARE_BRACKET_ID - 54)) | (1L << (ID - 54)))) != 0)) {
					{
					setState(1104);
					((Full_column_nameContext)_localctx).schema = id();
					}
				}

				setState(1107);
				match(DOT);
				setState(1109);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (((((_la - 54)) & ~0x3f) == 0 && ((1L << (_la - 54)) & ((1L << (AFTER - 54)) | (1L << (AGGREGATE - 54)) | (1L << (APPLY - 54)) | (1L << (AVG - 54)) | (1L << (BINARY_KEYWORD - 54)) | (1L << (CATCH - 54)) | (1L << (CONCAT - 54)) | (1L << (COUNT - 54)) | (1L << (DATA - 54)) | (1L << (DATEADD - 54)) | (1L << (DATEDIFF - 54)) | (1L << (DAYS - 54)) | (1L << (EMPTY - 54)) | (1L << (EXIST - 54)) | (1L << (FILTER - 54)) | (1L << (GETDATE - 54)) | (1L << (GETUTCDATE - 54)) | (1L << (GO_BATCH - 54)) | (1L << (GO - 54)) | (1L << (INT - 54)) | (1L << (MAX - 54)) | (1L << (MIN - 54)) | (1L << (NEXT - 54)) | (1L << (ONLY - 54)) | (1L << (QUERY - 54)) | (1L << (ROW - 54)) | (1L << (ROW_NUMBER - 54)) | (1L << (ROWS - 54)) | (1L << (STDEV - 54)) | (1L << (STDEVP - 54)) | (1L << (STRING_AGG - 54)) | (1L << (SUM - 54)) | (1L << (TAKE - 54)) | (1L << (THROW - 54)) | (1L << (TIME - 54)) | (1L << (TRY - 54)) | (1L << (VALUE - 54)) | (1L << (VAR - 54)) | (1L << (VARP - 54)) | (1L << (BEFORE - 54)) | (1L << (ENABLED - 54)) | (1L << (ERROR - 54)) | (1L << (GET - 54)) | (1L << (IIF - 54)) | (1L << (ISNULL - 54)) | (1L << (SPLIT - 54)) | (1L << (START - 54)) | (1L << (STOP - 54)) | (1L << (VARCHAR - 54)) | (1L << (NVARCHAR - 54)) | (1L << (DOUBLE_QUOTE_ID - 54)) | (1L << (SQUARE_BRACKET_ID - 54)) | (1L << (ID - 54)))) != 0)) {
					{
					setState(1108);
					((Full_column_nameContext)_localctx).tablename = id();
					}
				}

				setState(1111);
				match(DOT);
				setState(1112);
				((Full_column_nameContext)_localctx).column_name = id();
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1114);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (((((_la - 54)) & ~0x3f) == 0 && ((1L << (_la - 54)) & ((1L << (AFTER - 54)) | (1L << (AGGREGATE - 54)) | (1L << (APPLY - 54)) | (1L << (AVG - 54)) | (1L << (BINARY_KEYWORD - 54)) | (1L << (CATCH - 54)) | (1L << (CONCAT - 54)) | (1L << (COUNT - 54)) | (1L << (DATA - 54)) | (1L << (DATEADD - 54)) | (1L << (DATEDIFF - 54)) | (1L << (DAYS - 54)) | (1L << (EMPTY - 54)) | (1L << (EXIST - 54)) | (1L << (FILTER - 54)) | (1L << (GETDATE - 54)) | (1L << (GETUTCDATE - 54)) | (1L << (GO_BATCH - 54)) | (1L << (GO - 54)) | (1L << (INT - 54)) | (1L << (MAX - 54)) | (1L << (MIN - 54)) | (1L << (NEXT - 54)) | (1L << (ONLY - 54)) | (1L << (QUERY - 54)) | (1L << (ROW - 54)) | (1L << (ROW_NUMBER - 54)) | (1L << (ROWS - 54)) | (1L << (STDEV - 54)) | (1L << (STDEVP - 54)) | (1L << (STRING_AGG - 54)) | (1L << (SUM - 54)) | (1L << (TAKE - 54)) | (1L << (THROW - 54)) | (1L << (TIME - 54)) | (1L << (TRY - 54)) | (1L << (VALUE - 54)) | (1L << (VAR - 54)) | (1L << (VARP - 54)) | (1L << (BEFORE - 54)) | (1L << (ENABLED - 54)) | (1L << (ERROR - 54)) | (1L << (GET - 54)) | (1L << (IIF - 54)) | (1L << (ISNULL - 54)) | (1L << (SPLIT - 54)) | (1L << (START - 54)) | (1L << (STOP - 54)) | (1L << (VARCHAR - 54)) | (1L << (NVARCHAR - 54)) | (1L << (DOUBLE_QUOTE_ID - 54)) | (1L << (SQUARE_BRACKET_ID - 54)) | (1L << (ID - 54)))) != 0)) {
					{
					setState(1113);
					((Full_column_nameContext)_localctx).tablename = id();
					}
				}

				setState(1116);
				match(DOT);
				setState(1117);
				((Full_column_nameContext)_localctx).column_name = id();
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(1118);
				((Full_column_nameContext)_localctx).column_name = id();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Column_name_listContext extends ParserRuleContext {
		public IdContext id;
		public List<IdContext> col = new ArrayList<IdContext>();
		public List<IdContext> id() {
			return getRuleContexts(IdContext.class);
		}
		public IdContext id(int i) {
			return getRuleContext(IdContext.class,i);
		}
		public List<TerminalNode> COMMA() { return getTokens(AqlParser.COMMA); }
		public TerminalNode COMMA(int i) {
			return getToken(AqlParser.COMMA, i);
		}
		public Column_name_listContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_column_name_list; }
	}

	public final Column_name_listContext column_name_list() throws RecognitionException {
		Column_name_listContext _localctx = new Column_name_listContext(_ctx, getState());
		enterRule(_localctx, 162, RULE_column_name_list);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1121);
			((Column_name_listContext)_localctx).id = id();
			((Column_name_listContext)_localctx).col.add(((Column_name_listContext)_localctx).id);
			setState(1126);
			_errHandler.sync(this);
			_la = _input.LA(1);
			while (_la==COMMA) {
				{
				{
				setState(1122);
				match(COMMA);
				setState(1123);
				((Column_name_listContext)_localctx).id = id();
				((Column_name_listContext)_localctx).col.add(((Column_name_listContext)_localctx).id);
				}
				}
				setState(1128);
				_errHandler.sync(this);
				_la = _input.LA(1);
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Null_notnullContext extends ParserRuleContext {
		public TerminalNode NULL() { return getToken(AqlParser.NULL, 0); }
		public TerminalNode NOT() { return getToken(AqlParser.NOT, 0); }
		public Null_notnullContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_null_notnull; }
	}

	public final Null_notnullContext null_notnull() throws RecognitionException {
		Null_notnullContext _localctx = new Null_notnullContext(_ctx, getState());
		enterRule(_localctx, 164, RULE_null_notnull);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1130);
			_errHandler.sync(this);
			_la = _input.LA(1);
			if (_la==NOT) {
				{
				setState(1129);
				match(NOT);
				}
			}

			setState(1132);
			match(NULL);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Scalar_function_nameContext extends ParserRuleContext {
		public TerminalNode RIGHT() { return getToken(AqlParser.RIGHT, 0); }
		public TerminalNode LEFT() { return getToken(AqlParser.LEFT, 0); }
		public Scalar_function_nameContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_scalar_function_name; }
	}

	public final Scalar_function_nameContext scalar_function_name() throws RecognitionException {
		Scalar_function_nameContext _localctx = new Scalar_function_nameContext(_ctx, getState());
		enterRule(_localctx, 166, RULE_scalar_function_name);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1134);
			_la = _input.LA(1);
			if ( !(_la==LEFT || _la==RIGHT) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Data_typeContext extends ParserRuleContext {
		public Token scaled;
		public IdContext ext_type;
		public Token scale;
		public Token prec;
		public IdContext unscaled_type;
		public TerminalNode LR_BRACKET() { return getToken(AqlParser.LR_BRACKET, 0); }
		public TerminalNode MAX() { return getToken(AqlParser.MAX, 0); }
		public TerminalNode RR_BRACKET() { return getToken(AqlParser.RR_BRACKET, 0); }
		public TerminalNode VARCHAR() { return getToken(AqlParser.VARCHAR, 0); }
		public TerminalNode NVARCHAR() { return getToken(AqlParser.NVARCHAR, 0); }
		public TerminalNode COMMA() { return getToken(AqlParser.COMMA, 0); }
		public IdContext id() {
			return getRuleContext(IdContext.class,0);
		}
		public List<TerminalNode> DECIMAL() { return getTokens(AqlParser.DECIMAL); }
		public TerminalNode DECIMAL(int i) {
			return getToken(AqlParser.DECIMAL, i);
		}
		public Data_typeContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_data_type; }
	}

	public final Data_typeContext data_type() throws RecognitionException {
		Data_typeContext _localctx = new Data_typeContext(_ctx, getState());
		enterRule(_localctx, 168, RULE_data_type);
		int _la;
		try {
			setState(1153);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,144,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1136);
				((Data_typeContext)_localctx).scaled = _input.LT(1);
				_la = _input.LA(1);
				if ( !(_la==VARCHAR || _la==NVARCHAR) ) {
					((Data_typeContext)_localctx).scaled = (Token)_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				setState(1137);
				match(LR_BRACKET);
				setState(1138);
				match(MAX);
				setState(1139);
				match(RR_BRACKET);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1140);
				((Data_typeContext)_localctx).ext_type = id();
				setState(1141);
				match(LR_BRACKET);
				setState(1142);
				((Data_typeContext)_localctx).scale = match(DECIMAL);
				setState(1143);
				match(COMMA);
				setState(1144);
				((Data_typeContext)_localctx).prec = match(DECIMAL);
				setState(1145);
				match(RR_BRACKET);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1147);
				((Data_typeContext)_localctx).ext_type = id();
				setState(1148);
				match(LR_BRACKET);
				setState(1149);
				((Data_typeContext)_localctx).scale = match(DECIMAL);
				setState(1150);
				match(RR_BRACKET);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(1152);
				((Data_typeContext)_localctx).unscaled_type = id();
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class ConstantContext extends ParserRuleContext {
		public Token dollar;
		public TerminalNode STRING() { return getToken(AqlParser.STRING, 0); }
		public TerminalNode BINARY() { return getToken(AqlParser.BINARY, 0); }
		public TerminalNode DECIMAL() { return getToken(AqlParser.DECIMAL, 0); }
		public SignContext sign() {
			return getRuleContext(SignContext.class,0);
		}
		public TerminalNode REAL() { return getToken(AqlParser.REAL, 0); }
		public TerminalNode FLOAT() { return getToken(AqlParser.FLOAT, 0); }
		public TerminalNode DOLLAR() { return getToken(AqlParser.DOLLAR, 0); }
		public ConstantContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_constant; }
	}

	public final ConstantContext constant() throws RecognitionException {
		ConstantContext _localctx = new ConstantContext(_ctx, getState());
		enterRule(_localctx, 170, RULE_constant);
		int _la;
		try {
			setState(1170);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,148,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1155);
				match(STRING);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1156);
				match(BINARY);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1158);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==PLUS || _la==MINUS) {
					{
					setState(1157);
					sign();
					}
				}

				setState(1160);
				match(DECIMAL);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(1162);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==PLUS || _la==MINUS) {
					{
					setState(1161);
					sign();
					}
				}

				setState(1164);
				_la = _input.LA(1);
				if ( !(_la==FLOAT || _la==REAL) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(1166);
				_errHandler.sync(this);
				_la = _input.LA(1);
				if (_la==PLUS || _la==MINUS) {
					{
					setState(1165);
					sign();
					}
				}

				setState(1168);
				((ConstantContext)_localctx).dollar = match(DOLLAR);
				setState(1169);
				_la = _input.LA(1);
				if ( !(_la==DECIMAL || _la==FLOAT) ) {
				_errHandler.recoverInline(this);
				}
				else {
					if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
					_errHandler.reportMatch(this);
					consume();
				}
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class SignContext extends ParserRuleContext {
		public TerminalNode PLUS() { return getToken(AqlParser.PLUS, 0); }
		public TerminalNode MINUS() { return getToken(AqlParser.MINUS, 0); }
		public SignContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_sign; }
	}

	public final SignContext sign() throws RecognitionException {
		SignContext _localctx = new SignContext(_ctx, getState());
		enterRule(_localctx, 172, RULE_sign);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1172);
			_la = _input.LA(1);
			if ( !(_la==PLUS || _la==MINUS) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class KeywordContext extends ParserRuleContext {
		public TerminalNode AFTER() { return getToken(AqlParser.AFTER, 0); }
		public TerminalNode AGGREGATE() { return getToken(AqlParser.AGGREGATE, 0); }
		public TerminalNode APPLY() { return getToken(AqlParser.APPLY, 0); }
		public TerminalNode AVG() { return getToken(AqlParser.AVG, 0); }
		public TerminalNode CATCH() { return getToken(AqlParser.CATCH, 0); }
		public TerminalNode CONCAT() { return getToken(AqlParser.CONCAT, 0); }
		public TerminalNode COUNT() { return getToken(AqlParser.COUNT, 0); }
		public TerminalNode DATA() { return getToken(AqlParser.DATA, 0); }
		public TerminalNode DATEADD() { return getToken(AqlParser.DATEADD, 0); }
		public TerminalNode DATEDIFF() { return getToken(AqlParser.DATEDIFF, 0); }
		public TerminalNode DAYS() { return getToken(AqlParser.DAYS, 0); }
		public TerminalNode EMPTY() { return getToken(AqlParser.EMPTY, 0); }
		public TerminalNode EXIST() { return getToken(AqlParser.EXIST, 0); }
		public TerminalNode FILTER() { return getToken(AqlParser.FILTER, 0); }
		public TerminalNode GETDATE() { return getToken(AqlParser.GETDATE, 0); }
		public TerminalNode GETUTCDATE() { return getToken(AqlParser.GETUTCDATE, 0); }
		public TerminalNode GO() { return getToken(AqlParser.GO, 0); }
		public TerminalNode GO_BATCH() { return getToken(AqlParser.GO_BATCH, 0); }
		public TerminalNode INT() { return getToken(AqlParser.INT, 0); }
		public TerminalNode MAX() { return getToken(AqlParser.MAX, 0); }
		public TerminalNode MIN() { return getToken(AqlParser.MIN, 0); }
		public TerminalNode NEXT() { return getToken(AqlParser.NEXT, 0); }
		public TerminalNode ONLY() { return getToken(AqlParser.ONLY, 0); }
		public TerminalNode QUERY() { return getToken(AqlParser.QUERY, 0); }
		public TerminalNode ROW() { return getToken(AqlParser.ROW, 0); }
		public TerminalNode ROW_NUMBER() { return getToken(AqlParser.ROW_NUMBER, 0); }
		public TerminalNode ROWS() { return getToken(AqlParser.ROWS, 0); }
		public TerminalNode STDEV() { return getToken(AqlParser.STDEV, 0); }
		public TerminalNode STDEVP() { return getToken(AqlParser.STDEVP, 0); }
		public TerminalNode STRING_AGG() { return getToken(AqlParser.STRING_AGG, 0); }
		public TerminalNode SUM() { return getToken(AqlParser.SUM, 0); }
		public TerminalNode TAKE() { return getToken(AqlParser.TAKE, 0); }
		public TerminalNode THROW() { return getToken(AqlParser.THROW, 0); }
		public TerminalNode TIME() { return getToken(AqlParser.TIME, 0); }
		public TerminalNode TRY() { return getToken(AqlParser.TRY, 0); }
		public TerminalNode VALUE() { return getToken(AqlParser.VALUE, 0); }
		public TerminalNode VAR() { return getToken(AqlParser.VAR, 0); }
		public TerminalNode VARP() { return getToken(AqlParser.VARP, 0); }
		public TerminalNode BEFORE() { return getToken(AqlParser.BEFORE, 0); }
		public TerminalNode ENABLED() { return getToken(AqlParser.ENABLED, 0); }
		public TerminalNode ERROR() { return getToken(AqlParser.ERROR, 0); }
		public TerminalNode GET() { return getToken(AqlParser.GET, 0); }
		public TerminalNode IIF() { return getToken(AqlParser.IIF, 0); }
		public TerminalNode ISNULL() { return getToken(AqlParser.ISNULL, 0); }
		public TerminalNode SPLIT() { return getToken(AqlParser.SPLIT, 0); }
		public TerminalNode START() { return getToken(AqlParser.START, 0); }
		public TerminalNode STOP() { return getToken(AqlParser.STOP, 0); }
		public TerminalNode VARCHAR() { return getToken(AqlParser.VARCHAR, 0); }
		public TerminalNode NVARCHAR() { return getToken(AqlParser.NVARCHAR, 0); }
		public TerminalNode BINARY_KEYWORD() { return getToken(AqlParser.BINARY_KEYWORD, 0); }
		public KeywordContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_keyword; }
	}

	public final KeywordContext keyword() throws RecognitionException {
		KeywordContext _localctx = new KeywordContext(_ctx, getState());
		enterRule(_localctx, 174, RULE_keyword);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1174);
			_la = _input.LA(1);
			if ( !(((((_la - 54)) & ~0x3f) == 0 && ((1L << (_la - 54)) & ((1L << (AFTER - 54)) | (1L << (AGGREGATE - 54)) | (1L << (APPLY - 54)) | (1L << (AVG - 54)) | (1L << (BINARY_KEYWORD - 54)) | (1L << (CATCH - 54)) | (1L << (CONCAT - 54)) | (1L << (COUNT - 54)) | (1L << (DATA - 54)) | (1L << (DATEADD - 54)) | (1L << (DATEDIFF - 54)) | (1L << (DAYS - 54)) | (1L << (EMPTY - 54)) | (1L << (EXIST - 54)) | (1L << (FILTER - 54)) | (1L << (GETDATE - 54)) | (1L << (GETUTCDATE - 54)) | (1L << (GO_BATCH - 54)) | (1L << (GO - 54)) | (1L << (INT - 54)) | (1L << (MAX - 54)) | (1L << (MIN - 54)) | (1L << (NEXT - 54)) | (1L << (ONLY - 54)) | (1L << (QUERY - 54)) | (1L << (ROW - 54)) | (1L << (ROW_NUMBER - 54)) | (1L << (ROWS - 54)) | (1L << (STDEV - 54)) | (1L << (STDEVP - 54)) | (1L << (STRING_AGG - 54)) | (1L << (SUM - 54)) | (1L << (TAKE - 54)) | (1L << (THROW - 54)) | (1L << (TIME - 54)) | (1L << (TRY - 54)) | (1L << (VALUE - 54)) | (1L << (VAR - 54)) | (1L << (VARP - 54)) | (1L << (BEFORE - 54)) | (1L << (ENABLED - 54)) | (1L << (ERROR - 54)) | (1L << (GET - 54)) | (1L << (IIF - 54)) | (1L << (ISNULL - 54)) | (1L << (SPLIT - 54)) | (1L << (START - 54)) | (1L << (STOP - 54)) | (1L << (VARCHAR - 54)) | (1L << (NVARCHAR - 54)))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class IdContext extends ParserRuleContext {
		public TerminalNode ID() { return getToken(AqlParser.ID, 0); }
		public TerminalNode DOUBLE_QUOTE_ID() { return getToken(AqlParser.DOUBLE_QUOTE_ID, 0); }
		public TerminalNode SQUARE_BRACKET_ID() { return getToken(AqlParser.SQUARE_BRACKET_ID, 0); }
		public KeywordContext keyword() {
			return getRuleContext(KeywordContext.class,0);
		}
		public IdContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_id; }
	}

	public final IdContext id() throws RecognitionException {
		IdContext _localctx = new IdContext(_ctx, getState());
		enterRule(_localctx, 176, RULE_id);
		try {
			setState(1180);
			_errHandler.sync(this);
			switch (_input.LA(1)) {
			case ID:
				enterOuterAlt(_localctx, 1);
				{
				setState(1176);
				match(ID);
				}
				break;
			case DOUBLE_QUOTE_ID:
				enterOuterAlt(_localctx, 2);
				{
				setState(1177);
				match(DOUBLE_QUOTE_ID);
				}
				break;
			case SQUARE_BRACKET_ID:
				enterOuterAlt(_localctx, 3);
				{
				setState(1178);
				match(SQUARE_BRACKET_ID);
				}
				break;
			case AFTER:
			case AGGREGATE:
			case APPLY:
			case AVG:
			case BINARY_KEYWORD:
			case CATCH:
			case CONCAT:
			case COUNT:
			case DATA:
			case DATEADD:
			case DATEDIFF:
			case DAYS:
			case EMPTY:
			case EXIST:
			case FILTER:
			case GETDATE:
			case GETUTCDATE:
			case GO_BATCH:
			case GO:
			case INT:
			case MAX:
			case MIN:
			case NEXT:
			case ONLY:
			case QUERY:
			case ROW:
			case ROW_NUMBER:
			case ROWS:
			case STDEV:
			case STDEVP:
			case STRING_AGG:
			case SUM:
			case TAKE:
			case THROW:
			case TIME:
			case TRY:
			case VALUE:
			case VAR:
			case VARP:
			case BEFORE:
			case ENABLED:
			case ERROR:
			case GET:
			case IIF:
			case ISNULL:
			case SPLIT:
			case START:
			case STOP:
			case VARCHAR:
			case NVARCHAR:
				enterOuterAlt(_localctx, 4);
				{
				setState(1179);
				keyword();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Comparison_operatorContext extends ParserRuleContext {
		public TerminalNode EQUAL() { return getToken(AqlParser.EQUAL, 0); }
		public TerminalNode GREATER() { return getToken(AqlParser.GREATER, 0); }
		public TerminalNode LESS() { return getToken(AqlParser.LESS, 0); }
		public TerminalNode EXCLAMATION() { return getToken(AqlParser.EXCLAMATION, 0); }
		public Comparison_operatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_comparison_operator; }
	}

	public final Comparison_operatorContext comparison_operator() throws RecognitionException {
		Comparison_operatorContext _localctx = new Comparison_operatorContext(_ctx, getState());
		enterRule(_localctx, 178, RULE_comparison_operator);
		try {
			setState(1197);
			_errHandler.sync(this);
			switch ( getInterpreter().adaptivePredict(_input,150,_ctx) ) {
			case 1:
				enterOuterAlt(_localctx, 1);
				{
				setState(1182);
				match(EQUAL);
				}
				break;
			case 2:
				enterOuterAlt(_localctx, 2);
				{
				setState(1183);
				match(GREATER);
				}
				break;
			case 3:
				enterOuterAlt(_localctx, 3);
				{
				setState(1184);
				match(LESS);
				}
				break;
			case 4:
				enterOuterAlt(_localctx, 4);
				{
				setState(1185);
				match(LESS);
				setState(1186);
				match(EQUAL);
				}
				break;
			case 5:
				enterOuterAlt(_localctx, 5);
				{
				setState(1187);
				match(GREATER);
				setState(1188);
				match(EQUAL);
				}
				break;
			case 6:
				enterOuterAlt(_localctx, 6);
				{
				setState(1189);
				match(LESS);
				setState(1190);
				match(GREATER);
				}
				break;
			case 7:
				enterOuterAlt(_localctx, 7);
				{
				setState(1191);
				match(EXCLAMATION);
				setState(1192);
				match(EQUAL);
				}
				break;
			case 8:
				enterOuterAlt(_localctx, 8);
				{
				setState(1193);
				match(EXCLAMATION);
				setState(1194);
				match(GREATER);
				}
				break;
			case 9:
				enterOuterAlt(_localctx, 9);
				{
				setState(1195);
				match(EXCLAMATION);
				setState(1196);
				match(LESS);
				}
				break;
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public static class Assignment_operatorContext extends ParserRuleContext {
		public TerminalNode PLUS_ASSIGN() { return getToken(AqlParser.PLUS_ASSIGN, 0); }
		public TerminalNode MINUS_ASSIGN() { return getToken(AqlParser.MINUS_ASSIGN, 0); }
		public TerminalNode MULT_ASSIGN() { return getToken(AqlParser.MULT_ASSIGN, 0); }
		public TerminalNode DIV_ASSIGN() { return getToken(AqlParser.DIV_ASSIGN, 0); }
		public TerminalNode MOD_ASSIGN() { return getToken(AqlParser.MOD_ASSIGN, 0); }
		public TerminalNode AND_ASSIGN() { return getToken(AqlParser.AND_ASSIGN, 0); }
		public TerminalNode XOR_ASSIGN() { return getToken(AqlParser.XOR_ASSIGN, 0); }
		public TerminalNode OR_ASSIGN() { return getToken(AqlParser.OR_ASSIGN, 0); }
		public Assignment_operatorContext(ParserRuleContext parent, int invokingState) {
			super(parent, invokingState);
		}
		@Override public int getRuleIndex() { return RULE_assignment_operator; }
	}

	public final Assignment_operatorContext assignment_operator() throws RecognitionException {
		Assignment_operatorContext _localctx = new Assignment_operatorContext(_ctx, getState());
		enterRule(_localctx, 180, RULE_assignment_operator);
		int _la;
		try {
			enterOuterAlt(_localctx, 1);
			{
			setState(1199);
			_la = _input.LA(1);
			if ( !(((((_la - 121)) & ~0x3f) == 0 && ((1L << (_la - 121)) & ((1L << (PLUS_ASSIGN - 121)) | (1L << (MINUS_ASSIGN - 121)) | (1L << (MULT_ASSIGN - 121)) | (1L << (DIV_ASSIGN - 121)) | (1L << (MOD_ASSIGN - 121)) | (1L << (AND_ASSIGN - 121)) | (1L << (XOR_ASSIGN - 121)) | (1L << (OR_ASSIGN - 121)))) != 0)) ) {
			_errHandler.recoverInline(this);
			}
			else {
				if ( _input.LA(1)==Token.EOF ) matchedEOF = true;
				_errHandler.reportMatch(this);
				consume();
			}
			}
		}
		catch (RecognitionException re) {
			_localctx.exception = re;
			_errHandler.reportError(this, re);
			_errHandler.recover(this, re);
		}
		finally {
			exitRule();
		}
		return _localctx;
	}

	public boolean sempred(RuleContext _localctx, int ruleIndex, int predIndex) {
		switch (ruleIndex) {
		case 24:
			return expression_sempred((ExpressionContext)_localctx, predIndex);
		}
		return true;
	}
	private boolean expression_sempred(ExpressionContext _localctx, int predIndex) {
		switch (predIndex) {
		case 0:
			return precpred(_ctx, 2);
		case 1:
			return precpred(_ctx, 1);
		case 2:
			return precpred(_ctx, 7);
		}
		return true;
	}

	public static final String _serializedATN =
		"\3\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786\u5964\3\u0096\u04b4\4\2\t"+
		"\2\4\3\t\3\4\4\t\4\4\5\t\5\4\6\t\6\4\7\t\7\4\b\t\b\4\t\t\t\4\n\t\n\4\13"+
		"\t\13\4\f\t\f\4\r\t\r\4\16\t\16\4\17\t\17\4\20\t\20\4\21\t\21\4\22\t\22"+
		"\4\23\t\23\4\24\t\24\4\25\t\25\4\26\t\26\4\27\t\27\4\30\t\30\4\31\t\31"+
		"\4\32\t\32\4\33\t\33\4\34\t\34\4\35\t\35\4\36\t\36\4\37\t\37\4 \t \4!"+
		"\t!\4\"\t\"\4#\t#\4$\t$\4%\t%\4&\t&\4\'\t\'\4(\t(\4)\t)\4*\t*\4+\t+\4"+
		",\t,\4-\t-\4.\t.\4/\t/\4\60\t\60\4\61\t\61\4\62\t\62\4\63\t\63\4\64\t"+
		"\64\4\65\t\65\4\66\t\66\4\67\t\67\48\t8\49\t9\4:\t:\4;\t;\4<\t<\4=\t="+
		"\4>\t>\4?\t?\4@\t@\4A\tA\4B\tB\4C\tC\4D\tD\4E\tE\4F\tF\4G\tG\4H\tH\4I"+
		"\tI\4J\tJ\4K\tK\4L\tL\4M\tM\4N\tN\4O\tO\4P\tP\4Q\tQ\4R\tR\4S\tS\4T\tT"+
		"\4U\tU\4V\tV\4W\tW\4X\tX\4Y\tY\4Z\tZ\4[\t[\4\\\t\\\3\2\7\2\u00ba\n\2\f"+
		"\2\16\2\u00bd\13\2\3\2\3\2\3\3\3\3\3\3\6\3\u00c4\n\3\r\3\16\3\u00c5\5"+
		"\3\u00c8\n\3\3\3\7\3\u00cb\n\3\f\3\16\3\u00ce\13\3\3\3\5\3\u00d1\n\3\3"+
		"\4\3\4\5\4\u00d5\n\4\3\4\3\4\5\4\u00d9\n\4\3\4\3\4\5\4\u00dd\n\4\3\4\5"+
		"\4\u00e0\n\4\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\3\5\5\5\u00eb\n\5\3\6\3\6"+
		"\5\6\u00ef\n\6\3\6\7\6\u00f2\n\6\f\6\16\6\u00f5\13\6\3\6\3\6\5\6\u00f9"+
		"\n\6\3\7\3\7\5\7\u00fd\n\7\3\b\3\b\5\b\u0101\n\b\3\t\3\t\3\t\3\t\3\t\5"+
		"\t\u0108\n\t\3\t\5\t\u010b\n\t\3\n\3\n\3\n\3\n\3\n\3\n\3\n\5\n\u0114\n"+
		"\n\3\n\5\n\u0117\n\n\3\13\3\13\3\f\3\f\3\r\3\r\3\16\3\16\3\16\5\16\u0122"+
		"\n\16\3\16\6\16\u0125\n\16\r\16\16\16\u0126\3\16\3\16\3\16\5\16\u012c"+
		"\n\16\3\16\3\16\3\16\5\16\u0131\n\16\3\16\7\16\u0134\n\16\f\16\16\16\u0137"+
		"\13\16\3\16\3\16\3\16\5\16\u013c\n\16\3\17\3\17\3\17\3\17\3\17\5\17\u0143"+
		"\n\17\3\17\3\17\5\17\u0147\n\17\5\17\u0149\n\17\3\20\3\20\3\20\5\20\u014e"+
		"\n\20\3\20\3\20\7\20\u0152\n\20\f\20\16\20\u0155\13\20\3\20\5\20\u0158"+
		"\n\20\3\21\3\21\3\21\3\21\3\21\5\21\u015f\n\21\3\21\3\21\3\21\3\21\3\21"+
		"\7\21\u0166\n\21\f\21\16\21\u0169\13\21\5\21\u016b\n\21\3\22\3\22\3\23"+
		"\5\23\u0170\n\23\3\23\3\23\3\24\3\24\5\24\u0176\n\24\3\24\5\24\u0179\n"+
		"\24\3\25\3\25\3\25\3\25\5\25\u017f\n\25\3\25\3\25\3\25\5\25\u0184\n\25"+
		"\3\25\3\25\3\25\3\25\3\25\5\25\u018b\n\25\3\25\5\25\u018e\n\25\3\26\3"+
		"\26\5\26\u0192\n\26\3\27\3\27\5\27\u0196\n\27\3\30\3\30\3\30\3\30\5\30"+
		"\u019c\n\30\3\30\5\30\u019f\n\30\3\30\3\30\3\30\3\30\5\30\u01a5\n\30\5"+
		"\30\u01a7\n\30\3\31\3\31\5\31\u01ab\n\31\3\32\3\32\3\32\3\32\3\32\3\32"+
		"\3\32\5\32\u01b4\n\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32\3\32"+
		"\3\32\5\32\u01c1\n\32\7\32\u01c3\n\32\f\32\16\32\u01c6\13\32\3\33\3\33"+
		"\3\33\3\33\5\33\u01cc\n\33\3\34\3\34\3\34\6\34\u01d1\n\34\r\34\16\34\u01d2"+
		"\3\34\3\34\5\34\u01d7\n\34\3\34\3\34\3\34\3\34\6\34\u01dd\n\34\r\34\16"+
		"\34\u01de\3\34\3\34\5\34\u01e3\n\34\3\34\3\34\5\34\u01e7\n\34\3\35\3\35"+
		"\3\35\3\35\5\35\u01ed\n\35\3\36\3\36\3\36\3\36\3\36\3\36\3\36\3\36\5\36"+
		"\u01f7\n\36\3\37\3\37\3\37\3\37\3\37\3\37\3\37\3\37\5\37\u0201\n\37\3"+
		" \3 \3!\3!\3!\3!\7!\u0209\n!\f!\16!\u020c\13!\3\"\3\"\3\"\3\"\3\"\5\""+
		"\u0213\n\"\3\"\3\"\3\"\3\"\3\"\3#\3#\3#\7#\u021d\n#\f#\16#\u0220\13#\3"+
		"$\7$\u0223\n$\f$\16$\u0226\13$\3$\3$\7$\u022a\n$\f$\16$\u022d\13$\3$\3"+
		"$\3$\3$\5$\u0233\n$\3%\3%\3%\3%\3%\3%\3%\3%\3%\3%\3%\3%\7%\u0241\n%\f"+
		"%\16%\u0244\13%\3%\3%\3%\3%\5%\u024a\n%\3%\3%\3%\3%\3%\3%\5%\u0252\n%"+
		"\3&\3&\3&\3&\3&\5&\u0259\n&\3&\3&\5&\u025d\n&\5&\u025f\n&\3\'\3\'\5\'"+
		"\u0263\n\'\3\'\5\'\u0266\n\'\3\'\3\'\3\'\5\'\u026b\n\'\3\'\3\'\5\'\u026f"+
		"\n\'\3\'\3\'\5\'\u0273\n\'\3\'\3\'\3\'\3\'\3\'\7\'\u027a\n\'\f\'\16\'"+
		"\u027d\13\'\5\'\u027f\n\'\3\'\3\'\5\'\u0283\n\'\3(\3(\3(\5(\u0288\n(\3"+
		")\3)\3)\3)\3)\3)\3)\5)\u0291\n)\3*\3*\3*\3*\3*\5*\u0298\n*\3+\3+\3+\3"+
		"+\3+\7+\u029f\n+\f+\16+\u02a2\13+\3,\3,\3,\5,\u02a7\n,\3-\3-\3.\3.\3."+
		"\7.\u02ae\n.\f.\16.\u02b1\13.\3/\3/\3/\5/\u02b6\n/\3/\3/\3\60\3\60\5\60"+
		"\u02bc\n\60\3\60\5\60\u02bf\n\60\3\61\3\61\3\61\3\61\3\61\3\61\5\61\u02c7"+
		"\n\61\5\61\u02c9\n\61\3\62\3\62\3\62\3\62\3\62\5\62\u02d0\n\62\3\62\3"+
		"\62\5\62\u02d4\n\62\3\63\3\63\3\63\7\63\u02d9\n\63\f\63\16\63\u02dc\13"+
		"\63\3\64\3\64\3\64\3\64\3\64\5\64\u02e3\n\64\3\65\3\65\7\65\u02e7\n\65"+
		"\f\65\16\65\u02ea\13\65\3\66\3\66\5\66\u02ee\n\66\3\66\3\66\5\66\u02f2"+
		"\n\66\3\66\3\66\3\66\3\66\3\66\5\66\u02f9\n\66\5\66\u02fb\n\66\3\66\3"+
		"\66\3\66\5\66\u0300\n\66\5\66\u0302\n\66\3\66\3\66\5\66\u0306\n\66\3\66"+
		"\3\66\3\66\3\66\3\66\5\66\u030d\n\66\5\66\u030f\n\66\3\66\3\66\3\66\3"+
		"\66\5\66\u0315\n\66\5\66\u0317\n\66\3\67\3\67\3\67\5\67\u031c\n\67\38"+
		"\58\u031f\n8\38\38\58\u0323\n8\58\u0325\n8\38\38\38\38\38\39\39\39\39"+
		"\3:\3:\3:\3:\3;\3;\3;\3;\3;\3;\3;\3;\3<\3<\3<\3<\3<\3<\3<\3<\3<\3<\3="+
		"\3=\3=\7=\u0349\n=\f=\16=\u034c\13=\3>\3>\3?\3?\3?\3?\3?\5?\u0355\n?\3"+
		"@\3@\3@\3@\5@\u035b\n@\3@\3@\3@\5@\u0360\n@\3A\3A\3A\3A\3A\3A\3A\7A\u0369"+
		"\nA\fA\16A\u036c\13A\3A\3A\3A\3A\3A\3A\3A\3A\3A\5A\u0377\nA\3A\3A\3A\3"+
		"A\3B\3B\3B\3B\3B\3B\3B\5B\u0384\nB\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3"+
		"B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3"+
		"B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3B\3"+
		"B\3B\3B\3B\5B\u03c3\nB\3C\3C\3C\3C\3C\3C\3C\3D\3D\3D\3D\3D\3E\3E\3E\3"+
		"E\3E\3F\3F\3F\3F\3F\3G\3G\3G\3G\3G\3H\5H\u03e1\nH\3H\3H\3I\5I\u03e6\n"+
		"I\3I\3I\3J\3J\3K\3K\3K\3K\7K\u03f0\nK\fK\16K\u03f3\13K\3K\3K\3L\3L\5L"+
		"\u03f9\nL\3M\3M\3M\7M\u03fe\nM\fM\16M\u0401\13M\3N\3N\3N\3N\3N\3N\3N\3"+
		"N\3N\5N\u040c\nN\3N\5N\u040f\nN\3O\5O\u0412\nO\3O\3O\3P\3P\3P\3P\3P\3"+
		"P\3P\3P\3P\3P\5P\u0420\nP\3P\3P\3P\3P\3P\5P\u0427\nP\3P\3P\3Q\3Q\3Q\5"+
		"Q\u042e\nQ\3Q\3Q\3Q\3Q\3Q\5Q\u0435\nQ\3Q\3Q\3Q\3Q\5Q\u043b\nQ\3Q\3Q\3"+
		"Q\3Q\3Q\5Q\u0442\nQ\5Q\u0444\nQ\3R\5R\u0447\nR\3R\3R\5R\u044b\nR\3R\3"+
		"R\5R\u044f\nR\3R\3R\3R\5R\u0454\nR\3R\3R\5R\u0458\nR\3R\3R\3R\5R\u045d"+
		"\nR\3R\3R\3R\5R\u0462\nR\3S\3S\3S\7S\u0467\nS\fS\16S\u046a\13S\3T\5T\u046d"+
		"\nT\3T\3T\3U\3U\3V\3V\3V\3V\3V\3V\3V\3V\3V\3V\3V\3V\3V\3V\3V\3V\3V\5V"+
		"\u0484\nV\3W\3W\3W\5W\u0489\nW\3W\3W\5W\u048d\nW\3W\3W\5W\u0491\nW\3W"+
		"\3W\5W\u0495\nW\3X\3X\3Y\3Y\3Z\3Z\3Z\3Z\5Z\u049f\nZ\3[\3[\3[\3[\3[\3["+
		"\3[\3[\3[\3[\3[\3[\3[\3[\3[\5[\u04b0\n[\3\\\3\\\3\\\2\3\62]\2\4\6\b\n"+
		"\f\16\20\22\24\26\30\32\34\36 \"$&(*,.\60\62\64\668:<>@BDFHJLNPRTVXZ\\"+
		"^`bdfhjlnprtvxz|~\u0080\u0082\u0084\u0086\u0088\u008a\u008c\u008e\u0090"+
		"\u0092\u0094\u0096\u0098\u009a\u009c\u009e\u00a0\u00a2\u00a4\u00a6\u00a8"+
		"\u00aa\u00ac\u00ae\u00b0\u00b2\u00b4\u00b6\2\21\3\2pq\4\2ppss\4\2pqss"+
		"\5\2mmppss\3\2\u008e\u0090\5\2\u0083\u0083\u0091\u0092\u0094\u0096\3\2"+
		"\u0091\u0092\4\2\3\3&&\4\2  --\7\2;;LMTUWW]^\3\2hi\3\2uv\4\2qquu\3\28"+
		"i\3\2{\u0082\2\u0530\2\u00bb\3\2\2\2\4\u00d0\3\2\2\2\6\u00df\3\2\2\2\b"+
		"\u00ea\3\2\2\2\n\u00ec\3\2\2\2\f\u00fa\3\2\2\2\16\u00fe\3\2\2\2\20\u0102"+
		"\3\2\2\2\22\u010c\3\2\2\2\24\u0118\3\2\2\2\26\u011a\3\2\2\2\30\u011c\3"+
		"\2\2\2\32\u011e\3\2\2\2\34\u013d\3\2\2\2\36\u014a\3\2\2\2 \u016a\3\2\2"+
		"\2\"\u016c\3\2\2\2$\u016f\3\2\2\2&\u0173\3\2\2\2(\u018d\3\2\2\2*\u018f"+
		"\3\2\2\2,\u0193\3\2\2\2.\u01a6\3\2\2\2\60\u01aa\3\2\2\2\62\u01b3\3\2\2"+
		"\2\64\u01cb\3\2\2\2\66\u01e6\3\2\2\28\u01ec\3\2\2\2:\u01f6\3\2\2\2<\u0200"+
		"\3\2\2\2>\u0202\3\2\2\2@\u0204\3\2\2\2B\u020d\3\2\2\2D\u0219\3\2\2\2F"+
		"\u0232\3\2\2\2H\u0251\3\2\2\2J\u025e\3\2\2\2L\u0260\3\2\2\2N\u0284\3\2"+
		"\2\2P\u0290\3\2\2\2R\u0297\3\2\2\2T\u0299\3\2\2\2V\u02a3\3\2\2\2X\u02a8"+
		"\3\2\2\2Z\u02aa\3\2\2\2\\\u02b5\3\2\2\2^\u02bb\3\2\2\2`\u02c8\3\2\2\2"+
		"b\u02d3\3\2\2\2d\u02d5\3\2\2\2f\u02e2\3\2\2\2h\u02e4\3\2\2\2j\u0316\3"+
		"\2\2\2l\u031b\3\2\2\2n\u0324\3\2\2\2p\u032b\3\2\2\2r\u032f\3\2\2\2t\u0333"+
		"\3\2\2\2v\u033b\3\2\2\2x\u0345\3\2\2\2z\u034d\3\2\2\2|\u0354\3\2\2\2~"+
		"\u035f\3\2\2\2\u0080\u0361\3\2\2\2\u0082\u03c2\3\2\2\2\u0084\u03c4\3\2"+
		"\2\2\u0086\u03cb\3\2\2\2\u0088\u03d0\3\2\2\2\u008a\u03d5\3\2\2\2\u008c"+
		"\u03da\3\2\2\2\u008e\u03e0\3\2\2\2\u0090\u03e5\3\2\2\2\u0092\u03e9\3\2"+
		"\2\2\u0094\u03eb\3\2\2\2\u0096\u03f8\3\2\2\2\u0098\u03fa\3\2\2\2\u009a"+
		"\u040e\3\2\2\2\u009c\u0411\3\2\2\2\u009e\u0426\3\2\2\2\u00a0\u0443\3\2"+
		"\2\2\u00a2\u0461\3\2\2\2\u00a4\u0463\3\2\2\2\u00a6\u046c\3\2\2\2\u00a8"+
		"\u0470\3\2\2\2\u00aa\u0483\3\2\2\2\u00ac\u0494\3\2\2\2\u00ae\u0496\3\2"+
		"\2\2\u00b0\u0498\3\2\2\2\u00b2\u049e\3\2\2\2\u00b4\u04af\3\2\2\2\u00b6"+
		"\u04b1\3\2\2\2\u00b8\u00ba\5\4\3\2\u00b9\u00b8\3\2\2\2\u00ba\u00bd\3\2"+
		"\2\2\u00bb\u00b9\3\2\2\2\u00bb\u00bc\3\2\2\2\u00bc\u00be\3\2\2\2\u00bd"+
		"\u00bb\3\2\2\2\u00be\u00bf\7\2\2\3\u00bf\3\3\2\2\2\u00c0\u00d1\5*\26\2"+
		"\u00c1\u00c8\5*\26\2\u00c2\u00c4\5\6\4\2\u00c3\u00c2\3\2\2\2\u00c4\u00c5"+
		"\3\2\2\2\u00c5\u00c3\3\2\2\2\u00c5\u00c6\3\2\2\2\u00c6\u00c8\3\2\2\2\u00c7"+
		"\u00c1\3\2\2\2\u00c7\u00c3\3\2\2\2\u00c8\u00cc\3\2\2\2\u00c9\u00cb\5,"+
		"\27\2\u00ca\u00c9\3\2\2\2\u00cb\u00ce\3\2\2\2\u00cc\u00ca\3\2\2\2\u00cc"+
		"\u00cd\3\2\2\2\u00cd\u00d1\3\2\2\2\u00ce\u00cc\3\2\2\2\u00cf\u00d1\5,"+
		"\27\2\u00d0\u00c0\3\2\2\2\u00d0\u00c7\3\2\2\2\u00d0\u00cf\3\2\2\2\u00d1"+
		"\5\3\2\2\2\u00d2\u00d4\5$\23\2\u00d3\u00d5\7\u008c\2\2\u00d4\u00d3\3\2"+
		"\2\2\u00d4\u00d5\3\2\2\2\u00d5\u00e0\3\2\2\2\u00d6\u00d8\5\b\5\2\u00d7"+
		"\u00d9\7\u008c\2\2\u00d8\u00d7\3\2\2\2\u00d8\u00d9\3\2\2\2\u00d9\u00e0"+
		"\3\2\2\2\u00da\u00dc\5\"\22\2\u00db\u00dd\7\u008c\2\2\u00dc\u00db\3\2"+
		"\2\2\u00dc\u00dd\3\2\2\2\u00dd\u00e0\3\2\2\2\u00de\u00e0\7\u008c\2\2\u00df"+
		"\u00d2\3\2\2\2\u00df\u00d6\3\2\2\2\u00df\u00da\3\2\2\2\u00df\u00de\3\2"+
		"\2\2\u00e0\7\3\2\2\2\u00e1\u00eb\5\n\6\2\u00e2\u00eb\5\f\7\2\u00e3\u00eb"+
		"\5\16\b\2\u00e4\u00eb\5\20\t\2\u00e5\u00eb\5\22\n\2\u00e6\u00eb\5\32\16"+
		"\2\u00e7\u00eb\5\34\17\2\u00e8\u00eb\5\36\20\2\u00e9\u00eb\5 \21\2\u00ea"+
		"\u00e1\3\2\2\2\u00ea\u00e2\3\2\2\2\u00ea\u00e3\3\2\2\2\u00ea\u00e4\3\2"+
		"\2\2\u00ea\u00e5\3\2\2\2\u00ea\u00e6\3\2\2\2\u00ea\u00e7\3\2\2\2\u00ea"+
		"\u00e8\3\2\2\2\u00ea\u00e9\3\2\2\2\u00eb\t\3\2\2\2\u00ec\u00ee\7\6\2\2"+
		"\u00ed\u00ef\7\u008c\2\2\u00ee\u00ed\3\2\2\2\u00ee\u00ef\3\2\2\2\u00ef"+
		"\u00f3\3\2\2\2\u00f0\u00f2\5\6\4\2\u00f1\u00f0\3\2\2\2\u00f2\u00f5\3\2"+
		"\2\2\u00f3\u00f1\3\2\2\2\u00f3\u00f4\3\2\2\2\u00f4\u00f6\3\2\2\2\u00f5"+
		"\u00f3\3\2\2\2\u00f6\u00f8\7\24\2\2\u00f7\u00f9\7\u008c\2\2\u00f8\u00f7"+
		"\3\2\2\2\u00f8\u00f9\3\2\2\2\u00f9\13\3\2\2\2\u00fa\u00fc\7\7\2\2\u00fb"+
		"\u00fd\7\u008c\2\2\u00fc\u00fb\3\2\2\2\u00fc\u00fd\3\2\2\2\u00fd\r\3\2"+
		"\2\2\u00fe\u0100\7\f\2\2\u00ff\u0101\7\u008c\2\2\u0100\u00ff\3\2\2\2\u0100"+
		"\u0101\3\2\2\2\u0101\17\3\2\2\2\u0102\u0103\7\32\2\2\u0103\u0104\5D#\2"+
		"\u0104\u0107\5\6\4\2\u0105\u0106\7\23\2\2\u0106\u0108\5\6\4\2\u0107\u0105"+
		"\3\2\2\2\u0107\u0108\3\2\2\2\u0108\u010a\3\2\2\2\u0109\u010b\7\u008c\2"+
		"\2\u010a\u0109\3\2\2\2\u010a\u010b\3\2\2\2\u010b\21\3\2\2\2\u010c\u0113"+
		"\7Y\2\2\u010d\u010e\5\24\13\2\u010e\u010f\7\u008b\2\2\u010f\u0110\5\26"+
		"\f\2\u0110\u0111\7\u008b\2\2\u0111\u0112\5\30\r\2\u0112\u0114\3\2\2\2"+
		"\u0113\u010d\3\2\2\2\u0113\u0114\3\2\2\2\u0114\u0116\3\2\2\2\u0115\u0117"+
		"\7\u008c\2\2\u0116\u0115\3\2\2\2\u0116\u0117\3\2\2\2\u0117\23\3\2\2\2"+
		"\u0118\u0119\t\2\2\2\u0119\25\3\2\2\2\u011a\u011b\t\3\2\2\u011b\27\3\2"+
		"\2\2\u011c\u011d\t\2\2\2\u011d\31\3\2\2\2\u011e\u011f\7\6\2\2\u011f\u0121"+
		"\7[\2\2\u0120\u0122\7\u008c\2\2\u0121\u0120\3\2\2\2\u0121\u0122\3\2\2"+
		"\2\u0122\u0124\3\2\2\2\u0123\u0125\5\6\4\2\u0124\u0123\3\2\2\2\u0125\u0126"+
		"\3\2\2\2\u0126\u0124\3\2\2\2\u0126\u0127\3\2\2\2\u0127\u0128\3\2\2\2\u0128"+
		"\u0129\7\24\2\2\u0129\u012b\7[\2\2\u012a\u012c\7\u008c\2\2\u012b\u012a"+
		"\3\2\2\2\u012b\u012c\3\2\2\2\u012c\u012d\3\2\2\2\u012d\u012e\7\6\2\2\u012e"+
		"\u0130\7=\2\2\u012f\u0131\7\u008c\2\2\u0130\u012f\3\2\2\2\u0130\u0131"+
		"\3\2\2\2\u0131\u0135\3\2\2\2\u0132\u0134\5\6\4\2\u0133\u0132\3\2\2\2\u0134"+
		"\u0137\3\2\2\2\u0135\u0133\3\2\2\2\u0135\u0136\3\2\2\2\u0136\u0138\3\2"+
		"\2\2\u0137\u0135\3\2\2\2\u0138\u0139\7\24\2\2\u0139\u013b\7=\2\2\u013a"+
		"\u013c\7\u008c\2\2\u013b\u013a\3\2\2\2\u013b\u013c\3\2\2\2\u013c\33\3"+
		"\2\2\2\u013d\u013e\7\66\2\2\u013e\u0148\5D#\2\u013f\u0149\5\6\4\2\u0140"+
		"\u0142\7\7\2\2\u0141\u0143\7\u008c\2\2\u0142\u0141\3\2\2\2\u0142\u0143"+
		"\3\2\2\2\u0143\u0149\3\2\2\2\u0144\u0146\7\f\2\2\u0145\u0147\7\u008c\2"+
		"\2\u0146\u0145\3\2\2\2\u0146\u0147\3\2\2\2\u0147\u0149\3\2\2\2\u0148\u013f"+
		"\3\2\2\2\u0148\u0140\3\2\2\2\u0148\u0144\3\2\2\2\u0149\35\3\2\2\2\u014a"+
		"\u014d\7+\2\2\u014b\u014e\5\62\32\2\u014c\u014e\7m\2\2\u014d\u014b\3\2"+
		"\2\2\u014d\u014c\3\2\2\2\u014e\u0153\3\2\2\2\u014f\u0150\7\u008b\2\2\u0150"+
		"\u0152\7p\2\2\u0151\u014f\3\2\2\2\u0152\u0155\3\2\2\2\u0153\u0151\3\2"+
		"\2\2\u0153\u0154\3\2\2\2\u0154\u0157\3\2\2\2\u0155\u0153\3\2\2\2\u0156"+
		"\u0158\7\u008c\2\2\u0157\u0156\3\2\2\2\u0157\u0158\3\2\2\2\u0158\37\3"+
		"\2\2\2\u0159\u015a\7,\2\2\u015a\u015b\7\u0089\2\2\u015b\u015c\t\4\2\2"+
		"\u015c\u015e\7\u008a\2\2\u015d\u015f\7\u008c\2\2\u015e\u015d\3\2\2\2\u015e"+
		"\u015f\3\2\2\2\u015f\u016b\3\2\2\2\u0160\u0161\7,\2\2\u0161\u0162\7q\2"+
		"\2\u0162\u0167\t\5\2\2\u0163\u0164\7\u008b\2\2\u0164\u0166\t\4\2\2\u0165"+
		"\u0163\3\2\2\2\u0166\u0169\3\2\2\2\u0167\u0165\3\2\2\2\u0167\u0168\3\2"+
		"\2\2\u0168\u016b\3\2\2\2\u0169\u0167\3\2\2\2\u016a\u0159\3\2\2\2\u016a"+
		"\u0160\3\2\2\2\u016b!\3\2\2\2\u016c\u016d\5(\25\2\u016d#\3\2\2\2\u016e"+
		"\u0170\5@!\2\u016f\u016e\3\2\2\2\u016f\u0170\3\2\2\2\u0170\u0171\3\2\2"+
		"\2\u0171\u0172\5&\24\2\u0172%\3\2\2\2\u0173\u0175\5J&\2\u0174\u0176\5"+
		"T+\2\u0175\u0174\3\2\2\2\u0175\u0176\3\2\2\2\u0176\u0178\3\2\2\2\u0177"+
		"\u0179\7\u008c\2\2\u0178\u0177\3\2\2\2\u0178\u0179\3\2\2\2\u0179\'\3\2"+
		"\2\2\u017a\u017b\7\60\2\2\u017b\u017e\7p\2\2\u017c\u017d\7\u0084\2\2\u017d"+
		"\u017f\5\u00b2Z\2\u017e\u017c\3\2\2\2\u017e\u017f\3\2\2\2\u017f\u0180"+
		"\3\2\2\2\u0180\u0181\7w\2\2\u0181\u0183\5\62\32\2\u0182\u0184\7\u008c"+
		"\2\2\u0183\u0182\3\2\2\2\u0183\u0184\3\2\2\2\u0184\u018e\3\2\2\2\u0185"+
		"\u0186\7\60\2\2\u0186\u0187\7p\2\2\u0187\u0188\5\u00b6\\\2\u0188\u018a"+
		"\5\62\32\2\u0189\u018b\7\u008c\2\2\u018a\u0189\3\2\2\2\u018a\u018b\3\2"+
		"\2\2\u018b\u018e\3\2\2\2\u018c\u018e\5.\30\2\u018d\u017a\3\2\2\2\u018d"+
		"\u0185\3\2\2\2\u018d\u018c\3\2\2\2\u018e)\3\2\2\2\u018f\u0191\7I\2\2\u0190"+
		"\u0192\7q\2\2\u0191\u0190\3\2\2\2\u0191\u0192\3\2\2\2\u0192+\3\2\2\2\u0193"+
		"\u0195\7J\2\2\u0194\u0196\7q\2\2\u0195\u0194\3\2\2\2\u0195\u0196\3\2\2"+
		"\2\u0196-\3\2\2\2\u0197\u0198\7\60\2\2\u0198\u019b\5\u00b2Z\2\u0199\u019c"+
		"\5\u00b2Z\2\u019a\u019c\5\60\31\2\u019b\u0199\3\2\2\2\u019b\u019a\3\2"+
		"\2\2\u019c\u019e\3\2\2\2\u019d\u019f\7\u008c\2\2\u019e\u019d\3\2\2\2\u019e"+
		"\u019f\3\2\2\2\u019f\u01a7\3\2\2\2\u01a0\u01a1\7\60\2\2\u01a1\u01a2\7"+
		".\2\2\u01a2\u01a4\t\2\2\2\u01a3\u01a5\7\u008c\2\2\u01a4\u01a3\3\2\2\2"+
		"\u01a4\u01a5\3\2\2\2\u01a5\u01a7\3\2\2\2\u01a6\u0197\3\2\2\2\u01a6\u01a0"+
		"\3\2\2\2\u01a7/\3\2\2\2\u01a8\u01ab\5\u00acW\2\u01a9\u01ab\7p\2\2\u01aa"+
		"\u01a8\3\2\2\2\u01aa\u01a9\3\2\2\2\u01ab\61\3\2\2\2\u01ac\u01ad\b\32\1"+
		"\2\u01ad\u01b4\5\64\33\2\u01ae\u01b4\5~@\2\u01af\u01b4\5\66\34\2\u01b0"+
		"\u01b4\5\u00a2R\2\u01b1\u01b4\5:\36\2\u01b2\u01b4\58\35\2\u01b3\u01ac"+
		"\3\2\2\2\u01b3\u01ae\3\2\2\2\u01b3\u01af\3\2\2\2\u01b3\u01b0\3\2\2\2\u01b3"+
		"\u01b1\3\2\2\2\u01b3\u01b2\3\2\2\2\u01b4\u01c4\3\2\2\2\u01b5\u01b6\f\4"+
		"\2\2\u01b6\u01b7\t\6\2\2\u01b7\u01c3\5\62\32\5\u01b8\u01b9\f\3\2\2\u01b9"+
		"\u01ba\t\7\2\2\u01ba\u01c3\5\62\32\4\u01bb\u01bc\f\t\2\2\u01bc\u01c0\7"+
		"\u0084\2\2\u01bd\u01c1\5\u0084C\2\u01be\u01c1\5\u0086D\2\u01bf\u01c1\5"+
		"\u0088E\2\u01c0\u01bd\3\2\2\2\u01c0\u01be\3\2\2\2\u01c0\u01bf\3\2\2\2"+
		"\u01c1\u01c3\3\2\2\2\u01c2\u01b5\3\2\2\2\u01c2\u01b8\3\2\2\2\u01c2\u01bb"+
		"\3\2\2\2\u01c3\u01c6\3\2\2\2\u01c4\u01c2\3\2\2\2\u01c4\u01c5\3\2\2\2\u01c5"+
		"\63\3\2\2\2\u01c6\u01c4\3\2\2\2\u01c7\u01cc\7\17\2\2\u01c8\u01cc\7#\2"+
		"\2\u01c9\u01cc\7p\2\2\u01ca\u01cc\5\u00acW\2\u01cb\u01c7\3\2\2\2\u01cb"+
		"\u01c8\3\2\2\2\u01cb\u01c9\3\2\2\2\u01cb\u01ca\3\2\2\2\u01cc\65\3\2\2"+
		"\2\u01cd\u01ce\7\t\2\2\u01ce\u01d0\5\62\32\2\u01cf\u01d1\5\u008aF\2\u01d0"+
		"\u01cf\3\2\2\2\u01d1\u01d2\3\2\2\2\u01d2\u01d0\3\2\2\2\u01d2\u01d3\3\2"+
		"\2\2\u01d3\u01d6\3\2\2\2\u01d4\u01d5\7\23\2\2\u01d5\u01d7\5\62\32\2\u01d6"+
		"\u01d4\3\2\2\2\u01d6\u01d7\3\2\2\2\u01d7\u01d8\3\2\2\2\u01d8\u01d9\7\24"+
		"\2\2\u01d9\u01e7\3\2\2\2\u01da\u01dc\7\t\2\2\u01db\u01dd\5\u008cG\2\u01dc"+
		"\u01db\3\2\2\2\u01dd\u01de\3\2\2\2\u01de\u01dc\3\2\2\2\u01de\u01df\3\2"+
		"\2\2\u01df\u01e2\3\2\2\2\u01e0\u01e1\7\23\2\2\u01e1\u01e3\5\62\32\2\u01e2"+
		"\u01e0\3\2\2\2\u01e2\u01e3\3\2\2\2\u01e3\u01e4\3\2\2\2\u01e4\u01e5\7\24"+
		"\2\2\u01e5\u01e7\3\2\2\2\u01e6\u01cd\3\2\2\2\u01e6\u01da\3\2\2\2\u01e7"+
		"\67\3\2\2\2\u01e8\u01e9\7\u0093\2\2\u01e9\u01ed\5\62\32\2\u01ea\u01eb"+
		"\t\b\2\2\u01eb\u01ed\5\62\32\2\u01ec\u01e8\3\2\2\2\u01ec\u01ea\3\2\2\2"+
		"\u01ed9\3\2\2\2\u01ee\u01ef\7\u0089\2\2\u01ef\u01f0\5\62\32\2\u01f0\u01f1"+
		"\7\u008a\2\2\u01f1\u01f7\3\2\2\2\u01f2\u01f3\7\u0089\2\2\u01f3\u01f4\5"+
		"> \2\u01f4\u01f5\7\u008a\2\2\u01f5\u01f7\3\2\2\2\u01f6\u01ee\3\2\2\2\u01f6"+
		"\u01f2\3\2\2\2\u01f7;\3\2\2\2\u01f8\u0201\7#\2\2\u01f9\u0201\5\u00acW"+
		"\2\u01fa\u0201\5~@\2\u01fb\u0201\7p\2\2\u01fc\u01fd\7\u0089\2\2\u01fd"+
		"\u01fe\5<\37\2\u01fe\u01ff\7\u008a\2\2\u01ff\u0201\3\2\2\2\u0200\u01f8"+
		"\3\2\2\2\u0200\u01f9\3\2\2\2\u0200\u01fa\3\2\2\2\u0200\u01fb\3\2\2\2\u0200"+
		"\u01fc\3\2\2\2\u0201=\3\2\2\2\u0202\u0203\5&\24\2\u0203?\3\2\2\2\u0204"+
		"\u0205\7\67\2\2\u0205\u020a\5B\"\2\u0206\u0207\7\u008b\2\2\u0207\u0209"+
		"\5B\"\2\u0208\u0206\3\2\2\2\u0209\u020c\3\2\2\2\u020a\u0208\3\2\2\2\u020a"+
		"\u020b\3\2\2\2\u020bA\3\2\2\2\u020c\u020a\3\2\2\2\u020d\u0212\5\u00b2"+
		"Z\2\u020e\u020f\7\u0089\2\2\u020f\u0210\5\u00a4S\2\u0210\u0211\7\u008a"+
		"\2\2\u0211\u0213\3\2\2\2\u0212\u020e\3\2\2\2\u0212\u0213\3\2\2\2\u0213"+
		"\u0214\3\2\2\2\u0214\u0215\7\4\2\2\u0215\u0216\7\u0089\2\2\u0216\u0217"+
		"\5&\24\2\u0217\u0218\7\u008a\2\2\u0218C\3\2\2\2\u0219\u021e\5F$\2\u021a"+
		"\u021b\t\t\2\2\u021b\u021d\5F$\2\u021c\u021a\3\2\2\2\u021d\u0220\3\2\2"+
		"\2\u021e\u021c\3\2\2\2\u021e\u021f\3\2\2\2\u021fE\3\2\2\2\u0220\u021e"+
		"\3\2\2\2\u0221\u0223\7\"\2\2\u0222\u0221\3\2\2\2\u0223\u0226\3\2\2\2\u0224"+
		"\u0222\3\2\2\2\u0224\u0225\3\2\2\2\u0225\u0227\3\2\2\2\u0226\u0224\3\2"+
		"\2\2\u0227\u0233\5H%\2\u0228\u022a\7\"\2\2\u0229\u0228\3\2\2\2\u022a\u022d"+
		"\3\2\2\2\u022b\u0229\3\2\2\2\u022b\u022c\3\2\2\2\u022c\u022e\3\2\2\2\u022d"+
		"\u022b\3\2\2\2\u022e\u022f\7\u0089\2\2\u022f\u0230\5D#\2\u0230\u0231\7"+
		"\u008a\2\2\u0231\u0233\3\2\2\2\u0232\u0224\3\2\2\2\u0232\u022b\3\2\2\2"+
		"\u0233G\3\2\2\2\u0234\u0235\7\25\2\2\u0235\u0236\7\u0089\2\2\u0236\u0237"+
		"\5> \2\u0237\u0238\7\u008a\2\2\u0238\u0252\3\2\2\2\u0239\u0252\5\u0080"+
		"A\2\u023a\u023b\5\62\32\2\u023b\u023c\5\u00b4[\2\u023c\u023d\5\62\32\2"+
		"\u023d\u0252\3\2\2\2\u023e\u0242\5\62\32\2\u023f\u0241\7\"\2\2\u0240\u023f"+
		"\3\2\2\2\u0241\u0244\3\2\2\2\u0242\u0240\3\2\2\2\u0242\u0243\3\2\2\2\u0243"+
		"\u0245\3\2\2\2\u0244\u0242\3\2\2\2\u0245\u0246\7\33\2\2\u0246\u0249\7"+
		"\u0089\2\2\u0247\u024a\5> \2\u0248\u024a\5\u0098M\2\u0249\u0247\3\2\2"+
		"\2\u0249\u0248\3\2\2\2\u024a\u024b\3\2\2\2\u024b\u024c\7\u008a\2\2\u024c"+
		"\u0252\3\2\2\2\u024d\u024e\5\62\32\2\u024e\u024f\7\36\2\2\u024f\u0250"+
		"\5\u00a6T\2\u0250\u0252\3\2\2\2\u0251\u0234\3\2\2\2\u0251\u0239\3\2\2"+
		"\2\u0251\u023a\3\2\2\2\u0251\u023e\3\2\2\2\u0251\u024d\3\2\2\2\u0252I"+
		"\3\2\2\2\u0253\u0259\5L\'\2\u0254\u0255\7\u0089\2\2\u0255\u0256\5J&\2"+
		"\u0256\u0257\7\u008a\2\2\u0257\u0259\3\2\2\2\u0258\u0253\3\2\2\2\u0258"+
		"\u0254\3\2\2\2\u0259\u025f\3\2\2\2\u025a\u025c\5L\'\2\u025b\u025d\5T+"+
		"\2\u025c\u025b\3\2\2\2\u025c\u025d\3\2\2\2\u025d\u025f\3\2\2\2\u025e\u0258"+
		"\3\2\2\2\u025e\u025a\3\2\2\2\u025fK\3\2\2\2\u0260\u0262\7/\2\2\u0261\u0263"+
		"\7\21\2\2\u0262\u0261\3\2\2\2\u0262\u0263\3\2\2\2\u0263\u0265\3\2\2\2"+
		"\u0264\u0266\5N(\2\u0265\u0264\3\2\2\2\u0265\u0266\3\2\2\2\u0266\u0267"+
		"\3\2\2\2\u0267\u026a\5Z.\2\u0268\u0269\7\35\2\2\u0269\u026b\5\u00a0Q\2"+
		"\u026a\u0268\3\2\2\2\u026a\u026b\3\2\2\2\u026b\u026e\3\2\2\2\u026c\u026d"+
		"\7\27\2\2\u026d\u026f\5d\63\2\u026e\u026c\3\2\2\2\u026e\u026f\3\2\2\2"+
		"\u026f\u0272\3\2\2\2\u0270\u0271\7\65\2\2\u0271\u0273\5D#\2\u0272\u0270"+
		"\3\2\2\2\u0272\u0273\3\2\2\2\u0273\u027e\3\2\2\2\u0274\u0275\7\30\2\2"+
		"\u0275\u0276\7\b\2\2\u0276\u027b\5X-\2\u0277\u0278\7\u008b\2\2\u0278\u027a"+
		"\5X-\2\u0279\u0277\3\2\2\2\u027a\u027d\3\2\2\2\u027b\u0279\3\2\2\2\u027b"+
		"\u027c\3\2\2\2\u027c\u027f\3\2\2\2\u027d\u027b\3\2\2\2\u027e\u0274\3\2"+
		"\2\2\u027e\u027f\3\2\2\2\u027f\u0282\3\2\2\2\u0280\u0281\7\31\2\2\u0281"+
		"\u0283\5D#\2\u0282\u0280\3\2\2\2\u0282\u0283\3\2\2\2\u0283M\3\2\2\2\u0284"+
		"\u0287\7\62\2\2\u0285\u0288\5P)\2\u0286\u0288\5R*\2\u0287\u0285\3\2\2"+
		"\2\u0287\u0286\3\2\2\2\u0288O\3\2\2\2\u0289\u028a\7q\2\2\u028a\u0291\7"+
		")\2\2\u028b\u028c\7\u0089\2\2\u028c\u028d\5\62\32\2\u028d\u028e\7\u008a"+
		"\2\2\u028e\u028f\7)\2\2\u028f\u0291\3\2\2\2\u0290\u0289\3\2\2\2\u0290"+
		"\u028b\3\2\2\2\u0291Q\3\2\2\2\u0292\u0298\7q\2\2\u0293\u0294\7\u0089\2"+
		"\2\u0294\u0295\5\62\32\2\u0295\u0296\7\u008a\2\2\u0296\u0298\3\2\2\2\u0297"+
		"\u0292\3\2\2\2\u0297\u0293\3\2\2\2\u0298S\3\2\2\2\u0299\u029a\7\'\2\2"+
		"\u029a\u029b\7\b\2\2\u029b\u02a0\5V,\2\u029c\u029d\7\u008b\2\2\u029d\u029f"+
		"\5V,\2\u029e\u029c\3\2\2\2\u029f\u02a2\3\2\2\2\u02a0\u029e\3\2\2\2\u02a0"+
		"\u02a1\3\2\2\2\u02a1U\3\2\2\2\u02a2\u02a0\3\2\2\2\u02a3\u02a6\5\62\32"+
		"\2\u02a4\u02a7\7\5\2\2\u02a5\u02a7\7\20\2\2\u02a6\u02a4\3\2\2\2\u02a6"+
		"\u02a5\3\2\2\2\u02a6\u02a7\3\2\2\2\u02a7W\3\2\2\2\u02a8\u02a9\5\62\32"+
		"\2\u02a9Y\3\2\2\2\u02aa\u02af\5b\62\2\u02ab\u02ac\7\u008b\2\2\u02ac\u02ae"+
		"\5b\62\2\u02ad\u02ab\3\2\2\2\u02ae\u02b1\3\2\2\2\u02af\u02ad\3\2\2\2\u02af"+
		"\u02b0\3\2\2\2\u02b0[\3\2\2\2\u02b1\u02af\3\2\2\2\u02b2\u02b3\5\u00a0"+
		"Q\2\u02b3\u02b4\7\u0084\2\2\u02b4\u02b6\3\2\2\2\u02b5\u02b2\3\2\2\2\u02b5"+
		"\u02b6\3\2\2\2\u02b6\u02b7\3\2\2\2\u02b7\u02b8\7\u008e\2\2\u02b8]\3\2"+
		"\2\2\u02b9\u02bc\5\u00a2R\2\u02ba\u02bc\7#\2\2\u02bb\u02b9\3\2\2\2\u02bb"+
		"\u02ba\3\2\2\2\u02bc\u02be\3\2\2\2\u02bd\u02bf\5\u008eH\2\u02be\u02bd"+
		"\3\2\2\2\u02be\u02bf\3\2\2\2\u02bf_\3\2\2\2\u02c0\u02c1\5\u0096L\2\u02c1"+
		"\u02c2\7w\2\2\u02c2\u02c3\5\62\32\2\u02c3\u02c9\3\2\2\2\u02c4\u02c6\5"+
		"\62\32\2\u02c5\u02c7\5\u008eH\2\u02c6\u02c5\3\2\2\2\u02c6\u02c7\3\2\2"+
		"\2\u02c7\u02c9\3\2\2\2\u02c8\u02c0\3\2\2\2\u02c8\u02c4\3\2\2\2\u02c9a"+
		"\3\2\2\2\u02ca\u02d4\5\\/\2\u02cb\u02d4\5^\60\2\u02cc\u02cf\7p\2\2\u02cd"+
		"\u02d0\5\u00b6\\\2\u02ce\u02d0\7w\2\2\u02cf\u02cd\3\2\2\2\u02cf\u02ce"+
		"\3\2\2\2\u02d0\u02d1\3\2\2\2\u02d1\u02d4\5\62\32\2\u02d2\u02d4\5`\61\2"+
		"\u02d3\u02ca\3\2\2\2\u02d3\u02cb\3\2\2\2\u02d3\u02cc\3\2\2\2\u02d3\u02d2"+
		"\3\2\2\2\u02d4c\3\2\2\2\u02d5\u02da\5f\64\2\u02d6\u02d7\7\u008b\2\2\u02d7"+
		"\u02d9\5f\64\2\u02d8\u02d6\3\2\2\2\u02d9\u02dc\3\2\2\2\u02da\u02d8\3\2"+
		"\2\2\u02da\u02db\3\2\2\2\u02dbe\3\2\2\2\u02dc\u02da\3\2\2\2\u02dd\u02e3"+
		"\5h\65\2\u02de\u02df\7\u0089\2\2\u02df\u02e0\5h\65\2\u02e0\u02e1\7\u008a"+
		"\2\2\u02e1\u02e3\3\2\2\2\u02e2\u02dd\3\2\2\2\u02e2\u02de\3\2\2\2\u02e3"+
		"g\3\2\2\2\u02e4\u02e8\5j\66\2\u02e5\u02e7\5l\67\2\u02e6\u02e5\3\2\2\2"+
		"\u02e7\u02ea\3\2\2\2\u02e8\u02e6\3\2\2\2\u02e8\u02e9\3\2\2\2\u02e9i\3"+
		"\2\2\2\u02ea\u02e8\3\2\2\2\u02eb\u02ed\5z>\2\u02ec\u02ee\5\u0090I\2\u02ed"+
		"\u02ec\3\2\2\2\u02ed\u02ee\3\2\2\2\u02ee\u0317\3\2\2\2\u02ef\u02f1\5\u009e"+
		"P\2\u02f0\u02f2\5\u0090I\2\u02f1\u02f0\3\2\2\2\u02f1\u02f2\3\2\2\2\u02f2"+
		"\u0317\3\2\2\2\u02f3\u02f4\7\u0089\2\2\u02f4\u02f5\5|?\2\u02f5\u02fa\7"+
		"\u008a\2\2\u02f6\u02f8\5\u0090I\2\u02f7\u02f9\5\u0094K\2\u02f8\u02f7\3"+
		"\2\2\2\u02f8\u02f9\3\2\2\2\u02f9\u02fb\3\2\2\2\u02fa\u02f6\3\2\2\2\u02fa"+
		"\u02fb\3\2\2\2\u02fb\u0317\3\2\2\2\u02fc\u0301\5~@\2\u02fd\u02ff\5\u0090"+
		"I\2\u02fe\u0300\5\u0094K\2\u02ff\u02fe\3\2\2\2\u02ff\u0300\3\2\2\2\u0300"+
		"\u0302\3\2\2\2\u0301\u02fd\3\2\2\2\u0301\u0302\3\2\2\2\u0302\u0317\3\2"+
		"\2\2\u0303\u0305\7p\2\2\u0304\u0306\5\u0090I\2\u0305\u0304\3\2\2\2\u0305"+
		"\u0306\3\2\2\2\u0306\u0317\3\2\2\2\u0307\u0308\7p\2\2\u0308\u0309\7\u0084"+
		"\2\2\u0309\u030e\5~@\2\u030a\u030c\5\u0090I\2\u030b\u030d\5\u0094K\2\u030c"+
		"\u030b\3\2\2\2\u030c\u030d\3\2\2\2\u030d\u030f\3\2\2\2\u030e\u030a\3\2"+
		"\2\2\u030e\u030f\3\2\2\2\u030f\u0317\3\2\2\2\u0310\u0311\7\u008d\2\2\u0311"+
		"\u0312\7\u008d\2\2\u0312\u0314\5~@\2\u0313\u0315\5\u0090I\2\u0314\u0313"+
		"\3\2\2\2\u0314\u0315\3\2\2\2\u0315\u0317\3\2\2\2\u0316\u02eb\3\2\2\2\u0316"+
		"\u02ef\3\2\2\2\u0316\u02f3\3\2\2\2\u0316\u02fc\3\2\2\2\u0316\u0303\3\2"+
		"\2\2\u0316\u0307\3\2\2\2\u0316\u0310\3\2\2\2\u0317k\3\2\2\2\u0318\u031c"+
		"\5n8\2\u0319\u031c\5p9\2\u031a\u031c\5r:\2\u031b\u0318\3\2\2\2\u031b\u0319"+
		"\3\2\2\2\u031b\u031a\3\2\2\2\u031cm\3\2\2\2\u031d\u031f\7\34\2\2\u031e"+
		"\u031d\3\2\2\2\u031e\u031f\3\2\2\2\u031f\u0325\3\2\2\2\u0320\u0322\t\n"+
		"\2\2\u0321\u0323\7(\2\2\u0322\u0321\3\2\2\2\u0322\u0323\3\2\2\2\u0323"+
		"\u0325\3\2\2\2\u0324\u031e\3\2\2\2\u0324\u0320\3\2\2\2\u0325\u0326\3\2"+
		"\2\2\u0326\u0327\7\37\2\2\u0327\u0328\5f\64\2\u0328\u0329\7%\2\2\u0329"+
		"\u032a\5D#\2\u032ao\3\2\2\2\u032b\u032c\7*\2\2\u032c\u032d\5t;\2\u032d"+
		"\u032e\5\u0090I\2\u032eq\3\2\2\2\u032f\u0330\7\63\2\2\u0330\u0331\5v<"+
		"\2\u0331\u0332\5\u0090I\2\u0332s\3\2\2\2\u0333\u0334\7\u0089\2\2\u0334"+
		"\u0335\5\u009aN\2\u0335\u0336\7\26\2\2\u0336\u0337\5\u00a2R\2\u0337\u0338"+
		"\7\33\2\2\u0338\u0339\5\u0094K\2\u0339\u033a\7\u008a\2\2\u033au\3\2\2"+
		"\2\u033b\u033c\7\u0089\2\2\u033c\u033d\5\62\32\2\u033d\u033e\7\26\2\2"+
		"\u033e\u033f\5\u00a2R\2\u033f\u0340\7\33\2\2\u0340\u0341\7\u0089\2\2\u0341"+
		"\u0342\5x=\2\u0342\u0343\7\u008a\2\2\u0343\u0344\7\u008a\2\2\u0344w\3"+
		"\2\2\2\u0345\u034a\5\u00a2R\2\u0346\u0347\7\u008b\2\2\u0347\u0349\5\u00a2"+
		"R\2\u0348\u0346\3\2\2\2\u0349\u034c\3\2\2\2\u034a\u0348\3\2\2\2\u034a"+
		"\u034b\3\2\2\2\u034by\3\2\2\2\u034c\u034a\3\2\2\2\u034d\u034e\5\u00a0"+
		"Q\2\u034e{\3\2\2\2\u034f\u0355\5> \2\u0350\u0351\7\u0089\2\2\u0351\u0352"+
		"\5> \2\u0352\u0353\7\u008a\2\2\u0353\u0355\3\2\2\2\u0354\u034f\3\2\2\2"+
		"\u0354\u0350\3\2\2\2\u0355}\3\2\2\2\u0356\u0360\5\u009aN\2\u0357\u0358"+
		"\5\u00a8U\2\u0358\u035a\7\u0089\2\2\u0359\u035b\5\u0098M\2\u035a\u0359"+
		"\3\2\2\2\u035a\u035b\3\2\2\2\u035b\u035c\3\2\2\2\u035c\u035d\7\u008a\2"+
		"\2\u035d\u0360\3\2\2\2\u035e\u0360\5\u0082B\2\u035f\u0356\3\2\2\2\u035f"+
		"\u0357\3\2\2\2\u035f\u035e\3\2\2\2\u0360\177\3\2\2\2\u0361\u0362\7\13"+
		"\2\2\u0362\u0376\7\u0089\2\2\u0363\u0377\5\u00a2R\2\u0364\u0365\7\u0089"+
		"\2\2\u0365\u036a\5\u00a2R\2\u0366\u0367\7\u008b\2\2\u0367\u0369\5\u00a2"+
		"R\2\u0368\u0366\3\2\2\2\u0369\u036c\3\2\2\2\u036a\u0368\3\2\2\2\u036a"+
		"\u036b\3\2\2\2\u036b\u036d\3\2\2\2\u036c\u036a\3\2\2\2\u036d\u036e\7\u008a"+
		"\2\2\u036e\u0377\3\2\2\2\u036f\u0370\7\u008e\2\2\u0370\u0371\7\u0089\2"+
		"\2\u0371\u0372\5\u00a2R\2\u0372\u0373\7\u008b\2\2\u0373\u0374\5\62\32"+
		"\2\u0374\u0375\7\u008a\2\2\u0375\u0377\3\2\2\2\u0376\u0363\3\2\2\2\u0376"+
		"\u0364\3\2\2\2\u0376\u036f\3\2\2\2\u0377\u0378\3\2\2\2\u0378\u0379\7\u008b"+
		"\2\2\u0379\u037a\5\62\32\2\u037a\u037b\7\u008a\2\2\u037b\u0081\3\2\2\2"+
		"\u037c\u037d\7\r\2\2\u037d\u037e\7\u0089\2\2\u037e\u037f\5\u00aaV\2\u037f"+
		"\u0380\7\u008b\2\2\u0380\u0383\5\62\32\2\u0381\u0382\7\u008b\2\2\u0382"+
		"\u0384\5\62\32\2\u0383\u0381\3\2\2\2\u0383\u0384\3\2\2\2\u0384\u0385\3"+
		"\2\2\2\u0385\u0386\7\u008a\2\2\u0386\u03c3\3\2\2\2\u0387\u0388\7\n\2\2"+
		"\u0388\u0389\7\u0089\2\2\u0389\u038a\5\u0098M\2\u038a\u038b\7\u008a\2"+
		"\2\u038b\u03c3\3\2\2\2\u038c\u038d\7A\2\2\u038d\u038e\7\u0089\2\2\u038e"+
		"\u038f\7r\2\2\u038f\u0390\7\u008b\2\2\u0390\u0391\5\62\32\2\u0391\u0392"+
		"\7\u008b\2\2\u0392\u0393\5\62\32\2\u0393\u0394\7\u008a\2\2\u0394\u03c3"+
		"\3\2\2\2\u0395\u0396\7B\2\2\u0396\u0397\7\u0089\2\2\u0397\u0398\7r\2\2"+
		"\u0398\u0399\7\u008b\2\2\u0399\u039a\5\62\32\2\u039a\u039b\7\u008b\2\2"+
		"\u039b\u039c\5\62\32\2\u039c\u039d\7\u008a\2\2\u039d\u03c3\3\2\2\2\u039e"+
		"\u039f\7G\2\2\u039f\u03a0\7\u0089\2\2\u03a0\u03c3\7\u008a\2\2\u03a1\u03a2"+
		"\7H\2\2\u03a2\u03a3\7\u0089\2\2\u03a3\u03c3\7\u008a\2\2\u03a4\u03a5\7"+
		"$\2\2\u03a5\u03a6\7\u0089\2\2\u03a6\u03a7\5\62\32\2\u03a7\u03a8\7\u008b"+
		"\2\2\u03a8\u03a9\5\62\32\2\u03a9\u03aa\7\u008a\2\2\u03aa\u03c3\3\2\2\2"+
		"\u03ab\u03ac\7d\2\2\u03ac\u03ad\7\u0089\2\2\u03ad\u03ae\5\62\32\2\u03ae"+
		"\u03af\7\u008b\2\2\u03af\u03b0\5\62\32\2\u03b0\u03b1\7\u008a\2\2\u03b1"+
		"\u03c3\3\2\2\2\u03b2\u03b3\7c\2\2\u03b3\u03b4\7\u0089\2\2\u03b4\u03b5"+
		"\5D#\2\u03b5\u03b6\7\u008b\2\2\u03b6\u03b7\5\62\32\2\u03b7\u03b8\7\u008b"+
		"\2\2\u03b8\u03b9\5\62\32\2\u03b9\u03ba\7\u008a\2\2\u03ba\u03c3\3\2\2\2"+
		"\u03bb\u03bc\7V\2\2\u03bc\u03bd\7\u0089\2\2\u03bd\u03be\5\62\32\2\u03be"+
		"\u03bf\7\u008b\2\2\u03bf\u03c0\5\62\32\2\u03c0\u03c1\7\u008a\2\2\u03c1"+
		"\u03c3\3\2\2\2\u03c2\u037c\3\2\2\2\u03c2\u0387\3\2\2\2\u03c2\u038c\3\2"+
		"\2\2\u03c2\u0395\3\2\2\2\u03c2\u039e\3\2\2\2\u03c2\u03a1\3\2\2\2\u03c2"+
		"\u03a4\3\2\2\2\u03c2\u03ab\3\2\2\2\u03c2\u03b2\3\2\2\2\u03c2\u03bb\3\2"+
		"\2\2\u03c3\u0083\3\2\2\2\u03c4\u03c5\7\\\2\2\u03c5\u03c6\7\u0089\2\2\u03c6"+
		"\u03c7\7s\2\2\u03c7\u03c8\7\u008b\2\2\u03c8\u03c9\7s\2\2\u03c9\u03ca\7"+
		"\u008a\2\2\u03ca\u0085\3\2\2\2\u03cb\u03cc\7P\2\2\u03cc\u03cd\7\u0089"+
		"\2\2\u03cd\u03ce\7s\2\2\u03ce\u03cf\7\u008a\2\2\u03cf\u0087\3\2\2\2\u03d0"+
		"\u03d1\7E\2\2\u03d1\u03d2\7\u0089\2\2\u03d2\u03d3\7s\2\2\u03d3\u03d4\7"+
		"\u008a\2\2\u03d4\u0089\3\2\2\2\u03d5\u03d6\7\64\2\2\u03d6\u03d7\5\62\32"+
		"\2\u03d7\u03d8\7\61\2\2\u03d8\u03d9\5\62\32\2\u03d9\u008b\3\2\2\2\u03da"+
		"\u03db\7\64\2\2\u03db\u03dc\5D#\2\u03dc\u03dd\7\61\2\2\u03dd\u03de\5\62"+
		"\32\2\u03de\u008d\3\2\2\2\u03df\u03e1\7\4\2\2\u03e0\u03df\3\2\2\2\u03e0"+
		"\u03e1\3\2\2\2\u03e1\u03e2\3\2\2\2\u03e2\u03e3\5\u0096L\2\u03e3\u008f"+
		"\3\2\2\2\u03e4\u03e6\7\4\2\2\u03e5\u03e4\3\2\2\2\u03e5\u03e6\3\2\2\2\u03e6"+
		"\u03e7\3\2\2\2\u03e7\u03e8\5\u0092J\2\u03e8\u0091\3\2\2\2\u03e9\u03ea"+
		"\5\u00b2Z\2\u03ea\u0093\3\2\2\2\u03eb\u03ec\7\u0089\2\2\u03ec\u03f1\5"+
		"\u0096L\2\u03ed\u03ee\7\u008b\2\2\u03ee\u03f0\5\u0096L\2\u03ef\u03ed\3"+
		"\2\2\2\u03f0\u03f3\3\2\2\2\u03f1\u03ef\3\2\2\2\u03f1\u03f2\3\2\2\2\u03f2"+
		"\u03f4\3\2\2\2\u03f3\u03f1\3\2\2\2\u03f4\u03f5\7\u008a\2\2\u03f5\u0095"+
		"\3\2\2\2\u03f6\u03f9\5\u00b2Z\2\u03f7\u03f9\7s\2\2\u03f8\u03f6\3\2\2\2"+
		"\u03f8\u03f7\3\2\2\2\u03f9\u0097\3\2\2\2\u03fa\u03ff\5\62\32\2\u03fb\u03fc"+
		"\7\u008b\2\2\u03fc\u03fe\5\62\32\2\u03fd\u03fb\3\2\2\2\u03fe\u0401\3\2"+
		"\2\2\u03ff\u03fd\3\2\2\2\u03ff\u0400\3\2\2\2\u0400\u0099\3\2\2\2\u0401"+
		"\u03ff\3\2\2\2\u0402\u0403\t\13\2\2\u0403\u0404\7\u0089\2\2\u0404\u0405"+
		"\5\u009cO\2\u0405\u0406\7\u008a\2\2\u0406\u040f\3\2\2\2\u0407\u0408\7"+
		"?\2\2\u0408\u040b\7\u0089\2\2\u0409\u040c\7\u008e\2\2\u040a\u040c\5\u009c"+
		"O\2\u040b\u0409\3\2\2\2\u040b\u040a\3\2\2\2\u040c\u040d\3\2\2\2\u040d"+
		"\u040f\7\u008a\2\2\u040e\u0402\3\2\2\2\u040e\u0407\3\2\2\2\u040f\u009b"+
		"\3\2\2\2\u0410\u0412\7\21\2\2\u0411\u0410\3\2\2\2\u0411\u0412\3\2\2\2"+
		"\u0412\u0413\3\2\2\2\u0413\u0414\5\62\32\2\u0414\u009d\3\2\2\2\u0415\u0416"+
		"\5\u00b2Z\2\u0416\u0417\7\u0084\2\2\u0417\u0418\5\u00b2Z\2\u0418\u0419"+
		"\7\u0084\2\2\u0419\u041a\5\u00b2Z\2\u041a\u041b\7\u0084\2\2\u041b\u0427"+
		"\3\2\2\2\u041c\u041d\5\u00b2Z\2\u041d\u041f\7\u0084\2\2\u041e\u0420\5"+
		"\u00b2Z\2\u041f\u041e\3\2\2\2\u041f\u0420\3\2\2\2\u0420\u0421\3\2\2\2"+
		"\u0421\u0422\7\u0084\2\2\u0422\u0427\3\2\2\2\u0423\u0424\5\u00b2Z\2\u0424"+
		"\u0425\7\u0084\2\2\u0425\u0427\3\2\2\2\u0426\u0415\3\2\2\2\u0426\u041c"+
		"\3\2\2\2\u0426\u0423\3\2\2\2\u0426\u0427\3\2\2\2\u0427\u0428\3\2\2\2\u0428"+
		"\u0429\5\u00b2Z\2\u0429\u009f\3\2\2\2\u042a\u042b\5\u00b2Z\2\u042b\u042d"+
		"\7\u0084\2\2\u042c\u042e\5\u00b2Z\2\u042d\u042c\3\2\2\2\u042d\u042e\3"+
		"\2\2\2\u042e\u042f\3\2\2\2\u042f\u0430\7\u0084\2\2\u0430\u0435\3\2\2\2"+
		"\u0431\u0432\5\u00b2Z\2\u0432\u0433\7\u0084\2\2\u0433\u0435\3\2\2\2\u0434"+
		"\u042a\3\2\2\2\u0434\u0431\3\2\2\2\u0434\u0435\3\2\2\2\u0435\u0436\3\2"+
		"\2\2\u0436\u0444\5\u00b2Z\2\u0437\u0438\5\u00b2Z\2\u0438\u043a\7\u0084"+
		"\2\2\u0439\u043b\5\u00b2Z\2\u043a\u0439\3\2\2\2\u043a\u043b\3\2\2\2\u043b"+
		"\u043c\3\2\2\2\u043c\u043d\7\u0084\2\2\u043d\u0442\3\2\2\2\u043e\u043f"+
		"\5\u00b2Z\2\u043f\u0440\7\u0084\2\2\u0440\u0442\3\2\2\2\u0441\u0437\3"+
		"\2\2\2\u0441\u043e\3\2\2\2\u0441\u0442\3\2\2\2\u0442\u0444\3\2\2\2\u0443"+
		"\u0434\3\2\2\2\u0443\u0441\3\2\2\2\u0444\u00a1\3\2\2\2\u0445\u0447\5\u00b2"+
		"Z\2\u0446\u0445\3\2\2\2\u0446\u0447\3\2\2\2\u0447\u0448\3\2\2\2\u0448"+
		"\u044a\7\u0084\2\2\u0449\u044b\5\u00b2Z\2\u044a\u0449\3\2\2\2\u044a\u044b"+
		"\3\2\2\2\u044b\u044c\3\2\2\2\u044c\u044e\7\u0084\2\2\u044d\u044f\5\u00b2"+
		"Z\2\u044e\u044d\3\2\2\2\u044e\u044f\3\2\2\2\u044f\u0450\3\2\2\2\u0450"+
		"\u0451\7\u0084\2\2\u0451\u0462\5\u00b2Z\2\u0452\u0454\5\u00b2Z\2\u0453"+
		"\u0452\3\2\2\2\u0453\u0454\3\2\2\2\u0454\u0455\3\2\2\2\u0455\u0457\7\u0084"+
		"\2\2\u0456\u0458\5\u00b2Z\2\u0457\u0456\3\2\2\2\u0457\u0458\3\2\2\2\u0458"+
		"\u0459\3\2\2\2\u0459\u045a\7\u0084\2\2\u045a\u0462\5\u00b2Z\2\u045b\u045d"+
		"\5\u00b2Z\2\u045c\u045b\3\2\2\2\u045c\u045d\3\2\2\2\u045d\u045e\3\2\2"+
		"\2\u045e\u045f\7\u0084\2\2\u045f\u0462\5\u00b2Z\2\u0460\u0462\5\u00b2"+
		"Z\2\u0461\u0446\3\2\2\2\u0461\u0453\3\2\2\2\u0461\u045c\3\2\2\2\u0461"+
		"\u0460\3\2\2\2\u0462\u00a3\3\2\2\2\u0463\u0468\5\u00b2Z\2\u0464\u0465"+
		"\7\u008b\2\2\u0465\u0467\5\u00b2Z\2\u0466\u0464\3\2\2\2\u0467\u046a\3"+
		"\2\2\2\u0468\u0466\3\2\2\2\u0468\u0469\3\2\2\2\u0469\u00a5\3\2\2\2\u046a"+
		"\u0468\3\2\2\2\u046b\u046d\7\"\2\2\u046c\u046b\3\2\2\2\u046c\u046d\3\2"+
		"\2\2\u046d\u046e\3\2\2\2\u046e\u046f\7#\2\2\u046f\u00a7\3\2\2\2\u0470"+
		"\u0471\t\n\2\2\u0471\u00a9\3\2\2\2\u0472\u0473\t\f\2\2\u0473\u0474\7\u0089"+
		"\2\2\u0474\u0475\7L\2\2\u0475\u0484\7\u008a\2\2\u0476\u0477\5\u00b2Z\2"+
		"\u0477\u0478\7\u0089\2\2\u0478\u0479\7q\2\2\u0479\u047a\7\u008b\2\2\u047a"+
		"\u047b\7q\2\2\u047b\u047c\7\u008a\2\2\u047c\u0484\3\2\2\2\u047d\u047e"+
		"\5\u00b2Z\2\u047e\u047f\7\u0089\2\2\u047f\u0480\7q\2\2\u0480\u0481\7\u008a"+
		"\2\2\u0481\u0484\3\2\2\2\u0482\u0484\5\u00b2Z\2\u0483\u0472\3\2\2\2\u0483"+
		"\u0476\3\2\2\2\u0483\u047d\3\2\2\2\u0483\u0482\3\2\2\2\u0484\u00ab\3\2"+
		"\2\2\u0485\u0495\7s\2\2\u0486\u0495\7t\2\2\u0487\u0489\5\u00aeX\2\u0488"+
		"\u0487\3\2\2\2\u0488\u0489\3\2\2\2\u0489\u048a\3\2\2\2\u048a\u0495\7q"+
		"\2\2\u048b\u048d\5\u00aeX\2\u048c\u048b\3\2\2\2\u048c\u048d\3\2\2\2\u048d"+
		"\u048e\3\2\2\2\u048e\u0495\t\r\2\2\u048f\u0491\5\u00aeX\2\u0490\u048f"+
		"\3\2\2\2\u0490\u0491\3\2\2\2\u0491\u0492\3\2\2\2\u0492\u0493\7\u0088\2"+
		"\2\u0493\u0495\t\16\2\2\u0494\u0485\3\2\2\2\u0494\u0486\3\2\2\2\u0494"+
		"\u0488\3\2\2\2\u0494\u048c\3\2\2\2\u0494\u0490\3\2\2\2\u0495\u00ad\3\2"+
		"\2\2\u0496\u0497\t\b\2\2\u0497\u00af\3\2\2\2\u0498\u0499\t\17\2\2\u0499"+
		"\u00b1\3\2\2\2\u049a\u049f\7r\2\2\u049b\u049f\7m\2\2\u049c\u049f\7o\2"+
		"\2\u049d\u049f\5\u00b0Y\2\u049e\u049a\3\2\2\2\u049e\u049b\3\2\2\2\u049e"+
		"\u049c\3\2\2\2\u049e\u049d\3\2\2\2\u049f\u00b3\3\2\2\2\u04a0\u04b0\7w"+
		"\2\2\u04a1\u04b0\7x\2\2\u04a2\u04b0\7y\2\2\u04a3\u04a4\7y\2\2\u04a4\u04b0"+
		"\7w\2\2\u04a5\u04a6\7x\2\2\u04a6\u04b0\7w\2\2\u04a7\u04a8\7y\2\2\u04a8"+
		"\u04b0\7x\2\2\u04a9\u04aa\7z\2\2\u04aa\u04b0\7w\2\2\u04ab\u04ac\7z\2\2"+
		"\u04ac\u04b0\7x\2\2\u04ad\u04ae\7z\2\2\u04ae\u04b0\7y\2\2\u04af\u04a0"+
		"\3\2\2\2\u04af\u04a1\3\2\2\2\u04af\u04a2\3\2\2\2\u04af\u04a3\3\2\2\2\u04af"+
		"\u04a5\3\2\2\2\u04af\u04a7\3\2\2\2\u04af\u04a9\3\2\2\2\u04af\u04ab\3\2"+
		"\2\2\u04af\u04ad\3\2\2\2\u04b0\u00b5\3\2\2\2\u04b1\u04b2\t\20\2\2\u04b2"+
		"\u00b7\3\2\2\2\u0099\u00bb\u00c5\u00c7\u00cc\u00d0\u00d4\u00d8\u00dc\u00df"+
		"\u00ea\u00ee\u00f3\u00f8\u00fc\u0100\u0107\u010a\u0113\u0116\u0121\u0126"+
		"\u012b\u0130\u0135\u013b\u0142\u0146\u0148\u014d\u0153\u0157\u015e\u0167"+
		"\u016a\u016f\u0175\u0178\u017e\u0183\u018a\u018d\u0191\u0195\u019b\u019e"+
		"\u01a4\u01a6\u01aa\u01b3\u01c0\u01c2\u01c4\u01cb\u01d2\u01d6\u01de\u01e2"+
		"\u01e6\u01ec\u01f6\u0200\u020a\u0212\u021e\u0224\u022b\u0232\u0242\u0249"+
		"\u0251\u0258\u025c\u025e\u0262\u0265\u026a\u026e\u0272\u027b\u027e\u0282"+
		"\u0287\u0290\u0297\u02a0\u02a6\u02af\u02b5\u02bb\u02be\u02c6\u02c8\u02cf"+
		"\u02d3\u02da\u02e2\u02e8\u02ed\u02f1\u02f8\u02fa\u02ff\u0301\u0305\u030c"+
		"\u030e\u0314\u0316\u031b\u031e\u0322\u0324\u034a\u0354\u035a\u035f\u036a"+
		"\u0376\u0383\u03c2\u03e0\u03e5\u03f1\u03f8\u03ff\u040b\u040e\u0411\u041f"+
		"\u0426\u042d\u0434\u043a\u0441\u0443\u0446\u044a\u044e\u0453\u0457\u045c"+
		"\u0461\u0468\u046c\u0483\u0488\u048c\u0490\u0494\u049e\u04af";
	public static final ATN _ATN =
		new ATNDeserializer().deserialize(_serializedATN.toCharArray());
	static {
		_decisionToDFA = new DFA[_ATN.getNumberOfDecisions()];
		for (int i = 0; i < _ATN.getNumberOfDecisions(); i++) {
			_decisionToDFA[i] = new DFA(_ATN.getDecisionState(i), i);
		}
	}
}