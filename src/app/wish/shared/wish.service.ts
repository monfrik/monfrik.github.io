import { Injectable } from '@angular/core'
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http'
import { Observable, of, from } from 'rxjs'
import { catchError, map, tap } from 'rxjs/operators'
import { WishProduct } from '../shared/WishProduct'
import { Product } from "../../main/shared/Product"
import { handleErorr } from '../../shared/handle-error'
import { element } from 'protractor'

@Injectable({
  providedIn: 'root'
})

export class WishService {
  private wishesUrl = 'api/wishes'
  private httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  }
  public wishes: WishProduct[] = []

  constructor(
    private http: HttpClient
  ) {
    this.fetchWishes()
      .subscribe()
  }
    
  public getWishes(): WishProduct[] {
    return this.wishes
  }

  public fetchWishes(): Observable<WishProduct[]> {
    return this.http.get<WishProduct[]>(this.wishesUrl)
      .pipe(
        tap(res => {
          res.forEach(element => {
            this.wishes.push(element)
          })
        }),
        catchError(this.handleError<WishProduct[]>('fetch wishes', []))
      )
  }

  private handleError = handleErorr

  public addProduct(product: WishProduct): Observable<WishProduct> {
    return this.http.post<WishProduct>(this.wishesUrl, product, this.httpOptions).pipe(
      tap((newProductInWishes: WishProduct) => {
        console.log(`added product in wishes list  id=${newProductInWishes.id}`)
        this.wishes.push(newProductInWishes)
      }),
      catchError(this.handleError<WishProduct>('add product'))
    )
  }

  public deleteProduct(product: WishProduct): Observable<WishProduct> {
    return this.http.delete<WishProduct>(`${this.wishesUrl}/${product.id}`).pipe(
      tap(_ => {
        console.log(`product with id = ${product.id} was delete from wish`)
        const index = this.wishes.indexOf(product)
        this.wishes.splice(index, 1)
      }),
      catchError(this.handleError<WishProduct>('delete product'))
    )
  }

}