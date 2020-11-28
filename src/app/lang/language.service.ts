import { ANTLRInputStream, CharStreams, CommonTokenStream } from 'antlr4ts';
import { TodoLangGrammarLexer } from './antlr/gen/TodoLangGrammarLexer';
import {
  TodoExpressionsContext,
  TodoLangGrammarParser,
} from './antlr/gen/TodoLangGrammarParser';
import {
  ITodoLangError,
  TodoLangErrorListener,
} from './todoLang.errorlistener';

export class LanguageService {
  constructor() {}

  parse(
    code: string
  ): { context: TodoExpressionsContext; errors: ITodoLangError[] } {
    const inputStream = CharStreams.fromString(code);
    const lexer = new TodoLangGrammarLexer(inputStream);
    lexer.removeErrorListeners();
    const todoLangErrorsListner = new TodoLangErrorListener();
    lexer.addErrorListener(todoLangErrorsListner);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new TodoLangGrammarParser(tokenStream);
    parser.removeErrorListeners();
    parser.addErrorListener(todoLangErrorsListner);

    const ast = parser.todoExpressions();
    const errors: ITodoLangError[] = todoLangErrorsListner.getErrors();
    return { context: ast, errors };
  }
}
