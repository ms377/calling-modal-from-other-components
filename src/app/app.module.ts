import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; 

import { AppComponent } from './app.component';
import { Modal01Component } from './modal01/modal01.component';
import { MainCComponent } from './main-c/main-c.component';
import {Service01Service} from './shared/service01.service';

@NgModule({
  declarations: [
    AppComponent,
    Modal01Component,
    MainCComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [Service01Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
