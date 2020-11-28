import * as monaco from 'monaco-editor-core';
import DiagnosticsAdapter from './diagnostics.adapter';
import { language, languageExtensionPoint, conf } from './monach';
import { WorkerManager } from './workerManager';

export function setupLanguage() {
  const environment = {} as monaco.Environment;
  environment.getWorker = (workerId: string, label: string) => {
    if (label === languageExtensionPoint.id)
      return new Worker('./monaco.worker', {
        type: 'module',
      });
    return new Worker('monaco-editor-core/esm/vs/editor/editor.worker', {
      type: 'module',
    });
  };
  (window as any).MonacoEnvironment = environment;

  monaco.languages.register(languageExtensionPoint);
  monaco.languages.onLanguage(languageExtensionPoint.id, () => {
    monaco.languages.setMonarchTokensProvider(
      languageExtensionPoint.id,
      language
    );
    monaco.languages.setLanguageConfiguration(languageExtensionPoint.id, conf);
    const client = new WorkerManager();

    //Call the errors provider
    new DiagnosticsAdapter(client);
  });
}
