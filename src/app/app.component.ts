import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import * as monaco from 'monaco-editor-core';

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
    language: 'sql',
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
  }

  doStuff() {
    this.json = {};
    this.json.code = this.editor.getModel().getValue();
    const lines = monaco.editor.tokenize(this.code, 'sql');
    const result = [];
    let lineOffset = 0;
    for (const line of lines) {
      for (let i = 1; i < line.length; i++) {
        result.push(this.code.slice(line[i - 1].offset, line[i].offset));
      }
    }
    this.json.result = result;
    console.log('Result: ' + this.json);
    this.changeDetector.detectChanges();
  }
}
