import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';


import {WelcomePipe}  from './welcome.pipe';
import {StrFormatPipe} from './strformat.pipe';
import {MyUppercaseOnePipe}  from './myuppercaseone.pipe';
import {MyUppercaseTwoPipe}  from './myuppercasetwo.pipe';
import {DivisionPipe}  from './division.pipe';
import {RepeatPipe}  from './repeat.pipe';
import {MyJSONPipe}  from './myjson.pipe';
import {CompanyOnePipe}  from './companyone.pipe';
import {CompanyTwoPipe}  from './companytwo.pipe';


@NgModule({
  declarations: [
    AppComponent,
    WelcomePipe,
    StrFormatPipe,
    MyUppercaseOnePipe,
    MyUppercaseTwoPipe,
    DivisionPipe,
    RepeatPipe,
    MyJSONPipe,
    CompanyOnePipe,
    CompanyTwoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
