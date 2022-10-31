import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FormsModule, } from '@angular/forms';
import { HelloComponent } from './hello/hello.component';
import { ContactComponent } from './contact/contact.component';
import { ProductComponent } from './product/product.component';
import { HomeComponent } from './home/home.component';
import { ErrorComponent } from './error/error.component';
import { RouterModule } from '@angular/router';
import { appRoutes } from './app.routes';


@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    ContactComponent,
    ProductComponent,
    HomeComponent,
    ErrorComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    
    RouterModule.forRoot(appRoutes)                           /*path location strategy */
    /*RouterModule.forRoot(appRoutes, { useHash: true }) */   /*Hashlocationstrategy */
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
