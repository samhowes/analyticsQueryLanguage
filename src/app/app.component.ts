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
    language: 'javascript',
    contextmenu: false,
    scrollBeyondLastColumn: 0,
    scrollBeyondLastLine: false,
    scrollbar: { vertical: 'hidden' },
    minimap: {
      enabled: false,
    },
  };
  code: string = 'function x() {\nconsole.log("Hello world!");\n}';

  constructor(private changeDetector: ChangeDetectorRef) {}

  ngAfterViewInit() {}

  onEditorInit(editor) {
    this.editor = editor;
    this.doStuff();
  }

  doStuff() {
    this.json = {};
    this.json.code = this.editor.getValue();
    this.json.result = monaco.editor.tokenize(this.json.code, 'javascript');
    console.log('Result: ' + this.json);
    this.changeDetector.detectChanges();
  }
}
