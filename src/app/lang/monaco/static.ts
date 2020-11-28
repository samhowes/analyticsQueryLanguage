import * as monaco from 'monaco-editor-core';
import DiagnosticsAdapter from './diagnostics.adapter';
import { language, languageExtensionPoint, conf } from './monach';
import { WorkerManager } from './workerManager';

export function setupLanguage() {
  (window as any).MonacoEnvironment = {
    getWorkerUrl: function (moduleId, label) {
      console.log(
        `Received request for: ${moduleId}, ${label}. ExtensionPoint: ${languageExtensionPoint.id}`
      );
      if (label === languageExtensionPoint.id) return './todoLangWorker.js';
      return './editor.worker.js';
    },
  };

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
