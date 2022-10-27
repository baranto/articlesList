import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from "rxjs";
import {Product} from "../models/product";
import {ICustomParams} from "../../../core/models/ICustomParams";
import {createHttpParams} from "../../../core/helper/createHttpParams";
import {Category} from "../models/category";

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  public getProducts(customParams: ICustomParams = {}): Observable<any>{
    const params = createHttpParams(customParams);
    return this.http.get<Array<Product>>('https://strapi.pack.ly/articles',{params, observe: 'response'});
  }

  public getCategories(): Observable<Array<Category>> {
    return this.http.get<Array<Category>>('https://strapi.pack.ly/categories');
  }

  }
