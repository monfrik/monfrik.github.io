import { Component, OnInit } from '@angular/core';
import { OrderProduct } from "../../shopcart/shared/OrderProduct";
import { WishProduct } from "../../wish/shared/WishProduct";
import { ShopcartService } from '../../shopcart/shared/shopcart.service';
import { WishService } from '../../wish/shared/wish.service';

@Component({
  selector: 'app-header-right-bar',
  templateUrl: './header-right-bar.component.html',
  styleUrls: ['./header-right-bar.component.scss']
})
export class HeaderRightBarComponent implements OnInit {
  public wish: WishProduct[] = [];
  public shopcart: OrderProduct[] = [];
  constructor(
    private shopcartService: ShopcartService,
    private wishService: WishService
  ) {
    this.shopcart = shopcartService.getShopcart()
    this.wish = wishService.getWishes()
  }

  public ngOnInit(): void {
  }

}
