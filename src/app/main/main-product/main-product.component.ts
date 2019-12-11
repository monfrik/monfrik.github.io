import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-main-product',
  templateUrl: './main-product.component.html',
  styleUrls: ['./main-product.component.scss']
})
export class MainProductComponent implements OnInit {
  @Input() product;
  @Output() wish = new EventEmitter();
  @Output() shopcart = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
