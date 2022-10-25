import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {MessageService, PrimeNGConfig, SelectItem} from "primeng/api";
import {PagesFacade} from "../../../pages.facade";
import {Router} from "@angular/router";
import {catchError, Subscription, tap, throwError} from "rxjs";
import {getConfigErrorToast} from "../../../../core/helper/config-toast";
import {Product} from "../../models/product";

@Component({
  selector: 'app-articles-list',
  templateUrl: './articles-list.component.html',
  styleUrls: ['./articles-list.component.css']
})
export class ArticlesListComponent implements OnInit, OnDestroy {
  public products: Array<Product> = [];
  public sortOptions: Array<SelectItem> = [];

  public sortOrder: number = 0;

  public sortField: string = '';

  private subscriptions: Subscription[] = [];

  constructor(
    private pagesFacade: PagesFacade,
    private primengConfig: PrimeNGConfig,
    public messageService: MessageService,
    private cdr: ChangeDetectorRef,
    private router: Router) { }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sb) => sb.unsubscribe());
  }

  ngOnInit() {
    const sb = this.pagesFacade.getProducts().pipe(
      tap(data => this.products = data),
      catchError(err => {
        console.error(err);
        this.messageService.clear();
        this.messageService.add(getConfigErrorToast('Error'));
        this.cdr.detectChanges();
        return throwError(err);
      }),
    ).subscribe();

    this.subscriptions.push(sb);
    this.sortOptions = [
      {label: 'Price High to Low', value: '!price'},
      {label: 'Price Low to High', value: 'price'}
    ];

    this.primengConfig.ripple = true;
  }

  public openDetail() {
    console.log('clicked');
    this.router.navigate(['articles/detail', 1233234]);
  }

}
