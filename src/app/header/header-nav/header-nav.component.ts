import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-nav',
  templateUrl: './header-nav.component.html',
  styleUrls: ['./header-nav.component.scss']
})
export class HeaderNavComponent implements OnInit {
  public navList = [
    {name: 'Главная', link: '/main'},
    {name: 'Корзина', link: '/shopcart'},
  ]
  constructor() { }

  ngOnInit() {
  }

}
