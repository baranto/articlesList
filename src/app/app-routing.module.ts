import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";

export const routes: Routes = [
  {
    path: 'articles',
    loadChildren: () =>
      import('./pages/articles/articles.module').then(
        (m) => m.ArticlesModule
      ),
  },
  {
    path: '',
    redirectTo: '/articles',
    pathMatch: 'full',
  },
  { path: '**', redirectTo: 'error/404' },
];
@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

