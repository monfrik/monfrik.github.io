import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable, of, from } from 'rxjs'
import { catchError, map, tap } from 'rxjs/operators'
import { OrderProduct } from "./OrderProduct"
import { Product } from "../../main/shared/Product"
import { handleErorr } from '../../shared/handle-error'

@Injectable({
  providedIn: 'root'
})

export class ShopcartService {
  private shopcartUrl = 'api/shopcart';
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };
  public shopcart: OrderProduct[] = [];

  public getShopcart() {
    return this.shopcart
  }
  constructor(
    private http: HttpClient
  ) {
    this.fetchShopcart()
      .subscribe()
  }


  public fetchShopcart(): Observable<OrderProduct[]> {
    return this.http.get<OrderProduct[]>(this.shopcartUrl)
      .pipe(
        tap(res => {
          res.forEach(element => {
            this.shopcart.push(element)
          })
        }),
        catchError(this.handleError<OrderProduct[]>('getShopcart', []))
      );
  }

  private handleError = handleErorr

  public addProduct(product: OrderProduct): Observable<OrderProduct> {
    return this.http.post<OrderProduct>(this.shopcartUrl, product, this.httpOptions).pipe(
      tap((newProductInShopcart: OrderProduct) => {
        console.log(`added product in shop cart  id=${newProductInShopcart.id}`)
        this.shopcart.push(newProductInShopcart)
      }),
      catchError(this.handleError<OrderProduct>('add product'))
    )
  }

  public deleteProduct(product: OrderProduct): Observable<OrderProduct> {
    return this.http.delete<OrderProduct>(`${this.shopcartUrl}/${product.id}`).pipe(
      tap(_ => {
        console.log(`product with id = ${product.id} was delete from shopcart`)
        const index = this.shopcart.indexOf(product)
        this.shopcart.splice(index, 1)
      }),
      catchError(this.handleError<OrderProduct>('delete product'))
    )
  }

  public changeProduct(product: OrderProduct): Observable<OrderProduct> {
    return this.http.put<OrderProduct>(`${this.shopcartUrl}/${product.id}`, product, this.httpOptions).pipe(
      tap(_ => {
        console.log(`product with id = ${product.id} was update in shopcart`)
        this.shopcart.forEach((element, key) => {
          if (element.id == product.id) {
            this.shopcart[key] = product
            return
          }
        })
      }),
      catchError(this.handleError<OrderProduct>('put product'))
    )
  }

}
