import { Injectable } from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from '@angular/common/http';
import { Product } from '../product/product';
import { Observable,throwError } from 'rxjs';
import {tap,catchError} from 'rxjs/operators';

@Injectable()
export class ProductService {

  constructor(private http:HttpClient) { }
  path = "http://localhost:3000/products"
  
  getProducts(categoryId):Observable<Product[]>{

    let newPath = this.path
    if(categoryId){
      newPath = newPath + "?categoryId=" + categoryId
    }
    // categoryId gelirse onu aç gelmezse tüm ürünleri göster dedik

    return this.http.get<Product[]>(newPath).pipe(
      tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  addProduct(product:Product):Observable<Product>{
    const httOptions = {
      headers: new HttpHeaders({
        'Content-Type':'application/json',
        'Authorization':'Token'
      })
    }
    return this.http.post<Product>(this.path,product,httOptions).pipe(
      tap(data=>console.log(JSON.stringify(data))),
      catchError(this.handleError)
    );
  }

  handleError(err: HttpErrorResponse) {
    let errorMessage = ''
   if (err.error instanceof ErrorEvent) {
     errorMessage = "Bir hata oluştu " + err.error.message
   }else{
     errorMessage="Sistemsel bir hata"
   }
   return throwError(errorMessage)
  }
}
