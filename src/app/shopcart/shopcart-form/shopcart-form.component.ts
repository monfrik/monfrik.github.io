import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-shopcart-form',
  templateUrl: './shopcart-form.component.html',
  styleUrls: ['./shopcart-form.component.scss']
})
export class ShopcartFormComponent implements OnInit {
  static PHONE_PATTERN = /\(\d{3}\)\-\d{3}\-\d{4}/;
  static PHONE_MASK = ['(', /[1-9]/, /\d/, /\d/, ')', '-', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];
  constructor() { }

  public ngOnInit(): void {
  }

}
