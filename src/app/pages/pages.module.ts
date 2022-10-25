import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {LayoutComponent} from "./layout/layout.component";
import {TopbarComponent} from "./layout/components/topbar/topbar.component";
import {PagesRoutingModule} from "./pages-routing.module";

@NgModule({
  declarations: [
    LayoutComponent,
    TopbarComponent,
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
