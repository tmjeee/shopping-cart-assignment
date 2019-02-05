import {Injectable} from "@angular/core";


export const ALL_PRODUCTS:Product[] = [
  <Product>{brand:'Brand 1',  price: 2.10 },
  <Product>{brand:'Brand 2',  price: 3.50 },
  <Product>{brand:'Brand 3',  price: 1.40 },
  <Product>{brand:'Brand 4',  price: 5.30 },
  <Product>{brand:'Brand 5',  price: 6.20 },
  <Product>{brand:'Brand 6',  price: 7.70 },
  <Product>{brand:'Brand 7',  price: 9.50 },
]

export interface Product {
  brand:string;
  price:number;
}

@Injectable()
export class ProductService {

  allProducts():Product[] {
    return ALL_PRODUCTS;
  }

}
