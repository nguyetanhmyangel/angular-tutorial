import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, } from '@angular/forms';
import { ContactComponent } from './contact/contact.component';
import { ErrorComponent } from './error/error.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
//import { RouterModule, Routes } from '@angular/router';
import { ProductService } from './services/product.service';


// export const appRoutes: Routes = [
//   { path: 'home', component: HomeComponent },
//   { path: 'contact', component: ContactComponent },
//   { path: 'product', component: ProductComponent },
//   { path: 'product/:id', component: ProductDetailComponent },
//   { path: '', redirectTo: 'home', pathMatch: 'full' },
//   { path: '**', component: ErrorComponent },
// ];

@NgModule({
  declarations: [
    AppComponent,
    ContactComponent,
    ErrorComponent,
    HomeComponent,
    ProductComponent,
    ProductDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
    //RouterModule.forRoot(appRoutes),
  ],
  providers: [ProductService],
  bootstrap: [AppComponent]
})
export class AppModule { }
