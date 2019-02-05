import {Injectable} from "@angular/core";
import {Product} from "./product.service";
import {Subject, Observer, Subscription} from "rxjs";


export interface ShoppingCartItem {
  product:Product;
  quantity:number;
  total:number;
}

export interface ShoppingCart {
  items:ShoppingCartItem[];
  total:number;
}

@Injectable()
export class ShoppingCartService {

  shoppingCartSubject:Subject<ShoppingCart>;

  items:ShoppingCartItem[]

  constructor(){
    this.items = [];
    this.shoppingCartSubject = new Subject();
  }

  addToShoppingCart(product:Product, quantity:number) {
    this.items.push(<ShoppingCartItem>{
      product: product,
      quantity: quantity,
      total: (product.price * quantity)
    });
    this.shoppingCartSubject.next(
      this.shoppingCart()
    );
  }

  deleteShoppingCartItem(i:number, item:ShoppingCartItem) {
    this.items.splice(i,1);
    this.shoppingCartSubject.next(
      this.shoppingCart()
    );
  }

  subscribe(observer:Observer<ShoppingCart>):Subscription {
    return this.shoppingCartSubject.asObservable().subscribe(observer);
  }

  shoppingCart():ShoppingCart {
    return <ShoppingCart>{
      items: [].concat(this.items),
      total: this.items.reduce((acc:number, i:ShoppingCartItem)=>{
          acc = acc + (i.quantity * i.product.price);
          return acc;
      },0)
    }
  }
}
