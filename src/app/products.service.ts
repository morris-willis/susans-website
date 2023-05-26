import { Injectable } from '@angular/core';
import { Product } from "./product";
import { PRODUCTS } from './mock-products';
import { Observable, of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  getProducts(): Observable<Product[]>{
    const products = of(PRODUCTS)
    return products
  }
  getProduct(id: number): Observable<Product>{
    const product = PRODUCTS.find(p => p.id === id)!;
    return of(product)
  }
  constructor() { }
}
