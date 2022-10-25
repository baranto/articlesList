import {Injectable} from "@angular/core";
import {ProductService} from "./articles/services/product.service";
import {Observable} from "rxjs";
import {Product} from "./articles/models/product";

@Injectable({
  providedIn: 'root'
})

export class PagesFacade {

  constructor(
    private productService: ProductService
  ) {
  }

  public getProducts(): Observable<Array<Product>> {
    return this.productService.getProducts();
  }
}
