import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';
import {Product} from "../../models/product";

@Component({
  selector: 'app-product-data',
  templateUrl: './product-data.component.html'
})
export class ProductDataComponent implements OnInit, OnChanges {

  @Input() product: Product = new Product();

  constructor() { }

  ngOnInit(): void {
  }

  ngOnChanges(changes: SimpleChanges): void {

  }

}
