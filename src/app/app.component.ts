import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as monaco from 'monaco-editor/esm/vs/editor/editor.api'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('editorOutlet') editorOutlet: ElementRef<HTMLElement>;
  title = 'analyticsQueryLanguage';

  ngAfterViewInit(){
    var editor = monaco.editor.create(this.editorOutlet.nativeElement, {
      value: ['function x() {', '\tconsole.log("Hello world!");', '}'].join('\n'),
      language: 'c',
      theme:'vs-dark'
    });
  }
}
