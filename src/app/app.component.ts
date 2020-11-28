import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import * as monaco from 'monaco-editor-core';
import { LanguageService } from './lang/language.service';
import * as flatted from 'flatted';
import * as Comlink from 'comlink';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
  @ViewChild('editorHost') editorHost: ElementRef<HTMLElement>;
  editor: monaco.editor.IStandaloneCodeEditor;
  title = 'analyticsQueryLanguage';
  json: any;
  editorOptions: monaco.editor.IStandaloneEditorConstructionOptions = {
    theme: 'vs',
    language: 'aql',
    contextmenu: false,
    scrollBeyondLastColumn: 0,
    scrollBeyondLastLine: false,
    scrollbar: { vertical: 'hidden' },
    minimap: {
      enabled: false,
    },
  };
  code: string =
    "SELECT WorkItemId, DateSK\nFROM WorkItemSnapshot\nWHERE AssignedTo = 'five'";

  constructor(private changeDetector: ChangeDetectorRef) {}

  ngAfterViewInit() {
    this.editor = monaco.editor.create(document.querySelector('.editor-host'), {
      language: 'aql',
      minimap: { enabled: false },
      value: this.code,
    });
    this.doStuff();
  }
  extraStuff() {
    console.log('test');
    // const worker = new Worker('./todoLangWorker.js');
    // worker.addEventListener('message', (msg) => {
    //   return console.log(msg.data);
    // });
    // worker.addEventListener('error', (msg) => {
    //   return console.log(msg);
    // });

    if (typeof Worker !== 'undefined') {
      // Create a new
      const worker = new Worker('./app.worker', { type: 'module' });
      worker.onmessage = ({ data }) => {
        console.log(`page got message: ${data}`);
      };
      worker.postMessage('hello');
    } else {
      // Web Workers are not supported in this environment.
      // You should add a fallback so that your program still executes correctly.
    }
  }
  doStuff() {
    this.json = {};
    this.json.code = this.editor.getModel().getValue();

    // const flatt = flatted.stringify(ast, null, 2);
    // this.json.ast = JSON.parse(flatt);
    console.log('Result: ' + this.json);
    this.changeDetector.detectChanges();
  }
}
