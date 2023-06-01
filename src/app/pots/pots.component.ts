import { Component, Input, ChangeDetectionStrategy } from '@angular/core';
import { PRODUCTS } from '../mock-products';
import { Product } from '../product';
import { SearchTermService } from '../search-term.service';
@Component({
  selector: 'app-pots',
  templateUrl: './pots.component.html',
  styleUrls: ['./pots.component.css']

})
export class PotsComponent {
  @Input() searchTerm: string = "";
  @Input() products: Product [] = [];
  constructor( public searchTermService: SearchTermService){}
 
  ngOnInit(): void {
  this.getProduct();

  }
  getProduct(): void{
     this.products = PRODUCTS.filter(product => product.type === 'pot').filter(product => product.tags.toLowerCase().includes(this.searchTerm));
  }

}
