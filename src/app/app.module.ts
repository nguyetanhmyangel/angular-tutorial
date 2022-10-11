import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { CustomDefaultThemeDirective } from './attribute-directives/custom-default-theme.directive';
import { CustomColorDirective } from './attribute-directives/custom-color.directive';
import { CustomThemeDirective } from './attribute-directives/custom-theme.directive';
import { CustomDefaultColorOnEventDirective } from './attribute-directives/custom-default-color-on-event.directive';
import { CustomDynamicColorOnEventDirective } from './attribute-directives/custom-dynamic-color-on-event.directive';
import { CustomIfDirective } from './structural-directives/custom-if.directive';
import { CustomDelayDirective } from './structural-directives/custom-delay.directive';
import { CustomLoopDecorator } from './structural-directives/custom-loop.directive';

@NgModule({
  declarations: [
    AppComponent,
    CustomDefaultThemeDirective,
    CustomColorDirective,
    CustomThemeDirective,
    CustomDefaultColorOnEventDirective,
    CustomDynamicColorOnEventDirective,
    CustomIfDirective,
    CustomDelayDirective,
    CustomLoopDecorator
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
