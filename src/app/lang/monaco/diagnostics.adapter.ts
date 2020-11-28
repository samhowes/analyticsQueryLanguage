import * as monaco from 'monaco-editor-core';
import { IAntlrError } from '../todoLang.errorlistener';
import { languageExtensionPoint } from './monach';
import { WorkerManager } from './workerManager';

export default class DiagnosticsAdapter {
  constructor(private workerManager: WorkerManager) {
    const onModelAdd = (model: monaco.editor.IModel): void => {
      let handle: any;
      model.onDidChangeContent(() => {
        // here we are Debouncing the user changes, so everytime a new change is done, we wait 500ms before validating
        // otherwise if the user is still typing, we cancel the
        clearTimeout(handle);
        handle = setTimeout(() => this.validate(model.uri), 500);
      });

      this.validate(model.uri);
    };
    monaco.editor.onDidCreateModel(onModelAdd);
    monaco.editor.getModels().forEach(onModelAdd);
  }
  private validate(resource: monaco.Uri): Promise<void> {
    // get the worker proxy
    return this.workerManager
      .getLanguageServiceWorker(resource)
      .then((worker) => {
        return worker.doValidation();
      })
      .then(
        (errorMarkers) => {
          const model = monaco.editor.getModel(resource);
          monaco.editor.setModelMarkers(
            model,
            languageExtensionPoint.id,
            errorMarkers.map(toDiagnostics)
          );
        },
        (reason) => {
          return console.log(reason);
        }
      );
  }
}
function toDiagnostics(error: IAntlrError): monaco.editor.IMarkerData {
  return {
    ...error,
    severity: monaco.MarkerSeverity.Error,
  };
}
