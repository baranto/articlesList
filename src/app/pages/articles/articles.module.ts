import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesListComponent } from './component/articles-list/articles-list.component';
import { ArticleDetailComponent } from './component/article-detail/article-detail.component';
import {ArticlesRoutingModule} from "./articles-routing.module";

@NgModule({
  declarations: [
    ArticlesListComponent,
    ArticleDetailComponent
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule
  ]
})
export class ArticlesModule { }
