import { Iproduct } from './product-interface';
import { Injectable } from '@angular/core';

// import httpClient
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
// import observable
import { Observable, throwError } from 'rxjs';
// error exception
import {catchError, tap, map} from 'rxjs/operators';

@Injectable(
)

export class ProductService {

    baseUrl = 'http://localhost:4200/products/';

    /* URL product */
    private productURL = 'api/products/products.json';
    product: any;
    constructor(private http: HttpClient) {

    }

    getProduct(): Observable<Iproduct[]> {
        /* <Iproduct = this is generic paramater*/
        return this.http.get<Iproduct[]>(this.productURL).pipe(
            tap(data => console.log('All :' + JSON.stringify(data))), catchError(this.handleError)
        );
    }

    getProducts(id: number): Observable<Iproduct> {
        return this.getProduct().pipe(
            map((products: Iproduct[]) => products.find(p => p.productId === id))
        );
    }

    private handleError(err: HttpErrorResponse) {
        // in a real world app, we may send the server to some remote logging infrastructure
        // instead of just logging it to the console
        let errorMessage = '';
        if (err.error instanceof ErrorEvent) {
          // A client-side or network error occurred. Handle it accordingly.
          errorMessage = `An error occurred: ${err.error.message}`;
        } else {
          // The backend returned an unsuccessful response code.
          // The response body may contain clues as to what went wrong,
          errorMessage = `Server returned code: ${err.status}, error message is: ${err.message}`;
        }
        console.error(errorMessage);
        return throwError(errorMessage);
      }
}
