import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { ApiManagerService } from './services/api-manager.service';
import { CountryService } from './services/country/country.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ApiManagerService,
    CountryService
  ]
})
export class CoreModule { }
