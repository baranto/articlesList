import {Injectable} from "@angular/core";
import {ProductService} from "./articles/services/product.service";

@Injectable({
  providedIn: 'root'
})

export class PagesFacade {

  constructor(
    private productService: ProductService
  ) {
  }

  public getProducts() {
    return this.productService.getProducts();
  }
}
