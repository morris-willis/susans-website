import { Component, Input } from '@angular/core';
import { Product } from '../product';
import { ProductsService } from '../products.service';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent {
  @Input() product?: Product;
  constructor(
    private route: ActivatedRoute,
    private productsService: ProductsService,
  ){}

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    const $id = Number(this.route.snapshot.paramMap.get('$id'));
    this.productsService.getProduct($id)
      .subscribe(product => this.product = product);
  }
}