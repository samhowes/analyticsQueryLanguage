import * as worker from 'monaco-editor-core/esm/vs/editor/editor.worker';
import { LanguageService } from '../language.service';
import { IAntlrError } from '../todoLang.errorlistener';

export class TodoLangWorker {
  private _ctx: worker.IWorkerContext;
  private languageService: LanguageService;
  constructor(ctx: worker.IWorkerContext) {
    this._ctx = ctx;
    this.languageService = new LanguageService();
  }

  doValidation(): Promise<IAntlrError[]> {
    const code = this.getTextDocument();
    return Promise.resolve(this.languageService.parse(code).errors);
  }
  private getTextDocument(): string {
    const model = this._ctx.getMirrorModels()[0]; // When there are multiple files open, this will be an array
    return model.getValue();
  }
}
