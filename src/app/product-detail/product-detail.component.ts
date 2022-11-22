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
  id!: number;

  constructor(
    private _activatedRoute: ActivatedRoute,
    private _router: Router,
    private _productService: ProductService
  ) {}

  /* Using snapshot */
  //ngOnInit() {
  //  this.id = this._activatedRoute.snapshot.paramMap.get('id');
  //
  //  //You can use this also
  //  //this.id=this._activatedRoute.snapshot.params['id'];

  //  let products = this._productService.getProducts();
  //  this.product = products.find((p) => p.productID == this.id);
  //}

  /* Using Subscribe */

  sub!: any;

  ngOnInit() {
    this.sub = this._activatedRoute.paramMap.subscribe((params) => {
      console.log(params);
      this.id = Number(params.get('id')) ;
      let products = this._productService.getProducts();
      this.product = products.find((p) => p.productID == this.id)!;
    });

    //You can also use this
    //this.sub=this._activatedRoute.params.subscribe(params => {
    //    this.id = params['id'];
    //    let products=this._productService.getProducts();
    //    this.product=products.find(p => p.productID==this.id);
    //});
  }

  ngOnDestroy() {
    if (this.sub) this.sub.unsubscribe();
  }

  onBack(): void {
    this._router.navigate(['product']);
  }
}
