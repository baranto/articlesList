import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {MessageService, PrimeNGConfig} from "primeng/api";
import {PagesFacade} from "../../../pages.facade";
import {Router} from "@angular/router";
import {catchError, Subscription, tap, throwError} from "rxjs";
import {getConfigErrorToast} from "../../../../core/helper/config-toast";
import {Product} from "../../models/product";
import {ICustomHttpResponse} from "../../../../core/models/ICustomHttpResponse";
import {Category} from "../../models/category";
import {ICategory} from "../../models/ICategory";

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html'
})
export class ArticlesListComponent implements OnInit, OnDestroy {
  public categories: Array<ICategory> = [];
  public selectedCategory: any;
  public products: Array<Product> = [];

  private subscriptions: Subscription[] = [];

  constructor(
    private pagesFacade: PagesFacade,
    private primengConfig: PrimeNGConfig,
    public messageService: MessageService,
    private cdr: ChangeDetectorRef,
    private router: Router) { }

  ngOnInit() {
    const sb = this.pagesFacade.getProducts().pipe(
      tap((data: ICustomHttpResponse<Array<Product>>) => {
        this.products = data?.body;
        this.getCategories();
      }),
      catchError(err => {
        console.error(err);
        this.messageService.clear();
        this.messageService.add(getConfigErrorToast('Error'));
        this.cdr.detectChanges();
        return throwError(err);
      }),
    ).subscribe();

    this.subscriptions.push(sb);
    this.primengConfig.ripple = true;
  }

  public getCategories(): void {
    const sb = this.pagesFacade.getCategories().pipe(
      tap((categories: Array<Category>) => {
        this.categories = categories.map(category => {
          return {id: category?.id, name: category?.name?.en ?? ''};
        });
      }),
      catchError(err => {
        console.error(err);
        this.messageService.clear();
        this.messageService.add(getConfigErrorToast('Error'));
        this.cdr.detectChanges();
        return throwError(err);
      }),).subscribe();
    this.subscriptions.push(sb);

  }

  public openDetail(product: Product) {
    this.router.navigate(['articles/detail', product?.code]);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sb) => sb.unsubscribe());
  }
}
