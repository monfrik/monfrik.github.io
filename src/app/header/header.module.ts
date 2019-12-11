import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';

import { HeaderNavComponent } from './header-nav/header-nav.component';
import { HeaderRightBarComponent } from './header-right-bar/header-right-bar.component';
import { HeaderComponent } from './header.component'

@NgModule({
  imports: [
    SharedModule
  ],
  declarations: [
    HeaderRightBarComponent,
    HeaderNavComponent,
    HeaderComponent
  ],
  exports: [
    HeaderComponent
  ]
})
export class HeaderModule { }