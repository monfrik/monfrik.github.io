import { Component, OnInit } from '@angular/core';
import { ProductsService } from './shared/products.service';
import { ShopcartService } from '../shopcart/shared/shopcart.service';
import { WishService } from "../wish/shared/wish.service";
import { Product } from "./shared/Product";
import { WishProduct } from "../wish/shared/WishProduct";
import { OrderProduct } from "../shopcart/shared/OrderProduct";
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ShopcartAddModalComponent } from "../shopcart/shared/shopcart-add-modal.component";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public products: Product[]
  constructor(
    private productsService: ProductsService,
    private shopcartService: ShopcartService,
    private wishService: WishService,
    private _snackBar: MatSnackBar,
    public _dialog: MatDialog
  ) { }

  ngOnInit() {
    this.getProducts()
  }

  public getProducts(){
    this.productsService.getProducts()
      .subscribe(products => {this.products = products})
  }

  public addWish(product: Product){
    const date = new Date()
    const dateOfAdoption = date.toLocaleString("ru", {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
    const acceptedProduct = <WishProduct> {...product, dateOfAdoption}
    this.wishService.addProduct(acceptedProduct as WishProduct)
    .subscribe( result => {
      if (result) {
        this.openSnackBar('Добавлено в список желаемого')
      } else {
        this.openSnackBar(`${product.name} уже в списке желаемого`)
      }
    })
  }

  public addShopcart(product: Product){
    this.openSnackBarAddOrder(product as Product)
      .subscribe((newOrderProduct: OrderProduct) => {
        if (newOrderProduct) {
          const date = new Date()
          const dateOfAdoption = date.toLocaleString("ru", {
            year: 'numeric',
            month: 'long',
            day: 'numeric',
          })
          const acceptedProduct = <OrderProduct>Object.assign(newOrderProduct, dateOfAdoption)
          this.shopcartService.addProduct(acceptedProduct as OrderProduct)
          .subscribe( result => {
            if (result) {
              this.openSnackBar('Добавлено в корзину')
            } else {
              this.openSnackBar(`${product.name} уже в корзине`)
            }
          })
        }
      })
  }

  private openSnackBar(message: string) {
    this._snackBar.open(message, 'Ок', {
      duration: 3000
    });
  }

  private openSnackBarAddOrder(product: Product): Observable<OrderProduct> {
    const dialogRef = this._dialog.open(ShopcartAddModalComponent, {
      height: '50%',
      width: '50%',
      data: Object.assign(product, {count:1})
    })
    return dialogRef.afterClosed()
    
  }
}