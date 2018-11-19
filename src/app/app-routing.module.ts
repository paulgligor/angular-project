import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './pages/home/home.component';
import { SimpleListComponent } from './pages/lists/simple-list/simple-list.component';
import { PagedListComponent } from './pages/lists/paged-list/paged-list.component';
import { FilteredListComponent } from './pages/lists/filtered-list/filtered-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent, data: { title: 'Home' } },
  { path: 'lists/simple', component: SimpleListComponent, data: { title: 'Simple List Page' } },
  { path: 'lists/paged', component: PagedListComponent, data: { title: 'Paged List Page' } },
  { path: 'lists/filtered', component: FilteredListComponent, data: { title: 'Filtered List Page' } }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
