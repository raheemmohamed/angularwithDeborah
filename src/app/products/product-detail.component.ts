import { ProductService } from './product.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { $ } from 'protractor';
import { Iproduct } from './product-interface';

@Component({
  selector: 'pm-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {
  pageTitle;
  // product: Iproduct;
  product: Iproduct;
  ErrorMessage: any;
  constructor(private route: ActivatedRoute, private router: Router, private productService: ProductService) { }

  ngOnInit() {
    const id = +this.route.snapshot.paramMap.get('id');
    // tslint:disable-next-line:quotemark
    this.pageTitle += `: ${id}`;

    if (id) {
      const productId = +id;
      this.getProduct(productId);
    }
  }

  getProduct(id: number) {
    this.productService.getProducts(id).subscribe(
      product => this.product = product,
      error => this.ErrorMessage = <any>error);
  }

  onBack(): void {
    this.router.navigate(['/products']);
  }

}
