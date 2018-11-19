export class PaginationModel {
  totalItems: number = 0;
  currentPage: number = 1;
  pageSize: number = 9;
  totalPages: number = 0;
  startPage: number = 1;
  endPage: number = 1;
  startIndex: number = 0;
  endIndex: number = 1;
  pages: number[];
}
