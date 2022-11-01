import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  product!: Product;
  id: any;
  constructor(private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _productService: ProductService) { }

  productSubscribe: any;

  /* Using snapshot */
  //  ngOnInit() {
  //     //This still works but is deprecated
  //     //this.id = this._activatedRoute.snapshot.params['id'];
  //     this.id = this._activatedRoute.snapshot.paramMap.get("id");
  //     let products = this._productService.getProducts();
  //     this.product = products.find(p => p.productID==this.id)!;
  //  }

  /* Using Subscribe */
  ngOnInit(): void {
    // this.productSubscribe = this._activatedRoute.paramMap.subscribe(params => {
    //   console.log("params", params);

    //   this.id = params.get('id');
    //   let products = this._productService.getProducts();
    //   this.product = products.find(p => p.productID == this.id)!;

    //   console.log("productSubscribe", this.productSubscribe);
    //   console.log("products", products);
    // });


    this.productSubscribe = this._activatedRoute.params.subscribe(params => {
      console.log("params", params);

      this.id = params['id'];
      let products = this._productService.getProducts();
      this.product = products.find(p => p.productID == this.id)!;

      console.log("productSubscribe", this.productSubscribe);
      console.log("products", products);
    });
  }

  ngOnDestroy() {
    this.productSubscribe.unsubscribe();
  }

  onBack(): void {
    this._router.navigate(['product']);
  }

}
