import {ChangeDetectorRef, Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {PagesFacade} from '../../../pages.facade';
import {catchError, Subscription, tap, throwError} from 'rxjs';
import {getConfigErrorToast} from '../../../../core/helper/config-toast';
import {MessageService} from 'primeng/api';
import {Product} from '../../models/product';
import {first, isEmpty} from 'lodash';
import {ICustomParams} from "../../../../core/models/ICustomParams";
import {ICustomHttpResponse} from "../../../../core/models/ICustomHttpResponse";

@Component({
  selector: 'app-article-detail',
  templateUrl: './article-detail.component.html'
})
export class ArticleDetailComponent implements OnInit, OnDestroy {
  public product: Product = new Product();

  private subscriptions: Subscription[] = [];

  constructor(private route: ActivatedRoute,
              private pagesFacade: PagesFacade,
              private messageService: MessageService,
              private cdr: ChangeDetectorRef) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    const customParams: ICustomParams = {};
    customParams.code = id ? id : '';
    const sb = this.pagesFacade.getProducts(customParams).pipe(
      tap((result: ICustomHttpResponse<Array<Product>>) => {
        if (!isEmpty(result)) {
          this.product = first(result.body) as Product;
        }
      }),
      catchError(err => {
        console.error(err);
        this.messageService.clear();
        this.messageService.add(getConfigErrorToast('Error'));
        this.cdr.detectChanges();
        return throwError(err);
      }))
      .subscribe();

    this.subscriptions.push(sb);
  }

  ngOnDestroy(): void {
    this.subscriptions.forEach((sb) => sb.unsubscribe());
  }

}
