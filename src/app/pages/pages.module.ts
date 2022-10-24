import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayoutComponent} from "./layout/layout.component";
import {TopbarComponent} from "./layout/components/topbar/topbar.component";

@NgModule({
  declarations: [
    LayoutComponent,
    TopbarComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PagesModule { }
