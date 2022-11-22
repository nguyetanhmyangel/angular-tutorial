import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from '../models/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  pageNo = 0;
  snapshotPageNo = 0;

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.snapshotPageNo = +this.activatedRoute.snapshot.queryParamMap.get('pageNum')! || 0;

    this.activatedRoute.queryParamMap.subscribe((params) => {
      this.pageNo = +params.get('pageNum')! || 0;
      console.log('Query params ', this.pageNo);
    });
  }

  nextPage() {
    this.router.navigate(['product'], {
      queryParams: { pageNum: this.pageNo + 1 },
    });

    //You can also use the navigateByUrl
    //this.router.navigateByUrl('product?pageNum='+(+this.pageNo+1),);
  }

}
