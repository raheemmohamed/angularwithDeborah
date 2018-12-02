import { Iproduct } from './product-interface';
import { Component, OnInit } from '@angular/core';


@Component({
    selector: 'pm-products',
    templateUrl: './products.component.html'
})

export class ProductComponent implements OnInit{

    PageTitle :string = "Product List"

    showImage:boolean = false;

    /* style the DOM element*/
    width:number = 50;
    margin:number = 50;

    // filter :any = 'cart';
    
    _listFilter = '';

    get listFilter(): string {
        return this._listFilter;
    }
    set listFilter(value: string) {
        this._listFilter = value;
        this.filter = this.listFilter ? this.performFilter(this.listFilter) : this.products;
    }

    /* Add array the filter properties Interface */
    filter: Iproduct[] = [];
    

    products: Iproduct[] = [
        {
            "productId": 1,
            "productName": "Leaf Rake",
            "productCode": "GDN-0011",
            "releaseDate": "March 19, 2016",
            "description": "Leaf rake with 48-inch wooden handle.",
            "price": 19.95,
            "starRating": 3.2,
            "imageUrl": "https://openclipart.org/image/300px/svg_to_png/26215/Anonymous_Leaf_Rake.png"
          },
          {
            "productId": 2,
            "productName": "Garden Cart",
            "productCode": "GDN-0023",
            "releaseDate": "March 18, 2016",
            "description": "15 gallon capacity rolling garden cart",
            "price": 32.99,
            "starRating": 4.2,
            "imageUrl": "https://openclipart.org/image/300px/svg_to_png/58471/garden_cart.png"
          },
          {
            "productId": 5,
            "productName": "Hammer",
            "productCode": "TBX-0048",
            "releaseDate": "May 21, 2016",
            "description": "Curved claw steel hammer",
            "price": 8.9,
            "starRating": 4.8,
            "imageUrl": "https://openclipart.org/image/300px/svg_to_png/73/rejon_Hammer.png"
          }
    ];

    
    constructor() {
        this.filter = this.products;
        this.listFilter ='Cart';
    }
  

    toggleImage(){
      this.showImage = !this.showImage;
    }
    /* use fto intitialize and retrieve data */
    ngOnInit():void{
        console.log("Ng Onit initialize");
    }

    performFilter(filter: string): Iproduct[] {
        filter = filter.toLocaleLowerCase();
        return this.products.filter((products: Iproduct) =>
        products.productName.toLocaleLowerCase().indexOf(filter) !== -1);
      }


      outputClick(message : string):void{
             this.PageTitle ="Product list " + message;
      }
}