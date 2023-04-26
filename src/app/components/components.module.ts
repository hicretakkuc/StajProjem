import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {NgxPaginationModule} from "ngx-pagination";
import { MenuCategoryComponent } from './menu-category/menu-category.component';
import { PageTitleComponent } from './page-title/page-title.component';
import { EntriesComponent } from './entries/entries.component';

@NgModule({
  declarations: [MenuCategoryComponent, PageTitleComponent, EntriesComponent],
  imports: [CommonModule, RouterModule,NgxPaginationModule],
  exports: [MenuCategoryComponent,PageTitleComponent,EntriesComponent]
})
export class ComponentsModule {}
