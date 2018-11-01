import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { HeaderComponent } from './shared/header/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CountriesComponent } from './countries/countries.component';


@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CountriesComponent
  ],
  imports: [
    CommonModule
  ]
  // ,
  // exports: [
  //   HeaderComponent,
  //   FooterComponent,
  //   HomeComponent,
  //   CountriesComponent
  // ]
})
export class PagesModule { }
