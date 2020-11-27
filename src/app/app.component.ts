import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  @ViewChild('editorOutlet') editorOutlet: ElementRef<HTMLElement>;
  title = 'analyticsQueryLanguage';

  ngAfterViewInit(){
    
  }
}
