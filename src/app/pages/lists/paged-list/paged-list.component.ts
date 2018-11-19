import { Component, OnInit } from '@angular/core';
import { CountryService } from 'src/app/core/services/country/country.service';
import { CountryModel } from 'src/app/core/models/country.model';
import { PaginationModel } from '../../shared/pagination/models/pagination.model';

@Component({
  selector: 'app-paged-list',
  templateUrl: './paged-list.component.html',
  styleUrls: ['./paged-list.component.scss']
})
export class PagedListComponent implements OnInit {

  public listItems: CountryModel[] = new Array();
  public pager: PaginationModel = new PaginationModel();
  public pagedItems: CountryModel[] = new Array();

  constructor(private countryService: CountryService ) { }

  ngOnInit() {
    this.getList();
  }

  private getList() {
    this.countryService.getList().subscribe(result => {
      this.listItems = result;
    });
  }

  public setPage(pager: PaginationModel) {
    this.pager = pager;
    // get current page of items
    this.pagedItems = this.listItems.slice(this.pager.startIndex, this.pager.endIndex);
  }


}
