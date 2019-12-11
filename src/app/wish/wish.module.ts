import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { WishComponent } from "./wish.component";
import { WishItemComponent } from "./wish-item/wish-item.component";
import { WishListComponent } from "./wish-list/wish-list.component";

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    WishItemComponent,
    WishListComponent,
    WishComponent
  ],
  exports: [
    WishComponent
  ]
})
export class WishModule { }