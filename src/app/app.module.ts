import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { EmployeeKeyValueDiffComponent } from './employee-keyvalue-diff/employee-keyvalue-diff.component';
import { EmployeeIterableDiffComponent } from './employee-iterable-diff/employee-iterable-diff.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeKeyValueDiffComponent,
    EmployeeIterableDiffComponent
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
