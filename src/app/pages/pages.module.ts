import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './shared/header/components/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { CountriesComponent } from './countries/countries.component';
import { PaginationComponent } from './shared/pagination/components/pagination.component';
import { CountryComponent } from './countries/country/country.component';
import { PaginationService } from './shared/pagination/services/pagination.service';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CountriesComponent,
    PaginationComponent,
    CountryComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    CommonModule
  ],
  providers: [
    PaginationService
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    CountriesComponent,
    PaginationComponent
  ]
})
export class PagesModule { }
