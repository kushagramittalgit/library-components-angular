import { Component } from '@angular/core';

@Component({
  selector: 'lib-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent {

  page = 1;
  totalPages = 5;
  pages: number[] = []; 


  constructor() {
    this.calculatePages();
  }

  setPage(page: number) {
    if (page < 1 || page > this.totalPages) {
      return;
    }
    this.page = page;
    this.calculatePages();
  }

  calculatePages() {
    this.pages = [];
    const startPage = Math.max(1, this.page - 3);
    const endPage = Math.min(this.totalPages, this.page + 3);
    for (let i = startPage; i <= endPage; i++) {
      this.pages.push(i);
    }
  }
}
