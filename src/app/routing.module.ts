import {Route, RouterModule, Routes} from "@angular/router";
import {MainPage} from "./page/main-page/main.page";
import {NgModule} from "@angular/core";
import {CommonModule} from "@angular/common";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpClientModule} from "@angular/common/http";
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {ShoppingCartItemComponent} from "./component/shopping-cart-item-component/shopping-cart-item.component";
import {ShoppingCartComponent} from "./component/shopping-cart-component/shopping-cart.component";

const routes:Routes = [
  <Route> { path: '', pathMatch: 'full', redirectTo:'/main'},
  <Route> { path: 'main', component:MainPage}
]

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {useHash:true, enableTracing:true}),

    NgbModule,
  ],
  declarations: [
    MainPage,

    ShoppingCartComponent,
    ShoppingCartItemComponent,
  ],
  exports: [RouterModule]
})
export class RoutingModule {
}
