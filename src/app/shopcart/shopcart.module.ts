import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { ShopcartComponent } from "./shopcart.component";
import { ShopcartFormComponent } from "./shopcart-form/shopcart-form.component";
import { ShopcartItemComponent } from "./shopcart-item/shopcart-item.component";
import { ShopcartListComponent } from "./shopcart-list/shopcart-list.component";

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    ShopcartFormComponent,
    ShopcartItemComponent,
    ShopcartListComponent,
    ShopcartComponent
  ],
  exports: [
    ShopcartComponent
  ]
})
export class ShopcartModule { }