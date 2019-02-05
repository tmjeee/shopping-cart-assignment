import {Component, OnDestroy, OnInit} from "@angular/core";
import {ProductService, Product} from "../../service/product.service";
import {AddToShoppingCartEvent} from "../../component/shopping-cart-item-component/shopping-cart-item.component";
import {ShoppingCartService, ShoppingCart} from "../../service/shopping-cart.service";
import {Subscriber, Subscription} from "rxjs";
import {ShoppingCartItemDeleteEvent} from "../../component/shopping-cart-component/shopping-cart.component";


@Component({
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss']
})
export class MainPage implements OnInit, OnDestroy {

  products:Product[];
  shoppingCart:ShoppingCart;

  shoppingCartSubscription:Subscription;

  constructor(private productService:ProductService,
              private shoppingCartService:ShoppingCartService) {}

  ngOnInit(): void {
    this.products = this.productService.allProducts();
    this.shoppingCartSubscription = this.shoppingCartService.subscribe(
      Subscriber.create((shoppingCart:ShoppingCart)=>{
        this.shoppingCart = shoppingCart;
      })
    );
  }

  ngOnDestroy(): void {
    this.shoppingCartSubscription.unsubscribe();
  }

  onShoppingCartItemEvent(event:AddToShoppingCartEvent) {
    this.shoppingCartService.addToShoppingCart(event.product, event.quantity);
  }

  onShoppingCartEvent(event:ShoppingCartItemDeleteEvent) {
    this.shoppingCartService.deleteShoppingCartItem(event.i, event.item);
  }



}
