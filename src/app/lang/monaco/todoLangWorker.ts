import * as monaco from 'monaco-editor-core';
import { LanguageService } from '../language.service';
import { ITodoLangError } from '../todoLang.errorlistener';

export class TodoLangWorker {
  private _ctx: monaco.worker.IWorkerContext;
  private languageService: LanguageService;
  constructor(ctx: monaco.worker.IWorkerContext) {
    this._ctx = ctx;
    this.languageService = new LanguageService();
  }

  doValidation(): Promise<ITodoLangError[]> {
    const code = this.getTextDocument();
    return Promise.resolve(this.languageService.parse(code).errors);
  }
  private getTextDocument(): string {
    const model = this._ctx.getMirrorModels()[0]; // When there are multiple files open, this will be an array
    return model.getValue();
  }
}
