import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../../core/services/country/country.service';
import { CountryModel } from '../../../core/models/country.model';
import { PaginationModel } from '../../shared/pagination/models/pagination.model';
import { PaginationService } from '../../shared/pagination/services/pagination.service';

@Component({
  selector: 'app-paged-list',
  templateUrl: './paged-list.component.html',
  styleUrls: ['./paged-list.component.scss']
})
export class PagedListComponent implements OnInit {

  public listItems: CountryModel[] = new Array();
  public pager: PaginationModel = new PaginationModel();
  public pagedItems: CountryModel[] = new Array();
  public pageSize: number = 10;

  constructor(
    private countryService: CountryService, 
    private paginationService: PaginationService) { }

  ngOnInit() {
    this.getList();
  }

  private getList() {    
    this.countryService.getList().subscribe(result => {
      this.listItems = result;
      this.pager = this.paginationService.getPager(this.listItems.length, this.pageSize);
      this.setPage(this.pager);
    });
  }

  public setPage(pager: PaginationModel) {
    this.pager = pager;
    // get current page of items
    this.pagedItems = this.listItems.slice(this.pager.startIndex, this.pager.endIndex);
  }

}
