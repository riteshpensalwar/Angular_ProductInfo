import { element } from 'protractor';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// FormsModule, used for executing ngModel
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductComponent } from "./components/productcomponent/app.product.component";
//


@NgModule({
  declarations: [
    AppComponent,ProductComponent
  ],
  imports: [
    BrowserModule, FormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [ProductComponent]
})
export class AppModule { }
