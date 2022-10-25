import { Component, OnInit } from '@angular/core';
import {PrimeNGConfig, SelectItem} from "primeng/api";
import {Product} from "../../models/product";
import {PagesFacade} from "../../../pages.facade";
import {Router} from "@angular/router";

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit {
  public products: Array<Product> = [];

  public sortOptions: Array<SelectItem> = [];

  public sortOrder: number = 0;

  public sortField: string = '';

  constructor(
    private pagesFacade: PagesFacade,
    private primengConfig: PrimeNGConfig,
    private router: Router) { }

  ngOnInit() {
    this.pagesFacade.getProducts().then(data => this.products = data);

    this.sortOptions = [
      {label: 'Price High to Low', value: '!price'},
      {label: 'Price Low to High', value: 'price'}
    ];

    this.primengConfig.ripple = true;
  }

  onSortChange(event: any) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  public openDetail() {
    console.log('clicked');
    this.router.navigate(['articles/detail', 1233234]);
  }

}
