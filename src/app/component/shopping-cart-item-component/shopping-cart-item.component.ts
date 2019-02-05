import {Component, EventEmitter} from "@angular/core";
import {Input} from "@angular/core";
import {Product} from "../../service/product.service";
import {Output} from "@angular/core";
import {FormBuilder, FormGroup} from "@angular/forms";
import {Validators} from "@angular/forms";
import {FormControl} from "@angular/forms";

export interface AddToShoppingCartEvent {
  product:Product,
  quantity:number;
}

@Component({
  selector:'shopping-cart-item',
  templateUrl: './shopping-cart-item.component.html',
  styleUrls:['./shopping-cart-item.component.scss']
})
export class ShoppingCartItemComponent {

  @Input() products:Product[]
  @Output() events:EventEmitter<AddToShoppingCartEvent>;

  formGroup:FormGroup;
  selectedProductFormControl:FormControl;
  selectedQuantityFormControl:FormControl;
  totalPrice:number;

  constructor(private formBuilder:FormBuilder) {
    this.events = new EventEmitter<AddToShoppingCartEvent>();

    this.selectedProductFormControl = this.formBuilder.control(undefined, [Validators.required]);
    this.selectedQuantityFormControl = this.formBuilder.control(1, [Validators.min(1), Validators.required]);

    this.formGroup = this.formBuilder.group({
      'selectedProduct': this.selectedProductFormControl,
      'selectedQuantity': this.selectedQuantityFormControl
    });

    this.totalPrice = 0;
  }


  onProductSelected(event:Event, product:Product) {
    event.preventDefault();
    event.stopPropagation();
    this.selectedProductFormControl.setValue(product);
    this.calculateTotal();
  }

  onQuantityChanged(event:Event) {
    this.calculateTotal();
  }

  private calculateTotal() {
    if (this.selectedProductFormControl.value && this.selectedQuantityFormControl.value > 0) {
      this.totalPrice = (this.selectedProductFormControl.value.price * this.selectedQuantityFormControl.value)
    } else {
      this.totalPrice = 0;
    }
  }

  addToShoppingCart(event:Event) {
    this.events.emit(<AddToShoppingCartEvent>{
      product: this.selectedProductFormControl.value,
      quantity: this.selectedQuantityFormControl.value
    });
  }
}
