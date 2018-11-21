import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { HeaderComponent } from './shared/header/components/header.component';
import { FooterComponent } from './shared/footer/footer.component';
import { HomeComponent } from './home/home.component';
import { PaginationComponent } from './shared/pagination/components/pagination.component';
import { PaginationService } from './shared/pagination/services/pagination.service';

import { PagedListComponent } from './lists/paged-list/paged-list.component';
import { SimpleListComponent } from './lists/simple-list/simple-list.component';
import { FilteredListComponent } from './lists/filtered-list/filtered-list.component';
import { InfiniteScrollingListComponent } from './lists/infinite-scrolling-list/infinite-scrolling-list.component';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    SimpleListComponent,
    PaginationComponent,
    PagedListComponent,
    FilteredListComponent,
    InfiniteScrollingListComponent
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
    SimpleListComponent,
    PaginationComponent,
    PagedListComponent
  ]
})
export class PagesModule { }
