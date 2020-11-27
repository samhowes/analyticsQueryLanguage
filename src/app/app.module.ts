import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import * as monaco from 'monaco-editor-core';
import { language, languageExtensionPoint } from './lang/monach';

export function setupLanguage() {
  (window as any).MonacoEnvironment = {
    getWorkerUrl: function (moduleId, label) {
      return './editor.worker.js';
    },
  };

  monaco.languages.register(languageExtensionPoint);
  monaco.languages.onLanguage(languageExtensionPoint.id, () => {
    monaco.languages.setMonarchTokensProvider(
      languageExtensionPoint.id,
      language
    );
  });
}
setupLanguage();
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CommonModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
