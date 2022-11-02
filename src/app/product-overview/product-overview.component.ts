import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-overview',
  template: `<h3> Overview of {{product.name}} <h3>`
})
export class ProductOverviewComponent implements OnInit {
  product!: Product;
  id: any;
  sub: any

  constructor(private _activatedRoute: ActivatedRoute, private _productService: ProductService) {
  }


  ngOnInit() {

    this.sub = this._activatedRoute.parent!.params.subscribe(params => {
      this.id = params['id'];
      let products = this._productService.getProducts();
      this.product = products.find(p => p.productID == this.id)!;
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

}
