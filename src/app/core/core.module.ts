import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';

import { ManagerService } from './services/manager.service';
import { CountryService } from './services/country/country.service';

@NgModule({
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule
  ],
  declarations: [],
  providers: [
    ManagerService,
    CountryService
  ]
})
export class CoreModule { }
