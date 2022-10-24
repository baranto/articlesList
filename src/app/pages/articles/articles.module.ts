import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesListComponent } from './component/articles-list/articles-list.component';
import { ArticleDetailComponent } from './component/article-detail/article-detail.component';



@NgModule({
  declarations: [
    ArticlesListComponent,
    ArticleDetailComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ArticlesModule { }
