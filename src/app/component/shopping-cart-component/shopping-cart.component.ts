import {Component, EventEmitter, Input} from "@angular/core";
import {ShoppingCart, ShoppingCartItem} from "../../service/shopping-cart.service";
import {Output} from "@angular/core";

export interface ShoppingCartItemDeleteEvent {
  i:number;
  item: ShoppingCartItem;
}

@Component({
  selector:'shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls:['./shopping-cart.component.scss']
})
export class ShoppingCartComponent {

  @Input() shoppingCart:ShoppingCart;
  @Output() events:EventEmitter<ShoppingCartItemDeleteEvent>;


  constructor() {
    this.events = new EventEmitter<ShoppingCartItemDeleteEvent>();
  }

  deleteShoppingCartItem(event:Event, i:number) { // i the index of item in list
    this.events.emit(<ShoppingCartItemDeleteEvent>{
      i:i,
      item: this.shoppingCart.items[i]
    });
  }




}
