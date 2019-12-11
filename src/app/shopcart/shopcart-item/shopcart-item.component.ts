import { Component, OnInit } from '@angular/core';
import { Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-shopcart-item',
  templateUrl: './shopcart-item.component.html',
  styleUrls: ['./shopcart-item.component.scss']
})
export class ShopcartItemComponent implements OnInit {
  @Input() product;
  @Output() reduceCount = new EventEmitter();
  @Output() addCount = new EventEmitter();
  @Output() delete = new EventEmitter();
  @Output() addWish = new EventEmitter();
  constructor() { }

  public ngOnInit(): void {
  }

}
