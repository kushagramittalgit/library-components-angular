import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MyLibModule } from 'my-lib';
import { CommonModule } from '@angular/common';


@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, MyLibModule,CommonModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
