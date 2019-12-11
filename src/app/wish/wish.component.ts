import { Component, OnInit } from '@angular/core';
import { WishProduct } from './shared/WishProduct';
import { OrderProduct } from "../shopcart/shared/OrderProduct";
import { WishService } from "./shared/wish.service";
import { ShopcartService } from '../shopcart/shared/shopcart.service'
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatDialog } from '@angular/material/dialog';
import { ShopcartAddModalComponent } from "../shopcart/shared/shopcart-add-modal.component";
import { Observable } from 'rxjs';

@Component({
  selector: 'app-wish',
  templateUrl: './wish.component.html',
  styleUrls: ['./wish.component.scss']
})

export class WishComponent implements OnInit {
  public wishes: WishProduct[] = [];

  constructor(
    private wishService: WishService,
    private _snackBar: MatSnackBar,
    private shopcartService: ShopcartService,
    public _dialog: MatDialog
  ) {
    this.wishes = wishService.getWishes()
  }

  public ngOnInit(): void {}

  public delete(product: WishProduct): void {
    this.wishService.deleteProduct(product)
      .subscribe(() => {
        this.openSnackBar('Удалено')
      })
  }

  private openSnackBar(message: string): void {
    this._snackBar.open(message, 'Ок', {
      duration: 3000
    });
  }

  private openSnackBarAddOrder(product: WishProduct): Observable<OrderProduct> {
    const dialogRef = this._dialog.open(ShopcartAddModalComponent, {
      height: '50%',
      width: '50%',
      data: Object.assign(product, {count:1})
    })
    return dialogRef.afterClosed()
    
  }

  public addShopcart(product: WishProduct): void {
    this.openSnackBarAddOrder(product as WishProduct)
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
              this.wishService.deleteProduct(product)
                .subscribe(() => {})
            } else {
              this.openSnackBar(`${product.name} уже в корзине`)
            }
          })
        }
      })
  }

}
