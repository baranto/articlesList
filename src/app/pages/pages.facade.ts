import {Injectable} from "@angular/core";
import {ProductService} from "./articles/services/product.service";
import {Observable} from "rxjs";
import {Product} from "./articles/models/product";
import {ICustomParams} from "../core/models/ICustomParams";
import {ICustomHttpResponse} from "../core/models/ICustomHttpResponse";
import {Category} from "./articles/models/category";

@Injectable({
  providedIn: 'root'
})

export class PagesFacade {

  constructor(
    private productService: ProductService
  ) {
  }

  public getProducts(customParams?: ICustomParams): Observable<ICustomHttpResponse<Array<Product>>> {
    return this.productService.getProducts(customParams);
  }

  public getCategories(): Observable<Array<Category>> {
    return this.productService.getCategories();
  }
}
