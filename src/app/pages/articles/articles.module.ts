import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticlesListComponent } from './component/articles-list/articles-list.component';
import { ArticleDetailComponent } from './component/article-detail/article-detail.component';
import {ArticlesRoutingModule} from "./articles-routing.module";
import {ArticleComponent} from "./article.component";
import {FormsModule} from "@angular/forms";
import {DataViewModule} from "primeng/dataview";
import {DropdownModule} from "primeng/dropdown";
import {RatingModule} from "primeng/rating";
import {ButtonModule} from "primeng/button";

@NgModule({
  declarations: [
    ArticlesListComponent,
    ArticleDetailComponent,
    ArticleComponent
  ],
  imports: [
    CommonModule,
    ArticlesRoutingModule,
    FormsModule,
    DataViewModule,
    DropdownModule,
    RatingModule,
    ButtonModule
  ]
})
export class ArticlesModule { }
