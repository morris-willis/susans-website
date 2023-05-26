import { Component } from '@angular/core';
import { PRODUCTS } from '../mock-products';
import { Product } from '../product';
@Component({
  selector: 'app-pots',
  templateUrl: './pots.component.html',
  styleUrls: ['./pots.component.css']
})
export class PotsComponent {
  products = PRODUCTS.filter(product => product.type === 'pot');
  ngOnInit(): void {
  this.getProduct();
  }
  getProduct(): void{
    
  }
  
}
