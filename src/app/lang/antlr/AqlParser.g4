// https://github.com/antlr/grammars-v4/blob/master/sql/tsql/TSqlParser.g4
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

parser grammar AqlParser;

options { tokenVocab=AqlLexer; }

tsql_file
    : batch* EOF
    ;

batch
    : go_batch_statement
    | (go_batch_statement | sql_clauses+) go_statement*
    | go_statement
    ;

sql_clauses
    : select_statement_standalone SEMI?
    | cfl_statement SEMI?
    | another_statement SEMI?
    | SEMI
    ;

// Control-of-Flow Language: https://docs.microsoft.com/en-us/sql/t-sql/language-elements/control-of-flow
cfl_statement
    : block_statement
    | break_statement
    | continue_statement
    | if_statement
    | throw_statement
    | try_catch_statement
    | while_statement
    | print_statement
    | raiseerror_statement
    ;

// https://docs.microsoft.com/en-us/sql/t-sql/language-elements/begin-end-transact-sql
block_statement
    : BEGIN ';'? sql_clauses* END ';'?
    ;

// https://docs.microsoft.com/en-us/sql/t-sql/language-elements/break-transact-sql
break_statement
    : BREAK ';'?
    ;

// https://docs.microsoft.com/en-us/sql/t-sql/language-elements/continue-transact-sql
continue_statement
    : CONTINUE ';'?
    ;

// https://docs.microsoft.com/en-us/sql/t-sql/language-elements/if-else-transact-sql
if_statement
    : IF search_condition sql_clauses (ELSE sql_clauses)? ';'?
    ;

// https://docs.microsoft.com/en-us/sql/t-sql/language-elements/throw-transact-sql
throw_statement
    : THROW (throw_error_number ',' throw_message ',' throw_state)? ';'?
    ;

throw_error_number
    : DECIMAL | LOCAL_ID
    ;

throw_message
    : STRING | LOCAL_ID
    ;

throw_state
    : DECIMAL | LOCAL_ID
    ;

// https://docs.microsoft.com/en-us/sql/t-sql/language-elements/try-catch-transact-sql
try_catch_statement
    : BEGIN TRY ';'? try_clauses=sql_clauses+ END TRY ';'? BEGIN CATCH ';'? catch_clauses=sql_clauses* END CATCH ';'?
    ;

// https://docs.microsoft.com/en-us/sql/t-sql/language-elements/while-transact-sql
while_statement
    : WHILE search_condition (sql_clauses | BREAK ';'? | CONTINUE ';'?)
    ;

// https://docs.microsoft.com/en-us/sql/t-sql/language-elements/print-transact-sql
print_statement
    : PRINT (expression | DOUBLE_QUOTE_ID) (',' LOCAL_ID)* ';'?
    ;

// https://docs.microsoft.com/en-us/sql/t-sql/language-elements/raiserror-transact-sql
raiseerror_statement
    : RAISERROR '(' msg=(DECIMAL | STRING | LOCAL_ID)')' ';'?
    | RAISERROR DECIMAL formatstring=(STRING | LOCAL_ID | DOUBLE_QUOTE_ID) (',' argument=(DECIMAL | STRING | LOCAL_ID))*
    ;

another_statement
    : set_statement
    ;



// https://msdn.microsoft.com/en-us/library/ms189499.aspx
select_statement_standalone
    : with_expression? select_statement
    ;
select_statement
    : query_expression order_by_clause? ';'?
    ;

// https://msdn.microsoft.com/en-us/library/ms190356.aspx
// https://msdn.microsoft.com/en-us/library/ms189484.aspx
set_statement
    : SET LOCAL_ID ('.' member_name=id)? '=' expression ';'?
    | SET LOCAL_ID assignment_operator expression ';'?
    // https://msdn.microsoft.com/en-us/library/ms189837.aspx
    | set_special
    ;

// https://msdn.microsoft.com/en-us/library/ms188037.aspx
go_batch_statement
    : GO_BATCH (count=DECIMAL)?
    ;

go_statement
    : GO (count=DECIMAL)?
    ;

// https://msdn.microsoft.com/en-us/library/ms190356.aspx
// Runtime check.
set_special
    : SET id (id | constant_LOCAL_ID) ';'?
    | SET ROWCOUNT (LOCAL_ID | DECIMAL) ';'?
    ;

constant_LOCAL_ID
    : constant
    | LOCAL_ID
    ;

// Expression.

// https://docs.microsoft.com/en-us/sql/t-sql/language-elements/expressions-transact-sql
// Operator precendence: https://docs.microsoft.com/en-us/sql/t-sql/language-elements/operator-precedence-transact-sql
expression
    : primitive_expression
    | function_call
    | expression '.' (value_call | query_call | exist_call)
    | case_expression
    | full_column_name
    | bracket_expression
    | unary_operator_expression
    | expression op=('*' | '/' | '%') expression
    | expression op=('+' | '-' | '&' | '^' | '|' | '||') expression
    ;

primitive_expression
    : DEFAULT | NULL | LOCAL_ID | constant
    ;

// https://docs.microsoft.com/en-us/sql/t-sql/language-elements/case-transact-sql
case_expression
    : CASE caseExpr=expression switch_section+ (ELSE elseExpr=expression)? END
    | CASE switch_search_condition_section+ (ELSE elseExpr=expression)? END
    ;

unary_operator_expression
    : '~' expression
    | op=('+' | '-') expression
    ;

bracket_expression
    : '(' expression ')' | '(' subquery ')'
    ;

constant_expression
    : NULL
    | constant
    // system functions: https://msdn.microsoft.com/en-us/library/ms187786.aspx
    | function_call
    | LOCAL_ID         // TODO: remove.
    | '(' constant_expression ')'
    ;

subquery
    : select_statement
    ;

// https://msdn.microsoft.com/en-us/library/ms175972.aspx
with_expression
    : WITH ctes+=common_table_expression (',' ctes+=common_table_expression)*
    ;

common_table_expression
    : expression_name=id ('(' columns=column_name_list ')')? AS '(' cte_query=select_statement ')'
    ;

search_condition
    : pred+=predicate_br (log=(OR | AND) pred+=predicate_br)*
    ;

predicate_br
    : NOT* predicate
    | NOT* '(' search_condition ')'
    ;

predicate
    : EXISTS '(' subquery ')'
    | freetext_predicate
    | expression comparison_operator expression
    | expression NOT* IN '(' (subquery | expression_list) ')'
    | expression IS null_notnull
    ;

// Changed union rule to sql_union to avoid union construct with C++ target.  Issue reported by person who generates into C++.  This individual reports change causes generated code to work

query_expression
    : (query_specification | '(' query_expression ')')
    |  query_specification order_by_clause?
    ;

// https://msdn.microsoft.com/en-us/library/ms176104.aspx
query_specification
    : SELECT DISTINCT? top=top_clause?
      columns=select_list
      // https://msdn.microsoft.com/en-us/library/ms188029.aspx
      (INTO into=table_name)?
      (FROM from=table_sources)?
      (WHERE where=search_condition)?
      // https://msdn.microsoft.com/en-us/library/ms177673.aspx
      (GROUP BY groupBys+=group_by_item (',' groupBys+=group_by_item)*)?
      (HAVING having=search_condition)?
    ;

// https://msdn.microsoft.com/en-us/library/ms189463.aspx
top_clause
    : TOP (top_percent | top_count)
    ;

top_percent
    : DECIMAL PERCENT
    | '(' topper_expression=expression ')' PERCENT
    ;

top_count
    : count_constant=DECIMAL
    | '(' topcount_expression=expression ')'
    ;

// https://msdn.microsoft.com/en-us/library/ms188385.aspx
order_by_clause
    : ORDER BY order_bys+=order_by_expression (',' order_bys+=order_by_expression)*
    ;

order_by_expression
    : order_by=expression (ascending=ASC | descending=DESC)?
    ;

group_by_item
    : expression
    /*| rollup_spec
    | cube_spec
    | grouping_sets_spec
    | grand_total*/
    ;

// https://msdn.microsoft.com/en-us/library/ms176104.aspx
select_list
    : selectElement+=select_list_elem (',' selectElement+=select_list_elem)*
    ;

// https://docs.microsoft.com/ru-ru/sql/t-sql/queries/select-clause-transact-sql
asterisk
    : (table_name '.')? '*'
    ;

column_elem
    : (full_column_name | NULL) as_column_alias?
    ;

expression_elem
    : leftAlias=column_alias eq='=' leftAssignment=expression
    | expressionAs=expression as_column_alias?
    ;

select_list_elem
    : asterisk
    | column_elem
    | LOCAL_ID (assignment_operator | '=') expression
    | expression_elem
    ;

table_sources
    : source+=table_source (',' source+=table_source)*
    ;

// https://msdn.microsoft.com/en-us/library/ms177634.aspx
table_source
    : table_source_item_joined
    | '(' table_source_item_joined ')'
    ;

table_source_item_joined
    : table_source_item joins+=join_part*
    ;

table_source_item
    : table_name_with_hint        as_table_alias?
    | full_table_name             as_table_alias?
    | '(' derived_table ')'       (as_table_alias column_alias_list?)?
    | function_call               (as_table_alias column_alias_list?)?
    | loc_id=LOCAL_ID             as_table_alias?
    | loc_id_call=LOCAL_ID '.' loc_fcall=function_call (as_table_alias column_alias_list?)?
    | ':' ':' oldstyle_fcall=function_call       as_table_alias? // Build-in function (old syntax)
    ;
// https://msdn.microsoft.com/en-us/library/ms191472.aspx
join_part
    // https://msdn.microsoft.com/en-us/library/ms173815(v=sql.120).aspx
    : join_on
    | pivot
    | unpivot
    ;
join_on
    : (inner=INNER? | join_type=(LEFT | RIGHT) outer=OUTER?)
       JOIN source=table_source ON cond=search_condition
    ;


pivot
    : PIVOT pivot_clause as_table_alias
    ;

unpivot
    : UNPIVOT unpivot_clause as_table_alias
    ;

pivot_clause
    : '(' aggregate_windowed_function FOR full_column_name IN column_alias_list ')'
    ;

unpivot_clause
    : '(' unpivot_exp=expression FOR full_column_name IN '(' full_column_name_list ')' ')'
    ;

full_column_name_list
    : column+=full_column_name (',' column+=full_column_name)*
    ;

table_name_with_hint
    : table_name
    ;

derived_table
    : subquery
    | '(' subquery ')'
    ;

function_call
    : aggregate_windowed_function                       #AGGREGATE_WINDOWED_FUNC
    | scalar_function_name '(' expression_list? ')'     #SCALAR_FUNCTION
    | build_in_functions                                #BUILT_IN_FUNC
    ;

freetext_predicate
    : CONTAINS '(' (full_column_name | '(' full_column_name (',' full_column_name)* ')' | '*' '(' full_column_name ',' expression ')') ',' expression ')'
    ;
build_in_functions
    // https://msdn.microsoft.com/en-us/library/ms173784.aspx
    : CONVERT '(' convert_data_type=data_type ','convert_expression=expression (',' style=expression)? ')'                              #CONVERT

    // https://msdn.microsoft.com/en-us/library/ms190349.aspx
    | COALESCE '(' expression_list ')'                  #COALESCE
    // https://msdn.microsoft.com/en-us/library/ms186819.aspx
    | DATEADD '(' datepart=ID ',' number=expression ',' date=expression ')'  #DATEADD
    // https://msdn.microsoft.com/en-us/library/ms189794.aspx
    | DATEDIFF '(' datepart=ID ',' date_first=expression ',' date_second=expression ')' #DATEDIFF
    // https://docs.microsoft.com/en-us/sql/t-sql/functions/getdate-transact-sql
    | GETDATE '(' ')'                                   #GETDATE
    // https://docs.microsoft.com/en-us/sql/t-sql/functions/getdate-transact-sql
    | GETUTCDATE '(' ')'                                #GETUTCDATE
    | NULLIF '(' left=expression ',' right=expression ')'          #NULLIF
    // https://msdn.microsoft.com/en-us/library/ms184325.aspx
    | ISNULL '(' left=expression ',' right=expression ')'          #ISNULL
    // https://docs.microsoft.com/en-us/sql/t-sql/functions/logical-functions-iif-transact-sql
    | IIF '(' cond=search_condition ',' left=expression ',' right=expression ')'   #IIF
    | STRING_AGG '(' expr=expression ',' separator=expression ')' #STRINGAGG
    ;

value_call
    :  VALUE '(' xquery=STRING ',' sqltype=STRING ')'
    ;

query_call
    : QUERY '(' xquery=STRING ')'
    ;

exist_call
    : EXIST '(' xquery=STRING ')'
    ;

switch_section
    : WHEN expression THEN expression
    ;

switch_search_condition_section
    : WHEN search_condition THEN expression
    ;

as_column_alias
    : AS? column_alias
    ;

as_table_alias
    : AS? table_alias
    ;

table_alias
    : id
    ;

column_alias_list
    : '(' alias+=column_alias (',' alias+=column_alias)* ')'
    ;

column_alias
    : id
    | STRING
    ;

expression_list
    : exp+=expression (',' exp+=expression)*
    ;

// https://msdn.microsoft.com/en-us/library/ms173454.aspx
aggregate_windowed_function
    : agg_func=(AVG | MAX | MIN | SUM | STDEV | STDEVP | VAR | VARP)
      '(' all_distinct_expression ')'
    | COUNT
      '(' ('*' | all_distinct_expression) ')'
    ;

all_distinct_expression
    : DISTINCT? expression
    ;

full_table_name
    : (server=id '.' database=id '.'  schema=id   '.'
    |                database=id '.' (schema=id)? '.'
    |                                 schema=id   '.')? table=id
    ;

table_name
    : (database=id '.' (schema=id)? '.' | schema=id '.')? table=id
    | (database=id '.' (schema=id)? '.' | schema=id '.')?
    ;

full_column_name
    : server=id? '.' schema=id? '.' tablename=id? '.' column_name=id
    | schema=id? '.' tablename=id? '.' column_name=id
    | tablename=id? '.' column_name=id
    | column_name=id
    ;

column_name_list
    : col+=id (',' col+=id)*
    ;

null_notnull
    : NOT? NULL
    ;

scalar_function_name
    : RIGHT
    | LEFT
    ;

// https://msdn.microsoft.com/en-us/library/ms187752.aspx
// TODO: implement runtime check or add new tokens.

data_type
    : scaled=(VARCHAR | NVARCHAR) '(' MAX ')'
    | ext_type=id '(' scale=DECIMAL ',' prec=DECIMAL ')'
    | ext_type=id '(' scale=DECIMAL ')'
    | unscaled_type=id
    ;

// https://msdn.microsoft.com/en-us/library/ms179899.aspx
constant
    : STRING // string, datetime or uniqueidentifier
    | BINARY
    | sign? DECIMAL
    | sign? (REAL | FLOAT)  // float or decimal
    | sign? dollar='$' (DECIMAL | FLOAT)       // money
    ;

sign
    : '+'
    | '-'
    ;

keyword
    : AFTER
    | AGGREGATE
    | APPLY
    | AVG
    | CATCH
    | CONCAT
    | COUNT
    | DATA
    | DATEADD
    | DATEDIFF
    | DAYS
    | EMPTY
    | EXIST
    | FILTER
    | GETDATE
    | GETUTCDATE
    | GO
    | GO_BATCH
    | INT
    | MAX
    | MIN
    | NEXT
    | ONLY
    | QUERY
    | ROW
    | ROW_NUMBER
    | ROWS
    | STDEV
    | STDEVP
    | STRING_AGG
    | SUM
    | TAKE
    | THROW
    | TIME
    | TRY
    | VALUE
    | VAR
    | VARP
    | BEFORE
    | ENABLED
    | ERROR
    | GET
    | IIF
    | ISNULL
    | SPLIT
    | START
    | STOP
    //Build-ins:
    | VARCHAR
    | NVARCHAR
    | BINARY_KEYWORD
    ;

// https://msdn.microsoft.com/en-us/library/ms175874.aspx
id
    : ID
    | DOUBLE_QUOTE_ID
    | SQUARE_BRACKET_ID
    | keyword
    ;

// https://msdn.microsoft.com/en-us/library/ms188074.aspx
// Spaces are allowed for comparison operators.
comparison_operator
    : '=' | '>' | '<' | '<' '=' | '>' '=' | '<' '>' | '!' '=' | '!' '>' | '!' '<'
    ;

assignment_operator
    : '+=' | '-=' | '*=' | '/=' | '%=' | '&=' | '^=' | '|='
    ;
