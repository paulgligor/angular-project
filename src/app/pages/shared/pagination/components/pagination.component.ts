import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { PaginationModel } from '../models/pagination.model';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() totalItems: number;
  public pageSize: number = 10;
  public pager: PaginationModel = new PaginationModel();

  @Output() onChangePage: EventEmitter<PaginationModel> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  public changePage(page: number){
    this.pager = this.getPager(page);
    this.onChangePage.emit(this.pager);
  }

  private getPager(currentPage: number = 1) {
    // calculate total pages
    const totalPages = Math.ceil(this.totalItems / this.pageSize);

    let startPage: number, endPage: number;

    if (totalPages <= 5) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= 3) {
        startPage = 1;
        endPage = 5;
      } else if (currentPage + 1 >= totalPages) {
        startPage = totalPages - 4;
        endPage = totalPages;
      } else {
        startPage = currentPage - 2;
        endPage = currentPage + 2;
      }
    }

    // calculate start and end item indexes
    const startIndex = (currentPage - 1) * this.pageSize;
    const endIndex = Math.min(startIndex + this.pageSize - 1, this.totalItems - 1);

    // create an array of pages to ng-repeat in the pager control
    const pages = Array.from(Array(endPage + 1 - startPage).keys()).map(
      i => startPage + i
    );

    // return object with all pager properties required by the view
    const pagination: PaginationModel = {
      totalItems: this.totalItems,
      currentPage: currentPage,
      pageSize: this.pageSize,
      totalPages: totalPages,
      startPage: startPage,
      endPage: endPage,
      startIndex: startIndex,
      endIndex: endIndex,
      pages: pages
    };
    return pagination;
  }

}
