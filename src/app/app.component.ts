import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from '@angular/core';
import { EditorComponent } from 'ngx-monaco-editor';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements AfterViewInit {
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

  ngAfterViewInit() {}

  onEditorInit(editor) {
    this.editor = editor;
    this.doStuff();
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
