import { ProductService } from './product.service';
import { Iproduct } from './product-interface';
import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'pm-products',
    templateUrl: './products.component.html'

})

export class ProductComponent implements OnInit {

    PageTitle = 'Product List';

    showImage = false;

    /* style the DOM element*/
    width = 50;
    margin = 50;

    // filter :any = 'cart';

    _listFilter = '';
    ErrorMessage: any;

    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filter = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    /* Add array the filter properties Interface */
    filter: Iproduct[] = [];

    products: Iproduct[] = [];

    // define a service inject to constructors
    constructor(private productService: ProductService) {
    }

    toggleImage() {
      this.showImage = !this.showImage;
    }
    /* use fto intitialize and retrieve data */
    ngOnInit(): void {
       // tslint:disable-next-line:max-line-length
       // set this products variable instance to get created productService.method = getProduct() /* define on products/product.service.ts file*/
        this.productService.getProduct().subscribe(
            // subcribe a product one way or single value  ;you need multiplem add { //brackets}
            products => {
                this.products = products,
                this.filter = this.products;
            },
            error => this.ErrorMessage = <any>error
        );
    }

    performFilter(filter: string): Iproduct[] {
        filter = filter.toLocaleLowerCase();
        return this.products.filter((products: Iproduct) =>
        products.productName.toLocaleLowerCase().indexOf(filter) !== -1);
      }


    outputClick(message: string): void {
            this.PageTitle = 'Product list' + message;
    }
}
