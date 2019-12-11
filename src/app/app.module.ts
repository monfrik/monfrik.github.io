import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule }    from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
 
import { HeaderModule } from './header/header.module';
import { ShopcartModule } from "./shopcart/shopcart.module";
import { WishModule } from "./wish/wish.module";
import { MainModule } from "./main/main.module";
import { SharedModule } from './shared/shared.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService }  from './core/in-memory-data.service';

import { WishComponent } from './wish/wish.component';

@NgModule({
   declarations: [
      AppComponent,
   ],
   imports: [
      BrowserModule,
      AppRoutingModule,
      MatSnackBarModule,
      SharedModule,
      HeaderModule,
      HttpClientModule,
      BrowserAnimationsModule,
      ReactiveFormsModule,
      MainModule,
      MatDialogModule,
      ShopcartModule,
      WishModule,
      HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false })
      // HttpClientInMemoryWebApiModule.forRoot(InMemoryDataService, { dataEncapsulation: false })
   ],
   providers: [
      {
         provide: MatDialogRef,
         useValue: {}
       },
   ],
   exports: [],
   bootstrap: [
      AppComponent
   ]
})
export class AppModule { }
