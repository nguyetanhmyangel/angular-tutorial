import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-spec',
  template: `<h3> Specification of {{product.name}} <h3>`
})
export class ProductSpecComponent implements OnInit {
  product!: Product;
  id: any;
  sub: any

  constructor(private _activatedRoute: ActivatedRoute, private _productService: ProductService) {
  }


  ngOnInit() {
    this.sub = this._activatedRoute.parent!.paramMap.subscribe(params => {
      this.id = params.get('id');
      let products = this._productService.getProducts();
      this.product = products.find(p => p.productID == this.id)!;
    });
  }


  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
