import { NgModule } from '@angular/core';
import {ArticlesListComponent} from "./component/articles-list/articles-list.component";
import {ArticleDetailComponent} from "./component/article-detail/article-detail.component";
import {RouterModule, Routes} from "@angular/router";

const routes: Routes = [
  {
    path: '',
    component: ArticlesListComponent,
  },
  {
    path: 'detail/:id',
    component: ArticleDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticlesRoutingModule { }
