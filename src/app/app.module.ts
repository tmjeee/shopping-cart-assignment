import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import {RoutingModule} from "./routing.module";
import {Provider} from '@angular/core';
import {ShoppingCartService} from "./service/shopping-cart.service";
import {ProductService} from "./service/product.service";

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    RoutingModule
  ],
  providers: [
    <Provider>{ provide:ProductService, useClass:ProductService},
    <Provider>{ provide:ShoppingCartService, useClass:ShoppingCartService},
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
