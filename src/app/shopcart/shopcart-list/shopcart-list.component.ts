import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

import { OrderProduct } from '../shared/OrderProduct';
import { WishProduct } from '../../wish/shared/WishProduct';

import { ShopcartService } from "../shared/shopcart.service";
import { WishService } from "../../wish/shared/wish.service";

@Component({
  selector: 'app-shopcart-list',
  templateUrl: './shopcart-list.component.html',
  styleUrls: ['./shopcart-list.component.scss']
})
export class ShopcartListComponent implements OnInit {

  public shopcart: OrderProduct[] = []

  constructor(
    private shopcartService: ShopcartService,
    private wishService: WishService,
    private _snackBar: MatSnackBar
  ) {
    this.shopcart = shopcartService.getShopcart()
  }

  public ngOnInit(): void { }

  public onDelete(product: OrderProduct): void {
    this.shopcartService.deleteProduct(product)
      .subscribe(() => {
        this.openSnackBar('Удалено')
      })
  }

  private openSnackBar(message: string): void {
    this._snackBar.open(message, 'Ок', {
      duration: 3000
    });
  }

  public onAddCount(product: OrderProduct): void {
    product.count+=1
    this.shopcartService.changeProduct(product)
      .subscribe()
  }
    
  public onReduceCount(product: OrderProduct): void {
    if (product.count > 1) {
      product.count-=1
      this.shopcartService.changeProduct(product)
        .subscribe()
    } 
  }

  public onAddWish(product: OrderProduct): void {
    const date = new Date()
    const dateOfAdoption = date.toLocaleString("ru", {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    })
    const copyProduct = Object.assign({}, product)
    product.dateOfAdoption = dateOfAdoption
    delete product.count
    this.wishService.addProduct(product as WishProduct)
    .subscribe( result => {
      if (result) {
        this.openSnackBar('Добавлено в список желаемого')
        this.shopcartService.deleteProduct(copyProduct)
          .subscribe(() => {})
      } else {
        this.openSnackBar(`${product.name} уже в списке желаемого`)
      }
    })
  }

}
