import { ANTLRInputStream, CharStreams, CommonTokenStream } from 'antlr4ts';
import { AqlLexer } from './antlr/gen/AqlLexer';
import { AqlParser, Tsql_fileContext } from './antlr/gen/AqlParser';

import {
  IAntlrError,
  TodoLangErrorListener,
} from './todoLang.errorlistener';

export class LanguageService {
  constructor() {}

  parse(
    code: string
  ): { context: Tsql_fileContext; errors: IAntlrError[] } {
    const inputStream = CharStreams.fromString(code);
    const lexer = new AqlLexer(inputStream);
    lexer.removeErrorListeners();
    const todoLangErrorsListner = new TodoLangErrorListener();
    lexer.addErrorListener(todoLangErrorsListner);
    const tokenStream = new CommonTokenStream(lexer);
    const parser = new AqlParser(tokenStream);
    parser.removeErrorListeners();
    parser.addErrorListener(todoLangErrorsListner);

    const ast = parser.tsql_file();
    const errors: IAntlrError[] = todoLangErrorsListner.getErrors();
    return { context: ast, errors };
  }
}
