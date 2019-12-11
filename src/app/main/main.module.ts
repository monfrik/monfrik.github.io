import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { MainComponent } from "./main.component";
import { MainProductComponent } from "./main-product/main-product.component";

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    MainProductComponent,
    MainComponent
  ],
  exports: [
    MainComponent
  ]
})
export class MainModule { }