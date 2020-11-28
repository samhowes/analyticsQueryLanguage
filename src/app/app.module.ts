import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { NgxJsonViewerModule } from 'ngx-json-viewer';
import { setupLanguage } from './lang/monaco/static';

setupLanguage();
@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CommonModule, FormsModule, NgxJsonViewerModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
