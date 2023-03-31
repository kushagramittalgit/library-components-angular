import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DialogBoxComponent } from './dialog-box/dialog-box.component';
import { DialogboxService } from './dialogbox.service';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [DialogBoxComponent, PaginationComponent],
  imports: [CommonModule],
  providers: [],
  exports: [DialogBoxComponent, PaginationComponent],
})
export class MyLibModule {}
