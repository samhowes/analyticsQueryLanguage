import * as monaco from 'monaco-editor-core';

import Uri = monaco.Uri;
import { TodoLangWorker } from './todoLangWorker';
import { languageExtensionPoint } from './monach';
import { interval } from 'rxjs';
import { take, tap } from 'rxjs/operators';

export class WorkerManager {
  private worker: monaco.editor.MonacoWebWorker<TodoLangWorker>;
  private workerClientProxy: Promise<TodoLangWorker>;

  constructor() {
    this.worker = null;
  }

  private getClientproxy(): Promise<TodoLangWorker> {
    if (!this.workerClientProxy) {
      this.worker = monaco.editor.createWebWorker<TodoLangWorker>({
        // module that exports the create() method and returns a `JSONWorker` instance
        moduleId: 'workerMain.js',
        label: 'aql',
        // passed in to the create() method
        createData: {
          languageId: languageExtensionPoint.id,
        },
      });

      this.workerClientProxy = <Promise<TodoLangWorker>>(
        (<any>this.worker.getProxy())
      );
    }

    return this.workerClientProxy;
  }

  getLanguageServiceWorker(...resources: Uri[]): Promise<TodoLangWorker> {
    const promise = this.getClientproxy().then((_) =>
      this.worker.withSyncedResources(resources)
    );
    return promise;
  }
}
