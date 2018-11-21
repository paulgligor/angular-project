import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';
import { PaginationModel } from '../models/pagination.model';
import { PaginationService } from '../services/pagination.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  @Input() totalItems: number;
  @Input() pageSize: number;
  public pager: PaginationModel = new PaginationModel();

  @Output() onChangePage: EventEmitter<PaginationModel> = new EventEmitter();

  constructor(private paginationService: PaginationService) { }

  ngOnInit() {
  }

  public changePage(page: number){
    this.pager = this.paginationService.getPager(this.totalItems, this.pageSize, page);
    this.onChangePage.emit(this.pager);
  }

  public getLength(){
    var pages = Array.from({ length: this.totalItems }, (v, k) => k + 1);
    var currentPage = this.pager.currentPage;
    var totalPages = this.pager.totalPages;

    var startIndex = currentPage <= 2 ? 0 : currentPage - 3;
    var endIndex = currentPage >= totalPages - 2 ? totalPages : currentPage + 2;
    pages = pages.slice(startIndex, endIndex);
    return pages;
  }
}
