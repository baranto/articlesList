import { NgModule } from '@angular/core';
import {RouterModule, Routes} from "@angular/router";
import {LayoutComponent} from "./layout/layout.component";

const routes: Routes = [
  {
    path: 'articles',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('./articles/articles.module').then((m) => m.ArticlesModule),
      },
      {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
      },
      {
        path: '**',
        redirectTo: 'error/404',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule { }
