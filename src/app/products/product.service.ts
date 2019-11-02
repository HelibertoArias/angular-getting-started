import { Injectable } from "@angular/core";
import { IProduct } from "./iproduct";
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private productUrl : string ='api/products/products.json';

  constructor(private http: HttpClient) {

  }
  
  getProducts(): Observable<IProduct[]> {
    return this.http.get<IProduct[]>(this.productUrl)
                .pipe(
                  tap(data => console.log('ALL: ' + JSON.stringify(data))),
                  catchError(this.handleError)
                );
  }


  private handleError(errorResponse: HttpErrorResponse){
    let errorMessage='';

    if(errorResponse.error instanceof ErrorEvent){
      errorMessage = `An Error occurred: ${errorResponse.error.message}`;
    }else{
      errorMessage = `Server returned code ${errorResponse.status}, error message is: ${errorResponse.message}`;

    }
    console.error(errorMessage);

    return throwError(errorMessage);
  }
}
